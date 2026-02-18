/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
      };
    },
    5907: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => ke });
      var n = r(45699),
        a = r(76217),
        i = r(37788),
        s = r(23310),
        o = r(23809),
        l = r(62093),
        c = r(60014),
        u = r(90626),
        d = r(13871),
        m = r(30894),
        p = r(93973),
        g = r(16021),
        w = r(55263),
        b = r(12155),
        y = r(32630),
        f = r(4434),
        _ = r(52038),
        B = r(61859),
        v = r(60778),
        S = r(25489),
        h = r(44691),
        M = r(78327),
        R = r(39199),
        E = r(40594);
      const I = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
        const n = (t - r) / 2,
          a = 2 * Math.PI * n,
          i = a - (e / 100) * a,
          s = 100 == e;
        return u.createElement(
          "div",
          { className: (0, _.A)({ [E.Circular]: !0, [E.Full]: s }) },
          u.createElement(
            "svg",
            { width: t, height: t, style: { transform: "rotate(-90deg)" } },
            u.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: n,
              stroke: "#0c131d",
              strokeWidth: r,
              fill: "none",
            }),
            u.createElement("circle", {
              cx: t / 2,
              cy: t / 2,
              r: n,
              stroke: "#1a9fff",
              strokeWidth: r,
              fill: "none",
              strokeDasharray: a,
              strokeDashoffset: i,
              style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
            }),
          ),
        );
      };
      var D,
        A = r(22797),
        T = r(10224),
        C = r(60779),
        z = r(92834),
        F = r(3740),
        N = r(44986),
        q = r(32754),
        U = r(61336),
        W = r(20713),
        Q = r(40807),
        O = r(80902),
        P = r(1035),
        G = r(34181),
        L = r(17720),
        k = r(4796),
        j = r(8092),
        x = r(26101),
        H = r(56545),
        V = r(80613),
        Z = r.n(V),
        K = r(89068);
      class Y extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.recommendationid || K.Sg(Y.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  voted_up: { n: 3, br: K.qM.readBool, bw: K.gp.writeBool },
                  is_public: { n: 4, br: K.qM.readBool, bw: K.gp.writeBool },
                  language: { n: 5, br: K.qM.readString, bw: K.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  saved_hardware_id: {
                    n: 10,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = K.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class X extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class $ extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.saved_hardware_id || K.Sg($.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  saved_hardware_id: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = K.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT($.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Request";
        }
      }
      class J extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.num_backfilled || K.Sg(J.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  num_backfilled: {
                    n: 1,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = K.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Response";
        }
      }
      class ee extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.reaction_type || K.Sg(ee.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  count: { n: 2, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = K.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class te extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.id || K.Sg(te.M()),
            V.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  id: { n: 1, br: K.qM.readEnum, bw: K.gp.writeEnum },
                  ranges: { n: 2, c: re, r: !0, q: !0 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = K.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class re extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.start || K.Sg(re.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  start: { n: 1, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  end: { n: 2, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = K.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class ne extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.recommendationid || K.Sg(ne.M()),
            V.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  appid: { n: 3, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  review: { n: 4, br: K.qM.readString, bw: K.gp.writeString },
                  time_created: {
                    n: 5,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: K.qM.readFloat, bw: K.gp.writeFloat },
                  language: {
                    n: 10,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: K.qM.readBool, bw: K.gp.writeBool },
                  is_public: { n: 13, br: K.qM.readBool, bw: K.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: K.qM.readEnum,
                    bw: K.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: K.qM.readEnum,
                    pbr: K.qM.readPackedEnum,
                    bw: K.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: K.qM.readFloat,
                    bw: K.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: K.qM.readEnum,
                    bw: K.gp.writeEnum,
                  },
                  refunded: { n: 38, br: K.qM.readBool, bw: K.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  reactions: { n: 40, c: ee, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: K.qM.readInt32,
                    bw: K.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: te, r: !0, q: !0 },
                  saved_hardware_id: {
                    n: 56,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  hardware_cluster_id: {
                    n: 57,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = K.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class ae extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || K.Sg(ae.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = K.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class ie extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.accountids_recommended || K.Sg(ie.M()),
            V.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: K.qM.readUint32,
                    pbr: K.qM.readPackedUint32,
                    bw: K.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: K.qM.readUint32,
                    pbr: K.qM.readPackedUint32,
                    bw: K.gp.writeRepeatedUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = K.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class se extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.requests || K.Sg(se.M()),
            V.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { requests: { n: 1, c: oe, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = K.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class oe extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || K.Sg(oe.M()),
            V.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                  appid: { n: 2, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = K.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class le extends V.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.recommendations || K.Sg(le.M()),
            V.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: { recommendations: { n: 1, c: ne, r: !0, q: !0 } },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = K.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Z().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Z().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Z().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", (0, H.I8)(Y, t), X, {
            ePrivilege: 3,
          });
        }),
          (e.BackfillSavedHardware = function (e, t) {
            return e.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, H.I8)($, t),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, H.I8)(ae, t),
              ie,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, H.I8)(se, t),
              le,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(D || (D = {}));
      var ce = r(41735),
        ue = r.n(ce),
        de = r(3734);
      class me {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = H.w.Init(ae);
          r.Body().set_appid(t);
          const n = await D.GetFriendsRecommendedApp(e, r),
            a = n.GetEResult();
          if (1 == a) return n.Body().toObject();
          throw `Error ${a} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const n = (
            await ue().get(
              `${M.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            n &&
              1 == n.success &&
              (n.results.similar_played_apps &&
                (r.arrSimilarPlayedApps = n.results.similar_played_apps.map(
                  (e) => ({
                    appid: e.appid,
                    playtimeForever: e.playtime_forever,
                  }),
                )),
              n.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
            r
          );
        }
      }
      var pe = r(57834),
        ge = r.n(pe),
        we = r(14336),
        be = r(26505),
        ye = r(6083);
      const fe = new v.wd("AppRelevance").Debug;
      function _e(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: n,
            bHideDescription: a,
            bShowCuratorInfo: i,
            bShowCreatorInfo: s,
          } = e,
          l = (0, be.Nd)(t),
          c = (function (e) {
            const t = (0, o.KV)();
            return (0, O.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => me.LoadFriendsRecommendedApp(t, e),
              enabled: M.iA.logged_in,
            });
          })(t),
          d = (function (e) {
            return (0, O.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => me.LoadStoreRelevanceData(e),
              enabled: M.iA.logged_in,
            });
          })(t),
          p = (function () {
            const { data: e } = (0, de.PG)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          w = (0, O.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              g.A.Get().QueueMultipleAppRequests(
                d.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: d.isSuccess,
          }),
          b = (function (e, t) {
            const r = (0, u.useMemo)(
              () => m.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, O.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => k.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && r && r.length > 0,
            });
          })(t, i),
          y = (0, u.useMemo)(() => {
            let e = [];
            return (
              n &&
                ((e = e.concat(
                  n
                    .GetAllFranchiseCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "franchise" })),
                )),
                (e = e.concat(
                  n
                    .GetAllDeveloperCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "developer" })),
                )),
                (e = e.concat(
                  n
                    .GetAllPublisherCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "publisher" })),
                )),
                (e = e.filter((e) =>
                  m.Fm.Get().BIsFollowingCurator(e.nAccountID),
                ))),
              e
            );
          }, [n]),
          f = (0, O.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              k.ac
                .LoadClanInfoForClanAccountID(y[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: y[0].type })),
            enabled: !!s && y && y.length > 0,
          }),
          v = (0, O.I)({
            queryKey: ["PlayerSummaries", t, r],
            queryFn: async () => {
              let e = [],
                t = [],
                n = [];
              const a = r ? 10 : 1;
              for (
                let t = 0;
                t < c.data.accountids_recommended?.length && t < a;
                t++
              ) {
                const r = L.b.InitFromAccountID(
                  c.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.in_wishlist?.length && e < a; e++) {
                const r = new L.b(l.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < l.data.owns?.length && e < a; e++) {
                const t = new L.b(l.data.owns[e].steamid);
                n.push(t.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: e,
                rgWishlistFriends: t,
                rgOwnedFriends: n,
              };
            },
            enabled: c.isSuccess && l.isSuccess,
          });
        if (
          !p ||
          w.isLoading ||
          d.isLoading ||
          c.isLoading ||
          l.isLoading ||
          b.isLoading ||
          f.isLoading ||
          v.isLoading
        )
          return u.createElement(A.t, { size: "medium", position: "center" });
        let S = [];
        d.isSuccess &&
          d.data.arrSimilarPlayedApps &&
          d.data.arrSimilarPlayedApps.forEach((e) => {
            const r = g.A.Get().GetApp(e.appid);
            r
              ? S.push(
                  u.createElement(Se, {
                    key: e.appid,
                    lifetimePlaytime: e.playtimeForever,
                    storeItem: r,
                  }),
                )
              : console.error("Failed to load store data ", t);
          });
        const h = p.GetItemIDs().findIndex((e) => e.appid === t),
          R = d.data?.bRecommendedByIR,
          E = S.length > 0,
          I = l.data?.owns?.length,
          D = l.data?.in_wishlist?.length,
          T = c.data?.accountids_recommended?.length;
        let C = 0;
        return (
          I > 0 && C++,
          D > 0 && C++,
          T > 0 && C++,
          R && C++,
          h >= 0 && C++,
          S.length > 0 && C++,
          i && b?.data?.length > 0 && C++,
          s && Boolean(f.data) && C++,
          fe(
            "FriendsOwned: ",
            I,
            " FriendsWishlisted: ",
            D,
            "cRecommended: ",
            T,
          ),
          u.createElement(
            u.Fragment,
            null,
            C > 0 &&
              u.createElement(
                u.Fragment,
                null,
                u.createElement(
                  "div",
                  { className: ge().WhyRelevant },
                  (0, B.we)("#DiscoveryQueue_WhyRelevant"),
                ),
                u.createElement(
                  "div",
                  { role: "list", className: ge().RelevantCtn },
                  E &&
                    u.createElement(
                      Ie,
                      { header: (0, B.we)("#DiscoveryQueue_SimilarGames") },
                      u.createElement(
                        "div",
                        { className: ge().ReleventSimilarAppsCtn },
                        S,
                      ),
                    ),
                  i &&
                    b?.data?.length > 0 &&
                    u.createElement(
                      Ie,
                      {
                        header: (0, B.we)(
                          "#ContentHub_Recommendation_Curators",
                        ),
                      },
                      u.createElement(
                        "div",
                        {
                          className: (0, _.A)(
                            ge().ReleventSimilarAppsCtn,
                            ge().RecommendingCuratorsCtn,
                          ),
                        },
                        b.data
                          .filter(Boolean)
                          .map((e) =>
                            u.createElement(ve, {
                              key: "curator_" + e.clanAccountID,
                              curator: e,
                            }),
                          ),
                      ),
                    ),
                  s &&
                    Boolean(f.data) &&
                    u.createElement(Be, { creatorInfo: f.data }),
                  h >= 0 &&
                    u.createElement(Ie, {
                      header: (0, B.um)(
                        "#DiscoveryQueue_TopSellers",
                        (0, ye.D)(h + 1),
                        u.createElement("span", {
                          className: ge().RelevantTextBold,
                        }),
                      ),
                    }),
                  R &&
                    !E &&
                    u.createElement(Ie, {
                      header: (0, B.we)("#DiscoveryQueue_RecommendedByIR"),
                    }),
                  u.createElement(he, {
                    bShowAvatars: r,
                    count: c.data?.accountids_recommended?.length,
                    locToken: "#DiscoveryQueue_FriendsRecommended",
                    arrSteamIDs: v.data?.rgRecommendedFriends,
                  }),
                  u.createElement(he, {
                    bShowAvatars: r,
                    count: l.data?.owns?.length,
                    locToken: "#DiscoveryQueue_FriendsOwned",
                    arrSteamIDs: v.data?.rgOwnedFriends,
                  }),
                  u.createElement(he, {
                    bShowAvatars: r,
                    count: l.data?.in_wishlist?.length,
                    locToken: "#DiscoveryQueue_FriendsWishlisted",
                    arrSteamIDs: v.data?.rgWishlistFriends,
                  }),
                ),
              ),
            a && 0 != C
              ? u.createElement("div", {
                  "aria-label": n.GetShortDescription(),
                })
              : u.createElement(
                  "div",
                  {
                    className: (0, _.A)(ge().AppDescription, C && ge().Divider),
                  },
                  n.GetShortDescription(),
                ),
          )
        );
      }
      function Be(e) {
        const { creatorInfo: t } = e;
        if (!t) return null;
        let r;
        switch (t.type) {
          case "publisher":
            r = "#ContentHub_Recommendation_FollowedPublisher";
            break;
          case "developer":
            r = "#ContentHub_Recommendation_FollowedDeveloper";
            break;
          case "franchise":
            r = "#ContentHub_Recommendation_FollowedFranchise";
        }
        return r
          ? u.createElement(Ie, {
              header: (0, B.PP)(
                r,
                u.createElement(
                  "span",
                  { className: ge().RelevantTextBold },
                  t.clanInfo?.group_name,
                ),
              ),
            })
          : null;
      }
      function ve(e) {
        const { curator: t } = e,
          { creatorHome: r } = (0, j.FV)(t?.clanAccountID);
        return t && r
          ? u.createElement(
              n.Ii,
              { href: r.GetCreatorHomeURL(null) },
              u.createElement("img", { src: t.avatar_medium_url }),
            )
          : null;
      }
      function Se(e) {
        const { lifetimePlaytime: t, storeItem: r } = e;
        return u.createElement(
          "div",
          { className: ge().SimilarAppCtn },
          u.createElement(
            x.Qf,
            {
              item: { type: "game", id: r.GetAppID() },
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
            },
            u.createElement("img", {
              className: ge().SimilarAppImg,
              alt: r.GetName(),
              src: r.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
        );
      }
      function he(e) {
        const { arrSteamIDs: t, count: r, locToken: n, bShowAvatars: a } = e;
        return r
          ? 1 != r || a
            ? u.createElement(
                Ie,
                {
                  header: (0, B.um)(
                    n,
                    r,
                    u.createElement("span", {
                      className: ge().RelevantTextBold,
                    }),
                  ),
                },
                a &&
                  t.length > 0 &&
                  u.createElement(
                    "div",
                    { className: ge().FriendAvatarsCtn },
                    1 == r
                      ? u.createElement(Ee, { steamid: t[0] })
                      : u.createElement(Re, { arrSteamIDs: t }),
                  ),
              )
            : u.createElement(Ie, {
                header: (0, B.PP)(
                  n + "_Single",
                  u.createElement(Me, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function Me(e) {
        const { steamid: t } = e,
          { data: r } = (0, we.js)(t);
        return r && r.m_bInitialized
          ? u.createElement(
              "span",
              {
                "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
                className: ge().RelevantTextBold,
              },
              r.m_strPlayerName,
            )
          : null;
      }
      function Re(e) {
        const { arrSteamIDs: t } = e,
          r = (0, we.DW)(t);
        return u.createElement(
          u.Fragment,
          null,
          r.map(
            ({ data: e }) =>
              e &&
              u.createElement(P.i8, {
                key: e.m_steamid.ConvertTo64BitString(),
                "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                persona: e,
                size: "Small",
                statusPosition: "right",
              }),
          ),
        );
      }
      function Ee(e) {
        const { steamid: t } = e,
          { data: r } = (0, we.js)(t);
        return r
          ? u.createElement(
              a.Z,
              { className: ge().FriendBlockCtn, "data-miniprofile": "s" + t },
              u.createElement(P.i8, {
                persona: r,
                size: "Small",
                statusPosition: "right",
              }),
              u.createElement(G.D, {
                className: ge().PersonaStatus,
                persona: r,
                eFriendRelationship: 3,
                bIsSelf: !1,
                strNickname: null,
                bParenthesizeNicknames: !1,
                bCompactView: !1,
                bNoMask: !0,
              }),
            )
          : null;
      }
      function Ie(e) {
        const { children: t, header: r } = e;
        return u.createElement(
          "div",
          { className: ge().RelevantItem },
          u.createElement(
            "div",
            { className: ge().RelevantCheck },
            u.createElement(b.Jlk, null),
          ),
          u.createElement(
            "div",
            { className: ge().RelevantColumn },
            u.createElement("div", { className: ge().ReleventText }, r),
            t,
          ),
        );
      }
      var De = r(60338),
        Ae = r(52050),
        Te = r(35380);
      new v.wd("DiscoveryQueueApp").Debug;
      function Ce(e) {
        const {
            appID: t,
            nItemHeight: r,
            nItemWidth: n,
            selected: i,
            fnFocused: s,
            eStoreDiscoveryQueueType: o,
            storePageFilter: l,
            bPreferDemoStorePage: c,
            elVideo: m,
            elDetails: p,
            appAriaIDs: g,
          } = e,
          [b] = (0, w.t7)(t, De.Gy),
          y = (0, M.Qn)(),
          f = (0, d.R7)(),
          v = f?.ownerWindow || window,
          S = ze(b, o, l, c),
          { bIsIgnored: h, fnUpdateIgnored: R } = (0, De.TK)(t),
          { bIsWishlisted: E, fnUpdateWishlist: I } = (0, De.u4)(t),
          D = u.useRef(void 0);
        if (
          (u.useEffect(() => {
            i && D.current && D.current.focus({ preventScroll: !0 });
          }, [i]),
          !b)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const A = { width: n || void 0, height: r || void 0 };
        return u.createElement(
          a.Z,
          {
            "aria-labelledby": (0, z.q)(
              g.nameId,
              g.tagsId,
              g.reviewId,
              g.relevanceId,
              g.buttonsId,
            ),
            ref: D,
            style: A,
            className: (0, _.A)(ge().DiscoveryQueueApp, i && ge().Selected),
            onOptionsActionDescription: E
              ? (0, B.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, B.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: I,
            onOKActionDescription: (0, B.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              v.location.href = S;
            },
            onSecondaryActionDescription: h
              ? (0, B.we)("#DiscoveryQueue_Undo")
              : (0, B.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: R,
            fnScrollIntoViewHandler: () => (s(), !0),
          },
          u.createElement(
            "div",
            { className: (0, _.A)(ge().IgnoredCtn, h && ge().Active) },
            u.createElement(
              "div",
              { className: (0, _.A)(ge().IgnoredInfo, h && ge().Active) },
              u.createElement(
                "div",
                { className: ge().IgnoredTitle },
                (0, B.we)("#DiscoveryQueue_Ignored"),
              ),
              u.createElement(
                "div",
                { className: ge().IgnoredDescription },
                (0, B.we)("#DiscoveryQueue_IgnoredConfirmation"),
              ),
              u.createElement(
                a.Z,
                {
                  className: (0, _.A)(ge().QueueButton, ge().UndoIgnoreButton),
                  onClick: R,
                },
                y &&
                  u.createElement(N.$m, {
                    button: W.g4.X,
                    type: N.wt.Light,
                    size: N.xY.Medium,
                  }),
                (0, B.we)("#DiscoveryQueue_Undo"),
              ),
            ),
          ),
          m,
          p,
        );
      }
      function ze(e, t, r, n) {
        const a = (0, c.n9)();
        return u.useMemo(() => {
          if (!e) return;
          const i = (0, R.Bk)(r),
            s = t >= 0 ? "?inqueue=" + t + (r ? "_" + i : "") : "",
            o = (0, c.bV)(a, e.GetStorePageURL(n) + s);
          return (0, U.NT)(o);
        }, [n, t, a, e, r]);
      }
      function Fe(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: r,
            eStoreDiscoveryQueueType: n,
            storePageFilter: i,
            bPreferDemoStorePage: s,
            appAriaIDs: o,
          } = e,
          [l] = (0, w.t7)(t, De.Gy),
          c = (0, Te.$5)(t),
          { bIsIgnored: d, fnUpdateIgnored: m } = (0, De.TK)(t),
          { bIsWishlisted: p, fnUpdateWishlist: g } = (0, De.u4)(t),
          y = ze(l, n, i, s),
          f = (0, M.Qn)(),
          v = f;
        if (!l) return;
        const S = l.GetAssets().GetLibraryCapsuleURL(),
          h = l.GetAssets().GetHeaderURL();
        return u.createElement(
          a.Z,
          { className: ge().AppDetailsCtn },
          u.createElement(
            "div",
            { className: ge().AppDetailsCtnTop },
            S &&
              u.createElement(
                "a",
                { className: (0, _.A)(ge().CapsuleLink), href: y },
                u.createElement("img", {
                  className: ge().AppLibraryHero,
                  src: S,
                }),
                h &&
                  u.createElement("img", { className: ge().AppHeader, src: h }),
              ),
            u.createElement(
              "div",
              { id: o.nameId, className: ge().RightColumn },
              u.createElement(
                "a",
                { className: (0, _.A)(ge().AppName), href: y },
                l.GetName(),
              ),
              u.createElement(F.N, { bSingleLineMode: !0, id: c }),
            ),
            u.createElement(Ne, {
              rgTagIDs: l.GetTagIDs(),
              ariaLabelID: o.tagsId,
            }),
            u.createElement(
              "div",
              { className: ge().AppReviews, id: o.reviewId },
              u.createElement(Ae.J, {
                bShowTooltip: !0,
                bTruncateTotalReviews: r,
                id: c,
              }),
            ),
            u.createElement(
              "div",
              { id: o.relevanceId, className: ge().AppRelevanceCtn },
              u.createElement(_e, {
                bHideDescription: f,
                bShowAvatars: !r,
                storeItem: l,
                appID: t,
              }),
            ),
          ),
          !f &&
            u.createElement(
              "div",
              { className: ge().AppActionButtonsCtn },
              u.createElement(
                "div",
                { id: o.buttonsId, className: ge().AppActionJustButtonsCtn },
                u.createElement(
                  "div",
                  { className: ge().ButtonsRowWrap },
                  l.BHasDemo() &&
                    u.createElement(Q.j, {
                      id: c,
                      className: (0, _.A)(
                        ge().QueueButton,
                        ge().Primary,
                        ge().Launch,
                      ),
                    }),
                  u.createElement(
                    "a",
                    {
                      className: (0, _.A)(ge().QueueButton, ge().Primary),
                      href: y,
                    },
                    v &&
                      u.createElement(N.$m, {
                        button: W.g4.Y,
                        type: N.wt.Light,
                        size: N.xY.Medium,
                        additionalClassName: ge().YGlyph,
                      }),
                    " ",
                    (0, B.we)("#DiscoveryQueue_ViewStorePage"),
                  ),
                  u.createElement(
                    q.he,
                    {
                      toolTipContent: p
                        ? (0, B.we)("#RemoveFromWishlist_ttip")
                        : (0, B.we)("#AddToWishlist_ttip"),
                    },
                    u.createElement(
                      a.Z,
                      {
                        "aria-label": p
                          ? (0, B.we)("#Sale_RemoveFromWishlist")
                          : (0, B.we)("#Sale_AddToWishlist"),
                        focusable: !0,
                        className: (0, _.A)(ge().QueueButton, p && ge().Active),
                        onClick: g,
                      },
                      v &&
                        u.createElement(N.$m, {
                          button: W.g4.Y,
                          type: N.wt.Light,
                          size: N.xY.Medium,
                          additionalClassName: ge().YGlyph,
                        }),
                      p
                        ? u.createElement(b.qnF, null)
                        : u.createElement(b.T4m, null),
                    ),
                  ),
                  u.createElement(
                    q.he,
                    {
                      toolTipContent: (0, B.we)(
                        "#SaleTrailerCarousel_IgnoreLink_ttip",
                      ),
                    },
                    u.createElement(
                      a.Z,
                      {
                        "aria-label": (0, B.we)("#DiscoveryQueue_IgnoreLink"),
                        focusable: !0,
                        className: (0, _.A)(ge().QueueButton, d && ge().Active),
                        onClick: m,
                      },
                      u.createElement(b.NtH, null),
                    ),
                  ),
                ),
              ),
            ),
        );
      }
      function Ne(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          n = [...(0, De.W3)(t)].slice(0, 8);
        return u.createElement(
          "div",
          { id: r, role: "list", className: ge().AppTagsCtn },
          n.map((e) =>
            u.createElement(C.Fz, {
              key: e,
              className: ge().TagEntry,
              tagID: e,
            }),
          ),
        );
      }
      var qe = r(60884),
        Ue = r(90511),
        We = r(17376);
      const Qe = new v.wd("DiscoveryQueueWizard").Debug,
        Oe = 1,
        Pe = 1400,
        Ge = "discoveryqueue2022";
      async function Le(e, t, r, n) {
        let a = [],
          i = !1;
        try {
          const { appids: s, exhausted: o } = await R.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, n);
          (a = [...s]),
            (i = o),
            r && -1 === a.findIndex((e) => e === r) && a.unshift(r),
            await g.A.Get().QueueMultipleAppRequests(a, { ...De.Gy, ...Ue.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: a, exhausted: i };
      }
      function ke(e) {
        const [t, r] = u.useState(!1),
          n = (0, o.KV)();
        return (
          (0, u.useEffect)(() => {
            R.aI.Init(n), r(!0);
          }, [n]),
          t ? u.createElement(je, { ...e }) : null
        );
      }
      function je(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            includeAppID: i,
            storePageFilter: o,
            bPreferDemoStorePage: p,
            bShowAOAutoPlayWarning: g,
          } = e,
          [w, v] = u.useState(0),
          [E, I] = u.useState(void 0),
          [D, A] = u.useState(0),
          C = (0, d.R7)(),
          z = C?.ownerWindow || window,
          F = (0, c.ru)(Ge),
          [N, q] = u.useState(0),
          W = (0, l.b)();
        (0, h.E)("ArrowLeft", () => G(!1), !0, !0),
          (0, h.E)("Left", () => G(!1), !0, !0),
          (0, h.E)("ArrowRight", () => G(!0), !0, !0),
          (0, h.E)("Right", () => G(!0), !0, !0),
          (0, h.E)("Escape", () => r?.(), !0, !0),
          (0, h.E)("Esc", () => r?.(), !0, !0);
        const Q = u.useMemo(() => Boolean(z.innerWidth < Pe), [z]),
          { fnGetDiscoveryQueue: O, rgAppIDs: P } = (function (e, t, r) {
            const [n, a] = u.useState([]),
              i = (0, f.m)("DiscoveryQueueWizard"),
              s = async (s) => {
                let { appids: o } = await Le(e, !s, s && r, t);
                if (s && !o.length) {
                  let { appids: r } = await Le(e, !0, void 0, t);
                  o = r;
                }
                if (!i?.token?.reason) {
                  const e = [...(n ?? []), ...o, Oe];
                  a(e);
                }
                Qe("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: s, rgAppIDs: n };
          })(t, o, i);
        u.useEffect(() => {
          O(!0), m.Fm.Get().HintLoad();
        }, []),
          u.useEffect(() => {
            const e = P[w];
            e != E && (e && e != Oe && W.AddImpression(e, F), I(e));
          }, [W, w, E, P, F]);
        const G = (e) => {
          const t = S.OQ(w + (e ? 1 : -1), 0, P.length - 1);
          t != w &&
            (v(t), Qe("New selected index: ", t, " Prev selected index: ", w));
        };
        u.useEffect(() => {
          P?.length &&
            P[w] !== Oe &&
            (q((e) => e + 1),
            R.aI
              .Get()
              .SkipDiscoveryQueueItem(P[w], t, o)
              .then(() => q((e) => e - 1)));
        }, [t, w, P, o]),
          u.useEffect(() => {
            P.length != D &&
              (A(P.length), P.length > D && P[w] == Oe && v(w + 1));
          }, [D, w, P]);
        const [L] = u.useState(new Map()),
          k = (0, R.WX)(t, o),
          j = !(0, T.c5)() && w > 0,
          x = !(0, T.c5)() && w < P.length - 1,
          {
            refContainer: H,
            bIsDragging: V,
            nDragOffset: Z,
            nDragSelectedOffsetIndex: K,
            handleTouchStart: Y,
            handleTouchMove: X,
            handleTouchEnd: $,
          } = (function (e, t) {
            const r = u.useRef(null),
              [n, a] = u.useState(0),
              [i, s] = u.useState(!1),
              [o, l] = u.useState(0),
              c = u.useRef(0),
              d = 50,
              m = (e) => {
                s(!0), (c.current = e.touches[0].clientX), a(0), l(0);
              },
              p = (e) => {
                if (!i) return;
                const t = e.touches[0].clientX - c.current;
                a(t), l(n > d ? 1 : n < -d ? -1 : 0);
              },
              g = () => {
                i &&
                  (s(!1),
                  n > d
                    ? e((e) => Math.max(e - 1, 0))
                    : n < -d && e((e) => Math.min(e + 1, t - 1)),
                  a(0),
                  l(0));
              };
            return {
              refContainer: r,
              bIsDragging: i,
              nDragOffset: n,
              nDragSelectedOffsetIndex: o,
              handleTouchStart: m,
              handleTouchMove: p,
              handleTouchEnd: g,
            };
          })((e) => v(e), P.length),
          J = (e) => S.W(w + e, P) && (S.LA(e, -1, 1) || V),
          ee = (0, c.aL)(M.TS.STORE_BASE_URL + "explore?dq=widget"),
          te = P[w] !== Oe,
          { nQueueStart: re, nCount: ne } = (function (e, t) {
            let r = 0;
            for (let n = 0; n < e; n++) t[n] == Oe && (r = n + 1);
            let n = 0;
            for (let r = e; r < t.length; r++) {
              if (t[r] == Oe) {
                n = r;
                break;
              }
              r == t.length - 1 && (n = t.length);
            }
            const a = n - r;
            return { nQueueStart: r, nQueueEnd: n, nCount: a };
          })(w, P);
        return u.createElement(
          y.Ay,
          { feature: Ge },
          u.createElement(
            a.Z,
            {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: ge().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: s.iU.LAST,
              onCancelButton: () => r?.(),
              onCancelActionDescription: (0, B.we)("#Button_Close"),
            },
            u.createElement(
              "div",
              {
                className: ge().DiscoveryQueueWrapper,
                onClick: (e) => {
                  e.target == e.currentTarget && (r?.(), e.stopPropagation());
                },
              },
              k.length > 0 &&
                u.createElement(
                  a.Z,
                  {
                    "flow-children": "row",
                    className: ge().DiscoveryQueueName,
                  },
                  k,
                ),
              u.createElement(
                a.Z,
                { "flow-children": "row", className: ge().TopBarCtn },
                u.createElement(
                  a.Z,
                  { className: ge().LearnMore },
                  (0, B.oW)(
                    "#DiscoveryQueue_LearnMore_Default",
                    u.createElement(n.Ii, {
                      className: ge().LearnMoreLink,
                      href: (0, U.NT)(ee),
                    }),
                  ),
                ),
                u.createElement(
                  a.Z,
                  { className: ge().ControlsCtn },
                  u.createElement(
                    a.Z,
                    {
                      focusable: !0,
                      className: ge().QueueButton,
                      onClick: r,
                      "aria-label": (0, B.we)("#Button_Close"),
                      onActivate: () => r && r(),
                    },
                    u.createElement(b.X, null),
                  ),
                ),
              ),
              u.createElement(
                a.Z,
                {
                  role: "button",
                  "aria-label": (0, B.we)("#Carousel_Next"),
                  onClick: () => G(!1),
                  className: (0, _.A)(
                    ge().QueueNavArrow,
                    ge().LeftArrow,
                    j && ge().Enable,
                  ),
                },
                u.createElement(b.l8x, { angle: 180 }),
              ),
              u.createElement(
                a.Z,
                {
                  role: "button",
                  "aria-label": (0, B.we)("#Carousel_Prev"),
                  onClick: () => G(!0),
                  className: (0, _.A)(
                    ge().QueueNavArrow,
                    ge().RightArrow,
                    x && ge().Enable,
                  ),
                },
                u.createElement(b.l8x, { angle: 0 }),
              ),
              u.createElement(
                a.Z,
                {
                  ref: H,
                  className: ge().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: Y,
                  onTouchMove: X,
                  onTouchEnd: $,
                },
                [-2, -1, 0, 1, 2].map((e) =>
                  u.createElement(
                    "div",
                    {
                      key: w + e,
                      className: (0, _.A)({
                        [ge().DiscoveryQueueItemPositioner]: !0,
                        [ge().Dragging]: V,
                        [ge().InRange]: J(e),
                        [ge().FarLeft]: -2 == e,
                        [ge().Left]: -1 == e,
                        [ge().Current]: 0 == e,
                        [ge().Right]: 1 == e,
                        [ge().FarRight]: 2 == e,
                        [ge().Selected]: e + K == 0,
                      }),
                      style: { "--dragOffsetX": `${Z}px` },
                    },
                    J(e) &&
                      u.createElement(xe, {
                        eStoreDiscoveryQueueType: t,
                        storePageFilter: o,
                        rgAppIDs: P,
                        index: w + e,
                        bShowMinimizedDisplay: Q,
                        selectedIndex: w,
                        bPreferDemoStorePage: Boolean(p),
                        mapViewedAppCount: L,
                        fnCloseModal: r,
                        fnLoadNextQueue: () => O(!1),
                        fnAdvance: G,
                        bSkipAppRequestPending: Boolean(0 != N),
                        showAOAutoPlayWarning: Boolean(g),
                      }),
                  ),
                ),
              ),
              u.createElement(qe.A, {
                className: (0, _.A)(!te && ge().ProgressHidden),
                showPriorAsActive: !0,
                count: ne,
                selectedIndex: w - re,
              }),
            ),
          ),
        );
      }
      function xe(e) {
        const {
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            rgAppIDs: n,
            index: a,
            bShowMinimizedDisplay: i,
            selectedIndex: s,
            bPreferDemoStorePage: o,
            mapViewedAppCount: l,
            fnCloseModal: c,
            fnLoadNextQueue: d,
            fnAdvance: m,
            bSkipAppRequestPending: p,
            showAOAutoPlayWarning: g,
          } = e,
          [w, b] = u.useState(!1),
          y = {
            nameId: u.useId(),
            tagsId: u.useId(),
            reviewId: u.useId(),
            relevanceId: u.useId(),
            buttonsId: u.useId(),
          },
          f = () => {
            s != a && m(a > s);
          },
          _ = s === a,
          B = u.useRef(_);
        if (
          (u.useEffect(() => {
            const e = B.current;
            if (((B.current = _), e && !_)) {
              b(!0);
              const e = setTimeout(() => b(!1), 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [_]),
          n[a] == Oe)
        ) {
          let i = 0;
          for (let e = a - 1; e >= 0; e--) n[e] == Oe && (i += 1);
          let o = 0;
          for (let e = a - 1; e >= 0 && n[e] !== Oe; e--) o++;
          return (
            l.has(i) ||
              l.set(i, R.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r)),
            u.createElement(He, {
              ...e,
              key: s,
              selected: _,
              lastCard: s == n.length - 1,
              fnLoadNextQueue: d,
              fnCloseModal: c,
              summaryCardIndex: i,
              eStoreDiscoveryQueueType: t,
              viewedAppCount: (l.get(i) || 0) + o,
              fnFocused: f,
              fnAdvance: () => m(!0),
              bSkipAppRequestPending: p,
            })
          );
        }
        const v = _ || B.current || w;
        return u.createElement(Ce, {
          appAriaIDs: y,
          eStoreDiscoveryQueueType: t,
          storePageFilter: r,
          selected: _,
          appID: n[a],
          bPreferDemoStorePage: o,
          fnFocused: f,
          elVideo: u.createElement(De.y3, {
            appID: n[a],
            focused: v,
            showAOAutoPlayWarning: g,
          }),
          elDetails: u.createElement(Fe, {
            appID: n[a],
            bShowMinimizedDisplay: i,
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            bPreferDemoStorePage: o,
            appAriaIDs: y,
          }),
        });
      }
      function He(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            summaryCardIndex: n,
            lastCard: i,
            selected: s,
            fnLoadNextQueue: o,
            storePageFilter: l,
            fnDisplaySummaryReward: d,
            viewedAppCount: g,
            fnFocused: w,
            fnAdvance: b,
            bSkipAppRequestPending: y,
          } = e,
          [v, S] = u.useState(!1),
          h = (0, M.Qn)(),
          E = (0, p.Qt)(2, M.TS.LANGUAGE, !1),
          [I, D] = u.useState(0),
          [A, T] = u.useState(0),
          { data: C } = (0, We.F0)();
        u.useEffect(() => {
          s &&
            !v &&
            C &&
            m.Fm.Get()
              .HintLoad()
              .then(() => {
                R.aI
                  .Get()
                  .LoadSkippedApps(t, l)
                  .then((e) => {
                    D(e.reduce((e, t) => (C.has(t) ? e + 1 : e), 0)),
                      T(
                        e.reduce(
                          (e, t) => (m.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      S(!0);
                  });
              });
        }, [v, t, s, l, C]);
        const [z, F] = u.useState(!1),
          N = (0, R.IH)(t, l),
          q = (0, f.m)("DiscoveryQueueSummary"),
          W = async () => {
            i ? z || (F(!0), await o(), q?.token?.reason || F(!1)) : b();
          };
        return u.createElement(
          Ve,
          {
            selected: s,
            fnFocused: w,
            fnOnContinue: W,
            fnCloseModal: r,
            bLoaded: v,
          },
          u.createElement(
            "div",
            { className: ge().SummaryContentCtn },
            u.createElement(
              "div",
              { className: ge().SummaryTitle },
              (0, B.we)("#DiscoveryQueue_SummaryTitle"),
            ),
            !N &&
              s &&
              E.data?.definition &&
              u.createElement(Ke, {
                bSkipAppRequestPending: y,
                summaryCardIdx: n,
              }),
            u.createElement(
              "div",
              { className: ge().YourStats },
              (0, B.we)("#DiscoveryQueue_YourStats"),
            ),
            u.createElement(
              a.Z,
              { "flow-children": "row", className: ge().SummaryGrid },
              u.createElement(
                "div",
                { className: ge().GridItem },
                u.createElement(
                  "div",
                  { className: ge().GridTitle },
                  (0, B.we)("#DiscoveryQueue_ViewedCaps"),
                ),
                u.createElement(
                  "div",
                  { className: ge().GridNumber },
                  (0, ye.D)(g),
                ),
                u.createElement(
                  "div",
                  { className: ge().GridSubTitle },
                  (0, B.we)("#DiscoveryQueue_Titles"),
                ),
              ),
              u.createElement(
                "div",
                { className: ge().GridItem },
                u.createElement(
                  "div",
                  { className: ge().GridTitle },
                  (0, B.we)("#DiscoveryQueue_WishlistedCaps"),
                ),
                u.createElement(
                  "div",
                  { className: ge().GridNumber },
                  (0, ye.D)(I),
                ),
                u.createElement(
                  c.Fh,
                  {
                    className: (0, _.A)(ge().GridSubTitle, ge().TextLink),
                    href: (0, U.NT)(M.TS.STORE_BASE_URL + "wishlist"),
                  },
                  (0, B.we)("#DiscoveryQueue_ViewWishlist"),
                ),
              ),
              u.createElement(
                "div",
                { className: ge().GridItem },
                u.createElement(
                  "div",
                  { className: ge().GridTitle },
                  (0, B.we)("#DiscoveryQueue_IgnoredCaps"),
                ),
                u.createElement(
                  "div",
                  { className: ge().GridNumber },
                  (0, ye.D)(A),
                ),
                u.createElement(
                  c.Fh,
                  {
                    className: (0, _.A)(ge().GridSubTitle, ge().TextLink),
                    href: (0, U.NT)(
                      M.TS.STORE_BASE_URL + "account/notinterested",
                    ),
                  },
                  (0, B.we)("#DiscoveryQueue_ViewIgnored"),
                ),
              ),
            ),
            !h &&
              u.createElement(
                a.Z,
                { className: ge().SummaryActionButtonsCtn },
                u.createElement(
                  a.Z,
                  {
                    className: (0, _.A)(ge().QueueButton, ge().Wide),
                    onClick: r,
                  },
                  (0, B.we)("#ActionButtonLabelDone"),
                ),
                !N &&
                  u.createElement(
                    a.Z,
                    {
                      className: (0, _.A)(
                        z && ge().Disabled,
                        ge().QueueButton,
                        ge().Primary,
                        ge().Wide,
                      ),
                      onClick: W,
                    },
                    z ? (0, B.we)("#Loading") : (0, B.we)("#Button_Continue"),
                  ),
              ),
          ),
          Boolean(!N) &&
            u.createElement(u.Fragment, null, Boolean(d) && d(n + 1)),
        );
      }
      function Ve(e) {
        const {
            children: t,
            selected: r,
            fnOnContinue: n,
            fnCloseModal: a,
            fnFocused: s,
            bLoaded: o,
          } = e,
          l = (0, c.aL)(M.TS.STORE_BASE_URL + "wishlist"),
          m = (0, d.R7)(),
          p = m?.ownerWindow || window,
          g = u.useRef(void 0);
        return (
          u.useEffect(() => {
            r && g.current && g.current.focus({ preventScroll: !0 });
          }, [r]),
          u.createElement(
            i.YZ,
            {
              ref: g,
              "aria-live": "polite",
              className: (0, _.A)(
                ge().SummaryCtn,
                ge().DiscoveryQueueApp,
                r && ge().Selected,
              ),
              onOptionsActionDescription: (0, B.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: () => {
                p.location.href = (0, U.NT)(l);
              },
              onOKActionDescription: (0, B.we)("#Button_Continue"),
              onOKButton: () => {
                n();
              },
              onCancelActionDescription: (0, B.we)("#ActionButtonLabelDone"),
              onCancelButton: () => a && a(),
              fnScrollIntoViewHandler: () => (s(), !0),
            },
            o
              ? t
              : u.createElement(A.t, {
                  className: ge().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          )
        );
      }
      function Ze() {
        return u.createElement(
          a.Z,
          { className: ge().SaleRewardsCtn },
          u.createElement(A.t, { size: "large", position: "center" }),
        );
      }
      function Ke(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t
          ? u.createElement(Ze, null)
          : u.createElement(Ye, { summaryCardIdx: r });
      }
      function Ye(e) {
        const { summaryCardIdx: t } = e,
          r = (0, p.os)(2, M.TS.LANGUAGE, !1, t.toString()),
          [n] = (0, w.t7)(r?.data?.current_def?.appid, {}),
          i = (0, M.Qn)();
        if (!r?.data?.current_def || !n?.GetName().length)
          return u.createElement(Ze, null);
        const s = r.data.num_items_earned,
          o = r.data.current_def.num_items_per_def,
          l = o - s,
          c = (s / o) * 100;
        return u.createElement(
          a.Z,
          { className: ge().SaleRewardsCtn },
          u.createElement(I, { nPercent: c, size: 70, strokeWidth: 12 }),
          u.createElement(
            a.Z,
            { className: ge().RewardStatusCtn },
            u.createElement(
              "div",
              { className: ge().SaleRewardAppTitle },
              (0, B.we)(
                "#DiscoveryQueue_SaleStatus_Title" + (l ? "" : "_Complete"),
                (0, ye.D)(s),
                n.GetName(),
              ),
            ),
            l > 0 &&
              u.createElement(
                "div",
                { className: ge().SaleRewardAppTitle },
                (0, B.we)(
                  "#DiscoveryQueue_SaleStatus_Desc",
                  (0, ye.D)(l),
                  n.GetName(),
                ),
              ),
            !i &&
              u.createElement(
                "a",
                {
                  href: (0, U.NT)(
                    M.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                  ),
                },
                (0, B.we)("#DiscoveryQueue_SaleStatus_Link"),
              ),
          ),
        );
      }
    },
    47554: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => b });
      var n = r(90626),
        a = r(75422),
        i = r(76217),
        s = r(39199),
        o = r(55263),
        l = r(95034),
        c = r(12155),
        u = r(26749),
        d = r(61859),
        m = r(71109),
        p = r.n(m),
        g = r(78327),
        w = r(90511);
      function b(e) {
        const { appID: t } = e,
          r = (0, u.G)(),
          [m] = (0, l.QD)("inqueue", "0"),
          [b, y] = (0, n.useState)(!1),
          [f] = (0, o.t7)(t, { include_assets: !0 }),
          _ = n.useRef(void 0);
        n.useEffect(() => _.current?.Activate(!0), []);
        const B = (0, g.Qn)(),
          { eStoreDiscoveryQueueType: v, storePageFilter: S } =
            n.useMemo(() => {
              if (m?.length > 0) {
                const e = m.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, s.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [m]),
          { showDiscoveryQueue: h } = (0, w.GV)(v, {
            includeAppID: t,
            storePageFilter: S,
          }),
          M = n.useCallback(() => {
            y(!0);
          }, []),
          R = (0, s.WX)(v, S);
        return r && f
          ? b
            ? null
            : n.createElement(
                a.u,
                { navTreeRef: _, navID: "DiscoveryQueueAppWidget" },
                n.createElement(
                  i.Z,
                  {
                    focusable: !0,
                    className: p().DiscoveryQueueWidgetCtn,
                    onSecondaryButton: M,
                    onOKButton: h,
                    onOKActionDescription: (0, d.we)(
                      "#DiscoveryQueue_ResumeWizard",
                    ),
                    onSecondaryActionDescription: (0, d.we)("#Button_Close"),
                  },
                  n.createElement(
                    "div",
                    { onClick: h, className: p().WidgetText },
                    n.createElement(c.mcU, null),
                    (0, d.we)("#DiscoveryQueue_ResumeWizard"),
                    R?.length > 0 && ": " + R,
                  ),
                  !B &&
                    n.createElement(
                      "div",
                      { className: p().CloseButton, onClick: M },
                      n.createElement(c.X, null),
                    ),
                ),
              )
          : null;
      }
    },
    6804: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var n = r(75422),
        a = r(90626),
        i = r(96236),
        s = r(38405);
      function o() {
        return a.createElement(
          i.K,
          { placeholderHeight: "200px", rootMargin: "0px 0px 100% 0px" },
          a.createElement(
            n.u,
            { navID: "DiscoveryQueueWidget" },
            a.createElement(s.g, { eStoreDiscoveryQueueType: 0 }),
          ),
        );
      }
    },
    25054: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => d });
      var n = r(90626),
        a = r(61859),
        i = r(26749),
        s = r(76217),
        o = r(78327),
        l = r(51706),
        c = r(738),
        u = r(90511);
      function d(e) {
        const t = (0, i.G)(),
          { showDiscoveryQueue: r } = (0, u.GV)(0),
          d = n.useCallback(() => {
            o.iA.logged_in
              ? r()
              : (0, c.pg)(
                  n.createElement(l.KG, {
                    onOK: () => {
                      window.location.href = `${o.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, a.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, a.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, a.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, [r]);
        return t
          ? n.createElement(
              s.Z,
              null,
              n.createElement(
                "a",
                { onClick: d, className: "experiment-button" },
                (0, a.we)("#DiscoveryQueue_OpenWizard"),
              ),
            )
          : n.createElement(
              "div",
              { className: "experiment-button-placeholder" },
              " ",
            );
      }
    },
    61855: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      const n =
        r.p +
        "images/applications/store/defaultappheader.png?v=valveisgoodatcaching";
    },
  },
]);
