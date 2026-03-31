function _(_) {
  return (..._) => {
    let _ = new URL(location.href),
      _ = _.pathname + _.search + _.hash;
    return _(_, {
      action: _,
      data: _,
    });
  };
}
export { _ };
