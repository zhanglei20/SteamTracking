/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [86762],
    {
      12946: (Se, Ne, f) => {
        "use strict";
        f.r(Ne), f.d(Ne, { MeetSteamRoutes: () => at, default: () => ns });
        var t = f(7850),
          fe = f(58732),
          p = f(90626),
          Z = f(17083),
          ee = f(92757),
          pe = f(61266),
          Ie = f(26485),
          Le = f(90783),
          ve = f(25792),
          T = f(95695),
          ue = f.n(T),
          ge = f(21418),
          Te = f(45737),
          B = f.n(Te),
          U = f(67705),
          R = f(99412),
          P = f(72604),
          ie = f(35038),
          K = f(80613),
          E = f.n(K),
          o = f(75245);
        class ae extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.clan_event_gid || o.Sg(ae.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    registration_group_id: {
                      n: 3,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    registration_session_id: {
                      n: 4,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guest_count: {
                      n: 5,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    jsondata: {
                      n: 7,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    skip_email: { n: 8, br: o.qM.readBool, bw: o.gp.writeBool },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = o.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(ae.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new ae();
            return ae.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(ae.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(ae.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Request";
          }
        }
        class we extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new we();
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new we();
            return we.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Response";
          }
        }
        class k extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.clan_event_gid || o.Sg(k.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = o.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(k.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new k();
            return k.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(k.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(k.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Request";
          }
        }
        class c extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              c.prototype.availability || o.Sg(c.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: { availability: { n: 1, c: l, r: !0, q: !0 } },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = o.w0(c.M())), c.sm_mbf;
          }
          toObject(e = !1) {
            return c.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(c.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(c.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new c();
            return c.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(c.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(c.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response";
          }
        }
        class l extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              l.prototype.group_id || o.Sg(l.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    group_id: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guest_count: {
                      n: 3,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = o.w0(l.M())), l.sm_mbf;
          }
          toObject(e = !1) {
            return l.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(l.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(l.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new l();
            return l.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(l.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(l.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response_Session";
          }
        }
        class m extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              m.prototype.clan_event_gid || o.Sg(m.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = o.w0(m.M())), m.sm_mbf;
          }
          toObject(e = !1) {
            return m.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(m.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(m.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new m();
            return m.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(m.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(m.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Request";
          }
        }
        class j extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.registrations || o.Sg(j.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: { registrations: { n: 1, c: x, r: !0, q: !0 } },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = o.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(j.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new j();
            return j.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(j.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(j.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response";
          }
        }
        class x extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.group_id || o.Sg(x.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    group_id: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    steamid: {
                      n: 3,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    guests_registered: {
                      n: 4,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    jsondata: {
                      n: 5,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    rt_attendance_marked: {
                      n: 6,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    attendance_count: {
                      n: 7,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guests_attendance: {
                      n: 8,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = o.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(x.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new x();
            return x.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(x.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(x.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
          }
        }
        class L extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.clan_event_gid || o.Sg(L.M()),
              K.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    accountids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = o.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(L.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new L();
            return L.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(L.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(L.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Request";
          }
        }
        class H extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.num_emailed || o.Sg(H.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    num_emailed: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    num_skipped: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = o.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(H.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new H();
            return H.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(H.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(H.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Response";
          }
        }
        class X extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.clan_event_gid || o.Sg(X.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = o.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(X.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new X();
            return X.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(X.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(X.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Request";
          }
        }
        class G extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.sessionids || o.Sg(G.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    sessionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = o.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(G.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new G();
            return G.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(G.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(G.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Response";
          }
        }
        class F extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.rt_oldest_date || o.Sg(F.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    rt_oldest_date: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = o.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(F.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new F();
            return F.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(F.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(F.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
          }
        }
        class C extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.accountid || o.Sg(C.M()),
              K.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    accountid: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    clan_event_gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: o.qM.readFixed64String,
                      pbr: o.qM.readPackedFixed64String,
                      bw: o.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = o.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(C.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new C();
            return C.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(C.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(C.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleEventOrganizerInfo";
          }
        }
        class b extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.info || o.Sg(b.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: { info: { n: 1, c: C, r: !0, q: !0 } },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = o.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(b.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new b();
            return b.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(b.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(b.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
          }
        }
        class Q extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.accountids || o.Sg(Q.M()),
              K.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    accountids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                    partnerids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = o.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(Q.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(Q.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(Q.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
          }
        }
        class I extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.accountid || o.Sg(I.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    accountid: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    partnerid: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    realname: {
                      n: 3,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    email: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = o.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(I.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new I();
            return I.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(I.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(I.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerEmailAndName";
          }
        }
        class O extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.info || o.Sg(O.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { info: { n: 1, c: I, r: !0, q: !0 } },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = o.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(O.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (E().BinaryReader)(e),
              s = new O();
            return O.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(O.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (E().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(O.M(), e, n);
          }
          serializeBase64String() {
            var e = new (E().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
          }
        }
        var M;
        ((r) => {
          function e(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.UpdateRegistration#1",
              (0, ie.I8)(ae, g, v),
              we,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.UpdateRegistration = e;
          function n(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, ie.I8)(k, g, v),
              c,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          r.GetAvailability = n;
          function s(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, ie.I8)(m, g, v),
              j,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetRegistrations = s;
          function a(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, ie.I8)(L, g, v),
              H,
              { ePrivilege: 4 },
            );
          }
          r.EmailInvitees = a;
          function i(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, ie.I8)(X, g, v),
              G,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          r.TestFireEmails = i;
          function d(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, ie.I8)(F, g, v),
              b,
              {
                bConstMethod: !0,
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetSaleEventOrganizers = d;
          function u(h, g, v) {
            return h.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, ie.I8)(Q, g, v),
              O,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetBatchPartnerEmailAndName = u;
        })(M || (M = {}));
        var oe = f(64868),
          te = f(20194),
          he = f(75233),
          Fe = f(41735),
          Y = f.n(Fe),
          $ = f(76559),
          N = f(3166),
          W = f(91916),
          ne = f(40772),
          xe = f(7582),
          ce = f(179);
        function re(r, e = !1) {
          const [n, s = "00:00:00"] = r.trim().split(/\s+/),
            [a, i, d] = n.split("-").map(Number),
            [u, h, g] = s.split(":").map(Number),
            v = e
              ? Date.UTC(a, i - 1, d, u, h, g ?? 0)
              : new Date(a, i - 1, d, u, h, g ?? 0).getTime();
          return Math.floor(v / 1e3);
        }
        function J() {
          const [r] = p.useState(() =>
              (0, N.Tc)("events_list", "application_config"),
            ),
            [e] = (0, ce.QD)("filter"),
            n = (0, xe.f1)(),
            [s, a] = p.useMemo(() => {
              let d = new Array(),
                u = new Array();
              return (
                r.forEach((h) => {
                  h.endtime && re(h.endtime) < n ? u.push(h) : d.push(h);
                }),
                [u, d]
              );
            }, [r, n]),
            i = (0, p.useMemo)(
              () => r.find((d) => d.id === e?.toLocaleLowerCase()),
              [r, e],
            );
          return { rgOldEvents: s, rgEvents: a, selectConference: i };
        }
        function je(r) {
          return ["usePartnerRevAndBestAppSlow", r];
        }
        async function _(r) {
          const e = `${N.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
            n = { sessionid: (0, N.KC)(), partnerid: r };
          return (await Y().get(e, { params: n }))?.data?.data;
        }
        function le(r) {
          const e = (0, te.I)({
            queryKey: je(r),
            queryFn: async () => _(r),
            enabled: !!r,
          });
          return e.isLoading ? null : e.data;
        }
        function me(r, e) {
          return r.getQueryData(["usePartnerRevAndBestAppSlow", e]);
        }
        function Ke(r, e, n) {
          return (0, te.I)({
            queryKey: ["useMeetSteamGetAllRegistration", e, n],
            queryFn: async () => {
              const a = ie.w.Init(m);
              a.Body().set_clan_event_gid(e);
              const i = await M.GetRegistrations(r, a);
              return i.BSuccess()
                ? i
                    .Body()
                    .registrations()
                    .map((d) => d.toObject())
                : [];
            },
            enabled: e != null && n != 0,
          });
        }
        function We(r) {
          const e = (0, te.I)({
            queryKey: ["useMeetSteamSaleOperators"],
            queryFn: async () => {
              const n = ie.w.Init(F),
                s = new Date();
              s.setFullYear(s.getFullYear() - 2),
                n.Body().set_rt_oldest_date(0);
              const a = await M.GetSaleEventOrganizers(r, n);
              return a.BSuccess()
                ? a
                    .Body()
                    .info()
                    .map((i) => i.toObject())
                : [];
            },
          });
          return e.isLoading ? null : e.data;
        }
        function Je(r) {
          const [e, n] = (0, p.useState)(!1),
            [s, a] = (0, p.useState)(0),
            i = (0, he.jE)();
          return (
            (0, p.useEffect)(() => {
              (async () => {
                let u = 0;
                for (const h of r) {
                  const g = h.results.partner_id,
                    v = new $.b(h.steamid).GetAccountID();
                  await Promise.all([
                    (0, W.qG)(g),
                    i.prefetchQuery({
                      queryKey: je(g),
                      queryFn: async () => _(g),
                    }),
                    (0, ne.PQ)(i, g),
                  ]),
                    ++u,
                    a(u);
                }
                n(!0);
              })();
            }, [i, r]),
            { bComplete: e, nCount: s }
          );
        }
        var be = f(19367),
          Oe = f.n(be),
          de = f(48421),
          Be = f(69909),
          De = f(63854),
          V = f(58534),
          Pe = f(16369),
          Ae = f(1880),
          ye = f(69168),
          se = f(85599),
          Ze = f(11243),
          et = f(36707),
          It = f(41502),
          A = f(18210),
          ct = f(92264),
          ke = f(98609),
          an = f(30565),
          Ee = f.n(an);
        function on(r) {
          const e = Tt();
          return (0, t.jsx)("div", {
            children: (0, t.jsx)("ol", {
              children: Array.from(e.entries()).map(([n, s]) =>
                (0, t.jsx)(
                  "li",
                  {
                    children: (0, t.jsx)("a", {
                      href: `${N.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${n}`,
                      target: "_blank",
                      children: s,
                    }),
                  },
                  n,
                ),
              ),
            }),
          });
        }
        function Tt() {
          const [r] = (0, p.useState)(() => {
            const e = (0, N.Tc)("survey_list", "application_config") || {},
              n = new Map();
            for (const s of Object.keys(e)) n.set(s, e[s]);
            return n;
          });
          return r;
        }
        function cn() {
          const [r, e] = (0, p.useState)(location.search);
          return (
            (0, p.useEffect)(() => {
              function n(s) {
                s.data === "urlchange" && e(location.search);
              }
              return (
                window.addEventListener("message", n),
                () => {
                  window.removeEventListener("message", n);
                }
              );
            }, []),
            r
          );
        }
        function At(r, e) {
          const n = cn(),
            s = (0, p.useMemo)(() => {
              const h = new URLSearchParams(n.substring(1)).get(r);
              return h != null
                ? e != null
                  ? typeof e == "boolean"
                    ? e.constructor(h !== "false")
                    : e.constructor(h)
                  : h
                : e;
            }, [r, e, n]),
            [a, i] = (0, p.useState)(s),
            d = p.useCallback(
              (u, h = !1) => {
                const g = new URLSearchParams(n.substring(1));
                if (u != null) {
                  if (g.get(r) == u) return;
                  g.set(r, String(u));
                } else {
                  if (!g.has(r)) return;
                  g.delete(r);
                }
                h
                  ? history.replaceState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${g}`),
                    )
                  : history.pushState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${g}`),
                    ),
                  (0, p.startTransition)(() => {
                    i(u), window.postMessage("urlchange");
                  });
              },
              [r, n],
            );
          return [a, d];
        }
        const Et = p.createContext(void 0);
        function ln(r) {
          const { children: e } = r,
            [n, s] = At("showpastevents", !1);
          return (0, t.jsx)(Et.Provider, {
            value: { bShowArchived: n, setShowArchived: s },
            children: e,
          });
        }
        const Mt = () => {
          const r = (0, p.useContext)(Et);
          if (!r)
            throw new Error(
              "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
            );
          return r;
        };
        var dn = f(34283),
          $e = f.n(dn),
          rt = f(34592),
          Xe = f(22880),
          st = f(45926),
          dt = f(54407),
          un = f(71742),
          hn = f(13018),
          gn = f(60298);
        class Ge {
          m_steamInterface;
          GetSaleFeatureTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              Ge.s_Singleton ||
                ((Ge.s_Singleton = new Ge()), Ge.s_Singleton.Init()),
              Ge.s_Singleton
            );
          }
          Init() {
            const e = (0, U.Tc)("store_feature_token", "application_config");
            (0, un.wT)(!!e, "require store_feature_token"),
              (this.m_steamInterface = (0, gn.p)(
                new hn.D(ke.TS.WEBAPI_BASE_URL, e),
              ));
          }
        }
        function ut() {
          return Ge.Get().GetSaleFeatureTransport().GetServiceTransport();
        }
        var it = f(24642),
          Lt = f(72609);
        async function mn(r) {
          const e = `${Lt.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${r}`,
            n = await fetch(e);
          if (!n.ok)
            throw new Error(`Failed to read the partner list for account ${r}`);
          const s = await n.json();
          if (s.success != P.R)
            throw new Error(
              `Failed to read the partner list for account ${r}: ${s.msg}`,
            );
          return s.partners ?? [];
        }
        function fn(r) {
          return (0, te.I)({
            queryKey: ["MeetSteamPartnersForAccount", r],
            queryFn: () => mn(r),
            enabled: r > 0,
          });
        }
        function ss(r, e) {
          const [n, s] = useState(r),
            a = Ft(n, {
              nTimeoutMS: e,
              nTimeoutExtensionMS: e,
              nMaxTimeoutExtensions: 1 / 0,
            });
          return [n, a, s];
        }
        function Ft(r, e = {}) {
          const {
              nTimeoutMS: n = 350,
              nTimeoutExtensionMS: s = 125,
              nMaxTimeoutExtensions: a = 3,
            } = e,
            [i, d] = p.useState(r),
            u = p.useRef(void 0);
          return (
            p.useEffect(() => {
              const h = performance.now();
              u.current
                ? h - u.current.tsLastChange < a * n &&
                  (u.current.tsScheduledTimeout = Math.max(
                    performance.now() + s,
                    u.current.tsScheduledTimeout,
                  ))
                : (u.current = {
                    tsLastChange: h,
                    tsScheduledTimeout: performance.now() + n,
                  });
              const g = u.current.tsScheduledTimeout - performance.now(),
                v = window.setTimeout(() => {
                  (u.current = void 0), d(r);
                }, g);
              return () => window.clearTimeout(v);
            }, [r, n, s, a]),
            i
          );
        }
        function pn(r) {
          const e = r.trim();
          if (!/^\d+$/.test(e)) return 0;
          if (Number(e) > 4294967295) {
            const n = new $.b(e);
            return n.BIsValid() && n.BIsIndividualAccount()
              ? n.GetAccountID()
              : 0;
          }
          return Number(e);
        }
        function vn(r) {
          const { hideModal: e, gid: n } = r,
            [s, a] = (0, p.useState)(!1),
            [i, d] = (0, p.useState)(null),
            [u, h] = p.useState(""),
            [g, v] = p.useState(""),
            [y, w] = p.useState(""),
            [z, S] = p.useState(!1),
            D = Ft(u),
            q = pn(D),
            ze = !!D.trim() && !q,
            Qe = ut(),
            qe = fn(q),
            Ue = qe.data,
            Me = (0, te.I)({
              queryKey: ["MeetSteamInviteDirectDialog", n, q],
              queryFn: async () => {
                const Re = {
                    steamid: $.b.InitFromAccountID(q).ConvertTo64BitString(),
                    gid: n,
                    type: st.Dk.rV,
                  },
                  _e = await st.Nl.GetUserActionData(Qe, Re);
                return _e.BSuccess() && _e.Body().jsondata()
                  ? JSON.parse(_e.Body().jsondata())
                  : {};
              },
              enabled: !!n && q > 0,
            });
          p.useEffect(() => {
            if (!Me.isLoading && Me.isSuccess) {
              const Re = Ue?.length == 1 ? Ue[0].partnerid.toString() : "";
              v(Me.data.partner_id ? Me.data.partner_id.toString() : Re),
                w(Me.data.email_override ?? ""),
                S(Me.data.allow_registration_if_full ?? !1);
            }
          }, [Me.isLoading, Me.isSuccess, Me.data, Ue]);
          const rs = async () => {
            a(!0);
            const Re = Number.parseInt(g) > 0 ? Number.parseInt(g) : 0,
              _e = await zt(
                n,
                [
                  {
                    nAccountID: q,
                    nPartnerID: Re,
                    strEmailOverride: y,
                    bAllowRegistrationIfFull: z,
                  },
                ],
                !0,
              ),
              sn = _e && _e.success == P.R;
            sn || d("We hit error during invite, check console: " + _e?.msg),
              a(!1),
              Me.refetch(),
              sn && e();
          };
          return (0, t.jsxs)(Ae.o0, {
            strTitle: "Invite User",
            bOKDisabled: !q || s || Me.isLoading,
            onOK: rs,
            onCancel: e,
            children: [
              !!i &&
                (0, t.jsx)("div", {
                  className: T.ErrorStylesWithIcon,
                  children: i,
                }),
              !s &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      children:
                        "Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.",
                    }),
                    (0, t.jsx)(V.pd, {
                      type: "text",
                      label: "Account ID or Steam ID",
                      description:
                        "Accepts either the 32-bit account id or the 64-bit steam id",
                      onChange: (Re) => h(Re.currentTarget.value),
                      value: u,
                    }),
                    ze &&
                      (0, t.jsx)("div", {
                        className: T.ErrorStylesWithIcon,
                        children: "That is not a valid account id or steam id.",
                      }),
                    q != 0 && (0, t.jsx)(xn, { nAccountID: q }),
                    q != 0 &&
                      !Me.isLoading &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(V.pd, {
                            type: "number",
                            label: "Partner ID (optional)",
                            onChange: (Re) => v(Re.currentTarget.value),
                            value: g,
                          }),
                          (0, t.jsx)(jn, {
                            rgPartners: Ue,
                            bLoading: qe.isLoading,
                            bFailed: qe.isError,
                            strPartnerID: g,
                            SetPartnerID: v,
                          }),
                          (0, t.jsx)(V.pd, {
                            type: "text",
                            label: "Email override (optional)",
                            onChange: (Re) => w(Re.currentTarget.value.trim()),
                            value: y,
                          }),
                          (0, t.jsx)(V.Yh, {
                            controlled: !0,
                            checked: z,
                            onChange: S,
                            label: "Allow if registration is full",
                          }),
                        ],
                      }),
                  ],
                }),
              s &&
                (0, t.jsx)(se.t, {
                  size: "small",
                  position: "center",
                  string: (0, A.we)("#Saving"),
                }),
              Me.isLoading &&
                (0, t.jsx)(se.t, {
                  size: "small",
                  position: "center",
                  string: (0, A.we)("#Loading"),
                }),
            ],
          });
        }
        function xn(r) {
          const { nAccountID: e } = r,
            [n, s] = (0, dt.KT)(e);
          if (s)
            return (0, t.jsx)(se.t, {
              size: "small",
              position: "center",
              string: (0, A.we)("#Loading"),
            });
          if (!n)
            return (0, t.jsx)("div", {
              className: T.ErrorStylesWithIcon,
              children: `We could not find an account for ${e}.`,
            });
          const a = $.b.InitFromAccountID(e).ConvertTo64BitString();
          return (0, t.jsxs)("div", {
            className: $e().AccountSummary,
            children: [
              (0, t.jsx)("img", {
                className: $e().AccountAvatar,
                src: n.avatar_url?.replace(/\.jpg$/, "_medium.jpg"),
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: $e().AccountPersonaName,
                    children: n.persona_name,
                  }),
                  (0, t.jsx)("a", {
                    href: `${ke.TS.SUPPORT_BASE_URL}account/overview/${a}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: `Account ${e} / SteamID ${a}`,
                  }),
                ],
              }),
            ],
          });
        }
        function jn(r) {
          const {
            rgPartners: e,
            bLoading: n,
            bFailed: s,
            strPartnerID: a,
            SetPartnerID: i,
          } = r;
          return n
            ? (0, t.jsx)(se.t, {
                size: "small",
                position: "center",
                string: "Looking up partner membership",
              })
            : s
              ? (0, t.jsx)("div", {
                  className: $e().PartnerListHeader,
                  children:
                    "We could not look up partner membership, enter the partner id above.",
                })
              : !e || e.length == 0
                ? (0, t.jsx)("div", {
                    className: $e().PartnerListHeader,
                    children: "This account is not a member of any partner.",
                  })
                : (0, t.jsxs)("div", {
                    className: $e().PartnerList,
                    children: [
                      (0, t.jsx)("div", {
                        className: $e().PartnerListHeader,
                        children: "Member of, click to use:",
                      }),
                      e.map((d) =>
                        (0, t.jsxs)(
                          "a",
                          {
                            href: "#",
                            className: (0, et.A)(
                              $e().PartnerListRow,
                              d.partnerid.toString() == a
                                ? $e().PartnerListRowSelected
                                : "",
                            ),
                            onClick: (u) => {
                              u.preventDefault(), i(d.partnerid.toString());
                            },
                            children: [d.partner_name, " (", d.partnerid, ")"],
                          },
                          d.partnerid,
                        ),
                      ),
                    ],
                  });
        }
        function yn(r) {
          const { hideModal: e, gid: n } = r,
            [s, a] = (0, p.useState)(null),
            [i, d] = (0, p.useState)(!1),
            [u, h] = (0, p.useState)(null),
            [g, v] = (0, p.useState)(null),
            [y, w] = (0, p.useState)(null),
            z = async () => {
              d(!0);
              const D = await zt(n, s, !1);
              D?.success == P.R
                ? (v(D.rgInvitedAccounts.length), w(D.rgSkippedAccounts.length))
                : h("We hit error during invite, check console: " + D?.msg),
                d(!1);
            },
            S = () => {
              v(null), w(null), d(!1), a(null), e();
            };
          return (0, t.jsxs)(Ae.o0, {
            strTitle: "Invite Users",
            bOKDisabled: !s || s.length == 0 || g != null,
            strCancelButtonText: g !== null ? "Close" : "Cancel",
            onOK: z,
            onCancel: S,
            children: [
              !!u &&
                (0, t.jsx)("div", {
                  className: T.ErrorStylesWithIcon,
                  children: u,
                }),
              g != null &&
                (0, t.jsxs)("div", {
                  children: [
                    "Invited ",
                    (0, it.D)(g),
                    " accounts, skipped previously invited ",
                    (0, it.D)(y),
                  ],
                }),
              i &&
                (0, t.jsx)(se.t, {
                  size: "small",
                  position: "center",
                  string: (0, A.we)("#Saving"),
                }),
              (0, t.jsx)("div", {
                children:
                  "Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.",
              }),
              s == null
                ? (0, t.jsx)(bn, { setInvites: a })
                : (0, t.jsx)(wn, { rgInvites: s }),
            ],
          });
        }
        function wn(r) {
          const { rgInvites: e } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                children: ["Total Invites Parsed: ", e.length, " "],
              }),
              (0, t.jsxs)("table", {
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "AccountID" }),
                        (0, t.jsx)("th", { children: "PartnerID" }),
                        (0, t.jsx)("th", { children: "Email Override" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: e.map((n, s) =>
                      (0, t.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, t.jsx)("td", { children: n.nAccountID }),
                            (0, t.jsx)("td", { children: n.nPartnerID }),
                            (0, t.jsx)("td", { children: n.strEmailOverride }),
                          ],
                        },
                        "invite" + n.nAccountID + "_" + s,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function bn(r) {
          const { setInvites: e } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                children: "Format for CSV File, please use the template below:",
              }),
              (0, t.jsxs)("ul", {
                children: [
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "nAccountID" }),
                      " - required, 32-bit integer value, not the 64-bit steam id",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "nPartnerID" }),
                      " - (preferred for biz contact)",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "strOverrideEmail" }),
                      " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("a", {
                href: "#",
                onClick: async (n) => {
                  n.preventDefault(), n.stopPropagation();
                  const s = [];
                  s.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                    s.push(["388445686", "1", "adils@valvesoftware.com"]),
                    Xe.g.WriteCSVToFile(s, "invite_template.csv");
                },
                children: "Download Template Example",
              }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("br", {}),
              (0, t.jsx)(V.$n, {
                children: (0, t.jsxs)("label", {
                  className: $e().ImportButtonLabel,
                  htmlFor: "import-discount-input",
                  children: [
                    "Choose CSV File",
                    (0, t.jsx)("input", {
                      id: "import-discount-input",
                      type: "file",
                      style: { display: "none" },
                      onChange: async (n) => {
                        if (n.target.files.length >= 1) {
                          const s = n.target.files[0],
                            a = await Xe.g.ParseCSVFile(s);
                          if (a?.data) {
                            const i = new Array();
                            a.data.forEach((d) => {
                              if (d.nAccountID) {
                                const u = {
                                  nAccountID: Number.parseInt(d.nAccountID),
                                };
                                d.nPartnerID &&
                                  (u.nPartnerID = Number.parseInt(
                                    d.nPartnerID,
                                  )),
                                  d.strEmailOverride &&
                                    (u.strEmailOverride = d.strEmailOverride),
                                  i.push(u);
                              }
                            }),
                              e(i);
                          }
                        }
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        async function zt(r, e, n) {
          const s = e.map((g) => g.nAccountID).join(","),
            a = e.map((g) => g.nPartnerID).join(","),
            i = e.map((g) => g.strEmailOverride).join(","),
            d = e
              .map((g) => (g.bAllowRegistrationIfFull ? "1" : "0"))
              .join(",");
          let u = new FormData();
          u.append("sessionid", (0, N.KC)()),
            u.append("gid", r),
            u.append("accounts", s),
            u.append("partnerids", a),
            u.append("emailoverride", i),
            u.append("allowregistrationiffull", d),
            u.append("forceupdate", n ? "1" : "0");
          const h = `${ke.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
          try {
            const g = await Y().post(h, u, { withCredentials: !0 });
            if (g?.data?.success != P.R) {
              let v = (0, rt.H)(g);
              console.error(
                "DisplayPartnerEventRow error: " + v.strErrorMsg,
                v,
              );
            }
            return g?.data;
          } catch (g) {
            let v = (0, rt.H)(g);
            console.error("DisplayPartnerEventRow error: " + v.strErrorMsg, v);
          }
          return null;
        }
        var ht = f(16666),
          gt = f(32),
          Ot = f(54806),
          Bn = f(58632),
          mt = f.n(Bn);
        function Ut(r) {
          const e = ut(),
            n = p.useContext(ft),
            s = (0, te.I)(Wt(n, e, r));
          return s.isLoading ? null : s.data;
        }
        function Nt(r) {
          const e = ut(),
            n = p.useContext(ft);
          return (0, Ot.E)({ queries: r.map((s) => Wt(n, e, s)) });
        }
        function is(r) {
          return ReactQueryClient.getQueryData([
            "MeetSteamAllRegistrationStatus",
            r,
          ]);
        }
        function as(r) {
          const { loadMeetSteamAllRegistration: e, children: n } = r,
            s = React.useMemo(() => ({ loadMeetSteamAllRegistration: e }), [e]);
          return React.createElement(ft.Provider, { value: s }, n);
        }
        const ft = p.createContext({
          loadMeetSteamAllRegistration: async (r, e) => await Sn(r).load(e),
        });
        function Wt(r, e, n) {
          return {
            queryKey: ["MeetSteamAllRegistrationStatus", n],
            queryFn: () => r.loadMeetSteamAllRegistration(e, n),
            enabled: !!n,
          };
        }
        let pt;
        function Sn(r) {
          return (
            pt ||
              (pt = new (mt())(
                async (e) => {
                  const n = ie.w.Init(st.j3);
                  n.Body().set_gids([...e]), n.Body().set_type(st.Dk.rV);
                  const s = await st.Nl.GetMultipleUserActionData(r, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${s.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    s
                      .Body()
                      .entries()
                      .forEach((i) => {
                        try {
                          const d = JSON.parse(i.jsondata());
                          if (!("steamid" in d) || !d.steamid) {
                            d.steamid = i.steamid();
                            const h = new $.b(d.steamid);
                            d.accountid = h.GetAccountID();
                          }
                          const u = i.gid();
                          return (
                            a.has(u) ? a.get(u).push(d) : a.set(u, [d]), [d]
                          );
                        } catch {
                          throw `Failed to parse GetMultipleUserActionData with details: ${i.steamid()}`;
                        }
                      }),
                    e.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              )),
            pt
          );
        }
        var kt = f(40497);
        function Rt(r, e) {
          const n = (0, De.a)(),
            s = p.useContext(xt),
            a = (0, te.I)($t(s, n, r, e));
          return a.isLoading ? null : a.data;
        }
        function Dn(r, e) {
          const n = (0, De.a)(),
            s = p.useContext(xt);
          return (0, Ot.E)({ queries: r.map((a, i) => $t(s, n, a, e[i])) });
        }
        function vt(r, e) {
          return kt.L.getQueryData(["PartnerEmailAndName", r, e]);
        }
        function os(r) {
          const { loadPartnerEmailAndName: e, children: n } = r,
            s = React.useMemo(() => ({ loadPartnerEmailAndName: e }), [e]);
          return React.createElement(xt.Provider, { value: s }, n);
        }
        const xt = p.createContext({
          loadPartnerEmailAndName: async (r, e, n) =>
            await In(r).load({ accountID: e, partnerID: n }),
        });
        function $t(r, e, n, s) {
          return {
            queryKey: ["PartnerEmailAndName", n, s],
            queryFn: () => r.loadPartnerEmailAndName(e, n, s),
            enabled: !!n || !!s,
          };
        }
        let jt;
        function In(r) {
          return (
            jt ||
              (jt = new (mt())(
                async (e) => {
                  const n = ie.w.Init(Q);
                  n.Body().set_accountids(e.map((i) => i.accountID)),
                    n.Body().set_partnerids(e.map((i) => i.partnerID));
                  const s = await M.GetBatchPartnerEmailAndName(r, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${s.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    s
                      .Body()
                      .info()
                      .forEach((i) => {
                        a.set(
                          "" + i.accountid() + "_" + i.partnerid(),
                          i.toObject(),
                        );
                      }),
                    e.map(
                      (i) =>
                        a.get("" + i.accountID + "_" + i.partnerID) ?? null,
                    )
                  );
                },
                { maxBatchSize: 100 },
              )),
            jt
          );
        }
        function Tn(r) {
          const { rgEventGIDs: e } = r,
            [n, s, a] = (0, oe.uD)(),
            [i, d] = (0, p.useState)(null);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: " | " }),
              (0, t.jsx)("a", {
                href: "#",
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                children: "Analyse Top Partner Coverage",
              }),
              (0, t.jsx)(ye.E, {
                active: n,
                children: (0, t.jsx)(ve.tH, {
                  children: (0, t.jsx)(Ae.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, t.jsx)(Vt, {
                            rgEventGIDs: e,
                            fnSelectedEvents: d,
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(En, { rgGidMeetSteamEvents: i }),
                              (0, t.jsx)(V.$n, {
                                onClick: () => d(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        const lt = (0, ht.FB)();
        function Ct(r) {
          return (
            (r = r?.filter(
              (e, n) =>
                n == 0 ||
                !r.slice(0, n).some((s) => s.accountid == e.accountid),
            )),
            r
              ?.map(
                (e) =>
                  e.name ||
                  vt(e.accountid, e.partner_id)?.realname ||
                  e.accountid,
              )
              .join(",") || ""
          );
        }
        function Kt(r) {
          return Ct(r.cell.getValue());
        }
        function An(r, e) {
          const n = Nt(e),
            [s, a, i] = (0, p.useMemo)(() => {
              if (n.filter((y) => !y.isLoading).length != n.length)
                return [null, [], []];
              const u = new Map(),
                h = new Set(r),
                g = new Map();
              n.forEach((y) =>
                y.data.forEach((w) => {
                  if (
                    h.has(w.partner_id) &&
                    (g.has(w.partner_id)
                      ? g.get(w.partner_id).push(w)
                      : g.set(w.partner_id, [w]),
                    !w.name)
                  ) {
                    const z = w.accountid;
                    u.set(`${z}_${w.partner_id}`, {
                      accountID: z,
                      partnerID: w.partner_id,
                    });
                  }
                }),
              );
              const v = Array.from(u.values());
              return [g, v.map((y) => y.accountID), v.map((y) => y.partnerID)];
            }, [n, r]),
            d = Dn(a, i);
          return d.filter((u) => !u.isLoading).length == d.length ? s : null;
        }
        function En(r) {
          const { rgGidMeetSteamEvents: e } = r,
            n = Ln(),
            s = (0, W.vh)(n),
            a = An(n, e),
            i = (0, p.useMemo)(() => {
              if (!s || !a) return null;
              const h = [];
              return (
                n.forEach((g) => {
                  const v = a.get(g);
                  h.push({
                    partner_id: g,
                    partner_name: (0, W.Yd)(g)?.name || "Unknown",
                    invitations:
                      v?.filter(
                        (y) =>
                          y.invited &&
                          !Object.keys(y).some((w) =>
                            w.startsWith("registration_emailed"),
                          ),
                      ) || [],
                    registrations:
                      v?.filter((y) =>
                        Object.keys(y).some((w) =>
                          w.startsWith("registration_emailed"),
                        ),
                      ) || [],
                  });
                }),
                h
              );
            }, [s, a, n]),
            d = (0, p.useMemo)(
              () => [
                lt.accessor("partner_id", { header: "Partner ID", size: 100 }),
                lt.accessor("partner_name", {
                  header: "Partner Name",
                  size: 300,
                }),
                lt.accessor("invitations", {
                  header: "Invitations",
                  cell: Kt,
                  size: 300,
                }),
                lt.accessor("registrations", {
                  header: "Registered to Attend",
                  cell: Kt,
                  size: 300,
                }),
              ],
              [],
            );
          function u() {
            const h = [],
              g = [];
            for (const y of d) g.push(y.header);
            h.push(g);
            for (const y of i) {
              const w = [];
              for (const z of d) {
                const S = y[z.accessorKey];
                w.push(
                  z.accessorKey == "invitations" ||
                    z.accessorKey == "registrations"
                    ? Ct(S)
                    : S.toString(),
                );
              }
              h.push(w);
            }
            Xe.g.WriteCSVToFile(h, "partneranalysis.csv");
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(V.JU, { children: "Partner Analysis" }),
              i
                ? (0, t.jsxs)(ve.tH, {
                    children: [
                      (0, t.jsx)(V.$n, {
                        id: "download-csv",
                        onClick: u,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                      (0, t.jsx)(gt.k, {
                        columns: d,
                        data: i,
                        getRowKey: (h) => h,
                        stickyHeader: !0,
                        nItemHeight: 28,
                        overscan: n.length,
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)(V.$n, {
                        id: "download-csv",
                        onClick: u,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                    ],
                  })
                : (0, t.jsx)(se.t, {
                    string: (0, A.we)("#Loading"),
                    position: "center",
                  }),
            ],
          });
        }
        function Vt(r) {
          const { rgEventGIDs: e, fnSelectedEvents: n } = r,
            [s, a] = (0, p.useState)([]),
            { bShowArchived: i, setShowArchived: d } = Mt(),
            { bIsLoading: u, events: h } = (0, de.PB)(e),
            g = (0, p.useMemo)(() => {
              const v = Math.floor(new Date().getTime() / 1e3);
              return i && h ? [...h] : h?.filter((w) => w.endTime >= v);
            }, [h, i]);
          return u
            ? (0, t.jsx)(se.t, { string: "Loading..." })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(V.Yh, {
                    checked: i,
                    onChange: d,
                    label: "Show Past Events",
                  }),
                  (0, t.jsx)(V.JU, { children: "Choose Events" }),
                  g.map((v) =>
                    (0, t.jsx)(
                      Mn,
                      { gidClanEvent: v.GID, rgSelected: s, fnSetSelected: a },
                      v.GID,
                    ),
                  ),
                  (0, t.jsx)(V.$n, {
                    disabled: s.length == 0,
                    onClick: () => n(s),
                    children: "Continue",
                  }),
                ],
              });
        }
        function Mn(r) {
          const { gidClanEvent: e, rgSelected: n, fnSetSelected: s } = r,
            i = (0, de.RR)(e).GetNameWithFallback(R.Bhc);
          return (0, t.jsx)(V.Yh, {
            label: i,
            checked: n.includes(e),
            onChange: (d) => {
              const u = n.indexOf(e),
                h = u >= 0;
              d && !h
                ? s([...n, e])
                : !d && h && s([...n.slice(0, u), ...n.slice(u + 1)]);
            },
          });
        }
        function Ln() {
          const [r] = (0, p.useState)(() =>
            (0, U.Tc)("partners_to_verify", "application_config"),
          );
          return r;
        }
        var yt = f(16114),
          He = f(20117),
          Fn = f(30603),
          Ht = f.n(Fn);
        function zn(r) {
          const { hideModal: e, gid: n } = r,
            s = Ut(n),
            a = (0, he.jE)(),
            [i, d] = (0, p.useMemo)(
              () =>
                s
                  ? [
                      s.length,
                      s.filter(
                        (u) =>
                          !u.invitation_emailed &&
                          !u.invite_registration_auto_create,
                      ).length,
                    ]
                  : [0, 0],
              [s],
            );
          return (0, t.jsxs)(Ae.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: e,
            strDescription:
              "Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.",
            strTitle: "Invitation And Registration Status",
            children: [
              !s &&
                (0, t.jsx)(se.t, {
                  size: "medium",
                  position: "center",
                  string: (0, A.we)("#Loading"),
                }),
              s &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        "There are ",
                        i,
                        " invitation/registration records.",
                      ],
                    }),
                    d > 0 &&
                      (0, t.jsxs)(V.$n, {
                        onClick: async () => {
                          await Rn(a, n);
                        },
                        children: [
                          d,
                          " invitation emails are queued for this event. Send them all now?",
                        ],
                      }),
                    (0, t.jsxs)("table", {
                      children: [
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", { children: "SteamID" }),
                              (0, t.jsx)("th", { children: "Name" }),
                              (0, t.jsx)("th", { children: "invited" }),
                              (0, t.jsx)("th", { children: "Invite Emailed" }),
                              (0, t.jsx)("th", { children: "Partner" }),
                              (0, t.jsx)("th", { children: "Email Override" }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("tbody", {
                          children: s?.map((u) =>
                            (0, t.jsx)(On, { reg: u }, "regentry_" + u.steamid),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function On(r) {
          const { reg: e } = r,
            [n] = (0, W.UA)(e.partner_id);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: e.steamid }),
              (0, t.jsx)("td", { children: e.name }),
              (0, t.jsx)("td", { children: e.invited ? "YES" : "" }),
              (0, t.jsx)("td", { children: e.invitation_emailed ? "YES" : "" }),
              (0, t.jsxs)("td", {
                children: [n?.name, " (", e.partner_id, ")"],
              }),
              (0, t.jsx)("td", { children: e.email_override }),
            ],
          });
        }
        function Un(r) {
          const { hideModal: e, gid: n, title: s, group: a, session: i } = r,
            d = (0, De.a)(),
            u = Ut(n),
            h = Ke(d, n, a?.group_id),
            [g, v] = (0, p.useMemo)(() => {
              const w = h?.data?.filter((D) => D.session_id == i.id),
                z = new Map(),
                S = new Map();
              return (
                w?.forEach((D) => {
                  const q = new He.b2(D.steamid).GetAccountID();
                  if ((z.set(q, D), D.jsondata)) {
                    const ze = JSON.parse(D.jsondata);
                    ze.pre_event_partner_questions &&
                      S.set(q, ze.pre_event_partner_questions);
                  }
                }),
                [z, S]
              );
            }, [i, h]),
            y = u?.filter((w) => g.has(new He.b2(w.steamid).GetAccountID()));
          return (0, t.jsxs)(Ae.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: e,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
            children: [
              (0, t.jsx)("div", {
                className: Ht().ExportToCSV,
                children: (0, t.jsx)("a", {
                  onClick: () => Nn(a, i, s, y, g, v),
                  children: "Export to CSV",
                }),
              }),
              (0, t.jsxs)("table", {
                className: Ht().Table,
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "SteamID" }),
                        (0, t.jsx)("th", { children: "Name" }),
                        (0, t.jsx)("th", { children: "Invited" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Game" }),
                        (0, t.jsx)("th", { children: "Email Override" }),
                        (0, t.jsxs)("th", {
                          children: [
                            "Guest Count ",
                            (0, t.jsx)(Ze.o, {
                              tooltip:
                                "Additional guests, doesn't include main registrant",
                            }),
                          ],
                        }),
                        (0, t.jsx)("th", {
                          children: "Reg Confirm Email Sent",
                        }),
                        a.ask_registration_question &&
                          (0, t.jsx)("th", { children: "Answer" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: y?.flatMap((w) => {
                      const z = new He.b2(w.steamid).GetAccountID(),
                        S = [
                          (0, t.jsx)(
                            Wn,
                            {
                              group: a,
                              regInfo: g.get(z),
                              inviteInfo: w,
                              preRegQuestions: v.get(z),
                            },
                            "regrow" + w.steamid,
                          ),
                        ];
                      for (let D = 0; D < w.guest_names?.length; D++)
                        S.push(
                          (0, t.jsx)(
                            kn,
                            { guestName: w.guest_names[D] },
                            "regguestrow" + w.steamid + "_" + D,
                          ),
                        );
                      return S;
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Nn(r, e, n, s, a, i) {
          const d = [],
            u = [
              "SteamID",
              "Name",
              "Invited",
              "Partner",
              "Game",
              "Email Override",
              "Guest Count",
              "Reg Confirmation Email Sent",
            ];
          r.ask_registration_question && u.push("Pre Reg Answer"),
            d.push(u),
            s.forEach((g) => {
              const v = [],
                y = g.partner_id ? (0, W.Yd)(g.partner_id) : void 0;
              v.push("" + g.steamid),
                v.push(g.name),
                v.push(g.invited ? "YES" : ""),
                v.push(y ? `${y?.name} (${g.partner_id})` : ""),
                v.push(g.game ? `Game: ${g.game}` : ""),
                v.push(g.email_override),
                v.push(
                  "" + (g.guests_registered ? g.guests_registered - 1 : 0),
                );
              const w = new He.b2(g.steamid);
              if (a.has(w.GetAccountID())) {
                const z = a.get(w.GetAccountID()),
                  S = Yt(z, g);
                if (S) {
                  const D = new Date(S * 1e3)
                    .toISOString()
                    .replace("T", " ")
                    .split(".")[0];
                  v.push(D);
                } else v.push("");
              } else v.push("");
              if (r.ask_registration_question) {
                const z = i
                  .get(w.GetAccountID())
                  ?.find((S) => S.group_id == r.group_id);
                z && v.push(z.question);
              }
              d.push(v);
              for (let z = 0; z < g.guest_names?.length; z++) {
                const S = [];
                S.push("(guest)"), S.push(g.guest_names[z]), d.push(S);
              }
            });
          const h =
            `meetsteam_${n}_${(0, A.TW)(e.rtime_start)}_at_${(0, yt.KC)(e.rtime_start)}.csv`.replace(
              /[ <>:"/\\|?*\x00-\x1F]/g,
              "_",
            );
          Xe.g.WriteCSVToFile(d, h);
        }
        function Yt(r, e) {
          const n = `registration_emailed_${r.group_id}_${r.session_id}`;
          let s = null;
          return n in e && (s = e[n]), s;
        }
        function Wn(r) {
          const { inviteInfo: e, regInfo: n, group: s, preRegQuestions: a } = r,
            [i] = (0, W.UA)(e.partner_id),
            d = Yt(n, e);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: e.steamid }),
              (0, t.jsx)("td", { children: e.name }),
              (0, t.jsx)("td", { children: e.invited ? "YES" : "" }),
              (0, t.jsx)("td", { children: i?.name ?? `(${e.partner_id})` }),
              (0, t.jsx)("td", { children: e.game ? `Game: ${e.game}` : "" }),
              (0, t.jsx)("td", { children: e.email_override }),
              (0, t.jsx)("td", {
                children: n.guests_registered ? n.guests_registered - 1 : 0,
              }),
              (0, t.jsx)("td", { children: d ? (0, A.TW)(d) : "" }),
              s.ask_registration_question &&
                (0, t.jsx)("td", {
                  children:
                    a?.find((u) => u.group_id == s.group_id)?.question || "",
                }),
            ],
          });
        }
        function kn(r) {
          const { guestName: e } = r;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: "(guest)" }),
              (0, t.jsx)("td", { children: e }),
            ],
          });
        }
        async function Rn(r, e) {
          let n = new FormData();
          n.append("sessionid", (0, N.KC)()), n.append("gid", e);
          const s = `${ke.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
          try {
            const a = await Y().post(s, n, { withCredentials: !0 });
            if (a?.data?.success != P.R) {
              let i = (0, rt.H)(a);
              console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
            }
            return (
              r.invalidateQueries({
                queryKey: ["useMeetSteamAllRegistrationStatus", e],
              }),
              a?.data
            );
          } catch (a) {
            let i = (0, rt.H)(a);
            console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
          }
          return null;
        }
        var Qt = f(40299),
          tt = f(55298);
        async function $n(r) {
          const e = { sessionid: (0, U.KC)(), gids: r },
            n = `${Lt.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
            s = await fetch(n, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            });
          if (!s.ok)
            throw new Error(
              `Failed to read registrations for gids ${r.join(",")}`,
            );
          const a = await s.json();
          if (a.success != P.R)
            throw new Error(
              `Failed to read registrations for gids ${r.join(",")}: ${a.msg}`,
            );
          return a.lists ?? [];
        }
        function Cn(r) {
          return (0, te.I)({
            queryKey: [],
            queryFn: async () => await $n(r),
            enabled: r && r.length > 0,
          });
        }
        function cs(r) {
          return ["MeetSteamGetRegistration", ...(r || []).sort()];
        }
        function Kn(r) {
          const { rgEventGIDs: e } = r,
            [n, s, a] = (0, oe.uD)(),
            [i, d] = (0, p.useState)(null);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: " | " }),
              (0, t.jsx)("a", {
                href: "#",
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                children: "Show Registration Across Events",
              }),
              (0, t.jsx)(ye.E, {
                active: n,
                children: (0, t.jsx)(ve.tH, {
                  children: (0, t.jsx)(Ae.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, t.jsx)(Vt, {
                            rgEventGIDs: e,
                            fnSelectedEvents: d,
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Hn, { rgGidMeetSteamEvents: i }),
                              (0, t.jsx)(V.$n, {
                                onClick: () => d(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        function Vn(r) {
          const e = Nt(r),
            n = (0, tt.qh)(),
            { bIsLoading: s, events: a } = (0, de.PB)(r),
            { data: i } = Cn(r),
            [d, u, h] = (0, p.useMemo)(() => {
              if (
                s ||
                !i ||
                i.length == 0 ||
                e.filter((S) => !S.isLoading).length != e.length
              )
                return [null, null, null];
              const v = new Array(),
                y = new Set(),
                w = new Map();
              e.forEach((S) => {
                S.data.forEach((D) => {
                  D.guests_registered > 0 &&
                    (v.push(D), D.partner_id && y.add(D.partner_id));
                });
              });
              const z = new Map();
              return (
                a.forEach((S) => {
                  S.jsondata.meet_steam_groups?.forEach((D) => {
                    D.sessions?.forEach((q) => {
                      z.set(
                        `${S.GID}_${D.group_id}_${q.id}`,
                        `${D.localized_session_title[R.Bhc]}@${(0, yt.TW)(q.rtime_start)} ${(0, yt.KC)(q.rtime_start)}`,
                      );
                    });
                  });
                }),
                i.forEach((S) => {
                  S.rgRegistrations.forEach((D) => {
                    const ze = new $.b(D.steamid).GetAccountID(),
                      Qe =
                        z.get(`${S.gid}_${D.group_id}_${D.session_id}`) ||
                        `${D.group_id}:${D.session_id}`;
                    w.has(ze) ? w.set(ze, w.get(ze) + `,${Qe}`) : w.set(ze, Qe);
                  });
                }),
                [Array.from(y), v, w]
              );
            }, [e, s, i, a]);
          return (0, ne.fI)(d)
            ? {
                rgAllRegistrations: u,
                rgPartnerIDs: d,
                rgValveAccounts: n,
                rgMapAccountToSessionTimes: h,
              }
            : {
                rgAllRegistrations: void 0,
                rgPartnerIDs: void 0,
                rgValveAccounts: void 0,
                rgMapAccountToSessionTimes: void 0,
              };
        }
        const Ce = (0, ht.FB)();
        function Hn(r) {
          const { rgGidMeetSteamEvents: e } = r,
            {
              rgAllRegistrations: n,
              rgPartnerIDs: s,
              rgValveAccounts: a,
              rgMapAccountToSessionTimes: i,
            } = Vn(e),
            d = (0, W.vh)(s),
            u = (0, p.useMemo)(() => {
              if (!d || !n || !a || !i) return null;
              const g = new Map();
              a.forEach((y) => g.set(y.id, y));
              const v = [];
              return (
                n.forEach((y) => {
                  const w = (0, W.Yd)(y.partner_id),
                    z = (0, ne.Gl)(y.partner_id);
                  v.push({
                    partner_id: y.partner_id ? "" + y.partner_id : "",
                    partner_name: w?.name || "Unknown",
                    name: y.name,
                    game: y.game || "",
                    accountid: y.accountid,
                    email: y.email_override,
                    guest_registrated: y.guests_registered - 1,
                    guest_names:
                      y.guest_names?.length > 0 ? y.guest_names.join(",") : "",
                    business_contact:
                      z && z.length > 0
                        ? z
                            .filter((S) => S.is_business_contact)
                            .map((S) => {
                              const D = new $.b(S.steamid);
                              return (
                                g.get(D.GetAccountID())?.displayName ||
                                S.steamid
                              );
                            })
                            .join(",")
                        : "",
                    sessions: i.get(y.accountid) || "missing data",
                  });
                }),
                v
              );
            }, [d, n, a, i]),
            h = Jt();
          return !d || !s || !u
            ? (0, t.jsx)(se.t, { string: (0, A.we)("#Loading") })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(V.JU, { children: "Registations" }),
                  u
                    ? (0, t.jsxs)(ve.tH, {
                        children: [
                          (0, t.jsx)(Pt, { rgData: u }),
                          (0, t.jsx)(gt.k, {
                            columns: h,
                            data: u,
                            getRowKey: (g) => g,
                            stickyHeader: !0,
                            nItemHeight: 28,
                            overscan: s.length,
                          }),
                          (0, t.jsx)("br", {}),
                          (0, t.jsx)(Pt, { rgData: u }),
                        ],
                      })
                    : (0, t.jsx)(se.t, {
                        string: (0, A.we)("#Loading"),
                        position: "center",
                      }),
                ],
              });
        }
        function Jt() {
          return (0, p.useMemo)(
            () => [
              Ce.accessor("name", { header: "Name", size: 200 }),
              Ce.accessor("accountid", { header: "Account ID", size: 150 }),
              Ce.accessor("email", { header: "Email", size: 150 }),
              Ce.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              Ce.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              Ce.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ce.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Ce.accessor("game", { header: "Game Name", size: 150 }),
              Ce.accessor("business_contact", {
                header: "Business Contact",
                size: 150,
              }),
              Ce.accessor("sessions", { header: "Sessions", size: 150 }),
            ],
            [],
          );
        }
        function Pt(r) {
          const { rgData: e } = r,
            n = Jt();
          return (0, t.jsx)(V.$n, {
            id: "download-csv",
            onClick: () =>
              (0, Qt.K)(
                "registrationdump.csv",
                e,
                n.map((s) => ({
                  accessorKey: s.accessorKey,
                  header:
                    typeof s.header == "string"
                      ? s.header
                      : (s.accessorKey ?? ""),
                })),
              ),
            style: { width: "120px" },
            children: "Download CSV",
          });
        }
        const Zt = p.createContext(void 0);
        function Yn(r) {
          const { children: e } = r,
            [n, s] = At("search", ""),
            [a, i] = (0, p.useState)(() => n || ""),
            d = (0, p.useCallback)(
              (h) => {
                i(h), s(h || void 0, !0);
              },
              [s],
            ),
            u = (0, p.useMemo)(() => ({ strSearch: a, setSearch: d }), [a, d]);
          return (0, t.jsx)(Zt.Provider, { value: u, children: e });
        }
        const Xt = () => {
          const r = (0, p.useContext)(Zt);
          if (!r)
            throw new Error(
              "useMeetSteamSearch must be used within MeetSteamSearchProvider",
            );
          return r;
        };
        function Qn(r, e) {
          const n = e?.trim().toLowerCase();
          return n ? !!r && r.toLowerCase().includes(n) : !0;
        }
        function Jn(r, e) {
          const n = e?.trim().toLowerCase();
          if (!r || !n) return [{ strText: r || "", bMatch: !1 }];
          const s = new Array(),
            a = r.toLowerCase();
          let i = 0;
          for (let d = a.indexOf(n); d >= 0; d = a.indexOf(n, i))
            d > i && s.push({ strText: r.slice(i, d), bMatch: !1 }),
              s.push({ strText: r.slice(d, d + n.length), bMatch: !0 }),
              (i = d + n.length);
          return i < r.length && s.push({ strText: r.slice(i), bMatch: !1 }), s;
        }
        function wt(r) {
          const { text: e } = r,
            { strSearch: n } = Xt(),
            s = (0, p.useMemo)(() => Jn(e, n), [e, n]);
          return (0, t.jsx)(t.Fragment, {
            children: s.map((a, i) =>
              a.bMatch
                ? (0, t.jsx)(
                    "span",
                    { className: Ee().SearchMatch, children: a.strText },
                    i,
                  )
                : (0, t.jsx)(p.Fragment, { children: a.strText }, i),
            ),
          });
        }
        function Pn(r) {
          const e = $.b.InitFromClanID((0, Pe.H)()),
            n = ir(),
            { bShowArchived: s, setShowArchived: a } = Mt(),
            { strSearch: i, setSearch: d } = Xt(),
            { bIsLoading: u, events: h } = (0, de.PB)(n),
            {
              rgEventsByMonth: g,
              cEvents: v,
              cMatchingEvents: y,
            } = p.useMemo(() => {
              if (!h)
                return {
                  rgEventsByMonth: null,
                  cEvents: 0,
                  cMatchingEvents: 0,
                };
              const w =
                  s && h
                    ? [...h]
                    : h?.filter((D) => D.endTime >= new Date().getTime() / 1e3),
                z = w.filter((D) => Zn(D, i)),
                S = Array.from(
                  (0, It.bv)(z, (D) => (0, It.J2)(new Date(D.startTime * 1e3))),
                );
              return (
                S?.sort((D) => -D[0]),
                {
                  rgEventsByMonth: S,
                  cEvents: w.length,
                  cMatchingEvents: z.length,
                }
              );
            }, [h, s, i]);
          return u
            ? (0, t.jsx)(se.t, {})
            : g
              ? (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("a", {
                          href: `${ke.TS.COMMUNITY_BASE_URL}gid/${e.ConvertTo64BitString()}/partnerevents/`,
                          children: "Open Meet Steam Event Dashboard",
                        }),
                        (0, t.jsx)(Tn, { rgEventGIDs: n }),
                        (0, t.jsx)(Kn, { rgEventGIDs: n }),
                      ],
                    }),
                    (0, t.jsx)(V.Yh, {
                      checked: s,
                      onChange: a,
                      label: "Show Past Events",
                    }),
                    (0, t.jsxs)("div", {
                      className: Ee().SearchLine,
                      children: [
                        (0, t.jsx)(V.pd, {
                          type: "text",
                          placeholder: "Search events",
                          tooltip:
                            "In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience",
                          value: i,
                          onChange: (w) => d(w?.currentTarget?.value || ""),
                        }),
                        !!i.trim() &&
                          (0, t.jsxs)("div", {
                            className: Ee().SearchSummary,
                            children: [
                              "Showing ",
                              y,
                              " of ",
                              v,
                              " events \xA0",
                              (0, t.jsx)("a", {
                                href: "#",
                                onClick: (w) => {
                                  w.preventDefault(), d("");
                                },
                                children: "Clear",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, t.jsx)("hr", {}),
                    g.map((w) =>
                      (0, t.jsx)(
                        Xn,
                        { month: new Date(w[0] * 1e3), events: w[1] },
                        w[0],
                      ),
                    ),
                  ],
                })
              : null;
        }
        function Zn(r, e) {
          if (!e?.trim()) return !0;
          const n = [
            r.GID,
            r.GetNameWithFallback(R.Bhc),
            r.GetDescriptionWithFallback(R.Bhc),
          ];
          return (
            r.jsondata.meet_steam_groups?.forEach((s) => {
              n.push(A.NT.GetWithFallback(s.localized_session_title, R.Bhc)),
                n.push(
                  A.NT.GetWithFallback(s.localized_session_description, R.Bhc),
                ),
                n.push(
                  A.NT.GetWithFallback(s.localized_intended_audience, R.Bhc),
                ),
                n.push(A.NT.GetWithFallback(s.localized_sesssion_faq, R.Bhc));
            }),
            n.some((s) => Qn(s, e))
          );
        }
        function Xn(r) {
          const { month: e, events: n } = r,
            s = p.useMemo(() => [...n].sort((d) => -d.startTime), [n]),
            a = { year: "numeric", month: "long" },
            i = new Intl.DateTimeFormat(navigator.language, a).format(e);
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("div", { className: Ee().MonthTitle, children: i }),
              (0, t.jsx)("div", {
                className: Ee().MonthEvents,
                children: s.map((d) => (0, t.jsx)(Gn, { oEvent: d }, d.GID)),
              }),
            ],
          });
        }
        function Gn(r) {
          const { oEvent: e } = r,
            n = e.GID,
            s = $.b.InitFromClanID((0, Pe.H)()),
            a = (0, Be.my)((0, Pe.H)(), n),
            i = a.isSuccess ? a.data : null,
            d = e.GetNameWithFallback(R.Bhc),
            u = (0, p.useMemo)(() => {
              const h = new Array();
              return (
                e.jsondata.meet_steam_groups?.forEach((g) => {
                  g.sessions.forEach((v, y) => {
                    h.push({ group: g, session: v, firstSession: y == 0 });
                  });
                }),
                h
              );
            }, [e.jsondata.meet_steam_groups]);
          return (0, t.jsxs)("div", {
            className: Ee().EventRow,
            children: [
              (0, t.jsxs)("div", {
                className: Ee().EventMainDetails,
                children: [
                  (0, t.jsxs)("div", {
                    className: Ee().TitleLine,
                    children: [
                      (0, t.jsx)("div", {
                        className: Ee().Title,
                        children: (0, t.jsx)(wt, { text: d }),
                      }),
                      (0, t.jsx)("div", {
                        className: Ee().StartDate,
                        children: (0, A.TW)(e?.startTime),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: Ee().ActionLine,
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("a", {
                          href: `${ke.TS.COMMUNITY_BASE_URL}gid/${s.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                          children: "Edit",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          "\xA0|\xA0",
                          (0, t.jsx)("a", {
                            href: `${ke.TS.STORE_BASE_URL}meetsteam/${n}`,
                            children: "View",
                          }),
                        ],
                      }),
                      !!(
                        e.BIsUnlistedEvent() &&
                        e.jsondata.meet_steam_groups?.length > 0
                      ) &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(nr, { gid: n }),
                            "\xA0|\xA0",
                            (0, t.jsx)("a", {
                              href: `${ke.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${ke.iA.accountid}`,
                              children: "QR Page",
                            }),
                            "\xA0|\xA0",
                            (0, t.jsx)("a", {
                              href: `${ke.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                              children: "Attendance List",
                            }),
                            (0, t.jsx)(qn, { gid: n }),
                            (0, t.jsx)(er, { gid: n }),
                            (0, t.jsx)(_n, { gid: n }),
                            (0, t.jsx)(tr, { gid: n }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                children: (0, t.jsxs)("table", {
                  className: "landingTable",
                  children: [
                    (0, t.jsx)("thead", {
                      children: (0, t.jsxs)("tr", {
                        children: [
                          (0, t.jsx)("th", { children: "Group" }),
                          (0, t.jsx)("th", { children: "Session Start" }),
                          (0, t.jsx)("th", { children: "Session Duration" }),
                          (0, t.jsx)("th", { children: "Seats" }),
                          (0, t.jsx)("th", {
                            style: { width: "50px" },
                            children: "Registered",
                          }),
                          (0, t.jsx)("th", {
                            style: { width: "50px" },
                            children: "Guests",
                          }),
                          (0, t.jsx)("th", {
                            style: { width: "100px" },
                            children: "Details",
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)("tbody", {
                      children: [
                        (0, t.jsxs)("tr", {
                          children: [
                            u.length > 0
                              ? (0, t.jsx)(
                                  Gt,
                                  {
                                    gid: n,
                                    group: u[0].group,
                                    session: u[0].session,
                                    rgAvailability: i,
                                  },
                                  u[0].session.id,
                                )
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)("td", { children: "None" }),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                  ],
                                }),
                            (0, t.jsx)("td", {
                              children:
                                !(
                                  e?.BIsUnlistedEvent() &&
                                  e.jsondata.meet_steam_groups?.length > 0
                                ) &&
                                (0, t.jsx)("div", {
                                  children:
                                    "Invite Disabled. Event need to publish into Unlisted State",
                                }),
                            }),
                          ],
                        }),
                        u
                          .filter((h, g) => g > 0)
                          .map((h) =>
                            (0, t.jsx)(
                              "tr",
                              {
                                children: (0, t.jsx)(Gt, {
                                  group: h.group,
                                  gid: n,
                                  session: h.session,
                                  rgAvailability: i,
                                  firstSession: h.firstSession,
                                }),
                              },
                              h.session.id,
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function qn(r) {
          const { gid: e } = r,
            n = Tt();
          return Array.from(n.keys()).includes(e)
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  "\xA0|\xA0",
                  (0, t.jsx)("a", {
                    href: `${ke.TS.PARTNER_BASE_URL}meetsteam/survey/${e}`,
                    children: "Survey",
                  }),
                ],
              })
            : null;
        }
        function _n(r) {
          const { gid: e } = r,
            [n, s, a] = (0, oe.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsxs)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: [
                  "Invite via CSV",
                  (0, t.jsx)(Ze.o, {
                    tooltip:
                      "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                  }),
                ],
              }),
              (0, t.jsx)(ve.tH, {
                children: (0, t.jsx)(ye.E, {
                  active: n,
                  children: (0, t.jsx)(yn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function er(r) {
          const { gid: e } = r,
            [n, s, a] = (0, oe.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: "Invite",
              }),
              (0, t.jsx)(ve.tH, {
                children: (0, t.jsx)(ye.E, {
                  active: n,
                  children: (0, t.jsx)(vn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function tr(r) {
          const { gid: e } = r,
            [n, s, a] = (0, oe.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: "Show Invites",
              }),
              (0, t.jsx)(ve.tH, {
                children: (0, t.jsx)(ye.E, {
                  active: n,
                  children: (0, t.jsx)(zn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function nr(r) {
          const { gid: e } = r,
            n = (0, De.a)(),
            [s, a] = (0, p.useState)(!1),
            [i, d] = (0, p.useState)(null);
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("a", {
                href: "#",
                onClick: async (u) => {
                  u.preventDefault(), u.stopPropagation(), a(!0);
                  const h = await rr(n, e);
                  d(h);
                },
                children: "Email Self",
              }),
              (0, t.jsx)(ye.E, {
                active: s,
                children: (0, t.jsxs)(Ae.o0, {
                  bAlertDialog: !0,
                  strTitle: "Test Emails",
                  closeModal: () => {
                    a(!1), d(null);
                  },
                  onOK: () => {},
                  children: [
                    (0, t.jsx)("div", {
                      children:
                        "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                    }),
                    i == null &&
                      (0, t.jsx)(se.t, { string: (0, A.we)("#Loading") }),
                    i == P.R &&
                      (0, t.jsx)("div", { children: "Test Emails Sent" }),
                    !!(i && i != P.R) &&
                      (0, t.jsx)("div", {
                        children: "Email Failed to Send. Check console",
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        async function rr(r, e) {
          const n = ie.w.Init(X),
            s = $.b.InitFromClanID((0, Pe.H)());
          n.Body().set_clan_event_gid(e),
            n.Body().set_steamid(s.ConvertTo64BitString());
          const a = await M.TestFireEmails(r, n);
          return console.log("test fire", a), a.GetEResult();
        }
        function sr(r, e) {
          const n = Oe().unix(r),
            s = Oe().unix(r).tz(e),
            a = s.utcOffset() - n.utcOffset(),
            i = new Date((r + a * 60) * 1e3),
            d = new Date(),
            u =
              i.getFullYear() == d.getFullYear()
                ? (0, ct.$w)(i, !1, !1)
                : (0, ct._9)(i, !1, !1),
            h = (0, ct.KC)(r + a * 60);
          return `${u} ${h} ${s.format("z")}`;
        }
        function Gt(r) {
          const {
              gid: e,
              group: n,
              rgAvailability: s,
              session: a,
              firstSession: i = !0,
            } = r,
            d = A.NT.GetWithFallback(n?.localized_session_title, R.Bhc),
            u = A.NT.GetWithFallback(n?.localized_session_description, R.Bhc),
            h = A.NT.GetWithFallback(n?.localized_intended_audience, R.Bhc),
            g = s?.find(
              (Ue) => Ue.group_id == n.group_id && Ue.session_id == a.id,
            ),
            [v, y, w] = (0, oe.uD)(),
            z = (0, De.a)(),
            S = Ke(z, e, n?.group_id);
          let D = Math.min((g?.guest_count / a.max_capacity) * 100, 100),
            q = g?.guest_count > 0 ? `${D}%` : "0%",
            ze = g?.guest_count >= a.max_capacity;
          const Qe = Intl.DateTimeFormat().resolvedOptions().timeZone,
            qe =
              a.location_type === "in_person"
                ? (a.in_person_time_zone ?? Be.hh)
                : Qe;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              i && n
                ? (0, t.jsxs)("td", {
                    children: [
                      (0, t.jsx)(wt, { text: d }),
                      (0, t.jsx)(Ze.o, { tooltip: u }),
                      !!h &&
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)(wt, { text: h }),
                        }),
                    ],
                  })
                : (0, t.jsx)("td", {}),
              (0, t.jsx)("td", {
                children: (0, t.jsx)("span", {
                  children: sr(a.rtime_start, qe),
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, ct.IH)(a.rtime_end - a.rtime_start),
              }),
              (0, t.jsxs)("td", {
                children: [
                  g?.guest_count || 0,
                  " / ",
                  a.max_capacity,
                  (0, t.jsx)("br", {}),
                  (0, t.jsx)("div", {
                    className: Ee().CapacityBarMax,
                    children: (0, t.jsx)("div", {
                      className: (0, et.A)(
                        Ee().CapacityBarCurrent,
                        ze ? Ee().Full : "",
                      ),
                      style: { width: q },
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("td", {
                children:
                  S.isSuccess &&
                  (0, t.jsx)(t.Fragment, {
                    children: S.data?.filter((Ue) => Ue.session_id == a.id)
                      .length,
                  }),
              }),
              (0, t.jsx)("td", {
                children:
                  S.isSuccess &&
                  (0, t.jsx)(t.Fragment, {
                    children: S.data
                      ?.filter((Ue) => Ue.session_id == a.id)
                      .reduce((Ue, Me) => Ue + Me.guests_registered - 1, 0),
                  }),
              }),
              (0, t.jsxs)("td", {
                children: [
                  (0, t.jsx)(V.$n, { onClick: y, children: "Details" }),
                  (0, t.jsx)(ve.tH, {
                    children: (0, t.jsx)(ye.E, {
                      active: v,
                      children: (0, t.jsx)(Un, {
                        gid: e,
                        title: d,
                        group: n,
                        session: a,
                        hideModal: w,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function ir() {
          const [r] = (0, p.useState)(() =>
            (0, U.Tc)("event_gids", "application_config"),
          );
          return r;
        }
        var ar = f(29522),
          or = f(40358),
          Ye = f(62092),
          cr = f(10142),
          lr = f(24237),
          bt = f(12932);
        function dr(r) {
          const { rgEvents: e } = J(),
            n = pr(),
            [s, a] = (0, p.useState)(""),
            i = N.TS.PARTNER_BASE_URL + "meetsteam",
            d = (0, p.useMemo)(() => {
              const u = new Map();
              return (
                n.forEach((h) => {
                  h.results?.attending?.forEach((g) => {
                    u.has(g) ? u.set(g, u.get(g) + 1) : u.set(g, 1);
                  });
                }),
                u
              );
            }, [n]);
          return (0, t.jsxs)("div", {
            className: Ee().EventList,
            children: [
              (0, t.jsx)(V.pd, {
                type: "text",
                value: s,
                onChange: (u) => a(u.currentTarget.value.trim()),
                label: "Filter",
              }),
              (0, t.jsxs)("div", {
                children: [
                  "Total Survey Responses: ",
                  (0, it.D)(n?.length || 0),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  "Link to partner-facing survey: ",
                  (0, t.jsx)("a", { href: i, children: i }),
                ],
              }),
              e
                .filter(
                  (u) =>
                    s.length == 0 || u.name.includes(s) || u.id.includes(s),
                )
                .map((u) =>
                  (0, t.jsx)(
                    ur,
                    {
                      conf: u,
                      nInterestCount: d.get(u.id) ?? 0,
                      rgSurveyInterest: n,
                    },
                    u.id,
                  ),
                ),
              (0, t.jsx)(vr, { rgSurveyInterest: n }),
            ],
          });
        }
        function ur(r) {
          const { conf: e, nInterestCount: n, rgSurveyInterest: s } = r;
          return (0, t.jsx)(bt.qx, {
            title: `${e.name} in ${e.place} around ${e.time}: Interest: ${(0, it.D)(n)}`,
            bStartMinimized: !0,
            children: (0, t.jsx)(hr, { conf: e, rgSurveyInterest: s }),
          });
        }
        function qt(r) {
          if (typeof r == "number") return r;
          const e = r.slice(-1).toUpperCase(),
            n = parseFloat(r.slice(0, -1));
          switch (e) {
            case "K":
              return n * 1e3;
            case "M":
              return n * 1e6;
            case "B":
              return n * 1e9;
            default:
              return parseFloat(r);
          }
        }
        function hr(r) {
          const { conf: e, rgSurveyInterest: n } = r,
            s = (0, p.useMemo)(
              () => n.filter((u) => u.results?.attending?.includes(e.id)),
              [e, n],
            ),
            a = (0, tt.qh)(),
            { bComplete: i, nCount: d } = Je(s);
          return i
            ? a?.length
              ? !s || s.length == 0
                ? (0, t.jsx)("div", { children: "No users with interest" })
                : (0, t.jsx)(gr, { conf: e, rgSurveyInterest: s })
              : (0, t.jsx)(se.t, {
                  position: "center",
                  string:
                    "Loading Valve Account info (this shouldn't take long)",
                })
            : (0, t.jsx)(se.t, {
                position: "center",
                string: `Loading ${d} of ${s.length}`,
              });
        }
        function gr(r) {
          const { conf: e, rgSurveyInterest: n } = r,
            s = (0, he.jE)();
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(V.$n, {
                onClick: () => {
                  const a = [];
                  a.push([
                    "AccountID",
                    "Partner ID",
                    "Valve Partner Contacts",
                    "Email Override",
                    "Account Name",
                    "Name",
                    "Have you met steam",
                    "Survey Time",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Best AppID Name",
                    "Long Term Sales Rank",
                  ]),
                    n.forEach((d) => {
                      const u = [],
                        h = new He.b2(d.steamid);
                      u.push("" + h.GetAccountID());
                      const g = (0, Ye.z0)(h.GetAccountID()),
                        v = d.results.partner_id;
                      u.push("" + v);
                      const y = (0, ne.N6)(v).map(
                        (q) => (0, tt.YA)(s, q)?.displayName || "" + q,
                      );
                      u.push(y.join("|"));
                      const w = d.results.email_override || "";
                      u.push("" + w),
                        u.push(g?.m_strPlayerName ? g.m_strPlayerName : "");
                      const z = vt(h.GetAccountID(), v);
                      if (
                        (u.push(z ? z.realname : ""),
                        u.push(d.results.have_you_met_steam ? "yes" : "no"),
                        d.results.submit_time)
                      ) {
                        const q = d.results.submit_time,
                          ze = new Date(q * 1e3)
                            .toISOString()
                            .replace("T", " ")
                            .split(".")[0];
                        u.push(ze);
                      } else u.push("");
                      u.push("" + d.results.attending?.length),
                        u.push(d.results.country_code),
                        u.push(
                          d.results.preferred_language
                            ? (0, R.LgB)(d.results.preferred_language)
                            : "",
                        );
                      const S = (0, W.Yd)(v);
                      u.push(S ? S.name : "");
                      const D = me(s, v);
                      D
                        ? (u.push("" + qt(D.strGrossUSD)),
                          u.push("" + D.nBestAppID),
                          u.push(cr.A.Get().GetApp(D.nBestAppID)?.GetName()),
                          u.push("" + D.nBestAppLongTermSalesRank))
                        : (u.push(""), u.push(""), u.push(""), u.push("")),
                        a.push(u);
                    });
                  const i =
                    e.name.replace(" ", "_") + "_conference_interest.csv";
                  Xe.g.WriteCSVToFile(a, i);
                },
                children: "Export to CSV",
              }),
              (0, t.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "Name and Email" }),
                        (0, t.jsx)("th", { children: "Have you met steam?" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Valve Contacts" }),
                        (0, t.jsx)("th", { children: "Partner Revenue" }),
                        (0, t.jsx)("th", { children: "Biggest Game" }),
                        (0, t.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, t.jsx)("th", { children: "Attending count?" }),
                        (0, t.jsx)("th", { children: "Alt Language" }),
                        (0, t.jsx)("th", { children: "Country" }),
                        (0, t.jsx)("th", { children: "Submit Survey Time" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: n.map((a) =>
                      (0, t.jsx)(
                        mr,
                        {
                          strsteamid: a.steamid,
                          partnerID: a.results.partner_id,
                          registration: a.results,
                        },
                        e.id + "_" + a.steamid,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function mr(r) {
          const { partnerID: e, registration: n } = r;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: (0, t.jsx)(_t, { ...r }) }),
              (0, t.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
              (0, t.jsx)(en, { nPartnerID: e }),
              (0, t.jsx)("td", { children: n.attending.length }),
              (0, t.jsx)("td", {
                children:
                  n.english_not_good && n.preferred_language
                    ? (0, R.LgB)(n.preferred_language)
                    : "",
              }),
              (0, t.jsx)("td", { children: n.country_code }),
              (0, t.jsx)("td", { children: (0, A.TW)(n.submit_time) }),
            ],
          });
        }
        function _t(r) {
          const { strsteamid: e, partnerID: n, registration: s } = r,
            a = (0, Ye.hW)(e),
            i = new He.b2(e),
            d = Rt(i.GetAccountID(), n),
            u = d?.realname || a.data?.m_strPlayerName;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: u }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("span", { children: s.email_override || d?.email }),
            ],
          });
        }
        function en(r) {
          const { nPartnerID: e } = r,
            [n] = (0, W.UA)(e),
            s = le(e),
            a = (0, ne.Z4)(e),
            i = (0, he.jE)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("td", { children: n ? n?.name + ` (${e})` : e }),
              (0, t.jsx)("td", {
                children: a
                  ?.map((d) => (0, tt.YA)(i, d)?.displayName || "" + d)
                  .join(","),
              }),
              (0, t.jsxs)("td", { children: ["$", s?.strGrossUSD] }),
              (0, t.jsx)("td", {
                children:
                  s?.nBestAppID > 0
                    ? (0, t.jsx)(fr, { appid: s?.nBestAppID })
                    : "N/A",
              }),
              (0, t.jsx)("td", { children: s?.nBestAppLongTermSalesRank }),
            ],
          });
        }
        const ls = {};
        function fr(r) {
          const { appid: e } = r,
            n = (0, ar.$5)(e),
            { data: s } = (0, or.J$)(n);
          return (0, t.jsx)(lr.Q, {
            id: n,
            children: (0, t.jsx)("span", { children: s?.name || e }),
          });
        }
        function pr() {
          const [r] = (0, p.useState)(() =>
            (0, U.Tc)("interest_results", "application_config"),
          );
          return (0, p.useMemo)(
            () => r.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
            [r],
          );
        }
        function vr(r) {
          const { rgSurveyInterest: e } = r,
            n = (0, he.jE)(),
            s = (0, tt.qh)(),
            a = (0, p.useMemo)(
              () => e.filter((i) => i.results?.suggestion?.trim().length > 0),
              [e],
            );
          return (0, t.jsxs)(bt.qx, {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
            children: [
              (0, t.jsx)(V.$n, {
                onClick: () => {
                  const i = [];
                  i.push([
                    "AccountID",
                    "Partner ID",
                    "Email Override",
                    "Account Name",
                    "name",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Long Term Sales Rank",
                    "Suggestion",
                  ]),
                    a.forEach((u) => {
                      const h = [],
                        g = new He.b2(u.steamid);
                      h.push("" + g.GetAccountID());
                      const v = (0, Ye.z0)(g.GetAccountID()),
                        y = u.results.partner_id;
                      h.push("" + y);
                      const w = u.results.email_override || "";
                      h.push("" + w),
                        h.push(v?.m_strPlayerName ? v.m_strPlayerName : "");
                      const z = vt(g.GetAccountID(), y);
                      h.push(z ? z.realname : ""),
                        h.push("" + u.results.attending?.length),
                        h.push(u.results.country_code),
                        h.push(
                          u.results.preferred_language
                            ? (0, R.LgB)(u.results.preferred_language)
                            : "",
                        );
                      const S = (0, W.Yd)(y);
                      h.push(S ? S.name : "");
                      const D = me(n, y);
                      D
                        ? (h.push("" + qt(D.strGrossUSD)),
                          h.push("" + D.nBestAppID),
                          h.push("" + D.nBestAppLongTermSalesRank))
                        : (h.push(""), h.push(""), h.push("")),
                        h.push(u.results.suggestion),
                        i.push(h);
                    }),
                    Xe.g.WriteCSVToFile(i, "suggestsion.csv");
                },
                children:
                  "Export to CSV (wait until the table populates fully)",
              }),
              (0, t.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "Name and Email" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Valve Contacts" }),
                        (0, t.jsx)("th", { children: "Partner Revenue" }),
                        (0, t.jsx)("th", { children: "Biggest Game" }),
                        (0, t.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, t.jsx)("th", { children: "Suggestions" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: a.map((i) =>
                      (0, t.jsx)(xr, { survey: i }, "suggested" + i.steamid),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function xr(r) {
          const { survey: e } = r,
            n = new He.b2(e.steamid);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", {
                children: (0, t.jsx)(_t, {
                  strsteamid: e.steamid,
                  partnerID: e.results.partner_id,
                  registration: e.results,
                }),
              }),
              (0, t.jsx)(en, { nPartnerID: e.results.partner_id }),
              (0, t.jsx)("td", { children: e.results.suggestion.trim() }),
            ],
          });
        }
        function jr(r) {
          const e = p.useContext(Bt);
          return (0, te.I)(tn(e, r));
        }
        function ds(r) {
          const e = React.useContext(Bt);
          return useQueries({ queries: r.map((n) => tn(e, n)) });
        }
        function yr(r) {
          return kt.L.getQueryData(["UserEmailAndLangs", r]);
        }
        function us(r) {
          const { loadUserEmailAndLangs: e, children: n } = r,
            s = React.useMemo(() => ({ loadUserEmailAndLangs: e }), [e]);
          return React.createElement(Bt.Provider, { value: s }, n);
        }
        const Bt = p.createContext({
          loadUserEmailAndLangs: async (r) => await wr().load(r),
        });
        function tn(r, e) {
          return {
            queryKey: ["UserEmailAndLangs", e],
            queryFn: () => r.loadUserEmailAndLangs(e),
            enabled: !!e,
          };
        }
        let St;
        function wr() {
          return (
            St ||
              (St = new (mt())(
                async (r) => {
                  const e = `${N.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = { sessionid: (0, N.KC)(), strAccountIDs: r.join(",") },
                    s = await Y().get(e, { params: n, withCredentials: !0 });
                  if (!s || s?.status != 200 || s?.data?.success != P.R)
                    throw `Failed to load app to user email and langs: ${((0, rt.H))(s).strErrorMsg}`;
                  const a = new Map();
                  return (
                    s.data.users.forEach((i) => {
                      const d = new $.b(i.steamid);
                      a.set(d.GetAccountID(), i);
                    }),
                    r.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              )),
            St
          );
        }
        var br = f(54963),
          Br = f(84346);
        function Sr(r) {
          const e = (0, De.a)(),
            n = (0, tt.qh)(),
            s = We(e),
            a = (0, p.useMemo)(() => {
              if (!s || !n) return null;
              const i = new Set(n.map((d) => d.id));
              return s
                .filter((d) => !i.has(d.accountid))
                .sort(
                  (d, u) =>
                    u.clan_event_gids?.length - d.clan_event_gids.length,
                );
            }, [s, n]);
          return a
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)(V.$n, {
                    onClick: () => {
                      const i = [];
                      i.push([
                        "User Name",
                        "account id",
                        "Email",
                        "Event Count",
                      ]),
                        a.forEach((u) => {
                          const h = (0, Ye.z0)(u.accountid),
                            g = yr(u.accountid);
                          i.push([
                            h?.m_strPlayerName || "",
                            "" + u.accountid,
                            g?.email_address || "",
                            u.clan_event_gids?.length.toLocaleString(
                              (0, Br.J)(),
                            ),
                          ]);
                        }),
                        Xe.g.WriteCSVToFile(i, "sale_operators.csv");
                    },
                    children: [
                      "CSV Export",
                      (0, t.jsx)(Ze.o, {
                        tooltip:
                          "Wait until the page finishes loading before export",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("table", {
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", { children: "User" }),
                            (0, t.jsx)("th", { children: "Email" }),
                            (0, t.jsx)("th", { children: "Events" }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("tbody", {
                        children: a.map((i) =>
                          (0, t.jsx)(Dr, { organizer: i }, i.accountid),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, t.jsx)(se.t, {
                string: (0, A.we)("#Loading"),
                size: "medium",
              });
        }
        function Dr(r) {
          const { organizer: e } = r,
            n = (0, p.useMemo)(
              () => $.b.InitFromAccountID(e.accountid).ConvertTo64BitString(),
              [e],
            ),
            s = (0, Ye.hW)(n),
            a = jr(e.accountid),
            i = s.data?.m_strPlayerName || "";
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsxs)("td", { children: [i, " (", e.accountid, ")"] }),
              (0, t.jsx)("td", { children: a?.data?.email_address }),
              (0, t.jsx)("td", {
                children: (0, t.jsx)(Ir, {
                  name: i,
                  rgClanEventGIDs: e.clan_event_gids,
                }),
              }),
            ],
          });
        }
        function Ir(r) {
          const { name: e, rgClanEventGIDs: n } = r,
            [s, a, i] = (0, br.uD)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(V.$n, {
                onClick: a,
                children: ["See ", (0, it.D)(n.length), " Events"],
              }),
              (0, t.jsx)(ye.E, {
                active: s,
                children: (0, t.jsx)(Ae.o0, {
                  bAlertDialog: !0,
                  closeModal: i,
                  strTitle: `${e}'s Events`,
                  children: n.map((d) => (0, t.jsx)(Tr, { gid: d }, d)),
                }),
              }),
            ],
          });
        }
        function Tr(r) {
          const { gid: e } = r,
            n = (0, de.RR)(e);
          return n
            ? (0, t.jsxs)("a", {
                href: `${ke.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${e}`,
                target: "_blank",
                children: [
                  (0, t.jsx)("div", { children: n.GetNameWithFallback(R.Bhc) }),
                  (0, t.jsx)("img", { src: n.GetImageURL("capsule", R.Bhc) }),
                ],
              })
            : (0, t.jsxs)("div", { children: ["Loading ", e] });
        }
        function Ar(r) {
          const e = (s) =>
              window.sessionStorage.setItem("meetsteamadmin", `?tab=${s.key}`),
            n = [
              {
                name: "Interest Survey Results",
                key: "survey",
                contents: (0, t.jsx)(ve.tH, { children: (0, t.jsx)(dr, {}) }),
                onClick: e,
              },
              {
                name: "Event Management",
                key: "event",
                contents: (0, t.jsx)(ve.tH, { children: (0, t.jsx)(Pn, {}) }),
                onClick: e,
              },
              {
                name: "Sale Operators",
                key: "saleops",
                contents: (0, t.jsx)(ve.tH, { children: (0, t.jsx)(Sr, {}) }),
                onClick: e,
              },
              {
                name: "Post Event Surveys",
                key: "postsurvey",
                contents: (0, t.jsx)(ve.tH, { children: (0, t.jsx)(on, {}) }),
                onClick: e,
              },
            ];
          return (0, t.jsx)(ln, {
            children: (0, t.jsx)(Yn, {
              children: (0, t.jsxs)("div", {
                className: B().AdminPageCtn,
                children: [
                  (0, t.jsxs)("div", {
                    className: B().PageTitle,
                    children: [
                      "Meet Steam Admin Dashboard ",
                      (0, U.Fd)("current_year", "application_config"),
                    ],
                  }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)(ge.V, { tabs: n }),
                  (0, t.jsx)("div", { className: ue().ClearThings }),
                  (0, t.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var Er = f(65946),
          Mr = f(19324),
          Lr = f(24806),
          nn = f(56330),
          Fr = f(85761),
          Ve = f.n(Fr);
        function zr(r) {
          const e = kr(),
            n = Rr(),
            { data: s } = (0, Ye.js)(N.iA.accountid),
            [a, i] = (0, p.useState)(!1),
            [d, u] = (0, p.useState)(!1),
            [h, g] = (0, p.useState)(!1),
            [v, y] = (0, p.useState)(() => JSON.parse(JSON.stringify(n)));
          return e
            ? !s || s.m_bPlayerNamePending
              ? (0, t.jsx)(se.t, {
                  size: "medium",
                  position: "center",
                  string: (0, A.we)("#Loading"),
                })
              : (0, t.jsxs)("div", {
                  className: (0, et.A)(B().AdminPageCtn, Ve().Ctn),
                  children: [
                    (0, t.jsx)("div", {
                      className: B().PageTitle,
                      children: (0, A.we)("#MeetSteam_MainTitle"),
                    }),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("div", {
                      className: B().ColumnCtn,
                      children: (0, t.jsxs)("div", {
                        className: B().LeftCol,
                        children: [
                          (0, t.jsxs)("div", {
                            className: B().SectionCtn,
                            children: [
                              (0, t.jsxs)("h1", {
                                children: [
                                  " ",
                                  (0, A.PP)(
                                    "#MeetSteam_Intro",
                                    s.m_strPlayerName,
                                    (0, t.jsx)("br", {}),
                                  ),
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: B().IntroText,
                                children: (0, A.we)("#MeetSteam_Desc1"),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: B().SectionCtn,
                            children: (0, t.jsx)(Nr, {
                              oRegistration: v,
                              fnSetRegistration: y,
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: B().SectionCtn,
                            children: (0, t.jsx)(Or, {
                              oRegistration: v,
                              fnSetRegistration: y,
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: (0, et.A)(B().SectionCtn, B().ActionBar),
                            children: [
                              (0, t.jsx)(V.jn, {
                                onClick: async () => {
                                  u(!0), i(!1), g(!1);
                                  const w = `${N.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                    z = new FormData();
                                  z.append("sessionid", (0, N.KC)()),
                                    z.append(
                                      "registrationJson",
                                      JSON.stringify(v),
                                    );
                                  try {
                                    const S = await Y().post(w, z, {
                                      withCredentials: !0,
                                    });
                                    S.data.success != P.R
                                      ? (console.error(
                                          "MeetSteamLanding failed " +
                                            S.data.success,
                                        ),
                                        i(!0))
                                      : g(!0);
                                  } catch (S) {
                                    console.error(
                                      "MeetSteamLanding failed caught",
                                      S,
                                    );
                                  }
                                  u(!1);
                                },
                                children: (0, A.we)("#Button_Submit"),
                              }),
                              d &&
                                (0, t.jsx)(se.t, {
                                  size: "medium",
                                  position: "center",
                                  string: (0, A.we)("#Saving"),
                                }),
                              h &&
                                (0, t.jsx)("div", {
                                  children: (0, A.we)("#Button_Saved"),
                                }),
                              a &&
                                (0, t.jsx)("div", {
                                  className: nn.ErrorStylesWithIcon,
                                  children: (0, A.we)(
                                    "#Error_ErrorCommunicatingWithNetwork",
                                  ),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
            : (0, t.jsx)("div", {
                className: Ve().Ctn,
                children: (0, A.we)("#MeetSteam_closed"),
              });
        }
        function Or(r) {
          const { oRegistration: e, fnSetRegistration: n } = r,
            { rgEvents: s, rgOldEvents: a, selectConference: i } = J();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("h1", {
                children: (0, A.we)("#MeetSteam_Events_Interest"),
              }),
              (0, t.jsx)("p", {
                children: (0, A.PP)(
                  "#MeetSteam_Events_title",
                  (0, N.Tc)("meet_steam_year", "application_config") || "2025",
                ),
              }),
              (0, t.jsxs)("p", {
                children: [
                  (0, t.jsx)("span", {
                    className: Ve().Indicator,
                    children: "*",
                  }),
                  " ",
                  (0, A.PP)("#MeetSteam_Events_desc"),
                ],
              }),
              !!i &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("p", {
                      children: (0, A.we)("#MeetSteam_ConferenceOrg"),
                    }),
                    (0, t.jsx)(Dt, { ...r, rgConference: [i] }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("h2", {
                      children: (0, A.we)("#MeetSteam_OtherConference"),
                    }),
                  ],
                }),
              (0, t.jsx)(Dt, { ...r, rgConference: s }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)(V.pd, {
                type: "text",
                value: e.suggestion || "",
                onChange: (d) => n({ ...e, suggestion: d.currentTarget.value }),
                label: (0, A.we)("#MeetSteam_others"),
              }),
              a?.length > 0 &&
                (0, t.jsx)(bt.qx, {
                  bStartMinimized: !0,
                  title: (0, A.we)("#MeetSteam_PastEvents", a.length),
                  children: (0, t.jsx)(Dt, { ...r, rgConference: a }),
                }),
            ],
          });
        }
        function Dt(r) {
          const { rgConference: e } = r;
          return (0, t.jsxs)("table", {
            children: [
              (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                  children: [
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                  ],
                }),
              }),
              (0, t.jsx)("tbody", {
                children: e.map((n) =>
                  (0, t.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, t.jsx)("td", {
                          children: n.attending
                            ? (0, t.jsx)("span", {
                                className: Ve().Indicator,
                                children: "*",
                              })
                            : "",
                        }),
                        (0, t.jsxs)("td", {
                          children: [
                            (0, t.jsx)("div", { children: n.name }),
                            (0, t.jsx)("div", { children: n.place }),
                          ],
                        }),
                        (0, t.jsx)("td", {
                          children: (0, t.jsx)("div", { children: n.time }),
                        }),
                        (0, t.jsx)("td", {
                          children: (0, t.jsx)(Ur, { ...r, conf: n }),
                        }),
                      ],
                    },
                    n.id,
                  ),
                ),
              }),
            ],
          });
        }
        function Ur(r) {
          const { oRegistration: e, fnSetRegistration: n, conf: s } = r;
          return (0, t.jsx)(V.Yh, {
            checked: e.attending?.includes(s.id),
            onChange: (a) => {
              let i = e.attending ? [...e.attending] : [];
              a && !i.includes(s.id)
                ? (i.push(s.id), n({ ...e, attending: i }))
                : !a &&
                  i.includes(s.id) &&
                  (i.splice(i.indexOf(s.id), 1), n({ ...e, attending: i }));
            },
            tooltip: (0, A.we)("#MeetSteam_attend_ttip"),
          });
        }
        function Nr(r) {
          const { oRegistration: e, fnSetRegistration: n } = r,
            s = (0, Ye.js)(N.iA.accountid),
            a = Kr(e?.partner_id),
            [i, d] = (0, p.useState)(
              () => !!((e.email_override && e.email_override != a) || !a),
            ),
            [u, h, g] = (0, Er.q3)(() => [
              !e.have_you_met_steam,
              !!e.english_not_good,
              e.preferred_language,
            ]);
          return s.data
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h1", { children: (0, A.we)("#MeetSteam_You") }),
                  (0, t.jsx)("p", {
                    children: (0, A.we)("#MeetSteam_You_Desc"),
                  }),
                  (0, t.jsx)(Wr, {
                    nPartnerID: e.partner_id,
                    label: (0, A.we)("#MeetSteam_You_Company"),
                    setPartnerID: (v) => n({ ...e, partner_id: v }),
                  }),
                  (0, t.jsxs)("div", {
                    className: Ve().EmailInfoRow,
                    children: [
                      (0, t.jsx)("div", {
                        className: Ve().EmailField,
                        children: (0, t.jsx)(V.pd, {
                          type: "string",
                          label: (0, A.we)("#MeetSteam_You_Email"),
                          disabled: !i,
                          value: e.email_override || a || "",
                          placeholder: (0, A.we)("#MeetSteam_You_EmailMissing"),
                          mustBeEmail: !0,
                          onChange: (v) =>
                            n({ ...e, email_override: v.currentTarget.value }),
                        }),
                      }),
                      !i &&
                        (0, t.jsx)(V.Yh, {
                          checked: i,
                          onChange: d,
                          label: (0, A.we)("#MeetSteam_You_Update"),
                          tooltip: (0, A.we)("#MeetSteam_You_Update_ttip"),
                        }),
                    ],
                  }),
                  (0, t.jsx)(V.JU, {
                    children: (0, A.we)("#MeetSteam_NeverMet"),
                  }),
                  (0, t.jsx)(V.Yh, {
                    label: (0, A.we)("#MeetSteam_NeverMetNo"),
                    checked: u,
                    onChange: (v) => n({ ...e, have_you_met_steam: !v }),
                  }),
                  (0, t.jsx)(V.JU, {
                    children: (0, A.we)("#MeetSteam_CapabableEnglish"),
                  }),
                  (0, t.jsxs)("div", {
                    className: Ve().RadioButtonCtn,
                    children: [
                      (0, t.jsx)(V.Od, {
                        className: Ve().RadioButtons,
                        checked: !h,
                        onChange: (v) =>
                          v &&
                          n({
                            ...e,
                            english_not_good: void 0,
                            preferred_language: void 0,
                          }),
                        label: (0, A.we)("#MeetSteam_CapabableEnglish_Yes"),
                      }),
                      (0, t.jsx)(V.Od, {
                        className: Ve().RadioButtons,
                        checked: h,
                        onChange: (v) =>
                          v &&
                          n({
                            ...e,
                            english_not_good: !0,
                            preferred_language: (0, R.sfN)(N.TS.LANGUAGE),
                          }),
                        label: (0, A.we)("#MeetSteam_CapabableEnglish_No"),
                      }),
                    ],
                  }),
                  h &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)(V.JU, {
                          children: (0, A.we)("#MeetSteam_LanguagePref"),
                        }),
                        (0, t.jsx)(Lr.Ng, {
                          selectedLang: g,
                          bAllowUnsetOption: !1,
                          strTooltip: (0, A.we)("#MeetSteam_LanguagePref_ttip"),
                          fnOnLanguageChanged: (v) =>
                            n({ ...e, preferred_language: v }),
                        }),
                      ],
                    }),
                ],
              })
            : (0, t.jsx)(se.t, {
                size: "medium",
                position: "center",
                string: (0, A.we)("#Loading"),
              });
        }
        function Wr(r) {
          const { nPartnerID: e, setPartnerID: n, label: s } = r,
            a = (0, Mr.c)(N.iA.accountid);
          if (!a)
            return (0, t.jsx)(se.t, {
              size: "small",
              position: "center",
              string: (0, A.we)("#Loading"),
            });
          if (a.length == 1) return null;
          const i = [];
          return (
            a.forEach((d) =>
              i.push({ label: d?.partner_name, data: d.partnerid }),
            ),
            (0, t.jsx)(V.m, {
              layout: "inline",
              label: s,
              rgOptions: i,
              selectedOption: e,
              onChange: (d) => {
                n(d.data);
              },
            })
          );
        }
        function kr() {
          const [r] = (0, p.useState)(() =>
            (0, N.Tc)("registration_open", "application_config"),
          );
          return r;
        }
        function Rr() {
          const [r] = (0, p.useState)(
            () => (0, N.Tc)("user_reg", "application_config") || {},
          );
          return r;
        }
        function $r() {
          const [r] = (0, p.useState)(
            () => (0, N.Tc)("partner_user_email", "application_config") || "",
          );
          return r;
        }
        function Cr() {
          const [r] = (0, p.useState)(() =>
            (0, N.Tc)("primary_partner_id", "application_config"),
          );
          return r;
        }
        function Kr(r) {
          const e = $r(),
            n = Cr(),
            s = Rt(N.iA.accountid, r != n ? r : null);
          return r == n ? e : s?.email;
        }
        var Vr = f(65804),
          Hr = f(13038),
          Yr = f.n(Hr);
        function Qr(r) {
          const { data: e } = (0, Ye.js)(N.iA.accountid),
            n = Jr(),
            s = Pr(),
            [a, i] = (0, p.useState)(() => s || ""),
            { surveyGID: d } = (0, ee.g)(),
            [u, h] = (0, p.useState)(!1),
            [g, v] = (0, p.useState)(!1),
            [y, w] = (0, p.useState)(!1);
          return !e || e.m_bPlayerNamePending
            ? (0, t.jsx)(se.t, {
                size: "medium",
                position: "center",
                string: (0, A.we)("#Loading"),
              })
            : (0, t.jsxs)("div", {
                className: (0, et.A)(B().AdminPageCtn, Yr().Ctn),
                children: [
                  (0, t.jsx)("div", {
                    className: B().PageTitle,
                    children: (0, A.we)("#MeetSteam_PostSurvey_Title", n),
                  }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)("div", {
                    className: B().ColumnCtn,
                    children: (0, t.jsxs)("div", {
                      className: B().LeftCol,
                      children: [
                        (0, t.jsxs)("div", {
                          className: B().SectionCtn,
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, A.we)(
                                "#MeetSteam_PostSurvey_Question",
                              ),
                            }),
                            (0, t.jsx)("textarea", {
                              rows: 10,
                              onChange: (z) => i(z.currentTarget.value),
                              value: a,
                              autoFocus: !0,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: (0, et.A)(B().SectionCtn, B().ActionBar),
                          children: [
                            (0, t.jsx)(V.jn, {
                              onClick: async () => {
                                v(!0), h(!1), w(!1);
                                const z = `${N.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${d}`,
                                  S = new FormData();
                                S.append("gid", d),
                                  S.append("sessionid", (0, N.KC)());
                                let D = {
                                  gid: d,
                                  simple_response: a,
                                  submit_time: Math.floor(
                                    new Date().getTime() / 1e3,
                                  ),
                                };
                                S.append("surveyjson", JSON.stringify(D));
                                try {
                                  const q = await Y().post(z, S, {
                                    withCredentials: !0,
                                  });
                                  q.data.success != P.R
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          q.data.success,
                                      ),
                                      h(!0))
                                    : w(!0);
                                } catch (q) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    q,
                                  );
                                }
                                v(!1);
                              },
                              children: (0, A.we)("#Button_Submit"),
                            }),
                            g &&
                              (0, t.jsx)(se.t, {
                                size: "medium",
                                position: "center",
                                string: (0, A.we)("#Saving"),
                              }),
                            y &&
                              (0, t.jsx)("div", {
                                children: (0, A.we)("#Button_Saved"),
                              }),
                            u &&
                              (0, t.jsx)("div", {
                                className: nn.ErrorStylesWithIcon,
                                children: (0, A.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
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
        function Jr() {
          const [r] = (0, p.useState)(
            () => (0, N.Tc)("survey_event_name", "application_config") || "",
          );
          return r;
        }
        function Pr() {
          const [r] = (0, p.useState)(
            () => (0, N.Tc)("survey_data", "application_config") || "",
          );
          return r;
        }
        var rn = f(65532);
        function Zr(r) {
          const e = es(),
            n = ts(),
            s = qr(),
            { surveyGID: a } = (0, ee.g)(),
            { bIsLoading: i, events: d } = (0, de.PB)(e),
            [u, h] = (0, p.useMemo)(
              () => [
                n
                  .map((y) => {
                    const w = new $.b(y.steamid);
                    if (s.has(w.GetAccountID())) {
                      const z = s.get(w.GetAccountID());
                      return JSON.parse(z[0].jsondata).partner_id;
                    }
                    return null;
                  })
                  .filter(Boolean),
                n.map((y) => new $.b(y.steamid).GetAccountID()),
              ],
              [s, n],
            ),
            g = (0, W.vh)(u),
            v = (0, dt.B3)(h);
          return i || !g || !v
            ? (0, t.jsx)(se.t, {
                string: "Loading Event, Partner and User Info",
              })
            : (0, t.jsx)(Xr, {
                rgSurveyResults: n,
                mapAccountsToReg: s,
                meetSteamEvents: d,
              });
        }
        const nt = (0, ht.FB)();
        function Xr(r) {
          const {
              rgSurveyResults: e,
              mapAccountsToReg: n,
              meetSteamEvents: s,
            } = r,
            a = (0, p.useMemo)(() => {
              if (!e) return null;
              const d = new Map();
              s.forEach((h) => d.set(h.GID, h));
              const u = [];
              return (
                e.forEach((h) => {
                  const g = JSON.parse(h.jsondata),
                    v = new $.b(h.steamid);
                  let y = {
                    feedback: g.simple_response,
                    accountid: v.GetAccountID(),
                  };
                  if (n.has(v.GetAccountID())) {
                    const w = n.get(v.GetAccountID()),
                      z = JSON.parse(w[0].jsondata);
                    (y.partner_id = z.partner_id),
                      (y.email = z.email_override),
                      (y.name = z.name),
                      (y.registrations = "");
                    const S = (0, W.Yd)(z.partner_id);
                    S && (y.partner_name = S.name),
                      w.forEach((D) => {
                        const q = d.get(D.gidEvent);
                        if (q) {
                          const Qe = q.jsondata.meet_steam_groups.find(
                            (qe) => qe.group_id === D.group_id,
                          ).localized_session_title[R.Bhc];
                          y.registrations.length > 0 &&
                            (y.registrations += "|"),
                            (y.registrations += Qe);
                        }
                      });
                  } else {
                    const w = (0, dt.CF)(v.GetAccountID());
                    w && (y.name = w.persona_name);
                  }
                  u.push(y);
                }),
                u
              );
            }, [n, s, e]),
            i = (0, p.useMemo)(
              () => [
                nt.accessor("name", { header: "Name", size: 150 }),
                nt.accessor("feedback", {
                  header: "Feedback",
                  size: 500,
                  cell: rn.Gb,
                }),
                nt.accessor("registrations", {
                  header: "Sessions",
                  size: 200,
                  cell: Gr,
                }),
                nt.accessor("accountid", { header: "Account ID", size: 150 }),
                nt.accessor("email", { header: "Email", size: 150 }),
                nt.accessor("partner_name", {
                  header: "Partner Name",
                  size: 200,
                }),
              ],
              [],
            );
          return a
            ? (0, t.jsx)(ve.tH, {
                children: (0, t.jsxs)("div", {
                  className: B().AdminPageCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: B().PageTitle,
                      children: "Survey Results",
                    }),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)(V.$n, {
                      id: "download-csv",
                      onClick: () =>
                        (0, Qt.K)(
                          "meetsteam_survey_results.csv",
                          a,
                          i.map((d) => ({
                            accessorKey: d.accessorKey,
                            header:
                              typeof d.header == "string"
                                ? d.header
                                : (d.accessorKey ?? ""),
                          })),
                        ),
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)(gt.k, {
                      columns: i,
                      data: a,
                      getRowKey: (d) => d,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                  ],
                }),
              })
            : (0, t.jsx)(se.t, { string: (0, A.we)("#Loading") });
        }
        function Gr(r) {
          return r.getValue()?.length > 0
            ? (0, t.jsx)(rn.DP, { text: r.getValue(), regExp: /\|/ })
            : "";
        }
        function qr() {
          const r = _r();
          return (0, p.useMemo)(() => {
            const n = new Map();
            return (
              r.forEach((s, a) => {
                s.forEach((i) => {
                  const d = new $.b(i.steamid);
                  n.has(d.GetAccountID()) || n.set(d.GetAccountID(), []),
                    (i.gidEvent = a),
                    n.get(d.GetAccountID()).push(i);
                });
              }),
              n
            );
          }, [r]);
        }
        function _r() {
          const [r] = (0, p.useState)(() => {
            const e = new Map(),
              n = (0, N.Tc)("registration_by_gid", "application_config") || {};
            for (const s in n) {
              const a = n[s];
              e.set(s, a);
            }
            return e;
          });
          return r;
        }
        function es() {
          const [r] = (0, p.useState)(
            () => (0, N.Tc)("event_gids", "application_config") || [],
          );
          return r;
        }
        function ts() {
          const [r] = (0, p.useState)(
            () => (0, N.Tc)("survey_results", "application_config") || [],
          );
          return r;
        }
        const at = {
          YearlySurvery: (r = ":year") => `/${r}`,
          PostEventSurvey: (r = ":surveyGID") => `/survey/${r}`,
          AdminDashboard: () => "/admin",
          PostEventSurveyResults: (r = ":surveyGID") => `/surveyresults/${r}`,
        };
        function ns(r) {
          return (
            (0, p.useEffect)(() => {
              Vr.O3.Init();
            }, []),
            (0, t.jsx)(pe.m, {
              children: (0, t.jsx)(Z.Kd, {
                basename: (0, fe.C)() + "meetsteam/",
                children: (0, t.jsxs)(ee.dO, {
                  children: [
                    (0, t.jsx)(ee.qh, {
                      exact: !0,
                      path: fe.B.DiagData(),
                      render: (e) =>
                        (0, t.jsx)(Ie.z, {
                          ...e,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, t.jsx)(ee.qh, {
                      exact: !0,
                      path: at.AdminDashboard(),
                      component: Ar,
                    }),
                    (0, t.jsx)(ee.qh, {
                      exact: !0,
                      path: at.YearlySurvery(":year(\\d+)"),
                      component: zr,
                    }),
                    (0, t.jsx)(ee.qh, {
                      exact: !0,
                      path: at.PostEventSurvey(":surveyGID(\\d+)"),
                      component: Qr,
                    }),
                    (0, t.jsx)(ee.qh, {
                      exact: !0,
                      path: at.PostEventSurveyResults(":surveyGID(\\d+)"),
                      component: Zr,
                    }),
                    (0, t.jsx)(ee.qh, { component: Le.a }),
                  ],
                }),
              }),
            })
          );
        }
      },
      7742: (Se, Ne, f) => {
        "use strict";
        f.d(Ne, { x0: () => fe, yI: () => p });
        async function t(Z) {
          try {
            return await Z;
          } catch (ee) {
            console.error(ee);
            return;
          }
        }
        function fe() {
          let Z, ee;
          return {
            promise: new Promise((Ie, Le) => {
              (Z = Ie), (ee = Le);
            }),
            resolve: Z,
            reject: ee,
          };
        }
        function p(Z) {
          return new Promise((ee) => setTimeout(ee, Z));
        }
      },
      50109: (Se, Ne, f) => {
        "use strict";
        f.d(Ne, { E: () => Te, O: () => ge });
        var t = f(14947),
          fe = f(65946),
          p = f(99412),
          Z = f(41635),
          ee = f(27066),
          pe = f(3166),
          Ie = f(38585),
          Le = Object.defineProperty,
          ve = Object.getOwnPropertyDescriptor,
          T = (B, U, R, P) => {
            for (
              var ie = P > 1 ? void 0 : P ? ve(U, R) : U, K = B.length - 1, E;
              K >= 0;
              K--
            )
              (E = B[K]) && (ie = (P ? E(U, R, ie) : E(ie)) || ie);
            return P && ie && Le(U, R, ie), ie;
          };
        const ue = class ot {
          m_eCurLang = (0, p.sfN)(pe.TS.LANGUAGE);
          m_rgHasData = (0, Z.$Y)([], p.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new Ie.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(U) {
            return this.m_eCurLang != U
              ? ((this.m_eCurLang = U), this.GetCallback().Dispatch(U), !0)
              : !1;
          }
          SetHasLanguage(U) {
            U.forEach((R, P) => {
              this.m_rgHasData[P] != R && (this.m_rgHasData[P] = R);
            });
          }
          BHasLanguageData(U) {
            return this.m_rgHasData[U];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(U) {
            U != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = U);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              ot.s_globalSingletonStore ||
                (ot.s_globalSingletonStore = new ot()),
              ot.s_globalSingletonStore
            );
          }
          constructor() {
            (0, t.Gn)(this);
          }
        };
        T([t.sH], ue.prototype, "m_eCurLang", 2),
          T([t.sH], ue.prototype, "m_rgHasData", 2),
          T([t.sH], ue.prototype, "m_bHasLocalizationContext", 2),
          T([ee.o], ue.prototype, "GetCurEditLanguage", 1),
          T([ee.o], ue.prototype, "SetCurEditLanguage", 1),
          T([t.XI.bound], ue.prototype, "SetHasLanguage", 1),
          T([ee.o], ue.prototype, "BHasLanguageData", 1);
        let ge = ue;
        function Te() {
          return (0, fe.q3)(() => ge.Get().GetCurEditLanguage());
        }
      },
      61266: (Se, Ne, f) => {
        "use strict";
        f.d(Ne, { T: () => ve, m: () => Le });
        var t = f(90626),
          fe = f(13018),
          p = f(60298),
          Z = f(10142),
          ee = f(71742),
          pe = f(3166),
          Ie = f(14616);
        function Le(ge) {
          const [Te, B] = (0, t.useState)(!1),
            [U] = (0, t.useState)(() => T()),
            R = (0, t.useMemo)(
              () => ({
                country: pe.TS.COUNTRY,
                language: pe.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, t.useEffect)(() => (B(!0), ue(U)), [U]),
            Te
              ? (0, t.createElement)(Ie.V3, {
                  context: R,
                  serviceTransportOverride: U.GetServiceTransport(),
                  children: ge.children,
                })
              : null
          );
        }
        function ve(ge) {
          const [Te] = (0, t.useState)(() => T()),
            B = (0, t.useMemo)(
              () => ({
                country: pe.TS.COUNTRY,
                language: pe.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: ge.bIncludeUnpublished,
              }),
              [ge.bIncludeUnpublished],
            );
          return (0, t.createElement)(Ie.V3, {
            context: B,
            serviceTransportOverride: Te.GetServiceTransport(),
            children: ge.children,
          });
        }
        function T() {
          const ge = (0, pe.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, ee.wT)(!!ge, "require partnerbrowse_webapi_token"),
            (0, p.p)(new fe.D(pe.TS.WEBAPI_BASE_URL, ge))
          );
        }
        function ue(ge) {
          return Z.A.Initialize(
            ge.GetServiceTransport(),
            pe.iA.is_partner_member,
          );
        }
      },
      51746: (Se, Ne, f) => {
        "use strict";
        f.d(Ne, {
          EG: () => ee,
          II: () => ge,
          N1: () => Te,
          S2: () => T,
          Uz: () => ve,
          aL: () => Le,
          ab: () => p,
          qR: () => Z,
          zB: () => ue,
        });
        var t = f(7742),
          fe = f(72849);
        function p(B) {
          const U = B.toLowerCase();
          if (U.endsWith(".jpg") || U.endsWith(".jpeg")) return "image/jpeg";
          if (U.endsWith(".png")) return "image/png";
          if (U.endsWith(".gif")) return "image/gif";
          if (U.endsWith(".mp4")) return "video/mp4";
          if (U.endsWith(".webm")) return "video/webm";
          if (U.endsWith(".srt")) return "text/srt";
          if (U.endsWith(".vtt")) return "text/vtt";
          if (U.endsWith(".webp")) return "image/webp";
        }
        function Z(B) {
          switch (B) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              B,
            ),
            ".jpg"
          );
        }
        function ee(B) {
          switch (B) {
            case fe.bg.iS:
              return ".jpg";
            case fe.bg.CK:
              return ".gif";
            case fe.bg.dU:
              return ".png";
            case fe.bg.pJ:
              return ".webm";
            case fe.bg.nn:
              return ".mp4";
            case fe.bg.pi:
              return ".srt";
            case fe.bg.k7:
              return ".vtt";
            case fe.bg.wD:
              return ".webp";
          }
        }
        function pe(B) {
          const U = (0, t.x0)(),
            R = new Image();
          return (
            (R.onload = () => U.resolve(R)),
            (R.onerror = (P) => {
              console.error("LoadImage failed to load the image, details", P),
                U.resolve(void 0);
            }),
            (R.src = B),
            U.promise
          );
        }
        function Ie(B) {
          const U = (0, t.x0)(),
            R = document.createElement("video");
          return (
            (R.preload = "metadata"),
            R.addEventListener("loadedmetadata", () => U.resolve(R)),
            (R.onerror = (P) => {
              console.error("LoadVideo failed to load the video, details", P),
                U.resolve(void 0);
            }),
            (R.src = B),
            U.promise
          );
        }
        function Le(B) {
          return B.startsWith("image/");
        }
        function ve(B) {
          return B.startsWith("video/");
        }
        function T(B, U) {
          return U ? Ie(B) : pe(B);
        }
        async function ue(B, U) {
          if (U) return Ie(URL.createObjectURL(B));
          {
            const R = (0, t.x0)(),
              P = new FileReader();
            (P.onload = () => R.resolve(P.result ?? void 0)),
              (P.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  P.error,
                ),
                  R.resolve(void 0);
              }),
              P.readAsDataURL(B);
            const ie = await R.promise;
            return ie ? pe(ie.toString()) : void 0;
          }
        }
        function ge(B) {
          return B
            ? B instanceof HTMLVideoElement
              ? { width: B.videoWidth, height: B.videoHeight }
              : { width: B.width, height: B.height }
            : { width: 0, height: 0 };
        }
        function Te(B, U) {
          if (!U) return B;
          const R = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const P of U)
            R.has(P.name.toLowerCase()) || (B[P.name] = P.value);
          return B;
        }
      },
      30565: (Se) => {
        Se.exports = {
          EventList: "_3iKeBOMuwqPC87BLxvCKll",
          EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
          EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
          Title: "_1bLTz07sQnRA0DjTpjXCza",
          StartDate: "_6accgtG1qR7tHFL1wnO58",
          TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
          ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
          SearchLine: "_3WR8L9DXe8JRgcUuBlzxCV",
          SearchSummary: "_2ZYKXsT05br_fBl6Al_Ok2",
          SearchMatch: "_3NPtUvJyTjDkKKBkXpmMMh",
          CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
          CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
          Full: "ndEhtgivpXhCilYDnAAVe",
          MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
          MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
        };
      },
      34283: (Se) => {
        Se.exports = {
          ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
          AccountSummary: "_3ASk__24cRSvf749cMDwat",
          AccountAvatar: "_2xoRnY-a7zMtF4eXy564LW",
          AccountPersonaName: "_13y5R1N5OAhnGi8UjBv9ZK",
          PartnerList: "_EdCW3WiSPTQsVts-RIeJ",
          PartnerListHeader: "_4TErK934px6TrK1V9JGoD",
          PartnerListRow: "CZqR_ufpzWTsB5Z6N9Zut",
          PartnerListRowSelected: "_2d0ftwVO6CThilpy0rp1mx",
        };
      },
      85761: (Se) => {
        Se.exports = {
          Ctn: "_8n9wPNrWDu91tlwBW9bHt",
          Indicator: "_355XkH0xfIpJF1YsMX7I7k",
          EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
          EmailField: "_1E-g4exFlAQhvXDqspYTR0",
          RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
          RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
        };
      },
      13038: (Se) => {
        Se.exports = {
          Ctn: "_1olTwzPkPjzL36u0WgyDG0",
          Indicator: "_3d0cYrmQzzda_P3DQ994kX",
        };
      },
      30603: (Se) => {
        Se.exports = {
          ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
          Table: "_2JSoC65mCQdxh-B_srjUjf",
        };
      },
      40323: function (Se, Ne) {
        var f, t, fe; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((p, Z) => {
          (t = []),
            (f = Z),
            (fe = typeof f == "function" ? f.apply(Ne, t) : f),
            fe !== void 0 && (Se.exports = fe);
        })(this, function p() {
          var Z =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : Z !== void 0
                    ? Z
                    : {},
            ee,
            pe = !Z.document && !!Z.postMessage,
            Ie = Z.IS_PAPA_WORKER || !1,
            Le = {},
            ve = 0,
            T = {};
          function ue(c) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (l) {
                var m = ae(l);
                (m.chunkSize = parseInt(m.chunkSize)),
                  l.step || l.chunk || (m.chunkSize = null),
                  (this._handle = new R(m)),
                  ((this._handle.streamer = this)._config = m);
              }.call(this, c),
              (this.parseChunk = function (l, m) {
                var j = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < j) {
                  let L = this._config.newline;
                  L ||
                    ((x = this._config.quoteChar || '"'),
                    (L = this._handle.guessLineEndings(l, x))),
                    (l = [...l.split(L).slice(j)].join(L));
                }
                this.isFirstChunk &&
                  k(this._config.beforeFirstChunk) &&
                  (x = this._config.beforeFirstChunk(l)) !== void 0 &&
                  (l = x),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var j = this._partialLine + l,
                  x =
                    ((this._partialLine = ""),
                    this._handle.parse(j, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((l = x.meta.cursor),
                    (j =
                      (this._finished ||
                        ((this._partialLine = j.substring(l - this._baseIndex)),
                        (this._baseIndex = l)),
                      x && x.data && (this._rowCount += x.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    Ie)
                  )
                    Z.postMessage({
                      results: x,
                      workerId: T.WORKER_ID,
                      finished: j,
                    });
                  else if (k(this._config.chunk) && !m) {
                    if (
                      (this._config.chunk(x, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = x = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(x.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(x.errors)),
                      (this._completeResults.meta = x.meta)),
                    this._completed ||
                      !j ||
                      !k(this._config.complete) ||
                      (x && x.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    j || (x && x.meta.paused) || this._nextChunk(),
                    x
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (l) {
                k(this._config.error)
                  ? this._config.error(l)
                  : Ie &&
                    this._config.error &&
                    Z.postMessage({
                      workerId: T.WORKER_ID,
                      error: l,
                      finished: !1,
                    });
              });
          }
          function ge(c) {
            var l;
            (c = c || {}).chunkSize || (c.chunkSize = T.RemoteChunkSize),
              ue.call(this, c),
              (this._nextChunk = pe
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (m) {
                (this._input = m), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((l = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (l.withCredentials = this._config.withCredentials),
                    pe ||
                      ((l.onload = we(this._chunkLoaded, this)),
                      (l.onerror = we(this._chunkError, this))),
                    l.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !pe,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var m,
                      j = this._config.downloadRequestHeaders;
                    for (m in j) l.setRequestHeader(m, j[m]);
                  }
                  var x;
                  this._config.chunkSize &&
                    ((x = this._start + this._config.chunkSize - 1),
                    l.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + x,
                    ));
                  try {
                    l.send(this._config.downloadRequestBody);
                  } catch (L) {
                    this._chunkError(L.message);
                  }
                  pe && l.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                l.readyState === 4 &&
                  (l.status < 200 || 400 <= l.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || l.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((m) =>
                            (m = m.getResponseHeader("Content-Range")) !== null
                              ? parseInt(m.substring(m.lastIndexOf("/") + 1))
                              : -1)(l)),
                      this.parseChunk(l.responseText)));
              }),
              (this._chunkError = function (m) {
                (m = l.statusText || m), this._sendError(new Error(m));
              });
          }
          function Te(c) {
            (c = c || {}).chunkSize || (c.chunkSize = T.LocalChunkSize),
              ue.call(this, c);
            var l,
              m,
              j = typeof FileReader < "u";
            (this.stream = function (x) {
              (this._input = x),
                (m = x.slice || x.webkitSlice || x.mozSlice),
                j
                  ? (((l = new FileReader()).onload = we(
                      this._chunkLoaded,
                      this,
                    )),
                    (l.onerror = we(this._chunkError, this)))
                  : (l = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var x = this._input,
                  L =
                    (this._config.chunkSize &&
                      ((L = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (x = m.call(x, this._start, L))),
                    l.readAsText(x, this._config.encoding));
                j || this._chunkLoaded({ target: { result: L } });
              }),
              (this._chunkLoaded = function (x) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(x.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(l.error);
              });
          }
          function B(c) {
            var l;
            ue.call(this, (c = c || {})),
              (this.stream = function (m) {
                return (l = m), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var m, j;
                if (!this._finished)
                  return (
                    (m = this._config.chunkSize),
                    (l = m
                      ? ((j = l.substring(0, m)), l.substring(m))
                      : ((j = l), "")),
                    (this._finished = !l),
                    this.parseChunk(j)
                  );
              });
          }
          function U(c) {
            ue.call(this, (c = c || {}));
            var l = [],
              m = !0,
              j = !1;
            (this.pause = function () {
              ue.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                ue.prototype.resume.apply(this, arguments),
                  this._input.resume();
              }),
              (this.stream = function (x) {
                (this._input = x),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                j && l.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  l.length ? this.parseChunk(l.shift()) : (m = !0);
              }),
              (this._streamData = we(function (x) {
                try {
                  l.push(
                    typeof x == "string"
                      ? x
                      : x.toString(this._config.encoding),
                  ),
                    m &&
                      ((m = !1),
                      this._checkIsFinished(),
                      this.parseChunk(l.shift()));
                } catch (L) {
                  this._streamError(L);
                }
              }, this)),
              (this._streamError = we(function (x) {
                this._streamCleanUp(), this._sendError(x);
              }, this)),
              (this._streamEnd = we(function () {
                this._streamCleanUp(), (j = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = we(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function R(c) {
            var l,
              m,
              j,
              x,
              L = Math.pow(2, 53),
              H = -L,
              X = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              G =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              F = this,
              C = 0,
              b = 0,
              Q = !1,
              I = !1,
              O = [],
              M = { data: [], errors: [], meta: {} };
            function oe(Y) {
              return c.skipEmptyLines === "greedy"
                ? Y.join("").trim() === ""
                : Y.length === 1 && Y[0].length === 0;
            }
            function te() {
              if (
                (M &&
                  j &&
                  (Fe(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      T.DefaultDelimiter +
                      "'",
                  ),
                  (j = !1)),
                c.skipEmptyLines &&
                  (M.data = M.data.filter(function (ne) {
                    return !oe(ne);
                  })),
                he())
              ) {
                let ne = function (xe, ce) {
                  k(c.transformHeader) && (xe = c.transformHeader(xe, ce)),
                    O.push(xe);
                };
                var W = ne;
                if (M)
                  if (Array.isArray(M.data[0])) {
                    for (var Y = 0; he() && Y < M.data.length; Y++)
                      M.data[Y].forEach(ne);
                    M.data.splice(0, 1);
                  } else M.data.forEach(ne);
              }
              function $(ne, xe) {
                for (
                  var ce = c.header ? {} : [], re = 0;
                  re < ne.length;
                  re++
                ) {
                  var J = re,
                    je = ne[re],
                    je = ((_, le) =>
                      ((me) => (
                        c.dynamicTypingFunction &&
                          c.dynamicTyping[me] === void 0 &&
                          (c.dynamicTyping[me] = c.dynamicTypingFunction(me)),
                        (c.dynamicTyping[me] || c.dynamicTyping) === !0
                      ))(_)
                        ? le === "true" ||
                          le === "TRUE" ||
                          (le !== "false" &&
                            le !== "FALSE" &&
                            (((me) => {
                              if (
                                X.test(me) &&
                                ((me = parseFloat(me)), H < me && me < L)
                              )
                                return 1;
                            })(le)
                              ? parseFloat(le)
                              : G.test(le)
                                ? new Date(le)
                                : le === ""
                                  ? null
                                  : le))
                        : le)(
                      (J = c.header
                        ? re >= O.length
                          ? "__parsed_extra"
                          : O[re]
                        : J),
                      (je = c.transform ? c.transform(je, J) : je),
                    );
                  J === "__parsed_extra"
                    ? ((ce[J] = ce[J] || []), ce[J].push(je))
                    : (ce[J] = je);
                }
                return (
                  c.header &&
                    (re > O.length
                      ? Fe(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            O.length +
                            " fields but parsed " +
                            re,
                          b + xe,
                        )
                      : re < O.length &&
                        Fe(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            O.length +
                            " fields but parsed " +
                            re,
                          b + xe,
                        )),
                  ce
                );
              }
              var N;
              M &&
                (c.header || c.dynamicTyping || c.transform) &&
                ((N = 1),
                !M.data.length || Array.isArray(M.data[0])
                  ? ((M.data = M.data.map($)), (N = M.data.length))
                  : (M.data = $(M.data, 0)),
                c.header && M.meta && (M.meta.fields = O),
                (b += N));
            }
            function he() {
              return c.header && O.length === 0;
            }
            function Fe(Y, $, N, W) {
              (Y = { type: Y, code: $, message: N }),
                W !== void 0 && (Y.row = W),
                M.errors.push(Y);
            }
            k(c.step) &&
              ((x = c.step),
              (c.step = function (Y) {
                (M = Y),
                  he()
                    ? te()
                    : (te(),
                      M.data.length !== 0 &&
                        ((C += Y.data.length),
                        c.preview && C > c.preview
                          ? m.abort()
                          : ((M.data = M.data[0]), x(M, F))));
              })),
              (this.parse = function (Y, $, N) {
                var W = c.quoteChar || '"',
                  W =
                    (c.newline || (c.newline = this.guessLineEndings(Y, W)),
                    (j = !1),
                    c.delimiter
                      ? k(c.delimiter) &&
                        ((c.delimiter = c.delimiter(Y)),
                        (M.meta.delimiter = c.delimiter))
                      : ((W = ((ne, xe, ce, re, J) => {
                          var je, _, le, me;
                          J = J || [
                            ",",
                            "	",
                            "|",
                            ";",
                            T.RECORD_SEP,
                            T.UNIT_SEP,
                          ];
                          for (var Ke = 0; Ke < J.length; Ke++) {
                            for (
                              var We,
                                Je = J[Ke],
                                be = 0,
                                Oe = 0,
                                de = 0,
                                Be =
                                  ((le = void 0),
                                  new ie({
                                    comments: re,
                                    delimiter: Je,
                                    newline: xe,
                                    preview: 10,
                                  }).parse(ne)),
                                De = 0;
                              De < Be.data.length;
                              De++
                            )
                              ce && oe(Be.data[De])
                                ? de++
                                : ((We = Be.data[De].length),
                                  (Oe += We),
                                  le === void 0
                                    ? (le = We)
                                    : 0 < We &&
                                      ((be += Math.abs(We - le)), (le = We)));
                            0 < Be.data.length && (Oe /= Be.data.length - de),
                              (_ === void 0 || be <= _) &&
                                (me === void 0 || me < Oe) &&
                                1.99 < Oe &&
                                ((_ = be), (je = Je), (me = Oe));
                          }
                          return {
                            successful: !!(c.delimiter = je),
                            bestDelimiter: je,
                          };
                        })(
                          Y,
                          c.newline,
                          c.skipEmptyLines,
                          c.comments,
                          c.delimitersToGuess,
                        )).successful
                          ? (c.delimiter = W.bestDelimiter)
                          : ((j = !0), (c.delimiter = T.DefaultDelimiter)),
                        (M.meta.delimiter = c.delimiter)),
                    ae(c));
                return (
                  c.preview && c.header && W.preview++,
                  (l = Y),
                  (m = new ie(W)),
                  (M = m.parse(l, $, N)),
                  te(),
                  Q ? { meta: { paused: !0 } } : M || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return Q;
              }),
              (this.pause = function () {
                (Q = !0),
                  m.abort(),
                  (l = k(c.chunk) ? "" : l.substring(m.getCharIndex()));
              }),
              (this.resume = function () {
                F.streamer._halted
                  ? ((Q = !1), F.streamer.parseChunk(l, !0))
                  : setTimeout(F.resume, 3);
              }),
              (this.aborted = function () {
                return I;
              }),
              (this.abort = function () {
                (I = !0),
                  m.abort(),
                  (M.meta.aborted = !0),
                  k(c.complete) && c.complete(M),
                  (l = "");
              }),
              (this.guessLineEndings = function (ne, W) {
                ne = ne.substring(0, 1048576);
                var W = new RegExp(P(W) + "([^]*?)" + P(W), "gm"),
                  N = (ne = ne.replace(W, "")).split("\r"),
                  W = ne.split(`
`),
                  ne = 1 < W.length && W[0].length < N[0].length;
                if (N.length === 1 || ne)
                  return `
`;
                for (var xe = 0, ce = 0; ce < N.length; ce++)
                  N[ce][0] ===
                    `
` && xe++;
                return xe >= N.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function P(c) {
            return c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function ie(c) {
            var l = (c = c || {}).delimiter,
              m = c.newline,
              j = c.comments,
              x = c.step,
              L = c.preview,
              H = c.fastMode,
              X = null,
              G = !1,
              F = c.quoteChar == null ? '"' : c.quoteChar,
              C = F;
            if (
              (c.escapeChar !== void 0 && (C = c.escapeChar),
              (typeof l != "string" || -1 < T.BAD_DELIMITERS.indexOf(l)) &&
                (l = ","),
              j === l)
            )
              throw new Error("Comment character same as delimiter");
            j === !0
              ? (j = "#")
              : (typeof j != "string" || -1 < T.BAD_DELIMITERS.indexOf(j)) &&
                (j = !1),
              m !==
                `
` &&
                m !== "\r" &&
                m !==
                  `\r
` &&
                (m = `
`);
            var b = 0,
              Q = !1;
            (this.parse = function (I, O, M) {
              if (typeof I != "string")
                throw new Error("Input must be a string");
              var oe = I.length,
                te = l.length,
                he = m.length,
                Fe = j.length,
                Y = k(x),
                $ = [],
                N = [],
                W = [],
                ne = (b = 0);
              if (!I) return be();
              if (H || (H !== !1 && I.indexOf(F) === -1)) {
                for (var xe = I.split(m), ce = 0; ce < xe.length; ce++) {
                  if (((W = xe[ce]), (b += W.length), ce !== xe.length - 1))
                    b += m.length;
                  else if (M) return be();
                  if (!j || W.substring(0, Fe) !== j) {
                    if (Y) {
                      if ((($ = []), me(W.split(l)), Oe(), Q)) return be();
                    } else me(W.split(l));
                    if (L && L <= ce) return ($ = $.slice(0, L)), be(!0);
                  }
                }
                return be();
              }
              for (
                var re = I.indexOf(l, b),
                  J = I.indexOf(m, b),
                  je = new RegExp(P(C) + P(F), "g"),
                  _ = I.indexOf(F, b);
                ;
              )
                if (I[b] === F)
                  for (_ = b, b++; ; ) {
                    if ((_ = I.indexOf(F, _ + 1)) === -1)
                      return (
                        M ||
                          N.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: $.length,
                            index: b,
                          }),
                        We()
                      );
                    if (_ === oe - 1)
                      return We(I.substring(b, _).replace(je, F));
                    if (F === C && I[_ + 1] === C) _++;
                    else if (F === C || _ === 0 || I[_ - 1] !== C) {
                      re !== -1 && re < _ + 1 && (re = I.indexOf(l, _ + 1));
                      var le = Ke(
                        (J =
                          J !== -1 && J < _ + 1 ? I.indexOf(m, _ + 1) : J) ===
                          -1
                          ? re
                          : Math.min(re, J),
                      );
                      if (I.substr(_ + 1 + le, te) === l) {
                        W.push(I.substring(b, _).replace(je, F)),
                          I[(b = _ + 1 + le + te)] !== F &&
                            (_ = I.indexOf(F, b)),
                          (re = I.indexOf(l, b)),
                          (J = I.indexOf(m, b));
                        break;
                      }
                      if (
                        ((le = Ke(J)),
                        I.substring(_ + 1 + le, _ + 1 + le + he) === m)
                      ) {
                        if (
                          (W.push(I.substring(b, _).replace(je, F)),
                          Je(_ + 1 + le + he),
                          (re = I.indexOf(l, b)),
                          (_ = I.indexOf(F, b)),
                          Y && (Oe(), Q))
                        )
                          return be();
                        if (L && $.length >= L) return be(!0);
                        break;
                      }
                      N.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: $.length,
                        index: b,
                      }),
                        _++;
                    }
                  }
                else if (j && W.length === 0 && I.substring(b, b + Fe) === j) {
                  if (J === -1) return be();
                  (b = J + he), (J = I.indexOf(m, b)), (re = I.indexOf(l, b));
                } else if (re !== -1 && (re < J || J === -1))
                  W.push(I.substring(b, re)),
                    (b = re + te),
                    (re = I.indexOf(l, b));
                else {
                  if (J === -1) break;
                  if ((W.push(I.substring(b, J)), Je(J + he), Y && (Oe(), Q)))
                    return be();
                  if (L && $.length >= L) return be(!0);
                }
              return We();
              function me(de) {
                $.push(de), (ne = b);
              }
              function Ke(de) {
                var Be = 0;
                return (Be =
                  de !== -1 && (de = I.substring(_ + 1, de)) && de.trim() === ""
                    ? de.length
                    : Be);
              }
              function We(de) {
                return (
                  M ||
                    (de === void 0 && (de = I.substring(b)),
                    W.push(de),
                    (b = oe),
                    me(W),
                    Y && Oe()),
                  be()
                );
              }
              function Je(de) {
                (b = de), me(W), (W = []), (J = I.indexOf(m, b));
              }
              function be(de) {
                if (c.header && !O && $.length && !G) {
                  var Be = $[0],
                    De = Object.create(null),
                    V = new Set(Be);
                  let Pe = !1;
                  for (let Ae = 0; Ae < Be.length; Ae++) {
                    let ye = Be[Ae];
                    if (
                      De[
                        (ye = k(c.transformHeader)
                          ? c.transformHeader(ye, Ae)
                          : ye)
                      ]
                    ) {
                      let se,
                        Ze = De[ye];
                      for (; (se = ye + "_" + Ze), Ze++, V.has(se); );
                      V.add(se),
                        (Be[Ae] = se),
                        De[ye]++,
                        (Pe = !0),
                        ((X = X === null ? {} : X)[se] = ye);
                    } else (De[ye] = 1), (Be[Ae] = ye);
                    V.add(ye);
                  }
                  Pe && console.warn("Duplicate headers found and renamed."),
                    (G = !0);
                }
                return {
                  data: $,
                  errors: N,
                  meta: {
                    delimiter: l,
                    linebreak: m,
                    aborted: Q,
                    truncated: !!de,
                    cursor: ne + (O || 0),
                    renamedHeaders: X,
                  },
                };
              }
              function Oe() {
                x(be()), ($ = []), (N = []);
              }
            }),
              (this.abort = function () {
                Q = !0;
              }),
              (this.getCharIndex = function () {
                return b;
              });
          }
          function K(c) {
            var l = c.data,
              m = Le[l.workerId],
              j = !1;
            if (l.error) m.userError(l.error, l.file);
            else if (l.results && l.results.data) {
              var x = {
                abort: function () {
                  (j = !0),
                    E(l.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: o,
                resume: o,
              };
              if (k(m.userStep)) {
                for (
                  var L = 0;
                  L < l.results.data.length &&
                  (m.userStep(
                    {
                      data: l.results.data[L],
                      errors: l.results.errors,
                      meta: l.results.meta,
                    },
                    x,
                  ),
                  !j);
                  L++
                );
                delete l.results;
              } else
                k(m.userChunk) &&
                  (m.userChunk(l.results, x, l.file), delete l.results);
            }
            l.finished && !j && E(l.workerId, l.results);
          }
          function E(c, l) {
            var m = Le[c];
            k(m.userComplete) && m.userComplete(l), m.terminate(), delete Le[c];
          }
          function o() {
            throw new Error("Not implemented.");
          }
          function ae(c) {
            if (typeof c != "object" || c === null) return c;
            var l,
              m = Array.isArray(c) ? [] : {};
            for (l in c) m[l] = ae(c[l]);
            return m;
          }
          function we(c, l) {
            return function () {
              c.apply(l, arguments);
            };
          }
          function k(c) {
            return typeof c == "function";
          }
          return (
            (T.parse = function (c, l) {
              var m = (l = l || {}).dynamicTyping || !1;
              if (
                (k(m) && ((l.dynamicTypingFunction = m), (m = {})),
                (l.dynamicTyping = m),
                (l.transform = !!k(l.transform) && l.transform),
                !l.worker || !T.WORKERS_SUPPORTED)
              )
                return (
                  (m = null),
                  T.NODE_STREAM_INPUT,
                  typeof c == "string"
                    ? ((c = ((j) =>
                        j.charCodeAt(0) !== 65279 ? j : j.slice(1))(c)),
                      (m = new (l.download ? ge : B)(l)))
                    : c.readable === !0 && k(c.read) && k(c.on)
                      ? (m = new U(l))
                      : ((Z.File && c instanceof File) ||
                          c instanceof Object) &&
                        (m = new Te(l)),
                  m.stream(c)
                );
              ((m = (() => {
                var j;
                return (
                  !!T.WORKERS_SUPPORTED &&
                  ((j = (() => {
                    var x = Z.URL || Z.webkitURL || null,
                      L = p.toString();
                    return (
                      T.BLOB_URL ||
                      (T.BLOB_URL = x.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            L,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((j = new Z.Worker(j)).onmessage = K),
                  (j.id = ve++),
                  (Le[j.id] = j))
                );
              })()).userStep = l.step),
                (m.userChunk = l.chunk),
                (m.userComplete = l.complete),
                (m.userError = l.error),
                (l.step = k(l.step)),
                (l.chunk = k(l.chunk)),
                (l.complete = k(l.complete)),
                (l.error = k(l.error)),
                delete l.worker,
                m.postMessage({ input: c, config: l, workerId: m.id });
            }),
            (T.unparse = function (c, l) {
              var m = !1,
                j = !0,
                x = ",",
                L = `\r
`,
                H = '"',
                X = H + H,
                G = !1,
                F = null,
                C = !1,
                b =
                  ((() => {
                    if (typeof l == "object") {
                      if (
                        (typeof l.delimiter != "string" ||
                          T.BAD_DELIMITERS.filter(function (O) {
                            return l.delimiter.indexOf(O) !== -1;
                          }).length ||
                          (x = l.delimiter),
                        (typeof l.quotes != "boolean" &&
                          typeof l.quotes != "function" &&
                          !Array.isArray(l.quotes)) ||
                          (m = l.quotes),
                        (typeof l.skipEmptyLines != "boolean" &&
                          typeof l.skipEmptyLines != "string") ||
                          (G = l.skipEmptyLines),
                        typeof l.newline == "string" && (L = l.newline),
                        typeof l.quoteChar == "string" && (H = l.quoteChar),
                        typeof l.header == "boolean" && (j = l.header),
                        Array.isArray(l.columns))
                      ) {
                        if (l.columns.length === 0)
                          throw new Error("Option columns is empty");
                        F = l.columns;
                      }
                      l.escapeChar !== void 0 && (X = l.escapeChar + H),
                        l.escapeFormulae instanceof RegExp
                          ? (C = l.escapeFormulae)
                          : typeof l.escapeFormulae == "boolean" &&
                            l.escapeFormulae &&
                            (C = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(P(H), "g"));
              if (
                (typeof c == "string" && (c = JSON.parse(c)), Array.isArray(c))
              ) {
                if (!c.length || Array.isArray(c[0])) return Q(null, c, G);
                if (typeof c[0] == "object")
                  return Q(F || Object.keys(c[0]), c, G);
              } else if (typeof c == "object")
                return (
                  typeof c.data == "string" && (c.data = JSON.parse(c.data)),
                  Array.isArray(c.data) &&
                    (c.fields || (c.fields = (c.meta && c.meta.fields) || F),
                    c.fields ||
                      (c.fields = Array.isArray(c.data[0])
                        ? c.fields
                        : typeof c.data[0] == "object"
                          ? Object.keys(c.data[0])
                          : []),
                    Array.isArray(c.data[0]) ||
                      typeof c.data[0] == "object" ||
                      (c.data = [c.data])),
                  Q(c.fields || [], c.data || [], G)
                );
              throw new Error("Unable to serialize unrecognized input");
              function Q(O, M, oe) {
                var te = "",
                  he =
                    (typeof O == "string" && (O = JSON.parse(O)),
                    typeof M == "string" && (M = JSON.parse(M)),
                    Array.isArray(O) && 0 < O.length),
                  Fe = !Array.isArray(M[0]);
                if (he && j) {
                  for (var Y = 0; Y < O.length; Y++)
                    0 < Y && (te += x), (te += I(O[Y], Y));
                  0 < M.length && (te += L);
                }
                for (var $ = 0; $ < M.length; $++) {
                  var N = (he ? O : M[$]).length,
                    W = !1,
                    ne = he
                      ? Object.keys(M[$]).length === 0
                      : M[$].length === 0;
                  if (
                    (oe &&
                      !he &&
                      (W =
                        oe === "greedy"
                          ? M[$].join("").trim() === ""
                          : M[$].length === 1 && M[$][0].length === 0),
                    oe === "greedy" && he)
                  ) {
                    for (var xe = [], ce = 0; ce < N; ce++) {
                      var re = Fe ? O[ce] : ce;
                      xe.push(M[$][re]);
                    }
                    W = xe.join("").trim() === "";
                  }
                  if (!W) {
                    for (var J = 0; J < N; J++) {
                      0 < J && !ne && (te += x);
                      var je = he && Fe ? O[J] : J;
                      te += I(M[$][je], J);
                    }
                    $ < M.length - 1 && (!oe || (0 < N && !ne)) && (te += L);
                  }
                }
                return te;
              }
              function I(O, M) {
                var oe, te;
                return O == null
                  ? ""
                  : O.constructor === Date
                    ? JSON.stringify(O).slice(1, 25)
                    : ((te = !1),
                      C &&
                        typeof O == "string" &&
                        C.test(O) &&
                        ((O = "'" + O), (te = !0)),
                      (oe = O.toString().replace(b, X)),
                      (te =
                        te ||
                        m === !0 ||
                        (typeof m == "function" && m(O, M)) ||
                        (Array.isArray(m) && m[M]) ||
                        ((he, Fe) => {
                          for (var Y = 0; Y < Fe.length; Y++)
                            if (-1 < he.indexOf(Fe[Y])) return !0;
                          return !1;
                        })(oe, T.BAD_DELIMITERS) ||
                        -1 < oe.indexOf(x) ||
                        oe.charAt(0) === " " ||
                        oe.charAt(oe.length - 1) === " ")
                        ? H + oe + H
                        : oe);
              }
            }),
            (T.RECORD_SEP = ""),
            (T.UNIT_SEP = ""),
            (T.BYTE_ORDER_MARK = "\uFEFF"),
            (T.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              T.BYTE_ORDER_MARK,
            ]),
            (T.WORKERS_SUPPORTED = !pe && !!Z.Worker),
            (T.NODE_STREAM_INPUT = 1),
            (T.LocalChunkSize = 10485760),
            (T.RemoteChunkSize = 5242880),
            (T.DefaultDelimiter = ","),
            (T.Parser = ie),
            (T.ParserHandle = R),
            (T.NetworkStreamer = ge),
            (T.FileStreamer = Te),
            (T.StringStreamer = B),
            (T.ReadableStreamStreamer = U),
            Z.jQuery &&
              ((ee = Z.jQuery).fn.parse = function (c) {
                var l = c.config || {},
                  m = [];
                return (
                  this.each(function (L) {
                    if (
                      !(
                        ee(this).prop("tagName").toUpperCase() === "INPUT" &&
                        ee(this).attr("type").toLowerCase() === "file" &&
                        Z.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var H = 0; H < this.files.length; H++)
                      m.push({
                        file: this.files[H],
                        inputElem: this,
                        instanceConfig: ee.extend({}, l),
                      });
                  }),
                  j(),
                  this
                );
                function j() {
                  if (m.length === 0) k(c.complete) && c.complete();
                  else {
                    var L,
                      H,
                      X,
                      G,
                      F = m[0];
                    if (k(c.before)) {
                      var C = c.before(F.file, F.inputElem);
                      if (typeof C == "object") {
                        if (C.action === "abort")
                          return (
                            (L = "AbortError"),
                            (H = F.file),
                            (X = F.inputElem),
                            (G = C.reason),
                            void (k(c.error) && c.error({ name: L }, H, X, G))
                          );
                        if (C.action === "skip") return void x();
                        typeof C.config == "object" &&
                          (F.instanceConfig = ee.extend(
                            F.instanceConfig,
                            C.config,
                          ));
                      } else if (C === "skip") return void x();
                    }
                    var b = F.instanceConfig.complete;
                    (F.instanceConfig.complete = function (Q) {
                      k(b) && b(Q, F.file, F.inputElem), x();
                    }),
                      T.parse(F.file, F.instanceConfig);
                  }
                }
                function x() {
                  m.splice(0, 1), j();
                }
              }),
            Ie &&
              (Z.onmessage = function (c) {
                (c = c.data),
                  T.WORKER_ID === void 0 && c && (T.WORKER_ID = c.workerId),
                  typeof c.input == "string"
                    ? Z.postMessage({
                        workerId: T.WORKER_ID,
                        results: T.parse(c.input, c.config),
                        finished: !0,
                      })
                    : ((Z.File && c.input instanceof File) ||
                        c.input instanceof Object) &&
                      (c = T.parse(c.input, c.config)) &&
                      Z.postMessage({
                        workerId: T.WORKER_ID,
                        results: c,
                        finished: !0,
                      });
              }),
            ((ge.prototype = Object.create(ue.prototype)).constructor = ge),
            ((Te.prototype = Object.create(ue.prototype)).constructor = Te),
            ((B.prototype = Object.create(B.prototype)).constructor = B),
            ((U.prototype = Object.create(ue.prototype)).constructor = U),
            T
          );
        });
      },
    },
  ]);
})();
