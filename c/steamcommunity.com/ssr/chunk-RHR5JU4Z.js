var _ = _(_());
var _ = _(_());
var _ = class _ {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(_, _, _ = null, _ = null) {
    (_.sm_strDomain = _),
      (_.sm_strController = _),
      (_.sm_strMethod = _),
      (_.sm_strSubmethod = _),
      (_.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let _ = {
      domain: _.sm_strDomain,
      controller: _.sm_strController,
    };
    return (
      _.sm_strMethod && (_.method = _.sm_strMethod),
      _.sm_strSubmethod && (_.submethod = _.sm_strSubmethod),
      _
    );
  }
  static InstrumentLink(_, _, _ = null) {
    let _ = _.GetLinkParam(_, _),
      _ = typeof _ != "string" ? _.GetCuratorClanIDParam(_) : null;
    return _.AddNavParamToURL(_, _, _);
  }
  static GetLinkParam(_, _ = null) {
    let _;
    if (typeof _ != "string") {
      if (_.domain) return _.GetSNRLinkParam(_, _);
      _ = _.feature || "";
    }
    let _;
    if (!_.sm_strComputedLinkPrefix && !_.ComputeStaticLinkPrefix())
      return null;
    _ = _.sm_strComputedLinkPrefix;
    let _ = _.EncodeEventComponent(_);
    return _ && ((_ += "_" + _), _ && (_ += "_" + _)), _;
  }
  static ComputeStaticLinkPrefix() {
    return _.sm_strDomain
      ? ((_.sm_strComputedLinkPrefix = _.ComputeLinkPrefix(
          _.sm_strDomain,
          _.sm_strController,
          _.sm_strMethod,
          _.sm_strSubmethod,
        )),
        !0)
      : (_(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var _ = _(_()),
  _ = _(_()),
  _ = _.createContext({});
var _ = _(_());
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        ..._.GetDefaultParams(),
        ..._,
        ..._,
      }),
      [_, _.domain, _.controller, _.method, _.submethod, _.feature, _.depth],
    );
  return (0, _.jsx)(_, {
    ..._,
    children: _,
  });
}
export { _ };
