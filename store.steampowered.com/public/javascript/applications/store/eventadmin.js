/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50970],
    {
      71698: (ne, fe, s) => {
        "use strict";
        s.d(fe, { H: () => i, s: () => j });
        var e = s(90626),
          P = s(41623);
        let f = 0;
        function i(de, L) {
          (0, e.useEffect)(() => {
            if (!(de || L))
              return (
                f++,
                () => {
                  --f == 0 && (0, P.s)();
                }
              );
          }, [de, L]);
        }
        function j(de) {
          const [L, Q] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const N = window.setTimeout(() => Q(!0), de);
            return () => window.clearTimeout(N);
          }, [de]),
            i(L);
        }
      },
      94699: (ne, fe, s) => {
        "use strict";
        s.d(fe, {
          w2: () => I,
          wN: () => w,
          Dw: () => G,
          vB: () => z,
          D$: () => e,
          bH: () => x,
        });
        var e = {};
        s.r(e), s.d(e, { w4: () => de });
        var P = s(80613),
          f = s.n(P),
          i = s(75245),
          j = s(35038);
        const de = 0,
          L = 1,
          Q = 2,
          N = 3;
        function ue(c) {
          return "unknown ENewsRecommendationState ( " + c + " )";
        }
        class U extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.gid || i.Sg(U.M()),
              P.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    type: {
                      n: 3,
                      d: 0,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    url: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    associated_apps: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    poll_interval: {
                      n: 6,
                      d: 300,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    kv_description: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    kv_filter: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    publish_to_clan_account_id: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    language: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_error: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_update: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    last_checked: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = i.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(U.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new U();
            return U.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(U.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(U.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsFeedDef";
          }
        }
        class I extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.gid || i.Sg(I.M()),
              P.Message.initialize(this, t, 0, -1, [11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    news_feed_gid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    title: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    url: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    author: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    rtime_date: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    contents: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    commited: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    deleted: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
                    tags: { n: 10, br: i.qM.readString, bw: i.gp.writeString },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    recommendation_state: {
                      n: 12,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 13,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    received_for_free: {
                      n: 14,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    blurb: { n: 15, br: i.qM.readString, bw: i.gp.writeString },
                    event_subtitle: {
                      n: 16,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    event_summary: {
                      n: 17,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = i.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(I.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new I();
            return I.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(I.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(I.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsFeedPostDef";
          }
        }
        class W extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.content || i.Sg(W.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    content: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    preserve_newlines: {
                      n: 2,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(t = !1) {
            return W.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(W.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(W.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new W();
            return W.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(W.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(W.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_ConvertHTMLToBBCode_Request";
          }
        }
        class H extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.converted_content || i.Sg(H.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    converted_content: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    found_html: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(H.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new H();
            return H.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(H.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(H.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_ConvertHTMLToBBCode_Response";
          }
        }
        class T extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.rss_message || i.Sg(T.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    rss_message: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    unique_id: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    title: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    desc: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    jsondata: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    post: { n: 6, c: I },
                    valid_post: { n: 7, br: i.qM.readBool, bw: i.gp.writeBool },
                    post_error_msg: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(T.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new T();
            return T.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(T.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(T.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsPartnerEventPreview";
          }
        }
        class G extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.rss_url || i.Sg(G.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    rss_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    lang: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    clan_account_id: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(G.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new G();
            return G.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(G.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(G.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PreviewPartnerEvents_Request";
          }
        }
        class K extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              K.prototype.rss_url || i.Sg(K.M()),
              P.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    rss_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    results: { n: 2, c: T, r: !0, q: !0 },
                    error_msg: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(t = !1) {
            return K.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(K.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(K.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new K();
            return K.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(K.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(K.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PreviewPartnerEvents_Response";
          }
        }
        class b extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              b.prototype.clan_account_id || i.Sg(b.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = i.w0(b.M())), b.sm_mbf;
          }
          toObject(t = !1) {
            return b.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(b.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(b.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new b();
            return b.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(b.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(b.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetNewsFeedByRepublishClan_Request";
          }
        }
        class X extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.feeds || i.Sg(X.M()),
              P.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: { feeds: { n: 1, c: U, r: !0, q: !0 } },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = i.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(X.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new X();
            return X.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(X.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(X.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetNewsFeedByRepublishClan_Response";
          }
        }
        class z extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.post || i.Sg(z.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    post: { n: 1, c: I },
                    draft: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = i.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(z.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new z();
            return z.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(z.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(z.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PublishPartnerEvent_Request";
          }
        }
        class M extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.clan_event_gid || i.Sg(M.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    news_post_gid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = i.w0(M.M())), M.sm_mbf;
          }
          toObject(t = !1) {
            return M.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(M.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new M();
            return M.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(M.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(M.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PublishPartnerEvent_Response";
          }
        }
        class w extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.news_feed_gid || i.Sg(w.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    news_feed_gid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    start_index: {
                      n: 2,
                      d: 0,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    amount: {
                      n: 3,
                      d: 100,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(t = !1) {
            return w.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(w.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new w();
            return w.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(w.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(w.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetBatchPublishedPartnerEvent_Request";
          }
        }
        class u extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              u.prototype.clan_account_id || i.Sg(u.M()),
              P.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    news_feed_gid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    clan_event_gid: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                    news_post_gid: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                    news_url: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
          }
          toObject(t = !1) {
            return u.toObject(t, this);
          }
          static toObject(t, l) {
            return i.BT(u.M(), t, l);
          }
          static fromObject(t) {
            return i.Uq(u.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (f().BinaryReader)(t),
              h = new u();
            return u.deserializeBinaryFromReader(h, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return i.zj(u.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (f().BinaryWriter)();
            return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            i.i0(u.M(), t, l);
          }
          serializeBase64String() {
            var t = new (f().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetBatchPublishedPartnerEvent_Response";
          }
        }
        var x;
        ((c) => {
          function t(q, ge, pe) {
            return q.SendMsg(
              "News.ConvertHTMLToBBCode#1",
              (0, j.I8)(W, ge, pe),
              H,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          c.ConvertHTMLToBBCode = t;
          function l(q, ge, pe) {
            return q.SendMsg(
              "News.PreviewPartnerEvents#1",
              (0, j.I8)(G, ge, pe),
              K,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.PreviewPartnerEvents = l;
          function h(q, ge, pe) {
            return q.SendMsg(
              "News.GetNewsFeedByRepublishClan#1",
              (0, j.I8)(b, ge, pe),
              X,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetNewsFeedByRepublishClan = h;
          function y(q, ge, pe) {
            return q.SendMsg(
              "News.PublishPartnerEvent#1",
              (0, j.I8)(z, ge, pe),
              M,
              { ePrivilege: 1 },
            );
          }
          c.PublishPartnerEvent = y;
          function ee(q, ge, pe) {
            return q.SendMsg(
              "News.GetBatchPublishedPartnerEvent#1",
              (0, j.I8)(w, ge, pe),
              u,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetBatchPublishedPartnerEvent = ee;
        })(x || (x = {}));
      },
      37656: (ne, fe, s) => {
        "use strict";
        s.d(fe, { w: () => M });
        var e = s(41735),
          P = s.n(e),
          f = s(14947),
          i = s(65946),
          j = s(90626),
          de = s(27066),
          L = s(8323),
          Q = s(30096),
          N = s(3166),
          ue = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          I = (w, u, x, c) => {
            for (
              var t = c > 1 ? void 0 : c ? U(u, x) : u, l = w.length - 1, h;
              l >= 0;
              l--
            )
              (h = w[l]) && (t = (c ? h(u, x, t) : h(t)) || t);
            return c && t && ue(u, x, t), t;
          };
        const W = class Yt {
          constructor() {
            (0, f.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const u = new Yt();
            return (
              (u.giveaway_id = this.giveaway_id),
              (u.seconds_until_drawing = this.seconds_until_drawing),
              (u.rtime_start = this.rtime_start),
              (u.rtime_end = this.rtime_end),
              (u.closed = this.closed),
              (u.winner_count = this.winner_count),
              u
            );
          }
        };
        I([f.sH], W.prototype, "giveaway_id", 2),
          I([f.sH], W.prototype, "seconds_until_drawing", 2),
          I([f.sH], W.prototype, "rtime_start", 2),
          I([f.sH], W.prototype, "rtime_end", 2),
          I([f.sH], W.prototype, "closed", 2),
          I([f.sH], W.prototype, "winner_count", 2);
        let H = W;
        const T = class tt {
          constructor() {
            (0, f.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(u, x) {
            return u + "_" + x;
          }
          GetInfoByInstance(u, x) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(u, x),
            );
          }
          GetNextDrawChangeCallback(u) {
            return (
              this.m_mapNextDrawChangeCallback.has(u) ||
                this.m_mapNextDrawChangeCallback.set(u, new L.lu()),
              this.m_mapNextDrawChangeCallback.get(u)
            );
          }
          CopyToGiveaway(u, x) {
            x.closed != u.closed && (x.closed = u.closed),
              x.giveaway_id != u.giveaway_id && (x.giveaway_id = u.giveaway_id),
              x.rtime_start != u.rtime_start && (x.rtime_start = u.rtime_start),
              x.rtime_end != u.rtime_end && (x.rtime_end = u.rtime_end),
              x.winner_count != u.winner_count &&
                (x.winner_count = u.winner_count),
              x.seconds_until_drawing != u.seconds_until_drawing &&
                (x.seconds_until_drawing = u.seconds_until_drawing);
          }
          async ReloadGiveaway(u, x) {
            if (!u) return null;
            let c = N.TS.STORE_BASE_URL + "prizes/nextdraw/" + u,
              t = null,
              l = { origin: self.origin };
            return (
              (t = await P().get(c, { params: l })),
              (0, f.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(u) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(u, new H()),
                  this.CopyToGiveaway(
                    t.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(u),
                  ),
                  x !== void 0)
                ) {
                  const h = this.GetKey(u, x);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(h) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      h,
                      new H(),
                    ),
                    this.CopyToGiveaway(
                      t.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(h),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(u).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(u),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(u)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              tt.s_Singleton ||
                ((tt.s_Singleton = new tt()), tt.s_Singleton.Init()),
              tt.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let u = (0, N.Tc)("giveawaynextdraw", "application_config");
              if (u && u.giveaway_id) {
                let x = new H();
                this.CopyToGiveaway(u, x),
                  this.m_mapGiveawayIDToNextDrawInfo.set(u.giveaway_id, x);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        I([f.sH], T.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          I([f.XI], T.prototype, "CopyToGiveaway", 1);
        let G = T;
        const K = class Wt {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Wt.s_GlobalInstance),
              (Wt.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(u, x) {
            if ((this.ClearRefreshInterval(), !u.closed)) {
              let c =
                u.seconds_until_drawing <= 0 && u.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(x, c);
            }
          }
          SetupCountDown(u, x) {
            u > 0 && (this.m_intervalCountDownID = window.setInterval(x, 1e3));
          }
        };
        I([de.o], K.prototype, "ClearRefreshInterval", 1),
          I([de.o], K.prototype, "ClearCountDown", 1),
          I([de.o], K.prototype, "SetupRefreshDataInterval", 1),
          I([de.o], K.prototype, "SetupCountDown", 1);
        let b = K;
        function X(w, u) {
          const x = G.Get().GetInfoByInstance(w, u.m_myInstanceNumber);
          (x.seconds_until_drawing -= 1),
            x.seconds_until_drawing == 0 && u.ClearCountDown();
        }
        function z(w, u) {
          const x = G.Get().GetInfoByInstance(w, u.m_myInstanceNumber);
          x &&
            x.BIsValid() &&
            x.seconds_until_drawing <= 0 &&
            !x.closed &&
            (u.ClearCountDown(),
            G.Get()
              .ReloadGiveaway(w, u.m_myInstanceNumber)
              .then((c) => {
                u.SetupCountDown(c.seconds_until_drawing, () => X(w, u));
              }));
        }
        function M(w) {
          const [u] = (0, j.useState)(new b()),
            x = (0, Q.CH)();
          (0, j.useEffect)(
            () => (
              G.Get()
                .ReloadGiveaway(w, u.m_myInstanceNumber)
                .then((y) => {
                  u.SetupRefreshDataInterval(y, () => z(w, u)),
                    u.SetupCountDown(y.seconds_until_drawing, () => X(w, u)),
                    x();
                }),
              () => {
                u.ClearRefreshInterval(), u.ClearCountDown();
              }
            ),
            [u, w, x],
          );
          const c = G.Get().GetInfoByInstance(w, u.m_myInstanceNumber),
            [t, l, h] = (0, i.q3)(() => [
              c?.winner_count,
              c?.closed,
              c?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !c || c.giveaway_id == null || !c.BStarted() || t === void 0,
            winner_count: t,
            closed: l,
            seconds_until_drawing: h,
          };
        }
      },
      35098: (ne, fe, s) => {
        "use strict";
        s.d(fe, { DW: () => I, js: () => ue, mK: () => K, tb: () => G });
        var e = s(90626),
          P = s(80902),
          f = s(54806),
          i = s(99412),
          j = s(68312),
          de = s(15369),
          L = s(5858),
          Q = s(76559),
          N = s(15860);
        function ue(M) {
          const w = (0, j.KV)(),
            u = e.useContext(T);
          return (0, P.I)(K(u, w, M));
        }
        function U(M) {
          const w = React.useRef(void 0),
            u = ue(M);
          return u.data
            ? u
            : (w.current ||
                (w.current = new CPersonaStateImpl(
                  typeof M == "string"
                    ? new CSteamID(M)
                    : CSteamID.InitFromAccountID(M),
                )),
              { ...u, data: w.current });
        }
        function I(M) {
          const w = (0, j.KV)(),
            u = e.useContext(T);
          return (0, f.E)({ queries: M.map((x) => K(u, w, x)) });
        }
        function W(M) {
          return ReactQueryClient.getQueryData(["PlayerSummary", M]);
        }
        function H(M) {
          const { loadPersonaState: w, children: u } = M,
            x = React.useMemo(() => ({ loadPersonaState: w }), [w]);
          return React.createElement(T.Provider, { value: x }, u);
        }
        const T = e.createContext({
          loadPersonaState: async (M, w) => {
            if (M == null) return null;
            const u = await X(w).load(
              Q.b.InitFromAccountID(M).ConvertTo64BitString(),
            );
            return z(Q.b.InitFromAccountID(M), u);
          },
        });
        function G() {
          return e.useContext(T);
        }
        function K(M, w, u) {
          const x = typeof u == "string" ? new Q.b(u).GetAccountID() : u;
          return {
            queryKey: ["PlayerSummary", x],
            queryFn: () => M.loadPersonaState(x, w),
            enabled: !!x,
          };
        }
        let b;
        function X(M) {
          return (b ??= (0, N.c)(M));
        }
        function z(M, w) {
          let u = new L.Z(M);
          const x = w?.public_data,
            c = w?.private_data;
          return (
            (u.m_bInitialized = !!w),
            (u.m_ePersonaState = c?.persona_state ?? i.cU3),
            (u.m_strAvatarHash = x?.sha_digest_avatar
              ? (0, de.Kx)(x.sha_digest_avatar)
              : L.dV),
            (u.m_strPlayerName = x?.persona_name ?? M.ConvertTo64BitString()),
            (u.m_strAccountName = c?.account_name),
            c?.persona_state_flags &&
              (u.m_unPersonaStateFlags = c?.persona_state_flags),
            c?.game_id && (u.m_gameid = c?.game_id),
            c?.game_server_ip_address &&
              (u.m_unGameServerIP = c?.game_server_ip_address),
            c?.lobby_steam_id && (u.m_game_lobby_id = c?.lobby_steam_id),
            c?.game_extra_info && (u.m_strGameExtraInfo = c?.game_extra_info),
            x?.profile_url && (u.m_strProfileURL = x.profile_url),
            u
          );
        }
      },
      57223: (ne, fe, s) => {
        "use strict";
        s.d(fe, { A: () => c });
        var e = s(41735),
          P = s.n(e),
          f = s(14947),
          i = s(3166),
          j = s(3685),
          de = s(35038),
          L = s(94699),
          Q = s(99412),
          N = s(72604),
          ue = s(76559),
          U = s(77495);
        function I(t) {
          return "unknown EMsg ( " + t + " )";
        }
        function W(t) {
          return "unknown EClientPersonaStateFlag ( " + t + " )";
        }
        function H(t) {
          return "unknown EMsgClanAccountFlags ( " + t + " )";
        }
        function T(t) {
          return "unknown ESteamReviewScore ( " + t + " )";
        }
        function G(t) {
          return "unknown ECodecUsagePlatform ( " + t + " )";
        }
        function K(t) {
          return "unknown ECodecUsageReason ( " + t + " )";
        }
        var b = s(71742),
          X = s(34592),
          z = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          w = (t, l, h, y) => {
            for (
              var ee = y > 1 ? void 0 : y ? M(l, h) : l, q = t.length - 1, ge;
              q >= 0;
              q--
            )
              (ge = t[q]) && (ee = (y ? ge(l, h, ee) : ge(ee)) || ee);
            return y && ee && z(l, h, ee), ee;
          };
        class u {
          m_clanAccountID;
          m_clanSteamID;
          m_strRSSFeedURL = void 0;
          m_strRSSGID = void 0;
          m_rtimeRSSLastChecked = void 0;
          m_nPollIntervalSeconds = void 0;
          m_eRSSFeedLanguage = void 0;
          m_eCuratorLanguage = void 0;
          m_mapURLToPosted = new Map();
          constructor(l) {
            (0, f.Gn)(this),
              (this.m_clanAccountID = l.clanid),
              (this.m_clanSteamID = ue.b.InitFromClanID(this.m_clanAccountID)),
              (this.m_strRSSFeedURL = l.rss_feed_url),
              (this.m_strRSSGID = l.rss_feed_gid),
              (this.m_eRSSFeedLanguage = l.rss_feed_language),
              (this.m_rtimeRSSLastChecked = l.rss_feed_last_checked),
              (this.m_nPollIntervalSeconds = l.poll_interval),
              (this.m_eCuratorLanguage = l.curation_language);
          }
          GetFeedLanguageHandleUnset() {
            return this.m_eRSSFeedLanguage == Q.xPp
              ? this.m_eCuratorLanguage == Q.xPp
                ? Q.Bhc
                : this.m_eCuratorLanguage
              : this.m_eRSSFeedLanguage;
          }
          GetCuratorLanguage() {
            return this.m_eCuratorLanguage == Q.xPp
              ? Q.Bhc
              : this.m_eCuratorLanguage;
          }
          BHasSavedRSSURL() {
            return !!this.m_strRSSFeedURL;
          }
          GetRSSUrl() {
            return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
          }
          GetRSSLastRtimeChecked() {
            return this.m_rtimeRSSLastChecked;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanAccountID;
          }
          BHasSetupFeed(l) {
            return !!this.m_strRSSGID && this.m_strRSSFeedURL === l;
          }
          BIsAutomationEnabled() {
            return this.m_nPollIntervalSeconds > 0;
          }
          BHasFeedGID() {
            return !!this.m_strRSSGID;
          }
          async PreviewPartnerEventsFromRSSFeed(l) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "PreviewPartnerEventsFromRSSFeed: User not logged in",
                ),
                null
              );
            const h = de.w.Init(L.Dw);
            h.Body().set_rss_url(l),
              h.Body().set_lang(this.GetFeedLanguageHandleUnset()),
              h.Body().set_clan_account_id(this.GetClanAccountID());
            let y = await L.bH.PreviewPartnerEvents(
              c.Get().GetCuratorTransport(),
              h,
            );
            return (
              y.GetEResult() != N.R &&
                console.error(
                  "PreviewPartnerEventsFromRSSFeed error: " +
                    y.GetEMsg() +
                    " " +
                    y.GetEResult(),
                ),
              y
            );
          }
          async FetchPublishedEvents(l = 100) {
            if (!this.BIsLoggedIn())
              return (
                console.error("FetchPublishedEvents: User not logged in"), null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "FetchPublishedEvents: Need to create a news feed first",
                ),
                null
              );
            const h = de.w.Init(L.wN);
            h.Body().set_news_feed_gid(this.m_strRSSGID),
              h.Body().set_amount(l);
            let y = await L.bH.GetBatchPublishedPartnerEvent(
              c.Get().GetCuratorTransport(),
              h,
            );
            return (
              y.GetEResult() != N.R
                ? console.error(
                    "FetchPublishedEvents error: EMsg:" +
                      I(y.GetEMsg()) +
                      " EResult:" +
                      y.GetEResult() +
                      " msg:" +
                      y.Hdr().error_message(),
                  )
                : (0, f.h5)(() => {
                    for (
                      let ee = 0;
                      ee < y.Body().clan_event_gid().length;
                      ++ee
                    ) {
                      let q = {
                        url: y.Body().news_url()[ee],
                        clan_event_gid: y.Body().clan_event_gid()[ee],
                        news_post_gid: y.Body().news_post_gid()[ee],
                      };
                      this.m_mapURLToPosted.set(q.url, q);
                    }
                  }),
              y
            );
          }
          MapArticleURLToClanEventGID(l) {
            let h = this.m_mapURLToPosted.get(l);
            if (h) return h.clan_event_gid;
          }
          BIsLoggedIn() {
            return i.iA.logged_in;
          }
          async CreateOrUpdateRSSNewFeed(l, h = 0) {
            let y = new FormData();
            y.append("sessionid", (0, i.KC)()),
              y.append("gid", this.m_strRSSGID),
              y.append("lang", "" + this.GetCuratorLanguage()),
              y.append("rss_url", l),
              y.append("polling_interval", "" + h);
            const ee =
              i.TS.STORE_BASE_URL +
              "curator/" +
              this.m_clanAccountID +
              "/admin/ajaxmanagerssfeed";
            let q = await P().post(ee, y, { withCredentials: !0 });
            return (
              q.data.success == N.R &&
                (0, f.h5)(() => {
                  (this.m_strRSSGID = q.data.gid),
                    (this.m_strRSSFeedURL = l),
                    (this.m_nPollIntervalSeconds = h);
                }),
              q.data
            );
          }
          async UpdateAutomation(l) {
            return this.CreateOrUpdateRSSNewFeed(
              this.m_strRSSFeedURL,
              l ? 300 : 0,
            );
          }
          async CheckForNewUpdate() {
            if (this.m_strRSSGID) {
              let l = new FormData();
              l.append("sessionid", (0, i.KC)()),
                l.append("gid", this.m_strRSSGID);
              const h =
                i.TS.STORE_BASE_URL +
                "curator/" +
                this.m_clanAccountID +
                "/admin/ajaxcheckfornews";
              await P().post(h, l, { withCredentials: !0 });
            }
          }
          async CreatePost(l, h) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: User not logged in",
                ),
                null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: Need to create a news feed first",
                ),
                null
              );
            let y = new L.w2();
            y.set_gid(l.post.gid),
              y.set_news_feed_gid(this.m_strRSSGID),
              y.set_title(l.post.title),
              y.set_url(l.post.url),
              y.set_author(l.post.author),
              y.set_rtime_date(l.post.rtime_date),
              y.set_contents(l.post.contents),
              y.set_commited(l.post.commited),
              y.set_deleted(l.post.deleted),
              y.set_tags(l.post.tags),
              y.set_appids(l.post.appids),
              y.set_recommendation_state(l.post.recommendation_state),
              y.set_received_for_free(l.post.received_for_free),
              y.set_received_compensation(l.post.received_compensation),
              y.set_blurb(l.post.blurb);
            const ee = de.w.Init(L.vB);
            ee.Body().set_post(y), ee.Body().set_draft(h);
            let q = await L.bH.PublishPartnerEvent(
              c.Get().GetCuratorTransport(),
              ee,
            );
            return (
              q.GetEResult() != N.R
                ? console.error(
                    "CreatePost error: " + q.GetEMsg() + " " + q.GetEResult(),
                  )
                : ((0, f.h5)(() => {
                    let ge = {
                      url: l.post.url,
                      clan_event_gid: q.Body().clan_event_gid(),
                      news_post_gid: q.Body().news_post_gid(),
                    };
                    this.m_mapURLToPosted.set(l.post.url, ge);
                  }),
                  U.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    this.m_clanSteamID,
                    q.Body().clan_event_gid(),
                    0,
                  )),
              q
            );
          }
        }
        w([f.sH], u.prototype, "m_strRSSFeedURL", 2),
          w([f.sH], u.prototype, "m_strRSSGID", 2),
          w([f.sH], u.prototype, "m_rtimeRSSLastChecked", 2),
          w([f.sH], u.prototype, "m_nPollIntervalSeconds", 2),
          w([f.sH], u.prototype, "m_eRSSFeedLanguage", 2),
          w([f.sH], u.prototype, "m_eCuratorLanguage", 2),
          w([f.sH], u.prototype, "m_mapURLToPosted", 2);
        const x = class nt {
          constructor() {
            (0, f.Gn)(this);
          }
          static s_CuratorAdminStore;
          m_transport;
          m_mapClanAccountToAdmin = new Map();
          m_defaultAdmin = void 0;
          m_mapClanToEventRSSStats = new Map();
          m_setPendingClanInfo = new Set();
          m_PendingClanInfoPromise;
          m_PendingClanInfoResolve;
          m_cClanInfoRequestsInFlight = 0;
          GetCuratorTransport() {
            return (
              (0, b.wT)(
                this.m_transport,
                "Expects Transpoate to be initialized but it is now",
              ),
              this.m_transport
            );
          }
          GetDefaultAdmin() {
            return this.m_defaultAdmin;
          }
          GetRSSAdminStats(l) {
            return this.m_mapClanToEventRSSStats.get(l);
          }
          static Get() {
            return (
              nt.s_CuratorAdminStore ||
                ((nt.s_CuratorAdminStore = new nt()),
                nt.s_CuratorAdminStore.Init()),
              nt.s_CuratorAdminStore
            );
          }
          Init() {
            let l = (0, i.Tc)("curatoradmin", "application_config");
            this.ValidateStoreDefault(l) &&
              ((this.m_defaultAdmin = new u(l)),
              this.m_mapClanAccountToAdmin.set(l.clanid, this.m_defaultAdmin)),
              this.ValidateWebAPI(l) &&
                (this.m_transport = new j.D(
                  i.TS.WEBAPI_BASE_URL,
                  l.webapi_token,
                ).GetServiceTransport());
          }
          ValidateStoreDefault(l) {
            const h = l;
            return h && typeof h == "object" && typeof h.clanid == "number";
          }
          ValidateWebAPI(l) {
            const h = l;
            return h && typeof h.webapi_token == "string";
          }
          BIsLoggedIn() {
            return i.iA.logged_in;
          }
          BHavePendingInfoRequests() {
            return (
              this.m_setPendingClanInfo.size > 0 ||
              this.m_cClanInfoRequestsInFlight > 0
            );
          }
          BIsLoadingClanID(l) {
            return this.m_setPendingClanInfo.has(l);
          }
          BHasClanIDLoaded(l) {
            return this.m_mapClanAccountToAdmin.has(l);
          }
          GetRSSAdminForClanAccountID(l) {
            return this.m_mapClanAccountToAdmin.get(l);
          }
          async QueueCuratorAdminInfoLoad(l) {
            return l
              ? this.m_mapClanAccountToAdmin.has(l)
                ? Promise.resolve()
                : (this.m_setPendingClanInfo.size ||
                    ((this.m_PendingClanInfoPromise = new Promise(
                      (h) => (this.m_PendingClanInfoResolve = h),
                    )),
                    window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
                  this.m_setPendingClanInfo.add(l),
                  this.m_PendingClanInfoPromise)
              : ((0, b.wT)(!l, "unexpected clanid of zero or undefined: " + l),
                Promise.resolve());
          }
          async FlushPendingClanInfo() {
            const l = this.m_PendingClanInfoResolve,
              h = Array.from(this.m_setPendingClanInfo);
            (this.m_PendingClanInfoPromise = void 0),
              (this.m_PendingClanInfoResolve = void 0),
              this.m_setPendingClanInfo.clear(),
              await this.LoadBatchedClanRSSAdminInfo(h),
              l();
          }
          EnsureClanInfoLoaded(l) {
            const h = l.filter(
              (y) =>
                !this.m_mapClanAccountToAdmin.has(y) &&
                this.m_setPendingClanInfo.has(y),
            );
            return (
              h.forEach((y) => this.QueueCuratorAdminInfoLoad(y)),
              h.length > 0 && this.m_PendingClanInfoPromise
                ? this.m_PendingClanInfoPromise
                : Promise.resolve()
            );
          }
          async LoadBatchedClanRSSAdminInfo(l) {
            this.m_cClanInfoRequestsInFlight++;
            let h = l.filter((ee) => !this.m_mapClanAccountToAdmin.has(ee));
            const y = 50;
            for (; h.length > 0; ) {
              const ee = Math.min(y, h.length),
                q = h.slice(0, ee);
              h = h.slice(ee);
              try {
                const ge =
                    i.TS.STORE_BASE_URL + "events_admin/ajaxgetrssadmininfo",
                  pe = { clanids: l },
                  xe = await P().get(ge, { params: pe, withCredentials: !0 });
                if (
                  xe &&
                  xe.data &&
                  xe.data.success == N.R &&
                  xe.data.rss_admin_infos &&
                  Array.isArray(xe.data.rss_admin_infos)
                )
                  (0, f.h5)(() => {
                    xe.data.rss_admin_infos.forEach((Ie) => {
                      this.m_mapClanAccountToAdmin.set(Ie.clanid, new u(Ie));
                    }),
                      xe.data.rss_event_stats.forEach((Ie) => {
                        this.m_mapClanToEventRSSStats.set(
                          Ie.clan_account_id,
                          Ie,
                        );
                      });
                  });
                else {
                  const Ie = (0, X.H)(xe.data || {});
                  console.error(
                    "LoadBatchedClanRSSAdminInfo error:" + Ie.strErrorMsg,
                    Ie,
                  );
                }
              } catch (ge) {
                const pe = (0, X.H)(ge);
                console.error(
                  "LoadBatchedClanRSSAdminInfo catched error:" + pe.strErrorMsg,
                  pe,
                );
              }
            }
            this.m_cClanInfoRequestsInFlight--;
          }
        };
        w([f.sH.shallow], x.prototype, "m_mapClanAccountToAdmin", 2),
          w([f.sH.shallow], x.prototype, "m_mapClanToEventRSSStats", 2);
        let c = x;
      },
      82559: (ne, fe, s) => {
        "use strict";
        s.d(fe, { q: () => ce, A: () => Re });
        var e = s(7850),
          P = s(41735),
          f = s.n(P),
          i = s(57223),
          j = s(3166),
          de = s(76559);
        class L {
          static s_CuratorStore;
          m_mapClanToRecommendation = new Map();
          static Get() {
            return (
              L.s_CuratorStore ||
                ((L.s_CuratorStore = new L()),
                L.s_CuratorStore.Init(),
                (window.g_CuratorRecommendationStore = L.s_CuratorStore)),
              L.s_CuratorStore
            );
          }
          Init() {}
          GetReviewForApp(S, F) {
            if (this.m_mapClanToRecommendation.has(S.GetAccountID()))
              return this.m_mapClanToRecommendation
                .get(S.GetAccountID())
                .get(F);
          }
          BHasReviewForApp(S, F) {
            return !!this.GetReviewForApp(S, F);
          }
          BHasReviewForAppByClanAccount(S, F) {
            let C = de.b.InitFromClanID(S);
            return !!this.GetReviewForApp(C, F);
          }
          async LoadAppRecommendation(S, F) {
            this.m_mapClanToRecommendation.has(S.GetAccountID()) ||
              this.m_mapClanToRecommendation.set(S.GetAccountID(), new Map());
            let C = this.m_mapClanToRecommendation.get(S.GetAccountID());
            const $ = [];
            if (
              (F.forEach((me) => {
                C.has(me) || $.push(me);
              }),
              $.length > 0)
            ) {
              const me =
                  j.TS.STORE_BASE_URL +
                  "curator/" +
                  S.GetAccountID() +
                  "/admin/ajaxgetrecbyapps",
                Se = await f().get(me, {
                  params: {
                    appids: $,
                    cc: j.TS.COUNTRY || "US",
                    l: j.TS.LANGUAGE,
                  },
                }),
                he = Se && Se.data;
              he &&
                he.rec_app &&
                he.rec_app.forEach((ve) => {
                  C.set(Number(ve.appid), ve);
                });
            }
          }
        }
        var Q = s(75844),
          N = s(90626),
          ue = s(99412),
          U = s(72604),
          I = s(73259),
          W = s(94699),
          H = s(77495),
          T = s(16412),
          G = s(91424),
          K = s(95695),
          b = s.n(K),
          X = s(12037),
          z = s(96538),
          M = s(88003),
          w = s(85599),
          u = s(53107),
          x = s(36707),
          c = s(82734),
          t = s(18210),
          l = s(34592),
          h = s(30096),
          y = s(71909),
          ee = s(41635),
          q = s(48473),
          ge = s(56330),
          pe = s.n(ge),
          xe = s(53113),
          Ie = s(92264),
          Ne = Object.defineProperty,
          Ue = Object.getOwnPropertyDescriptor,
          J = (E, S, F, C) => {
            for (
              var $ = C > 1 ? void 0 : C ? Ue(S, F) : S, me = E.length - 1, Se;
              me >= 0;
              me--
            )
              (Se = E[me]) && ($ = (C ? Se(S, F, $) : Se($)) || $);
            return C && $ && Ne(S, F, $), $;
          };
        let Re = class extends N.Component {
          state = { strRssURL: i.A.Get().GetDefaultAdmin().GetRSSUrl() };
          m_Admin = i.A.Get().GetDefaultAdmin();
          OnChangeActualRSSURL(E) {
            this.setState({ strRssURL: E.target.value });
          }
          OnCreateOrSaveFeed(E) {
            E.preventDefault(),
              (0, M.pg)(
                (0, e.jsx)(Le, {
                  strRSSUrl: this.state.strRssURL,
                  admin: this.m_Admin,
                }),
                (0, c.uX)(E),
              );
          }
          OnRevert(E) {
            E.preventDefault(),
              this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
          }
          render() {
            let E = this.state.strRssURL === this.m_Admin.GetRSSUrl();
            if (window.Prototype !== void 0)
              return window.location.reload(), null;
            const S = (0, ue.x6o)(
                (0, ue.LgB)(this.m_Admin.GetFeedLanguageHandleUnset()),
              ),
              F = i.A.Get().GetDefaultAdmin();
            return (0, e.jsxs)("div", {
              className: (0, x.A)(y.Ctn),
              children: [
                (0, e.jsxs)("div", {
                  className: "titleframe",
                  children: [
                    (0, e.jsx)("h4", {
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_title"),
                    }),
                    (0, e.jsx)("p", {
                      className: "subtitle",
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_desc"),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, t.PP)(
                        "#CuratorAdmin_RSSFeed_doc_link",
                        (0, e.jsx)("a", {
                          href: "https://partner.steamgames.com/doc/store/news/rss",
                          target: "_blank",
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_doc_link_text",
                          ),
                        }),
                      ),
                    }),
                    (0, e.jsx)("p", {
                      className: y.DashboardBtn,
                      children: (0, e.jsx)(u.uU, {
                        href:
                          j.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/",
                        className: (0, x.A)(b().Button, b().Primary),
                        children: (0, t.we)("#RSSManager_EventDashBoard"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: "darkframe",
                  children: [
                    (0, e.jsxs)("div", {
                      className: y.LanguageRow,
                      children: [
                        (0, e.jsx)("span", {
                          className: y.LanguageTitle,
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_lang_only",
                          ),
                        }),
                        (0, e.jsx)("span", {
                          className: y.LanguageSet,
                          children: S,
                        }),
                        (0, e.jsx)("a", {
                          href:
                            j.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.m_Admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/edit ",
                          target: "_blank",
                          className: (0, x.A)(b().Button, y.PreviewBtn),
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_edit_language",
                          ),
                        }),
                      ],
                    }),
                    this.m_Admin.GetFeedLanguageHandleUnset() !=
                      this.m_Admin.GetCuratorLanguage() &&
                      (0, e.jsx)("div", {
                        className: (0, x.A)(
                          y.LanguageRow,
                          pe().WarningIconLayout,
                        ),
                        children: (0, e.jsx)("span", {
                          className: y.LanguageTitle,
                          children: (0, t.we)(
                            "#CuratorAdmin_Curator_lang_only",
                            (0, t.we)(
                              "#Language_" +
                                (0, ue.LgB)(this.m_Admin.GetCuratorLanguage()),
                            ),
                            S,
                          ),
                        }),
                      }),
                    (0, e.jsxs)("div", {
                      className: (0, x.A)(
                        b().FlexRowContainer,
                        y.UrlSettingCtn,
                      ),
                      children: [
                        (0, e.jsx)(T.pd, {
                          className: y.RssInpu,
                          type: "text",
                          name: "link_url",
                          id: "link_url",
                          value: this.state.strRssURL,
                          label: (0, t.we)("#CuratorAdmin_RSSFeed"),
                          placeholder: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_placeholder",
                          ),
                          onChange: this.OnChangeActualRSSURL,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)("a", {
                          className: "btn_green_white_innerfade btn_medium",
                          onClick: this.OnCreateOrSaveFeed,
                          children: (0, e.jsx)("span", {
                            children: (0, t.we)(
                              E ? "#Button_Saved" : "#Button_Save",
                            ),
                          }),
                        }),
                        !E &&
                          (0, e.jsx)("a", {
                            onClick: this.OnRevert,
                            className: "btn_grey_white_innerfade btn_medium",
                            children: (0, t.we)("#Button_Revert"),
                          }),
                      ],
                    }),
                    (0, e.jsx)(ae, { admin: F }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)(ce, {
                      strRssURL: this.state.strRssURL,
                      admin: F,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        J([h.oI], Re.prototype, "OnChangeActualRSSURL", 1),
          J([h.oI], Re.prototype, "OnCreateOrSaveFeed", 1),
          J([h.oI], Re.prototype, "OnRevert", 1),
          (Re = J([Q.PA], Re));
        let ce = class extends N.Component {
          state = { strParseRssURL: this.props.strRssURL, bLoadingPreview: !1 };
          m_cancelSignal = f().CancelToken.source();
          componentDidMount() {
            const { admin: E } = this.props;
            E.BHasFeedGID() &&
              E.BHasSavedRSSURL() &&
              E.GetRSSUrl() == this.props.strRssURL &&
              this.OnLoadPreview();
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "PreviewRSSViewAndControl component unmounted",
            );
          }
          RenderPreviews() {
            let E = this.props.admin,
              S = new Array();
            if (this.state.previews) {
              let F = this.state.previews;
              (F = F.sort((C, $) => {
                let me = E.MapArticleURLToClanEventGID(C.post.url),
                  Se = E.MapArticleURLToClanEventGID($.post.url),
                  he = me ? H.O3.GetClanEventModel(me) : null,
                  ve = Se ? H.O3.GetClanEventModel(Se) : null;
                return he && ve
                  ? ve.postTime - he.postTime
                  : he
                    ? -1
                    : ve
                      ? 1
                      : $.post.rtime_date - C.post.rtime_date;
              })),
                F.forEach((C) => {
                  S.push(
                    (0, e.jsx)(
                      Y,
                      {
                        newsData: C,
                        admin: E,
                        clanSteamID: E.GetClanSteamID(),
                        fnGetRSSUrl: this.GetRSSPreviewURL,
                      },
                      "id: " + C.unique_id,
                    ),
                  );
                });
            }
            return S;
          }
          GetRSSPreviewURL() {
            return this.state.strParseRssURL;
          }
          OnLoadPreview() {
            this.setState(
              {
                bLoadingPreview: !0,
                previews: void 0,
                strPreviewURL: this.props.strRssURL,
                strPreviewErrorMsg: void 0,
              },
              this.DoLoadPreview,
            );
          }
          async DoLoadPreview() {
            let E = this.props.admin,
              S = await E.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
            if (S && S.GetEResult() == U.R) {
              let F = S.Body().toObject();
              this.setState(
                { strParseRssURL: F.rss_url, bLoadingPreview: !0 },
                async () => {
                  await E.FetchPublishedEvents(Math.max(100, F.results.length));
                  let C = new Array(),
                    $ = new Array();
                  if (
                    (F.results.forEach((me) => {
                      let Se = E.MapArticleURLToClanEventGID(me.post.url);
                      Se && C.push(Se),
                        me.post.appids &&
                          me.post.appids.length === 1 &&
                          me.post.recommendation_state !== W.D$.w4 &&
                          $.push(me.post.appids[0]);
                    }),
                    C.length > 0 &&
                      (await H.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                        C,
                        null,
                        this.m_cancelSignal,
                      )),
                    $.length > 0)
                  ) {
                    const me = E.GetClanSteamID();
                    await L.Get().LoadAppRecommendation(me, $);
                  }
                  this.setState({
                    previews: F.results,
                    bLoadingPreview: void 0,
                  });
                },
              );
            } else
              this.setState({
                bLoadingPreview: void 0,
                strPreviewErrorMsg: (0, t.we)(
                  "#Error_Description",
                  S.GetEResult(),
                  S.Hdr().error_message(),
                ),
              });
          }
          render() {
            const E = this.RenderPreviews();
            let S = this.props.admin;
            return (0, e.jsxs)("div", {
              children: [
                !this.state.bLoadingPreview &&
                  this.state.strPreviewURL !== this.props.strRssURL &&
                  (0, e.jsx)("div", {
                    className: y.PreviewListBtn,
                    children: (0, e.jsx)(T.$n, {
                      disabled: !T.pd.validateUrl(this.props.strRssURL),
                      onClick: this.OnLoadPreview,
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_preview"),
                    }),
                  }),
                this.state.bLoadingPreview &&
                  (0, e.jsx)(w.t, {
                    string: (0, t.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                this.state.strPreviewErrorMsg &&
                  (0, e.jsx)("div", {
                    className: b().ErrorMsg,
                    children: this.state.strPreviewErrorMsg,
                  }),
                E.length > 0 &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, t.we)(
                          "#RSSManager_PreviewInfo",
                          this.state.strPreviewURL,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: y.PreviewListCtn,
                        children: E,
                      }),
                      (0, e.jsx)("p", {
                        className: y.DashboardBtn,
                        children: (0, e.jsx)(u.uU, {
                          href:
                            j.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            S.GetClanSteamID().ConvertTo64BitString() +
                            "/partnerevents/",
                          className: (0, x.A)(b().Button, b().Primary),
                          children: (0, t.we)("#RSSManager_EventDashBoard"),
                        }),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        J([h.oI], ce.prototype, "GetRSSPreviewURL", 1),
          J([h.oI], ce.prototype, "OnLoadPreview", 1),
          (ce = J([Q.PA], ce));
        let ae = class extends N.Component {
          state = {};
          OnToggleChannelAutomation(E) {
            E
              ? (this.setState({ strErrorMessage: void 0 }),
                (0, M.pg)(
                  (0, e.jsx)(Le, {
                    strRSSUrl: this.props.admin.GetRSSUrl(),
                    admin: this.props.admin,
                    bActivatePooling: !0,
                  }),
                  window,
                ))
              : this.setState(
                  {
                    strErrorMessage: void 0,
                    strReasonWaiting: (0, t.we)("#Saving"),
                  },
                  this.BDisableAutomation,
                );
          }
          async BDisableAutomation() {
            this.props.admin
              .UpdateAutomation(!1)
              .catch(() =>
                this.setState({
                  strErrorMessage: (0, t.we)(
                    "#RSSManager_Status_Automation_DisableFailed",
                  ),
                }),
              )
              .finally(() => this.setState({ strReasonWaiting: void 0 }));
          }
          async OnQueueScan(E) {
            this.setState({
              strReasonWaiting: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
            }),
              this.props.admin
                .CheckForNewUpdate()
                .then(() =>
                  (0, M.pg)(
                    (0, e.jsx)(z.o0, {
                      strTitle: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, t.we)("#CuratorAdmin_RSSFeed_queued"),
                    }),
                    (0, c.uX)(E),
                  ),
                )
                .catch((S) =>
                  (0, M.pg)(
                    (0, e.jsx)(z.KG, {
                      strTitle: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, l.H)(S).strErrorMsg,
                    }),
                    (0, c.uX)(E),
                  ),
                )
                .finally(() => this.setState({ strReasonWaiting: void 0 }));
          }
          render() {
            return this.props.admin.BHasSavedRSSURL()
              ? (0, e.jsxs)("div", {
                  children: [
                    !!this.state.strReasonWaiting &&
                      (0, e.jsx)(w.t, {
                        size: "medium",
                        string: this.state.strReasonWaiting,
                      }),
                    !!this.state.strErrorMessage &&
                      (0, e.jsx)("div", {
                        className: y.Error,
                        children: this.state.strErrorMessage,
                      }),
                    (0, e.jsx)(T.RF, {
                      onChange: this.OnToggleChannelAutomation,
                      label: (0, t.we)("#RSSManager_Status_Automation_Desc"),
                      checked: this.props.admin.BIsAutomationEnabled(),
                      description: "",
                    }),
                    this.props.admin.BIsAutomationEnabled() &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, t.we)("#CuratorAdmin_RSSFeed_lastscanned"),
                          "\xA0",
                          (0, t.TW)(
                            this.props.admin.GetRSSLastRtimeChecked(),
                            !1,
                          ),
                          "\xA0 @ ",
                          (0, Ie.KC)(
                            this.props.admin.GetRSSLastRtimeChecked(),
                            { bForce24HourClock: !1 },
                          ),
                          "\xA0",
                          (0, e.jsx)("a", {
                            onClick: this.OnQueueScan,
                            children: (0, e.jsx)("span", {
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_scannow",
                              ),
                            }),
                          }),
                        ],
                      }),
                  ],
                })
              : null;
          }
        };
        J([h.oI], ae.prototype, "OnToggleChannelAutomation", 1),
          J([h.oI], ae.prototype, "OnQueueScan", 1),
          (ae = J([Q.PA], ae));
        let Y = class extends N.Component {
          state = {
            clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
              this.props.newsData.post.url,
            ),
            bLoadingPartnerEvent:
              !!this.props.admin.MapArticleURLToClanEventGID(
                this.props.newsData.post.url,
              ),
          };
          componentDidMount() {
            this.DoPartnerEventLoad();
          }
          async DoPartnerEventLoad() {
            if (this.state.clan_event_gid) {
              let E = this.props.admin.GetClanSteamID(),
                S = H.O3.GetClanEventModel(this.state.clan_event_gid);
              S ||
                (S = await H.O3.LoadHiddenPartnerEvent(
                  E,
                  this.state.clan_event_gid,
                )),
                this.setState({
                  bLoadingPartnerEvent: !1,
                  existingEventModel: S,
                });
            }
          }
          OnOpenPreviewAsPartnerEvent(E) {
            const { newsData: S, clanSteamID: F } = this.props;
            let C = new I.lh();
            (C.GID = "PreviewPartnerEventRow_0"),
              (C.clanSteamID = F),
              (C.postTime = Date.now() / 1e3),
              (C.startTime = Date.now() / 1e3),
              (C.type = ue.uYK),
              C.vecTags.push("auto_rssfeed"),
              C.vecTags.push("curator"),
              C.vecTags.push("curator_public"),
              C.name.set(ue.Bhc, S.title),
              C.description.set(ue.Bhc, S.desc),
              this.ValidateJSONDefault(S.jsondata) && (C.jsondata = S.jsondata),
              C.jsondata.read_more_link ||
                (C.jsondata.read_more_link = S.unique_id);
            let $ = this.props.admin.GetFeedLanguageHandleUnset();
            !C.jsondata.localized_summary &&
              S.post.event_summary &&
              ((C.jsondata.localized_summary = (0, ee.$Y)(
                C.jsondata.localized_summary,
                ue.bP9,
                null,
              )),
              (C.jsondata.localized_summary[ue.Bhc] = S.post.event_summary),
              $ != ue.Bhc &&
                (C.jsondata.localized_summary[$] = S.post.event_summary)),
              !C.jsondata.localized_subtitle &&
                S.post.event_subtitle &&
                ((C.jsondata.localized_subtitle = (0, ee.$Y)(
                  C.jsondata.localized_subtitle,
                  ue.bP9,
                  null,
                )),
                (C.jsondata.localized_subtitle[ue.Bhc] = S.post.event_subtitle),
                $ != ue.Bhc &&
                  (C.jsondata.localized_subtitle[$] = S.post.event_subtitle)),
              this.ShowModalEvent(C);
          }
          OnViewEvent() {
            this.ShowModalEvent(
              H.O3.GetClanEventModel(this.state.clan_event_gid),
            );
          }
          ShowModalEvent(E) {
            let S = document.getElementById("curator_header_area_ctn_id");
            S &&
              (E
                ? S.classList.add("curator_header_area_ctn_hideme")
                : S.classList.remove("curator_header_area_ctn_hideme")),
              this.setState({ eventModelForPreviewNow: E });
          }
          ValidateJSONDefault(E) {
            const S = E;
            return !!(S && !Array.isArray(S) && typeof S == "object");
          }
          OnPostNewsEvent(E) {
            const { newsData: S, fnGetRSSUrl: F } = this.props;
            (0, M.pg)(
              (0, e.jsx)(Le, {
                newsData: S,
                admin: this.props.admin,
                strRSSUrl: F(),
                fnClanEventGID: this.OnClanEventCreateSuccess,
              }),
              (0, c.uX)(E),
            );
          }
          OnUpdateNewsEvent(E) {
            const { newsData: S, fnGetRSSUrl: F } = this.props;
            (0, M.pg)(
              (0, e.jsx)(Le, {
                newsData: S,
                strRSSUrl: F(),
                admin: this.props.admin,
                fnClanEventGID: this.OnClanEventCreateSuccess,
                bUpdatePost: !0,
              }),
              (0, c.uX)(E),
            );
          }
          HideModalEvent() {
            this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
          }
          OnClanEventCreateSuccess(E) {
            this.setState(
              { clan_event_gid: E, bLoadingPartnerEvent: !0 },
              this.DoPartnerEventLoad,
            );
          }
          OnShowRawRSS(E) {
            const S = this.props.newsData.rss_message,
              F = (() => {
                const C = S.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
                if (!C) return S;
                const $ = C[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
                return $ ? (0, q.EK)($[0]) : C[0];
              })();
            (0, M.pg)(
              (0, e.jsx)(z.o0, {
                bAlertDialog: !0,
                strTitle: (0, t.we)("#RSSManager_PostEvent_ViewRaw"),
                children: (0, e.jsx)("textarea", {
                  className: y.RawRSS,
                  value: F,
                  disabled: !0,
                }),
              }),
              (0, c.uX)(E),
            );
          }
          render() {
            const { newsData: E } = this.props,
              {
                clan_event_gid: S,
                existingEventModel: F,
                bLoadingPartnerEvent: C,
              } = this.state;
            let $ = this.props.admin,
              me = $.GetClanSteamID(),
              Se = F && F.BIsStagedEvent(),
              he =
                E.post.appids && E.post.appids.length == 1 && E.post.appids[0],
              ve =
                E.post.recommendation_state !== W.D$.w4 &&
                he &&
                L.Get().BHasReviewForApp(me, he),
              ie = "";
            if (F) {
              const Je =
                F.GetVisibilityStartTimeAndDateUnixSeconds() ||
                F.GetPostTimeAndDateUnixSeconds();
              ie =
                (0, t.$z)(Je) +
                " @ " +
                (0, Ie.KC)(Je, { bForce24HourClock: !1 });
            }
            return (0, e.jsxs)("div", {
              className: (0, x.A)(
                y.PostCtn,
                S ? y.ActivePost : "",
                E.valid_post ? "" : y.ErrorPost,
              ),
              children: [
                (0, e.jsx)("span", {
                  className: y.PostTitle,
                  children: E.title,
                }),
                (0, e.jsx)("br", {}),
                !!F &&
                  (0, e.jsxs)(N.Fragment, {
                    children: [
                      !!F.BIsVisibleEvent() &&
                        (0, e.jsx)("span", {
                          className: y.PostDate,
                          children: (0, t.we)(
                            "#RSSManager_PostEvent_PostedDate",
                            ie,
                          ),
                        }),
                      !F.BIsVisibleEvent() &&
                        (0, e.jsx)("span", {
                          className: (0, x.A)(
                            y.PostDraft,
                            Se ? y.PostStaged : "",
                          ),
                          children: (0, t.we)(
                            Se
                              ? "#RSSManager_PostEvent_Staged"
                              : "#RSSManager_PostEvent_Draft",
                            ie,
                          ),
                        }),
                    ],
                  }),
                !!(!E.valid_post && E.post_error_msg) &&
                  (0, e.jsxs)("div", {
                    className: pe().ErrorStylesBackground,
                    children: [
                      (0, t.we)("#Error_Generic_Label"),
                      " ",
                      (0, t.we)(E.post_error_msg),
                    ],
                  }),
                (0, e.jsxs)("div", {
                  className: y.ButtonCtn,
                  children: [
                    S
                      ? (0, e.jsxs)(N.Fragment, {
                          children: [
                            C
                              ? (0, e.jsx)(w.t, {
                                  string: (0, t.we)("#Loading"),
                                  size: "small",
                                  position: "center",
                                })
                              : (0, e.jsx)("div", {
                                  onClick: this.OnViewEvent,
                                  className: (0, x.A)(b().Button, y.PreviewBtn),
                                  children: (0, t.we)(
                                    "#RSSManager_PostEvent_ViewEvent",
                                  ),
                                }),
                            (0, e.jsx)("a", {
                              className: (0, x.A)(b().Button, y.PreviewBtn),
                              href:
                                j.TS.COMMUNITY_BASE_URL +
                                "gid/" +
                                $.GetClanSteamID().ConvertTo64BitString() +
                                "/partnerevents/edit/" +
                                this.state.clan_event_gid,
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_EditEvent",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              onClick: this.OnUpdateNewsEvent,
                              className: (0, x.A)(b().Button, y.PreviewBtn),
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_UpdateEvent",
                              ),
                            }),
                            ve &&
                              (0, e.jsx)("a", {
                                className: (0, x.A)(b().Button, y.PreviewBtn),
                                href: (0, xe.k2)(
                                  j.TS.STORE_BASE_URL +
                                    "app/" +
                                    E.post.appids[0] +
                                    "/?curator_clanid=" +
                                    me.GetAccountID(),
                                ),
                                children: (0, t.we)("#RSSManager_SeeReview"),
                              }),
                          ],
                        })
                      : (0, e.jsxs)(N.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              onClick: this.OnOpenPreviewAsPartnerEvent,
                              className: (0, x.A)(b().Button, y.PreviewBtn),
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_col_preview_event",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              onClick: this.OnPostNewsEvent,
                              className: (0, x.A)(b().Button, y.PreviewBtn),
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_col_create_event",
                              ),
                            }),
                          ],
                        }),
                    !!(E.rss_message && E.rss_message.length > 0) &&
                      (0, e.jsx)("div", {
                        onClick: this.OnShowRawRSS,
                        className: y.ViewRaw,
                        children: (0, t.we)("#RSSManager_PostEvent_ViewRaw"),
                      }),
                    !!this.state.eventModelForPreviewNow &&
                      (0, e.jsx)(z.of, {
                        className: X.StoreHeaderAdjust,
                        children: (0, e.jsx)("div", {
                          children: (0, e.jsx)(G.H, {
                            event: this.state.eventModelForPreviewNow,
                            fnClose: this.HideModalEvent,
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        J([h.oI], Y.prototype, "DoPartnerEventLoad", 1),
          J([h.oI], Y.prototype, "OnOpenPreviewAsPartnerEvent", 1),
          J([h.oI], Y.prototype, "OnViewEvent", 1),
          J([h.oI], Y.prototype, "OnPostNewsEvent", 1),
          J([h.oI], Y.prototype, "OnUpdateNewsEvent", 1),
          J([h.oI], Y.prototype, "HideModalEvent", 1),
          J([h.oI], Y.prototype, "OnClanEventCreateSuccess", 1),
          J([h.oI], Y.prototype, "OnShowRawRSS", 1),
          (Y = J([Q.PA], Y));
        const k = class kt extends N.Component {
          state = {
            initialState: kt.DetermineStartState(this.props),
            step: kt.DetermineStartState(this.props),
            bDraftMode: !0,
          };
          static DetermineStartState(S) {
            let F = S.admin.BHasSetupFeed(S.strRSSUrl);
            return !S.newsData || !F
              ? S.bActivatePooling
                ? "activate_feed"
                : S.admin.BHasSavedRSSURL()
                  ? "update_feed"
                  : "feed_missing"
              : S.bUpdatePost
                ? "update_post"
                : "create_post";
          }
          OnCreateNewsFeed() {
            this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
          }
          async DoCreateNewsFeed() {
            let S = await this.props.admin.CreateOrUpdateRSSNewFeed(
              this.props.strRSSUrl,
              this.props.bActivatePooling ? 300 : 0,
            );
            S.success != U.R
              ? this.setState({
                  step: "failure",
                  eResult: S.success,
                  strErrorMessage: (0, t.we)("#RSSManager_PostEvent_Failure"),
                })
              : this.setState({
                  step: this.props.newsData ? "create_post" : "success",
                });
          }
          OnCreatePost() {
            this.setState({ step: "waiting_post" }, this.DoCreatePost);
          }
          async DoCreatePost() {
            let S = await this.props.admin.CreatePost(
              this.props.newsData,
              !!this.state.bDraftMode,
            );
            S.GetEResult() != U.R
              ? this.setState({
                  step: "failure",
                  eResult: S.GetEResult(),
                  strErrorMessage: (0, t.we)("#RSSManager_PostEvent_Failure"),
                })
              : (this.props.fnClanEventGID &&
                  this.props.fnClanEventGID(S.Body().clan_event_gid()),
                this.setState({
                  step: "success",
                  eventGID: S.Body().clan_event_gid(),
                }));
          }
          OnChangeDraftMode(S) {
            this.setState({ bDraftMode: S });
          }
          OnChangePermissionsCreateFeed(S) {
            this.setState({ bPermissions: S });
          }
          OnChangeConductCreateFeed(S) {
            this.setState({ bConduct: S });
          }
          GetStrTitle() {
            if (this.props.newsData)
              return (0, t.we)(
                this.props.bUpdatePost
                  ? "#RSSManager_PostEvent_UpdateEvent"
                  : "#RSSManager_PostEvent_Tilte",
              );
            switch (this.state.initialState) {
              case "feed_missing":
                return (0, t.we)("#RSSManager_PostEvent_CreateFeedTitle");
              default:
              case "update_feed":
                return (0, t.we)("#RSSManager_PostEvent_UpdateFeedTitle");
              case "activate_feed":
                return (0, t.we)("#RSSManager_Status_Automation_Activate");
            }
          }
          render() {
            const { strRSSUrl: S } = this.props;
            switch (this.state.step) {
              case "feed_missing":
              case "activate_feed":
              case "update_feed":
              default:
                return (0, e.jsx)(z.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(T.nB, {
                    children: [
                      (0, e.jsxs)(T.a3, {
                        children: [
                          this.props.newsData &&
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreateFeed_DuringPost",
                              ),
                            }),
                          this.state.step !== "activate_feed" &&
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreateFeed_Desc",
                                S,
                              ),
                            }),
                          (0, e.jsx)("div", {
                            children: (0, t.we)(
                              "#RSSManager_CreateFeed_Review",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(T.Yh, {
                              label: (0, t.we)(
                                "#RSSManager_CreateFeed_Permissions_v1",
                              ),
                              onChange: this.OnChangePermissionsCreateFeed,
                              checked: !!this.state.bPermissions,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)(T.Yh, {
                                label: (0, t.we)(
                                  "#RSSManager_CreateFeed_Conduct_v1",
                                ),
                                onChange: this.OnChangeConductCreateFeed,
                                checked: !!this.state.bConduct,
                              }),
                              (0, e.jsx)(u.uU, {
                                href: j.TS.STORE_BASE_URL + "online_conduct/",
                                children: (0, t.we)(
                                  "#RSSManager_CreateFeed_Conduct_Link",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)(T.wi, {
                        children: (0, e.jsx)(T.CB, {
                          bOKDisabled: !(
                            this.state.bPermissions && this.state.bConduct
                          ),
                          onOK: this.OnCreateNewsFeed,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "failure":
                return (0, e.jsx)(z.KG, {
                  strDescription: (0, t.we)("#RSSManager_PostEvent_Failure"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)("div", {
                    children: (0, t.we)(
                      "#Error_Description",
                      this.state.eResult,
                      this.state.strErrorMessage,
                    ),
                  }),
                });
              case "creating_feed":
              case "waiting_post":
                return (0, e.jsx)(z.o0, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, t.we)("#RSSManager_PostEvent_InFlight"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)(w.t, { position: "center" }),
                });
              case "create_post":
                return (0, e.jsx)(z.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(T.nB, {
                    children: [
                      (0, e.jsx)(T.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreatePost",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: y.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              children: (0, e.jsx)(T.Yh, {
                                label: (0, t.we)(
                                  "#RSSManager_PostEvent_CreatePost_Draft",
                                ),
                                onChange: this.OnChangeDraftMode,
                                checked: !!this.state.bDraftMode,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)(T.wi, {
                        children: (0, e.jsx)(T.CB, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "update_post":
                return (0, e.jsx)(z.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(T.nB, {
                    children: [
                      (0, e.jsx)(T.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_UpdatePost",
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              className: y.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }),
                      }),
                      (0, e.jsx)(T.wi, {
                        children: (0, e.jsx)(T.CB, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "success":
                return (0, e.jsx)(z.o0, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, t.we)(
                    this.props.newsData
                      ? "#RSSManager_PostEvent_Success"
                      : "#RSSManager_PostEvent_Success_feed",
                  ),
                  closeModal: this.props.closeModal,
                  bAlertDialog: !0,
                  children:
                    !!this.state.eventGID &&
                    (0, e.jsx)("a", {
                      href:
                        j.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        this.props.admin
                          .GetClanSteamID()
                          .ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        this.state.eventGID,
                      children: (0, t.we)("#RSSManager_PostEvent_EventLink"),
                    }),
                });
            }
          }
        };
        J([h.oI], k.prototype, "OnCreateNewsFeed", 1),
          J([h.oI], k.prototype, "DoCreateNewsFeed", 1),
          J([h.oI], k.prototype, "OnCreatePost", 1),
          J([h.oI], k.prototype, "DoCreatePost", 1),
          J([h.oI], k.prototype, "OnChangeDraftMode", 1),
          J([h.oI], k.prototype, "OnChangePermissionsCreateFeed", 1),
          J([h.oI], k.prototype, "OnChangeConductCreateFeed", 1),
          J([h.oI], k.prototype, "GetStrTitle", 1);
        let Le = k;
      },
      17809: (ne, fe, s) => {
        "use strict";
        s.d(fe, { d: () => Ut });
        var e = s(7850),
          P = s(19367),
          f = s(90626),
          i = s(3685),
          j = s(85528),
          de = s(77495),
          L = s(18210),
          Q = s(3166),
          N = s(75779),
          ue = s(80902),
          U = s(30454);
        async function I() {
          const v = await (0, U.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!v.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return v.counts;
        }
        const W = 300 * 1e3;
        function H() {
          return ["DeckCompatCounts"];
        }
        function T() {
          return { queryKey: H(), queryFn: () => I(), staleTime: W, retry: !1 };
        }
        function G() {
          const { data: v } = (0, ue.I)(T());
          return v;
        }
        function K(v, A) {
          switch (A) {
            case N.sd:
              return v?.playable;
            case N.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var b = s(70187),
          X = s(36549),
          z = s(39153),
          M = s(6878),
          w = s(99412),
          u = s(72609),
          x = s(47610),
          c = s(18860),
          t = s(41635),
          l = s(25792),
          h = s(85599),
          y = s(87805);
        const ee = f.Fragment;
        function q(v) {
          const {
              reservationPackageID: A,
              depositPackageID: B,
              bIsPreview: V,
              psuLessPackageID: D,
              strOutOfStockOverride: Z,
              strDeliveryOverride: le,
              bDeliveryOverrideOnlyIfOutOfStock: Me,
              section: je,
            } = v,
            { data: re } = (0, x.DR)(A),
            { data: Te } = (0, x.DR)(D),
            Fe = (0, f.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + A,
                  reservation_package: A,
                  deposit_package: B,
                  localized_reservation_desc: (0, t.$Y)([], w.bP9, null),
                  localized_out_of_stock_override: (0, t.$Y)(
                    [Z || null],
                    w.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, t.$Y)(
                    [le || null],
                    w.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!Me,
                  psu_less_package: D,
                },
              ],
              [A, B, Z, le, Me, D],
            );
          if (!re || (D && !Te))
            return (0, e.jsx)(h.t, {
              string: (0, L.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Ke = !u.iA.logged_in || !re.account_restricted_from_purchasing,
            pt =
              re.reservation_state == c.G.k_EPurchaseReservationState_Reserved
                ? re
                : void 0;
          return (0, e.jsxs)(l.tH, {
            children: [
              (0, e.jsx)(f.Suspense, {
                fallback: null,
                children: (0, e.jsx)(ee, {
                  bIsPreview: !!V,
                  rgReservationDef: Fe,
                }),
              }),
              !!re.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Fe[0].unique_id,
                  children: [
                    (0, e.jsx)(y.b, {
                      reservationDef: Fe[0],
                      hardwareDetail: re,
                      bPSULessModel: !1,
                      reservedHardwareDetail: pt,
                    }),
                    Ke &&
                      (0, e.jsx)(y.p, {
                        section: je,
                        reservationDef: Fe[0],
                        hardwareDetail: re,
                        reservedHardwareDetail: pt,
                      }),
                    Te &&
                      Te?.allow_purchase_in_country &&
                      (0, e.jsx)(y.b, {
                        reservationDef: Fe[0],
                        hardwareDetail: Te,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function ge(v) {
          if (v?.bDepositRequired) {
            if (
              v.rgDepositPackageInfo &&
              v.rgDepositPackageInfo?.length > 0 &&
              v.rgDepositPackageInfo.filter((A) => A.bVisible).length == 0 &&
              v?.rgReservationPackageInfo &&
              v?.rgReservationPackageInfo?.length > 0 &&
              v?.rgReservationPackageInfo.filter((A) => A.bVisible).length == 0
            )
              return !1;
          } else if (
            v?.rgReservationPackageInfo &&
            v?.rgReservationPackageInfo?.length > 0 &&
            v?.rgReservationPackageInfo.filter((A) => A.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var pe = s(21035),
          xe = s(72865),
          Ie = s(38081),
          Ne = s.n(Ie),
          Ue = s(36707),
          J = s(69596),
          Re = s(10026),
          ce = s.n(Re),
          ae = s(19298),
          Y = s(11996),
          k = s(19047),
          Le = s(36118),
          E = s(47689),
          S = s(89926),
          F = s(32545),
          C = s.n(F);
        function $(v) {
          const { appID: A, classOverride: B, styleOverride: V } = v,
            [D, Z] = (0, f.useState)(!1),
            le = (0, E.m)("GameHoverFollowButton"),
            { elDialogElement: Me, fnShowLogonDialog: je } = (0, S.l)(),
            re = (0, Y.Fh)(A),
            { mutateAsync: Te } = (0, k.L)(A, !re, void 0),
            Fe = async (Ke) => {
              Ke.preventDefault(),
                Ke.stopPropagation(),
                Q.iA.logged_in
                  ? (Z(!0), await Te(), le.token.reason || Z(!1))
                  : je();
            };
          return (0, e.jsxs)(ae.Z, {
            className: (0, Ue.A)(C().FollowButton, B),
            onClick: Fe,
            style: V,
            children: [
              re ? (0, e.jsx)(Le.pPV, {}) : (0, e.jsx)(Le.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ue.A)(
                  C().FollowButtonText,
                  D && C().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, L.we)(
                  re ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              Me,
            ],
          });
        }
        function me(v) {
          const { appid: A, color: B, bgcolor: V } = v,
            D = (0, xe.n9)();
          return (0, e.jsx)($, {
            appID: A,
            classOverride: (0, Ue.A)(
              Ne().FollowGameButtonNotTop,
              ce().BBCodeFollowButton,
            ),
            styleOverride: { color: B, backgroundColor: V },
          });
        }
        function Se(v) {
          const A = Number(v.args.appid);
          if (!A) return null;
          const B = (0, J.O)(v.args.color, "black"),
            V = (0, J.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(me, { appid: A, color: B, bgcolor: V });
        }
        var he = s(18657),
          ve = s.n(he),
          ie = s(63026);
        function Je(v) {
          const { clanAccountID: A, color: B, bgcolor: V } = v,
            [D, Z] = f.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ue.A)(ve().BBCodeFollowButton, D && ve().isHovered),
            onMouseEnter: () => Z(!0),
            onMouseLeave: () => Z(!1),
            children: (0, e.jsx)(ie.Q, {
              nCreatorAccountID: A,
              classOverride: Ne().FollowGameButtonNotTop,
              styleOverride: { color: B, backgroundColor: V },
              followType: "group",
            }),
          });
        }
        function ft(v) {
          const { event: A } = v.context,
            B = Number(v.args.groupid) || A?.clanSteamID.GetAccountID();
          if (!B) return null;
          const V = (0, J.O)(v.args.color, "black"),
            D = (0, J.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(Je, { clanAccountID: B, color: V, bgcolor: D });
        }
        var mt = s(83482),
          St = s(44267),
          yt = s(9202),
          Qe = s.n(yt),
          ut = s(29522);
        function At(v) {
          const { appid: A, color: B, bgcolor: V } = v,
            D = (0, xe.n9)(),
            Z = (0, ut.$5)(A),
            le = (0, mt.L3)(D);
          return (0, e.jsx)("div", {
            className: Qe().WishlistHoverCtn,
            children: (0, e.jsx)(St.E, {
              snr: le,
              id: Z,
              classOverride: (0, Ue.A)(
                Ne().WishlistButtonNotTop,
                Qe().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: B, backgroundColor: V },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function xt(v) {
          const A = Number(v.args.appid);
          if (!A) return null;
          const B = (0, J.O)(v.args.color, "black"),
            V = (0, J.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(At, { appid: A, color: B, bgcolor: V });
        }
        let Ye = null;
        function It() {
          return (
            Ye == null &&
              (Ye = new Map([
                ["wishlist", { Constructor: xt, autocloses: !1 }],
                ["followgroup", { Constructor: ft, autocloses: !1 }],
              ])),
            Ye
          );
        }
        var wt = s(37656),
          we = s(29868),
          We = s(24642);
        function gt(v) {
          return v < 10 ? "0" + v : v;
        }
        function Mt(v) {
          const { giveawayid: A } = v,
            B = (0, wt.w)(A),
            {
              bLoadingGiveawayInfo: V,
              winner_count: D,
              closed: Z,
              seconds_until_drawing: le,
            } = B;
          return V
            ? null
            : (0, e.jsxs)("div", {
                className: we.countdownCtn,
                children: [
                  !!Z &&
                    (0, e.jsx)("div", {
                      className: we.Closed,
                      children:
                        D > 0
                          ? (0, L.we)("#Giveaway_Closed", (0, We.D)(D))
                          : (0, L.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !Z &&
                    (0, e.jsxs)(f.Fragment, {
                      children: [
                        le <= 0
                          ? (0, e.jsxs)("div", {
                              className: we.Throbber,
                              children: [
                                (0, e.jsx)(h.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, L.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: we.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: we.CountDownTime,
                                  children:
                                    gt(Math.floor(le / 60)) + ":" + gt(le % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: we.CountDownText,
                                  children: [
                                    (0, L.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, L.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        D > 0 &&
                          (0, e.jsxs)("div", {
                            className: we.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: we.WinnerCount,
                                children: (0, We.D)(D),
                              }),
                              (0, e.jsx)("div", {
                                className: we.WinnerText,
                                children: (0, L.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var ke = s(57646);
        function _e(v) {
          const A = Number(v.args.packageid);
          return A
            ? (0, e.jsx)(ke.eF, {
                packageID: A,
                display_style: (0, ke._w)(v.args.display),
              })
            : null;
        }
        function Xe(v) {
          const A = Number(v.args.packageid),
            B = Number(v.args.compareid);
          return !A || !B
            ? null
            : (0, e.jsx)(ke.hJ, { packageID: A, compareID: B });
        }
        var bt = s(88245),
          Et = s(35702),
          Oe = s(16412),
          Dt = s(92757),
          jt = s(39256),
          Tt = s(4720),
          Be = s(75110),
          ze = s(57810),
          at = s(36631),
          Bt = s(79519),
          Ze = s(81416);
        function Ce(v) {
          const { eventModel: A, nEventBadgeID: B } = v,
            V = (0, Et.fy)(B);
          if (V?.level > 0) {
            let D = V.level;
            if (A?.BHasSaleEnabled()) {
              const Z = A.GetSaleSectionsByType("badge_progress");
              if (Z?.length == 1) {
                const le = Z[0].badge_progress;
                if (le?.event_badgeid == B && le?.granted_by_discovery_queue) {
                  const Me = le.levels[le.levels.length - 1].level;
                  return (0, e.jsx)(rt, {
                    eventModel: A,
                    nBadgeLevel: D,
                    nMaxLevel: Me,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, We.D)(D),
            });
          }
          return null;
        }
        function rt(v) {
          const { eventModel: A, nBadgeLevel: B, nMaxLevel: V } = v,
            D = f.useMemo(() => {
              const re = A.GetSaleSections().filter(
                (Te) => Te.section_type == "discoveryqueue",
              );
              return re?.length > 0 ? re[0] : null;
            }, [A]),
            { storePageFilter: Z, eStoreDiscoveryQueueType: le } = f.useMemo(
              () => (0, Be.lx)(A, D),
              [A, D],
            ),
            Me = (0, ze.Uf)(le, Z),
            je = Math.min(B + Me, V);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, We.D)(je),
          });
        }
        function Ge(v) {
          const { event: A } = v.context,
            B = Number.parseInt((0, b.j$)(v.args, "eventid"));
          return Q.iA.logged_in && B
            ? (0, e.jsx)(Ce, { nEventBadgeID: B, eventModel: A })
            : null;
        }
        function $e(v) {
          const { nDoorIndex: A, children: B } = v,
            V = (0, z.OM)(A),
            D = (0, z.gP)(),
            [Z, le] = f.useState(!1),
            [Me, je] = f.useState(!1),
            { elDialogElement: re, fnShowLogonDialog: Te } = (0, S.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Oe.$n, {
                disabled: V,
                onClick: (Fe) => {
                  Z ||
                    (Q.iA.logged_in
                      ? (le(!0),
                        D({ iDoorIndex: A })
                          .then((Ke) => {
                            Ke || je(!0), le(!1);
                          })
                          .catch(() => {
                            je(!0), le(!1);
                          }))
                      : Te());
                },
                children: Me
                  ? (0, e.jsx)("div", {
                      children: (0, L.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!Z && (0, e.jsx)(h.t, { size: "small" }),
                        !!V && (0, e.jsx)(Le.Jlk, {}),
                        B,
                      ],
                    }),
              }),
              re,
            ],
          });
        }
        function He(v) {
          const A = Number.parseInt((0, b.j$)(v.args)) || 0;
          return A >= 0 && A < 32
            ? (0, e.jsx)($e, { nDoorIndex: A, children: v.children })
            : null;
        }
        const ye = (0, Dt.y)(Bt.H);
        function Ct(v) {
          const A = Number.parseInt((0, b.j$)(v.args)),
            { event: B, showErrorInfo: V } = v.context;
          if (A) {
            const D = B?.jsondata?.sale_sections?.findIndex(
              (Z) => Z.unique_id == A,
            );
            if (D >= 0) {
              const Z = B.GetDayIndexFromEventStart();
              return (0, e.jsx)(at.Cs, {
                location: V ? at.HY : at.bs,
                children: (0, e.jsx)(ye, {
                  event: B,
                  section: B.jsondata.sale_sections[D],
                  activeTab: new Tt.y(null, Z),
                  language: v.language,
                  nSaleDayIndex: Z,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: V
                    ? Ze.S.EPreviewMode_Enabled
                    : Ze.S.EPreviewMode_Disabled,
                }),
              });
            } else if (V)
              return (0, e.jsxs)("div", {
                className: jt.ErrorDiv,
                children: ["Error could not find sale section ", A],
              });
          }
          return null;
        }
        let qe = null;
        function Ee() {
          return (
            qe == null &&
              (qe = new Map([
                ...Array.from(It().entries()),
                [
                  "itemdef",
                  {
                    Constructor: Rt,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Se, autocloses: !1 }],
                ["deckcompatcount", { Constructor: Lt, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Ot, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: st, autocloses: !1 }],
                ["price", { Constructor: _e, autocloses: !1 }],
                ["pricesavings", { Constructor: Xe, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: Gt, autocloses: !1 }],
                ["chooseaccount", { Constructor: Ve, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: Ge, autocloses: !1 }],
                ["optindoorquest", { Constructor: He, autocloses: !1 }],
                ["classname", { Constructor: ht, autocloses: !1 }],
                ["localize", { Constructor: Pt, autocloses: !1 }],
                ["salesection", { Constructor: Ct, autocloses: !1 }],
                ["reservationbutton", { Constructor: et, autocloses: !1 }],
              ])),
            qe
          );
        }
        function Rt(v) {
          const { event: A } = v.context,
            B = Number.parseInt((0, b.j$)(v.args, "appid")),
            V = Number.parseInt((0, b.j$)(v.args, "itemdefid")),
            D = Number.parseInt((0, b.j$)(v.args, "maxquantity")),
            Z = (0, b.j$)(v.args, "calltoaction");
          return !(0, bt.gS)(B, V, !1) || !A
            ? (0, e.jsx)(h.t, {
                size: "small",
                position: "center",
                string: (0, L.we)("#Loading"),
              })
            : (0, e.jsx)(pe.f, {
                language: v.language,
                clanAccountID: A.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: B, nItemDefID: V, max_quantity: D },
                strCallToAction: Z,
              });
        }
        function Lt(v) {
          const A = G();
          if (!A) return (0, e.jsx)(h.t, { size: "small" });
          const B = Number.parseInt((0, b.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, We.D)(Number(K(A, B))) });
        }
        function Ot(v) {
          const A = (0, X.jR)(Q.iA.accountid, "library");
          if (!A) return (0, e.jsx)(h.t, { size: "small" });
          const B = Number.parseInt((0, b.j$)(v.args));
          let V = A.verifiedList?.length || 0;
          switch (B) {
            case N.sd:
              V = A.playableList?.length || 0;
              break;
            case N.V8:
              V = A.unsupportedList?.length || 0;
              break;
            case N.YX:
              V = A.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, We.D)(Number(V)) });
        }
        function Gt(v) {
          const A = Number.parseInt((0, b.j$)(v.args)),
            B =
              "hide" in v.args && !!Number.parseInt((0, b.j$)(v.args, "hide"));
          return A >= 0
            ? (0, e.jsx)(Ft, { nDoorIndex: A, bHide: B, children: v.children })
            : null;
        }
        function Ft(v) {
          const { nDoorIndex: A, bHide: B, children: V } = v,
            D = (0, z.OM)(A);
          return D == null
            ? null
            : (D && !B) || (!D && B)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function Ve(v) {
          if (Q.iA.logged_in) {
            const A = Number.parseInt((0, b.j$)(v.args)),
              B = Number.parseInt((0, b.j$)(v.args, "mod"));
            if (B > 0 && A < B && Q.iA.accountid % B == A) return v.children;
          }
          return null;
        }
        function ht(v) {
          const A = (0, b.j$)(v.args);
          return A?.trim().length > 0
            ? (0, e.jsx)("div", { className: A.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function Pt(v) {
          return (0, e.jsx)("span", {
            className: M.LocalizeBlock,
            children: (0, L.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function st(v) {
          let A = (0, b.j$)(v.args);
          return A
            ? (0, e.jsx)(Mt, { giveawayid: A })
            : (0, e.jsx)(f.Fragment, {});
        }
        function et(v) {
          const { showErrorInfo: A, event: B } = v.context,
            V = Number.parseInt((0, b.j$)(v.args)),
            D = f.useMemo(() => {
              if (B)
                return B.jsondata.sale_sections?.find(
                  (Z) =>
                    Z.section_type == "vo_internal" &&
                    (Z.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      Z.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [B]);
          if (V && D) {
            const Z = Number.parseInt((0, b.j$)(v.args, "depositpackageid")),
              le = Number.parseInt((0, b.j$)(v.args, "psulesspackageid")),
              Me = (0, b.j$)(v.args, "out_of_stock_override"),
              je = (0, b.j$)(v.args, "delivery_override"),
              re = (0, b.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(q, {
              section: D,
              reservationPackageID: V,
              depositPackageID: Z,
              psuLessPackageID: le,
              strOutOfStockOverride: Me,
              strDeliveryOverride: re || je,
              bDeliveryOverrideOnlyIfOutOfStock: !!re,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var O = s(71698),
          vt = s(94520);
        function Ut(v) {
          const { bSalePage: A } = v,
            [B, V] = f.useState(!1);
          return (
            (0, O.H)(B, A),
            f.useEffect(() => {
              j.Vw.Init(new i.D(Q.TS.WEBAPI_BASE_URL)), de.O3.Init(), V(!0);
            }, []),
            f.useEffect(() => {
              const D = (0, L.l4)();
              D && P.locale(D);
            }, []),
            B
              ? A
                ? (0, e.jsx)(vt.d3, { dictionary: Ee(), children: v.children })
                : v.children
              : null
          );
        }
      },
      52671: (ne, fe, s) => {
        "use strict";
        s.r(fe), s.d(fe, { default: () => L });
        var e = s(7850),
          P = s(90626),
          f = s(92757),
          i = s(82559),
          j = s(57223),
          de = s(25792);
        class L extends P.Component {
          state = { bIsLoading: !0 };
          componentDidMount() {
            j.A.Get(), this.setState({ bIsLoading: !1 });
          }
          render() {
            return this.state.bIsLoading
              ? null
              : (0, e.jsx)(de.tH, {
                  children: (0, e.jsxs)(f.dO, {
                    children: [
                      (0, e.jsx)(f.qh, {
                        exact: !0,
                        path: "/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss",
                        component: i.A,
                      }),
                      (0, e.jsx)(f.qh, { children: !1 }),
                    ],
                  }),
                });
          }
        }
      },
      87278: (ne, fe, s) => {
        "use strict";
        s.r(fe), s.d(fe, { default: () => dn });
        var e = s(7850),
          P = s(58732),
          f = s(57223),
          i = s(72604),
          j = s(3166),
          de = s(41735),
          L = s.n(de),
          Q = s(34592);
        class N {
          static s_Singleton;
          m_rgRSSEnabledClans = [];
          GetAllRSSEnabledClans() {
            return this.m_rgRSSEnabledClans;
          }
          GetTrustedEnabledClans(n) {
            return this.m_rgRSSEnabledClans
              .filter((r) => r.is_trusted_press == n)
              .map((r) => r.clan_accoundid);
          }
          static Get() {
            return (
              N.s_Singleton ||
                ((N.s_Singleton = new N()), N.s_Singleton.Init()),
              N.s_Singleton
            );
          }
          Init() {
            let n = (0, j.Tc)("rssaccountinfo", "application_config");
            this.ValidateRSSAccountConfig(n) && (this.m_rgRSSEnabledClans = n);
          }
          ValidateRSSAccountConfig(n) {
            const r = n;
            return (
              r &&
              Array.isArray(r) &&
              r.length > 0 &&
              typeof r[0] == "object" &&
              typeof r[0].clan_accoundid == "number"
            );
          }
          async LoadKnownAllRSSInfo() {
            const n = new Array(),
              r = f.A.Get();
            this.m_rgRSSEnabledClans.forEach((o) => {
              r.BHasClanIDLoaded(o.clan_accoundid) ||
                n.push(r.QueueCuratorAdminInfoLoad(o.clan_accoundid));
            }),
              await Promise.all(n);
          }
          ExtractWithoutRSSAutomation() {
            const n = [],
              r = f.A.Get();
            return (
              this.m_rgRSSEnabledClans.forEach((o) => {
                const d = r.GetRSSAdminForClanAccountID(o.clan_accoundid);
                d && !d.BIsAutomationEnabled() && n.push(o.clan_accoundid);
              }),
              n
            );
          }
          async HintLoadAccounts() {}
          async ReindexClanEventsAndReloadAccount(n) {
            const r =
                j.TS.STORE_BASE_URL + "events_admin/ajaxflushandreindexrss",
              o = new FormData();
            o.set("sessionid", (0, j.KC)()), o.append("clanids", "" + n);
            try {
              if (
                (await L().post(r, o, { withCredentials: !0 }))?.data
                  ?.success == i.R
              )
                return !0;
            } catch (d) {
              const m = (0, Q.H)(d);
              console.error(
                "Failed to ReindexClanEventsAndReloadAccount: " + m.strErrorMsg,
                m,
              );
            }
            return !1;
          }
        }
        var ue = s(82559),
          U = s(75844),
          I = s(90626),
          W = s(92757),
          H = s(76559),
          T = s(813),
          G = s(16412),
          K = s(25792),
          b = s(13784),
          X = s(88003),
          z = s(36118),
          M = s(85599),
          w = s(71421),
          u = s(36707),
          x = s(82734),
          c = s(18210),
          t = s(52081),
          l = s.n(t),
          h = s(96538),
          y = s(2259),
          ee = s(24642);
        const q = (a) => {
            const [n, r] = (0, I.useState)(!0);
            if (
              ((0, I.useEffect)(() => {
                (async () => (
                  T.ac.Init(), await N.Get().HintLoadAccounts(), r(!1)
                ))();
              }, []),
              n)
            )
              return (0, e.jsx)(M.t, {
                string: (0, c.we)("#Loading"),
                size: "medium",
              });
            const o = N.Get().GetTrustedEnabledClans(!0),
              d = N.Get().GetTrustedEnabledClans(!1);
            return (0, e.jsx)("div", {
              children: (0, e.jsxs)(K.tH, {
                children: [
                  (0, e.jsx)("h1", {
                    children: (0, c.we)("#RSSModeration_Title"),
                  }),
                  (0, e.jsx)(pe, {}),
                  (0, e.jsx)(J, {
                    rgClanIDs: N.Get()
                      .GetAllRSSEnabledClans()
                      .map((m) => m.clan_accoundid),
                  }),
                  (0, e.jsx)(xe, {
                    rgClanIDs: o,
                    strTitle: (0, c.we)("#RSSModeration_TrustTitle"),
                  }),
                  (0, e.jsx)(xe, {
                    rgClanIDs: d,
                    strTitle: (0, c.we)("#RSSModeration_RestTitle"),
                  }),
                ],
              }),
            });
          },
          ge = (0, W.y)(q),
          pe = (0, U.PA)((a) => {
            const [n, r] = (0, I.useState)(!1),
              [o, d] = (0, I.useState)(void 0);
            return n
              ? (0, e.jsx)(M.t, {
                  string: (0, c.we)("#Loading"),
                  size: "medium",
                })
              : o !== void 0
                ? o.length > 0
                  ? (0, e.jsx)(xe, {
                      rgClanIDs: o,
                      strTitle: (0, c.we)("#RSSModeration_InactiveAutomation"),
                    })
                  : (0, e.jsx)("div", {
                      children: (0, c.we)(
                        "#RSSModreation_AllAutomationEnabled",
                      ),
                    })
                : (0, e.jsxs)(G.$n, {
                    onClick: async () => {
                      r(!0),
                        await N.Get().LoadKnownAllRSSInfo(),
                        d(N.Get().ExtractWithoutRSSAutomation()),
                        r(!1);
                    },
                    children: [(0, c.we)("#RSSModeration_FindInActive"), " "],
                  });
          }),
          xe = (a) => {
            const { rgClanIDs: n, strTitle: r } = a,
              [o, d] = (0, I.useState)(!1);
            let m = null;
            return (
              o || (m = n.map((g) => (0, e.jsx)(Ie, { clanAccountID: g }, g))),
              (0, e.jsxs)("div", {
                className: (0, u.A)(l().SectionContainer),
                children: [
                  (0, e.jsxs)("h2", {
                    className: (0, u.A)(l().ModSectionTitle),
                    onDoubleClick: () => d(!o),
                    children: [
                      r,
                      (0, e.jsx)("span", { children: "\xA0" }),
                      (0, e.jsx)(G.$n, {
                        className: l().ResizeButton,
                        onClick: () => d(!o),
                        children: o
                          ? (0, e.jsx)(z.hz4, {})
                          : (0, e.jsx)(z.Xjb, {}),
                      }),
                    ],
                  }),
                  o &&
                    (0, e.jsx)(G.$n, {
                      onClick: () => d(!1),
                      children: (0, c.we)("#Sale_ShowContents"),
                    }),
                  m,
                ],
              })
            );
          },
          Ie = (0, U.PA)((a) => {
            const { clanAccountID: n } = a;
            return T.ac.BHasClanInfoLoadedByAccountID(n) &&
              f.A.Get().BHasClanIDLoaded(n)
              ? (0, e.jsx)(Ue, {
                  clanInfo: T.ac.GetClanInfoByClanAccountID(n),
                  rssAdminInfo: f.A.Get().GetRSSAdminForClanAccountID(n),
                })
              : (0, e.jsx)(Ne, { clanAccountID: n });
          }),
          Ne = (a) => {
            const { clanAccountID: n } = a,
              r = "500px",
              o = async () => {
                const m = H.b.InitFromClanID(n);
                await Promise.all([
                  T.ac.LoadClanInfoForClanSteamID(m),
                  f.A.Get().QueueCuratorAdminInfoLoad(n),
                ]);
              },
              d = (0, y.OO)(
                { onEnter: o },
                { rootMargin: `${r} 0px ${r} 0px` },
              );
            return (0, e.jsx)("div", {
              ref: d,
              className: l().TileContainer,
              children: (0, e.jsxs)("div", {
                children: [(0, c.we)("#Loading"), " - ", n],
              }),
            });
          },
          Ue = (a) => {
            const { clanInfo: n, rssAdminInfo: r } = a,
              [o, d] = (0, I.useState)(!1),
              m = j.TS.STORE_BASE_URL + "newshub/group/" + n.clanAccountID,
              g =
                j.TS.STORE_BASE_URL +
                "curator/" +
                n.clanAccountID +
                "/admin/manage_rss",
              p = j.TS.COMMUNITY_BASE_URL + "group/" + n.clanAccountID,
              _ =
                "https://steamsupport.valvesoftware.com/clan/overview/" +
                H.b.InitFromClanID(n.clanAccountID).ConvertTo64BitString(),
              se = f.A.Get().GetRSSAdminStats(n.clanAccountID);
            return (0, e.jsxs)("div", {
              className: (0, u.A)(l().TileContainer),
              children: [
                (0, e.jsxs)("div", {
                  className: (0, u.A)(l().TileSpread),
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          children: [n.group_name, " - ", n.clanAccountID],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, c.we)("#CuratorAdmin_RSSFeed"),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("a", {
                              href: r.GetRSSUrl(),
                              children: r.GetRSSUrl(),
                            }),
                          ],
                        }),
                        !!se &&
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)("div", {
                                children: (0, c.we)(
                                  "#RSSModeration_TotalEvents",
                                  (0, ee.D)(se.total_event_count),
                                ),
                              }),
                              (0, e.jsx)("div", {
                                children: (0, c.we)(
                                  "#RSSModeration_RSSEvents",
                                  (0, ee.D)(se.rss_event_count),
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsx)(G.$n, {
                          onClick: () => d(!o),
                          children: (0, c.we)(
                            o
                              ? "#Bbcode_Expand_Details_Expanded"
                              : "#Bbcode_Expand_Details_Collapsed",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsxs)("ul", {
                        children: [
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: m,
                              children: (0, c.we)(
                                "#EventDisplay_NewsHubSubtitle",
                              ),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: g,
                              children: (0, c.we)(
                                "#CuratorAdmin_RSSFeed_title",
                              ),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: p,
                              children: (0, c.we)("#RSSModeration_GroupPage"),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: _,
                              children: (0, c.we)("#RSSModeration_SupportPage"),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(J, {
                              rgClanIDs: [n.clanAccountID],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: l().CreatorCtn,
                      children: (0, e.jsx)(b.hA, {
                        bHideCreatorType: !0,
                        creatorID: {
                          name: null,
                          clan_account_id: n.clanAccountID,
                          type: "developer",
                        },
                        bSmallFormat: !0,
                      }),
                    }),
                  ],
                }),
                !!o &&
                  (0, e.jsx)(e.Fragment, {
                    children: r.BHasSavedRSSURL()
                      ? (0, e.jsx)(ue.q, { strRssURL: r.GetRSSUrl(), admin: r })
                      : (0, e.jsx)("div", {
                          children: (0, c.we)("#RSSModeration_NoRSSFeed"),
                        }),
                  }),
              ],
            });
          },
          J = (a) => {
            const n = (r) => {
              (0, X.pg)((0, e.jsx)(Re, { ...a }), (0, x.uX)(r));
            };
            return (0, e.jsx)(w.he, {
              toolTipContent: (0, c.we)("#RSSModeration_ReindexAndReload_ttip"),
              children: (0, e.jsx)(G.$n, {
                onClick: n,
                children: (0, c.we)("#RSSModeration_ReindexAndReload"),
              }),
            });
          },
          Re = (a) => {
            const [n, r] = (0, I.useState)(void 0),
              [o, d] = (0, I.useState)(!1),
              [m, g] = (0, I.useState)(void 0),
              p = () => a.closeModal && a.closeModal(),
              R = async () => {
                let _ = 0;
                r(_);
                for (let se = 0; se < a.rgClanIDs.length; ++se) {
                  let te = a.rgClanIDs[se];
                  if (await N.Get().ReindexClanEventsAndReloadAccount(te))
                    (_ += 1), r(_);
                  else {
                    g((0, c.we)("#Error_Generic_Label"));
                    break;
                  }
                }
                d(!0);
              };
            return (0, e.jsx)(h.x_, {
              onEscKeypress: p,
              children: (0, e.jsxs)(G.UC, {
                children: [
                  (0, e.jsxs)(G.Y9, {
                    children: [
                      " ",
                      (0, c.we)("#RSSModeration_ReindexAndReload"),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)(G.nB, {
                    children: [
                      (0, e.jsxs)(G.a3, {
                        children: [
                          n === void 0
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, c.we)(
                                      "#RSSModeration_Reindex_Verify",
                                      a.rgClanIDs.length,
                                    ),
                                  }),
                                  (0, e.jsx)(G.jn, {
                                    onClick: R,
                                    children: (0, c.we)("#Button_Continue"),
                                  }),
                                ],
                              })
                            : (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, c.we)(
                                      "#RSSModeration_Reindex_Action",
                                      n,
                                      a.rgClanIDs.length,
                                    ),
                                  }),
                                  o
                                    ? (0, e.jsx)("span", {
                                        children: (0, c.we)(
                                          "#EventEditor_ImportFromHTML_ConvertFinished",
                                        ),
                                      })
                                    : (0, e.jsx)(M.t, {
                                        size: "small",
                                        string: (0, c.we)("#Updating"),
                                      }),
                                ],
                              }),
                          !!m && (0, e.jsxs)("span", { children: [m, " "] }),
                        ],
                      }),
                      (0, e.jsx)(G.wi, {
                        children: (0, e.jsx)(G.$n, {
                          onClick: p,
                          children: (0, c.we)(
                            o ? "#Button_OK" : "#Button_Cancel",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        var ce = s(77495),
          ae = s(30096),
          Y = s(99412),
          k = s(14947),
          Le = Object.defineProperty,
          E = Object.getOwnPropertyDescriptor,
          S = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? E(n, r) : n, m = a.length - 1, g;
              m >= 0;
              m--
            )
              (g = a[m]) && (d = (o ? g(n, r, d) : g(d)) || d);
            return o && d && Le(n, r, d), d;
          };
        const F = class lt {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(n) {
            return this.m_mapEventGIDToSolrData.has(n);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return (
              lt.s_Singleton || (lt.s_Singleton = new lt()), lt.s_Singleton
            );
          }
          constructor() {
            (0, k.Gn)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForQueryIncremental(
            n,
            r = 0,
            o = 10,
            d,
            m,
            g,
            p,
            R,
            _,
          ) {
            const se = await this.GetLatestPartnerEvents(
              n,
              r,
              o,
              d,
              m,
              g,
              p,
              R,
              _,
            );
            let te = new Array();
            return (
              (0, k.h5)(() => {
                se.forEach((Ae) => {
                  this.m_mapEventGIDToSolrData.has(Ae.unique_id) ||
                    (te.push(Ae),
                    this.m_mapEventGIDToSolrData.set(Ae.unique_id, Ae),
                    this.m_listEvents.push(Ae));
                });
              }),
              te
            );
          }
          async GetLatestPartnerEvents(
            n,
            r = 0,
            o = 10,
            d,
            m,
            g,
            p,
            R,
            _,
            se,
            te,
            Ae,
            oe,
          ) {
            const be =
                j.TS.STORE_BASE_URL + "events_admin/ajaxgetlatestpartnerevents",
              De = {
                page: r,
                count: o,
                date: p,
                appids: d === void 0 ? void 0 : d.join(","),
                required_tags: m === void 0 ? void 0 : m.join(","),
                exclude_tags: g === void 0 ? void 0 : g.join(","),
                eventtypefilter: R === void 0 ? void 0 : R.join(","),
                orderByVisibility: _ || void 0,
                creator_home_clan_id: se === void 0 ? void 0 : se.join(","),
                showUnpublished: Ae === void 0 ? void 0 : Ae,
                sale_only: oe === void 0 ? void 0 : oe,
                term: te === void 0 ? void 0 : te,
              },
              Ht = await L().get(be, {
                params: De,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
            return Ht.data ? Ht.data.docs : [];
          }
        };
        S([k.sH], F.prototype, "m_mapEventGIDToSolrData", 2),
          S([k.sH], F.prototype, "m_listEvents", 2),
          S([k.XI], F.prototype, "ClearAllSolrEvents", 1);
        let C = F;
        var $ = s(9046),
          me = Object.defineProperty,
          Se = Object.getOwnPropertyDescriptor,
          he = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? Se(n, r) : n, m = a.length - 1, g;
              m >= 0;
              m--
            )
              (g = a[m]) && (d = (o ? g(n, r, d) : g(d)) || d);
            return o && d && me(n, r, d), d;
          };
        class ve {
          constructor() {
            (0, k.Gn)(this);
          }
          m_backfill = void 0;
          m_mapEventGIDProcessed = new Map();
          m_vecEventGID = new Array();
          m_bBackfillInProgress = !1;
          m_nProcessed = 0;
          m_nSuccesses = 0;
          m_nFailures = 0;
          m_nWarning = 0;
          m_nSkipped = 0;
          GetBackfill() {
            return this.m_backfill;
          }
          SetBackfill(n) {
            this.m_backfill = n;
          }
          StartBackfill(n) {
            (this.m_backfill = n), (this.m_bBackfillInProgress = !0);
          }
          CompleteBackfill(n) {
            (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
          }
          BIsBackkFillInProgress() {
            return this.m_bBackfillInProgress;
          }
          GetEventBackfillProgress() {
            return this.m_mapEventGIDProcessed;
          }
          CreateOrGetBackfillProgess(n) {
            return (
              this.m_mapEventGIDProcessed.has(n) ||
                (this.m_mapEventGIDProcessed.set(n, { bProcessing: !1 }),
                this.m_vecEventGID.push(n)),
              this.m_mapEventGIDProcessed.get(n)
            );
          }
          BHasProgress(n) {
            return this.m_mapEventGIDProcessed.has(n);
          }
          GetBackfillGIDs() {
            return this.m_vecEventGID;
          }
          CloseProgress(n, r) {
            (this.m_nProcessed += 1),
              r.bAlreadyProcessed || r.bSkipped
                ? (this.m_nSkipped += 1)
                : r.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : r.bFailed && (this.m_nFailures += 1),
              r.bWarning && (this.m_nWarning += 1),
              this.m_mapEventGIDProcessed.set(n, r);
          }
        }
        he([k.sH], ve.prototype, "m_backfill", 2),
          he([k.sH], ve.prototype, "m_mapEventGIDProcessed", 2),
          he([k.sH], ve.prototype, "m_bBackfillInProgress", 2),
          he([k.sH], ve.prototype, "m_nProcessed", 2),
          he([k.sH], ve.prototype, "m_nSuccesses", 2),
          he([k.sH], ve.prototype, "m_nFailures", 2),
          he([k.sH], ve.prototype, "m_nWarning", 2),
          he([k.sH], ve.prototype, "m_nSkipped", 2),
          he([k.XI], ve.prototype, "StartBackfill", 1),
          he([k.XI], ve.prototype, "CompleteBackfill", 1),
          he([k.XI], ve.prototype, "CloseProgress", 1);
        const ie = new ve();
        var Je = s(45559),
          ft = s(25279),
          mt = s(56492),
          St = s(75909),
          yt = s(64),
          Qe = s(29630),
          ut = s(6658),
          At = Object.defineProperty,
          xt = Object.getOwnPropertyDescriptor,
          Ye = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? xt(n, r) : n, m = a.length - 1, g;
              m >= 0;
              m--
            )
              (g = a[m]) && (d = (o ? g(n, r, d) : g(d)) || d);
            return o && d && At(n, r, d), d;
          };
        const It = 25,
          wt = 5e3;
        let we = class extends I.Component {
          m_cancelSignal = L().CancelToken.source();
          m_nImageID = 0;
          m_mapArtworkResizeSuccess = new Map();
          state = { eBackfillState: void 0 };
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventBackfillLanding component unmounted",
            );
          }
          OnArtworkResizeBackfill() {
            this.state.eBackfillState == null &&
              this.setState(
                { eBackfillState: "started" },
                this.BeginArtworkResize,
              );
          }
          BeginArtworkResize() {
            this.m_mapArtworkResizeSuccess.set("capsule", 0),
              this.m_mapArtworkResizeSuccess.set("spotlight", 0),
              this.m_mapArtworkResizeSuccess.set("background", 0),
              this.RunArtworkResizeBackfill()
                .then(() => this.setState({ eBackfillState: "success" }))
                .catch((a) => {
                  let n = (0, Q.H)(a);
                  console.error(
                    "EventBackfillLanding: error " + n.strErrorMsg,
                    n,
                  ),
                    this.setState({ eBackfillState: "error" });
                });
          }
          async GetImageInfo(a, n, r = "") {
            const o = (0, ut.yh)(n),
              d = Qe.zU.GetHashFromHashAndExt(n) + r;
            return Qe.zU.AsyncGetImageResolution(
              a,
              d,
              o,
              this.m_cancelSignal,
              !0,
            );
          }
          HandleErrorFatal(a, n, r, o) {
            let d = (0, Q.H)(n),
              m =
                "EventBackfillLanding: " +
                r +
                " on GID " +
                a +
                " : " +
                d.strErrorMsg;
            console.error(m, d),
              o
                ? ((o.bFailed = !0), (o.strMessage = m), ie.CloseProgress(a, o))
                : ie.CompleteBackfill("resize_image");
          }
          async HandleResizeForImageType(a, n, r, o, d) {
            for (let m = Y.Bhc; m < a.length && m < Y.bP9; ++m)
              if (a[m] && a[m].length > 0) {
                let g = a[m],
                  p = (0, ut.yh)(g);
                const R = new H.b(n.clan_steamid);
                if (p) {
                  let _ = await this.GetImageInfo(R, g).catch(
                    (se) => (
                      this.HandleErrorFatal(
                        null,
                        se,
                        "GetImageInfo Original",
                        r,
                      ),
                      { height: 0, width: 0, success: i.zi }
                    ),
                  );
                  if (_.success == i.R && (0, ft.yu)(_.width, _.height, o, !0))
                    if (
                      (
                        await this.GetImageInfo(R, g, d).catch(
                          (te) => (
                            this.HandleErrorFatal(
                              null,
                              te,
                              "GetImageInfo Resize",
                              r,
                            ),
                            { height: 0, width: 0, success: i.zi }
                          ),
                        )
                      ).success == i.R
                    )
                      r.bAlreadyProcessed = !0;
                    else {
                      r.bProcessing = !0;
                      let te = Qe.zU.GetHashFromHashAndExt(g),
                        Ae = Qe.zU.GetExtStringFromHashAndExt(g),
                        oe = (0, yt.K_)(o);
                      if (oe)
                        try {
                          const be = await (0, St.bT)(
                            this.m_cancelSignal.token,
                            R,
                            te,
                            Ae,
                            oe,
                          );
                          console.log("success on the resize request"),
                            be == oe.length
                              ? ((r.bSucceeded = !0),
                                this.m_mapArtworkResizeSuccess.set(
                                  o,
                                  this.m_mapArtworkResizeSuccess.get(o) + 1,
                                ))
                              : ((r.bFailed = !0),
                                (r.strMessage =
                                  "Did not resize all: " +
                                  o +
                                  " " +
                                  be +
                                  " / " +
                                  oe.length));
                        } catch (be) {
                          r.bFailed = !0;
                          let De = (0, Q.H)(be);
                          (r.strMessage = De.strErrorMsg),
                            console.error("Resize: " + De.strErrorMsg, De);
                        }
                      else
                        (r.bFailed = !0),
                          console.error(
                            "Resize: resize request couldn't be determined from the artwork type",
                          );
                    }
                  else r.bSkipped = !0;
                } else r.bSkipped = !0;
              }
          }
          async RunArtworkResizeBackfill() {
            ie.StartBackfill("resize_image");
            let a = 0;
            for (; ie.BIsBackkFillInProgress(); ) {
              let n = await C.Get()
                .LoadPartnerEventForQueryIncremental(this.m_cancelSignal, a, It)
                .catch((r) =>
                  this.HandleErrorFatal(
                    null,
                    r,
                    "LoadPartnerEventForQueryIncremental",
                  ),
                );
              if (!n || n.length == 0) {
                ie.CompleteBackfill("resize_image"),
                  console.log("Compelted the backfill");
                break;
              }
              a += n.length;
              for (let r = 0; r < n.length; ++r) {
                let o = n[r],
                  d = ie.CreateOrGetBackfillProgess(o.unique_id);
                if (!o.announcement_gid || o.announcement_gid.length == 0) {
                  (d.bSkipped = !0),
                    (d.bWarning = !0),
                    ie.CloseProgress(o.unique_id, d);
                  continue;
                }
                if (
                  (await ce.O3.LoadPartnerEventFromAnnoucementGID(
                    Number(o.appid),
                    o.announcement_gid,
                    100,
                  ).catch((g) => {
                    this.HandleErrorFatal(
                      o.announcement_gid,
                      g,
                      "LoadPartnerEventFromAnnoucementGID",
                      d,
                    );
                  }),
                  d.bFailed)
                )
                  continue;
                let m = ce.O3.GetClanEventFromAnnouncementGID(
                  o.announcement_gid,
                );
                if (!m) {
                  (d.bFailed = !0),
                    (d.strMessage = "Failed to load the event: " + o.unique_id),
                    ie.CloseProgress(o.unique_id, d);
                  continue;
                }
                if (d.bSucceeded || d.bFailed || d.bAlreadyProcessed) {
                  (d.bAlreadyProcessed = !0), ie.CloseProgress(o.unique_id, d);
                  continue;
                }
                if (
                  ((d.bAnalysing = !0),
                  this.setState({
                    strInfo:
                      "Processing " +
                      ie.GetBackfillGIDs().length +
                      " Appid: " +
                      m.appid +
                      " Event " +
                      m.GID +
                      " Title: " +
                      m.GetNameWithFallback(Y.Bhc),
                  }),
                  m.jsondata && m.jsondata.localized_capsule_image)
                ) {
                  let g = m.jsondata.localized_capsule_image;
                  await this.HandleResizeForImageType(
                    g,
                    o,
                    d,
                    "capsule",
                    $.wI.capsule_main,
                  ).catch((p) =>
                    this.HandleErrorFatal(
                      null,
                      p,
                      "HandleResizeForImageType capsule",
                      d,
                    ),
                  );
                }
                if (m.jsondata && m.jsondata.localized_title_image) {
                  let g = m.jsondata.localized_title_image;
                  await this.HandleResizeForImageType(
                    g,
                    o,
                    d,
                    "background",
                    $.wI.background_mini,
                  ).catch((p) =>
                    this.HandleErrorFatal(
                      null,
                      p,
                      "HandleResizeForImageType background",
                      d,
                    ),
                  );
                }
                if (m.jsondata && m.jsondata.localized_spotlight_image) {
                  let g = m.jsondata.localized_spotlight_image;
                  await this.HandleResizeForImageType(
                    g,
                    o,
                    d,
                    "spotlight",
                    $.wI.spotlight_main,
                  ).catch((p) =>
                    this.HandleErrorFatal(
                      null,
                      p,
                      "HandleResizeForImageType spotlight",
                      d,
                    ),
                  );
                }
                if (
                  (ie.CloseProgress(o.unique_id, d),
                  !ie.BIsBackkFillInProgress())
                )
                  break;
              }
              if (ie.m_nFailures > wt) {
                console.log("Hit too many errors, stoppinng the backfill");
                break;
              }
            }
          }
          RenderFailure() {
            let a = new Array();
            return (
              ie.m_nFailures > 0 &&
                ie.GetBackfillGIDs().forEach((n) => {
                  let r = ie.GetEventBackfillProgress().get(n);
                  if (r && r.bFailed) {
                    let o = ce.O3.GetClanEventModel(n);
                    o &&
                      a.push(
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              (0, e.jsx)(mt.tj, {
                                eventModel: o,
                                route: mt.PH.k_eView,
                                children: o.GetNameWithFallback(Y.Bhc),
                              }),
                              (0, e.jsx)("div", {
                                className: Je.Error,
                                children: r.strMessage,
                              }),
                            ],
                          },
                          n,
                        ),
                      );
                  }
                }),
              a
            );
          }
          RenderResizeProgress() {
            let a = new Array();
            return (
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Capsule Resized: ",
                      this.m_mapArtworkResizeSuccess.get("capsule"),
                      " ",
                    ],
                  },
                  "res_capsule",
                ),
              ),
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Header Resized: ",
                      this.m_mapArtworkResizeSuccess.get("background"),
                      " ",
                    ],
                  },
                  "res_header",
                ),
              ),
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Spotlight Resized: ",
                      this.m_mapArtworkResizeSuccess.get("spotlight"),
                      " ",
                    ],
                  },
                  "res_spotlightr",
                ),
              ),
              a
            );
          }
          render() {
            let a = this.RenderFailure(),
              n = this.m_mapArtworkResizeSuccess.has("capsule")
                ? this.RenderResizeProgress()
                : void 0;
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("h2", {
                  children: "Partner Events Backfill Processing Page",
                }),
                this.state.eBackfillState == null &&
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("button", {
                      onClick: this.OnArtworkResizeBackfill,
                      children: "Begin Artwork Resize Backfill",
                    }),
                  }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)("button", {
                    onClick: () => ie.CompleteBackfill("resize_image"),
                    children: "Stop Backfill",
                  }),
                }),
                this.state.strInfo &&
                  (0, e.jsxs)("div", {
                    children: ["Processing: ", this.state.strInfo],
                  }),
                (0, e.jsxs)("div", {
                  children: ["Events Processed: ", ie.m_nProcessed],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Succeeded: ", ie.m_nSuccesses],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Warning: ", ie.m_nWarning],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Failed: ", ie.m_nFailures],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Skipped: ", ie.m_nSkipped],
                }),
                a.length > 0 &&
                  (0, e.jsxs)(I.Fragment, {
                    children: [
                      (0, e.jsx)("h2", { children: "Failure Info" }),
                      a,
                    ],
                  }),
                !!n &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h2", { children: "Resizing Actions" }),
                      n,
                    ],
                  }),
                this.state.eBackfillState == "started" &&
                  (0, e.jsx)(M.t, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  }),
              ],
            });
          }
        };
        Ye([ae.oI], we.prototype, "OnArtworkResizeBackfill", 1),
          Ye([ae.oI], we.prototype, "BeginArtworkResize", 1),
          (we = Ye([U.PA], we));
        var We = s(65946),
          gt = s(92298),
          Mt = s.n(gt),
          ke = s(5634),
          _e = s(73259),
          Xe = s(71684),
          bt = Object.defineProperty,
          Et = Object.getOwnPropertyDescriptor,
          Oe = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? Et(n, r) : n, m = a.length - 1, g;
              m >= 0;
              m--
            )
              (g = a[m]) && (d = (o ? g(n, r, d) : g(d)) || d);
            return o && d && bt(n, r, d), d;
          };
        const Dt = s(87937),
          jt = ["mod_reviewed", "auto_migrated"],
          Tt = 20,
          Be = class dt {
            static s_Singleton;
            selectedTags = void 0;
            excludedTags = void 0;
            filterDate = void 0;
            filterDateAsString = void 0;
            eventsToLoadPerPaging = Tt;
            filterEventTypes = void 0;
            bOrderByVisibilityStartTime = !1;
            bUseCustomQuery = !1;
            static Get() {
              return (
                dt.s_Singleton || (dt.s_Singleton = new dt()), dt.s_Singleton
              );
            }
            constructor() {
              (0, k.Gn)(this);
            }
            Init(n) {
              const r = new URLSearchParams(window.location.search);
              let o;
              r.has("selectedTags") &&
                (o = r
                  .getAll("selectedTags")
                  .filter(Boolean)
                  .map((_) => ({ label: _, value: _ })));
              let d = !1,
                m = jt.map((_) => ({ label: _, value: _ }));
              r.has("excludedTags") &&
                ((m = r
                  .getAll("excludedTags")
                  .filter(Boolean)
                  .map((_) => ({ label: _, value: _ }))),
                (d = m?.length > 0));
              let g;
              r.has("eventtype") &&
                (g = r
                  .getAll("eventtype")
                  .filter(Boolean)
                  .map((_) => {
                    const se = Number.parseInt(r.get("eventtype"));
                    return { label: (0, Xe.rG)(se), value: se };
                  }));
              let p;
              r.has("filterDate") &&
                r.get("filterDate")?.length > 0 &&
                (p = Dt.unix(Number(r.get("filterDate"))));
              let R = !1;
              r.has("orderByVisibility") &&
                r.get("orderByVisibility")?.length > 0 &&
                (R = !!r.get("orderByVisibility")),
                (0, k.h5)(() => {
                  (this.selectedTags = o),
                    (this.excludedTags = m),
                    (this.filterEventTypes = g),
                    (this.filterDate = p),
                    (this.bOrderByVisibilityStartTime = R),
                    (this.bUseCustomQuery =
                      (o && o.length > 0) || d || (g && g.length > 0));
                });
            }
          };
        Oe([k.sH], Be.prototype, "selectedTags", 2),
          Oe([k.sH], Be.prototype, "excludedTags", 2),
          Oe([k.sH], Be.prototype, "filterDate", 2),
          Oe([k.sH], Be.prototype, "filterDateAsString", 2),
          Oe([k.sH], Be.prototype, "eventsToLoadPerPaging", 2),
          Oe([k.sH], Be.prototype, "filterEventTypes", 2),
          Oe([k.sH], Be.prototype, "bOrderByVisibilityStartTime", 2),
          Oe([k.sH], Be.prototype, "bUseCustomQuery", 2);
        let ze = Be;
        var at = Object.defineProperty,
          Bt = Object.getOwnPropertyDescriptor,
          Ze = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? Bt(n, r) : n, m = a.length - 1, g;
              m >= 0;
              m--
            )
              (g = a[m]) && (d = (o ? g(n, r, d) : g(d)) || d);
            return o && d && at(n, r, d), d;
          },
          Ce = ((a) => (
            (a[(a.k_ModReviewed = 0)] = "k_ModReviewed"),
            (a[(a.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
            (a[(a.k_ChangeEventType = 2)] = "k_ChangeEventType"),
            (a[(a.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
            (a[(a.k_ModReReviewed = 4)] = "k_ModReReviewed"),
            (a[(a.k_ModRemovedFromSteamChina = 5)] =
              "k_ModRemovedFromSteamChina"),
            (a[(a.k_ModFlagAdultOnlyContent = 6)] =
              "k_ModFlagAdultOnlyContent"),
            (a[(a.k_ModRemoveAdultOnlyContent = 7)] =
              "k_ModRemoveAdultOnlyContent"),
            (a[(a.k_ModFlagHalloweenEvent = 8)] = "k_ModFlagHalloweenEvent"),
            (a[(a.k_ModRemoveHalloweenEvent = 9)] =
              "k_ModRemoveHalloweenEvent"),
            a
          ))(Ce || {});
        const rt = "ModAct";
        class Ge {
          m_moderator;
          m_rtWhen;
          m_action;
          m_newEventType;
          m_newTagAdded;
          ToModString() {
            let n =
              rt +
              "_" +
              this.m_moderator +
              "_" +
              Math.floor(this.m_rtWhen) +
              "_" +
              this.m_action;
            switch (this.m_action) {
              case 2:
                n += "_" + this.m_newEventType;
                break;
              case 3:
                n += "_" + this.m_newTagAdded;
                break;
            }
            return n;
          }
          FromString(n) {
            let r = n.split("_");
            if (!r || r[0] !== rt) return !1;
            switch (
              ((this.m_moderator = Number(r[1])),
              (this.m_rtWhen = Number(r[2])),
              (this.m_action = Number(r[3])),
              this.m_action)
            ) {
              case 2:
                this.m_newEventType = Number(r[4]);
                break;
              case 3:
                this.m_newTagAdded = r.slice(4).join("_");
                break;
            }
            return !0;
          }
          SetActionChangeEvent(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 2),
              (this.m_newEventType = n),
              this
            );
          }
          SetReviewAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 0 : 1),
              this
            );
          }
          SetAdultOnlyContentAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 6 : 7),
              this
            );
          }
          SetHalloweenEventTypeAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 8 : 9),
              this
            );
          }
          SetReReviewAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 4 : 1),
              this
            );
          }
          static IsAuditAction(n) {
            return n.startsWith(rt);
          }
          SetUpdateSeasonalTags(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 3),
              (this.m_newTagAdded = n),
              this
            );
          }
        }
        const $e = class ct {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(n) {
            return this.m_mapEventGIDToSolrData.has(n);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return (
              ct.s_Singleton || (ct.s_Singleton = new ct()), ct.s_Singleton
            );
          }
          constructor() {
            (0, k.Gn)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForModerationIncremental(n, r = 30) {
            const o =
              j.TS.STORE_BASE_URL +
              "events_admin/ajaxgetmoderationspecificpartnerevents";
            let d = 0;
            this.m_listEvents?.length &&
              (this.m_listEvents.forEach(
                (p) =>
                  (d = Math.max(
                    d,
                    Math.floor(Date.parse(p.last_modified_date) / 1e3),
                  )),
              ),
              this.m_listEvents.filter(
                (p) => Math.floor(Date.parse(p.last_modified_date) / 1e3) == d,
              ).length >= r && d++);
            const m = { start_time: d, count: r };
            try {
              const g = await L().get(o, {
                params: m,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return [];
              if (g && g.data) {
                let p = new Array();
                return (
                  (0, k.h5)(() => {
                    g.data.docs.forEach((R) => {
                      this.m_mapEventGIDToSolrData.has(R.unique_id) ||
                        (p.push(R),
                        this.m_mapEventGIDToSolrData.set(R.unique_id, R),
                        this.m_listEvents.push(R));
                    });
                  }),
                  p
                );
              }
            } catch (g) {
              const p = (0, Q.H)(g);
              console.error(
                "LoadPartnerEventForModerationIncremental failed:" +
                  p.strErrorMsg,
                p,
              );
            }
            return [];
          }
          async UpdateTagsOnPartnerEvent(n, r, o, d, m, g) {
            const p = j.TS.STORE_BASE_URL + "events_admin/ajaxupdatetags";
            let R = d.join(",");
            g && (d.length > 0 && (R += ","), (R += g.ToModString()));
            const _ = new FormData();
            return (
              _.append("sessionid", (0, j.KC)()),
              _.append("clan_accountid", "" + r.GetAccountID()),
              _.append("gid_announcement", o),
              _.append("add_tags", R),
              _.append("remove_tags", m.join(",")),
              (
                await L().post(p, _, {
                  withCredentials: !0,
                  cancelToken: n.token,
                })
              ).data.tags
            );
          }
          async UpdatePartnerEventType(n, r, o, d) {
            const m = j.TS.STORE_BASE_URL + "events_admin/ajaxupdateeventtype",
              g = new FormData();
            g.append("sessionid", (0, j.KC)()),
              g.append("clan_accountid", "" + r.GetAccountID()),
              g.append("gid_event", o),
              g.append("new_event_type", "" + d),
              await L().post(m, g, {
                withCredentials: !0,
                cancelToken: n.token,
              });
          }
        };
        Ze([k.sH], $e.prototype, "m_mapEventGIDToSolrData", 2),
          Ze([k.sH], $e.prototype, "m_listEvents", 2),
          Ze([k.XI], $e.prototype, "ClearAllSolrEvents", 1);
        let He = $e;
        var ye = s(10142),
          Ct = s(91424),
          qe = s(92264),
          Ee = s(61311),
          Rt = s(35098);
        function Lt(a) {
          const { accountID: n, locToken: r } = a,
            o = I.useMemo(() => H.b.InitFromAccountID(n), [n]),
            { data: d } = (0, Rt.js)(n);
          let m =
            "https://steamsupport.valvesoftware.com/account/overview/" +
            o.ConvertTo64BitString();
          return (0, e.jsx)("div", {
            children: (0, c.PP)(
              r,
              (0, e.jsx)("a", {
                href: m,
                target: j.TS.IN_CLIENT ? void 0 : "_blank",
                children: d
                  ? (0, e.jsx)(I.Fragment, { children: d.m_strPlayerName })
                  : (0, e.jsx)(I.Fragment, {
                      children: (0, e.jsx)("span", { children: n }),
                    }),
              }),
            ),
          });
        }
        function Ot(a) {
          const { modAction: n } = a,
            r =
              (0, c.TW)(n.m_rtWhen) +
              " @ " +
              (0, qe.KC)(n.m_rtWhen, { bForce24HourClock: !1 }),
            o = (0, e.jsx)(Lt, {
              locToken: "#EventModTile_Moderator",
              accountID: n.m_moderator,
            });
          switch (n.m_action) {
            case Ce.k_ModReviewed:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_Reviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Ce.k_ModUnreviewed:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_UnReviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Ce.k_ChangeEventType:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_NewEventType",
                  (0, e.jsx)("span", { children: r }),
                  o,
                  (0, Xe.rG)(n.m_newEventType),
                ),
              });
            case Ce.k_UpdateSeasonTags:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_SeasonTagUpdate",
                  (0, e.jsx)("span", { children: r }),
                  o,
                  n.m_newTagAdded,
                ),
              });
            case Ce.k_ModReReviewed:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_ReReviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Ce.k_ModRemovedFromSteamChina:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_RemoveFromSC",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Ce.k_ModFlagAdultOnlyContent:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_FlagAdultContent",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case Ce.k_ModRemoveAdultOnlyContent:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, c.PP)(
                  "#EventModTile_Action_RemoveAdultContent",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            default:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: n.ToModString(),
              });
          }
        }
        function Gt(a) {
          const [n, r] = I.useState(!0),
            o = 3,
            d = (_) => {
              const { eventModel: se } = a;
              return _.map((te) => {
                const Ae = new Ge();
                return (
                  Ae.FromString(te),
                  (0, e.jsx)(Ot, { modAction: Ae }, se.GID + te)
                );
              });
            },
            { eventModel: m } = a;
          let g = m
            .GetAllTags()
            .filter((_) => Ge.IsAuditAction(_))
            .reverse();
          const p = g.length,
            R = g.length > o && n;
          return g.length == 0
            ? null
            : (R && (g = g.splice(0, o)),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h4", {
                    children: (0, c.we)("#EventModTile_Action_Title"),
                  }),
                  d(g),
                  R &&
                    (0, e.jsx)("a", {
                      onClick: () => r(!1),
                      className: Ee.ExpandModActions,
                      children: (0, c.we)("#EventModTile_Action_More", p - o),
                    }),
                  !R &&
                    p > o &&
                    (0, e.jsx)("a", {
                      onClick: () => r(!0),
                      className: Ee.ExpandModActions,
                      children: (0, c.we)("#EventModTile_Action_Hide"),
                    }),
                ],
              }));
        }
        var Ft = s(95695),
          Ve = s.n(Ft),
          ht = s(95414),
          Pt = s(13465),
          st = s(53107),
          et = s(53113),
          O = s(961),
          vt = s(7582),
          Ut = s(29522),
          v = s(88812),
          A = s(32606),
          B = Object.defineProperty,
          V = Object.getOwnPropertyDescriptor,
          D = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? V(n, r) : n, m = a.length - 1, g;
              m >= 0;
              m--
            )
              (g = a[m]) && (d = (o ? g(n, r, d) : g(d)) || d);
            return o && d && B(n, r, d), d;
          };
        const Z = s(87937),
          le = 500,
          Me = 50,
          je = {
            bExhaustedEventList: !1,
            bInfiniteScrollLoading: !0,
            nLastFetchCompletedMS: 0,
          };
        let re = class extends I.Component {
          m_cancelSignal = L().CancelToken.source();
          m_refScroll = I.createRef();
          m_IntervalTimer = void 0;
          state = {
            bInfiniteScrollLoading: !1,
            bExhaustedEventList: !1,
            nLastFetchCompletedMS: 0,
          };
          m_nPage = 0;
          componentDidMount() {
            this.setState(
              { bInfiniteScrollLoading: !0 },
              this.LoadMoreModerationEvents,
            ),
              window.addEventListener("scroll", this.OnScroll, !0),
              ze.Get().Init(this.props.history.location.search);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationLanding component unmounted",
            ),
              window.removeEventListener("scroll", this.OnScroll),
              this.ClearTimer();
          }
          HandleUpdateQueryParameter() {
            const a = ze.Get();
            if (a.bUseCustomQuery) {
              const {
                selectedTags: n,
                excludedTags: r,
                filterEventTypes: o,
                filterDate: d,
                bOrderByVisibilityStartTime: m,
              } = a;
              if (n || r || o || d || m) {
                const g = new URLSearchParams();
                n?.forEach((p) => g.append("selectedTags", p.value)),
                  r?.forEach((p) => g.append("excludedTags", p.value)),
                  o?.forEach((p) => g.append("eventtype", "" + p.value)),
                  d?.unix() > 0 && g.append("filterDate", "" + d.unix()),
                  m && g.append("orderByVisibility", "1"),
                  this.props.history.push(`?${g.toString()}`);
              } else this.props.history.push("?");
            }
          }
          ClearTimer() {
            this.m_IntervalTimer &&
              (window.clearInterval(this.m_IntervalTimer),
              (this.m_IntervalTimer = void 0));
          }
          HandleError(a) {
            let n = (0, Q.H)(a);
            console.error("EventModerationLanding error: " + n.strErrorMsg, n),
              this.setState({
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !0,
                nLastFetchCompletedMS: Date.now(),
              });
          }
          async LoadMorePublicEventWithDelay() {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMoreModerationEvents,
              le,
            );
          }
          LoadMoreModerationEvents() {
            if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
              let a;
              const n = ze.Get();
              if (n.bUseCustomQuery) {
                let r = n.filterEventTypes
                    ? n.filterEventTypes.map((m) => m.value)
                    : void 0,
                  o = n.selectedTags
                    ? n.selectedTags.map((m) => m.value)
                    : void 0,
                  d = n.excludedTags
                    ? n.excludedTags.map((m) => m.value)
                    : void 0;
                a = C.Get().LoadPartnerEventForQueryIncremental(
                  this.m_cancelSignal,
                  this.m_nPage,
                  n.eventsToLoadPerPaging,
                  [this.props.appid],
                  o,
                  d,
                  n.filterDate,
                  r,
                  n.bOrderByVisibilityStartTime,
                );
              } else
                a = He.Get().LoadPartnerEventForModerationIncremental(
                  this.m_cancelSignal,
                  n.eventsToLoadPerPaging,
                );
              a.then((r) => {
                (this.m_nPage += n.eventsToLoadPerPaging),
                  this.setState({
                    bInfiniteScrollLoading: !1,
                    bExhaustedEventList: r.length == 0,
                    nLastFetchCompletedMS: Date.now(),
                  });
              }).catch((r) => this.HandleError(r));
            }
          }
          UpdateQueryParametersAndLoadMoreEvents() {
            this.HandleUpdateQueryParameter(), this.LoadMoreModerationEvents();
          }
          RenderTiles() {
            let a = new Array();
            return (
              (ze.Get().bUseCustomQuery
                ? C.Get().GetAllSolrEvents()
                : He.Get().GetAllSolrEvents()
              ).forEach((o) => {
                a.push((0, e.jsx)(Pe, { solrData: o }, o.unique_id));
              }),
              a
            );
          }
          OnScroll() {
            if (!this.m_refScroll || !this.m_refScroll.current) return;
            let a = this.m_refScroll.current;
            a &&
              (this.state.bExhaustedEventList ||
                this.state.bInfiniteScrollLoading ||
                (a.getBoundingClientRect().bottom <= window.innerHeight + Me &&
                  (this.state.nLastFetchCompletedMS + le < Date.now()
                    ? this.setState(
                        { bInfiniteScrollLoading: !0 },
                        this.LoadMorePublicEventWithDelay,
                      )
                    : this.setState(
                        { bInfiniteScrollLoading: !0 },
                        this.LoadMoreModerationEvents,
                      ))));
          }
          RefetchAllEventTiles() {
            (this.m_nPage = 0),
              He.Get().ClearAllSolrEvents(),
              C.Get().ClearAllSolrEvents(),
              this.setState(
                { ...je },
                this.UpdateQueryParametersAndLoadMoreEvents,
              );
          }
          render() {
            let a = this.RenderTiles();
            const n = ze.Get();
            return (0, e.jsxs)("div", {
              className: O.ModerationContainer,
              ref: this.m_refScroll,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("h2", {
                      children: (0, c.we)("#EventModeration_Title"),
                    }),
                    (0, e.jsx)(K.tH, {
                      children: (0, e.jsxs)("div", {
                        className: (0, u.A)(Ve().FlexRowContainer),
                        children: [
                          (0, e.jsx)(Fe, {
                            fnRequireRefetchEvents: this.RefetchAllEventTiles,
                          }),
                          !!n.bUseCustomQuery &&
                            (0, e.jsx)(Ke, {
                              fnRequireRefetchEvents: this.RefetchAllEventTiles,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(K.tH, { children: a }),
                this.state.bInfiniteScrollLoading &&
                  (0, e.jsx)(M.t, {
                    position: "center",
                    size: "medium",
                    string: (0, c.we)("#Loading"),
                  }),
              ],
            });
          }
        };
        D([ae.oI], re.prototype, "HandleError", 1),
          D([ae.oI], re.prototype, "LoadMorePublicEventWithDelay", 1),
          D([ae.oI], re.prototype, "LoadMoreModerationEvents", 1),
          D([ae.oI], re.prototype, "UpdateQueryParametersAndLoadMoreEvents", 1),
          D([ae.oI], re.prototype, "OnScroll", 1),
          D([ae.oI], re.prototype, "RefetchAllEventTiles", 1),
          (re = D([U.PA], re));
        const Te = (0, W.y)(re),
          Fe = (0, U.PA)((a) => {
            const n = ze.Get(),
              { fnRequireRefetchEvents: r } = a;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: O.FilterContainer,
                  children: (0, e.jsx)(w.he, {
                    toolTipContent: (0, c.we)(
                      "#EventModeration_ShowCustomFilter_ttip",
                    ),
                    children: (0, e.jsx)(G.Yh, {
                      label: (0, c.we)("#EventModeration_ShowCustomFilter"),
                      checked: n.bUseCustomQuery,
                      onChange: (o) => {
                        (n.bUseCustomQuery = o), r();
                      },
                    }),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: O.FilterContainer,
                  children: [
                    (0, e.jsx)("label", {
                      htmlFor: "EventPerLoad",
                      children: (0, c.we)("#EventModeration_PerPageLoad"),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("input", {
                        type: "number",
                        id: "EventPerLoad",
                        min: "10",
                        max: "200",
                        value: n.eventsToLoadPerPaging,
                        onChange: (o) => {
                          let d = Number.parseInt(o.currentTarget.value);
                          d &&
                            d > 0 &&
                            d != n.eventsToLoadPerPaging &&
                            (n.eventsToLoadPerPaging = d);
                        },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
          Ke = (0, U.PA)((a) => {
            const n = ze.Get(),
              { fnRequireRefetchEvents: r } = a,
              o = Y.Zi8.map((p) => ({ value: p, label: (0, Xe.rG)(p) })).sort(
                (p, R) => p.label.localeCompare(R.label),
              ),
              d = _e.FZ.map((p) => ({ value: p, label: p })).sort((p, R) =>
                p.label.localeCompare(R.label),
              ),
              m = { option: (p) => ({ ...p, color: "#444444" }) },
              g = (p) => {
                let R = new Date();
                return (
                  p.unix() <
                  Z.unix(R.getTime() / 1e3 + 3600 * 24)
                    .hour(0)
                    .seconds(0)
                    .minute(0)
                    .unix()
                );
              };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: O.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, c.we)("#EventModeration_FilterByTag"),
                    }),
                    (0, e.jsx)(ke.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (p) => {
                        (n.selectedTags = p), r();
                      },
                      value: n.selectedTags,
                      options: d,
                      styles: m,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: O.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, c.we)(
                        "#EventModeration_FilterExcludeByTag",
                      ),
                    }),
                    (0, e.jsx)(ke.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (p) => {
                        (n.excludedTags = p), r();
                      },
                      value: n.excludedTags,
                      options: d,
                      styles: m,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: O.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, c.we)("#EventModeration_FilterToType"),
                    }),
                    (0, e.jsx)(ke.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (p) => {
                        (n.filterEventTypes = p), r();
                      },
                      value: n.filterEventTypes,
                      options: o,
                      styles: m,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: O.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, c.we)("#EventModeration_FilterToDate"),
                    }),
                    (0, e.jsx)(Mt(), {
                      timeFormat: !1,
                      onChange: (p) => {
                        if (typeof p == "string") {
                          let R = Z(p, "M/D/YYYY", !0);
                          if (!R.isValid()) {
                            n.filterDateAsString = p;
                            return;
                          }
                          p = R;
                        }
                        n.filterDate != p &&
                          ((n.filterDateAsString = void 0),
                          (n.filterDate = p),
                          r());
                      },
                      value: n.filterDate,
                      isValidDate: g,
                      inputProps: {
                        placeholder: (0, c.we)("#EventModeration_PickDatee"),
                        className: O.TimeWidth,
                      },
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: O.FilterContainer,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "VisibilityStart",
                      checked: n.bOrderByVisibilityStartTime,
                      onChange: (p) => {
                        (n.bOrderByVisibilityStartTime =
                          p.currentTarget.checked),
                          r();
                      },
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "VisibilityStart",
                      children: (0, c.we)(
                        "#EventModeration_OrderByFirstVisible",
                      ),
                    }),
                  ],
                }),
              ],
            });
          }),
          pt = (0, U.PA)((a) => {
            const { onClick: n, event: r, bSaving: o } = a;
            let d = (0, c.we)("#EventModTile_Moderate_ClearReviewed"),
              m = O.EventModerateClearReview,
              g = !1;
            return (
              (0, _e.Xx)(r) ||
                ((d = (0, c.we)("#EventModTile_Moderate_MarkReviewed")),
                (m = O.EventModerateMarkReview),
                (g = !0)),
              o &&
                ((d = (0, c.we)("#EventModTile_Moderate_Saving")),
                (m = O.EventModerateSaving)),
              (0, e.jsxs)("button", {
                className: (0, u.A)(Ve().Button, O.Button, m),
                onClick: () => n(g),
                disabled: o,
                children: [o && (0, e.jsx)(M.t, { size: "small" }), d],
              })
            );
          }),
          Vt = (0, U.PA)((a) => {
            const { onClick: n, event: r, bSaving: o } = a,
              d = r.BHasTag("adult_only_content");
            let m = (0, c.we)(
              d
                ? "#EventModTile_Moderate_RemoveAdultContent"
                : "#EventModTile_Moderate_FlagAdultContent",
            );
            return (
              o && (m = (0, c.we)("#EventModTile_Moderate_Saving")),
              (0, e.jsxs)("button", {
                className: (0, u.A)(Ve().Button, O.Button),
                onClick: () => n(!d),
                disabled: o,
                children: [o && (0, e.jsx)(M.t, { size: "small" }), m],
              })
            );
          });
        function Xt(a) {
          const { onClick: n, event: r, bSaving: o } = a,
            d = (0, We.q3)(() => r.BHasTag("halloween"));
          let m = (0, c.we)(
            d
              ? "#EventModTile_Moderate_RemoveHalloweenFlag"
              : "#EventModTile_Moderate_FlagHalloween",
          );
          o && (m = (0, c.we)("#EventModTile_Moderate_Saving"));
          const g = vt.HD.GetTimeNowWithOverrideAsDate();
          return g.getMonth() >= 8 && g.getMonth() <= 10
            ? (0, e.jsxs)("button", {
                className: (0, u.A)(Ve().Button, O.Button),
                onClick: () => n(!d),
                disabled: o,
                children: [o && (0, e.jsx)(M.t, { size: "small" }), m],
              })
            : null;
        }
        let Pe = class extends I.Component {
          state = {
            bLoadingEvent: !ce.O3.BHasClanEventModel(
              this.props.solrData.unique_id,
            ),
            bShowAsModal: !1,
            bSavingModeration: !1,
          };
          m_cancelSignal = L().CancelToken.source();
          componentDidMount() {
            const { solrData: a } = this.props,
              n = a.unique_id;
            ce.O3.BHasClanEventModel(n) ||
              ce.O3.LoadHiddenPartnerEvent(new H.b(a.clan_steamid), n)
                .then(() => this.setState({ bLoadingEvent: !1 }))
                .catch((r) => {
                  const o = (0, Q.H)(r);
                  console.error(
                    "EventModerationTile: Event Load: " + o.strErrorMsg,
                    o,
                  ),
                    this.setState({ bLoadingEvent: !1 });
                });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationTile component unmounted",
            );
          }
          ShowModalEvent(a) {
            const { solrData: n } = this.props,
              r = n.unique_id;
            !this.state.bLoadingEvent &&
              ce.O3.BHasClanEventModel(r) &&
              this.setState({ bShowAsModal: !0 }),
              a.preventDefault(),
              a.stopPropagation();
          }
          HideModalEvent() {
            this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
          }
          SetAdultContentState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = ce.O3.GetClanEventModel(r);
            if (!o) return;
            const d = o.BHasTag("adult_only_content");
            if (a === d) return;
            const m = new Array(),
              g = new Array();
            let p = new Ge().SetAdultOnlyContentAction(a);
            a ? m.push("adult_only_content") : g.push("adult_only_content"),
              this.UpdateTagsOnEvent(r, m, g, p);
          }
          SetHalloweenEventState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = ce.O3.GetClanEventModel(r);
            if (!o) return;
            const d = o.BHasTag("halloween");
            if (a === d) return;
            const m = new Array(),
              g = new Array();
            let p = new Ge().SetHalloweenEventTypeAction(a);
            a ? m.push("halloween") : g.push("halloween"),
              this.UpdateTagsOnEvent(r, m, g, p);
          }
          SetModeratedState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = ce.O3.GetClanEventModel(r);
            if (!o) return;
            const d = (0, _e.Xx)(o);
            if (a === d) return;
            const m = new Array(),
              g = new Array();
            let p = new Ge().SetReviewAction(a);
            a
              ? (m.push("mod_reviewed"),
                g.push("mod_require_rereview"),
                o.BHasTag("mod_require_rereview") && p.SetReReviewAction(a))
              : m.push("mod_require_rereview"),
              this.UpdateTagsOnEvent(r, m, g, p);
          }
          UpdateTagsOnEvent(a, n, r, o) {
            const d = async () => {
              let m = ce.O3.GetClanEventModel(a);
              try {
                let g = await He.Get().UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  m.clanSteamID,
                  m.AnnouncementGID,
                  n,
                  r,
                  o,
                );
                m.vecTags = g;
              } catch (g) {
                let p = (0, Q.H)(g);
                console.error("UpdateTagsOnPartnerEvent " + p.strErrorMsg, p);
              }
              this.setState({ bSavingModeration: !1 });
            };
            this.state.bSavingModeration ||
              this.setState({ bSavingModeration: !0 }, d);
          }
          OnChangeCategory(a) {
            const { solrData: n } = this.props;
            let r = ce.O3.GetClanEventModel(n.unique_id);
            (0, X.pg)((0, e.jsx)(it, { eventModel: r }), (0, x.uX)(a));
          }
          OnUpdateSeasonalTag(a) {
            const { solrData: n } = this.props;
            let r = ce.O3.GetClanEventModel(n.unique_id);
            (0, X.pg)((0, e.jsx)(ot, { eventModel: r }), (0, x.uX)(a));
          }
          render() {
            const { solrData: a } = this.props,
              n = a.unique_id,
              r = Number(a.appid);
            let o,
              d = (0, Y.sfN)(j.TS.LANGUAGE),
              m = ce.O3.GetClanEventModel(n),
              g = null;
            m
              ? (this.state.bShowAsModal &&
                  (g = (0, e.jsx)(h.of, {
                    className: O.StoreHeaderAdjust,
                    children: (0, e.jsx)("div", {
                      children: (0, e.jsx)(Ct.H, {
                        event: m,
                        fnClose: this.HideModalEvent,
                      }),
                    }),
                  })),
                (o = (0, e.jsx)(Jt, { eventModel: m, lang: d })))
              : (o = (0, c.we)("#Loading"));
            const p = a.last_modified_date
                ? Date.parse(a.last_modified_date) / 1e3
                : 0,
              R = m ? m.type : Number(a.event_type),
              _ = new H.b(a.clan_steamid),
              se = r ? `app/${r}` : `group/${_.GetAccountID()}`,
              te = `${j.TS.STORE_BASE_URL}news/${se}/view/${a.announcement_gid}`,
              Ae = !!(m && m.BHasTag("adult_only_content")),
              oe = !!(m && m.BHasTag("halloween"));
            return (0, e.jsxs)(K.tH, {
              children: [
                g,
                (0, e.jsxs)("div", {
                  className: (0, u.A)({ [O.Tile]: !0, [O.HalloweenEvent]: oe }),
                  children: [
                    (0, e.jsx)("a", {
                      href: te,
                      className: O.TileCapsule,
                      onClick: this.ShowModalEvent,
                      children: o,
                    }),
                    (0, e.jsxs)("div", {
                      className: O.TileDetails,
                      children: [
                        (0, e.jsxs)("div", {
                          className: O.DetailsLeft,
                          children: [
                            (0, e.jsx)("a", {
                              className: O.EventTitle,
                              href: te,
                              onClick: this.ShowModalEvent,
                              children: a.event_name,
                            }),
                            (0, e.jsx)("div", {
                              className: (0, u.A)(
                                O.TileEventType,
                                R == Y.DRF ? O.TileEventOtherType : "",
                              ),
                              children: m
                                ? m.GetCategoryAsString()
                                : a.event_type,
                            }),
                            Ae &&
                              (0, e.jsx)("div", {
                                className: O.HasAdultContent,
                                children: (0, c.we)(
                                  "#EventModTile_HasAdultContent",
                                ),
                              }),
                            this.state.bLoadingEvent &&
                              (0, e.jsx)(M.t, {
                                size: "small",
                                string: (0, c.we)("#Loading"),
                              }),
                            (0, e.jsx)("div", {
                              className: O.ChannelInfo,
                              children: (0, e.jsx)(Zt, {
                                appid: r,
                                clanSteamID: new H.b(a.clan_steamid),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: O.DetailsMiddle,
                          children:
                            m &&
                            (0, e.jsxs)(I.Fragment, {
                              children: [
                                (0, e.jsx)(pt, {
                                  onClick: this.SetModeratedState,
                                  bSaving: this.state.bSavingModeration,
                                  event: m,
                                }),
                                (0, e.jsx)("button", {
                                  className: (0, u.A)(Ve().Button, O.Button),
                                  onClick: this.OnChangeCategory,
                                  children: (0, c.we)(
                                    "#EventModTile_ChangeEventType",
                                  ),
                                }),
                                (0, e.jsx)(Vt, {
                                  onClick: this.SetAdultContentState,
                                  bSaving: this.state.bSavingModeration,
                                  event: m,
                                }),
                                (0, e.jsx)(Xt, {
                                  onClick: this.SetHalloweenEventState,
                                  bSaving: this.state.bSavingModeration,
                                  event: m,
                                }),
                                !!m.BHasTag("halloween2019candidate") &&
                                  (0, e.jsx)("button", {
                                    className: (0, u.A)(Ve().Button),
                                    onClick: this.OnUpdateSeasonalTag,
                                    children: (0, c.we)(
                                      "#EventModTile_SeasonalTag",
                                    ),
                                  }),
                                (0, e.jsx)(Gt, { eventModel: m }),
                              ],
                            }),
                        }),
                        (0, e.jsxs)("div", {
                          className: O.DetailsRight,
                          children: [
                            (0, e.jsxs)("div", {
                              className: O.EventTimingBlock,
                              children: [
                                !!p &&
                                  (0, e.jsx)("div", {
                                    className: O.LastUpdateTime,
                                    children: (0, c.we)(
                                      "#EventModTile_LastModified",
                                      (0, c.TW)(p) +
                                        "@" +
                                        (0, qe.KC)(p, {
                                          bForce24HourClock: !1,
                                        }),
                                    ),
                                  }),
                                m &&
                                  (0, e.jsx)(A.j, {
                                    event: m,
                                    stylesmodule: O,
                                    nOverrideEndTime:
                                      m.GetEndTimeAndDateUnixSeconds(),
                                    nOverrideStartTime:
                                      m.GetStartTimeAndDateUnixSeconds(),
                                  }),
                              ],
                            }),
                            m &&
                              (0, e.jsx)(_t, {
                                event: m,
                                hidden: a.hidden,
                                published: a.published,
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
        };
        D([ae.oI], Pe.prototype, "ShowModalEvent", 1),
          D([ae.oI], Pe.prototype, "HideModalEvent", 1),
          D([ae.oI], Pe.prototype, "SetAdultContentState", 1),
          D([ae.oI], Pe.prototype, "SetHalloweenEventState", 1),
          D([ae.oI], Pe.prototype, "SetModeratedState", 1),
          D([ae.oI], Pe.prototype, "OnChangeCategory", 1),
          D([ae.oI], Pe.prototype, "OnUpdateSeasonalTag", 1),
          (Pe = D([U.PA], Pe));
        function Jt(a) {
          const { eventModel: n, lang: r } = a,
            o = (0, v.WC)(n, "capsule", r, $.wI.capsule_main),
            d = n.BImageNeedScreenshotFallback("capsule", r);
          return o && o.length > 0
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(Pt.c, { rgSources: o }),
                  d &&
                    (0, e.jsx)("div", {
                      className: O.NoCapsuleFallback,
                      children: (0, c.we)("#EventModTile_FallbackImageText"),
                    }),
                ],
              })
            : (0, e.jsx)("div", {
                className: O.NoCapsule,
                children: (0, c.we)("#EventModTile_NoCapsule"),
              });
        }
        let Kt = class extends I.Component {
          state = { bDownloadingImages: !1, nLocLanguages: 0 };
          m_cancelSignal = L().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          CountLanguages(a) {
            let n = 0;
            if (a && a.length > 0)
              for (let r = 0; r < a.length && r < Y.bP9; ++r)
                a[r] && a[r].length > 0 && (n += 1);
            return n;
          }
          componentDidMount() {
            const { event: a } = this.props;
            ce.O3.LoadClanEventLocalizationFromAnnouncementGID(
              a.clanSteamID,
              a.AnnouncementGID,
            )
              .then((n) => {
                this.m_cancelSignal.token.reason ||
                  this.setState({ nLocLanguages: n.length });
              })
              .catch((n) => {
                let r = (0, Q.H)(n);
                console.error(
                  "EventInspection.LoadLoc : error " + r.strErrorMsg,
                  r,
                ),
                  this.m_cancelSignal.token.reason ||
                    this.setState({ nLocLanguages: -1 });
              });
          }
          render() {
            const { event: a } = this.props;
            let n = this.CountLanguages(a.jsondata.localized_title_image),
              r = this.CountLanguages(a.jsondata.localized_capsule_image),
              o = this.CountLanguages(a.jsondata.localized_spotlight_image),
              d = Math.max(
                this.CountLanguages(a.jsondata.localized_broadcast_left_image),
                this.CountLanguages(a.jsondata.localized_broadcast_right_image),
              ),
              m = n + r + o + d,
              g = this.CountLanguages(a.jsondata.localized_summary),
              p = this.CountLanguages(a.jsondata.localized_subtitle);
            return (0, e.jsxs)("div", {
              className: O.AnalysisCtn,
              children: [
                (0, e.jsx)("div", {
                  className: O.TileTitle,
                  children: (0, c.we)("#EventModTile_Analysis"),
                }),
                (0, e.jsx)("div", {
                  children: (0, c.we)(
                    "#EventModTile_Stats_Comments",
                    a.nCommentCount,
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, c.we)("#EventModTile_Stats_VoteUp", a.nVotesUp),
                }),
                (0, e.jsx)("div", {
                  children: (0, c.we)(
                    "#EventModTile_Stats_VoteDown",
                    a.nVotesDown,
                  ),
                }),
                !!n &&
                  (0, e.jsxs)("div", {
                    className: O.ArtHeader,
                    children: [
                      (0, c.we)("#EventModTile_ImageAnalysis_Header", n),
                      " ",
                    ],
                  }),
                !!r &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, c.we)("#EventModTile_ImageAnalysis_Capsule", r),
                      " ",
                    ],
                  }),
                !!o &&
                  (0, e.jsxs)("div", {
                    className: O.ArtSpotlight,
                    children: [
                      (0, c.we)("#EventModTile_ImageAnalysis_Spotlight", o),
                      " ",
                    ],
                  }),
                !!d &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, c.we)("#EventModTile_ImageAnalysis_Broadcast", d),
                      " ",
                    ],
                  }),
                m == 0 &&
                  (0, e.jsxs)("div", {
                    className: O.AnalysisMissing,
                    children: [
                      (0, c.we)("#EventModTile_ImageAnalysis_None"),
                      " ",
                    ],
                  }),
                this.state.nLocLanguages == 0 &&
                  (0, e.jsx)(M.t, {
                    size: "small",
                    string: (0, c.we)("#EventModTile_LoadingLocs"),
                  }),
                this.state.nLocLanguages > 0 &&
                  (0, e.jsx)("div", {
                    children: (0, c.we)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages,
                    ),
                  }),
                !!g &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, c.we)("#EventModTile_Languages_Summary", g),
                      " ",
                    ],
                  }),
                !!p &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, c.we)("#EventModTile_Languages_Subtitle", p),
                      " ",
                    ],
                  }),
              ],
            });
          }
        };
        Kt = D([U.PA], Kt);
        const Zt = (0, U.PA)((a) => {
          const { appid: n, clanSteamID: r } = a,
            o = (0, Ut.$5)(n),
            [d, m] = (0, I.useState)(!ye.A.Get().BHasApp(a.appid)),
            g = I.useRef(L().CancelToken.source());
          if (
            ((0, I.useEffect)(
              () => () =>
                g.current.cancel(
                  "EventModerationChannelInfo component unmounted",
                ),
              [],
            ),
            (0, I.useEffect)(() => {
              const { appid: p, clanSteamID: R } = a;
              ((p && !ye.A.Get().BHasApp(p)) ||
                (R && !T.ac.BHasClanInfoLoaded(R))) &&
                (async () => {
                  try {
                    await Promise.all([
                      ye.A.Get().QueueAppRequest(p, {
                        include_assets: !0,
                        include_release: !0,
                        include_screenshots: !0,
                      }),
                      R ? T.ac.LoadClanInfoForClanSteamID(R) : void 0,
                    ]);
                  } catch (se) {
                    const te = (0, Q.H)(se);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + te.strErrorMsg,
                      te,
                    );
                  } finally {
                    g.current.token.reason || m(!1);
                  }
                })();
            }, [a]),
            d)
          )
            return (0, e.jsx)(M.t, {
              size: "small",
              string: (0, c.we)("#EventModTile_AppInfoLoading"),
            });
          if (n) {
            const p = ye.A.Get().GetApp(n);
            return p
              ? (0, e.jsx)("div", {
                  className: O.TileAppInfo,
                  children: (0, e.jsxs)("div", {
                    className: O.TileAppInfoTitle,
                    children: [
                      (0, e.jsx)(ht.j, {
                        id: o,
                        children: (0, e.jsx)(st.uU, {
                          href: (0, et.k2)(p.GetStorePageURL()),
                          children: (0, e.jsx)("img", {
                            className: O.TileAppInfoImage,
                            src: p.GetAssets().GetMainCapsuleURL(),
                          }),
                        }),
                      }),
                      (0, e.jsx)(ht.j, {
                        id: o,
                        children: (0, e.jsx)(st.uU, {
                          href: (0, et.k2)(p.GetStorePageURL()),
                          children: (0, e.jsx)("div", {
                            children: p.GetName(),
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : null;
          } else if (r) {
            const p = r.GetAccountID(),
              R = T.ac.GetClanInfoByClanAccountID(p);
            if (R && R.is_curator)
              return (0, e.jsx)("div", {
                className: O.TileAppInfo,
                children: (0, e.jsx)("div", {
                  className: O.TileAppInfoTitle,
                  children: (0, e.jsxs)(st.uU, {
                    href: (0, et.k2)(
                      j.TS.STORE_BASE_URL + "/curator/" + p + "/",
                    ),
                    children: [
                      (0, e.jsx)("img", {
                        className: O.TileAppInfoImage,
                        src: R.avatar_full_url,
                      }),
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#EventModTile_CuratorName",
                          R.group_name,
                        ),
                      }),
                    ],
                  }),
                }),
              });
          }
          return null;
        });
        let _t = class extends I.Component {
          render() {
            const { event: a, hidden: n, published: r } = this.props,
              o = n
                ? r
                  ? (0, c.we)("#EVentModTile_State_Staged")
                  : (0, c.we)("#EVentModTile_State_Draft")
                : (0, c.we)("#EVentModTile_State_Published"),
              d = (0, _e.iy)(a),
              m = (0, _e.A4)(a),
              g = (0, _e.ZA)(a);
            let p =
                g && !a.BHasTag("hide_store") && !a.BHasTag("mod_hide_store"),
              R =
                d &&
                !a.BHasTag("hide_library_overview") &&
                !a.BHasTag("mod_hide_library_overview"),
              _ =
                m &&
                !a.BHasTag("hide_library_detail") &&
                !a.BHasTag("mod_hide_library_detail");
            return (0, e.jsxs)("div", {
              className: O.VisibiltyCtn,
              children: [
                (0, e.jsx)("div", { className: O.TileTitle, children: o }),
                (0, e.jsx)("div", {
                  children: (0, c.we)(
                    "#EventModTile_Store_Visibility",
                    p
                      ? (0, c.we)("#WriteReview_Dialog_Yes")
                      : (0, c.we)("#WriteReview_Dialog_No"),
                    p
                      ? ""
                      : g
                        ? (0, c.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_store")
                          ? (0, c.we)("#EventModTime_Hidden_OptOut")
                          : (0, c.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, c.we)(
                    "#EventModTile_LibraryHome_Visibility",
                    R
                      ? (0, c.we)("#WriteReview_Dialog_Yes")
                      : (0, c.we)("#WriteReview_Dialog_No"),
                    R
                      ? ""
                      : g
                        ? (0, c.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_library_overview")
                          ? (0, c.we)("#EventModTime_Hidden_OptOut")
                          : (0, c.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, c.we)(
                    "#EventModTile_LibraryDetail_Visibility",
                    _
                      ? (0, c.we)("#WriteReview_Dialog_Yes")
                      : (0, c.we)("#WriteReview_Dialog_No"),
                    _
                      ? ""
                      : g
                        ? (0, c.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_library_detail")
                          ? (0, c.we)("#EventModTime_Hidden_OptOut")
                          : (0, c.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                a.BHasTag("enable_steam_china") &&
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventModTile_SteamChina_Visibility"),
                  }),
                a.BHasTag("disable_steam_global") &&
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventModTile_SteamGlobal_Hidden"),
                  }),
              ],
            });
          }
        };
        _t = D([U.PA], _t);
        let it = class extends I.Component {
          state = {
            bUpdating: !1,
            newCategoryOption: {
              label: (0, Xe.rG)(Y.HFK),
              value: { eventType: Y.HFK },
            },
          };
          m_cancelSignal = L().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          async ChangeCategoryForEvent() {
            const { eventModel: a, closeModal: n } = this.props;
            try {
              const r = this.state.newCategoryOption,
                o = r.value.eventType;
              await He.Get().UpdatePartnerEventType(
                this.m_cancelSignal,
                a.clanSteamID,
                a.GID,
                o,
              );
              const d = _e.Ac,
                m = [];
              r.value.tags &&
                r.value.tags.forEach((p) => {
                  m.push(p);
                  const R = new Ge().SetUpdateSeasonalTags(p).ToModString();
                  m.push(R);
                });
              const g = await He.Get().UpdateTagsOnPartnerEvent(
                this.m_cancelSignal,
                a.clanSteamID,
                a.GetAnnouncementGID(),
                m,
                d,
                new Ge().SetActionChangeEvent(o),
              );
              (0, k.h5)(() => {
                (a.type = o), (a.vecTags = g);
              }),
                this.setState({ bUpdating: !1 }, n);
            } catch (r) {
              const o = (0, Q.H)(r);
              console.error("ChangeEventTypeDialog error " + o.strErrorMsg, o),
                this.setState({ bUpdating: !1, strErrorMsg: o.strErrorMsg });
            }
          }
          OnChangeSelection(a) {
            this.setState({ newCategoryOption: a });
          }
          render() {
            const { eventModel: a, closeModal: n } = this.props,
              r = Y.Zi8.filter(
                (m) => m == Y.DRF || m == Y.Y3j || m >= Y.L0X,
              ).map((m) => {
                const g = { eventType: m };
                return (
                  m == Y.Fwr && (g.tags = ["patchnotes"]),
                  { label: (0, Xe.rG)(m), value: g }
                );
              });
            r.push({
              label: (0, c.we)("#PartnerEvent_Curator_Group_Members"),
              value: {
                eventType: Y.uYK,
                tags: ["curator", "curator_group_members"],
              },
            }),
              r.push({
                label: (0, c.we)("#PartnerEvent_Curator_Public"),
                value: {
                  eventType: Y.uYK,
                  tags: ["curator", "curator_public"],
                },
              }),
              r.push({
                label: (0, c.we)("#PartnerEvent_SteamAwardNominations"),
                value: {
                  eventType: Y.uYK,
                  tags: [
                    "steam_award_nomination_request",
                    "mod_hide_library_overview",
                  ],
                },
              }),
              r.push({
                label: (0, c.we)("#PartnerEvent_SteamAwardVoteRequest"),
                value: {
                  eventType: Y.uYK,
                  tags: [
                    "steam_award_vote_request",
                    "mod_hide_library_overview",
                  ],
                },
              });
            const o = [
                {
                  value: { eventType: Y.f4X, tags: ["halloween"] },
                  label: "Halloween: " + (0, c.we)("#PartnerEvent_15"),
                },
                {
                  value: { eventType: Y.zA, tags: ["halloween"] },
                  label: "Halloween: " + (0, c.we)("#PartnerEvent_22"),
                },
                {
                  value: { eventType: Y.y6, tags: ["halloween"] },
                  label: "Halloween: " + (0, c.we)("#PartnerEvent_23"),
                },
                {
                  value: { eventType: Y.hGl, tags: ["halloween"] },
                  label: "Halloween: " + (0, c.we)("#PartnerEvent_24"),
                },
                {
                  value: { eventType: Y.WNR, tags: ["halloween"] },
                  label: "Halloween: " + (0, c.we)("#PartnerEvent_35"),
                },
              ],
              d = vt.HD.GetTimeNowWithOverrideAsDate();
            return (
              d.getMonth() == 8 || d.getMonth() == 9
                ? r.unshift(...o)
                : r.push(...o),
              (0, e.jsx)(h.o0, {
                strTitle: (0, c.we)("#EventModTile_ChangeEventType"),
                strDescription: (0, c.we)(
                  "#EventModTile_ChangeEventType_Desc",
                  a.GetEventTypeAsString(),
                ),
                onCancel: n,
                onOK: () =>
                  this.setState({ bUpdating: !0 }, this.ChangeCategoryForEvent),
                children: (0, e.jsx)(I.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: O.CategoryChangeDialog,
                    children: [
                      (0, e.jsx)("br", {}),
                      this.state.bUpdating &&
                        (0, e.jsx)(M.t, { size: "small" }),
                      this.state.strErrorMsg &&
                        (0, e.jsxs)("div", {
                          children: [
                            (0, c.we)("#Chat_Settings_Error_ServerError"),
                            (0, e.jsx)("br", {}),
                            this.state.strErrorMsg,
                          ],
                        }),
                      (0, e.jsx)(ke.Ay, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: r,
                      }),
                    ],
                  }),
                }),
              })
            );
          }
        };
        D([ae.oI], it.prototype, "ChangeCategoryForEvent", 1),
          D([ae.oI], it.prototype, "OnChangeSelection", 1),
          (it = D([U.PA], it));
        class ot extends I.Component {
          state = {
            bUpdating: !1,
            bAccept: this.props.eventModel.BHasTag("halloween2019"),
            bHorror: this.props.eventModel.BHasTag("horror"),
            bCute: this.props.eventModel.BHasTag("cute"),
          };
          m_cancelSignal = L().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "UpdateSeasonalTagDialog component unmounted",
            );
          }
          ChangeAcceptance() {
            this.setState({ bAccept: !this.state.bAccept });
          }
          ChangeHorror() {
            this.setState({ bHorror: !this.state.bHorror });
          }
          ChangeCute() {
            this.setState({ bCute: !this.state.bCute });
          }
          async ApplyAction() {
            let n = new Array(),
              r = new Array();
            this.state.bAccept
              ? (n.push("halloween2019"), r.push("halloween2019reviewed"))
              : (r.push("halloween2019"), n.push("halloween2019reviewed")),
              this.state.bCute ? n.push("cute") : r.push("cute"),
              this.state.bHorror ? n.push("horror") : r.push("horror");
            try {
              const { eventModel: o } = this.props;
              let d = await He.Get().UpdateTagsOnPartnerEvent(
                this.m_cancelSignal,
                o.clanSteamID,
                o.AnnouncementGID,
                n,
                r,
                new Ge().SetUpdateSeasonalTags(
                  this.state.bAccept
                    ? "halloween2019"
                    : "halloween2019reviewed",
                ),
              );
              (o.vecTags = d), this.props.closeModal();
            } catch (o) {
              let d = (0, Q.H)(o);
              console.error("EventModerationTile " + d.strErrorMsg, d),
                this.setState({ strErrorMsg: d.strErrorMsg });
            }
          }
          render() {
            const { eventModel: n, closeModal: r } = this.props;
            return (0, e.jsx)(h.o0, {
              strTitle: (0, c.we)("#EventModTile_SeasonalTag"),
              onCancel: r,
              onOK: () => this.setState({ bUpdating: !0 }, this.ApplyAction),
              children: (0, e.jsx)(I.Fragment, {
                children: (0, e.jsxs)("div", {
                  className: O.CategoryChangeDialog,
                  children: [
                    (0, e.jsx)("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Acceptance",
                      children: (0, c.we)("#EventModTile_SeasonalTag_Desc"),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, c.we)(
                        "#EventModTile_SeasonalTag_Desc_Secondary",
                      ),
                    }),
                    (0, e.jsx)("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Horror",
                      children: "Horror Tag",
                    }),
                    (0, e.jsx)("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Cute",
                      children: "Cute Tag",
                    }),
                    this.state.bUpdating && (0, e.jsx)(M.t, { size: "small" }),
                    this.state.strErrorMsg &&
                      (0, e.jsxs)("div", {
                        children: [
                          (0, c.we)("#Chat_Settings_Error_ServerError"),
                          (0, e.jsx)("br", {}),
                          this.state.strErrorMsg,
                        ],
                      }),
                  ],
                }),
              }),
            });
          }
        }
        D([ae.oI], ot.prototype, "ChangeAcceptance", 1),
          D([ae.oI], ot.prototype, "ChangeHorror", 1),
          D([ae.oI], ot.prototype, "ChangeCute", 1),
          D([ae.oI], ot.prototype, "ApplyAction", 1);
        var Nt = s(78192),
          $t = Object.defineProperty,
          qt = Object.getOwnPropertyDescriptor,
          en = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? qt(n, r) : n, m = a.length - 1, g;
              m >= 0;
              m--
            )
              (g = a[m]) && (d = (o ? g(n, r, d) : g(d)) || d);
            return o && d && $t(n, r, d), d;
          };
        let zt = class extends I.Component {
          state = { bLoadingEvent: !0 };
          m_cancelSignal = L().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "SteamGameFestivalStoreDebug to unload ",
            );
          }
          async componentDidMount() {
            const { clanEventGID: a, clanAccountID: n } = this.props;
            if (
              (console.log(a, n, typeof a, typeof n),
              a && !ce.O3.BHasClanEventModel(a))
            ) {
              let r = H.b.InitFromClanID(Number.parseInt(n)),
                o = await ce.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  r,
                  a,
                  0,
                ),
                d = new Array(),
                m = new Array();
              if (o.BHasSaleEnabled()) {
                this.setState({
                  event: o,
                  bLoadingEvent: !1,
                  bLoadingApps: !0,
                  bLoadingDemos: !0,
                  bLoadingAssociatedDemoInfo: !0,
                });
                let g = new Map();
                o.jsondata.sale_sections.forEach((_) => {
                  _.section_type == "tabs" &&
                    _.tabs.forEach((se) => {
                      se.capsules.forEach((te) => {
                        te.type == "game" ||
                        te.type == "application" ||
                        te.type == "software"
                          ? g.has(te.id) || (g.set(te.id, !0), d.push(te.id))
                          : g.has(te.id) || (g.set(te.id, !0), m.push(te.id));
                      });
                    });
                });
                const p = {
                  include_assets: !0,
                  include_screenshots: !0,
                  include_release: !0,
                };
                await ye.A.Get().QueueMultipleAppRequests(d, p),
                  this.setState({
                    rgAppIDs: d,
                    rgUnknownTypeAppIDs: m,
                    bLoadingApps: !1,
                  }),
                  await ye.A.Get().QueueMultipleAppRequests(d, p),
                  this.setState({ bLoadingAssociatedDemoInfo: !1 });
                const R = d.flatMap(
                  (_) => ye.A.Get().GetApp(_)?.GetDemoAppIDs() ?? [],
                );
                await ye.A.Get().QueueMultipleAppRequests(R, p),
                  this.setState({ bLoadingDemos: !1 });
              } else this.setState({ bLoadingEvent: !1, rgAppIDs: d });
            } else this.setState({ bLoadingEvent: !1 });
          }
          render() {
            if (
              this.state.bLoadingEvent ||
              this.state.bLoadingDemos ||
              this.state.bLoadingApps ||
              this.state.bLoadingAssociatedDemoInfo
            )
              return (0, e.jsx)(M.t, {
                string:
                  (0, c.we)("#Loading") +
                  (this.state.bLoadingEvent
                    ? " Events"
                    : this.state.bLoadingApps
                      ? " Apps"
                      : this.state.bLoadingAssociatedDemoInfo
                        ? " Associated Demo Info"
                        : this.state.bLoadingDemos
                          ? " Demos"
                          : "done"),
                position: "center",
              });
            if (!this.state.event)
              return (0, e.jsx)("div", { children: " Failed to load event" });
            const { event: a } = this.state;
            if (!a.jsondata.bSaleEnabled)
              return (0, e.jsx)("div", { children: "Not a sale event" });
            let n = new Array(),
              r = new Array();
            this.state.rgAppIDs
              .filter((oe) => !ye.A.Get().GetApp(oe))
              .forEach((oe) => {
                n.push(
                  (0, e.jsx)(
                    "div",
                    {
                      children: (0, e.jsx)("a", {
                        href: j.TS.STORE_BASE_URL + "app/" + oe + "/?beta=1",
                        target: "_blank",
                        children: oe,
                      }),
                    },
                    "missing: " + oe,
                  ),
                ),
                  r.push(oe);
              });
            const o = this.state.rgAppIDs.reduce(
                (oe, be) => oe + (ye.A.Get().GetApp(be)?.BHasDemo() ? 1 : 0),
                0,
              ),
              d = new Array();
            this.state.rgAppIDs.forEach((oe) => {
              const be = ye.A.Get().GetApp(oe);
              if (be && !be.BHasDemo()) {
                let De = ye.A.Get().GetApp(oe);
                d.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      children: [
                        De?.GetAppType() == Nt.uE.ue &&
                          (0, e.jsx)("b", {
                            children:
                              "--Error: Sale Page has Demo AppID, based game --\xA0",
                          }),
                        De?.GetName(),
                        " (",
                        oe,
                        ")",
                        (0, e.jsx)("a", {
                          href: (0, et.k2)(De.GetStorePageURL() + "?beta=0"),
                          target: "_blank",
                          children: "Store Page",
                        }),
                        "\xA0",
                        (0, e.jsx)("a", {
                          href: j.TS.PARTNER_BASE_URL + "apps/landing/" + oe,
                          target: "_blank",
                          children: "App Landing Page",
                        }),
                      ],
                    },
                    "missingdemo_" + oe,
                  ),
                );
              }
            });
            let m = 0,
              g = 0,
              p = 0,
              R = 0,
              _ = 0,
              se = 0;
            this.state.rgAppIDs.forEach((oe) => {
              let be = !1;
              const De = ye.A.Get().GetApp(oe);
              De &&
                De.BHasDemo() &&
                (ye.A.Get().GetApp(De.GetDemoAppIDs()[0]).BIsComingSoon()
                  ? ((p += 1), (be = !0))
                  : (R += 1));
            });
            let te = new Array(),
              Ae = 0;
            return (
              this.state.rgAppIDs.forEach((oe) => {
                ye.A.Get().GetApp(oe)?.GetAppType() != Nt.uE.ue && (Ae += 1);
              }),
              (0, e.jsxs)(K.tH, {
                children: [
                  (0, e.jsx)("h1", {
                    children: a.GetNameWithFallback((0, Y.sfN)(j.TS.LANGUAGE)),
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unique AppIDs:" }),
                      " ",
                      this.state.rgAppIDs.length,
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsxs)("b", {
                        children: ["Visible Apps in ", j.TS.COUNTRY, ":"],
                      }),
                      " ",
                      Ae,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unknown AppID types:" }),
                      " ",
                      this.state.rgUnknownTypeAppIDs.length,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Missing AppIDs:" }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [(0, e.jsx)("b", { children: "Demos:" }), " ", o],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "Visible apps missing demo store:",
                      }),
                      " ",
                      d.length,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "CApplications Loaded:" }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "CApplication with Associated Demos:",
                      }),
                      " ",
                      m,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "\xA0\xA0Associated with store page but not released: ",
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "CApplication with demo without association:",
                      }),
                      " ",
                      g,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "\xA0\xA0Released but not associated with store page: ",
                      }),
                      " ",
                      se,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "CApplication missing:" }),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "CApplication without demo store and demo associations:",
                      }),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Released Demo: " }),
                      R,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unreleased Demo: " }),
                      p,
                    ],
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)("h2", { children: "Missing Appids:" }),
                  n,
                  (0, e.jsx)("h2", {
                    children:
                      "Missing BOTH demo list and associated demo on product page:",
                  }),
                  te,
                  (0, e.jsx)("h2", {
                    children:
                      "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):",
                  }),
                  d,
                ],
              })
            );
          }
        };
        zt = en([U.PA], zt);
        var tn = s(3685),
          nn = s(60298),
          an = s(71742),
          rn = s(5827);
        function sn(a) {
          const [n, r] = (0, I.useState)(!1),
            [o] = (0, I.useState)(() => Qt()),
            d = (0, I.useMemo)(
              () => ({
                country: j.TS.COUNTRY,
                language: j.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, I.useEffect)(() => (r(!0), on(o)), [o]),
            n
              ? (0, I.createElement)(rn.V3, {
                  context: d,
                  serviceTransportOverride: o.GetServiceTransport(),
                  children: a.children,
                })
              : null
          );
        }
        function cn(a) {
          const [n] = useState(() => Qt()),
            r = useMemo(
              () => ({
                country: Config.COUNTRY,
                language: Config.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: a.bIncludeUnpublished,
              }),
              [a.bIncludeUnpublished],
            );
          return createElement(StoreBrowseLoaderRoot, {
            context: r,
            serviceTransportOverride: n.GetServiceTransport(),
            children: a.children,
          });
        }
        function Qt() {
          const a = (0, j.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, an.wT)(!!a, "require partnerbrowse_webapi_token"),
            (0, nn.p)(new tn.D(j.TS.WEBAPI_BASE_URL, a))
          );
        }
        function on(a) {
          return ye.A.Initialize(
            a.GetServiceTransport(),
            j.iA.is_partner_member,
          );
        }
        var ln = s(17809);
        const dn = () =>
          (0, e.jsx)(sn, {
            children: (0, e.jsx)(ln.d, {
              children: (0, e.jsxs)(W.dO, {
                children: [
                  (0, e.jsx)(W.qh, {
                    path: P.B.EventGameFestivalDebug(),
                    render: (a) =>
                      (0, e.jsx)(zt, {
                        ...a,
                        clanAccountID: a.match.params.clanacountid,
                        clanEventGID: a.match.params.claneventgid,
                      }),
                  }),
                  (0, e.jsx)(W.qh, {
                    exact: !0,
                    path: P.B.EventBackfill(),
                    render: (a) => (0, e.jsx)(we, { ...a }),
                  }),
                  (0, e.jsx)(W.qh, {
                    path: P.B.EventRSSModeration(),
                    render: (a) => (0, e.jsx)(ge, { ...a }),
                  }),
                  (0, e.jsx)(W.qh, {
                    path: P.B.EventModeration(),
                    render: (a) =>
                      (0, e.jsx)(Te, {
                        ...a,
                        appid:
                          a.match.params.appid &&
                          Number.parseInt(a.match.params.appid),
                      }),
                  }),
                ],
              }),
            }),
          });
      },
      32545: (ne) => {
        ne.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      61311: (ne) => {
        ne.exports = {
          ModeratorAuditActionCtn: "f6z__AuHw6SOG9zsY2oKr",
          ExpandModActions: "_3nNMeqxuySIiNcmt7YEXb7",
        };
      },
      10026: (ne) => {
        ne.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (ne) => {
        ne.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (ne) => {
        ne.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      12037: (ne) => {
        ne.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
          BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
          "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
          "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
          "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
          "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
          "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
          "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
          "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
          "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
          "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
          focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
          hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
        };
      },
      9202: (ne) => {
        ne.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      71909: (ne) => {
        ne.exports = {
          Ctn: "_1cSpOjJvmGfNyu_HSwichZ",
          RssInput: "_8NQ9LUIbLO71H08qAYXDd",
          PreviewListCtn: "HRcOMhFkaVvhc6JpjMSNL",
          PostCtn: "_3MI2hkWsuzXcyDAibpwe7B",
          PostTitle: "_1ZsnsCKJmsJuCu04nd93lM",
          ActivePost: "h-qBFnVYUuO1I4P-cSkTz",
          PostDate: "_2vXmupKkh6p2BaA0K6CB5O",
          ErrorPost: "aBLy2PQkdVwQn6JBG8BN8",
          PostDraft: "_10_gLIbT6bnwWVSfTW2WSX",
          PostStaged: "nNzd6ujTYg6p9F7pRvFWy",
          PreviewListBtn: "_3NT8sO_AexM1KIu_MODBhK",
          PreviewButtons: "_3lbycruUbHtprPAsZH1xvl",
          UrlSettingCtn: "iN4AtnUn7apNTMq-bbs1m",
          Error: "_1ZZ510SPBPFH5AkrGEHFfu",
          DialogPostTitle: "_1XamDYGOmN-CAK2C5na9a5",
          DashboardBtn: "_2Hlrm7BUntwygz545o3zQI",
          RawRSS: "_2mOAhPzeuYmAf5zGBOdp7F",
          ButtonCtn: "_13jSBmDO_a-9t1cIUiiQGm",
          PreviewBtn: "_3HssDlgWiXjyOyu8qdcc-K",
          ViewRaw: "_2jvHrB2MnyHMk3_BUfXjgt",
          LanguageRow: "g_9tLawSDdTk6NiUPTRzd",
          LanguageTitle: "_2jkBiax2j-5uGiCq-TfyS0",
          LanguageSet: "_2zsMrGyxcvlo1yieM1i0d8",
        };
      },
      52081: (ne) => {
        ne.exports = {
          SectionContainer: "_3P-ffy_ncZSHdpLyO6f0qi",
          ModSectionTitle: "_2lc8mXoJp_A_p2dgalucda",
          ResizeButton: "_29RNNuE5kdZltMEtl37JLr",
          TileContainer: "_2D4XHyOtJNCevYR8usMUTn",
          CreatorCtn: "GKustVJ6kwH-yfSnQEsoc",
          TileSpread: "_1s_ElWG5sLvC6jn5bmx5lY",
        };
      },
      45559: (ne) => {
        ne.exports = { Error: "_1eWgIJNhXTPC8_jGAIqKPo" };
      },
      961: (ne) => {
        ne.exports = {
          AnalysisCtn: "_1YGfWUDh8ed60wRQsWWNIF",
          AnalysisMissing: "rH1DtJyqgJLBkBSxST7Pr",
          ModerationContainer: "_4HRKpSC9YY7qtf41FvW0t",
          FilterContainer: "qY07Ts46PtC9f_CkGYbuw",
          Tile: "_3oU1yN2Yb-ZuT2P5rHAev9",
          DetailsMiddle: "VcJpZMvg6yg6gvjet_lOL",
          EventModerateMarkReview: "_1RqKA7hTv6bcBGrMlmJBgz",
          EventModerateMarkReReview: "qd-K7NHXOsYzDV3efizgo",
          HalloweenEvent: "_34-bq70a3KzZ-vVd1v8whZ",
          TileEventOtherType: "_3LUrW7wuVtojLL2n5z-MO5",
          TileCapsule: "_36tP88olexdONuQPMAH7wS",
          NoCapsuleFallback: "_16oQL8__nFx7gB4SyJaXss",
          NoCapsule: "_1onVFUCJL4w1GOc9-5H6Me",
          TileDetails: "_2mRup7CUbcaFul1JHh9EZE",
          DetailsLeft: "_1O0y5744ePZj3bJR1znj1i",
          EventTitle: "_3ahHdkXDTdAX8N8qrlTO2A",
          DetailsRight: "_2BaxWyhld4ybAPEQ6OWPMr",
          ArtHeader: "_38IkFA1-NC1J4Nksi3nRFA",
          ArtSpotlight: "_2oUPYZHA2_Ta4GuTcTZbgd",
          ModeratedFlagCtn: "_2JGGc489-CEXdtyThZ-oQB",
          TitleLink: "_1OG__rbIbfwvZHVxRtcncy",
          TileAppInfo: "_2IJ__vdWVbYb-buHnhzfnA",
          TileAppInfoTitle: "_2X75q8B3vbGNtefxcW3jV7",
          TileAppInfoImage: "_1rVmL1div0uHwyMqwlJixh",
          TileSplit: "aaFuCFgI5Fl32h2pWEEfN",
          TileTitle: "yJw1iGP3a49nfGpsJLTX",
          TimeWidth: "xSOgV1OP-kC1LOJB_U6Lh",
          CategoryChangeDialog: "_1VSAjVr5FVxM5XYWbK0drT",
          Button: "wu9KrcTvKBuVbK28hlB7O",
          RightSideTitles: "XDAwDPCqcUwPgADyyo1I3",
          DateAndTime: "_2cW9NG6Q7uWRVnhAwe3juu",
          StoreHeaderAdjust: "_3U7jaAVOEBb0gDtFK1AkVR",
          LastUpdateTime: "_2x7zHBXixihuRXX3Rjt_0s",
          EventTimingBlock: "_31d_RSG49SZFyfID3s5Z4G",
          TileEventType: "_1z1xtCOtqCzGGGDRR-dRFr",
          ChannelInfo: "H__RKLMfFToIYF83TuW3k",
          HasAdultContent: "_2PcmCd2KPADlMtBUq-mAxi",
        };
      },
    },
  ]);
})();
