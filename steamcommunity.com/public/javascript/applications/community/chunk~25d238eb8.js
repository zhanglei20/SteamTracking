/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1023],
  {
    37403: (e, r, t) => {
      t.d(r, {
        $5: () => ie,
        $Y: () => v,
        BE: () => i,
        QU: () => j,
        Vc: () => q,
        _z: () => m,
        hA: () => ae,
        kZ: () => J,
        v7: () => oe,
        wS: () => Z,
        zQ: () => c,
      });
      var i,
        n = t(80613),
        a = t.n(n),
        s = t(89068),
        o = t(56545),
        l = t(36003);
      class m extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.appids || s.Sg(m.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readInt32,
                    pbr: s.qM.readPackedInt32,
                    bw: s.gp.writeRepeatedInt32,
                  },
                  language: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(m.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Request";
        }
      }
      class u extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.apps || s.Sg(u.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { apps: { n: 1, c: l.WV, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Response";
        }
      }
      class c extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || s.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  language: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || s.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  token_lists: { n: 2, c: g, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.name || s.Sg(B.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  name: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  value: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.language || s.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  language: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  tokens: { n: 2, c: B, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || s.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 5,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  start: { n: 6, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  count: { n: 7, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  upvoters: { n: 8, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  include_deleted: {
                    n: 9,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  gidcomment: {
                    n: 10,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  time_oldest: {
                    n: 11,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  oldest_first: {
                    n: 12,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Request";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.gidcomment || s.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, [12], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  text: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                  upvotes: { n: 5, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  hidden: { n: 6, br: s.qM.readBool, bw: s.gp.writeBool },
                  hidden_by_user: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  deleted: { n: 8, br: s.qM.readBool, bw: s.gp.writeBool },
                  ipaddress: { n: 9, c: l.kK },
                  total_hidden: {
                    n: 10,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  reactions: { n: 12, c: M, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.reactionid || s.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  reactionid: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  count: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment_Reaction";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.comments || s.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  comments: { n: 1, c: b, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: b, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  start: { n: 5, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  count: { n: 6, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  total_count: {
                    n: 7,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  upvotes: { n: 8, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  user_upvoted: {
                    n: 11,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  answer_commentid: {
                    n: 12,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  can_post: { n: 15, br: s.qM.readBool, bw: s.gp.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || s.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  text: { n: 6, br: s.qM.readString, bw: s.gp.writeString },
                  gidparentcomment: {
                    n: 7,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  suppress_notifications: {
                    n: 8,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  is_report: { n: 9, br: s.qM.readBool, bw: s.gp.writeBool },
                  start_hidden: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Request";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.gidcomment || s.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  count: { n: 3, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  upvotes: { n: 4, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || s.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  undelete: { n: 6, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Request";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.commentthreadtype || s.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  rate_up: { n: 6, br: s.qM.readBool, bw: s.gp.writeBool },
                  suppress_notifications: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Request";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gidcomment || s.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  count: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  upvotes: { n: 4, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  has_upvoted: { n: 5, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class F extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.commentthreadtype || s.Sg(F.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  max_results: {
                    n: 6,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = s.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Request";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.commentthreadid || s.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  upvotes: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  has_upvoted: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  upvoter_accountids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class j extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.announcementid || s.Sg(j.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  announcementid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  vote_up: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = s.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.announcementid || s.Sg(v.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  announcementid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class C extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.voted_up || s.Sg(C.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  voted_up: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                  voted_down: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = s.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || s.Sg(q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  filter_user_uploaded_only: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = s.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Request";
        }
      }
      class T extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.avatars || s.Sg(T.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { avatars: { n: 1, c: O, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class O extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.avatar_sha1 || s.Sg(O.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  user_uploaded: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  timestamp: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = s.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.priority || s.Sg(I.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  priority: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppPriority";
        }
      }
      class U extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.count || s.Sg(U.M()),
            n.Message.initialize(this, e, 0, -1, [5, 6, 8], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  count: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  offset: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  rtime32_start_time: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 4,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  language_preference: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  filter_event_type: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  filter_to_appid: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  app_list: { n: 8, c: I, r: !0, q: !0 },
                  count_after: {
                    n: 9,
                    d: 0,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  count_before: {
                    n: 10,
                    d: 0,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = s.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Request";
        }
      }
      class x extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.results || s.Sg(x.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { results: { n: 1, c: l.h2, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = s.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class P extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.include_steam_blog || s.Sg(P.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  include_steam_blog: {
                    n: 1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  filter_to_played_within_days: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  include_only_game_updates: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = s.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Request";
        }
      }
      class E extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.clanid || s.Sg(E.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  clanid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  appid: { n: 4, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventResult";
        }
      }
      class N extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.results || s.Sg(N.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { results: { n: 1, c: E, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = s.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class G extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
        }
      }
      class A extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class k extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appid || s.Sg(k.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = s.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class $ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
        }
      }
      class L extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.priorities || s.Sg(L.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { priorities: { n: 1, c: k, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = s.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class V extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appid || s.Sg(V.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = s.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
        }
      }
      class D extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class H extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || s.Sg(H.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = s.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Request";
        }
      }
      class K extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class Q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || s.Sg(Q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = s.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Request";
        }
      }
      class Y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class Z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.markings || s.Sg(Z.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { markings: { n: 1, c: J, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = s.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class J extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.clanid || s.Sg(J.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  clanid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  mark_shown: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  mark_read: { n: 5, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = s.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class X extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class ee extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.event_gids || s.Sg(ee.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  event_gids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readFixed64String,
                    pbr: s.qM.readPackedFixed64String,
                    bw: s.gp.writeRepeatedFixed64String,
                  },
                  include_read_events_only: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = s.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Request";
        }
      }
      class re extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.events || s.Sg(re.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { events: { n: 1, c: te, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = s.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class te extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.event_gid || s.Sg(te.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  event_gid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = s.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(te.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      class ie extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || s.Sg(ie.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = s.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Request";
        }
      }
      class ne extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.crowdin_project_id || s.Sg(ne.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  crowdin_file_id: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = s.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(ne.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Response";
        }
      }
      class ae extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.steamid || s.Sg(ae.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = s.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Request";
        }
      }
      class se extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.crowdin_project_id || s.Sg(se.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  crowdin_directory_id: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  push_by_default: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = s.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(se.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Response";
        }
      }
      class oe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || s.Sg(oe.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  language: { n: 3, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = s.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Request";
        }
      }
      class le extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Response";
        }
      }
      !(function (e) {
        (e.GetApps = function (e, r) {
          return e.SendMsg("Community.GetApps#1", (0, o.I8)(m, r), u, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, r) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              (0, o.I8)(c, r),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThread#1",
              (0, o.I8)(y, r),
              w,
              { ePrivilege: 2 },
            );
          }),
          (e.PostCommentToThread = function (e, r) {
            return e.SendMsg(
              "Community.PostCommentToThread#1",
              (0, o.I8)(p, r),
              z,
              { ePrivilege: 3 },
            );
          }),
          (e.DeleteCommentFromThread = function (e, r) {
            return e.SendMsg(
              "Community.DeleteCommentFromThread#1",
              (0, o.I8)(_, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.RateCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.RateCommentThread#1",
              (0, o.I8)(S, r),
              R,
              { ePrivilege: 3 },
            );
          }),
          (e.GetCommentThreadRatings = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThreadRatings#1",
              (0, o.I8)(F, r),
              h,
              { ePrivilege: 2 },
            );
          }),
          (e.RateClanAnnouncement = function (e, r) {
            return e.SendMsg(
              "Community.RateClanAnnouncement#1",
              (0, o.I8)(j, r),
              W,
              { ePrivilege: 3 },
            );
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              (0, o.I8)(v, r),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarHistory = function (e, r) {
            return e.SendMsg(
              "Community.GetAvatarHistory#1",
              (0, o.I8)(q, r),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.GetClanEventCrowdInMetadata = function (e, r) {
            return e.SendMsg(
              "Community.GetClanEventCrowdInMetadata#1",
              (0, o.I8)(ie, r),
              ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClanCrowdInMetadata = function (e, r) {
            return e.SendMsg(
              "Community.GetClanCrowdInMetadata#1",
              (0, o.I8)(ae, r),
              se,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.FetchTranslationFromCrowdIn = function (e, r) {
            return e.SendMsg(
              "Community.FetchTranslationFromCrowdIn#1",
              (0, o.I8)(oe, r),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventNews = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventNews#1",
              (0, o.I8)(U, r),
              x,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBestEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetBestEventsForUser#1",
              (0, o.I8)(P, r),
              N,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.MarkPartnerEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.MarkPartnerEventsForUser#1",
              (0, o.I8)(Z, r),
              X,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventViewStatus = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              (0, o.I8)(ee, r),
              re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowMoreForApp#1",
              (0, o.I8)(H, r),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowLessForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowLessForApp#1",
              (0, o.I8)(Q, r),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              (0, o.I8)(G, r),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              (0, o.I8)($, r),
              L,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, r) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              (0, o.I8)(V, r),
              D,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
    },
  },
]);
