/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [78010],
  {
    84670: (e) => {
      e.exports = {
        ModerateDialogCtn: "_1JFB_3Ek9uIS-ml-7C1V3",
        Flag: "_24i0Jj7bXsdJSJdDY0a4e9",
        ModerateCtn: "_2f8lQGhpOdBN1nDokNV-_v",
        ModerationActionButtons: "_3vIg4OosURoc-guanZbMot",
        OwnerDisputeCtn: "_3o0wdHIoLEIVk2tOl2OyB1",
        EditButton: "MtttYfwYqnHlqj832CGXL",
        ValveOnly: "_1mtaTCIJfR1JZhSZpaPzUo",
        SupervisorOnly: "_2dWYzwO95xQRO7W66aSsH7",
        AcquitIcon: "HA6Hw6Hc332GoPbma_9sZ",
        SanctionIcon: "_3WS1gYqe89ISF4mi7dvtBU",
      };
    },
    50122: (e) => {
      e.exports = {
        TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
        TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
        Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
        "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
        "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
        "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
        "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
      };
    },
    98580: (e) => {
      e.exports = {
        BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
        SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
        OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
        QuickReasons: "_1VdNqwseupCqI68H-YwwZO",
        MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
        ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
      };
    },
    1990: (e) => {
      e.exports = {
        narrowWidth: "500px",
        GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
        GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
        Active: "_8XjrTFzaSA8ubHvHCu44L",
        Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
        GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
        GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
        ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
        GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
        checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
        StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
        VOWarning: "_3LaJynPDFfccGWUEtdltlt",
        StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
        StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
        StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
        StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
      };
    },
    61544: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => ae });
      var r,
        i,
        s = n(7850),
        a = n(28491),
        o = n(83392),
        l = n(20187),
        c = n(48474),
        u = n(45699),
        d = n(76217),
        p = n(43224),
        m = n(63987),
        g = n(12542),
        h = n(75187),
        b = n(22837),
        _ = n(81393),
        j = n(37085),
        y = n(56545),
        x = n(34410),
        v = n(4340),
        w = n(15993),
        f = n(64115),
        B = n(80613),
        M = n.n(B),
        S = n(89068);
      class C extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.quicktext_id || S.Sg(C.M()),
            B.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  requires_update: {
                    n: 2,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  title: { n: 3, br: S.qM.readString, bw: S.gp.writeString },
                  hidden: { n: 4, br: S.qM.readBool, bw: S.gp.writeBool },
                  approved: { n: 5, br: S.qM.readBool, bw: S.gp.writeBool },
                  help_request_types: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                  content: { n: 7, c: z },
                  button_text: {
                    n: 8,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  replacement: { n: 9, br: S.qM.readBool, bw: S.gp.writeBool },
                  payment_methods: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                  appids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                  escalation_level: {
                    n: 12,
                    br: S.qM.readEnum,
                    bw: S.gp.writeEnum,
                  },
                  partner_only: {
                    n: 13,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = S.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new C();
          return C.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickText";
        }
      }
      class z extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.content || S.Sg(z.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  content: { n: 1, br: S.qM.readString, bw: S.gp.writeString },
                  major_revision: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  minor_revision: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  author: { n: 4, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  last_update: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  language: { n: 6, br: S.qM.readInt32, bw: S.gp.writeInt32 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = S.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new z();
          return z.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickTextContent";
        }
      }
      class T extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.quicktext_id || S.Sg(T.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  language: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  from_sql: { n: 3, br: S.qM.readBool, bw: S.gp.writeBool },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = S.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new T();
          return T.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Request";
        }
      }
      class k extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.quicktext || S.Sg(k.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  quicktext: { n: 1, c: C },
                  english_reference: { n: 2, c: z },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = S.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new k();
          return k.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Response";
        }
      }
      class R extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || S.Sg(R.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  log_type: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  version_string: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  log_contents: {
                    n: 4,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  request_id: {
                    n: 5,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = S.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new R();
          return R.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Request";
        }
      }
      class q extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.id || S.Sg(q.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  id: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = S.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new q();
          return q.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Response";
        }
      }
      class U extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || S.Sg(U.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = S.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new U();
          return U.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Request";
        }
      }
      class O extends B.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.request_id || S.Sg(O.M()),
            B.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  request_id: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = S.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (M().BinaryReader)(e),
            n = new O();
          return O.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (M().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (M().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Response";
        }
      }
      !(function (e) {
        e.GetQuickText = function (e, t, n) {
          return e.SendMsg(
            "SupportAgents.GetQuickText#1",
            (0, y.I8)(T, t, n),
            k,
            { bConstMethod: !0, ePrivilege: 5 },
          );
        };
      })(r || (r = {})),
        (function (e) {
          (e.UploadUserApplicationLog = function (e, t, n) {
            return e.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, y.I8)(R, t, n),
              q,
              { ePrivilege: 1 },
            );
          }),
            (e.GetApplicationLogDemand = function (e, t, n) {
              return e.SendMsg(
                "HelpRequestLogs.GetApplicationLogDemand#1",
                (0, y.I8)(U, t, n),
                O,
                { ePrivilege: 1 },
              );
            });
        })(i || (i = {}));
      var I = n(23809),
        F = n(55388),
        A = n(88942),
        N = n(90626),
        D = n(4869),
        W = n(22797),
        L = n(52038),
        E = n(78327),
        P = n(98580),
        G = n.n(P),
        H = n(56061);
      const V = {
        [x.lN]: [v.lV, v.WA, v.XG, v.u1, v.Nd],
        [x.NC]: [v.rf, v.M6, v.WA, v.o8, v.Nd],
      };
      function J(e) {
        var t;
        const [n, i] = (0, N.useState)(null),
          [a, o] = (0, N.useState)("main"),
          [l, u] = (0, N.useState)(!1),
          [g, h] = (0, N.useState)(!1),
          [x, v] = (0, N.useState)(null),
          [B, M] = (0, N.useState)(null),
          [S, C] = (0, N.useState)(null),
          [z, k] = (0, N.useState)(!1),
          [R, q] = (0, N.useState)(!1),
          [U, O] = (0, N.useState)(w.HH),
          [P, J] = (0, N.useState)(""),
          Q =
            void 0 !== e.rtContentCreatedAt &&
            (Date.now() / 1e3 - e.rtContentCreatedAt) / 2592e3,
          Z =
            null !==
              (t = e.subject.subject_type
                ? V[e.subject.subject_type]
                : void 0) && void 0 !== t
              ? t
              : [],
          Y = l || g || x || B || S || z || R,
          X =
            (($ = e.authorSteamID),
            (0, A.I)({
              queryKey: ["get_primary_language_for_user", $],
              queryFn: async () => {
                if ("0" === $ || !$) throw new Error("Invalid steamid");
                const e = await fetch(
                    `${E.TS.COMMUNITY_BASE_URL}profiles/${$}/ajaxlanguagepreferences`,
                  ),
                  t = await e.json();
                if (t.success === j.R) return t.preferences;
                throw new Error(
                  "Failed GetPrimaryLanguageForUser. EResult: " + t.success,
                );
              },
            }));
        var $;
        let K = b.Bhc;
        if (X.isSuccess) {
          const e = X.data;
          void 0 !== e.pref_primary_language && -1 !== e.pref_primary_language
            ? (K = e.pref_primary_language)
            : void 0 !== e.last_logon_langauge &&
              -1 !== e.last_logon_langauge &&
              (K = e.last_logon_langauge);
        }
        const ee = (function (e, t) {
          const n = (0, I.KV)();
          return (0, A.I)({
            queryKey: ["get_quick_text", e, t],
            queryFn: async () => {
              if (null == e || void 0 === t) return null;
              const i = y.w.Init(T);
              i.Body().set_quicktext_id(e),
                i.Body().set_language((0, b.LgB)(t));
              const s = await r.GetQuickText(n, i);
              if (s.GetEResult() !== j.R)
                throw new Error(
                  "useQuickText failed with EResult " + s.GetEResult(),
                );
              return s.Body().toObject();
            },
            enabled: void 0 !== e,
          });
        })((0, m.AH)(n), K);
        (0, N.useEffect)(() => {
          var e, t, n, r, i, s, a;
          J(
            null !==
              (a =
                null !==
                  (r =
                    null ===
                      (n =
                        null ===
                          (t =
                            null === (e = ee.data) || void 0 === e
                              ? void 0
                              : e.quicktext) || void 0 === t
                          ? void 0
                          : t.content) || void 0 === n
                      ? void 0
                      : n.content) && void 0 !== r
                  ? r
                  : null ===
                        (s =
                          null === (i = ee.data) || void 0 === i
                            ? void 0
                            : i.english_reference) || void 0 === s
                    ? void 0
                    : s.content) && void 0 !== a
              ? a
              : "",
          );
        }, [ee.data, X.data]);
        const te = !1,
          ne = !1,
          re = !1;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            "reason" === a &&
              (0, s.jsx)(H.F, {
                reasons: m.UL,
                onSelect: (e) => {
                  i(e), o("main");
                },
              }),
            "main" === a &&
              (0, s.jsxs)(d.Z, {
                children: [
                  (0, s.jsxs)(d.Z, {
                    className: G().SanctionForm,
                    children: [
                      e.sanctionMutation.isError &&
                        (0, s.jsxs)("div", {
                          className: (0, L.A)(G().OneColumn, G().ErrorMessage),
                          children: [
                            (0, s.jsx)(D.Q9b, {}),
                            " Error: ",
                            e.sanctionMutation.error.message,
                          ],
                        }),
                      (0, s.jsx)("label", {
                        htmlFor: "reason",
                        children: "Reason:",
                      }),
                      (0, s.jsx)("button", {
                        id: "reason",
                        className: G().ClickableText,
                        onClick: () => o("reason"),
                        children:
                          null === n
                            ? p.T.Localize(
                                "#commentsanctiondialog_selectreason",
                              )
                            : (0, m.Jt)(n),
                      }),
                      Z.length > 0 &&
                        (0, s.jsx)("div", {
                          className: G().QuickReasons,
                          children: Z.map((e) =>
                            (0, s.jsx)(
                              c.$,
                              {
                                onClick: () => i(n === e ? null : e),
                                size: "1",
                                variant: n === e ? "basic" : "dark",
                                children: (0, m.Jt)(e),
                              },
                              e,
                            ),
                          ),
                        }),
                      (0, s.jsxs)("label", {
                        className: G().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: l,
                            onChange: (e) => u(e.target.checked),
                          }),
                          " Delete",
                        ],
                      }),
                      (0, s.jsxs)("label", {
                        className: G().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: g,
                            onChange: (e) => h(e.target.checked),
                          }),
                          " Issue Warning",
                        ],
                      }),
                      Q &&
                        !!x &&
                        (0, s.jsxs)("div", {
                          className: (0, L.A)(G().OneColumn, G().ErrorMessage),
                          children: [
                            (0, s.jsx)(D.Q9b, {}),
                            " Content is older than 30 days. Are you sure you want to ban?",
                          ],
                        }),
                      e.clanSteamID &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("label", {
                              htmlFor: "hubban",
                              children: "Ban from hub:",
                            }),
                            (0, s.jsxs)("select", {
                              id: "hubban",
                              onChange: (e) =>
                                v(
                                  "0" === e.target.value
                                    ? null
                                    : parseInt(e.target.value),
                                ),
                              value: null != x ? x : 0,
                              children: [
                                (0, s.jsx)("option", {
                                  value: "0",
                                  children: "Do not ban",
                                }),
                                (0, s.jsx)("option", {
                                  value: "1",
                                  children: "1 day",
                                }),
                                (0, s.jsx)("option", {
                                  value: "3",
                                  children: "3 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "7",
                                  children: "7 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "14",
                                  children: "14 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "30",
                                  children: "30 days",
                                }),
                                (0, s.jsx)("option", {
                                  value: "90",
                                  children: "3 months",
                                }),
                                (0, s.jsx)("option", {
                                  value: "365",
                                  children: "1 year",
                                }),
                                (0, s.jsx)("option", {
                                  value: "-1",
                                  children: "Permanent",
                                }),
                              ],
                            }),
                            te,
                          ],
                        }),
                      Q &&
                        !!B &&
                        (0, s.jsxs)("div", {
                          className: (0, L.A)(G().OneColumn, G().ErrorMessage),
                          children: [
                            (0, s.jsx)(D.Q9b, {}),
                            " Content is older than 30 days. Are you sure you want to ban?",
                          ],
                        }),
                      (0, s.jsx)("label", {
                        htmlFor: "communityban",
                        children: "Ban from community:",
                      }),
                      (0, s.jsxs)("select", {
                        id: "communityban",
                        onChange: (e) =>
                          M(
                            "0" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != B ? B : 0,
                        children: [
                          (0, s.jsx)("option", {
                            value: "0",
                            children: "Do not ban",
                          }),
                          (0, s.jsx)("option", {
                            value: "1",
                            children: "1 day",
                          }),
                          (0, s.jsx)("option", {
                            value: "3",
                            children: "3 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "7",
                            children: "7 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "14",
                            children: "14 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "30",
                            children: "30 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "90",
                            children: "3 months",
                          }),
                          (0, s.jsx)("option", {
                            value: "365",
                            children: "1 year",
                          }),
                          (0, s.jsx)("option", {
                            value: "-1",
                            children: "Permanent",
                          }),
                        ],
                      }),
                      ne,
                      (0, s.jsx)("label", {
                        htmlFor: "deletecomments",
                        children: "Delete comments since:",
                      }),
                      (0, s.jsxs)("select", {
                        id: "deletecomments",
                        disabled: R,
                        onChange: (e) =>
                          C(
                            "-1" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != S ? S : -1,
                        children: [
                          (0, s.jsx)("option", {
                            value: "-1",
                            children: "Do not delete",
                          }),
                          (0, s.jsx)("option", {
                            value: "1",
                            children: "1 day",
                          }),
                          (0, s.jsx)("option", {
                            value: "7",
                            children: "7 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "14",
                            children: "14 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "30",
                            children: "30 days",
                          }),
                          (0, s.jsx)("option", {
                            value: "0",
                            children: "All comments",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("span", {
                        className: G().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: z,
                            onChange: (e) => k(e.target.checked),
                          }),
                          " Permanent trade ban",
                        ],
                      }),
                      re,
                      (0, s.jsxs)("span", {
                        className: G().OneColumn,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            checked: R,
                            onChange: (e) => q(e.target.checked),
                          }),
                          " Mark as suspicious",
                        ],
                      }),
                      (0, s.jsx)("label", {
                        htmlFor: "escalateto",
                        children: "Escalate to",
                      }),
                      (0, s.jsxs)("select", {
                        id: "escalateto",
                        onChange: (e) => O(parseInt(e.target.value)),
                        value: U,
                        children: [
                          (0, s.jsx)("option", {
                            value: w.HH,
                            children: "Do not escalate",
                          }),
                          (0, s.jsx)("option", {
                            value: w.lp,
                            children: "Supervisor",
                          }),
                          (0, s.jsx)("option", {
                            value: w.PV,
                            children: "Valve",
                          }),
                        ],
                      }),
                      (0, s.jsx)("textarea", {
                        className: (0, L.A)(G().OneColumn, G().MessageTextArea),
                        placeholder: "Message to send (required)",
                        value: P,
                        onChange: (e) => J(e.target.value),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(d.Z, {
                    className: G().BottomButtons,
                    children: [
                      e.sanctionMutation.isPending &&
                        (0, s.jsx)(W.t, { size: "small" }),
                      !e.sanctionMutation.isPending &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(F.Oh, {
                              onClick: e.onCancel,
                              children: "Cancel",
                            }),
                            (0, s.jsx)(F.n9, {
                              onClick: async () => {
                                (0, _.wT)(
                                  null !== n,
                                  "eReason must be non-null to sanction",
                                );
                                const t = [];
                                l && t.push({ sanction: f.EF }),
                                  g && t.push({ sanction: f.Cv }),
                                  x && t.push({ sanction: f.ME, days: x }),
                                  B && t.push({ sanction: f.sR, days: B }),
                                  S && t.push({ sanction: f.bX, days: S }),
                                  z && t.push({ sanction: f.Fh, days: -1 }),
                                  R && t.push({ sanction: f.X5 }),
                                  U === w.lp
                                    ? t.push({
                                        sanction: f.nw,
                                        escalate_to: w.lp,
                                      })
                                    : U === w.PV &&
                                      t.push({
                                        sanction: f.nw,
                                        escalate_to: w.PV,
                                      }),
                                  await e.sanctionMutation.mutateAsync({
                                    sanctions: t,
                                    message: P.trim(),
                                    reason: n,
                                  }),
                                  e.onSanction();
                              },
                              disabled:
                                null === n || !Y || 0 === P.trim().length,
                              children: "Sanction",
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
      var Q = n(90182),
        Z = n(90314),
        Y = n(68255),
        X = n(84811),
        $ = n(9154),
        K = n(37049),
        ee = n(12155),
        te = n(38135),
        ne = n(32754),
        re = n(62490),
        ie = n(84670),
        se = n.n(ie);
      function ae(e) {
        const { subject: t } = e,
          [n, r] = (0, N.useState)(!1),
          i =
            t &&
            (t.unresolved_report_count > 0 || t.unresolved_dispute_count > 0),
          l = (0, s.jsx)(a.W, {
            onClick: () => r(!0),
            children: (0, s.jsxs)(o.s, {
              direction: "row",
              justify: "between",
              align: "baseline",
              gap: "1",
              children: [
                i &&
                  (0, s.jsx)("img", {
                    className: se().Flag,
                    src: `${E.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                p.T.Localize("#commentsanctiondialog_moderate"),
                t &&
                  t.required_moderator_level === w.PV &&
                  (0, s.jsx)("span", {
                    className: se().ValveOnly,
                    children: "(VO)",
                  }),
                t &&
                  t.required_moderator_level === w.lp &&
                  (0, s.jsx)("span", {
                    className: se().SupervisorOnly,
                    children: "(Supervisor)",
                  }),
              ],
            }),
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            n && (0, s.jsx)(le, { onClose: () => r(!1), ...e }),
            t &&
              (0, s.jsx)(ne.Gq, {
                toolTipContent: (0, s.jsx)(oe, { subject: t }),
                direction: "bottom",
                nDelayShowMS: 0,
                children: l,
              }),
            !t && l,
          ],
        });
      }
      function oe(e) {
        const { subject: t } = e,
          n = (0, N.useMemo)(() => {
            var e;
            const n = (0, re.D5)(
              null !== (e = null == t ? void 0 : t.reports) && void 0 !== e
                ? e
                : [],
              (e) => e.report_reason,
            );
            return n.sort((e, t) => e[1] - t[1]), n;
          }, [t.reports]);
        return 0 === n.length
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("div", {
                  children: p.T.Localize("#reasonlist_title"),
                }),
                n.map(([e, t]) =>
                  (0, s.jsx)(
                    "div",
                    {
                      children: p.T.Localize(
                        "#reasonlist_reasonwithcount",
                        (0, m.Jt)(e),
                        t,
                      ),
                    },
                    e,
                  ),
                ),
              ],
            });
      }
      function le(e) {
        var t, n, r;
        const {
            sanctionMutation: i,
            acquitMutation: a,
            subject: c,
            eSubjectType: d,
            gidComment: b,
            clanSteamID: _,
            authorSteamID: j,
            onClose: y,
          } = e,
          x = null == c ? void 0 : c.reported_content_id,
          [v, w] = (0, N.useState)("main"),
          f = [
            {
              name: "Reports",
              key: "reports",
              contents: (0, s.jsx)(X.tH, {
                children: (0, s.jsx)(g.lX, { subject: c }),
              }),
            },
            {
              name: "History",
              key: "history",
              contents: (0, s.jsx)(X.tH, {
                children: (0, s.jsx)(g.B8, { reportedContentID: x }),
              }),
            },
            {
              name: "Details",
              key: "details",
              contents: (0, s.jsx)(X.tH, { children: e.children }),
            },
          ];
        let B = 0,
          M = 0;
        if (c)
          for (const e of c.reports)
            e.time_resolved && !e.time_disputed && B++,
              e.time_dispute_resolved && M++;
        const S =
            !!(null == c ? void 0 : c.reported_content_id) &&
            !c.owner_dispute_time &&
            c.resolved === Z.S6,
          C = void 0 !== c && !!c.owner_dispute_time;
        return (0, s.jsx)(K.wA, {
          onlyPopoutIfNeeded: !0,
          popupHeight: 340,
          popupWidth: 640,
          strTitle: "Moderate subject",
          children: (0, s.jsx)($.eV, {
            bAllowFullSize: !0,
            title: "Moderate",
            "aria-describedby": "moderate",
            onCancel: e.onClose,
            className: se().ModerateDialog,
            children: (0, s.jsx)(Y.f3, {
              children: (0, s.jsx)(Y.a3, {
                children: (0, s.jsxs)("div", {
                  className: se().ModerateDialogCtn,
                  children: [
                    "main" === v &&
                      (0, s.jsxs)("div", {
                        className: se().ModerateCtn,
                        children: [
                          (0, s.jsxs)("div", {
                            className: se().ModerationData,
                            children: [
                              (0, s.jsxs)(l.EY, {
                                as: "div",
                                size: "3",
                                contrast: "description",
                                children: [
                                  null !==
                                    (t =
                                      null == c
                                        ? void 0
                                        : c.unresolved_report_count) &&
                                  void 0 !== t
                                    ? t
                                    : 0,
                                  " unresolved / ",
                                  B,
                                  " resolved / ",
                                  null !==
                                    (n =
                                      null == c
                                        ? void 0
                                        : c.unresolved_dispute_count) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                                  " disputed / ",
                                  M,
                                  " disputes resolved",
                                ],
                              }),
                              (0, s.jsx)(te.V, {
                                tabs: f,
                                bDisableRouting: !0,
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: se().ModerationActionButtons,
                            children: [
                              (0, s.jsx)("button", {
                                onClick: () => w("sanction"),
                                children: (0, s.jsxs)(o.s, {
                                  direction: "row",
                                  justify: "center",
                                  align: "center",
                                  children: [
                                    (0, s.jsx)(ee.X, {
                                      className: se().SanctionIcon,
                                    }),
                                    " Sanction",
                                  ],
                                }),
                              }),
                              (0, s.jsx)(de, {
                                subject: c,
                                acquitMutation: a,
                                onClose: y,
                              }),
                              (0, s.jsx)(pe, { subject: c, onClose: y }),
                              (0, s.jsx)(u.fu, {
                                disabled: !x,
                                onClick: () => w("escalate"),
                                children: p.T.Localize(
                                  "#moderation_escalation_escalate",
                                ),
                              }),
                              !C &&
                                (0, s.jsx)("button", {
                                  disabled: !S,
                                  onClick: () => w("ownerdispute"),
                                  children: "Owner Dispute",
                                }),
                              C &&
                                (0, s.jsxs)("span", {
                                  children: [
                                    (0, s.jsx)("a", {
                                      href: `${E.TS.HELP_BASE_URL}tickermaster/ticket/${c.owner_dispute_details}`,
                                      children: (0, s.jsx)(l.EY, {
                                        size: "2",
                                        children: p.T.Localize(
                                          "#moderation_already_owner_disputed",
                                        ),
                                      }),
                                    }),
                                    (0, s.jsx)("button", {
                                      disabled: !x,
                                      onClick: () =>
                                        w("editownerdisputedetails"),
                                      className: se().EditButton,
                                      children: (0, s.jsx)(ee.ffu, {}),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    "escalate" === v &&
                      !!x &&
                      (0, s.jsx)(h.R, {
                        reportedContentID: x,
                        onClose: () => w("main"),
                      }),
                    "sanction" === v &&
                      (0, s.jsx)(J, {
                        subject: null != c ? c : { subject_type: d },
                        clanSteamID: _,
                        authorSteamID: j,
                        sanctionMutation: i,
                        onSanction: () => {
                          e.onClose(),
                            1 === window.location.href.split("#").length &&
                              b !== m.Ie &&
                              (window.location.href += "#c" + b),
                            window.location.reload();
                        },
                        onCancel: () => w("main"),
                      }),
                    "ownerdispute" === v &&
                      !!x &&
                      (0, s.jsx)(ue, {
                        reportedContentID: x,
                        onClose: () => w("main"),
                      }),
                    "editownerdisputedetails" === v &&
                      !!x &&
                      (0, s.jsx)(ce, {
                        reportedContentID: x,
                        onClose: () => w("main"),
                        currentDetails:
                          null !==
                            (r =
                              null == c ? void 0 : c.owner_dispute_details) &&
                          void 0 !== r
                            ? r
                            : "",
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function ce(e) {
        const { reportedContentID: t, onClose: n, currentDetails: r } = e,
          [i, a] = (0, N.useState)(r),
          d = (0, Q.wy)(t, i);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("label", {
              children: [
                (0, s.jsx)(l.EY, {
                  size: "2",
                  children: p.T.Localize(
                    "#moderation_editownerdisputedetails_label",
                  ),
                }),
                (0, s.jsx)("input", {
                  type: "text",
                  value: i,
                  onChange: (e) => a(e.target.value),
                }),
              ],
            }),
            (0, s.jsxs)(o.s, {
              justify: "between",
              direction: "row",
              children: [
                (0, s.jsx)(u.fu, {
                  onClick: async () => {
                    await d.mutateAsync(), n();
                  },
                  children: p.T.Localize(
                    "#moderation_editownerdisputedetails_save",
                  ),
                }),
                (0, s.jsx)(c.$, {
                  onClick: n,
                  loading: d.isPending,
                  children: p.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function ue(e) {
        const { reportedContentID: t, onClose: n } = e,
          [r, i] = (0, N.useState)(""),
          a = (0, Q.y4)(t, r);
        return (0, s.jsxs)(d.Z, {
          className: se().OwnerDisputeCtn,
          children: [
            (0, s.jsx)(l.EY, {
              as: "div",
              size: "2",
              children: p.T.Localize("#moderation_ownerdispute_description"),
            }),
            (0, s.jsxs)("label", {
              children: [
                (0, s.jsx)(l.EY, {
                  size: "2",
                  children: p.T.Localize(
                    "#moderation_ownerdispute_ticketmastercode",
                  ),
                }),
                " ",
                (0, s.jsx)("input", {
                  type: "text",
                  value: r,
                  onChange: (e) => i(e.target.value),
                }),
              ],
            }),
            (0, s.jsxs)(o.s, {
              justify: "between",
              direction: "row",
              children: [
                (0, s.jsx)(u.fu, {
                  onClick: async () => {
                    await a.mutateAsync(), n();
                  },
                  children: p.T.Localize("#moderation_ownerdispute_dispute"),
                }),
                (0, s.jsx)(u.fu, {
                  onClick: n,
                  children: p.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function de(e) {
        const { acquitMutation: t, onClose: n, subject: r } = e,
          i =
            r &&
            (r.unresolved_report_count > 0 || r.unresolved_dispute_count > 0);
        return (0, s.jsx)("button", {
          onClick: async () => {
            await t.mutateAsync(void 0), n();
          },
          disabled: !i,
          children: (0, s.jsxs)(o.s, {
            direction: "row",
            justify: "center",
            align: "center",
            children: [
              (0, s.jsx)(ee.jlt, { className: se().AcquitIcon }),
              " ",
              p.T.Localize("#moderation_actions_acquit"),
            ],
          }),
        });
      }
      function pe(e) {
        const { subject: t, onClose: n } = e,
          r =
            !!(null == t ? void 0 : t.reported_content_id) &&
            t.resolved !== Z.z_ &&
            (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
          i = (0, Q.N8)();
        return (0, s.jsx)("button", {
          onClick: async () => {
            (null == t ? void 0 : t.reported_content_id) &&
              (await i.mutateAsync({
                reportedContentID: t.reported_content_id,
              }),
              n());
          },
          disabled: !r,
          children: p.T.Localize("#moderation_actions_sustain"),
        });
      }
    },
    28491: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => p, Y: () => u });
      var r = n(7850),
        i = n(50122),
        s = n(20187),
        a = n(11526),
        o = n(45699),
        l = n(39479),
        c = n(78327);
      function u(e) {
        var t;
        const { underline: n = "auto", focusable: s, navProps: l, ...u } = e,
          p = (0, c.Qn)(),
          m =
            null !== (t = null != s ? s : null == l ? void 0 : l.focusable) &&
            void 0 !== t
              ? t
              : !!u.href,
          g = (0, a.mz)({ ...u, underline: n, className: i.TextLink }, d);
        return p && (m || l)
          ? (0, r.jsx)(o.Ii, { ...g, ...(l || {}), focusable: m })
          : (0, r.jsx)("a", { ...g });
      }
      const d = [
        ...s.Ae,
        { prop: "underline", className: (e) => i[`Underline-${e}`] },
      ];
      function p(e) {
        var t;
        const { underline: n = "auto", focusable: s, navProps: o, ...u } = e,
          p = (0, c.Qn)(),
          m =
            null !== (t = null != s ? s : null == o ? void 0 : o.focusable) &&
            void 0 !== t
              ? t
              : !!u.onClick,
          g = (0, r.jsx)("span", {
            role: "button",
            ...(0, a.mz)(
              { ...u, underline: n, className: i.TextLinkButton },
              d,
            ),
          });
        return p && (m || o)
          ? (0, r.jsx)(l.J, { ...(o || {}), focusable: m, children: g })
          : g;
      }
    },
    95034: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bm: () => a,
        QD: () => l,
        f3: () => s,
        iV: () => u,
        ip: () => c,
        le: () => o,
      });
      var r = n(90626),
        i = n(92757);
      function s(e, t) {
        let n;
        if ("string" == typeof e) n = e;
        else if ("location" in e) n = e.location.search;
        else {
          if (!("search" in e)) return;
          n = e.search;
        }
        const r = new URLSearchParams(n.substring(1));
        if (r.has(t)) {
          const e = r.getAll(t);
          return e[e.length - 1];
        }
      }
      function a(e, t, n, r = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        if (null != n && null != n) {
          if (i.get(t) == n) return;
          i.set(t, n);
        } else {
          if (!i.has(t)) return;
          i.delete(t);
        }
        r
          ? e.replace(`?${i.toString()}`, { ...e.location.state })
          : e.push(`?${i.toString()}`);
      }
      function o(e, t, n) {
        a(e, t, n, !0);
      }
      function l(e, t) {
        const n = (0, i.W6)(),
          o = (0, i.zy)(),
          l = (0, r.useMemo)(() => {
            const n = s(o.search, e);
            return null != n && null != n
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [o.search, e, t]),
          c = (0, r.useCallback)(
            (t, r = !1) => {
              a(n, e, null != t && null != t ? String(t) : null, r);
            },
            [n, e],
          );
        return [l, c];
      }
      function c(e, t, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            r.delete(e), null != n && null != n && r.append(e, n);
          }
        n
          ? e.replace(`?${r.toString()}`, { ...e.location.state })
          : e.push(`?${r.toString()}`);
      }
      function u(e, t) {
        c(e, t, !0);
      }
    },
    38135: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => h, a: () => b });
      var r = n(7850),
        i = n(90626),
        s = n(52038),
        a = n(61859),
        o = n(95034),
        l = n(1990),
        c = n.n(l),
        u = n(32754),
        d = n(51272),
        p = n(76217),
        m = n(23310),
        g = n(92757);
      function h(e) {
        const {
            tabs: t,
            bDisableRouting: n,
            startingTab: a,
            controlledTab: l,
            OnTabChanged: u,
            classNameCtn: d,
            classNameTab: h,
            classNameTabContent: b,
            preferredFocus: j,
            bVerticalTabs: y,
            bSticky: x,
            bChecklistMode: v,
          } = e,
          w = (0, g.zy)(),
          f = (0, g.W6)(),
          [B, M] = (0, i.useState)(() => {
            var e;
            return (
              a ||
              (!n &&
              (0, o.f3)(w, "tab") &&
              null !== (e = (0, o.f3)(w, "tab")) &&
              void 0 !== e
                ? e
                : "")
            );
          });
        (0, i.useEffect)(() => {
          if (!e.bDisableRouting && w) {
            const e = (0, o.f3)(w, "tab");
            e && M(e);
          }
        }, [w, w.key, e.bDisableRouting, M]);
        const S = i.useCallback(
            (e) => {
              M(e.key),
                n || (0, o.Bm)(f, "tab", e.key),
                null == u || u(e.key),
                e.onClick && e.onClick(e);
            },
            [n, f, u],
          ),
          C = t.filter((e) => !e.hidden);
        if (!C.length) return null;
        const z = null != l ? l : B,
          T = C.find((e) => e.key === z) || C[0],
          k = j ? (null != a ? a : C[0].key) : void 0,
          R = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(p.Z, {
                className: (0, s.A)(
                  c().GraphicalAssetsTabs,
                  y && c().GraphicalAssetsTabsVertical,
                  v && c().ChecklistMode,
                  x && c().Sticky,
                  d,
                ),
                navEntryPreferPosition: j ? m.iU.PREFERRED_CHILD : m.iU.FIRST,
                children: C.map((e, t) =>
                  (0, r.jsx)(
                    _,
                    {
                      tab: e,
                      OnTabClick: S,
                      classNameTab: h,
                      active: e.key === T.key,
                      preferredFocus: k === e.key,
                    },
                    e.key,
                  ),
                ),
              }),
              T && (0, r.jsx)(p.Z, { className: b, children: T.contents }),
            ],
          });
        return y
          ? (0, r.jsx)(p.Z, {
              className: (0, s.A)(c().GraphicalAssetsTabsLayoutVertical),
              children: R,
            })
          : R;
      }
      function b(e) {
        const { statusType: t = "success", bShowStatusBox: n, children: i } = e;
        let a = "";
        return (
          "success" === t
            ? (a = c().StatusSuccess)
            : "danger" === t
              ? (a = c().StatusDanger)
              : "caution" === t
                ? (a = c().StatusCaution)
                : "info" === t
                  ? (a = c().StatusInfo)
                  : "incomplete" === t && (a = c().StatusIncomplete),
          (0, r.jsx)("div", {
            className: (0, s.A)(
              c().GraphicalAssetStatus,
              a,
              n ? c().checklistBox : "",
            ),
            children: i,
          })
        );
      }
      function _(e) {
        const {
          tab: t,
          OnTabClick: n,
          classNameTab: i,
          active: o,
          preferredFocus: l,
        } = e;
        return (0, r.jsx)(d.e7, {
          condition: Boolean(t.statusToolTip || t.tooltip),
          wrap: (e) =>
            (0, r.jsx)(u.he, {
              toolTipContent: t.statusToolTip || t.tooltip,
              children: e,
            }),
          children: (0, r.jsxs)(p.Z, {
            className: (0, s.A)(
              c().GraphicalAssetsTab,
              o && c().Active,
              o && "ActiveTab",
              i,
            ),
            onActivate: () => n(t),
            preferredFocus: l,
            children: [
              Boolean(t.vo_warning) &&
                (0, r.jsx)(u.he, {
                  toolTipContent: t.vo_warning,
                  children: (0, r.jsx)("div", {
                    className: c().VOWarning,
                    children: (0, a.we)("#EventEditor_VOWarning"),
                  }),
                }),
              t.status,
              t.name,
            ],
          }),
        });
      }
    },
  },
]);
