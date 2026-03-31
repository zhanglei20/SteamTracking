function _(_) {
  return _ == 3 || _ == 6;
}
var _ = 1;
var _ = 4;
var _ = "18446744073709551615";
function _(_, _ = 0) {
  switch (_) {
    case "english":
      return 0;
    case "german":
      return 1;
    case "french":
      return 2;
    case "italian":
      return 3;
    case "korean":
    case "koreana":
      return 4;
    case "spanish":
      return 5;
    case "schinese":
      return 6;
    case "tchinese":
      return 7;
    case "russian":
      return 8;
    case "thai":
      return 9;
    case "japanese":
      return 10;
    case "portuguese":
      return 11;
    case "polish":
      return 12;
    case "danish":
      return 13;
    case "dutch":
      return 14;
    case "finnish":
      return 15;
    case "norwegian":
      return 16;
    case "swedish":
      return 17;
    case "hungarian":
      return 18;
    case "czech":
      return 19;
    case "romanian":
      return 20;
    case "turkish":
      return 21;
    case "arabic":
      return 25;
    case "brazilian":
      return 22;
    case "bulgarian":
      return 23;
    case "greek":
      return 24;
    case "ukrainian":
      return 26;
    case "latam":
      return 27;
    case "vietnamese":
      return 28;
    case "sc_schinese":
      return 29;
    case "indonesian":
      return 30;
    default:
      return _;
  }
}
function _(_) {
  switch (_) {
    default:
      break;
    case 4:
    case 1:
    case 8:
      return !0;
  }
  return !1;
}
function _(_) {
  switch (_) {
    case 0:
      return "invalid";
    case 1:
      return "gamepad";
    case 2:
      return "desktop";
    case 3:
      return "tray";
    case 4:
      return "all";
    case 5:
      return "push";
  }
}
function _(_) {
  switch (_) {
    case 0:
      return "vgui";
    case 1:
      return "tenfoot";
    case 2:
      return "mobile";
    case 3:
      return "web";
    case 4:
      return "gamepad";
    case 5:
      return "mobilechat";
    case 6:
      return "embedded";
    case 7:
      return "desktop";
    default:
      return "unknown";
  }
}
var _ = _(_());
function _() {
  if (!navigator?.userAgent) return;
  let _ = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (_ && _.length == 2) return _[1];
}
var _ = _.default.createContext({}),
  _ = (_) => {
    let _ = _.default.useContext(_);
    return (
      _(
        _?.bSuppressAssert || _.IN_GAMEPADUI !== void 0,
        "Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.",
      ),
      _
    );
  };
function _(_) {
  let { IN_GAMEPADUI: _, IN_DESKTOPUI: _, IN_VR: _, children: _ } = _,
    _ = _({
      bSuppressAssert: !0,
    }),
    _ = _()?.startsWith("Gamepad VR"),
    _ = _.default.useMemo(
      () => ({
        IN_GAMEPADUI: _ ?? _?.IN_GAMEPADUI ?? _.IN_GAMEPADUI,
        IN_DESKTOPUI: _ ?? _?.IN_DESKTOPUI ?? !1,
        IN_VR: _ ?? _?.IN_VR ?? _,
      }),
      [_, _, _, _, _],
    );
  return _.default.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_) {
  return _(_)?.IN_GAMEPADUI;
}
function _() {
  return _.EREALM === 2;
}
function _() {
  return _.PLATFORM == "windows";
}
function _() {
  return _.PLATFORM == "macos";
}
function _(_, _) {
  return _.length != 0 && _.startsWith(_);
}
var _ = "unknown";
function _() {
  if (!window || !window.location || !window.location.href)
    return console.warn("Unable to determine base url!"), _;
  let _ = window.location.href;
  return _(_, _.STORE_BASE_URL)
    ? _.STORE_BASE_URL
    : _(_, _.COMMUNITY_BASE_URL)
      ? _.COMMUNITY_BASE_URL
      : _(_, _.CHAT_BASE_URL)
        ? _.CHAT_BASE_URL
        : _(_, _.PARTNER_BASE_URL)
          ? _.PARTNER_BASE_URL
          : _(_, _.HELP_BASE_URL)
            ? _.HELP_BASE_URL
            : _(_, _.STEAMTV_BASE_URL)
              ? _.STEAMTV_BASE_URL
              : _(_, _.STATS_BASE_URL)
                ? _.STATS_BASE_URL
                : _(_, _.INTERNAL_STATS_BASE_URL)
                  ? _.INTERNAL_STATS_BASE_URL
                  : _(_, _.STORE_CHECKOUT_BASE_URL)
                    ? _.STORE_CHECKOUT_BASE_URL
                    : _(_, "https://steamloopback.host")
                      ? "https://steamloopback.host"
                      : "";
}
function _() {
  return "partner";
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
