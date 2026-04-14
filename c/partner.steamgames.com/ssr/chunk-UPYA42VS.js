var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = class _ extends _.Message {
  static ImplementsStaticInterface() {}
  constructor(_ = null) {
    super(),
      _.prototype._ || _(_._()),
      _.Message.initialize(this, _, 0, -1, void 0, null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      _.sm_m ||
        (_.sm_m = {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            _: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
          },
        }),
      _.sm_m
    );
  }
  static MBF() {
    return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
  }
  toObject(_ = !1) {
    return _.toObject(_, this);
  }
  static toObject(_, _) {
    return _(_._(), _, _);
  }
  static fromObject(_) {
    return _(_._(), _);
  }
  static deserializeBinary(_) {
    let _ = new _.default.BinaryReader(_),
      _ = new _();
    return _.deserializeBinaryFromReader(_, _);
  }
  static deserializeBinaryFromReader(_, _) {
    return _(_.MBF(), _, _);
  }
  serializeBinary() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
  }
  static serializeBinaryToWriter(_, _) {
    _(_._(), _, _);
  }
  serializeBase64String() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
  }
  getClassName() {
    return "CMsgIPAddress";
  }
};
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.dst_gcid_queue || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              dst_gcid_queue: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              dst_gc_dir_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CMsgGCRoutingProtoBufHeader";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [27, 41], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              client_sessionid: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              routing_appid: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              jobid_source: {
                _: 10,
                _: "18446744073709551615",
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              jobid_target: {
                _: 11,
                _: "18446744073709551615",
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              target_job_name: {
                _: 12,
                _: _.readString,
                _: _.writeString,
              },
              seq_num: {
                _: 24,
                _: _.readInt32,
                _: _.writeInt32,
              },
              eresult: {
                _: 13,
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              error_message: {
                _: 14,
                _: _.readString,
                _: _.writeString,
              },
              _: {
                _: 15,
                _: _.readUint32,
                _: _.writeUint32,
              },
              ip_v6: {
                _: 29,
                _: _.readBytes,
                _: _.writeBytes,
              },
              auth_account_flags: {
                _: 16,
                _: _.readUint32,
                _: _.writeUint32,
              },
              token_source: {
                _: 22,
                _: _.readUint32,
                _: _.writeUint32,
              },
              admin_spoofing_user: {
                _: 23,
                _: _.readBool,
                _: _.writeBool,
              },
              transport_error: {
                _: 17,
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              messageid: {
                _: 18,
                _: "18446744073709551615",
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              publisher_group_id: {
                _: 19,
                _: _.readUint32,
                _: _.writeUint32,
              },
              sysid: {
                _: 20,
                _: _.readUint32,
                _: _.writeUint32,
              },
              webapi_key_id: {
                _: 25,
                _: _.readUint32,
                _: _.writeUint32,
              },
              is_from_external_source: {
                _: 26,
                _: _.readBool,
                _: _.writeBool,
              },
              forward_to_sysid: {
                _: 27,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              cm_sysid: {
                _: 28,
                _: _.readUint32,
                _: _.writeUint32,
              },
              launcher_type: {
                _: 31,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              realm: {
                _: 32,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timeout_ms: {
                _: 33,
                _: -1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              debug_source: {
                _: 34,
                _: _.readString,
                _: _.writeString,
              },
              debug_source_string_index: {
                _: 35,
                _: _.readUint32,
                _: _.writeUint32,
              },
              token_id: {
                _: 36,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              routing_gc: {
                _: 37,
                _: _,
              },
              session_disposition: {
                _: 38,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              wg_token: {
                _: 39,
                _: _.readString,
                _: _.writeString,
              },
              webui_auth_key: {
                _: 40,
                _: _.readString,
                _: _.writeString,
              },
              exclude_client_sessionids: {
                _: 41,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              admin_request_spoofing_steamid: {
                _: 43,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              is_valveds: {
                _: 44,
                _: _.readBool,
                _: _.writeBool,
              },
              trace_tag: {
                _: 45,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CMsgProtoBufHeader";
    }
  };
var _ = class _ extends _.Message {
  static ImplementsStaticInterface() {}
  constructor(_ = null) {
    super(),
      _.prototype.appid || _(_._()),
      _.Message.initialize(this, _, 0, -1, [17, 18], null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      _.sm_m ||
        (_.sm_m = {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            icon: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            tool: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            demo: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            media: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            community_visible_stats: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            friendly_name: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            propagation: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            has_adult_content: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            is_visible_in_steam_china: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            app_type: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            has_adult_content_sex: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            has_adult_content_violence: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            content_descriptorids: {
              _: 17,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            content_descriptorids_including_dlc: {
              _: 18,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
      _.sm_m
    );
  }
  static MBF() {
    return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
  }
  toObject(_ = !1) {
    return _.toObject(_, this);
  }
  static toObject(_, _) {
    return _(_._(), _, _);
  }
  static fromObject(_) {
    return _(_._(), _);
  }
  static deserializeBinary(_) {
    let _ = new _.default.BinaryReader(_),
      _ = new _();
    return _.deserializeBinaryFromReader(_, _);
  }
  static deserializeBinaryFromReader(_, _) {
    return _(_.MBF(), _, _);
  }
  serializeBinary() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
  }
  static serializeBinaryToWriter(_, _) {
    _(_._(), _, _);
  }
  serializeBase64String() {
    var _ = new _.default.BinaryWriter();
    return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
  }
  getClassName() {
    return "CCDDBAppDetailCommon";
  }
};
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              language: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              localized_string: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CLocalizationToken";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              clanid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              event_gid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              announcement_gid: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              rtime_start: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime_end: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              priority_score: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              type: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              clamp_range_slot: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              appid: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime32_last_modified: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CClanEventUserNewsTuple";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rtime_before || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              rtime_before: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime_after: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              qualified: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              events: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CClanMatchEventByRange";
    }
  };
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_descriptors_to_exclude || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              content_descriptors_to_exclude: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "UserContentDescriptorPreferences";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_descriptorid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              content_descriptorid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_added: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "UserContentDescriptorPreferences_ContentDescriptor";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.manufacturer || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              manufacturer: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              model: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              dx_video_card: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              dx_vendorid: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              dx_deviceid: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              num_gpu: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              system_ram: {
                _: 7,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              _: {
                _: 8,
                _: _.readString,
                _: _.writeString,
              },
              cpu_vendor: {
                _: 9,
                _: _.readString,
                _: _.writeString,
              },
              cpu_name: {
                _: 10,
                _: _.readString,
                _: _.writeString,
              },
              gaming_device_type: {
                _: 11,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dx_driver_version: {
                _: 12,
                _: _.readString,
                _: _.writeString,
              },
              adapter_description: {
                _: 14,
                _: _.readString,
                _: _.writeString,
              },
              driver_version: {
                _: 15,
                _: _.readString,
                _: _.writeString,
              },
              driver_date: {
                _: 16,
                _: _.readString,
                _: _.writeString,
              },
              vram_size: {
                _: 17,
                _: _.readUint32,
                _: _.writeUint32,
              },
              screen_width: {
                _: 18,
                _: _.readUint32,
                _: _.writeUint32,
              },
              screen_height: {
                _: 19,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "UserSystemInformation";
    }
  };
var _ = class {
    m_nOffset;
    m_nLength;
    m_viewPacket;
    m_rgubPacket;
    m_iGet;
    m_iPut;
    constructor(_, _ = 0, _) {
      (this.m_nOffset = _ || 0),
        _ instanceof Uint8Array || _ instanceof DataView
          ? ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
            (this.m_nOffset += _.byteOffset),
            (this.m_viewPacket = new DataView(
              _.buffer,
              this.m_nOffset,
              this.m_nLength,
            )))
          : ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
            (this.m_viewPacket = new DataView(
              _,
              this.m_nOffset,
              this.m_nLength,
            ))),
        (this.m_rgubPacket = new Uint8Array(
          this.m_viewPacket.buffer,
          this.m_viewPacket.byteOffset,
          this.m_viewPacket.byteLength,
        )),
        (this.m_iGet = 0),
        (this.m_iPut = 0);
    }
    TellGet() {
      return this.m_iGet + this.m_viewPacket.byteOffset;
    }
    GetPacket() {
      return this.m_viewPacket.buffer;
    }
    GetUint8() {
      return this.m_viewPacket.getUint8(this.m_iGet++);
    }
    GetUint32(_ = !0) {
      let _ = this.m_viewPacket.getUint32(this.m_iGet, _);
      return (this.m_iGet += 4), _;
    }
    SeekGetHead(_ = 0) {
      this.m_iGet = _ || 0;
    }
    SeekGetCurrent(_) {
      this.m_iGet += _;
    }
    TellPut() {
      return this.m_iPut + this.m_viewPacket.byteOffset;
    }
    TellMaxPut() {
      return this.m_viewPacket.byteLength;
    }
    PutUint8(_) {
      this.m_viewPacket.setUint8(this.m_iPut++, _);
    }
    PutUint32(_, _ = !0) {
      this.m_viewPacket.setUint32(this.m_iPut, _, _), (this.m_iPut += 4);
    }
    PutBytes(_) {
      this.m_rgubPacket.set(_, this.m_iPut), (this.m_iPut += _.length);
    }
    SeekPut(_) {
      this.m_iPut += _;
    }
    GetCountBytesRemaining() {
      return this.m_viewPacket.byteLength - this.m_iGet;
    }
  },
  _ = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
function _(_) {
  let _ = "";
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    _ += _[_ >>> 4] + _[_ & 15];
  }
  return _;
}
var _ = 8,
  _ = class _ {
    static sm_ErrorReportingStore;
    static InstallErrorReportingStore(_) {
      this.sm_ErrorReportingStore = _;
    }
    static InitHeaderFromPacket(_) {
      return new _(void 0, _);
    }
    m_eMsg;
    m_bValid;
    m_netPacket;
    m_cubHeader;
    m_header;
    m_body;
    constructor(_, _, _, _, _, _) {
      if (_)
        (this.m_eMsg = _.m_eMsg),
          (this.m_bValid = _.m_bValid),
          this.m_bValid &&
            ((this.m_netPacket = _.m_netPacket),
            (this.m_cubHeader = _.m_cubHeader),
            (this.m_header = _.m_header),
            this.InitForType(_));
      else {
        if (((this.m_header = new _(null)), (this.m_bValid = !0), _))
          if (
            ((this.m_netPacket = _),
            this.m_netPacket.SeekGetHead(),
            (this.m_eMsg = this.m_netPacket.GetUint32()),
            this.m_eMsg & 2147483648)
          ) {
            (this.m_eMsg = this.m_eMsg & 2147483647),
              (this.m_cubHeader = this.m_netPacket.GetUint32());
            try {
              _.deserializeBinaryFromReader(
                this.m_header,
                new _.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_cubHeader,
                ),
              ),
                this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                _ && this.InitForType(_);
            } catch (_) {
              console.error("Exception deserializing protobuf", _),
                (this.m_bValid = !1);
            }
          } else this.m_bValid = !1;
        else
          _ && (this.m_eMsg = _),
            _ && _
              ? (this.m_body = _.fromObject(_))
              : _ && (this.m_body = new _());
        _ && this.m_header.set_jobid_target(_.Hdr().jobid_target());
      }
    }
    InitForType(_) {
      (this.m_body = new _()),
        this.m_netPacket &&
          (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
          this.ReadBodyFromBuffer(_, this.m_netPacket));
    }
    ReadBodyFromBuffer(_, _) {
      try {
        _.deserializeBinaryFromReader(
          this.m_body,
          new _.BinaryReader(
            _.GetPacket(),
            _.TellGet(),
            _.GetCountBytesRemaining(),
          ),
        );
      } catch (_) {
        this.m_bValid = !1;
        let _ = _.sm_ErrorReportingStore,
          _ = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
        _ &&
          _.ReportError(new Error(_), {
            bIncludeMessageInIdentifier: !0,
          }),
          console.warn(_),
          console.log(_.stack || _);
      }
    }
    BIsValid() {
      return this.m_bValid;
    }
    Body() {
      return this.m_body;
    }
    SetBodyJSON(_) {
      (_.toObject = () => _), (this.m_body = _);
    }
    Hdr() {
      return this.m_header;
    }
    GetEMsg() {
      return this.m_eMsg;
    }
    SetEMsg(_) {
      this.m_eMsg = _;
    }
    GetEResult() {
      return this.Hdr().eresult();
    }
    BSuccess() {
      return this.Hdr().eresult() == 1;
    }
    GetErrorMessage() {
      return this.Hdr().error_message()
        ? this.Hdr().error_message()
        : `eresult ${this.Hdr().eresult()}`;
    }
    Serialize() {
      let _ = this.m_header.serializeBinary(),
        _ = this.m_body.serializeBinary(),
        _ = this.m_eMsg | 2147483648,
        _ = new Uint8Array(_ + _.length + _.length),
        _ = new _(_);
      return (
        _.PutUint32(_), _.PutUint32(_.length), _.PutBytes(_), _.PutBytes(_), _
      );
    }
    SerializeBody() {
      let _ = this.m_body.serializeBinary(),
        _ = new Uint8Array(_.length);
      return new _(_).PutBytes(_), _;
    }
    DEBUG_ToObject() {
      return {};
    }
    DEBUG_LogToConsole() {}
  },
  _ = class _ extends _ {
    constructor(_, _ = 0, _, _, _) {
      super(_, _, _, _, void 0, _);
    }
    static InitFromPacket(_, _) {
      return new _(_, 0, _);
    }
    static InitFromMsg(_, _) {
      return new _(_, void 0, void 0, _);
    }
    static Init(_, _) {
      return new _(_, _);
    }
    static InitFromObject(_, _) {
      return new _(_, void 0, void 0, void 0, _);
    }
    Body() {
      return super.Body();
    }
    SetBodyFields(_) {
      for (let _ in _)
        Array.isArray(_[_])
          ? this.Body()[`add_${_}`] &&
            _[_].forEach((_) => {
              this.Body()[`add_${_}`](_);
            })
          : this.Body()[`set_${_}`] && this.Body()[`set_${_}`](_[_]);
    }
  };
function _(_, _) {
  return _ instanceof _ ? _ : _.InitFromObject(_, _);
}
export { _, _, _, _, _, _, _, _, _, _, _ };
