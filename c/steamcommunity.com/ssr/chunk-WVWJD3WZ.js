var _ = _(_(), 1);
function _(_) {
  switch (_) {
    case 0:
    case 15:
    case 10:
      return !0;
    default:
      return !1;
  }
}
function _(_) {
  return _.file_type != 2 || (_.num_children ?? 0) == 0
    ? !1
    : ((_?.flags ?? 0) & 16) == 16;
}
function _(_) {
  return ["user_workshop_details", _];
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => await _(_),
    placeholderData: (_) => _,
    staleTime: 300 * 1e3,
  };
}
function _(_, _) {
  return _(_(_, _));
}
var _ = [
    "accepted",
    "trend",
    "mostrecent",
    "lastupdated",
    "textsearch",
    "torate",
  ],
  _ = [
    "trend",
    "toprated",
    "mostrecent",
    "lastupdated",
    "textsearch",
    "totaluniquesubscribers",
    "playtime_trend",
    "playtime_average_trend",
    "playtime_trend_total",
    "playtime_average_trend_total",
    "playtime_sessions_trend",
    "playtime_sessions_lifetime",
  ];
var _ = ["accepted", "trend", "toprated", "mostrecent", "textsearch"],
  _ = [
    "accepted",
    "trend",
    "toprated",
    "mostrecent",
    "lastupdated",
    "textsearch",
  ],
  _ = ["nominee", "mostrecent", "toprated", "reported", "textsearch"],
  _ = [
    "trend",
    "toprated",
    "reported",
    "curatedadmin",
    "mostupvotes",
    "totalvotes",
    "inappropriate_rating",
    "ban_content_check",
  ];
function _(_, _) {
  let _ = [];
  switch (_) {
    case "mtxitems":
      _ = [..._];
      break;
    case "readytouseitems":
      _ = [..._];
      break;
    case "collections":
      _ = [..._];
      break;
    case "merchandise":
      _ = [..._];
      break;
    case "videos":
      _ = [..._];
      break;
  }
  return _ && (_ = _.concat(_)), _;
}
function _(_, _) {
  let _ = [0];
  switch ((_.logged_in && (_ = [..._, 3, 4, 2]), _)) {
    case "mtxitems":
    case "merchandise":
    case "collections":
      _ = [..._, 1];
      break;
  }
  return _ && (_ = [..._, 5]), _;
}
function _(_) {
  let _ = new URLSearchParams();
  return (
    _.appid && _.set("appid", _.appid.toString()),
    _.browse_sort &&
      _.browse_sort.trim().length > 0 &&
      _.set("browsesort", _.browse_sort),
    _.section && _.section.trim().length > 0 && _.set("section", _.section),
    _.page && _.page > 0 && _.set("p", _.page.toString()),
    _.num_per_page &&
      _.num_per_page != 0 &&
      _.set("num_per_page", _.num_per_page.toString()),
    _.trend_days && _.trend_days != 0 && _.set("days", _.trend_days.toString()),
    _.search_text &&
      _.search_text.trim().length > 0 &&
      _.set("searchtext", _.search_text.trim()),
    _.required_tags?.length != 0 &&
      _.required_tags?.forEach((_) => _.append("requiredtags[]", _)),
    _.excluded_tags?.length != 0 &&
      _.excluded_tags?.forEach((_) => _.append("excludedtags[]", _)),
    _.required_flags?.length != 0 &&
      _.required_flags?.forEach((_) => _.append("requiredflags[]", _)),
    _.required_kv_tags?.length != 0 &&
      _.required_kv_tags?.forEach((_) =>
        _.append(`requiredkvtags[${_.key}`, _.value),
      ),
    _.date_range_created &&
      (_.set(
        "created_date_range_filter_start",
        (_.date_range_created.timestamp_start || 0).toString(),
      ),
      _.set(
        "created_date_range_filter_end",
        (_.date_range_created.timestamp_end || 0).toString(),
      )),
    _.date_range_updated &&
      (_.set(
        "updated_date_range_filter_start",
        (_.date_range_updated.timestamp_start || 0).toString(),
      ),
      _.set(
        "updated_date_range_filter_end",
        (_.date_range_updated.timestamp_end || 0).toString(),
      )),
    _.childpublishedfileid &&
      _.childpublishedfileid.length != 0 &&
      _.set("childpublishedfileid", _.childpublishedfileid),
    _.special_filter && _.set("special_filter", _.special_filter.toString()),
    _.appids_required_for_use?.length &&
      _.appids_required_for_use?.forEach((_) =>
        _.append("appids_required_for_use[]", _.toString()),
      ),
    _.admin_view && _.set("admin_view", "1"),
    _
  );
}
function _(_, _) {
  return {
    queryKey: ["saved_web_queries", _],
    queryFn: async () => await _(_),
    placeholderData: (_) => _,
    staleTime: 300 * 1e3,
  };
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) => await _(_, _),
    onSuccess: (_) => {
      _ &&
        _.removeQueries({
          queryKey: ["saved_web_queries", _],
        });
    },
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) => await _(_, _),
    onSuccess: (_) => {
      _ &&
        _.removeQueries({
          queryKey: ["saved_web_queries", _],
        });
    },
  });
}
function _(_, _) {
  let _ = {
    ..._,
  };
  return (
    (_.browse_sort = _.browse_sort),
    (_.required_tags = _.required_tags),
    (_.excluded_tags = _.excluded_tags),
    (_.trend_days = _.days_in_period),
    (_.search_text = _.search_text),
    _.required_flags && (_.required_flags = _.required_flags),
    _.created_date_range_filter_start &&
      (_.date_range_created = {
        timestamp_start: _.created_date_range_filter_start,
        timestamp_end: _.created_date_range_filter_end,
      }),
    _.updated_date_range_filter_start &&
      (_.date_range_updated = {
        timestamp_start: _.updated_date_range_filter_start,
        timestamp_end: _.updated_date_range_filter_end,
      }),
    _.section && (_.section = _.section),
    _.num_per_page && (_.num_per_page = _.num_per_page),
    _.special_filter && (_.special_filter = _.special_filter),
    _.appids_required_for_use &&
      (_.appids_required_for_use = _.appids_required_for_use),
    _
  );
}
function _(_) {
  let _ = {};
  return (
    (_.browse_sort = _.browse_sort),
    (_.section = _.section),
    (_.num_per_page = _.num_per_page),
    (_.required_tags = _.required_tags),
    (_.excluded_tags = _.excluded_tags),
    (_.days_in_period = _.trend_days),
    (_.search_text = _.search_text),
    (_.required_flags = _.required_flags),
    (_.created_date_range_filter_start = _.date_range_created?.timestamp_start),
    (_.created_date_range_filter_end = _.date_range_created?.timestamp_end),
    (_.updated_date_range_filter_start = _.date_range_updated?.timestamp_start),
    (_.updated_date_range_filter_end = _.date_range_updated?.timestamp_end),
    (_.appids_required_for_use = _.appids_required_for_use),
    _
  );
}
function _(_, _) {
  return _(_(_, _));
}
function _(_, _) {
  let _ = Object.fromEntries(
    Object.entries(_).filter(([_, _]) => _ !== void 0),
  );
  return {
    queryKey: [
      "workshop_browse",
      Object.keys(_)
        .sort()
        .reduce((_, _) => ((_[_] = _[_]), _), {}),
    ],
    queryFn: async () => await _(_),
    placeholderData: (_) => _,
    staleTime: 300 * 1e3,
  };
}
function _(_, _, _, _) {
  return ["ugcliststatus", _, _, _, _];
}
function _(_, _, _, _, _) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return await _(_, _, _, _);
    },
    {
      cache: !1,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _(_, _, _, _) {
  return _(["UserListStatus", _, _, _], () => _(_, _, _, _));
}
function _(_, _, _, _, _) {
  return {
    queryKey: _(_, _, _, _),
    queryFn: async () => (_.logged_in && (await _.load(_))?.inlist) || !1,
    staleTime: 300 * 1e3,
  };
}
function _(_, _, _, _, _) {
  let _ = _(_, _, _, _);
  return _(_(_, _, _, _, _));
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      if (_) {
        let _ = {
          appid: _,
          list_type: _,
          publishedfileid: _,
          notify_client: !0,
        };
        return !!(await _.Subscribe(_, _)).BSuccess();
      } else {
        let _ = {
          appid: _,
          list_type: _,
          publishedfileid: _,
          notify_client: !0,
        };
        return !(await _.Unsubscribe(_, _)).BSuccess();
      }
    },
    onSuccess: (_) => {
      _.setQueryData(_(_, _, _, _), _),
        _.invalidateQueries({
          queryKey: _(_),
        });
    },
  });
}
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = {
        appid: _,
        list_type: _,
        publishedfileid: _,
        include_dependencies: !0,
        notify_client: !0,
      };
      return (await _.Subscribe(_, _)).BSuccess();
    },
    onSuccess: (_) => {
      _ &&
        (_.invalidateQueries({
          queryKey: ["ugcliststatus", _, _, _],
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_, _) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return (await _(_)) ?? [];
    },
    {
      cache: !0,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _(_) {
  return _("UGCSummaryLoader", () => _(_));
}
function _(_, _) {
  return {
    queryKey: ["ugc_summary", _],
    queryFn: async () => await _.load(_),
    staleTime: 300 * 1e3,
  };
}
function _(_, _) {
  let _ = _(_);
  return _(_(_, _));
}
function _(_, _) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return (await _(_)) ?? [];
    },
    {
      cache: !0,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _(_) {
  return _("UGCCollectionSummaryLoader", () => _(_));
}
function _(_, _) {
  return {
    queryKey: ["ugc_collection_summary", _],
    queryFn: async () => await _.load(_),
    staleTime: 300 * 1e3,
  };
}
function _(_, _) {
  let _ = _(_);
  return _(_(_, _));
}
function _(_) {
  return ["ugcvote", _];
}
function _(_, _) {
  return new _.default(
    async (_) => {
      let _ = [..._];
      return await _(_);
    },
    {
      cache: !1,
      maxBatchSize: 100,
      ..._,
    },
  );
}
function _(_) {
  return _(["UserVoteSummary"], () => _(_));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () =>
      _.logged_in
        ? ((await _.load(_)) ?? {
            vote_for: !1,
            vote_against: !1,
          })
        : {
            vote_for: !1,
            vote_against: !1,
          },
    staleTime: 300 * 1e3,
  };
}
function _(_, _) {
  let _ = _(_);
  return _(_(_, _));
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) => await _(_, _),
    onSuccess: (_) => {
      _ &&
        _.invalidateQueries({
          queryKey: _(_),
        });
    },
  });
}
var _ = {
  BackgroundImageCtn: "JAD8UTa-0ek-",
  WorkshopBackgroundGridCtn: "i0jZqaPzWXM-",
};
var _ = _(_(), 1);
function _(_) {
  let { _: _, workshop: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ =
      _(_, "library_hero_2x") ??
      _(_, "library_hero") ??
      _(_, "raw_page_background"),
    _ = `${_.COMMUNITY_CDN_URL}public/images/sharedfiles/workshop_background_grid.png`;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)("div", {
            className: _.BackgroundImageCtn,
            children: (0, _.jsx)("img", {
              src: _,
              alt: _.name,
            }),
          }),
          _ &&
            (0, _.jsx)(_.Fragment, {
              children: (0, _.jsx)("div", {
                className: _.WorkshopBackgroundGridCtn,
              }),
            }),
        ],
      })
    : null;
}
var _ = _(_(), 1);
var _ = {
  AppHubHeader: "xLMYeLbZSMI-",
  TabsContainer: "F0rQT-TUKDs-",
  Tab: "wL0w0j65lE8-",
  Active: "AKNr409SBBM-",
  ContentDescriptorWarning: "_3kg9cUD7Rag-",
  ContentDescriptor: "TzLv8Lum16k-",
};
var _ = [
  "all",
  "discussions",
  "screenshots",
  "art",
  "broadcasts",
  "videos",
  "workshop",
  "news",
  "webguides",
  "userreviews",
];
var _ = _(_());
var _ = _(_()),
  _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = _(_());
