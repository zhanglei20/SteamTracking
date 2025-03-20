/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9118],
  {
    19418: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Picker: "tid_OE5NJWCCVJQP1PfRc",
        Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
        Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
        Focus: "_1xH5si_KorJpS4ST2Geksh",
        TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
        Active: "_1ddEQAfz6GuVRSEqk-d0r",
        Content: "dUQIH8Qg80N6kjB8UQO0P",
        ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
        Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
        SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
        SectionTitle: "_3WuFl419BivPeLqeVIC939",
        FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
        FilterInput: "_2l4z-U60lABvd9XWArGjAf",
        AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
      };
    },
    90024: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
        chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
        chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
        chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
        minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
        chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
        EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
        EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
        disabled: "jaQN2IyN4P8LZXJ6P11qy",
        Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
        AudioLines: "IWabakUFeIH_d5rhBZ6dG",
        Active: "_37tPtXtV-sv9XgDHjS2cnj",
      };
    },
    70646: (e) => {
      e.exports = {
        NewEmoticonIndicator: "_3O2gRFANfKKg3mYONXvlcL",
        NewEmoticonCircle: "JRMFrrhowzfdWhJcPIMB1",
        EmoticonSelector: "_1_1QI6qRSlB5SDDnagoV5j",
        emoticon: "AB86vEzEKPL0y5fK_m4pT",
        large: "_4xBaTT5razIZJ5CecJ7s9",
        EmoticonSelector_Emoticons: "XWWY6XX9jHFGKPn7b1-PH",
        EmoticonSelector_Separator: "_2rvMUWTGDDCOa1i9w3vGor",
        EmoticonSelector_SeparatorBackground: "_3_kYchhn19OZ8ClWnlvpFy",
        EmoticonSelector_Controls: "_2cdkFMkQC0EsD9BuCmMauN",
        EmoticonSelector_Item: "_2C8r7RcyTuBVZCJmaoQx_N",
        EmoticonSelector_Item_New: "_1vWJHaLfUABGrsiiY4ubmI",
        EffectHeading: "_2-uNY5pp8tdsmuvnE1mHf2",
        StickerHeading: "_3-4KSMO-yuBSbJzVCdeAbk",
        GetFestive: "_1tX6qGX09u4sZIv2e2UAi1",
        TopDivider: "_2A8FlIBZPAgoEmflXSEbEN",
        BottomDivider: "_2IZ1KVJ-9W5aK6VFegHBqF",
        StickerButton: "_3Wc3jBAd8xYHu8EUsa93VY",
        EffectButton: "nnnSnQuyFsNqDmaSxknlB",
        EmoticonHover: "_36iQ4zr5AiMWVmmiHee0mN",
        Info: "_1EGMuGj8BnVwY9FY_hre1R",
        Name: "_1AncwmbW9wMCUYJFht59NF",
        AppName: "_335w0RQ7aldGlE8E-fqm82",
        StickerHoverSticker: "_2VN79s9aYNt-l_v5Jyv4Xj",
        EffectHoverEffect: "_3ngRvhpTH9vbu5JeIB2iT6",
        PickerTab: "_3JpKJFAvvDJ0Js0f3-arto",
        Clock: "_2osi8r23eZgeNkWUaot-Vz",
        EmoticonItem: "gZL645YbPyHbNeh1a3zfX",
      };
    },
    42780: (e, t, r) => {
      "use strict";
      r.d(t, { K0: () => a, OJ: () => o, R8: () => s });
      var n = r(81393),
        i = r(90626);
      class s {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  i.createElement(
                    "span",
                    {
                      "data-copytext": "",
                      "data-copystyle": "merge-adjacent",
                      "bbcode-text": e,
                    },
                    e,
                  ),
                )
              : this.reactNodes.push(e));
        }
        AppendNode(e) {
          this.reactNodes.push(e);
        }
        GetElements() {
          return this.reactNodes;
        }
      }
      class a {
        constructor(e) {
          (0, n.w)(e, "decorated accumulator cannot be null"),
            (this.m_decoratedAccumulator = e);
        }
        AppendText(e, t = !1) {
          this.m_decoratedAccumulator.AppendText(e, t);
        }
        AppendNode(e) {
          this.m_decoratedAccumulator.AppendNode(e);
        }
        GetElements() {
          return this.m_decoratedAccumulator.GetElements();
        }
      }
      class o extends a {
        constructor(e, t, r) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e;
          const r = [];
          for (
            let e = t.indexOf("\n", this.m_nStartCursor);
            -1 !== e;
            e = t.indexOf("\n")
          )
            r.push(t.substr(0, e)),
              r.push(i.createElement("br")),
              (t = t.substr(e + 1));
          t.length && r.push(t),
            r.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    49693: (e, t, r) => {
      "use strict";
      r.d(t, { op: () => o, CS: () => s, vE: () => c, Al: () => i });
      class n {
        constructor() {
          (this.type = 0), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class i {
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, r = !1) {
          const i = (function (e, t) {
            const r = [];
            let i = new n(),
              s = !1,
              a = !1,
              o = !1;
            for (let n = 0; n < e.length; n++) {
              const c = e[n];
              switch (i.type) {
                case 0:
                  "[" == c
                    ? ((i.type = 2), (a = !0))
                    : ((i.type = 1), "\\" == c && t ? (s = !s) : (i.text += c));
                  break;
                case 2:
                case 3:
                  if ("/" == c && a) (i.type = 3), (i.text = ""), (a = !1);
                  else if ("[" != c || s)
                    if ("]" != c || s)
                      "\\" == c && t
                        ? ((i.text += c), (s = !s), (a = !1))
                        : ((i.text += c), (s = !1), (a = !1));
                    else {
                      const e =
                          2 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          3 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase();
                      a || (o && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += c))
                        : e
                          ? (o = !0)
                          : t && (o = !1),
                        (i = l(r, i)),
                        (a = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(), (i = l(r, i, 2)), (a = !0);
                  break;
                case 1:
                  "[" != c || s
                    ? "\\" == c && t
                      ? (s && (i.text += c), (s = !s))
                      : ((i.text += c), (s = !1))
                    : ((i = l(r, i, 2)), (a = !0));
              }
            }
            0 != i.type &&
              ((2 != i.type && 3 != i.type) || i.ConvertMalformedNodeToText(),
              r.push(i));
            return r;
          })(e || "", r);
          return this.Parse_BuildElements(i, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            i = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            s = this.m_dictComponents,
            a = (e) => {
              var t;
              return !(
                !e.tag ||
                !(null === (t = s.get(e.tag)) || void 0 === t
                  ? void 0
                  : t.autocloses)
              );
            };
          let o = !1,
            c = !0;
          const l = (e, i) => {
            if (e && e.node.tag === i.text && s.get(e.node.tag)) {
              const i = s.get(e.node.tag),
                a = n.map((e) => e.node.tag),
                l = { parentTags: a, tagname: e.node.tag, args: e.node.args },
                m = t(i.Constructor, l, ...r.GetElements());
              (r = e.accumulator),
                Array.isArray(m)
                  ? m.forEach((e) => r.AppendNode(e))
                  : r.AppendNode(m),
                (o = !!i.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                r.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + i.text + "]", !1),
                (r = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var m, u;
              if (1 == e.type) {
                const t = o ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, c), (o = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const a = i();
                  if (void 0 !== a) {
                    const t = s.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      l(n.pop(), a.node);
                  }
                  n.push({ accumulator: r, node: e, bWrapTextForCopying: c }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (o = !!t.skipInternalNewline),
                    (c =
                      null !== (m = t.allowWrapTextForCopying) &&
                      void 0 !== m &&
                      m);
                } else r.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (; i() && i().node.tag !== e.text && a(i().node); ) {
                  const e = n.pop();
                  l(e, e.node);
                }
                if (
                  (null === (u = i()) || void 0 === u ? void 0 : u.node.tag) ==
                  e.text
                ) {
                  const t = n.pop();
                  l(t, e);
                } else r.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;
          ) {
            const e = n.pop();
            l(e, e.node);
          }
          return r.GetElements();
        }
      }
      function s(e, t) {
        let r = "[" + e;
        (null == t ? void 0 : t[""]) && (r += `=${a("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (r += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${a("" + t[e])}`);
        var n;
        return (r += "]"), r;
      }
      function a(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function o(e) {
        return `[/${e}]`;
      }
      function c(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function l(e, t, r = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const r = t.text.indexOf(" ");
          if ((-1 != r && (-1 == e || r < e) && (e = r), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const r = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let r = "",
                n = "",
                i = 0,
                s = 0;
              "=" == e[0] && (i = 2);
              let a = !1;
              for (s++; s < e.length; s++) {
                const o = e[s];
                let c = !0,
                  l = !1;
                switch (i) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    i = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      a ||
                      (" " == o ? ((i = 0), (l = !0)) : (i = 2), (c = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((i = 0), (c = !1), (l = !0))
                      : '"' == o
                        ? ((i = 4), (c = !1))
                        : (i = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != i && !a) ||
                      ('"' == o && 4 == i && !a)) &&
                      ((i = 0), (c = !1), (l = !0));
                }
                if (c)
                  if ("\\" != o || a)
                    if (((a = !1), 1 == i)) r += o;
                    else {
                      if (3 != i && 4 != i)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + i,
                        );
                      n += o;
                    }
                  else a = !0;
                l && ((t[r] = n), (r = ""), (n = ""));
              }
              0 != i && (t[r] = n);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const i = new n();
        return (i.type = r), i;
      }
    },
    52967: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => o });
      var n = r(22837),
        i = r(90626),
        s = r(42780),
        a = r(49693);
      class o extends a.Al {
        constructor(e, t, r) {
          super(e, null != t ? t : () => new s.R8()),
            (this.m_renderingLanguage =
              "string" == typeof r ? (0, n.sf)(r) : r);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, r = !1) {
          let n = 0;
          const s = this.Parse(
            e,
            (e, r, ...s) =>
              i.createElement(
                e,
                {
                  ...r,
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + n++,
                },
                ...s,
              ),
            r,
          );
          return s.length > 1
            ? i.createElement(i.Fragment, null, ...s)
            : 1 == s.length
              ? s[0]
              : null;
        }
      }
    },
    58222: (e, t, r) => {
      "use strict";
      r.d(t, {
        $P: () => y,
        Fw: () => c,
        cU: () => u,
        fp: () => f,
        nS: () => w,
        uy: () => n,
      });
      var n,
        i = r(80613),
        s = r.n(i),
        a = r(89068),
        o = r(56545);
      function c(e) {
        return "unknown EVirtualItemRewardEvent ( " + e + " )";
      }
      class l extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.communityitemid || a.Sg(l.M()),
            i.Message.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  item_type: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appid: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  owner: { n: 4, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  attributes: { n: 5, c: m, r: !0, q: !0 },
                  used: { n: 6, br: a.qM.readBool, bw: a.gp.writeBool },
                  owner_origin: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  amount: {
                    n: 8,
                    br: a.qM.readInt64String,
                    bw: a.gp.writeInt64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem";
        }
      }
      class m extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.attributeid || a.Sg(m.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  attributeid: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  value: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class u extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.filter_appids || a.Sg(u.M()),
            i.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  filter_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class d extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.items || a.Sg(d.M()),
            i.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { items: { n: 1, c: l, r: !0, q: !0 } },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class p extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || a.Sg(p.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  item_type: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  language: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                  broadcast_channel_id: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  keyvalues_as_json: {
                    n: 6,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Request";
        }
      }
      class g extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.item_definitions || a.Sg(g.M()),
            i.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { item_definitions: { n: 1, c: h, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class h extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.item_type || a.Sg(h.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  item_type: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  item_name: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_title: {
                    n: 4,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_description: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_image_small: {
                    n: 6,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_image_large: {
                    n: 7,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_key_values: {
                    n: 8,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_series: {
                    n: 9,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  item_class: {
                    n: 10,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  editor_accountid: {
                    n: 11,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  active: { n: 12, br: a.qM.readBool, bw: a.gp.writeBool },
                  item_image_composed: {
                    n: 13,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_image_composed_foil: {
                    n: 14,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  deleted: { n: 15, br: a.qM.readBool, bw: a.gp.writeBool },
                  item_last_changed: {
                    n: 16,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  broadcast_channel_id: {
                    n: 17,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  item_movie_webm: {
                    n: 18,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_movie_mp4: {
                    n: 19,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_movie_webm_small: {
                    n: 20,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 21,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_internal_name: {
                    n: 22,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class f extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || a.Sg(f.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  activate: { n: 3, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Request";
        }
      }
      class _ extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class E extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.timestamp_start || a.Sg(E.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  timestamp_start: {
                    n: 1,
                    d: 0,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  timestamp_end: {
                    n: 2,
                    d: 4294967295,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class S extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.num_trading_cards || a.Sg(S.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class w extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.eventid || a.Sg(w.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  eventid: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  include_inactive: {
                    n: 2,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Request";
        }
      }
      class b extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.eventid || a.Sg(b.M()),
            i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  eventid: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  item_bucket: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appid: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  active: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  rarity: { n: 5, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  package_to_grant: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  game_item_id: {
                    n: 7,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  community_item_class: {
                    n: 8,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  community_item_type: {
                    n: 9,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  loyalty_point_type: {
                    n: 10,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  amount: {
                    n: 11,
                    br: a.qM.readInt64String,
                    bw: a.gp.writeInt64String,
                  },
                  rtime_time_active: {
                    n: 12,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  loyalty_reward_defid: {
                    n: 13,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  user_badge_to_grant: {
                    n: 14,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  user_badge_level: {
                    n: 15,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  virtual_item_def_id: {
                    n: 16,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVirtualItemRewardDefinition";
        }
      }
      class B extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.rewards || a.Sg(B.M()),
            i.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { rewards: { n: 1, c: b, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      class y extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.eventid || a.Sg(y.M()),
            i.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  eventid: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  itemsdefs: { n: 2, c: b, r: !0, q: !0 },
                  action: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Request";
        }
      }
      class M extends i.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_SetVirtualItemRewardDefinition_Response";
        }
      }
      !(function (e) {
        (e.GetCommunityInventory = function (e, t) {
          return e.SendMsg(
            "Quest.GetCommunityInventory#1",
            (0, o.I8)(u, t),
            d,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCommunityItemDefinitions = function (e, t) {
            return e.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, o.I8)(p, t),
              g,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }),
          (e.ActivateProfileModifierItem = function (e, t) {
            return e.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, o.I8)(f, t),
              _,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNumTradingCardsEarned = function (e, t) {
            return e.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, o.I8)(E, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, o.I8)(w, t),
              B,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetVirtualItemRewardDefinition = function (e, t) {
            return e.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, o.I8)(y, t),
              M,
              { ePrivilege: 4 },
            );
          });
      })(n || (n = {}));
    },
    65739: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => o, s: () => c });
      var n = r(78327),
        i = r(14947),
        s = r(41735),
        a = r.n(s);
      class o {
        constructor() {
          (this.m_mapEmoticonHovers = i.sH.map()),
            (this.m_inflightRequests = {});
        }
        Get(e) {
          return this.m_mapEmoticonHovers.has(e) || this.m_inflightRequests[e]
            ? this.m_mapEmoticonHovers.get(e)
            : (this.Load(e), null);
        }
        BLoaded(e) {
          return !!this.m_mapEmoticonHovers.get(e);
        }
        async Load(e) {
          const t = `${n.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(n.TS.LANGUAGE)}&origin=${(0, n.xv)()}`;
          this.m_inflightRequests[e] = !0;
          try {
            const { data: r } = await a().get(t);
            !(function (e) {
              return (
                e &&
                "object" == typeof e &&
                "number" == typeof e.appid &&
                "string" == typeof e.app_name
              );
            })(r)
              ? this.m_mapEmoticonHovers.set(e, null)
              : this.m_mapEmoticonHovers.set(e, r);
          } catch (t) {
            this.m_mapEmoticonHovers.set(e, null);
          } finally {
            this.m_inflightRequests[e] = !1;
          }
        }
      }
      const c = new o();
    },
    23649: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => c });
      var n = r(52967),
        i = r(90626),
        s = r(59952),
        a = r(42780);
      function o(e) {
        return new a.OJ(new a.R8(), 0);
      }
      function c(e) {
        const { text: t, languageOverride: r } = e,
          [a] = (0, i.useState)(
            new n.B(new Map([...Array.from(s.W4.entries())]), o, r),
          );
        return i.createElement(i.Fragment, null, a.ParseBBCode(t, {}));
      }
    },
    31698: (e, t, r) => {
      "use strict";
      r.d(t, {
        Q4: () => W,
        nl: () => F,
        iY: () => j,
        CE: () => G,
        iD: () => re,
      });
      var n = r(34629),
        i = r(14947),
        s = r(75844),
        a = r(90626),
        o = r(6336),
        c = r(30193),
        l = r(55263);
      function m(e) {
        const { text: t = "", style: r, children: n } = e;
        if (null == t) return a.createElement(a.Fragment, null, n);
        let i;
        if (
          ((i =
            t instanceof Array
              ? t
                  .map((e) => (e ? e.toString() : ""))
                  .filter((e) => e.length > 0)
                  .join("\n")
              : t.toString()),
          1 == a.Children.count(n))
        ) {
          let e = a.Children.only(n);
          return a.cloneElement(e, { "data-copystyle": r, "data-copytext": i });
        }
        return (
          console.log(
            `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${r} copytext=${i}`,
          ),
          a.createElement(a.Fragment, null, n)
        );
      }
      var u = r(60155),
        d = r(52038),
        p = r(61859),
        g = r(73745);
      function h(e, t) {
        return e + "economy/sticker/" + encodeURIComponent(t);
      }
      var f = r(78327),
        _ = r(33737),
        E = r(76217),
        S = r(88006),
        w = r(19418);
      class b extends a.Component {
        constructor(e) {
          super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 });
        }
        render() {
          const { config: e } = this.props,
            { activeIndex: t } = this.state,
            r = e[t] && e[t].renderContent ? e[t].renderContent() : null,
            n = e.length > 1,
            i = n
              ? ({ detail: { button: t } }) => {
                  t === S.pR.BUMPER_LEFT
                    ? this.setState({
                        activeIndex: Math.max(0, this.state.activeIndex - 1),
                      })
                    : t === S.pR.BUMPER_RIGHT &&
                      this.setState({
                        activeIndex: Math.min(
                          e.length - 1,
                          this.state.activeIndex + 1,
                        ),
                      });
                }
              : void 0;
          return a.createElement(
            E.Z,
            { className: w.Picker, onButtonDown: i },
            n && a.createElement(B, null, this.RenderTabs()),
            r,
          );
        }
        RenderTabs() {
          return this.props.config.map(({ renderTab: e }, t) => {
            const r = this.state.activeIndex === t;
            return a.createElement(
              M,
              {
                key: t,
                active: r,
                onClick: () => this.setState({ activeIndex: t }),
              },
              e(r),
            );
          });
        }
      }
      function B(e) {
        return a.createElement(
          E.Z,
          { className: w.Tabs, "flow-children": "row" },
          e.children,
        );
      }
      function y(e) {
        return a.createElement("div", { className: w.Content }, e.children);
      }
      function M(e) {
        const { active: t, children: r, onClick: n } = e;
        return a.createElement(
          E.Z,
          {
            className: (0, d.A)(w.Tab, t && w.Active),
            focusClassName: w.Focus,
            onActivate: n,
          },
          a.createElement(
            "div",
            { className: (0, d.A)(w.TabContent, t && w.Active) },
            r,
          ),
        );
      }
      function v(e) {
        const {
          items: t,
          renderItem: r,
          onItemSelect: n,
          keyExtractor: i,
          renderEmpty: s,
        } = e;
        let o = t.map((e, s) =>
          a.createElement(
            E.Z,
            {
              key: i(e),
              className: w.Item,
              onActivate: () => n(t[s]),
              autoFocus: 0 === s,
              focusClassName: w.Focus,
            },
            r(t[s]),
          ),
        );
        return (
          0 === t.length && s && (o = s()),
          a.createElement(
            E.Z,
            { "flow-children": "grid", className: w.ItemList },
            o,
          )
        );
      }
      function C(e) {
        const { title: t, onFilterChange: r, filter: n, onSubmit: i, ...s } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            y,
            null,
            a.createElement(z, { title: t }, a.createElement(v, { ...s })),
          ),
          a.createElement(A, { value: n, onChange: r, onSubmit: i }),
        );
      }
      function I(e) {
        const { onFilterChange: t, filter: r, sections: n, title: i } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            y,
            null,
            i && a.createElement("div", { className: w.SectionedPageTitle }, i),
            n.map(({ title: e, ...t }) =>
              a.createElement(
                z,
                { title: e, key: e },
                a.createElement(v, { ...t }),
              ),
            ),
          ),
          a.createElement(A, { value: r, onChange: t }),
        );
      }
      function z(e) {
        return a.createElement(
          "div",
          { className: w.Section },
          a.createElement("div", { className: w.SectionTitle }, e.title),
          a.createElement("div", { className: w.SectionContent }, e.children),
        );
      }
      function A(e) {
        const { value: t, onChange: r, onSubmit: n } = e;
        return a.createElement(
          "div",
          { className: w.FilterInputContainer },
          a.createElement(_.pd, {
            type: "text",
            placeholder: "Search...",
            className: w.FilterInput,
            value: t,
            onChange: (e) => r(e.target.value),
            onSubmit: n,
          }),
        );
      }
      function R(e) {
        const { className: t, ...r } = e;
        return a.createElement("div", {
          className: (0, d.A)(t, w.AddonPickerMessage),
          ...r,
        });
      }
      var T = r(70646),
        k = r.n(T),
        N = r(51272);
      class F extends a.PureComponent {
        constructor() {
          super(...arguments),
            (this.state = { showHover: !1 }),
            (this.m_ref = a.createRef());
        }
        OnMouseEnter(e) {
          this.setState({ showHover: !0 });
        }
        OnMouseLeave(e) {
          this.setState({ showHover: !1 });
        }
        render() {
          const { emoticon: e, large: t, emoticonHoverStore: r } = this.props,
            n = `:${e}:`,
            i = t && r.BLoaded(e) ? r.Get(e).url : c.p.GetEmoticonURL(e, t);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              m,
              { text: n, style: "merge-adjacent" },
              a.createElement("img", {
                src: i,
                className: (0, d.A)(k().emoticon, t ? k().large : void 0),
                "data-emoticon": e,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                ref: this.m_ref,
              }),
            ),
            this.state.showHover &&
              a.createElement(x, {
                target: this.m_ref.current,
                store: r,
                emoticon: e,
              }),
          );
        }
      }
      (0, n.Cg)([g.oI], F.prototype, "OnMouseEnter", null),
        (0, n.Cg)([g.oI], F.prototype, "OnMouseLeave", null);
      const x = (0, s.PA)((e) => {
          const { target: t, store: r, emoticon: n } = e,
            i = r.Get(n);
          return a.createElement(
            U,
            {
              target: t,
              title: `:${n}:`,
              subtitle: i && i.app_name ? i.app_name : void 0,
            },
            a.createElement(F, {
              emoticon: n,
              emoticonHoverStore: r,
              large: !0,
            }),
          );
        }),
        U = ({ target: e, title: t, subtitle: r, children: n }) =>
          a.createElement(
            o.g,
            {
              target: e,
              style: { zIndex: 1700 },
              className: k().EmoticonHover,
            },
            n,
            a.createElement(
              "div",
              { className: k().Info },
              a.createElement(
                "div",
                { className: k().Name },
                t || a.createElement("span", null, " "),
              ),
              a.createElement(
                "div",
                { className: k().AppName },
                r || a.createElement("span", null, " "),
              ),
            ),
          );
      function O(e) {
        return e.recent_emoticons;
      }
      function P(e) {
        return e.recent_stickers;
      }
      function q(e) {
        return O(e).length + P(e).length > 0;
      }
      const W = (0, s.PA)((e) => {
        const {
          emoticonStore: t,
          emoticonHoverStore: r,
          roomEffectSettings: n,
          strFlairGroupID: s,
          onEmoticonSelected: o,
          onRoomEffectSelected: c,
          onStickerSelected: l,
        } = e;
        !(function (e) {
          const [t, r] = (0, a.useState)(e.is_initialized);
          (0, a.useEffect)(() => {
            if (!e.is_initialized) {
              e.UpdateEmoticonList();
              const t = (0, i.z7)(
                () => e.is_initialized,
                () => r(e.is_initialized),
              );
              return () => t();
            }
            return () => {};
          }, [e]);
        })(t);
        const m = [];
        return (
          q(t) &&
            m.push({
              renderTab: (e) =>
                a.createElement(
                  "span",
                  {
                    title: (0, p.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, d.A)(
                      k().PickerTab,
                      k().Clock,
                      e && k().ActiveTab,
                    ),
                  },
                  a.createElement(ae, null),
                ),
              renderContent: () =>
                a.createElement(H, {
                  store: t,
                  hoverStore: r,
                  onEmoticonSelect: (e) => o(e.name),
                  onStickerSelect: (e) => l(e.name),
                  flairGroupID: s,
                }),
            }),
          a.createElement(
            u.tz,
            null,
            a.createElement(b, {
              config: [
                ...m,
                {
                  renderTab: (e) =>
                    a.createElement(
                      "span",
                      {
                        title: (0, p.we)("#AddonPicker_Emoticons"),
                        className: (0, d.A)(k().PickerTab, e && k().ActiveTab),
                      },
                      a.createElement(ie, null),
                    ),
                  renderContent: () =>
                    a.createElement(D, {
                      store: t,
                      hoverStore: r,
                      onItemSelect: (e) => o(e.name),
                      flairGroupID: s,
                    }),
                },
                {
                  renderTab: (e) =>
                    a.createElement(
                      "span",
                      {
                        title: (0, p.we)("#AddonPicker_Stickers"),
                        className: (0, d.A)(k().PickerTab, e && k().ActiveTab),
                      },
                      a.createElement(ne, null),
                    ),
                  renderContent: () =>
                    a.createElement(Q, {
                      store: t,
                      onItemSelect: (e) => l(e.name),
                    }),
                },
                {
                  renderTab: (e) =>
                    a.createElement(
                      "span",
                      {
                        title: (0, p.we)("#AddonPicker_RoomEffects"),
                        className: (0, d.A)(k().PickerTab, e && k().ActiveTab),
                      },
                      a.createElement(se, null),
                    ),
                  renderContent: () =>
                    a.createElement(Z, {
                      store: t,
                      effectSettings: n,
                      onItemSelect: (e) => c(e.name),
                    }),
                },
              ],
            }),
          )
        );
      });
      let L = class extends a.Component {
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, i.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          const {
              emoticonStore: e,
              emoticonHoverStore: t,
              onEmoticonSelected: r,
              onStickerSelected: n,
              strFlairGroupID: i,
            } = this.props,
            s = [];
          return (
            q(e) &&
              s.push({
                renderTab: (e) =>
                  a.createElement(
                    "span",
                    {
                      title: (0, p.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, d.A)(
                        k().PickerTab,
                        k().Clock,
                        e && k().ActiveTab,
                      ),
                    },
                    a.createElement(ae, null),
                  ),
                renderContent: () =>
                  a.createElement(H, {
                    store: e,
                    hoverStore: t,
                    onEmoticonSelect: (e) => r(e.name),
                    onStickerSelect: (e) => n(e.name),
                    flairGroupID: i,
                  }),
              }),
            a.createElement(
              u.tz,
              null,
              a.createElement(b, {
                config: [
                  ...s,
                  {
                    renderTab: (e) =>
                      a.createElement(
                        "span",
                        {
                          title: (0, p.we)("#AddonPicker_Emoticons"),
                          className: (0, d.A)(
                            k().PickerTab,
                            e && k().ActiveTab,
                          ),
                        },
                        a.createElement(ie, null),
                      ),
                    renderContent: () =>
                      a.createElement(D, {
                        store: e,
                        hoverStore: t,
                        onItemSelect: (e) => r(e.name),
                        flairGroupID: i,
                      }),
                  },
                  {
                    renderTab: (e) =>
                      a.createElement(
                        "span",
                        {
                          title: (0, p.we)("#AddonPicker_Stickers"),
                          className: (0, d.A)(
                            k().PickerTab,
                            e && k().ActiveTab,
                          ),
                        },
                        a.createElement(ne, null),
                      ),
                    renderContent: () =>
                      a.createElement(Q, {
                        store: e,
                        onItemSelect: (e) => n(e.name),
                      }),
                  },
                ],
              }),
            )
          );
        }
      };
      L = (0, n.Cg)([s.PA], L);
      class j extends a.Component {
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, i.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return a.createElement(
            u.tz,
            null,
            a.createElement(b, {
              config: [
                {
                  renderTab: () =>
                    a.createElement(
                      "span",
                      {
                        title: (0, p.we)("#AddonPicker_Emoticons"),
                        className: k().PickerTab,
                      },
                      a.createElement(ie, null),
                    ),
                  renderContent: () =>
                    a.createElement(J, {
                      store: this.props.emoticonStore,
                      hoverStore: this.props.emoticonHoverStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class G extends a.Component {
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, i.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return a.createElement(
            u.tz,
            null,
            a.createElement(b, {
              config: [
                {
                  renderTab: () =>
                    a.createElement(
                      "span",
                      {
                        title: (0, p.we)("#AddonPicker_Emoticons"),
                        className: k().PickerTab,
                      },
                      a.createElement(ie, null),
                    ),
                  renderContent: () =>
                    a.createElement($, {
                      store: this.props.emoticonStore,
                      hoverStore: this.props.emoticonHoverStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          );
        }
      }
      class H extends a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onEmoticonSelect: r,
              onStickerSelect: n,
            } = this.props,
            { filter: i } = this.state,
            s = [];
          return (
            O(e) &&
              s.push({
                title: (0, p.we)("#AddonPicker_RecentEmoticons"),
                items: c.p.FilterEmoticons(O(e), i),
                onItemSelect: r,
                renderItem: (e) =>
                  a.createElement(Y, { emoticon: e, emoticonHoverStore: t }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  a.createElement(
                    R,
                    null,
                    i
                      ? (0, p.we)("#AddonPicker_NoResults")
                      : (0, p.we)(
                          "#AddonPicker_NoRecent",
                          (0, p.we)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            P(e).length &&
              s.push({
                title: (0, p.we)("#AddonPicker_RecentStickers"),
                items: c.p.FilterStickers(P(e), i),
                onItemSelect: n,
                renderItem: (e) => a.createElement(X, { sticker: e }),
                keyExtractor: ({ name: e }) => e,
                renderEmpty: () =>
                  a.createElement(
                    R,
                    null,
                    i
                      ? (0, p.we)("#AddonPicker_NoResults")
                      : (0, p.we)(
                          "#AddonPicker_NoRecent",
                          (0, p.we)("#AddonPicker_Stickers"),
                        ),
                  ),
              }),
            a.createElement(I, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: i,
              sections: s,
            })
          );
        }
      }
      class D extends a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onItemSelect: r,
              flairGroupID: n,
            } = this.props,
            { filter: i } = this.state,
            s = !i && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
            o = c.p.FilterEmoticons(s, i).slice(0, 1e3);
          return a.createElement(C, {
            title: (0, p.we)("#AddonPicker_Emoticons"),
            items: o,
            onItemSelect: r,
            renderItem: (e) =>
              a.createElement(Y, { emoticon: e, emoticonHoverStore: t }),
            keyExtractor: (e) => e.name,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: i,
            onSubmit: () => r(o[0]),
            renderEmpty: () =>
              i
                ? a.createElement(R, null, (0, p.we)("#AddonPicker_NoResults"))
                : a.createElement(V, null),
          });
        }
      }
      function V() {
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            R,
            null,
            (0, p.we)(
              "#AddonPicker_NoneOwned",
              (0, p.we)("#AddonPicker_Emoticons"),
            ),
          ),
          a.createElement(
            R,
            null,
            (0, p.PP)(
              "#AddonPicker_AcquireAtPointsShopOrMarket",
              a.createElement(
                N.uU,
                { href: `${f.TS.STORE_BASE_URL}points/shop/c/emoticons` },
                (0, p.we)("#AddonPicker_AcquireAtPointsShop_Link"),
              ),
              a.createElement(
                N.uU,
                { href: `${f.TS.COMMUNITY_BASE_URL}market` },
                (0, p.we)("#AddonPicker_AcquireAtPointsShopOrMarket_Link"),
              ),
            ),
          ),
        );
      }
      class Q extends a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const { store: e, onItemSelect: t } = this.props,
            { filter: r } = this.state,
            n = c.p.FilterStickers(e.GetStickerList(), r);
          return a.createElement(C, {
            title: (0, p.we)("#EmoticonPicker_StickerHeading"),
            items: n,
            onItemSelect: t,
            renderItem: (e) => a.createElement(X, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: r,
            onSubmit: () => t(n[0]),
            renderEmpty: () =>
              r
                ? a.createElement(R, null, (0, p.we)("#AddonPicker_NoResults"))
                : a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      R,
                      null,
                      (0, p.we)(
                        "#AddonPicker_NoneOwned",
                        (0, p.we)("#AddonPicker_Stickers"),
                      ),
                    ),
                    a.createElement(
                      R,
                      null,
                      (0, p.PP)(
                        "#AddonPicker_AcquireAtPointsShop",
                        a.createElement(
                          N.uU,
                          {
                            href: `${f.TS.STORE_BASE_URL}points/shop/c/stickers`,
                          },
                          (0, p.we)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      class Z extends a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const { store: e, effectSettings: t, onItemSelect: r } = this.props,
            { filter: n } = this.state,
            i = e.GetEffectList().filter(({ name: e }) => e.indexOf(n) > -1);
          return a.createElement(C, {
            title: (0, p.we)("#EmoticonPicker_EffectHeading"),
            items: i,
            onItemSelect: r,
            renderItem: (e) =>
              a.createElement(ee, { effect: e, roomEffectSettings: t }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: n,
            onSubmit: () => r(i[0]),
            renderEmpty: () =>
              n
                ? a.createElement(R, null, (0, p.we)("#AddonPicker_NoResults"))
                : a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      R,
                      null,
                      (0, p.we)(
                        "#AddonPicker_NoneOwned",
                        (0, p.we)("#AddonPicker_RoomEffects"),
                      ),
                    ),
                    a.createElement(
                      R,
                      null,
                      (0, p.PP)(
                        "#AddonPicker_AcquireAtPointsShop",
                        a.createElement(
                          N.uU,
                          {
                            href: `${f.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                          },
                          (0, p.we)("#AddonPicker_AcquireAtPointsShop_Link"),
                        ),
                      ),
                    ),
                  ),
          });
        }
      }
      let J = class extends a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onItemSelect: r,
              flairGroupID: n,
            } = this.props,
            { filter: i } = this.state,
            s = [];
          return (
            O(e).length &&
              s.push({
                title: (0, p.we)("#AddonPicker_RecentEmoticons"),
                items: c.p.FilterEmoticons(O(e), i),
                onItemSelect: r,
                renderItem: (e) =>
                  a.createElement(Y, { emoticon: e, emoticonHoverStore: t }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  a.createElement(
                    R,
                    null,
                    i
                      ? (0, p.we)("#AddonPicker_NoResults")
                      : (0, p.we)(
                          "#AddonPicker_NoRecent",
                          (0, p.we)("#AddonPicker_Emoticons"),
                        ),
                  ),
              }),
            a.createElement(I, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: i,
              sections: [
                ...s,
                {
                  title: (0, p.we)("#AddonPicker_AllEmoticons"),
                  items: c.p.FilterStickers(e.emoticon_list, i).slice(0, 1e3),
                  onItemSelect: r,
                  renderItem: (e) =>
                    a.createElement(Y, { emoticon: e, emoticonHoverStore: t }),
                  keyExtractor: (e) => e.name,
                  renderEmpty: () =>
                    i
                      ? a.createElement(
                          R,
                          null,
                          (0, p.we)("#AddonPicker_NoResults"),
                        )
                      : a.createElement(V, null),
                },
              ],
            })
          );
        }
      };
      J = (0, n.Cg)([s.PA], J);
      let $ = class extends a.Component {
        constructor() {
          super(...arguments), (this.state = { filter: "" });
        }
        render() {
          const {
              store: e,
              hoverStore: t,
              onItemSelect: r,
              flairGroupID: n,
            } = this.props,
            { filter: i } = this.state;
          return a.createElement(I, {
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: i,
            sections: [
              {
                title: (0, p.we)("#ChatEntryButton_Flair"),
                items: c.p.FilterStickers(e.GetFlairListByGroupID(n), i),
                onItemSelect: r,
                renderItem: (e) =>
                  a.createElement(Y, { emoticon: e, emoticonHoverStore: t }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  i
                    ? a.createElement(
                        R,
                        null,
                        (0, p.we)("#AddonPicker_NoResults"),
                      )
                    : a.createElement(V, null),
              },
            ],
          });
        }
      };
      $ = (0, n.Cg)([s.PA], $);
      const Y = (e) => {
        const { emoticon: t, emoticonHoverStore: r, large: n } = e,
          i = !t.last_used && t.time_received;
        return a.createElement(
          "div",
          { className: k().EmoticonItem },
          a.createElement(F, {
            emoticon: t.name,
            emoticonHoverStore: r,
            large: n,
          }),
          i && a.createElement(re, null),
        );
      };
      class X extends a.Component {
        constructor() {
          super(...arguments),
            (this.state = { showHover: !1 }),
            (this.m_ref = a.createRef());
        }
        render() {
          const { sticker: e, className: t, ...r } = this.props,
            n = h(f.TS.COMMUNITY_CDN_URL, e.name);
          return a.createElement(
            "div",
            {
              ref: this.m_ref,
              className: (0, d.A)(t, k().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...r,
            },
            a.createElement("img", { style: { width: "100%" }, src: n }),
            this.state.showHover &&
              a.createElement(K, { target: this.m_ref.current, sticker: e }),
          );
        }
      }
      const K = (0, s.PA)((e) => {
        const {
            target: t,
            sticker: { name: r, appid: n },
          } = e,
          [i] = (0, l.t7)(n, {});
        return a.createElement(
          U,
          { target: t, title: r, subtitle: null == i ? void 0 : i.GetName() },
          a.createElement("img", {
            src: h(f.TS.COMMUNITY_CDN_URL, r),
            className: k().StickerHoverSticker,
          }),
        );
      });
      class ee extends a.Component {
        constructor() {
          super(...arguments),
            (this.state = { showHover: !1 }),
            (this.m_ref = a.createRef());
        }
        render() {
          const {
              effect: e,
              roomEffectSettings: t,
              className: r,
              ...n
            } = this.props,
            i = t[e.name];
          return a.createElement(
            "div",
            {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, d.A)(r, k().EffectButton),
              ...n,
            },
            i.renderEffectIcon(),
            this.state.showHover &&
              a.createElement(te, {
                target: this.m_ref.current,
                effect: e,
                roomEffectSettings: t,
              }),
          );
        }
      }
      const te = (0, s.PA)((e) => {
        const {
            target: t,
            effect: { name: r, appid: n },
            roomEffectSettings: i,
          } = e,
          s = i[r],
          [o] = (0, l.t7)(n, {});
        return a.createElement(
          U,
          { target: t, title: r, subtitle: null == o ? void 0 : o.GetName() },
          a.createElement(
            "div",
            { className: k().EffectHoverEffect },
            s.renderEffectIcon(),
          ),
        );
      });
      function re() {
        return a.createElement(
          "div",
          { className: k().NewEmoticonIndicator },
          a.createElement("div", { className: k().NewEmoticonCircle }),
        );
      }
      function ne(e) {
        return a.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          a.createElement("path", {
            fill: "currentColor",
            d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M21 29H22.1875V31H19L21 29Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M29 22.1875V21L31 19V22.1875H29Z",
          }),
        );
      }
      function ie(e) {
        return a.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          a.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
          }),
        );
      }
      function se(e) {
        return a.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...e,
          },
          a.createElement("path", {
            fill: "currentColor",
            d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
          }),
          a.createElement("path", {
            fill: "currentColor",
            d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
          }),
        );
      }
      function ae(e) {
        const { className: t, ...r } = e;
        return a.createElement(
          "svg",
          {
            className: (0, d.A)("SVGIcon_Button SVGIcon_Clock", t),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...r,
          },
          a.createElement("path", {
            d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
          }),
        );
      }
    },
    283: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => S });
      var n = r(34629),
        i = r(90626),
        s = r(75844),
        a = r(73745),
        o = r(45699),
        c = r(76217),
        l = r(88997),
        m = r(31698),
        u = r(61859),
        d = r(52038),
        p = r(90024),
        g = r.n(p),
        h = r(97232),
        f = r(32754);
      const _ = 1576780700;
      let E = class extends i.Component {
        OnEmoticonClick(e) {
          var t;
          const {
            emoticonStore: r,
            strFlairGroupID: n,
            SetUIDisplayPref: s,
            contextOptions: a,
            bShowChatAddons: o,
          } = this.props;
          let c = null;
          if (
            ((c = o
              ? i.createElement(m.Q4, {
                  emoticonStore: this.props.emoticonStore,
                  emoticonHoverStore: this.props.emoticonHoverStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  onEmoticonSelected: (e) =>
                    this.props.OnEmoticonSelected(e, !1),
                  roomEffectSettings: this.props.roomEffectSettings,
                  onRoomEffectSelected: this.props.onRoomEffectSelected,
                  onStickerSelected: this.props.onStickerSelected,
                })
              : n &&
                  r.flair_list &&
                  (null === (t = r.GetFlairListByGroupID(n)) || void 0 === t
                    ? void 0
                    : t.length) > 0
                ? i.createElement(m.CE, {
                    emoticonStore: this.props.emoticonStore,
                    emoticonHoverStore: this.props.emoticonHoverStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })
                : i.createElement(m.iY, {
                    emoticonStore: this.props.emoticonStore,
                    emoticonHoverStore: this.props.emoticonHoverStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    OnSelected: this.props.OnEmoticonSelected,
                  })),
            (0, l.lX)(
              c,
              e,
              a || {
                bOverlapHorizontal: !0,
                bPreferPopLeft: !0,
                bPreferPopTop: !0,
              },
            ),
            this.BHaveUnseenEmoticons() && s)
          ) {
            let e = this.GetNewestIndicatorTime();
            (!e || e < _) && (e = _), s("rtLastAckedNewEmoticons", e);
          }
        }
        GetNewestIndicatorTime() {
          let e = this.props.emoticonStore,
            t = Number.MIN_SAFE_INTEGER,
            r = e.GetTimeReceivedNewestEmoticon();
          r && (t = r);
          let n = e.GetTimeReceivedForStickerOrEffect();
          return (t = Math.max(n, t)), t > Number.MIN_SAFE_INTEGER ? t : void 0;
        }
        BHaveUnseenEmoticons() {
          const { rtLastAckedNewEmoticons: e } = this.props;
          let t = this.GetNewestIndicatorTime();
          return !e || e < _ || (t && (!e || e < t));
        }
        render() {
          const { disabled: e, className: t, ttip: r, useImg: n } = this.props;
          let s = [t],
            a = !1;
          return (
            e ? s.push("disabled") : this.BHaveUnseenEmoticons() && (a = !0),
            r && s.push("ttip"),
            n
              ? i.createElement(
                  c.Z,
                  {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, u.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                  },
                  i.createElement(
                    f.he,
                    { toolTipContent: r },
                    i.createElement("img", {
                      src: this.props.useImg,
                      className: (0, d.A)(...s),
                      title:
                        this.props.title ||
                        (0, u.we)("#ChatEntryButton_Emoticon"),
                    }),
                  ),
                )
              : (s.push(g().chatSubmitButton, g().EmoticonPickerButton),
                i.createElement(
                  o.fu,
                  {
                    className: (0, d.A)(...s),
                    onOKActionDescription: (0, u.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, u.we)("#ChatEntryButton_Emoticon"),
                    disabled: e,
                  },
                  i.createElement(
                    f.he,
                    { toolTipContent: r },
                    this.props.buttonIcon || i.createElement(h.nl, null),
                    a && i.createElement(m.iD, null),
                  ),
                ))
          );
        }
      };
      (0, n.Cg)([a.oI], E.prototype, "OnEmoticonClick", null),
        (E = (0, n.Cg)([s.PA], E));
      const S = E;
    },
    97232: (e, t, r) => {
      "use strict";
      r.d(t, { nl: () => c, rf: () => o });
      var n = r(90626),
        i = r(12155),
        s = r(4869),
        a = r(78327);
      function o() {
        return n.createElement(i.rfv, null);
      }
      function c() {
        return (0, a.Qn)()
          ? n.createElement(s.nl, null)
          : n.createElement(i.jZW, null);
      }
    },
    3088: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => a });
      var n = r(34629),
        i = r(90626),
        s = r(73745);
      class a extends i.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = i.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const {
              rgSources: e,
              onIncrementalError: t,
              onError: r,
              ...n
            } = this.props,
            s = this.src;
          return i.createElement("img", {
            ref: this.m_refImage,
            ...n,
            src: s,
            onError: this.OnImageError,
          });
        }
      }
      (0, n.Cg)([s.oI], a.prototype, "OnImageError", null);
    },
  },
]);
