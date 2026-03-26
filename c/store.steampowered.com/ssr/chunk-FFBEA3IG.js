import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = {
  CapsuleMicroTrailer: "Acv6ZIJxoFk-",
  GrowOnHoverSmall: "_7QBdLN5HD9A-",
  GrowOnHoverMedium: "oFuClJZIqYM-",
};
var _ = _(_(), 1);
function _(_) {
  let { _: _, active: _, bIsHoverMode: _, eGrowOnHover: _ } = _,
    { data: _ } = _(_),
    _ = _.default.useRef(0),
    _ = _.default.useRef(null);
  _.default.useLayoutEffect(() => {
    _ && _.current && (_.current.currentTime = _.current);
  }, [_]);
  let _ = (_) => {
      _.current = _.currentTarget.currentTime;
    },
    _ = _(_ ? _ : void 0);
  if ((_ && _.IN_MOBILE) || !_ || !_ || !_.visible || !_) return null;
  let _ = _.filter((_) => _.microtrailer && _.microtrailer.length > 0);
  if (_.length === 0)
    return _ && _.related_items?.parent_appid && (_.type == 1 || _.type == 12)
      ? (0, _.jsx)(_, {
          ..._,
          _: {
            appid: _.related_items.parent_appid,
          },
        })
      : null;
  let _;
  switch (_) {
    case 1:
      _ = _.GrowOnHoverSmall;
      break;
    case 2:
      _ = _.GrowOnHoverMedium;
      break;
  }
  let _ = _[0];
  return (0, _.jsx)("video", {
    className: (0, _.default)(_.CapsuleMicroTrailer, _),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: _,
    onTimeUpdate: _,
    children: _.microtrailer?.map((_) =>
      _.IN_CLIENT && _.type == "video/mp4"
        ? null
        : (0, _.jsx)(
            "source",
            {
              src: _(_, _.filename || ""),
              type: _.type,
            },
            _.filename,
          ),
    ),
  });
}
export { _ };