function _(_) {
  let { labelledBy: _ } = _ || {},
    [_, _] = _.useState(void 0),
    _ = _.useMemo(
      () => ({
        setHeaderId: _,
      }),
      [],
    );
  return {
    headerId: _ || _,
    context: _,
  };
}
function _(_) {
  let {
      active: _,
      onDismiss: _,
      className: _,
      modalClassName: _,
      children: _,
      ..._
    } = _,
    { headerId: _, context: _ } = _({
      labelledBy: _["aria-labelledby"],
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        className: _,
        children: (0, _.jsx)(_, {
          role: "dialog",
          "aria-labelledby": _,
          className: _,
          ..._,
          children: _,
        }),
      }),
    }),
  });
}
var _ = _(_());
var _ = _(_());
var _ = _(_(), 1),
  _ = {
    all: "#AppHub_Nav_All",
    discussions: "#AppHub_Nav_Discussions",
    screenshots: "#AppHub_Nav_Screenshots",
    art: "#AppHub_Nav_Art",
    broadcasts: "#AppHub_Nav_Broadcasts",
    videos: "#AppHub_Nav_Videos",
    workshop: "#AppHub_Nav_WorkshopItems",
    news: "#AppHub_Nav_AllNews",
    webguides: "#AppHub_Nav_Guides",
    userreviews: "#AppHub_Nav_Reviews",
  },
  _ = {
    all: "/",
    discussions: "/discussions/",
    screenshots: "/screenshots/",
    art: "/images/",
    broadcasts: "/broadcasts/",
    videos: "/videos/",
    workshop: "/workshop/",
    news: "/news/",
    webguides: "/guides/",
    userreviews: "/reviews/",
  },
  _ = {
    name: "wants_mature_content_apps",
    options: {
      path: "/",
      secure: !0,
      maxAge: 365 * 24 * 60 * 60 * 1e3,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _() {
  let _ = _(_);
  return _ ? _.split("|").map((_) => parseInt(_)) : [];
}
function _(_) {
  let _ = _();
  _.push(_);
  let _ = _.join("|");
  _(_, _);
}
function _(_) {
  return _().includes(_);
}
function _(_) {
  let {
      appid: _,
      name: _,
      activeTab: _,
      rgHiddenTabs: _,
      children: _,
      eVisibility: _,
      rgContentDescriptorIDs: _,
      rgUserPreferencesOverlappingContentDescriptorIDs: _,
    } = _,
    _ = [..._].filter((_) => !_ || !_.includes(_)),
    _ = `${_.COMMUNITY_BASE_URL}app/${_}`,
    [_, _] = (0, _.useState)(!_(_) && _ == 3),
    _ = () => {
      window.location.href = _.COMMUNITY_BASE_URL;
    },
    _ = () => {
      _(_), _(!1);
    };
  return _
    ? (0, _.jsx)(_, {
        active: !0,
        children: (0, _.jsx)(_, {
          onClose: _,
          children: (0, _.jsx)(_, {
            background: "dull-7",
            padding: "3",
            radius: "md",
            children: (0, _.jsxs)(_, {
              direction: "column",
              justify: "center",
              gap: "3",
              align: "center",
              className: _.ContentDescriptorWarning,
              children: [
                (0, _.jsx)("div", {
                  children: _.Localize("#AppHubs_ContentCheck_Header_App"),
                }),
                (0, _.jsx)(_, {
                  gap: "1",
                  children: _.map((_) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: _.ContentDescriptor,
                        children: _(_),
                      },
                      _,
                    ),
                  ),
                }),
                (0, _.jsxs)(_, {
                  gap: "1",
                  children: [
                    (0, _.jsx)(_, {
                      onClick: _,
                      children: _.Localize("#AppHubs_ContentCheck_ViewPage"),
                    }),
                    (0, _.jsx)(_, {
                      onClick: _,
                      children: _.Localize("#AppHubs_ContentCheck_Cancel"),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            paddingTop: "7",
            paddingBottom: "2",
            children: (0, _.jsx)(_, {
              marginX: {
                initial: "3",
                _: "9",
              },
              children: (0, _.jsxs)("div", {
                className: _.AppHubHeader,
                children: [
                  (0, _.jsxs)(_, {
                    align: "center",
                    justify: "between",
                    wrap: {
                      initial: "wrap",
                      _: void 0,
                    },
                    gap: "3",
                    direction: "row",
                    children: [
                      (0, _.jsx)(_, {
                        external: !1,
                        _: _,
                        children: (0, _.jsx)(_, {
                          size: {
                            initial: "4",
                            _: "6",
                          },
                          children: _,
                        }),
                      }),
                      (0, _.jsx)(_, {
                        controller: "app",
                        method: "apphub_header",
                        children: (0, _.jsx)(_, {
                          appid: _,
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    gap: "2",
                    className: _.TabsContainer,
                    direction: "row",
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          bActive: _ == _,
                          tab: _,
                          appid: _,
                        },
                        _,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          }),
          _,
        ],
      });
}
function _(_) {
  let { appid: _ } = _,
    _ = _(),
    _ = _(_, `${_.STORE_BASE_URL}app/${_}/`);
  return (0, _.jsx)(_, {
    href: _,
    children: _.Localize("#AppHub_Store"),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    className: _(),
  });
}
function _(_) {
  let { tab: _, appid: _, bActive: _ } = _,
    _ = `${_.COMMUNITY_BASE_URL}app/${_}${_[_]}`,
    _ = _.Localize(_[_]);
  return (0, _.jsx)("div", {
    className: _(_.Tab, _ && _.Active),
    children: (0, _.jsx)(_, {
      size: "4",
      href: _,
      children: _,
    }),
  });
}
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_GetOwner_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_GetOwner_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.votes || _(_._()),
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
              votes: {
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
      return "CPublishedFile_UpdateVotes_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              score: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
              },
              votes_up: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              votes_down: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              trusted_score: {
                _: 5,
                _: _.readFloat,
                _: _.writeFloat,
              },
              trusted_votes_up: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              trusted_votes_down: {
                _: 7,
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
      return "CPublishedFile_UpdateVotes_Request_VoteData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateVotes_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              days: {
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
      return "CPublishedFile_GetDailyVotingHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.votes || _(_._()),
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
              votes: {
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
      return "CPublishedFile_GetDailyVotingHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.daystart || _(_._()),
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
              daystart: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              votes_up: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              votes_down: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
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
      return "CPublishedFile_GetDailyVotingHistory_Response_DailyVotes";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              days: {
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
      return "CPublishedFile_GetDailyViewHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.views || _(_._()),
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
              views: {
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
      return "CPublishedFile_GetDailyViewHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.daystart || _(_._()),
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
              daystart: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              views: {
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
      return "CPublishedFile_GetDailyViewHistory_Response_DailyViews";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              days: {
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
      return "CPublishedFile_GetDailyVoteLaterHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.votes_later || _(_._()),
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
              votes_later: {
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
      return "CPublishedFile_GetDailyVoteLaterHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.daystart || _(_._()),
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
              daystart: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              votes_later: {
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
      return "CPublishedFile_GetDailyVoteLaterHistory_Response_DailyVotesLater";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_VoteLater_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_VoteLater_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              reactionid: {
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
      return "CPublishedFile_AddReaction_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_AddReaction_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              reactionid: {
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
      return "CPublishedFile_RemoveReaction_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_RemoveReaction_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              days: {
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
      return "CPublishedFile_GetDailyUserActionHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.actions || _(_._()),
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
              actions: {
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
      return "CPublishedFile_GetDailyUserActionHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.daystart || _(_._()),
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
              daystart: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              list_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              action: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              count: {
                _: 4,
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
      return "CPublishedFile_GetDailyUserActionHistory_Response_DailyUserActions";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileids || _(_._()),
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
              publishedfileids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readUint64String,
                pbr: _.readPackedUint64String,
                _: _.writeRepeatedUint64String,
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
      return "CPublishedFile_GetNames_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.names || _(_._()),
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
              names: {
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
      return "CPublishedFile_GetNames_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              name: {
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
      return "CPublishedFile_GetNames_Response_NameData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              splits: {
                _: 2,
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
      return "CPublishedFile_SetServiceProviderRevenueSplits_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              percentage: {
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
      return "CPublishedFile_SetServiceProviderRevenueSplits_Request_RevenueSplit";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_SetServiceProviderRevenueSplits_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              steamid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              include_pending: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_IsContributor_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_contributor || _(_._()),
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
              is_contributor: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_IsContributor_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_GetFileVisibility_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.visibility || _(_._()),
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
              visibility: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
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
      return "CPublishedFile_GetFileVisibility_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              filetype: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              notify_client: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_UnsubscribeAll_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UnsubscribeAll_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              notify_client: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_UnsubscribeCollection_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UnsubscribeCollection_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              file_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              publishedfileid: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_OnTagged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              file_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              publishedfileid: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_OnUntagged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.visible_to_steamid || _(_._()),
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
              visible_to_steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              matching_file_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_start: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_end: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              appid: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              shortcutid: {
                _: 6,
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
      return "PublishedFileFilter";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              filter: {
                _: 2,
                _: _,
              },
              start_index: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              count: {
                _: 4,
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
      return "CPublishedFile_EnumerateUserTaggedFiles_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              shortcutid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              total_results: {
                _: 3,
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
      return "PublishedFilePerAppCount";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null);
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
              publishedfiledetails: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              total_results_per_app: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              total_results: {
                _: 4,
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
      return "CPublishedFile_EnumerateUserTaggedFiles_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3, 6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              tags_to_add: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              tags_to_remove: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              string_tags_to_remove_by_key: {
                _: 6,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              int_tags_to_remove_by_key: {
                _: 7,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              appid: {
                _: 5,
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
      return "CPublishedFile_UpdateKeyValueTags_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tag_name || _(_._()),
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
              tag_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              tag_val_uint32: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              tag_val_string: {
                _: 3,
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
      return "CPublishedFile_UpdateKeyValueTags_Request_TagUpdate";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateKeyValueTags_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sectionid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              title: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              description_text: {
                _: 4,
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
      return "CPublishedFile_SetSubSectionData_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sectionid || _(_._()),
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
              sectionid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_SetSubSectionData_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sectionid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_RemoveSubSection_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_RemoveSubSection_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sub_sections: {
                _: 2,
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
      return "CPublishedFile_SetSubSectionSortOrder_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sectionid || _(_._()),
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
              sectionid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sort_order: {
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
      return "CPublishedFile_SetSubSectionSortOrder_Request_SubSection";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_SetSubSectionSortOrder_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              previews: {
                _: 2,
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
      return "CPublishedFile_SetPreviewSortOrder_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.previewid || _(_._()),
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
              previewid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sort_order: {
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
      return "CPublishedFile_SetPreviewSortOrder_Request_Preview";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_SetPreviewSortOrder_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              children: {
                _: 2,
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
      return "CPublishedFile_SetCollectionSortOrder_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sort_order: {
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
      return "CPublishedFile_SetCollectionSortOrder_Request_ChildItem";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_SetCollectionSortOrder_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.change_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 7, 8, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              change_number: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              hcontent_file: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              hcontent_preview: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              english_text: {
                _: 4,
                _: _,
              },
              text: {
                _: 5,
                _: _,
                _: !0,
                _: !0,
              },
              previews: {
                _: 6,
                _: _,
                _: !0,
                _: !0,
              },
              tags: {
                _: 7,
                _: _,
                _: !0,
                _: !0,
              },
              kvtags: {
                _: 8,
                _: _,
                _: !0,
                _: !0,
              },
              metadata: {
                _: 9,
                _: _.readString,
                _: _.writeString,
              },
              sub_sections: {
                _: 10,
                _: _,
                _: !0,
                _: !0,
              },
              accountid_previewfile: {
                _: 11,
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
      return "PublishedFileDetailsSnapshot";
    }
  },
  _ = class _ extends _.Message {
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
                _: _.readInt32,
                _: _.writeInt32,
              },
              title: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              file_description: {
                _: 3,
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
      return "PublishedFileDetailsSnapshot_LocalizedText";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.previewid || _(_._()),
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
              previewid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              preview_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              appid: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              accountid: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              sortorder: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              hcontent_file: {
                _: 6,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              filename: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              youtubevideoid: {
                _: 8,
                _: _.readString,
                _: _.writeString,
              },
              external_reference: {
                _: 9,
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
      return "PublishedFileDetailsSnapshot_Preview";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagid || _(_._()),
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
              tagid: {
                _: 1,
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
      return "PublishedFileDetailsSnapshot_Tag";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagtypeid || _(_._()),
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
              tagtypeid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              tagvalue: {
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
      return "PublishedFileDetailsSnapshot_KVTag";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              publishedfileid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              verified: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              verification_token: {
                _: 4,
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
      return "CPublishedFile_VerifyItemSubmission_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_VerifyItemSubmission_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_ResendItemVerificationEmail_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_ResendItemVerificationEmail_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              language: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
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
      return "CPublishedFile_Localization_Remove_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_Localization_Remove_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              language: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              title: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              file_description: {
                _: 4,
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
      return "CPublishedFile_Localization_Update_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_Localization_Update_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              include_strings: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_Localization_GetInfo_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.localization_info || _(_._()),
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
              localization_info: {
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
      return "CPublishedFile_Localization_GetInfo_Response";
    }
  },
  _ = class _ extends _.Message {
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
                _: _.readInt32,
                _: _.writeInt32,
              },
              time_updated: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              title: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              file_description: {
                _: 4,
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
      return "CPublishedFile_Localization_GetInfo_Response_LocalizationInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              timestamp: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              change_description: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              gid_file: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              language: {
                _: 5,
                _: 0,
                _: _.readInt32,
                _: _.writeInt32,
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
      return "CPublishedFile_AddChangeHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_AddChangeHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              timestamp: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              change_description: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              remove: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              language: {
                _: 5,
                _: 0,
                _: _.readInt32,
                _: _.writeInt32,
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
      return "CPublishedFile_UpdateChangeHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateChangeHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              timestamp: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              change_description: {
                _: 3,
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
      return "CPublishedFile_RevertFileChange_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_RevertFileChange_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              timestamp: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              remove: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              game_branch_min: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              game_branch_max: {
                _: 5,
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
      return "CPublishedFile_ManageAuthorSnapshot_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_ManageAuthorSnapshot_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              publishedfileid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              creator_appid: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              file_type: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              permission: {
                _: 5,
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
      return "CPublishedFile_FileDeleted_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
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
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              publishedfileids: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readUint64String,
                pbr: _.readPackedUint64String,
                _: _.writeRepeatedUint64String,
              },
              update_type: {
                _: 3,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
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
      return "CPublishedFile_FilesUpdated_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              action_requested: {
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
      return "CPublishedFile_RequestAction_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_RequestAction_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              tag_name: {
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
      return "CPublishedFile_AddTag_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagid || _(_._()),
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
              tagid: {
                _: 1,
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
      return "CPublishedFile_AddTag_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
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
      return "CPublishedFile_ReloadTags_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_ReloadTags_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
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
              tags: {
                _: 2,
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
      return "CPublishedFile_UpdateLocalizedTags_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagid || _(_._()),
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
              tagid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              language: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              tag_name: {
                _: 3,
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
      return "CPublishedFile_UpdateLocalizedTags_Request_LocalizedTag";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateLocalizedTags_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              language: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
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
      return "CPublishedFile_GetLocalizedTags_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tags || _(_._()),
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
              tags: {
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
      return "CPublishedFile_GetLocalizedTags_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagid || _(_._()),
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
              tagid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              tag_name: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              tag_name_english: {
                _: 3,
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
      return "CPublishedFile_GetLocalizedTags_Response_LocalizedTag";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              metadata: {
                _: 3,
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
      return "CPublishedFile_SetDeveloperMetadata_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_SetDeveloperMetadata_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              add_tags: {
                _: 3,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              remove_tags: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              language: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
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
      return "CPublishedFile_UpdateTags_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateTags_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              expiration_time: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              reason: {
                _: 4,
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
      return "CPublishedFile_UpdateAppUGCBan_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateAppUGCBan_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              refresh: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              appid: {
                _: 3,
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
      return "CPublishedFile_GetCurrentBanStatus_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.num_banned_files || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              num_banned_files: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              time_last_ban: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              is_currently_banned: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              expiration_time: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              app_bans: {
                _: 5,
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
      return "CPublishedFile_GetCurrentBanStatus_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              expiration_time: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              updated_time: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              accountid_moderator: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              reason: {
                _: 5,
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
      return "CPublishedFile_GetCurrentBanStatus_Response_AppUGCBan";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_GetParents_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.total || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              total: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              parentfilesbysamecreator: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readUint64String,
                pbr: _.readPackedUint64String,
                _: _.writeRepeatedUint64String,
              },
              bundles: {
                _: 3,
                _: !0,
                _: !0,
                _: _.readUint64String,
                pbr: _.readPackedUint64String,
                _: _.writeRepeatedUint64String,
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
      return "CPublishedFile_GetParents_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              ban_if_inappropriate: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_CheckForInappropriateContent_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_CheckForInappropriateContent_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_GetInappropriateContentResults_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
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
              results: {
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
      return "CPublishedFile_GetInappropriateContentResults_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.provider || _(_._()),
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
              provider: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              time_created: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              result: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              inappropriate_result: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              fileid: {
                _: 5,
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
      return "CPublishedFile_GetInappropriateContentResults_Response_Result";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gid_file: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              ban_check_result: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              text_checked: {
                _: 4,
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
      return "CPublishedFile_UpdateWithTextContentCheckResult_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateWithTextContentCheckResult_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              label: {
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
      return "CPublishedFile_MarkTextForContentCheckTraining_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_MarkTextForContentCheckTraining_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              banned: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              reason: {
                _: 4,
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
      return "CPublishedFile_UpdateBanStatus_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.owner_steamid || _(_._()),
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
              owner_steamid: {
                _: 1,
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
      return "CPublishedFile_UpdateBanStatus_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              incompatible: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_UpdateIncompatibleStatus_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_UpdateIncompatibleStatus_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              flags_set: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              flags_unset: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              note: {
                _: 4,
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
      return "CPublishedFile_AdminUpdateFlags_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_AdminUpdateFlags_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
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
      return "CPublishedFile_GetInappropriateContentLabels_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.labels_sex || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              labels_sex: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              labels_violence: {
                _: 2,
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
      return "CPublishedFile_GetInappropriateContentLabels_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.label || _(_._()),
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
              label: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              confidence: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
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
      return "CPublishedFile_GetInappropriateContentLabels_Response_InappropriateContentLabels";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
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
      return "CPublishedFile_GetAuditHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.entries || _(_._()),
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
              entries: {
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
      return "CPublishedFile_GetAuditHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timestamp || _(_._()),
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
              timestamp: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              actor_steamid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              action: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              note: {
                _: 4,
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
      return "CPublishedFile_GetAuditHistory_Response_HistoryEntry";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
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
      return "CPublishedFile_PermanentlyDeletePublishedFilesForUser_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_PermanentlyDeletePublishedFilesForUser_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.page || _(_._()),
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
              page: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              files_per_page: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              file_type: {
                _: 3,
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
      return "CPublishedFile_QueryFilesToModerate_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.total || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              total: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              publishedfiledetails: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              pages: {
                _: 3,
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
      return "CPublishedFile_QueryFilesToModerate_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              unban: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFile_BanUpVoters_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_BanUpVoters_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              publishedfileid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_VoteBanned_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              desired_revision: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              publishedfileids: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readFixed64String,
                pbr: _.readPackedFixed64String,
                _: _.writeRepeatedFixed64String,
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
      return "CPublishedFile_GetUpdatesSinceDate_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.items || _(_._()),
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
              items: {
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
      return "CPublishedFile_GetUpdatesSinceDate_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              revision: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
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
      return "CPublishedFile_GetUpdatesSinceDate_Response_ItemUpdateInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
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
      return "CPublishedFile_GetSolrDoc_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.document || _(_._()),
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
              document: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              rowversion: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              timestamp: {
                _: 3,
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
      return "CPublishedFile_GetSolrDoc_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              new_owner_accountid: {
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
      return "CPublishedFile_TransferOwnership_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFile_TransferOwnership_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
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
      return "CPublishedFile_GetUniqueSubscribers_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accountids || _(_._()),
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
              accountids: {
                _: 1,
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
      return "CPublishedFile_GetUniqueSubscribers_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.queryid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5, 15, 17], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              queryid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              query_name: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              browse_sort: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              required_tags: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              excluded_tags: {
                _: 5,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              days_in_period: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              search_text: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              required_flags: {
                _: 15,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              created_date_range_filter_start: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              created_date_range_filter_end: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              updated_date_range_filter_start: {
                _: 11,
                _: _.readUint32,
                _: _.writeUint32,
              },
              updated_date_range_filter_end: {
                _: 12,
                _: _.readUint32,
                _: _.writeUint32,
              },
              section: {
                _: 13,
                _: _.readString,
                _: _.writeString,
              },
              special_filter: {
                _: 16,
                _: _.readEnum,
                _: _.writeEnum,
              },
              appids_required_for_use: {
                _: 17,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              num_per_page: {
                _: 14,
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
      return "PublishedFileSavedWebQuery";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
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
      return "CPublishedFile_GetSavedWebQueries_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.queries || _(_._()),
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
              queries: {
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
      return "CPublishedFile_GetSavedWebQueries_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              queryid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_GetSavedWebQuery_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.query || _(_._()),
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
              query: {
                _: 1,
                _: _,
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
      return "CPublishedFile_GetSavedWebQuery_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              queryid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              delete_query: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              query: {
                _: 4,
                _: _,
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
      return "CPublishedFile_UpdateSavedWebQuery_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.queryid || _(_._()),
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
              queryid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFile_UpdateSavedWebQuery_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.revision || _(_._()),
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
              revision: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              count: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              appid: {
                _: 3,
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
      return "CPublishedFileModeration_ClaimApprovalRequests_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFileModeration_ClaimApprovalRequests_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
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
      return "CPublishedFileModeration_ReleaseApprovalRequests_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFileModeration_ReleaseApprovalRequests_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
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
      return "CPublishedFileModeration_GetApprovalRequests_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requests || _(_._()),
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
              requests: {
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
      return "CPublishedFileModeration_GetApprovalRequests_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              revision: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              timestamp_request: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_claimed: {
                _: 4,
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
      return "CPublishedFileModeration_GetApprovalRequests_Response_ApprovalRequest";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              revision: {
                _: 2,
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              start: {
                _: 3,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              count: {
                _: 4,
                _: 100,
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
      return "CPublishedFileModeration_GetAllApprovalRequests_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requests || _(_._()),
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
              requests: {
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
      return "CPublishedFileModeration_GetAllApprovalRequests_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              revision: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              timestamp_request: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_claimed: {
                _: 4,
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
      return "CPublishedFileModeration_GetAllApprovalRequests_Response_ApprovalRequest";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              revision: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              change_number: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              approved: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              appid: {
                _: 5,
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
      return "CPublishedFileModeration_ProcessApprovalRequest_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFileModeration_ProcessApprovalRequest_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              revision: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
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
      return "CPublishedFileModeration_GetSnapshotData_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.snapshot || _(_._()),
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
              snapshot: {
                _: 1,
                _: _,
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
      return "CPublishedFileModeration_GetSnapshotData_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              revision: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
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
      return "CPublishedFileModeration_SaveSnapshot_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFileModeration_SaveSnapshot_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
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
              revision: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              filetypes: {
                _: 3,
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
      return "CPublishedFileModeration_BackfillSnapshots_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.count || _(_._()),
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
              count: {
                _: 1,
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
      return "CPublishedFileModeration_BackfillSnapshots_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFileCommerce_GetForSaleData_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_for_sale || _(_._()),
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
              is_for_sale: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              price_category: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              itemid: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              inventory_desc: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              estatus: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              time_submitted: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_approved: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_price_changed: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              num_purchases: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              num_refunds: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              price_category_floor: {
                _: 11,
                _: _.readUint32,
                _: _.writeUint32,
              },
              price_is_pay_what_you_want: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              discount_percentage: {
                _: 13,
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
      return "CPublishedFileCommerce_GetForSaleData_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              price_category: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              inventory_desc: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              price_category_floor: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              price_is_pay_what_you_want: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              inventory_name: {
                _: 6,
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
      return "CPublishedFileCommerce_SetForSaleData_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFileCommerce_SetForSaleData_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              discount_percentage: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              inventory_desc: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              estatus: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
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
      return "CPublishedFileCommerce_SetBundleForSaleData_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFileCommerce_SetBundleForSaleData_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              steamid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              was_purchased: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              refund_reason: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              transactionid: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFileCommerce_NotifyPurchaseActivity_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CPublishedFileCommerce_NotifyPurchaseActivity_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              estatus: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              from_periodic_job: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
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
      return "CPublishedFileCommerce_ChangeForSaleStatus_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.publishedfileid || _(_._()),
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
              publishedfileid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
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
      return "CPublishedFileCommerce_ChangeForSaleStatus_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetOwner#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetOwner = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateVotes#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.UpdateVotes = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetDailyVotingHistory#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetDailyVotingHistory = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetDailyVoteLaterHistory#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetDailyVoteLaterHistory = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetDailyViewHistory#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetDailyViewHistory = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetDailyUserActionHistory#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetDailyUserActionHistory = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.Vote#1", _(_, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.Vote = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.VoteLater#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.VoteLater = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.AddReaction#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddReaction = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.RemoveReaction#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RemoveReaction = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetNames#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetNames = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.Subscribe#1", _(_, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.Subscribe = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.Unsubscribe#1", _(_, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.Unsubscribe = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UnsubscribeAll#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.UnsubscribeAll = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UnsubscribeCollection#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.UnsubscribeCollection = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.CanSubscribe#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.CanSubscribe = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.SetServiceProviderRevenueSplits#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetServiceProviderRevenueSplits = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.IsContributor#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.IsContributor = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetFileVisibility#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetFileVisibility = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateKeyValueTags#1", _(_, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.UpdateKeyValueTags = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.SetSubSectionData#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.SetSubSectionData = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.RemoveSubSection#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.RemoveSubSection = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetSubSectionData#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetSubSectionData = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.SetSubSectionSortOrder#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.SetSubSectionSortOrder = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.SetPreviewSortOrder#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.SetPreviewSortOrder = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.SetCollectionSortOrder#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetCollectionSortOrder = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.Publish#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.Publish = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetDetails#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetDetails = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetItemInfo#1", _(_, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetItemInfo = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetItemInfoInternal#1", _(_, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetItemInfoInternal = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetUserFiles#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetUserFiles = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetUserFileCount#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetUserFileCount = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.AreFilesInSubscriptionList#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.AreFilesInSubscriptionList = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.Update#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.Update = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.Delete#1", _(_, _), _, {
      ePrivilege: 3,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.Delete = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.VerifyItemSubmission#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.VerifyItemSubmission = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.ResendItemVerificationEmail#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ResendItemVerificationEmail = _;
  function _(_, _) {
    return _.SendNotification("PublishedFile.OnTagged#1", _(_, _), {
      ePrivilege: 0,
    });
  }
  _.OnTagged = _;
  function _(_, _) {
    return _.SendNotification("PublishedFile.OnUntagged#1", _(_, _), {
      ePrivilege: 0,
    });
  }
  _.OnUntagged = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.EnumerateUserTaggedFiles#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.EnumerateUserTaggedFiles = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.LocalizationRemove#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.LocalizationRemove = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.LocalizationUpdate#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.LocalizationUpdate = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetLocalizationInfo#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetLocalizationInfo = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetChangeHistoryEntry#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetChangeHistoryEntry = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetChangeHistory#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetChangeHistory = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.AddChangeHistory#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddChangeHistory = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateChangeHistory#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.UpdateChangeHistory = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.RevertFileChange#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RevertFileChange = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.ManageAuthorSnapshot#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ManageAuthorSnapshot = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.RefreshVotingQueue#1", _(_, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.RefreshVotingQueue = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.QueryFiles#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.QueryFiles = _;
  function _(_, _) {
    return _.SendNotification("PublishedFile.NotifyFileDeleted#1", _(_, _), {
      ePrivilege: 0,
    });
  }
  _.NotifyFileDeleted = _;
  function _(_, _) {
    return _.SendNotification("PublishedFile.NotifyFilesUpdated#1", _(_, _), {
      ePrivilege: 0,
    });
  }
  _.NotifyFilesUpdated = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.AddAppRelationship#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddAppRelationship = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.RemoveAppRelationship#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RemoveAppRelationship = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetAppRelationships#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetAppRelationships = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetAppRelationshipsBatched#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetAppRelationshipsBatched = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.RequestAction#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.RequestAction = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.AddTag#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.AddTag = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.ReloadTags#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.ReloadTags = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateLocalizedTags#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.UpdateLocalizedTags = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetLocalizedTags#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetLocalizedTags = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.SetDeveloperMetadata#1", _(_, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.SetDeveloperMetadata = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateTags#1", _(_, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.UpdateTags = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.StartPlaytimeTracking#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.StartPlaytimeTracking = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.StopPlaytimeTracking#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.StopPlaytimeTracking = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.StopPlaytimeTrackingForAllAppItems#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.StopPlaytimeTrackingForAllAppItems = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.SetPlaytimeForControllerConfigs#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetPlaytimeForControllerConfigs = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateAppUGCBan#1", _(_, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.UpdateAppUGCBan = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetCurrentBanStatus#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.GetCurrentBanStatus = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.AddChild#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddChild = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.RemoveChild#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RemoveChild = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetParents#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetParents = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.SetCollectionChildren#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetCollectionChildren = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.SetSubscriptionListFromCollection#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetSubscriptionListFromCollection = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.CheckForInappropriateContent#1",
      _(_, _),
      _,
      {
        ePrivilege: 0,
      },
    );
  }
  _.CheckForInappropriateContent = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.GetInappropriateContentResults#1",
      _(_, _),
      _,
      {
        ePrivilege: 0,
      },
    );
  }
  _.GetInappropriateContentResults = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.UpdateWithTextContentCheckResult#1",
      _(_, _),
      _,
      {
        ePrivilege: 0,
      },
    );
  }
  _.UpdateWithTextContentCheckResult = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.MarkTextForContentCheckTraining#1",
      _(_, _),
      _,
      {
        ePrivilege: 6,
      },
    );
  }
  _.MarkTextForContentCheckTraining = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateBanStatus#1", _(_, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.UpdateBanStatus = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateIncompatibleStatus#1", _(_, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 5,
    });
  }
  _.UpdateIncompatibleStatus = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.AdminUpdateFlags#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AdminUpdateFlags = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.GetInappropriateContentLabels#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
      },
    );
  }
  _.GetInappropriateContentLabels = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetAuditHistory#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetAuditHistory = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFile.PermanentlyDeletePublishedFilesForUser#1",
      _(_, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.PermanentlyDeletePublishedFilesForUser = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.QueryFilesToModerate#1", _(_, _), _, {
      ePrivilege: 6,
    });
  }
  _.QueryFilesToModerate = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetUserVoteSummary#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetUserVoteSummary = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.BanUpVoters#1", _(_, _), _, {
      ePrivilege: 6,
    });
  }
  _.BanUpVoters = _;
  function _(_, _) {
    return _.SendNotification("PublishedFile.NotifyVoteBanned#1", _(_, _), {
      ePrivilege: 0,
    });
  }
  _.NotifyVoteBanned = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetUpdatesSinceDate#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.GetUpdatesSinceDate = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetItemChanges#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetItemChanges = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetSolrDoc#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.GetSolrDoc = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetContentDescriptors#1", _(_, _), _, {
      ePrivilege: 0,
    });
  }
  _.GetContentDescriptors = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateContentDescriptors#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.UpdateContentDescriptors = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.TransferOwnership#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.TransferOwnership = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetUniqueSubscribers#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.GetUniqueSubscribers = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetSavedWebQueries#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetSavedWebQueries = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.GetSavedWebQuery#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetSavedWebQuery = _;
  function _(_, _) {
    return _.SendMsg("PublishedFile.UpdateSavedWebQuery#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.UpdateSavedWebQuery = _;
})((_ ||= {}));
var _;
((_) => {
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileModeration.ClaimApprovalRequests#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClaimApprovalRequests = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileModeration.ReleaseApprovalRequests#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReleaseApprovalRequests = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileModeration.GetApprovalRequests#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.GetApprovalRequests = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileModeration.GetAllApprovalRequests#1",
      _(_, _),
      _,
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 5,
      },
    );
  }
  _.GetAllApprovalRequests = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileModeration.ProcessApprovalRequest#1",
      _(_, _),
      _,
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 5,
      },
    );
  }
  _.ProcessApprovalRequest = _;
  function _(_, _) {
    return _.SendMsg("PublishedFileModeration.GetSnapshotData#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetSnapshotData = _;
  function _(_, _) {
    return _.SendMsg("PublishedFileModeration.SaveSnapshot#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.SaveSnapshot = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileModeration.BackfillSnapshots#1",
      _(_, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.BackfillSnapshots = _;
})((_ ||= {}));
var _;
((_) => (
  (_.NotifyFileSubscribedHandler = {
    name: "PublishedFileClient.NotifyFileSubscribed#1",
    request: _,
  }),
  (_.NotifyFileUnsubscribedHandler = {
    name: "PublishedFileClient.NotifyFileUnsubscribed#1",
    request: _,
  }),
  (_.NotifyFileDeletedHandler = {
    name: "PublishedFileClient.NotifyFileDeleted#1",
    request: _,
  })
))((_ ||= {}));
var _;
((_) => {
  function _(_, _) {
    return _.SendMsg("PublishedFileCommerce.GetForSaleData#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetForSaleData = _;
  function _(_, _) {
    return _.SendMsg("PublishedFileCommerce.SetForSaleData#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetForSaleData = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileCommerce.SetBundleForSaleData#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetBundleForSaleData = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileCommerce.ChangeForSaleStatus#1",
      _(_, _),
      _,
      {
        ePrivilege: 2,
      },
    );
  }
  _.ChangeForSaleStatus = _;
  function _(_, _) {
    return _.SendMsg(
      "PublishedFileCommerce.NotifyPurchaseActivity#1",
      _(_, _),
      _,
      {
        ePrivilege: 0,
      },
    );
  }
  _.NotifyPurchaseActivity = _;
})((_ ||= {}));
var _ = "./workshop_ui_arabic-XXXXXXXX.json";
var _ = "./workshop_ui_brazilian-XXXXXXXX.json";
var _ = "./workshop_ui_bulgarian-XXXXXXXX.json";
var _ = "./workshop_ui_czech-XXXXXXXX.json";
var _ = "./workshop_ui_danish-XXXXXXXX.json";
var _ = "./workshop_ui_dutch-XXXXXXXX.json";
var _ = "./workshop_ui_english-XXXXXXXX.json";
var _ = "./workshop_ui_finnish-XXXXXXXX.json";
var _ = "./workshop_ui_french-XXXXXXXX.json";
var _ = "./workshop_ui_german-XXXXXXXX.json";
var _ = "./workshop_ui_greek-XXXXXXXX.json";
var _ = "./workshop_ui_hungarian-XXXXXXXX.json";
var _ = "./workshop_ui_indonesian-XXXXXXXX.json";
var _ = "./workshop_ui_italian-XXXXXXXX.json";
var _ = "./workshop_ui_japanese-XXXXXXXX.json";
var _ = "./workshop_ui_koreana-XXXXXXXX.json";
var _ = "./workshop_ui_latam-XXXXXXXX.json";
var _ = "./workshop_ui_norwegian-XXXXXXXX.json";
var _ = "./workshop_ui_polish-XXXXXXXX.json";
var _ = "./workshop_ui_portuguese-XXXXXXXX.json";
var _ = "./workshop_ui_romanian-XXXXXXXX.json";
var _ = "./workshop_ui_russian-XXXXXXXX.json";
var _ = "./workshop_ui_schinese-XXXXXXXX.json";
var _ = "./workshop_ui_spanish-XXXXXXXX.json";
var _ = "./workshop_ui_swedish-XXXXXXXX.json";
var _ = "./workshop_ui_tchinese-XXXXXXXX.json";
var _ = "./workshop_ui_thai-XXXXXXXX.json";
var _ = "./workshop_ui_turkish-XXXXXXXX.json";
var _ = "./workshop_ui_ukrainian-XXXXXXXX.json";
var _ = "./workshop_ui_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
var _ = "/VLTAZIDA.png";
var _ = _(_(), 1);
function _() {
  return _(_);
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fill: "currentColor",
      _: "M13.8296 12.0786C14.8347 10.6321 15.2623 8.86133 15.0284 7.11496C14.7945 5.36859 13.9159 3.77313 12.5656 2.64269C11.2153 1.51224 9.49114 0.928708 7.73254 1.00696C5.97394 1.08522 4.30831 1.8196 3.06357 3.06552C1.81882 4.31144 1.08514 5.97864 1.00696 7.7389C0.928776 9.49916 1.51176 11.2249 2.64114 12.5765C3.77052 13.9281 5.36446 14.8075 7.10919 15.0417C8.85391 15.2758 10.623 14.8477 12.0682 13.8417L15.2185 17L15.3997 16.8187L16.8188 15.3982L17 15.2168L13.8296 12.0786ZM8.04222 12.5824C7.14643 12.5824 6.27075 12.3165 5.52593 11.8183C4.7811 11.3202 4.20058 10.6122 3.85777 9.78376C3.51497 8.95538 3.42528 8.04384 3.60004 7.16443C3.7748 6.28502 4.20616 5.47723 4.83958 4.84321C5.47301 4.20919 6.28004 3.77742 7.15862 3.60249C8.0372 3.42757 8.94787 3.51734 9.77548 3.86047C10.6031 4.2036 11.3104 4.78467 11.8081 5.5302C12.3058 6.27573 12.5714 7.15223 12.5714 8.04887C12.5714 9.25123 12.0943 10.4043 11.2449 11.2545C10.3955 12.1047 9.24344 12.5824 8.04222 12.5824V12.5824Z",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 8",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fill: "currentColor",
      _: "M5.62915 7.5L-1.40071e-05 1.06691e-07L11.2583 -8.77544e-07L5.62915 7.5Z",
    }),
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "none",
    ..._,
    children: [
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M17.7329 0C19.8186 0 21.5117 1.70467 21.5117 3.80463C21.5117 5.9046 19.8186 7.60926 17.7329 7.60926C15.6473 7.60926 13.9542 5.9046 13.9542 3.80463C13.9542 1.70467 15.6473 0 17.7329 0ZM17.7329 1.75612C16.6096 1.75612 15.6984 2.67363 15.6984 3.80463C15.6984 4.93564 16.6096 5.85314 17.7329 5.85314C18.8562 5.85314 19.7675 4.93564 19.7675 3.80463C19.7675 2.67363 18.8562 1.75612 17.7329 1.75612Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M17.7329 16.3907C19.8186 16.3907 21.5117 18.0954 21.5117 20.1954C21.5117 22.2953 19.8186 24 17.7329 24C15.6473 24 13.9542 22.2953 13.9542 20.1954C13.9542 18.0954 15.6473 16.3907 17.7329 16.3907ZM17.7329 18.1469C16.6096 18.1469 15.6984 19.0644 15.6984 20.1954C15.6984 21.3264 16.6096 22.2439 17.7329 22.2439C18.8562 22.2439 19.7675 21.3264 19.7675 20.1954C19.7675 19.0644 18.8562 18.1469 17.7329 18.1469Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M10.1746 8.19581C12.2603 8.19581 13.9533 9.90047 13.9533 12.0004C13.9533 14.1004 12.2603 15.8051 10.1746 15.8051C8.08892 15.8051 6.39586 14.1004 6.39586 12.0004C6.39586 9.90047 8.08892 8.19581 10.1746 8.19581ZM10.1746 9.95193C9.05128 9.95193 8.14002 10.8694 8.14002 12.0004C8.14002 13.1314 9.05128 14.049 10.1746 14.049C11.2979 14.049 12.2092 13.1314 12.2092 12.0004C12.2092 10.8694 11.2979 9.95193 10.1746 9.95193Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M24.1275 2.92745C24.6087 2.92745 24.9996 3.32104 24.9996 3.80551C24.9996 4.28998 24.6087 4.68357 24.1275 4.68357H20.6392C20.158 4.68357 19.7671 4.28998 19.7671 3.80551C19.7671 3.32104 20.158 2.92745 20.6392 2.92745H24.1275Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M24.1275 19.3173C24.6087 19.3173 24.9996 19.7109 24.9996 20.1954C24.9996 20.6798 24.6087 21.0734 24.1275 21.0734H20.6392C20.158 21.0734 19.7671 20.6798 19.7671 20.1954C19.7671 19.7109 20.158 19.3173 20.6392 19.3173H24.1275Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M0.872955 12.8785C0.391783 12.8785 0.000872176 12.4849 0.000872176 12.0004C0.000872176 11.516 0.391783 11.1224 0.872955 11.1224H7.26794C7.74911 11.1224 8.14002 11.516 8.14002 12.0004C8.14002 12.4849 7.74911 12.8785 7.26794 12.8785H0.872955Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M11.9188 2.92745C12.3999 2.92745 12.7908 3.32104 12.7908 3.80551C12.7908 4.28998 12.3999 4.68357 11.9188 4.68357H0.872083C0.390911 4.68357 0 4.28998 0 3.80551C0 3.32104 0.390911 2.92745 0.872083 2.92745H11.9188Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M11.9188 19.3173C12.3999 19.3173 12.7908 19.7109 12.7908 20.1954C12.7908 20.6798 12.3999 21.0734 11.9188 21.0734H0.872083C0.390911 21.0734 0 20.6798 0 20.1954C0 19.7109 0.390911 19.3173 0.872083 19.3173H11.9188Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M15.9888 12.8785C15.5076 12.8785 15.1167 12.4849 15.1167 12.0004C15.1167 11.516 15.5076 11.1224 15.9888 11.1224H24.1279C24.6091 11.1224 25 11.516 25 12.0004C25 12.4849 24.6091 12.8785 24.1279 12.8785H15.9888Z",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 18",
    fill: "none",
    ..._,
    children: [
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M19.8679 11.355C19.6894 11.7738 19.7809 12.2578 20.099 12.5839L25.068 17.6554C25.2834 17.8742 25.5792 17.999 25.8884 17.999C26.1964 17.999 26.4922 17.8742 26.7087 17.6554L31.6778 12.5839C31.9959 12.259 32.0896 11.7738 31.9088 11.355C31.7336 10.9361 31.3173 10.6643 30.8585 10.6643H27.0324V1.13691C27.0324 0.51142 26.5212 0.00526203 25.8895 0.00526203C25.2578 0.00526203 24.7466 0.51142 24.7466 1.13691V10.6643H20.9204C20.4617 10.6643 20.0465 10.9361 19.8679 11.355Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M1.1429 10.1316H15.1635C15.7952 10.1316 16.3064 9.62549 16.3064 9C16.3064 8.37451 15.7952 7.86835 15.1635 7.86835H1.1429C0.511192 7.86835 0 8.37451 0 9C0 9.62549 0.511192 10.1316 1.1429 10.1316Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M1.1429 18H11.1322C11.7639 18 12.2751 17.4938 12.2751 16.8684C12.2751 16.2429 11.7639 15.7367 11.1322 15.7367H1.1429C0.511192 15.7367 0 16.2429 0 16.8684C0 17.4938 0.511192 18 1.1429 18Z",
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        _: "M1.1429 2.2633H19.1939C19.8256 2.2633 20.3368 1.75714 20.3368 1.13165C20.3368 0.506158 19.8256 0 19.1939 0H1.1429C0.511192 0 0 0.506158 0 1.13165C0 1.75714 0.511192 2.2633 1.1429 2.2633Z",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 9",
    fill: "none",
    ..._,
    children: [
      (0, _.jsx)("rect", {
        fill: "currentColor",
        _: "1.76782",
        _: "2.47488",
        width: "1",
        height: "6",
        transform: "rotate(-45 1.76782 2.47488)",
      }),
      (0, _.jsx)("rect", {
        fill: "currentColor",
        _: "2.47485",
        _: "6.71752",
        width: "1",
        height: "6",
        transform: "rotate(-135 2.47485 6.71752)",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    fill: "none",
    ..._,
    children: [
      (0, _.jsx)("rect", {
        stroke: "var(--button-stroke, #444E57)",
        fill: "var(--button-fill, currentColor)",
        _: "0.5",
        _: "0.5",
        width: "13",
        height: "13",
        _: "1.5",
      }),
      (0, _.jsx)("rect", {
        fill: "var(--button-symbol, #D9D9D9)",
        _: "6.5",
        _: "4",
        width: "1",
        height: "6",
      }),
      (0, _.jsx)("rect", {
        fill: "var(--button-symbol, #D9D9D9)",
        _: "4",
        _: "7.5",
        width: "1",
        height: "6",
        transform: "rotate(-90 4 7.5)",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14",
    fill: "none",
    ..._,
    children: [
      (0, _.jsx)("rect", {
        stroke: "var(--button-stroke, #444E57)",
        fill: "var(--button-fill, currentColor)",
        _: "0.5",
        _: "0.5",
        width: "13",
        height: "13",
        _: "1.5",
      }),
      (0, _.jsx)("rect", {
        fill: "var(--button-symbol, #D9D9D9)",
        _: "4",
        _: "7.5",
        width: "1",
        height: "6",
        transform: "rotate(-90 4 7.5)",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 1200 1200",
    ..._,
    children: (0, _.jsx)("path", {
      _: "M102.1,727.4h169.6v154.7c0,37.7,30.7,68.4,68.4,68.4h519.7c37.7,0,68.4-30.7,68.4-68.4v-154.7h169.6v278.6c0,62.8-51.2,114.1-114.1,114.1H216.1c-62.8,0-114.1-51.2-114.1-114.1v-278.6h0ZM293.7,458h180.9V148.4c0-37.7,30.7-68.4,68.4-68.4h113.8c37.7,0,68.4,30.7,68.4,68.4v309.5h181l-255.8,280.4c-13.4,14.8-30.6,22.3-50.5,22.3s-37.1-7.6-50.5-22.3l-255.7-280.4Z",
    }),
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 1200 1200",
    ..._,
    children: [
      (0, _.jsx)("path", {
        _: "M531.1,737.1v-443.7h-208.1v537.6s0,75.6,0,75.6h554.1v-155.4h-331.9c-7.7,0-14.1-6.3-14.1-14.1ZM464.3,382.7c0-7.7,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1v112.5c0,7.7-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-112.5ZM404.5,382.7c0-7.7,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1v112.5c0,7.7-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-112.5Z",
      }),
      (0, _.jsx)("path", {
        _: "M559.2,109.9v613.1h554.1V109.9h-554.1ZM760.3,199.2c0-7.7,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1v112.5c0,7.7-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-112.5ZM700.5,199.2c0-7.7,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1v112.5c0,7.7-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-112.5ZM640.8,199.2c0-7.7,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1v112.5c0,7.7-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-112.5Z",
      }),
      (0, _.jsx)("path", {
        _: "M294.8,920.6v-443.7H86.7v539.1s0,74.1,0,74.1h554.1v-155.4h-331.9c-7.7,0-14.1-6.3-14.1-14.1ZM168.3,566.2c0-7.7,6.3-14.1,14.1-14.1s14.1,6.3,14.1,14.1v112.5c0,7.7-6.3,14.1-14.1,14.1s-14.1-6.3-14.1-14.1v-112.5Z",
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 1200 1200",
    ..._,
    children: (0, _.jsx)("path", {
      _: "m1111.2 484.8-22.801-15.602c-25.199-16.801-36-49.199-27.602-78l7.1992-26.398c12-40.801-15.602-82.801-57.602-90l-27.602-4.8008c-30-4.8008-54-27.602-58.801-57.602l-4.8008-27.602c-7.1992-42-49.199-68.398-90-56.398l-26.398 8.3984c-28.801 8.3984-61.199-2.3984-78-26.398l-16.793-24c-25.199-34.801-74.398-39.602-105.6-10.801l-20.398 19.199c-22.801 20.398-55.199 25.199-82.801 9.6016l-24-13.199c-37.199-20.398-84-3.6016-100.8 36l-10.801 26.398c-10.801 28.801-39.602 46.801-69.602 44.398l-27.602-1.1992c-43.199-2.3984-78 33.602-74.398 75.602l2.3984 27.602c2.3984 30-15.602 58.801-43.199 70.801l-25.199 10.801c-39.602 16.801-55.199 63.602-34.801 100.8l14.398 24c15.602 26.398 12 60-8.3984 82.801l-18 20.398c-28.801 32.398-22.801 81.602 13.199 105.6l22.801 15.602c25.199 16.801 36 49.199 27.602 78l-10.797 27.594c-12 40.801 15.602 82.801 57.602 90l27.602 4.8008c30 4.8008 54 27.602 58.801 57.602l4.8008 27.602c7.1992 42 49.199 68.398 90 56.398l26.398-8.3984c28.801-8.3984 61.199 2.3984 78 26.398l16.801 22.801c25.199 34.801 74.398 39.602 105.6 10.801l20.398-19.199c22.801-20.398 55.199-25.199 82.801-9.6016l24 13.199c37.199 20.398 84 3.6016 100.8-36l10.801-26.398c10.801-28.801 39.602-46.801 69.602-44.398l27.602 1.1992c43.199 2.3984 78-33.602 74.398-75.602l-1.207-27.602c-2.3984-30 15.602-58.801 43.199-70.801l25.199-10.801c39.602-16.801 55.199-63.602 34.801-100.8l-14.398-24c-15.602-26.398-12-60 8.3984-82.801l18-20.398c30-31.199 24-81.598-10.801-105.6zm-511.2 474c-198 0-357.6-160.8-357.6-358.8s160.8-357.6 357.6-357.6 357.6 159.6 357.6 357.6-159.6 358.8-357.6 358.8zm0-636c-152.4 0-277.2 124.8-277.2 277.2s124.8 277.2 277.2 277.2 277.2-124.8 277.2-277.2-124.8-277.2-277.2-277.2zm21.602 350.4-63.602 63.602-63.602-64.801-61.199-61.199 63.602-63.602 61.199 61.199 146.4-145.2 63.602 63.602z",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 1200 1200",
    ..._,
    children: (0, _.jsx)("path", {
      _: "m255.04 835.01s-132.46-90.602-132.46-269.29c0-265.99 281.91-364.36 433.49-361.73 151.61 2.6641 196.79 42.551 196.79 42.551s51.602-37.512 106.27-68.914c41.844-16.32 51.551-18.66 80.617-9.3125 23.281 0 8.6406 38.734-0.71875 52.703-9.2539 13.969-54.324 91.078-54.324 91.078s94.598 97.402 101.58 161.43c0-1.1523 44.531-0.35938 68.965-0.35938 24.422 0 22.117 26.605 22.117 26.605l-0.68359 187.49s1.5234 26.605-20.641 26.605c-22.105 0-69.121 0.50391-69.121 0.50391s-66.133 96.059-108.06 113.51c0 1.1641 36.227 99.562 36.227 99.562s17.461 30.254-13.957 41.914c-31.43 11.617-113.39 46.02-148.31 56.52-34.934 10.512-39.898-13.285-39.898-13.285l-34.559-74.652-226.11 0.35937-34.57 76.969s-6.625 35.711-53.16 15.949c-46.57-19.777-97.414-43.223-135.83-63-38.375-19.777-13.117-56.723-13.117-56.723l39.457-76.477zm610.57-323.93c21.203 0 38.375-17.242 38.375-38.426 0-21.203-17.172-38.387-38.375-38.387-21.191 0-38.41 17.184-38.41 38.387 0 21.18 17.219 38.426 38.41 38.426zm-541.01-119.65c12.238 14.52 20.258 3.8281 30.109 0.92578 0 0 41.809-38.785 103.2-56.879 63.613-18.695 130.54-9.6719 130.54-9.6719 9.8633-2.9023 21.84-3.2148 21.938-18.457-0.51562-18.805-23.352-18.973-23.074-19.598 0 0-75.336-6.9609-138.37 11.566-62.016 18.227-109.38 57.828-109.38 57.828s-25.332 17.473-14.953 34.285z",
      fillRule: "evenodd",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 1200 1200",
    ..._,
    children: (0, _.jsx)("path", {
      _: "M117.2,140c-19.1,0-34.5,15.4-34.5,34.5s15.4,34.5,34.5,34.5h110l118.6,559.5c4.7,21.1,18.5,38.6,35.9,38.5h575c18.2.3,35-16.3,35-34.5s-16.8-34.8-35-34.5H409.7l-14.7-69h607.7c15.4-.1,30-11.9,33.4-27l80.5-345c4.5-20-12.9-41.9-33.4-42H307.7l-18.7-87.7c-3.3-15.3-18.1-27.3-33.8-27.3H117.2ZM322,324h209.2v103.5h-187.2l-21.9-103.5ZM600.2,324h161v103.5h-161v-103.5ZM830.2,324h209.5l-24.1,103.5h-185.4v-103.5ZM358.7,496.5h172.5v103.5h-150.6l-21.9-103.5ZM600.2,496.5h161v103.5h-161v-103.5ZM830.2,496.5h169.3l-24.1,103.5h-145.2v-103.5ZM496.7,830c-63.1,0-115,51.9-115,115s51.9,115,115,115,115-51.9,115-115-51.9-115-115-115ZM841.7,830c-63.1,0-115,51.9-115,115s51.9,115,115,115,115-51.9,115-115-51.9-115-115-115ZM496.7,899c25.8,0,46,20.2,46,46s-20.2,46-46,46-46-20.2-46-46,20.2-46,46-46ZM841.7,899c25.8,0,46,20.2,46,46s-20.2,46-46,46-46-20.2-46-46,20.2-46,46-46Z",
    }),
  });
}
function _(_) {
  return (0, _.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 1200 1200",
    ..._,
    children: [
      (0, _.jsx)("path", {
        _: "m303.6 798c-136.8-136.8-136.8-358.8 0-494.4 136.8-135.6 358.8-136.8 494.4 0 90 90 121.2 218.4 92.398 333.6l115.2 115.2c21.602 2.3984 43.199-12 48-33.602l16.801-61.199c6-25.199-8.3984-50.398-32.398-56.398-15.602-4.8008-26.398-18-25.199-34.801v-30c-1.1992-16.801 9.6016-30 25.199-34.801 25.199-6 39.602-32.398 32.398-56.398l-16.801-61.199c-6-25.199-32.398-39.602-56.398-32.398-15.602 4.8008-32.398-2.3984-39.602-16.801-4.8008-9.6016-9.6016-16.801-15.602-26.398-8.3984-13.199-6-31.199 4.8008-43.199 18-18 18-46.801 0-66l-44.398-44.398c-18-18-46.801-18-66 0-10.801 10.801-28.801 13.199-43.199 4.8008-8.3984-6-16.801-9.6016-26.398-15.602-14.398-7.1992-20.398-24-16.801-39.602 6-25.199-8.3984-50.398-32.398-56.398l-61.199-16.801c-25.199-6-50.398 8.3984-56.398 32.398-4.8008 15.602-18 25.199-34.801 25.199h-30c-16.801 1.1992-30-9.6016-34.801-25.199-6-25.199-32.398-39.602-56.398-32.398l-61.199 16.801c-25.199 6-39.602 32.398-32.398 56.398 4.8008 15.602-2.3984 32.398-16.801 39.602-9.6016 4.8008-16.801 9.6016-26.398 15.602-13.199 8.3984-31.199 6-43.199-4.8008-18-18-46.801-18-66 0l-43.199 45.602c-18 18-18 46.801 0 66 10.801 10.801 13.199 28.801 4.8008 43.199-6 8.3984-9.6016 16.801-15.602 26.398-7.1992 14.398-24 20.398-39.602 16.801-25.199-6-50.398 8.3984-56.398 32.398l-16.801 61.199c-6 25.199 8.3984 50.398 32.398 56.398 15.602 4.8008 26.398 18 25.199 34.801v30c1.1992 16.801-9.6016 30-25.199 34.801-25.199 6-39.602 32.398-32.398 56.398l16.801 61.199c6 25.199 32.398 39.602 56.398 32.398 15.602-4.8008 32.398 2.3984 39.602 16.801 4.8008 9.6016 9.6016 16.801 15.602 26.398 8.3984 13.199 6 31.199-4.8008 43.199-18 18-18 46.801 0 66l44.398 44.398c18 18 46.801 18 64.801 0 12-10.801 28.801-13.199 43.199-4.8008 8.3984 6 16.801 9.6016 26.398 15.602 14.398 7.1992 20.398 24 16.801 39.602-6 25.199 8.3984 50.398 32.398 56.398l61.199 16.801c25.199 6 50.398-8.3984 56.398-32.398 4.8008-15.602 18-26.398 34.801-25.199h30c16.801-1.1992 30 9.6016 34.801 25.199 6 25.199 32.398 39.602 56.398 32.398l61.199-16.801c21.602-6 36-26.398 33.602-48l-115.2-115.2c-114 26.398-242.4-4.8008-332.4-94.801z",
      }),
      (0, _.jsx)("path", {
        _: "m1134 960-338.4-338.4c25.199-86.398 3.6016-183.6-64.801-252-55.199-55.199-130.8-80.398-202.8-74.398-21.602 2.3984-31.199 28.801-15.602 43.199l92.398 91.199c25.199 25.199 25.199 66 0 92.398l-81.602 81.602c-25.199 25.199-66 25.199-92.398 0l-92.398-92.398c-15.602-15.602-42-6-43.199 16.801-6 78 21.602 157.2 85.199 212.4 67.199 58.801 159.6 78 241.2 54l338.4 338.4c46.801 46.801 124.8 46.801 172.8 0 49.203-46.801 49.203-124.8 1.2031-172.8zm-90 158.4c-40.801 0-74.398-33.602-74.398-74.398 0-40.801 33.602-74.398 74.398-74.398 40.801 0 74.398 33.602 74.398 74.398 0 40.801-32.398 74.398-74.398 74.398z",
      }),
    ],
  });
}
var _ = {
  AppHome: (_, _) =>
    _("home", {
      ..._,
      appid: _,
    }),
  Browse: (_, _ = {}) =>
    _("browse", {
      ..._,
      appid: _,
    }),
  MyFiles: (_, _ = {}) =>
    _("myfiles", {
      ..._,
      appid: _,
    }),
  Discussions: (_, _ = {}) =>
    _("discussions", {
      ..._,
      appid: _,
    }),
  About: (_, _ = {}) =>
    _("about", {
      ..._,
      appid: _,
    }),
  CreateCollection: (_, _ = {}) =>
    _("editcollection", {
      ..._,
      appid: _,
    }),
  CreateMerchandise: (_, _ = {}) =>
    _("createmerch", {
      ..._,
      appid: _,
    }),
  VotingQueue: (_, _ = {}) =>
    _("votingqueue", {
      ..._,
      appid: _,
    }),
};
function _(_, _ = {}) {
  let _ = "";
  _?.search &&
    (typeof _.search == "string"
      ? (_ = _.search)
      : (_.search.delete("appid"), (_ = _.search.toString())));
  let _ = `${_.COMMUNITY_BASE_URL}workshop/${_}${_ ? "?" + _ : ""}`;
  switch (_) {
    case "browse":
      _ = `${_.COMMUNITY_BASE_URL}workshop/browse/?appid=${_.appid}${_ ? "&" + _ : ""}`;
      break;
    case "myfiles":
      _ = `${_.COMMUNITY_BASE_URL}my/myworkshopfiles/?appid=${_.appid}${_ ? "&" + _ : ""}`;
      break;
    case "home":
      _ = `${_.COMMUNITY_BASE_URL}app/${_.appid}/workshop/`;
      break;
    case "discussions":
      _ = `${_.COMMUNITY_BASE_URL}workshop/discussions/?appid=${_.appid}`;
      break;
    case "about":
      _ = `${_.COMMUNITY_BASE_URL}workshop/about/?appid=${_.appid}`;
      break;
    case "editcollection":
      _ = `${_.COMMUNITY_BASE_URL}workshop/editcollection/?appid=${_.appid}`;
      break;
    case "createmerch":
      _ = `${_.COMMUNITY_BASE_URL}workshop/edititem/${_.appid}/11/`;
      break;
    case "votingqueue":
      _ = `${_.COMMUNITY_BASE_URL}sharedfiles/votingqueue/?appid=${_.appid}&matchingFileType=17`;
      break;
  }
  return _;
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "PSdEZ0qz2HI-";
var _ = "doQNAqWRqlM-";
var _ = "g-2HrL-acEI-";
var _ = "vwJAOafROGg-";
var _ = "_8tfBdkWkUAc-";
var _ = "I2Elupx9szU-";
var _ = "Dw-IApgeDGw-";
var _ = "VsQBaHlz-3M-";
var _ = "xcZZMNVBlXQ-";
var _ = "QT14YirlTt4-";
var _ = "vkN4nIVpqg4-";
var _ = "Zaj1eMuo8Qo-";
var _ = "GcSeprirY0I-";
var _ = "fKeHSh3rwXM-";
var _ = "IjIO2w9MOyk-";
var _ = "QWgDi2A4OQw-";
var _ = _(_(), 1),
  _ = _({
    Component: _,
  }),
  _ = {
    name: "workshop_preferences",
    options: {
      path: "/workshop/",
      secure: !0,
      maxAge: 365 * 24 * 60 * 60 * 1e3,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _() {
  try {
    let _ = JSON.parse(_(_) || "{}");
    return !_ || typeof _ != "object"
      ? {
          bOptedIn: !1,
          numResultsPerPage: 30,
        }
      : _;
  } catch {}
  return {};
}
function _(_) {
  Object.keys(_).length == 0 ? _(_) : _(_, JSON.stringify(_));
}
var _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let { userPreferences: _ } = _.useLoaderData(),
      [_, _] = (0, _.useState)(_),
      _ = (0, _.useCallback)(
        (_) => {
          let _ = {
            ..._,
            ..._,
          };
          _(_), _(_);
        },
        [_],
      ),
      _ = (0, _.useMemo)(
        () => ({
          preferences: _,
          setPreferences: _,
        }),
        [_, _],
      );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    });
  },
  _ = () => (0, _.useContext)(_),
  _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let { app: _, strExistingSearchText: _ } = _.useLoaderData(),
      [_, _] = (0, _.useState)({}),
      _ = _(_.appid, (..._) => _("/workshop/actions", "DeleteWebQuery", ..._)),
      [_, _] = (0, _.useState)(!1),
      _ = async () => {
        let _ = await _.mutateAsync(_.queryid ?? "");
        _(!1);
      },
      _ = (0, _.useCallback)((_) => {
        _(_), _(!0);
      }, []),
      _ = () => {
        _(!1);
      },
      _ = (0, _.useMemo)(
        () => ({
          savedQuery: _,
          setSavedQuery: _,
          onConfirmDelete: _,
        }),
        [_, _, _],
      );
    return (0, _.jsxs)(_.Provider, {
      value: _,
      children: [
        _.children,
        _ &&
          (0, _.jsxs)(_, {
            onClose: _,
            strTitle: _.Localize("#Workshop_Saved_Queries_Delete_Title"),
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(
                  "#Workshop_Saved_Queries_Delete_Desc",
                  _.query_name ?? "",
                ),
              }),
              (0, _.jsxs)(_, {
                justify: "end",
                gap: "3",
                align: "center",
                marginTop: "3",
                children: [
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize("#Workshop_Saved_Queries_Delete_Btn"),
                  }),
                  (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize("#Button_Cancel"),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  _ = () => (0, _.useContext)(_),
  _ = (0, _.createContext)(void 0),
  _ = (0, _.createContext)(void 0),
  _ = (0, _.createContext)(void 0);
function _(_, _) {
  let _ = "";
  switch (_) {
    case "readytouseitems":
      _ =
        _.feature_ready_to_use_content_tab_name &&
        _.feature_ready_to_use_content_tab_name.length != 0
          ? _.feature_ready_to_use_content_tab_name
          : "#Workshop_Section_ReadyToUse";
      break;
    case "merchandise":
      _ = "#Workshop_Section_Merchandise";
      break;
    case "collections":
      _ = "#Workshop_Section_Collections";
      break;
    case "mtxitems":
      _ =
        _.feature_item_mtx_tab_name && _.feature_item_mtx_tab_name.length != 0
          ? _.feature_item_mtx_tab_name
          : "#Workshop_Section_Mtx";
      break;
    case "videos":
      break;
  }
  return _.Localize(_);
}
function _(_) {
  let {
    appHubHeader: _,
    userAccess: _,
    workshopConfig: _,
    declaredTags: _,
  } = _.useLoaderData();
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsx)(_, {
        children: (0, _.jsx)(_.Provider, {
          value: _,
          children: (0, _.jsx)(_, {
            className: _,
            position: "relative",
            children: (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    _: {
                      appid: _.appid,
                    },
                    workshop: !0,
                  }),
                  (0, _.jsxs)(_, {
                    activeTab: "workshop",
                    ..._,
                    children: [
                      (0, _.jsx)(_, {}),
                      (0, _.jsx)(_, {
                        marginBottom: "7",
                        children: (0, _.jsx)(_, {
                          children: _.children,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    }),
  });
}
var _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let { app: _, strExistingSearchText: _ } = _.useLoaderData(),
      [_, _] = (0, _.useState)(_),
      [_, _] = (0, _.useState)(void 0),
      _ = (0, _.useCallback)(
        (_) => {
          if (_) {
            _(_);
            return;
          }
          let _ = _(_);
          _.delete("appid"),
            _(
              _.Browse(_.appid, {
                search: _,
              }),
            );
        },
        [_.appid, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _ != _ && _(_);
        },
        [_],
      ),
      _ = (0, _.useMemo)(
        () => ({
          onBrowseHandler: _,
          setOnBrowseHandler: _,
          searchText: _,
          setSearchText: _,
          onSearchTextUpdatedExternally: _,
        }),
        [_, _, _],
      );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    });
  },
  _ = () => (0, _.useContext)(_),
  _ = (0, _.createContext)(void 0);
function _(_) {
  let { bSelected: _, text: _, children: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.jsxs)(_, {
      className: (0, _.default)(_, _ && _),
      onActivate: () => _(!_),
      children: [
        _,
        " ",
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    });
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      click: !0,
      focus: !0,
    },
    placement: {
      offset: 0,
      initial: "bottom-start",
      flip: !1,
    },
    children: [
      (0, _.jsx)(_.Anchor, {
        children: _,
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)("div", {
          children: (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)(_.Provider, {
              value: {
                onMenuItemSelected: () => _(!1),
              },
              children: _,
            }),
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { _: _, onDelete: _ } = _,
    { app: _ } = _.useLoaderData(),
    { onBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _(),
    _ = _(
      {
        appid: _.appid,
      },
      _,
    );
  return (0, _.jsxs)(_, {
    align: "center",
    children: [
      (0, _.jsxs)(_, {
        className: _,
        onActivate: () => (_(_), _(_.search_text ?? ""), !1),
        children: [(0, _.jsx)(_, {}), _.query_name],
      }),
      (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_Saved_Queries_Delete_Title"),
        nDelayShowMS: 0,
        children: (0, _.jsx)(_, {
          className: _,
          onActivate: () => _(_),
          children: (0, _.jsx)(_, {}),
        }),
      }),
    ],
  });
}
function _() {
  let { app: _ } = _.useLoaderData(),
    _ = _(),
    _ = _(_.appid, (_) => _("/workshop/actions", "SavedWebQueries", _));
  return !_.data || _.data.length == 0
    ? null
    : (0, _.jsxs)(_, {
        direction: "column",
        gap: "2",
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.Localize("#Workshop_Saved_Queries"),
          }),
          _.data.map((_) =>
            (0, _.jsx)(
              _,
              {
                _: _,
                onDelete: _.onConfirmDelete,
              },
              _.queryid,
            ),
          ),
        ],
      });
}
function _() {
  let { app: _, workshopConfig: _ } = _.useLoaderData(),
    { onBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _(),
    { onMenuItemSelected: _ } = (0, _.useContext)(_),
    _ = (0, _.useCallback)(
      (_, _, _) => {
        _({
          section: _,
          browse_sort: _,
          special_filter: _,
          search_text: "",
        }),
          _(""),
          _();
      },
      [_, _, _],
    ),
    _ = (0, _.useCallback)((_) => {
      window.location.href = _;
    }, []);
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": "geometric",
    children: [
      _.feature_item_mtx &&
        (0, _.jsxs)(_, {
          direction: "column",
          gap: "2",
          children: [
            (0, _.jsx)("div", {
              className: _,
              children: _.Localize(
                _.feature_item_mtx_tab_name?.length != 0
                  ? _.feature_item_mtx_tab_name
                  : "#Workshop_Section_Mtx",
              ),
            }),
            _.logged_in &&
              (0, _.jsx)(_, {
                className: _,
                onActivate: () => _(_.VotingQueue(_.appid)),
                children: _.Localize("#Workshop_SubMenu_VotingQueue"),
              }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("mtxitems", "mostrecent", 1),
              children: _.Localize(
                _.accepted_for_game_text?.length != 0
                  ? _.accepted_for_game_text
                  : "#Workshop_AcceptedForGame",
              ),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("mtxitems", "mostrecent"),
              children: _.Localize("#Workshop_BrowseSort_MostRecent"),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("mtxitems", "lastupdated"),
              children: _.Localize("#Workshop_BrowseSort_LastUpdated"),
            }),
          ],
        }),
      _.feature_ready_to_use_content &&
        (0, _.jsxs)(_, {
          direction: "column",
          gap: "2",
          children: [
            (0, _.jsx)("div", {
              className: _,
              children: _.Localize(
                _.feature_ready_to_use_content_tab_name?.length != 0
                  ? _.feature_ready_to_use_content_tab_name
                  : "#Workshop_Section_ReadyToUse",
              ),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("readytouseitems", "trend"),
              children: _.Localize("#Workshop_BrowseSort_MostPopular"),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("readytouseitems", "toprated"),
              children: _.Localize("#Workshop_BrowseSort_TopRated"),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("readytouseitems", "mostrecent"),
              children: _.Localize("#Workshop_BrowseSort_MostRecent"),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("readytouseitems", "lastupdated"),
              children: _.Localize("#Workshop_BrowseSort_LastUpdated"),
            }),
          ],
        }),
      _.feature_item_merch &&
        (0, _.jsxs)(_, {
          direction: "column",
          gap: "2",
          children: [
            (0, _.jsx)("div", {
              className: _,
              children: _.Localize("#Workshop_Section_Merchandise"),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("merchandise", "trend"),
              children: _.Localize("#Workshop_BrowseSort_MostPopular"),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("merchandise", "toprated"),
              children: _.Localize("#Workshop_BrowseSort_TopRated"),
            }),
            (0, _.jsx)(_, {
              className: _,
              onActivate: () => _("merchandise", "mostrecent"),
              children: _.Localize("#Workshop_BrowseSort_MostRecent"),
            }),
          ],
        }),
      (0, _.jsxs)(_, {
        direction: "column",
        gap: "2",
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.Localize("#Workshop_Section_Collections"),
          }),
          (0, _.jsx)(_, {
            className: _,
            onActivate: () => _("collections", "trend"),
            children: _.Localize("#Workshop_BrowseSort_MostPopular"),
          }),
          (0, _.jsx)(_, {
            className: _,
            onActivate: () => _("collections", "toprated"),
            children: _.Localize("#Workshop_BrowseSort_TopRated"),
          }),
          (0, _.jsx)(_, {
            className: _,
            onActivate: () => _("collections", "mostrecent"),
            children: _.Localize("#Workshop_BrowseSort_MostRecent"),
          }),
        ],
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _() {
  let { app: _, workshopConfig: _ } = _.useLoaderData(),
    _ = _(_.appid, (_) =>
      _("/workshop/actions", "GetUserWorkshopAppDetails", _),
    ),
    _ = (0, _.useCallback)((_) => {
      window.location.href = _;
    }, []);
  return (0, _.jsx)(_, {
    direction: "row",
    gap: "3",
    children: (0, _.jsxs)(_, {
      direction: "column",
      gap: "2",
      children: [
        (0, _.jsx)("div", {
          className: _,
          children: _.Localize("#Workshop_Menu_YourItems"),
        }),
        (0, _.jsx)(_, {
          className: _,
          onActivate: () => _(_.MyFiles(_.appid)),
          children: _.Localize(
            "#Workshop_SubMenu_YourItems",
            _(_.data?.numSubmitted ?? 0),
          ),
        }),
        (0, _.jsx)(_, {
          className: _,
          onActivate: () =>
            _(
              _.MyFiles(_.appid, {
                search: "browsefilter=myfavorites",
              }),
            ),
          children: _.Localize(
            "#Workshop_SubMenu_YourFavorites",
            _(_.data?.numFavorited ?? 0),
          ),
        }),
        (0, _.jsx)(_, {
          className: _,
          onActivate: () =>
            _(
              _.MyFiles(_.appid, {
                search: "browsefilter=mysubscriptions",
              }),
            ),
          children: _.Localize(
            "#Workshop_SubMenu_YourSubscriptions",
            _(_.data?.numSubscriptions ?? 0),
          ),
        }),
        _.feature_playtime_tracking &&
          (0, _.jsx)(_, {
            className: _,
            onActivate: () =>
              _(
                _.MyFiles(_.appid, {
                  search: "browsefilter=myplayedfiles",
                }),
              ),
            children: _.Localize(
              "#Workshop_SubMenu_YourPlayed",
              _(_.data?.numPlayed ?? 0),
            ),
          }),
      ],
    }),
  });
}
function _() {
  let { app: _, workshopConfig: _, eActiveTab: _ } = _.useLoaderData(),
    _ = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_.appid}/${_.workshop_header ?? ""}.jpg`;
  return (0, _.jsxs)(_, {
    marginX: {
      initial: "3",
      _: "9",
    },
    children: [
      (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            src: _,
            alt: _.name,
          }),
          (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("div", {
                className: _,
                children: _.workshop_title?.startsWith("#")
                  ? _.Localize(_.workshop_title)
                  : _.workshop_title,
              }),
              (0, _.jsx)("div", {
                className: _,
                children: _.workshop_desc?.startsWith("#")
                  ? _.Localize(_.workshop_desc)
                  : _.workshop_desc,
              }),
              !_.IN_GAMEPADUI &&
                _.instructionsURL &&
                _.instructionsURL?.length != 0 &&
                (0, _.jsx)("div", {
                  className: _,
                  children: (0, _.jsx)(_, {
                    _: _.instructionsURL,
                    children: _.Localize("#Workshop_LearnMore"),
                  }),
                }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        className: _,
        "flow-children": "grid",
        children: [
          (0, _.jsx)("div", {
            className: (0, _.default)(_, _ == 1 && _),
            children: (0, _.jsx)(_, {
              _: _.AppHome(_.appid),
              children: _.Localize("#Workshop_Menu_Home"),
            }),
          }),
          (0, _.jsx)(_, {
            bSelected: _ == 2,
            text: _.Localize("#Workshop_Menu_Browse"),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            bSelected: _ == 3,
            text: _.Localize("#Workshop_Menu_YourItems"),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)("div", {
            className: (0, _.default)(_, _ == 4 && _),
            children: (0, _.jsx)(_, {
              _: _.Discussions(_.appid),
              children: _.Localize("#Workshop_Menu_Discussions"),
            }),
          }),
          (0, _.jsx)("div", {
            className: (0, _.default)(_, _ == 5 && _),
            children: (0, _.jsx)(_, {
              external: !1,
              _: _.About(_.appid),
              children: _.Localize("#Workshop_Menu_About"),
            }),
          }),
        ],
      }),
    ],
  });
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
