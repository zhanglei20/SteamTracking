var _ = _(_(), 1);
var _ = {
  SimpleModalDialog: "IB4xxefNPtw-",
  SimpleModalDialogHeader: "VDx4AGCUo-c-",
  SimpleModalDialogTitle: "IREsxRBF3-8-",
  XButton: "_-7dzbVH142U-",
};
var _ = _(_(), 1);
function _(_) {
  let {
    onClose: _,
    className: _,
    navID: _,
    children: _,
    strTitle: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: _ ?? "SimpleModalDialog",
    ..._,
    children: (0, _.jsxs)("div", {
      className: (0, _.default)(_, _.SimpleModalDialog),
      children: [
        " ",
        (0, _.jsxs)(_, {
          className: _.SimpleModalDialogHeader,
          children: [
            _ &&
              (0, _.jsx)("h2", {
                className: _.SimpleModalDialogTitle,
                children: _,
              }),
            (0, _.jsx)("button", {
              onClick: (_) => (_("xclick"), _.preventDefault(), !1),
              className: _.XButton,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
        _,
      ],
    }),
  });
}
var _ = _(_());
var _ = [5, 2, 1, 4, 3];
function _(_) {
  let _ = [];
  switch (_) {
    case 5:
      _.push(2), _.push(1);
    case 1:
      _.push(4);
    case 4:
      _.push(3);
      break;
  }
  return _;
}
var _ = new Map();
_.set(2, 5);
_.set(1, 5);
_.set(4, 1);
_.set(3, 4);
function _(_) {
  let _ = [],
    _ = _.get(_);
  return _ && (_.push(_), _.push(..._(_))), _;
}
function _(_) {
  let _ = null;
  switch (_) {
    case 5:
      _ = "#ContentDescriptor_GeneralMatureContent";
      break;
    case 2:
      _ = "#ContentDescriptor_FrequentViolenceOrGore";
      break;
    case 1:
      _ = "#ContentDescriptor_NudityOrSexualContent";
      break;
    case 4:
      _ = "#ContentDescriptor_GratuitousNudityOrSexualContent";
      break;
    case 3:
      _ = "#ContentDescriptor_AdultOnlySexualContent";
      break;
    default:
      throw "Invalid content descriptor.";
  }
  return _(_);
}
export { _, _, _, _ };
