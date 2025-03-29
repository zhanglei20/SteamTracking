const CLSTAMP = 9643551;

import { a as dt } from "./chunk-GXOBS3EO.js";
import {
  a as B,
  b as $,
  d as lt,
  f as ct,
  g as ut,
  i as Q,
  k as J,
  l as he,
  p as _e,
  r as bt,
  w as vt,
  x as gt,
} from "./chunk-ZILBLQKU.js";
import { a as ce, b as pt, c as ye, d as mt } from "./chunk-BMMGOXQB.js";
import { g as A, j as M, m as h, q as I } from "./chunk-RSFMXIKC.js";
import { d as le, o as E } from "./chunk-5DRJZ3VL.js";
import { a as G } from "./chunk-65YUODX3.js";
import { d as f, e as R } from "./chunk-6W5PXMM2.js";
var T = f(G(), 1);
var Ce = f(dt(), 1),
  S = f(G(), 1),
  ze = f(G(), 1);
var Ye = class {
    m_fnCallbackOnPlaySound = new h();
    RegisterCallbackOnPlaySound(e) {
      return this.m_fnCallbackOnPlaySound.Register(e);
    }
    PlayNavSound(e, t) {
      this.m_fnCallbackOnPlaySound.Dispatch(e, t);
    }
  },
  Ct = new Ye();
var me = f(G());
var Qe = f(G(), 1);
var Se = class {
  async GetObject(e, t) {
    try {
      let n = await this.GetString(e);
      return n ? JSON.parse(n, t) : null;
    } catch {
      return null;
    }
  }
  async StoreObject(e, t) {
    return this.StoreString(e, JSON.stringify(t));
  }
};
var ue = class extends Se {
  GetString(e) {
    return Promise.resolve(localStorage.getItem(e));
  }
  StoreString(e, t) {
    return localStorage.setItem(e, t), Promise.resolve();
  }
  RemoveObject(e) {
    return localStorage.removeItem(e), Promise.resolve();
  }
};
var y = class {
  m_sName;
  m_fnIdGenerator = void 0;
  constructor(e, t) {
    (this.m_sName = e), (this.m_fnIdGenerator = t), P.Get().RegisterLogName(e);
  }
  Debug(...e) {
    this.Log(0, ...e);
  }
  Info(...e) {
    this.Log(1, ...e);
  }
  Warning(...e) {
    this.Log(2, ...e);
  }
  Error(...e) {
    this.Log(3, ...e);
  }
  Assert(e, ...t) {
    e || this.Log(3, "Assertion failed:", ...t);
  }
  IsDebugEnabled() {
    return P.Get().IsDebugLogEnabled(this.m_sName);
  }
  Log(e, ...t) {
    let n = P.Get().IsDebugLogEnabled(this.m_sName);
    if (e == 0 && !n) return;
    let i = this.m_sName,
      r = this.m_fnIdGenerator?.() ?? null;
    r != null && (i += " (" + r + ")");
    let s = P.Get().IncludeBacktraceInLog;
    ft(e, n, s, i, this.m_sName, ...t);
  }
};
R([I], y.prototype, "Debug", 1),
  R([I], y.prototype, "Info", 1),
  R([I], y.prototype, "Warning", 1),
  R([I], y.prototype, "Error", 1),
  R([I], y.prototype, "Assert", 1);
var P = class o {
  static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
  static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
  static s_Singleton = null;
  m_Storage = null;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_SettingsChangedCallback = new h();
  m_bLoading = !1;
  constructor() {
    (this.m_Storage = new ue()), this.LoadSettings();
  }
  LogAsLogManager(...e) {
    ft(1, !0, this.IncludeBacktraceInLog, "LogManager", "LogManager", ...e);
  }
  async LoadSettings() {
    (this.m_bLoading = !0),
      (this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
        o.k_IncludeBacktraceInLog_StorageKey,
      )));
    let e = await this.m_Storage?.GetObject(o.k_EnabledLogNames_StorageKey);
    if (Array.isArray(e)) {
      this.m_setEnabledDebugLogs = new Set(e);
      for (let t of e) this.m_setKnownDebugLogs.add(t);
      this.LogAsLogManager(
        "Loaded debug enabled log names. Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
  }
  async SaveSettings() {
    await this.m_Storage?.StoreObject(
      o.k_EnabledLogNames_StorageKey,
      Array.from(this.m_setEnabledDebugLogs),
    ),
      await this.m_Storage?.StoreObject(
        o.k_IncludeBacktraceInLog_StorageKey,
        this.m_bIncludeBacktraceInLog,
      ),
      this.LogAsLogManager(
        "Saved enabled debug log names. Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  static Get() {
    return o.s_Singleton == null && (o.s_Singleton = new o()), o.s_Singleton;
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(e) {
    this.m_setKnownDebugLogs.add(e);
  }
  IsLogName(e) {
    return this.m_setKnownDebugLogs.has(e);
  }
  IsDebugLogEnabled(e) {
    return this.m_setEnabledDebugLogs.has(e);
  }
  async ToggleDebugLogEnabled(e) {
    this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
  }
  async SetDebugLogEnabled(e, t) {
    t
      ? this.m_setEnabledDebugLogs.add(e)
      : this.m_setEnabledDebugLogs.delete(e),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  async SetAllDebugLogsEnabled(e) {
    (this.m_setEnabledDebugLogs = e
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  RegisterForSettingsChanges(e) {
    return this.m_SettingsChangedCallback.Register(e);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(e) {
    (this.m_bIncludeBacktraceInLog = e),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
};
function hn(o) {
  let e = 0;
  for (let t = 0; t < o.length; t++) e = o.charCodeAt(t) + ((e << 5) - e);
  return [(e >> (0 * 8)) & 255, (e >> (1 * 8)) & 255, (e >> (2 * 8)) & 255];
}
function yn(o) {
  return (o[0] * 299 + o[1] * 587 + o[2] * 114) / 1e3 >= 128;
}
function _n(o) {
  switch (o) {
    case 0:
      return String.fromCodePoint(128027);
    case 1:
      return String.fromCodePoint(8505);
    case 2:
      return String.fromCodePoint(9888);
    case 3:
      return String.fromCodePoint(128165);
  }
}
function ft(o, e, t, n, i, ...r) {
  let a = hn(i).map((b, g) =>
      Math.round(
        Math.max(0, Math.min(255, ((b / 255 - 0.5) * 0.8 + 0.15) * 255)),
      ),
    ),
    l = yn(a),
    c = n;
  t && (c = _n(o) + " " + c);
  let u = r.length >= 1 && typeof r[0] == "string" && r[0].includes("%c"),
    p = u && r.shift(),
    d;
  if (
    (e
      ? (d = [
          `%c${c}%c:${u ? " %c" + p : ""}`,
          `color: ${l ? "black" : "white"}; background: rgb(${a.join(",")}); padding: 0 1ch; border-radius: 3px;`,
          "color: transparent; margin-right: -1ch",
          ...(u ? [""] : []),
          ...r,
        ])
      : (d = r),
    t)
  )
    console.groupCollapsed(...d),
      console.trace("Callstack"),
      console.groupEnd();
  else
    switch (o) {
      case 0:
      case 1:
        console.log(...d);
        break;
      case 2:
        console.warn(...d);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ...d) : console.error(...d);
        break;
    }
}
var ht = () => [...P.Get().LogNames].sort(),
  yt = (o, e) => {
    P.Get().IsLogName(o)
      ? P.Get().SetDebugLogEnabled(o, e)
      : console.warn(`No log named "${o}", available logs:`, ht());
  };
window.DebugLogEnable = (...o) => o.forEach((e) => yt(e, !0));
window.DebugLogDisable = (...o) => o.forEach((e) => yt(e, !1));
window.DebugLogEnableAll = () => P.Get().SetAllDebugLogsEnabled(!0);
window.DebugLogDisableAll = () => P.Get().SetAllDebugLogsEnabled(!1);
window.DebugLogEnableBacktrace = () => P.Get().SetIncludeBacktraceInLog(!0);
window.DebugLogDisableBacktrace = () => P.Get().SetIncludeBacktraceInLog(!1);
window.DebugLogNames = ht;
window.EnableSteamConsole = (o = !0) =>
  P.Get().SetDebugLogEnabled("SteamClient", o);
var je = class {
  m_ActiveInputId;
  m_ActiveInputTimeout;
  m_config;
  constructor(e) {
    this.m_config = e;
  }
  Reset() {
    (this.m_ActiveInputId = void 0),
      this.m_ActiveInputTimeout != null &&
        (clearInterval(this.m_ActiveInputTimeout),
        (this.m_ActiveInputTimeout = void 0));
  }
  HandleInputButtonDown(e, t) {
    if (this.m_ActiveInputId !== e && t != null) {
      this.Reset(), (this.m_ActiveInputId = e);
      let n = () => {
        this.m_ActiveInputTimeout = window.setInterval(() => {
          t();
        }, this.m_config.repeatInterval_ms);
      };
      this.m_config.firstRepeatInterval_ms == null ||
      this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
        ? n()
        : (this.m_ActiveInputTimeout = window.setTimeout(() => {
            t(), n();
          }, this.m_config.firstRepeatInterval_ms));
    }
  }
};
var Fe = class {
  m_config;
  m_inputRepeatGenerator;
  m_repeatOnAxis = 0;
  m_fnRepeatAllowed = () => !0;
  constructor(e) {
    (this.m_config = e), (this.m_inputRepeatGenerator = new je(e));
  }
  Reset() {
    this.m_inputRepeatGenerator.Reset();
  }
  SetRepeatAllowed(e) {
    e || (e = () => !0), (this.m_fnRepeatAllowed = e);
  }
  HandleInputButtonDown(e, t, n) {
    this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(e)
      ? this.m_repeatOnAxis == 0 &&
        ((e == 9 || e == 10) && (this.m_repeatOnAxis = 2),
        (e == 11 || e == 12) && (this.m_repeatOnAxis = 1),
        t(),
        this.m_inputRepeatGenerator.HandleInputButtonDown(e, n))
      : (t(), this.m_inputRepeatGenerator.Reset());
  }
  HandleInputButtonUp(e) {
    if (this.m_config.inputsThatRepeat.has(e) && this.m_repeatOnAxis != 0) {
      let t = e == 9 || e == 10,
        n = e == 11 || e == 12;
      ((this.m_repeatOnAxis == 2 && t) || (this.m_repeatOnAxis == 1 && n)) &&
        ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
    } else this.m_inputRepeatGenerator.Reset();
  }
};
var W = ((m) => (
  (m[(m.INVALID = 0)] = "INVALID"),
  (m[(m.OK = 1)] = "OK"),
  (m[(m.CANCEL = 2)] = "CANCEL"),
  (m[(m.SECONDARY = 3)] = "SECONDARY"),
  (m[(m.OPTIONS = 4)] = "OPTIONS"),
  (m[(m.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
  (m[(m.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
  (m[(m.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
  (m[(m.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
  (m[(m.DIR_UP = 9)] = "DIR_UP"),
  (m[(m.DIR_DOWN = 10)] = "DIR_DOWN"),
  (m[(m.DIR_LEFT = 11)] = "DIR_LEFT"),
  (m[(m.DIR_RIGHT = 12)] = "DIR_RIGHT"),
  (m[(m.SELECT = 13)] = "SELECT"),
  (m[(m.START = 14)] = "START"),
  (m[(m.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
  (m[(m.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
  (m[(m.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
  (m[(m.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
  (m[(m.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
  (m[(m.LPAD_CLICK = 20)] = "LPAD_CLICK"),
  (m[(m.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
  (m[(m.RPAD_CLICK = 22)] = "RPAD_CLICK"),
  (m[(m.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
  (m[(m.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
  (m[(m.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
  (m[(m.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
  (m[(m.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
  (m[(m.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU"),
  m
))(W || {});
var _t = class {
  m_OnGamepadDetectedCallbacks = new h();
  m_ButtonDownCallbacks = new h();
  m_ButtonUpCallbacks = new h();
  m_AnalogCallbacks = new h();
  m_NavigationTypeChangeCallbacks = new h();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new Fe({
    inputsThatRepeat: new Set([9, 10, 11, 12]),
    firstRepeatInterval_ms: 400,
    repeatInterval_ms: 50,
  });
  m_bGamepadDetected = !1;
  RegisterForGamepadDetected(e) {
    return this.m_OnGamepadDetectedCallbacks.Register(e);
  }
  RegisterForGamepadButtonDown(e) {
    return this.m_ButtonDownCallbacks.Register(e);
  }
  RegisterForGamepadButtonUp(e) {
    return this.m_ButtonUpCallbacks.Register(e);
  }
  RegisterForAnalog(e) {
    return this.m_AnalogCallbacks.Register(e);
  }
  RegisterForNavigationTypeChange(e) {
    return this.m_NavigationTypeChangeCallbacks.Register(e);
  }
  SetSourceType(e) {
    this.m_eNavigationSourceType = e;
  }
  GetSourceType() {
    return this.m_eNavigationSourceType;
  }
  SetControllerActive(e) {
    (this.m_nLastActiveControllerIndex = e),
      (this.m_fLastActiveTime = Date.now());
  }
  GetActiveControllerIndex() {
    return this.m_nLastActiveControllerIndex;
  }
  GetActiveControllerTime() {
    return this.m_fLastActiveTime;
  }
  SetRepeatAllowed(e) {
    this.m_ButtonRepeatHandler.SetRepeatAllowed(e);
  }
  OnGamepadDetected() {
    console.log("Gamepad detected"),
      (this.m_bGamepadDetected = !0),
      this.m_OnGamepadDetectedCallbacks.Dispatch();
  }
  OnButtonDown(e, t) {
    t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonDown(
        e,
        () => this.DispatchButtonDown(e, !1),
        () => this.DispatchButtonDown(e, !0),
      );
  }
  OnButtonUp(e, t) {
    t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
      this.m_ButtonUpCallbacks.Dispatch(
        e,
        this.m_eNavigationSourceType,
        this.m_nLastActiveControllerIndex,
      );
  }
  DispatchButtonDown(e, t) {
    this.m_ButtonDownCallbacks.Dispatch(
      e,
      this.m_eNavigationSourceType,
      this.m_nLastActiveControllerIndex,
      t,
    );
  }
  OnAnalogPad(e, t, n, i) {
    i === void 0 && (i = -1),
      this.SetControllerActive(i),
      this.m_AnalogCallbacks.Dispatch(
        e,
        this.m_nLastActiveControllerIndex,
        t,
        n,
      );
  }
  OnNavigationTypeChanged(e) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(e);
  }
};
var Z = ((i) => (
    (i[(i.GAMEPAD = 0)] = "GAMEPAD"),
    (i[(i.KEYBOARD = 1)] = "KEYBOARD"),
    (i[(i.APPLICATION = 2)] = "APPLICATION"),
    (i[(i.BROWSER = 3)] = "BROWSER"),
    i
  ))(Z || {}),
  Sn = {
    1: "vgp_onok",
    2: "vgp_oncancel",
    3: "vgp_onsecondaryaction",
    4: "vgp_onoptions",
    14: "vgp_onmenu",
  };
function N(o, e, t) {
  return o.addEventListener(e, t), () => Fn(o, e, t);
}
function Fn(o, e, t) {
  o.removeEventListener(e, t);
}
function St(o, e) {
  return N(o, "vgp_onbuttondown", e);
}
function Ft(o, e) {
  return N(o, "vgp_onbuttonup", e);
}
function Te(o, e) {
  return N(o, "vgp_onok", ee(e));
}
function Tt(o, e) {
  return N(o, "vgp_oncancel", ee(e));
}
function Rt(o, e) {
  return N(o, "vgp_onsecondaryaction", ee(e));
}
function It(o, e) {
  return N(o, "vgp_onoptions", ee(e));
}
function Dt(o, e) {
  return N(o, "vgp_onmenu", ee(e));
}
function Re(o, e) {
  return N(o, "vgp_ondirection", ee(e));
}
function At(o, e) {
  return N(o, "vgp_onfocus", e);
}
function Ie(o, e) {
  return N(o, "vgp_onblur", e);
}
function q(o, e, t) {
  let n = o;
  if (!n || !n.ownerDocument || !n.ownerDocument.defaultView) return !0;
  let i = new n.ownerDocument.defaultView.CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: t,
  });
  return n.dispatchEvent(i);
}
function Et(o) {
  let e = [9, 10, 11, 12],
    t = !0,
    n = !1,
    i = Sn[o.detail.button];
  return (
    i
      ? ((n = !0), (t = q(o.target, i, o.detail)))
      : e.indexOf(o.detail.button) !== -1 &&
        ((n = !0), (t = q(o.target, "vgp_ondirection", o.detail))),
    { bUnhandled: t, bHadLogicalEventMapping: n }
  );
}
function ee(o) {
  return (e) => {
    o(e) !== !1 && (e.stopPropagation(), e.preventDefault());
  };
}
function Pt(o) {
  let {
      onOKActionDescription: e,
      onCancelActionDescription: t,
      onSecondaryActionDescription: n,
      onOptionsActionDescription: i,
      onMenuActionDescription: r,
      actionDescriptionMap: s,
    } = o,
    a = { ...s };
  return (
    e !== void 0 && (a[1] = e),
    t !== void 0 && (a[2] = t),
    n !== void 0 && (a[3] = n),
    i !== void 0 && (a[4] = i),
    r !== void 0 && (a[14] = r),
    a
  );
}
var Rn = f(E(), 1),
  Tn = new y("GamepadEvents").Debug;
function U(o, e, t) {
  t === void 0 &&
    (t = [
      o.onButtonDown,
      o.onButtonUp,
      o.onOKButton,
      o.onCancelButton,
      o.onSecondaryButton,
      o.onOptionsButton,
      o.onMenuButton,
      o.onGamepadDirection,
      o.onGamepadFocus,
      o.onGamepadBlur,
    ]),
    Qe.default.useEffect(() => {
      let n = e.current,
        i = [];
      return (
        n &&
          (o.onButtonDown && i.push(St(n, o.onButtonDown)),
          o.onButtonUp && i.push(Ft(n, o.onButtonUp)),
          o.onOKButton && i.push(Te(n, o.onOKButton)),
          o.onCancelButton && i.push(Tt(n, o.onCancelButton)),
          o.onSecondaryButton && i.push(Rt(n, o.onSecondaryButton)),
          o.onOptionsButton && i.push(It(n, o.onOptionsButton)),
          o.onMenuButton && i.push(Dt(n, o.onMenuButton)),
          o.onGamepadDirection && i.push(Re(n, o.onGamepadDirection)),
          o.onGamepadFocus && i.push(At(n, o.onGamepadFocus)),
          o.onGamepadBlur && i.push(Ie(n, o.onGamepadBlur))),
        () => i.forEach((r) => r())
      );
    }, t);
}
function O(o) {
  return o.stopPropagation(), !1;
}
function Nt(o, e, t) {
  let { onButtonDown: n, ...i } = o,
    r = Qe.default.useCallback(
      (a) => {
        n && n(a),
          Tn(
            "Gamepad Event fired:",
            a.detail.button,
            ", handled:",
            n != null,
            ", propagation stopped:",
            a.cancelBubble,
          ),
          !a.cancelBubble && t.OnRootButtonDown(a);
      },
      [n, t],
    );
  U(i, e),
    U(
      {
        onButtonDown: r,
        onButtonUp: O,
        onOKButton: O,
        onCancelButton: O,
        onSecondaryButton: O,
        onOptionsButton: O,
        onMenuButton: O,
        onGamepadDirection: O,
        onGamepadFocus: O,
        onGamepadBlur: O,
      },
      e,
      [r],
    );
}
var w = f(G(), 1);
var X = f(G(), 1);
var kt = f(E(), 1),
  wt = X.createContext(void 0);
function Do(o) {
  let { controller: e } = o;
  return (
    X.useEffect(() => {
      e.Init();
    }, [e]),
    (0, kt.jsx)(wt.Provider, { value: e, children: o.children })
  );
}
function te() {
  return X.useContext(wt);
}
function Ao() {
  return he(te()?.GetShowDebugFocusRing()) ?? !1;
}
function Eo(o) {
  let e = te();
  X.useEffect(() => {
    if (o) return e.RegisterInputSource(o);
  }, [e, o]);
}
var Ae = f(E(), 1),
  De = w.default.createContext({ focusNavWindow: null, bSupportsFocus: !0 });
function In(o) {
  let {
      ownerWindow: e,
      refFocusNavContext: t,
      children: n,
      suppressGamepadInput: i = !1,
    } = o,
    r = te(),
    s = w.default.useContext(De),
    [a] = w.default.useState(() => s.focusNavWindow || r.CreateContext(e, i)),
    l = he(r.NavigationSourceSupportsFocus) ?? !1;
  w.default.useEffect(
    () => (
      a.OnMount(e),
      e.document.hasFocus() && a.OnActivate(e),
      () => {
        a.Destroy(e);
      }
    ),
    [a, e],
  ),
    ct(t, a);
  let c = w.default.useMemo(
    () => ({ focusNavWindow: a, bSupportsFocus: l }),
    [a, l],
  );
  return (0, Ae.jsxs)(De.Provider, {
    value: c,
    children: [(0, Ae.jsx)(Dn, { ownerWindow: e, context: a }), n],
  });
}
function Dn(o) {
  let { ownerWindow: e, context: t } = o,
    n = w.default.useMemo(() => () => t.OnActivate(e), [t, e]),
    i = w.default.useMemo(() => () => t.OnDeactivate(e), [t, e]);
  return (
    Q(e, "touchstart", n, { capture: !0 }),
    Q(e, "mousedown", n, { capture: !0 }),
    Q(e, "focus", n),
    Q(e.document, "focusin", n),
    Q(e, "blur", i),
    null
  );
}
function xt() {
  return w.default.useContext(De)?.focusNavWindow;
}
function de(o = !0) {
  return w.default.useContext(De)?.bSupportsFocus ?? o;
}
var Pn = f(E());
function Mo() {
  return me.default.createRef();
}
var Bo = V("div", { bDOMElementFocusByDefault: !1 }),
  Oo = V("button", { bActivateByDefault: (o) => o.type === "submit" }),
  Ho = V("a", { bActivateByDefault: !0 }),
  Wo = Je("input"),
  Uo = Je("textarea"),
  Vo = V("img", { bDOMElementFocusByDefault: !1 }),
  Ko = V("label", { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  zo = V("section", { bFocusableByDefault: !1 }),
  $o = V("form", { bFocusableByDefault: !1 });
function qo() {
  let { ref: o } = pe({ focusable: !0 });
  return (
    U(
      { onOKButton: (0, me.useCallback)(() => (o.current?.click(), !0), [o]) },
      o,
    ),
    o
  );
}
function Xo(o, e, t = !1) {
  me.default.useEffect(() => {
    let n = o.current;
    n && (e ? n.Activate(t) : n.Deactivate());
  }, [e, t, o]);
}
var k = class o {
  m_root;
  constructor(e) {
    this.m_root = e;
  }
  static SerializeNavState(e, t = !0, n = !0) {
    return { root: o.SerializeNavNode(e, t, n), bHadFocus: e.BFocusWithin() };
  }
  static SerializeNavNode(e, t = !0, n = !0) {
    let i = null,
      [r, s] = e.GetChildren();
    return (
      r.length &&
        s != -1 &&
        t &&
        (i = r.map((a, l) => o.SerializeNavNode(a, l == s || n, n))),
      { sNavKey: e.NavKey, iActiveChild: s, rgChildren: i }
    );
  }
  static RestoreSerializedNavState(e, t, n = 0) {
    let { root: i, bHadFocus: r } = t;
    e.Tree.Controller.RestoreHistoryTransaction(() => {
      o.RestoreSerializedNavNode(e, i),
        (n == 1 || (n == 0 && r)) && e.BTakeFocus(2);
    });
  }
  static RestoreSerializedNavNode(e, t) {
    let { sNavKey: n, iActiveChild: i, rgChildren: r } = t;
    if (
      (n && A(n == e.NavKey, "navkey mismatch"),
      e.SetActiveChild(i),
      r && r.length)
    ) {
      let [s] = e.GetChildren(),
        a = new Map();
      s.forEach((u) => {
        u.NavKey && a.set(u.NavKey, u);
      });
      for (let u of r) {
        if (!u.sNavKey) continue;
        let p = a.get(u.sNavKey);
        p && o.RestoreSerializedNavNode(p, u);
      }
      if (i != -1 && r[i]?.sNavKey) {
        let u = a.get(r[i].sNavKey);
        u && e.SetActiveChild(s.indexOf(u));
      }
      let l = 0,
        c = 0;
      for (; l < s.length && c < r.length; ) {
        for (; l < s.length && s[l].NavKey; ) l++;
        for (; c < r.length && r[c].sNavKey; ) c++;
        if (l >= s.length || c >= r.length) break;
        o.RestoreSerializedNavNode(s[l], r[c]), l++, c++;
      }
    }
  }
};
function Lt(o) {
  return k.SerializeNavState(o, !0, !1);
}
function Gt(o, e, t = 0) {
  return k.RestoreSerializedNavState(o, e, t);
}
var Ee = class extends k {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(k.SerializeNavState(this.m_root));
    }
    PopState(e = 0) {
      this.m_rgHistory.length &&
        k.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
    }
  },
  Pe = class extends k {
    m_mapHistory = new Map();
    SaveState(e) {
      this.m_mapHistory.set(e, k.SerializeNavState(this.m_root));
    }
    RestoreState(e, t = 0) {
      let n = this.m_mapHistory.get(e);
      return n
        ? (console.log(`Restoring history for state ${e}`),
          k.RestoreSerializedNavState(this.m_root, n, t),
          !0)
        : !1;
    }
  };
var ne = { x: "y", y: "x" };
function ei() {
  return { x: 0, y: 0 };
}
function Nn(o, e) {
  return o.x * e.x + o.y * e.y;
}
function wn(o, e) {
  return { x: e.x - o.x, y: e.y - o.y };
}
function ti(o, e) {
  let t = wn(o, e);
  return Math.sqrt(Nn(t, t));
}
function Mt(o, e) {
  return o == null || e == null
    ? o === e
    : typeof o != "object" ||
        typeof e != "object" ||
        Object.keys(o).length !== Object.keys(e).length
      ? !1
      : Object.keys(o).every((t) => e.hasOwnProperty(t) && o[t] === e[t]);
}
function Ze(o, e, t) {
  let n = [],
    [i, r] = o.GetChildren(),
    s = o.GetActiveChild(),
    a,
    l = s ? s.Element?.getBoundingClientRect() : null;
  if (s) {
    let p = Ht(s, e, t);
    if (
      p &&
      !p.offScreen &&
      ((a = Bt(s, p, p.overlap, t)), a && !a.visibility.offScreen)
    )
      return a;
    p && n.push({ child: s, visibility: p });
  }
  let c = t || l;
  for (let p = 0; p < i.length; p++) {
    let d = i[p];
    if (d == s) continue;
    let b = Ht(d, e, c ?? void 0);
    b && n.push({ child: d, visibility: b });
  }
  n.sort(Ot);
  let u;
  for (let p of n) {
    let { child: d, visibility: b } = p;
    if (
      b.offScreen &&
      u &&
      (!u.visibility.offScreen ||
        (b.distance && b.distance > u.visibility.distance))
    )
      break;
    let g = d == s ? a : Bt(d, b, b.overlap || e, c ?? void 0);
    g && (!u || Ot(g, u) < 0) && (u = g);
  }
  return u;
}
function Bt(o, e, t, n) {
  switch (o.GetFocusable()) {
    case "none":
      return;
    case "children":
      return Ze(o, e.overlap || t, n);
    case "self":
      return { child: o, visibility: e };
  }
}
function Ot(o, e) {
  let t = o.visibility,
    n = e.visibility;
  return t.offScreen
    ? n.offScreen
      ? t.distance - n.distance
      : 1
    : n.offScreen
      ? -1
      : t.distance - n.distance;
}
function Ht(o, e, t) {
  let n = o.Element?.getBoundingClientRect(),
    i = o.GetFocusable(),
    r;
  if (i == "none" || !n || !e) return null;
  if (i == "self") {
    if (
      n.top < e.top ||
      n.right > e.right ||
      n.bottom > e.bottom ||
      n.left < e.left
    ) {
      let a = n.top + n.height / 2,
        l = n.left + n.width / 2;
      if (a < e.top) return { offScreen: "top", distance: e.top - a };
      if (l > e.right) return { offScreen: "right", distance: l - e.right };
      if (a > e.bottom) return { offScreen: "bottom", distance: a - e.bottom };
      if (l < e.left) return { offScreen: "left", distance: e.left - l };
    }
    t && (r = bt(n, t));
  } else if (i == "children") {
    let a = o.Element;
    if (!a) return null;
    if (a.scrollHeight > n.height || a.scrollWidth > n.width) {
      let l = a.ownerDocument.defaultView.getComputedStyle(a);
      if (l.overflowX == "visible" || l.overflowY == "visible")
        return { overlap: e };
    }
    if (n.bottom < e.top)
      return { offScreen: "top", distance: e.top - n.bottom };
    if (n.left > e.right)
      return { offScreen: "right", distance: n.left - e.right };
    if (n.top > e.bottom)
      return { offScreen: "bottom", distance: n.top - e.bottom };
    if (n.right < e.left)
      return { offScreen: "left", distance: e.left - n.right };
  }
  return {
    overlap: {
      top: Math.max(n.top, e.top),
      right: Math.min(n.right, e.right),
      bottom: Math.min(n.bottom, e.bottom),
      left: Math.max(n.left, e.left),
    },
    distance: r,
  };
}
function Wt(o) {
  return o != null && o.focus !== void 0;
}
function Ne(o) {
  let e;
  return o && (e = o.ownerDocument.defaultView), e;
}
function Ut(o, e) {
  let t = o?.parentElement;
  for (; t; ) {
    if (Wt(t)) {
      if (!e || e == "x") {
        let n = window.getComputedStyle(t);
        if (
          n.overflowX == "scroll" ||
          n.overflowX == "auto" ||
          n.position == "fixed"
        )
          break;
      }
      if (!e || e == "y") {
        let n = window.getComputedStyle(t);
        if (
          n.overflowY == "scroll" ||
          n.overflowY == "auto" ||
          n.position == "fixed"
        )
          break;
      }
    }
    t = t.parentElement;
  }
  return Wt(t) ? t : null;
}
function et(o, e) {
  if (!("ownerDocument" in o)) return !0;
  let t = o.ownerDocument.defaultView.getComputedStyle(o),
    n = e === "x" ? t.overflowX : t.overflowY;
  return n === "auto" || n === "scroll";
}
var we = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(e, t) {
      (this.m_window = e), (this.m_options = { timing: "sine", ...t });
    }
    Start() {
      (this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
      let e;
      switch (this.m_options.timing) {
        case "linear":
          e = function (t) {
            return t;
          };
          break;
        case "cubic-in-out":
          e = function (t) {
            return t < 0.5
              ? 4 * t * t * t
              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          };
          break;
        case "sine":
        default:
          e = function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          };
          break;
      }
      (this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
        this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    BIsActive() {
      return this.m_bActive;
    }
    End() {
      if (this.m_bActive) {
        try {
          this.Update(1);
        } catch {}
        this.ClearInterval(), this.FireOnComplete();
      }
    }
    FireOnComplete() {
      this.m_options.onComplete && this.m_options.onComplete();
    }
    Cancel() {
      this.m_bActive = !1;
    }
    OnInterval(e) {
      if (!this.m_bActive) return;
      let t = performance.now() - this.m_msStart,
        n = !1;
      if (t >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let i = t / this.m_options.msDuration;
      try {
        this.Update(e(i));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  ke = class extends we {
    m_fnCallback;
    constructor(e, t, n) {
      super(e, t), (this.m_fnCallback = n);
    }
    Update(e) {
      this.m_fnCallback(e);
    }
  },
  xe = class extends we {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(e, t, n) {
      super("ownerDocument" in e ? Ne(e) : e, n),
        (this.m_object = e),
        (this.m_propTargets = t);
    }
    Start() {
      this.m_props = {};
      for (let e in this.m_propTargets) {
        let t = parseFloat(this.m_object[e]) || 0,
          n = this.m_propTargets[e];
        t != n && (this.m_props[e] = { start: t, end: n });
      }
      super.Start();
    }
    Update(e) {
      for (let t in this.m_props) {
        let n = this.m_props[t],
          i = n.start + (n.end - n.start) * e;
        this.m_object[t] = i;
      }
    }
  };
var Y = new y("ScrollSnap").Debug,
  xn = !1;
var Ln = 1.4,
  tt,
  Gn = 500;
function zt(o, e) {
  let t = o.Element;
  if (!t) return;
  let n = [o];
  for (let i = o.Parent; i; i = i.Parent) {
    let r = i.m_Properties?.scrollIntoViewWhenChildFocused;
    r === "force" ? (n = [i]) : r && n.push(i);
  }
  for (; n.length; ) {
    let i = n.pop(),
      r = n.length == 0,
      s = i?.m_Properties?.scrollIntoViewType;
    if (
      (s === void 0 && (xn ? (s = 1) : (s = 0)),
      i?.m_Properties?.fnScrollIntoViewHandler &&
        i.m_Properties.fnScrollIntoViewHandler(o, e, i) !== !1)
    )
      continue;
    let a = i.m_element,
      l = s == 1 || s == 2 || !r;
    if (!e)
      l
        ? Me(t, a, "auto")
        : a?.scrollIntoView({
            behavior: "auto",
            block: "nearest",
            inline: "nearest",
          });
    else {
      let c = l ? be(a) : a.getBoundingClientRect(),
        u = !1,
        p = Math.max((c.bottom - c.top) * Ln, 40);
      ((tt && performance.now() - tt < Gn) ||
        c.bottom < -p ||
        c.top > window.innerHeight + p) &&
        (u = !0);
      let d = u ? "auto" : "smooth";
      u && (tt = performance.now()),
        o.Tree.Controller.BIsRestoringHistory() && (d = "auto"),
        l ? Me(t, a, d) : a.scrollIntoView({ behavior: d, block: "nearest" });
    }
  }
}
function be(o) {
  if (!o) return { left: 0, top: 0, right: 0, bottom: 0 };
  if (!("ownerDocument" in o))
    return { left: 0, right: o.innerWidth, top: 0, bottom: o.innerHeight };
  let e = 0,
    t = 0,
    n = o;
  for (
    ;
    n &&
    ((e += n.offsetTop),
    (t += n.offsetLeft),
    !("ownerDocument" in n && window.getComputedStyle(n).position === "fixed"));
  )
    n = n.offsetParent;
  for (n = o?.parentElement; n; ) {
    let { scrollTop: i, scrollLeft: r } = Hn(n);
    if (
      ((e -= i),
      (t -= r),
      "ownerDocument" in n && window.getComputedStyle(n).position === "fixed")
    )
      break;
    n = n.parentElement;
  }
  return {
    left: t,
    top: e,
    right: t + o.offsetWidth,
    bottom: e + o.offsetHeight,
  };
}
function nt(o, e) {
  return e == "x"
    ? [o.left, o.right, o.right - o.left]
    : [o.top, o.bottom, o.bottom - o.top];
}
function Vt(o, e, t, n) {
  let [i, r, s] = nt(o, n),
    [a, l, c] = nt(e, n),
    [u, p] = nt(t, n);
  return i < a && r > l
    ? 0
    : (i < a && s <= c) || (r > l && s > c)
      ? i - a - u
      : (i < a && s > c) || (r > l && s <= c)
        ? r - l + p
        : 0;
}
function K(o) {
  return o == "auto"
    ? 0
    : o.endsWith("px")
      ? parseInt(o)
      : (console.log("Unsupported length", o), 0);
}
function Mn(o) {
  let e;
  return (
    "ownerDocument" in o
      ? (e = o.ownerDocument.defaultView.getComputedStyle(o))
      : (e = o.document.defaultView.getComputedStyle(
          window.document.documentElement,
        )),
    {
      left: K(e.scrollPaddingLeft),
      right: K(e.scrollPaddingRight),
      top: K(e.scrollPaddingTop),
      bottom: K(e.scrollPaddingBottom),
    }
  );
}
function Bn(o) {
  if (!("ownerDocument" in o)) return { left: 0, right: 0, top: 0, bottom: 0 };
  let e = o.ownerDocument.defaultView.getComputedStyle(o);
  return {
    left: K(e.scrollMarginLeft),
    right: K(e.scrollMarginRight),
    top: K(e.scrollMarginTop),
    bottom: K(e.scrollMarginBottom),
  };
}
function On(o, e) {
  let t = Mn(o);
  return {
    left: Math.max(0, e.left + t.left),
    right: Math.max(0, e.right - t.right),
    top: Math.max(0, e.top + t.top),
    bottom: Math.max(0, e.bottom - t.bottom),
  };
}
function Le(o) {
  return o > -1 && o < 1;
}
function Me(o, e, t, n, i) {
  Y(
    "----------------------------------------------------------------------------------",
  ),
    Y("Scrolling Into View:", e);
  let r = [],
    s = e,
    a = be(e),
    l = i ?? Number.MAX_VALUE;
  for (; s; ) {
    let u = Ut(s);
    u || (u = Ne(s));
    let p = Bn(s),
      d = be(u),
      b = On(u, d),
      g = Kt(u),
      v = { element: u, left: 0, top: 0 };
    if (
      (Y(
        "Checking scroll div",
        u,
        `scroll y:${g.scrollTop} of ${g.MaxScrollTop()}, x:${g.scrollLeft} of ${g.MaxScrollLeft()}, adjusted =>`,
        b,
        "target => ",
        a,
      ),
      (!n || n == "y") &&
        et(u, "y") &&
        ((v.top = Vt(a, b, p, "y")),
        (v.top = le.Clamp(v.top, -g.scrollTop, g.MaxScrollTop() - g.scrollTop)),
        i &&
          ((v.top = Math.min(l, Math.abs(v.top)) * (v.top < 0 ? -1 : 1)),
          (l -= Math.abs(v.top))),
        Y(`- checked y: ${v.top}`)),
      (!n || n == "x") &&
        et(u, "x") &&
        ((v.left = Vt(a, b, p, "x")),
        (v.left = le.Clamp(
          v.left,
          -g.scrollLeft,
          g.MaxScrollLeft() - g.scrollLeft,
        )),
        i &&
          ((v.left = Math.min(l, Math.abs(v.left)) * (v.left < 0 ? -1 : 1)),
          (l -= Math.abs(v.left))),
        Y(`- checked x: ${v.left}`)),
      r.push(v),
      (i && !l) || !("ownerDocument" in u))
    )
      break;
    let F = window.getComputedStyle(u);
    if (F.position === "fixed" || F.position === "sticky") break;
    (s = u),
      (a = {
        top: a.top - v.top,
        right: a.right - v.left,
        bottom: a.bottom - v.top,
        left: a.left - v.left,
      });
  }
  let c = !1;
  for (let u of r) {
    if (Le(u.left) && Le(u.top)) continue;
    let p = Kt(u.element),
      d = p.scrollTop + u.top,
      b = p.scrollLeft + u.left;
    (b = le.Clamp(b, 0, p.MaxScrollLeft())),
      (d = le.Clamp(d, 0, p.MaxScrollTop())),
      !(Le(p.scrollLeft - b) && Le(p.scrollTop - d)) &&
        (p.scrollTo({ left: b, top: d, behavior: t }),
        c || (Y("Scrolling:"), (c = !0)),
        Y(`- ${u.top},${u.left} => ${d}, ${b}, behavior: ${t}`, u.element));
  }
}
var Ge = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(e) {
    "ownerDocument" in e
      ? ((this.m_element = e),
        (this.m_fnOriginalScrollTo = e.scrollTo),
        (this.m_element.scrollTo = (t, n) => {
          typeof t == "number"
            ? this.scrollTo({ left: t, top: n })
            : this.scrollTo(t);
        }))
      : ((this.m_window = e), (this.m_element = e.document.documentElement));
  }
  ResetScrollState() {
    (this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = "");
  }
  scrollTo(e) {
    if (e?.behavior != "smooth")
      this.m_animation &&
        (this.m_animation.Cancel(), (this.m_animation = void 0)),
        this.m_window
          ? this.m_window.scrollTo(e)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [e]),
        this.ResetScrollState();
    else {
      let t = e.left ?? this.scrollLeft,
        n = e.top ?? this.scrollTop,
        i = "sine";
      if (
        (this.m_animation && (this.m_animation.Cancel(), (i = "linear")),
        Math.max(
          Math.abs(this.currentScrollTop - n),
          Math.abs(this.currentScrollLeft - t),
        ) > 0)
      ) {
        let a = {
          msDuration: 200,
          timing: i,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let l = this.currentScrollLeft,
            c = this.currentScrollTop;
          this.m_animation = new ke(this.m_window, a, (u) => {
            this.m_window?.scrollTo({
              left: l + (t - l) * u,
              top: c + (n - c) * u,
              behavior: "auto",
            });
          });
        } else
          (this.m_element.style.scrollSnapType = "initial"),
            (this.m_animation = new xe(
              this.m_element,
              { scrollTop: n, scrollLeft: t },
              a,
            ));
        (this.m_scrollLeftTarget = t),
          (this.m_scrollTopTarget = n),
          this.m_animation.Start();
      }
    }
  }
  get clientWidth() {
    return this.m_window
      ? this.m_window.innerWidth
      : this.m_element.clientWidth;
  }
  get clientHeight() {
    return this.m_window
      ? this.m_window.innerHeight
      : this.m_element.clientHeight;
  }
  get currentScrollLeft() {
    return this.m_window ? this.m_window.scrollX : this.m_element.scrollLeft;
  }
  get currentScrollTop() {
    return this.m_window ? this.m_window.scrollY : this.m_element.scrollTop;
  }
  get scrollLeft() {
    return this.m_scrollLeftTarget ?? this.currentScrollLeft;
  }
  get scrollTop() {
    return this.m_scrollTopTarget ?? this.currentScrollTop;
  }
  get scrollWidth() {
    return this.m_element.scrollWidth;
  }
  get scrollHeight() {
    return this.m_element.scrollHeight;
  }
  MaxScrollTop() {
    return this.scrollHeight - this.clientHeight;
  }
  MaxScrollLeft() {
    return this.scrollWidth - this.clientWidth;
  }
};
R([I], Ge.prototype, "ResetScrollState", 1);
var ot = new WeakMap();
function Kt(o) {
  let e = ot.get(o);
  return e || ((e = new Ge(o)), ot.set(o, e)), e;
}
function Hn(o) {
  let e = ot.get(o);
  return e
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop };
}
var z = new y("FocusNavigationMovement").Debug,
  He = ((a) => (
    (a[(a.NONE = 0)] = "NONE"),
    (a[(a.COLUMN = 1)] = "COLUMN"),
    (a[(a.ROW = 2)] = "ROW"),
    (a[(a.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
    (a[(a.ROW_REVERSE = 4)] = "ROW_REVERSE"),
    (a[(a.GRID = 5)] = "GRID"),
    (a[(a.GEOMETRIC = 6)] = "GEOMETRIC"),
    a
  ))(He || {}),
  $t = ((r) => (
    (r[(r.FIRST = 0)] = "FIRST"),
    (r[(r.LAST = 1)] = "LAST"),
    (r[(r.MAINTAIN_X = 2)] = "MAINTAIN_X"),
    (r[(r.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
    (r[(r.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD"),
    r
  ))($t || {});
var qt = ((n) => (
    (n[(n.INVALID = 0)] = "INVALID"),
    (n[(n.FORWARD = 1)] = "FORWARD"),
    (n[(n.BACKWARD = 2)] = "BACKWARD"),
    n
  ))(qt || {}),
  oe = class oe {
    m_Tree;
    m_Parent;
    m_rgChildren = [];
    m_ActiveChild;
    m_iLastActiveChildIndex = -1;
    m_Properties;
    m_element;
    m_FocusRing;
    m_bChildrenSorted = !1;
    m_bAutoFocusChild = !1;
    m_bMounted = !1;
    m_nDepth;
    m_bFocused = !1;
    m_FocusCallbackList = new h();
    m_bFocusWithin = !1;
    m_FocusWithinCallbackList = new h();
    m_ActionDescriptionsChangedCallbackList = new h();
    m_RetainFocusParent = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(e, t, n) {
      (this.m_Tree = e),
        (this.m_Parent = t),
        (this.m_FocusRing = n),
        (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
    }
    CreateHandle() {
      return new We(this);
    }
    get Tree() {
      return this.m_Tree;
    }
    get NavKey() {
      return this.m_Properties?.navKey
        ? this.m_Properties.navKey
        : this.m_element?.id
          ? this.m_element.id
          : void 0;
    }
    get Element() {
      return this.m_element;
    }
    get Parent() {
      return this.m_Parent;
    }
    SetProperties(e) {
      let t = !Mt(
          this.m_Properties?.actionDescriptionMap,
          e?.actionDescriptionMap,
        ),
        n = this.m_Properties?.retainFocus,
        i = this.m_Properties?.noFocusRing;
      (this.m_Properties = e || {}),
        t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.retainFocus && !n
          ? this.PropagateRetainFocusParentToChildren(this)
          : !this.m_Properties.retainFocus &&
            n &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
        this.m_Properties.noFocusRing && !i && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(2, this, this)
          : !this.m_Properties.noFocusRing &&
            i &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(2, this, this),
        this.m_element && this.RegisterDOMEvents();
    }
    BWantsAutoFocus() {
      return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
    }
    BWantsPreferredFocus() {
      return this.m_Properties?.preferredFocus;
    }
    BWantsFocusRing() {
      return (
        !this.m_Properties?.noFocusRing ||
        this.m_Tree.Controller.GetShowDebugFocusRing().Value
      );
    }
    GetBoundingRect() {
      return this.m_element && this.m_element.getBoundingClientRect();
    }
    SetHasFocus(e) {
      e != this.m_bFocused &&
        ((this.m_bFocused = e),
        this.m_FocusCallbackList.Dispatch(this.m_bFocused));
    }
    SetFocusWithin(e) {
      e != this.m_bFocusWithin &&
        ((this.m_bFocusWithin = e),
        this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
        this.m_Properties?.onFocusWithin &&
          this.m_Properties.onFocusWithin(this.m_bFocusWithin));
    }
    BHasFocus() {
      return this.m_bFocused;
    }
    BFocusWithin() {
      return this.m_bFocusWithin;
    }
    get FocusCallbackList() {
      return this.m_FocusCallbackList;
    }
    get FocusWithinCallbackList() {
      return this.m_FocusWithinCallbackList;
    }
    ForceMeasureFocusRing() {
      this.m_FocusRing?.OnForceMeasureFocusRing();
    }
    get ActionDescriptionChangedCallbackList() {
      return this.m_ActionDescriptionsChangedCallbackList;
    }
    GetActiveActionDescriptions() {
      return this.BuildConsolidatedActionDescriptionMap({});
    }
    BuildConsolidatedActionDescriptionMap(e) {
      let t = this.m_Properties?.actionDescriptionMap;
      if (t)
        for (let n in t) {
          let i = n;
          e[i] === void 0 && (e[i] = t[i]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
        : e;
    }
    AddChild(e) {
      this.m_rgChildren.push(e),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.retainFocus
          ? e.SetRetainFocusParent(this)
          : this.m_RetainFocusParent &&
            e.SetRetainFocusParent(this.m_RetainFocusParent),
        this.m_bMounted &&
          e.BFocusWithin() &&
          (A(
            !this.m_ActiveChild && this.BFocusWithin(),
            "Invalid focus state in AddChild",
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1));
    }
    OnMount(e) {
      (this.m_element = e),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : A(this == this.m_Tree.Root, "Only root should have no parent"),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents();
      let t = this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus(),
        n = this.m_Properties?.autoFocus || t;
      if (this.BWantsAutoFocus() || n) {
        let i = -1;
        this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (i = this.m_rgChildren.findIndex((r) => r.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || n || i !== -1) &&
            (this.SetActiveChild(i),
            !this.m_Parent || this.m_Parent.m_element
              ? t
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_RetainFocusParent,
                    { bFocusDescendant: !0 },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0));
      } else if (this.m_rgChildren.length) {
        let i = this.m_rgChildren.findIndex((r) => r.BFocusWithin());
        i != -1 &&
          (this.SetActiveChild(i),
          A(
            this.m_bFocusWithin,
            "Child has focus, we should be m_bFocusWithin",
          ));
      }
    }
    DEV_SetDebugPropsOnElement() {}
    OnUnmount() {
      this.m_Properties?.retainFocus &&
        this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
        (this.m_bMounted = !1);
      let e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      (this.m_bFocused || e) &&
        (z(
          `The focused node is unmounting, ${this.m_RetainFocusParent ? "will transfer to retain focus ancestor" : "will blur"}.`,
        ),
        e && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_RetainFocusParent
          ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
          : this.m_bFocused && this.m_Tree.TransferFocus(2, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : A(this == this.m_Tree.Root, "Only root should have no parent");
    }
    RegisterDOMEvents() {
      !this.m_rgNavigationHandlers.length &&
        this.m_element &&
        (this.m_rgChildren.length >= 2 ||
          this.m_Properties?.layout != 0 ||
          this.m_Properties.onMoveUp ||
          this.m_Properties.onMoveRight ||
          this.m_Properties.onMoveDown ||
          this.m_Properties.onMoveLeft) &&
        this.m_rgNavigationHandlers.push(
          Re(this.m_element, this.OnNavigationEvent),
        ),
        (this.m_Properties?.focusable ||
          this.m_Properties?.focusableIfNoChildren ||
          this.m_rgChildren.length == 0) &&
          (this.m_rgFocusHandlers.length ||
            (this.m_element?.addEventListener("focus", this.OnDOMFocus),
            this.m_element?.addEventListener("blur", this.OnDOMBlur),
            this.m_rgFocusHandlers.push(() => {
              this.m_element?.removeEventListener("focus", this.OnDOMFocus),
                this.m_element?.removeEventListener("blur", this.OnDOMBlur);
            })));
    }
    RemoveChild(e) {
      let t = this.m_rgChildren.indexOf(e);
      A(t !== -1, "Child was not found to remove"),
        t !== -1 &&
          (this.m_ActiveChild == e && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(t, 1));
    }
    UnregisterDOMEvents() {
      this.m_rgNavigationHandlers.forEach((e) => e()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((e) => e()),
        (this.m_rgFocusHandlers = []);
    }
    GetActiveDescendant() {
      let e = this.GetActiveChild();
      return e ? e.GetActiveDescendant() : this;
    }
    IsValidChildIndex(e) {
      return e >= 0 && e < this.m_rgChildren.length;
    }
    GetActiveChild() {
      return this.m_ActiveChild
        ? this.m_ActiveChild
        : (this.EnsureChildrenSorted(),
          this.IsValidChildIndex(this.m_iLastActiveChildIndex)
            ? this.m_rgChildren[this.m_iLastActiveChildIndex]
            : null);
    }
    GetActiveChildIndex() {
      if (this.m_ActiveChild) {
        if (
          this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
          this.m_rgChildren[this.m_iLastActiveChildIndex] == this.m_ActiveChild
        )
          return this.m_iLastActiveChildIndex;
        this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
          this.m_ActiveChild,
        );
      }
      return this.m_iLastActiveChildIndex;
    }
    EnsureChildrenSorted(e = !1) {
      (!this.m_bChildrenSorted || e) &&
        (this.m_rgChildren.sort((t, n) => {
          let i = t.m_element,
            r = n.m_element;
          if (i) {
            if (!r) return -1;
          } else return r ? 1 : 0;
          let s = i.compareDocumentPosition(r);
          return s & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : s & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 0;
        }),
        this.m_ActiveChild &&
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
            this.m_ActiveChild,
          )),
        (this.m_bChildrenSorted = !0));
    }
    GetLastFocusElement() {
      let e = this.GetActiveChild();
      return e ? e.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(e) {
      if (!this.m_bFocused) {
        if (this.GetFocusable() == "children") {
          let t = this.FindFocusableDescendant();
          if (t && t !== this) {
            z(
              "Browser gave node focus but we are marked focusableIfNoChildren, transfering focus to descendant.",
              this.m_element,
              t.m_element,
            ),
              this.m_Tree.TransferFocus(3, t);
            return;
          }
        }
        this.m_Tree.TransferFocus(3, this);
      }
    }
    OnDOMBlur(e) {
      this.m_bFocused &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(3, null);
    }
    UpdateParentActiveChild() {
      this.m_Parent &&
        (this.m_Parent.SetActiveChild(this),
        this.m_Parent.UpdateParentActiveChild());
    }
    GetFocusable() {
      let {
        focusable: e,
        focusableIfNoChildren: t,
        childFocusDisabled: n,
        fnCanTakeFocus: i,
      } = this.m_Properties;
      return !this.m_bMounted || (i && !i(this))
        ? "none"
        : e || (t && (n || this.m_rgChildren.length == 0))
          ? "self"
          : !n && this.m_rgChildren.length
            ? "children"
            : "none";
    }
    BTakeFocus(e, t) {
      let n = this.FindFocusableNode(t);
      return this.InternalFocusDescendant(n, e, t);
    }
    FindFocusableNode(e, t) {
      switch (this.GetFocusable()) {
        case "none":
          return null;
        case "self":
          return this;
        case "children":
          return this.FindFocusableDescendant(e, t);
      }
    }
    BChildTakeFocus(e, t) {
      let n = this.FindFocusableDescendant(t);
      return this.InternalFocusDescendant(n, e, t);
    }
    BFocusFirstChild(e) {
      let t = this.FindNextFocusableChildInDirection(-1, 1, 0);
      return this.InternalFocusDescendant(t, e);
    }
    BFocusLastChild(e) {
      let t = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        0,
      );
      return this.InternalFocusDescendant(t, e);
    }
    FindFocusableDescendant(e, t) {
      let n = Oe(e),
        { focusableIfNoChildren: i, childFocusDisabled: r } =
          this.m_Properties ?? {};
      if (r) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: s, resetNavOnEntry: a } =
            this.m_Properties ?? {},
          l = this.GetActiveChildIndex();
        if ((a && e !== void 0 && (l = -1), !this.IsValidChildIndex(l))) {
          let u = this.GetLayout();
          l >= this.m_rgChildren.length || u == 4 || u == 3 || s == 1
            ? (l = this.m_rgChildren.length - 1)
            : (l = 0);
        }
        let c;
        if ((s == 2 || s == 3 || t) && n) {
          let u;
          s == 2 ? (u = "x") : s == 3 && (u = "y");
          let p;
          u == ne[n] &&
            (p =
              this.m_Tree.GetLastFocusedMovementRect(ne[n]) ??
              this.m_Tree.GetLastFocusedNode()?.GetBoundingRect()),
            z(
              `Taking focus while preserving ${s && $t[s]} preserved: ${u} movement: ${n}, node:`,
              p || t,
            );
          let d = this.ComputeRelativeDirection(e, 5);
          if (p || t) {
            let b = d == 2 ? this.m_rgChildren.length - 1 : 0;
            c = this.FindClosestChildInNextAxiallyAlignedSet(
              u || ne[n],
              d,
              e,
              p || t,
              b,
              this.m_rgChildren[b].GetBoundingRect(),
            );
          } else if (u != ne[n]) {
            let b = d == 2 ? this.m_rgChildren.length : -1;
            c = this.FindNextFocusableChildInDirection(b, d, e);
          }
        } else if (s == 4) {
          for (let u of this.m_rgChildren)
            if (
              ((c = u.BWantsPreferredFocus() ? u.FindFocusableNode(e) : void 0),
              c)
            )
              return c;
        } else
          s == 1 && (c = this.FindNextFocusableChildInDirection(l + 1, 2, e));
        return (
          c || (c = this.FindNextFocusableChildInDirection(l - 1, 1, e)),
          c || (c = this.FindNextFocusableChildInDirection(l, 2, e)),
          c || (i ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(e) {
      let t = this.Element?.ownerDocument?.defaultView ?? window,
        n = { top: 0, left: 0, right: t.innerWidth, bottom: t.innerHeight },
        i = Ze(this, n);
      return (
        z(
          `Focusing visible child, best child match is ${i?.child?.Element?.className} - ${JSON.stringify(i?.visibility)}`,
        ),
        i ? i.child.BTakeFocus(e) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : Qt(this.m_element);
    }
    OnNavigationEvent(e) {
      let t = e.detail.button;
      if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: i,
          onMoveRight: r,
          onMoveDown: s,
          onMoveLeft: a,
        } = this.m_Properties ?? {},
        l = !1;
      switch (t) {
        case 9:
          i && (l = i(e.detail, this));
          break;
        case 12:
          r && (l = r(e.detail, this));
          break;
        case 10:
          s && (l = s(e.detail, this));
          break;
        case 11:
          a && (l = a(e.detail, this));
          break;
      }
      return l;
    }
    InternalFocusDescendant(e, t, n) {
      return e ? (this.m_Tree.TransferFocus(t, e, Oe(n)), !0) : !1;
    }
    BTryInternalNavigation(e, t) {
      let n = this.GetLayout(),
        i = this.ComputeRelativeDirection(e, n);
      if (
        (z(
          `Handling navigation event ${W[e]} - ${He[n]} - ${qt[i]}`,
          this.m_element,
        ),
        i == 0)
      )
        return !1;
      if (this.m_Properties?.focusable && this.m_bFocused)
        return z("Skipping navigation within focused element"), !1;
      this.EnsureChildrenSorted(!0);
      let r;
      if (n == 5)
        r = this.FindNextFocusableChildInGrid(this.GetActiveChildIndex(), i, e);
      else {
        let s = this.GetActiveChildIndex();
        this.IsValidChildIndex(s) ||
          (s = i == 1 ? -1 : this.m_rgChildren.length),
          (r = this.FindNextFocusableChildInDirection(s, i, e));
      }
      if (r) {
        let s = Oe(e);
        if (this.GetScrollIntoViewType() == 2) {
          let a = r.Element?.ownerDocument.defaultView;
          if (a) {
            let l =
                (s == "y" ? a.innerHeight : a.innerWidth) / (t ? 4.5 : 3.33),
              c = be(r.Element);
            if (
              (c.top > a.innerHeight && c.bottom > a.innerHeight + l) ||
              (c.bottom < 0 && c.top < -l) ||
              (c.left > a.innerWidth && c.right > a.innerWidth + l) ||
              (c.right < 0 && c.left < -l)
            )
              return (
                z(`Element too far away, scrolling ${l} on ${s} axis `),
                Me(r.Element, r.Element, "smooth", s, l),
                !0
              );
          }
        }
        return this.m_Tree.TransferFocus(0, r, s), !0;
      } else return !1;
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(e) {
      return this.ComputeRelativeDirection(e, this.GetLayout());
    }
    ComputeRelativeDirection(e, t) {
      let n = t == 4 || t == 3;
      switch (t) {
        case 2:
        case 4:
          switch (e) {
            case 11:
              return n ? 1 : 2;
            case 12:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (e) {
            case 9:
              return n ? 1 : 2;
            case 10:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 5:
          switch (e) {
            case 11:
            case 9:
              return n ? 1 : 2;
            case 12:
            case 10:
              return n ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(e, t) {
      return e + (t == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(e, t, n) {
      let i = t == 1 ? 1 : -1;
      for (let r = e + i; r >= 0 && r < this.m_rgChildren.length; r += i) {
        let s = this.m_rgChildren[r].FindFocusableNode(n);
        if (s) return s;
      }
      return null;
    }
    ScanChildren(e, t, n) {
      let i = t == 1 ? 1 : -1;
      for (let r = e; r >= 0 && r < this.m_rgChildren.length; r += i)
        if (n(this.m_rgChildren[r], r)) return r;
      return -1;
    }
    FindNextFocusableChildInGrid(e, t, n) {
      let i = n == 9 || n == 10,
        r = this.GetLastFocusElement();
      if (!r || r == this.m_element)
        return (
          A(
            !1,
            "No active child for grid navigation",
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            r,
          ),
          this.FindFocusableDescendant(n)
        );
      let s = this.GetActiveDescendant().GetBoundingRect();
      if (n == 9 || n == 10) {
        let a =
          this.m_Tree.GetLastFocusedMovementRect("x") ??
          this.m_Tree.GetLastFocusedNode()?.GetBoundingRect();
        a && ((s.x = a.x), (s.width = a.width));
      }
      if (i) {
        let a = e;
        for (; a != -1; ) {
          let l = this.ScanChildren(
            this.AdvanceIndex(a, t),
            t,
            (c) => !Be("y", s, c.GetBoundingRect()),
          );
          if (l != -1) {
            let c = this.m_rgChildren[l].GetBoundingRect(),
              u = this.FindClosestChildInNextAxiallyAlignedSet(
                "x",
                t,
                n,
                s,
                l,
                c,
              );
            if (u) return u;
          }
          a = l;
        }
      } else {
        let a = t == 1 ? 1 : -1;
        for (
          let l = this.AdvanceIndex(e, t);
          l >= 0 && l < this.m_rgChildren.length;
          l += a
        ) {
          let c = this.m_rgChildren[l];
          if (!Be("y", s, c.GetBoundingRect())) return null;
          let u = c.FindFocusableNode(n);
          if (u) return u;
        }
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(e, t, n, i, r, s) {
      (!r || r < 0) && (r = 0);
      let a = [];
      if (!i) return null;
      let l = jt(i);
      this.ScanChildren(r, t, (c) => {
        let u = c.GetBoundingRect();
        return u
          ? s && !Be(ne[e], s, u)
            ? !0
            : (a.push({ child: c, overlap: Xt(e, i, u), dist: Yt(e, l, u) }),
              !1)
          : !1;
      }),
        t == 2 && a.reverse(),
        a.sort((c, u) => {
          let p = u.overlap - c.overlap;
          return p != 0 ? p : c.dist - u.dist;
        });
      for (let { child: c } of a) {
        let u = c.FindFocusableNode(n, i);
        if (u) return u;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(e) {
      e instanceof oe
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = e),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(e)))
        : (this.IsValidChildIndex(e) &&
            (this.m_ActiveChild = this.m_rgChildren[e]),
          (this.m_iLastActiveChildIndex = e));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetRetainFocusParent(e) {
      (this.m_RetainFocusParent = e),
        this.m_Properties?.retainFocus ||
          this.PropagateRetainFocusParentToChildren(e);
    }
    PropagateRetainFocusParentToChildren(e) {
      for (let t = 0; t < this.m_rgChildren.length; t++)
        this.m_rgChildren[t].SetRetainFocusParent(e);
    }
    OnFocusedDecendantRemoved(e) {
      this.m_Tree.DeferredFocus.RequestFocus(this, { bFocusDescendant: !0 });
    }
    SetDOMFocusAndScroll(e, t) {
      this.UpdateParentActiveChild(),
        this.m_Tree.BIsActiveFocus()
          ? (A(
              !this.m_Tree.BUseVirtualFocus(),
              "Virtual focus tree should not have browser focus",
            ),
            this.m_element?.focus({ preventScroll: !0 }))
          : this.m_Tree.BUseVirtualFocus() ||
            z(
              `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
            ),
        zt(this, t),
        this.m_Tree.OnChildActivated(e);
    }
  };
R([I], oe.prototype, "OnDOMFocus", 1),
  R([I], oe.prototype, "OnDOMBlur", 1),
  R([I], oe.prototype, "OnNavigationEvent", 1);
var ve = oe;
function Jt(o, e) {
  return o ? typeof o.SteamClient == "object" && e in o.SteamClient : !1;
}
function Zt(o, e) {
  if (!o) return !1;
  let [t, n] = e.split(".", 2);
  return t && n && Jt(o, t) && n in o.SteamClient[t];
}
function it(o) {
  return Zt(window, o);
}
var en = new y("FocusNavigation").Debug,
  Wn = new y("GamepadEvents").Debug,
  Ue = class {
    m_Controller;
    m_context;
    m_window;
    m_ParentNavTree;
    m_rgChildNavTrees = [];
    m_ID;
    m_bIsMounted = !1;
    m_bIsEnabled = !1;
    m_tsLastActivated;
    m_Root;
    m_onActivateCallbacks = new h();
    m_onDeactivateCallbacks = new h();
    m_onActiveFocusStateChangedCallbacks = new h();
    m_onChildTreesChanged = new h();
    m_bVirtualFocus = !1;
    m_bModal = !1;
    m_bIsEmbeddedInLegacyTree = !1;
    m_onGlobalButtonDown;
    m_onUnhandledButton;
    constructor(e, t, n, i) {
      (this.m_Controller = e),
        (this.m_context = t),
        (this.m_ID = n),
        (this.m_ParentNavTree = i),
        (this.m_Root = new ve(this, null, null)),
        this.m_Root.SetProperties({ layout: 1 });
    }
    SetUseVirtualFocus(e) {
      this.m_bVirtualFocus = e;
    }
    SetModal(e) {
      this.m_bModal = e;
    }
    get id() {
      return this.m_ID;
    }
    get Parent() {
      return this.m_ParentNavTree;
    }
    get ChildTrees() {
      return this.m_rgChildNavTrees;
    }
    get Root() {
      return this.m_Root;
    }
    get Controller() {
      return this.m_Controller;
    }
    get WindowContext() {
      return this.m_context;
    }
    get Window() {
      return this.m_window;
    }
    BUseVirtualFocus() {
      return this.m_bVirtualFocus;
    }
    BIsModal() {
      return this.m_bModal;
    }
    FindModalDescendant() {
      for (let e of this.m_rgChildNavTrees) {
        if (e.BIsModal() && e.BIsEnabled()) return e;
        let t = e.FindModalDescendant();
        if (t) return t;
      }
    }
    BIsContextActive() {
      return this.m_Controller.BIsInActiveContext(this);
    }
    CreateNode(e, t) {
      return new ve(this, e, t);
    }
    RegisterNavigationItem(e, t) {
      return e.OnMount(t), () => e.OnUnmount();
    }
    OnChildActivated(e) {
      this.m_bIsMounted &&
        this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
    }
    m_lastFocusNode;
    m_bWasActiveForLastFocusChange;
    m_lastFocusNodeXMovement = new Ve();
    m_lastFocusNodeYMovement = new Ve();
    GetLastFocusedNode() {
      return this.m_lastFocusNode;
    }
    GetLastFocusedMovementRect(e) {
      return e == "x"
        ? this.m_lastFocusNodeXMovement.GetRect()
        : e == "y"
          ? this.m_lastFocusNodeYMovement.GetRect()
          : void 0;
    }
    get OnActivateCallbacks() {
      return this.m_onActivateCallbacks;
    }
    get OnDeactivateCallbacks() {
      return this.m_onDeactivateCallbacks;
    }
    get OnChildTreesChangedCallbacks() {
      return this.m_onChildTreesChanged;
    }
    get OnActiveStateChangedCallbacks() {
      return this.m_onActiveFocusStateChangedCallbacks;
    }
    OnActivate(e) {
      (this.m_tsLastActivated = performance.now()),
        this.m_onActivateCallbacks.Dispatch(this, e),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
    }
    OnDeactivate(e) {
      this.m_onDeactivateCallbacks.Dispatch(this, e),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
        (this.m_bWasActiveForLastFocusChange = !1);
    }
    OnContextActiveStateChanged(e) {
      this.m_onActiveFocusStateChangedCallbacks.Dispatch(e, this);
    }
    IsActiveFocusNavTree() {
      return this.m_Controller.IsActiveFocusNavTree(this);
    }
    TakeFocus(e, t = !1) {
      let n = !1;
      t
        ? (n = this.Root.BVisibleChildTakeFocus(e))
        : this.m_lastFocusNode && (n = this.m_lastFocusNode.BTakeFocus(e)),
        n || (n = this.Root.BTakeFocus(e)),
        n || this.TransferFocus(e, this.Root);
    }
    Activate(e = !1) {
      this.m_Controller.OnGamepadNavigationTreeActivated(
        this.FindModalDescendant() ?? this,
        e,
      );
    }
    Deactivate() {
      this.m_Controller.BlurNavTree(this);
    }
    BIsEnabled() {
      return this.m_bIsEnabled;
    }
    BIsActive() {
      return (
        this.m_bIsMounted &&
        (this.m_Controller.IsActiveNavTree(this) ||
          this.m_Controller.IsActiveFocusNavTree(this))
      );
    }
    BIsActiveFocus() {
      return this.m_bIsMounted && this.m_Controller.IsActiveFocusNavTree(this);
    }
    BIsActiveWithinContext() {
      return (
        this.m_bIsMounted &&
        (this.m_context.m_LastActiveNavTree == this ||
          this.m_context.m_LastActiveFocusNavTree == this)
      );
    }
    GetTimeLastActivated() {
      return this.m_tsLastActivated;
    }
    MountNavTree(e) {
      this.m_window = e;
      let t = this.m_Root.Element;
      (t.__nav_tree = this),
        t.__nav_wrapper && t.__nav_wrapper.BindTree(this),
        (this.m_bIsMounted = !0);
      let n = this.m_ParentNavTree
        ? this.m_ParentNavTree.AddChildNavTree(this)
        : void 0;
      return () => {
        (this.m_bIsMounted = !1), n && n();
      };
    }
    SetIsEnabled(e) {
      this.m_bIsEnabled != e &&
        ((this.m_bIsEnabled = e),
        this.m_bIsEnabled || (this.m_tsLastActivated = void 0));
    }
    SetIsEmbeddedInLegacyTree(e) {
      this.m_bIsEmbeddedInLegacyTree = e;
    }
    GetParentEmbeddedNavTree() {
      return this.m_bIsEmbeddedInLegacyTree ? this.m_ParentNavTree : void 0;
    }
    SetOnUnhandledButtonCallback(e) {
      this.m_onUnhandledButton = e;
    }
    SetOnGlobalButtonDown(e) {
      this.m_onGlobalButtonDown = e;
    }
    OnRootButtonDown(e) {
      for (let t = this; t; t = t.Parent)
        if (
          (t.m_onGlobalButtonDown && t.m_onGlobalButtonDown(e), e.cancelBubble)
        )
          return !1;
      return this.HandleButtonDownEventAsLogicalEvent(e);
    }
    HandleButtonDownEventAsLogicalEvent(e) {
      let { bUnhandled: t, bHadLogicalEventMapping: n } = Et(e);
      return (
        Wn(
          `Logical gamepad Event fired: ${W[e.detail.button]}, had logical event: ${n}, was handled: ${!t}`,
        ),
        t && this.m_onUnhandledButton && (t = this.m_onUnhandledButton(e)),
        t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
        e.stopPropagation(),
        t
      );
    }
    m_DeferredFocus = new rt(this);
    get DeferredFocus() {
      return this.m_DeferredFocus;
    }
    AddChildNavTree(e) {
      return (
        this.m_rgChildNavTrees.push(e),
        this.OnChildTreesChangedCallbacks.Dispatch("add", e),
        () => {
          M.FindAndRemove(this.m_rgChildNavTrees, e),
            this.OnChildTreesChangedCallbacks.Dispatch("remove", e);
        }
      );
    }
    TransferFocus(e, t, n) {
      this.m_Controller.BatchedUpdate(() =>
        this.TransferFocusInternal(e, t, n),
      );
    }
    TransferFocusInternal(e, t, n) {
      let i = this.m_lastFocusNode;
      if (i == t && (this.m_bWasActiveForLastFocusChange || !this.BIsActive()))
        return;
      en(
        `Transfer focus in ${this.id}, source: ${e && Z[e]}, from/to:`,
        i?.m_element,
        t?.m_element,
      );
      let r = { blurredNode: i, focusedNode: t, focusSource: e },
        s = Un(i, t);
      if (i) {
        i.SetHasFocus(!1);
        for (let l = i; l && l != s; l = l.Parent) l.SetFocusWithin(!1);
      }
      if (t) {
        t.SetHasFocus(!0);
        for (let l = t; l && l != s; l = l.Parent) l.SetFocusWithin(!0);
      }
      let a = this.m_context.OnFocusChangeStart(e, this, i, t);
      t && t.SetDOMFocusAndScroll(e, i),
        i &&
          (q(i.Element, "vgp_onblur", r),
          i.m_FocusRing &&
            (!t || i.m_FocusRing != t.m_FocusRing) &&
            i.m_FocusRing.OnBlur(e, i, t)),
        t &&
          (q(t.Element, "vgp_onfocus", r),
          t.m_FocusRing &&
            (i && t.m_FocusRing == i.m_FocusRing
              ? t.m_FocusRing.OnFocusChange(e, i, t)
              : t.m_FocusRing.OnFocus(e, t, i))),
        (this.m_lastFocusNode = t),
        (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
        n == "x"
          ? this.m_lastFocusNodeXMovement.SetNode(t?.Element)
          : n == "y"
            ? this.m_lastFocusNodeYMovement.SetNode(t?.Element)
            : (this.m_lastFocusNodeXMovement.Reset(),
              this.m_lastFocusNodeYMovement.Reset()),
        this.m_context.OnFocusChangeComplete(a);
    }
  };
function Un(o, e) {
  if (!e || !o) return null;
  let t = e,
    n = o;
  for (; t.GetDepth() > n.GetDepth() && t.Parent; ) t = t.Parent;
  for (; n.GetDepth() > t.GetDepth() && n.Parent; ) n = n.Parent;
  for (; t != n && t && n; ) (t = t.Parent), (n = n.Parent);
  return t;
}
var Ve = class {
    m_element;
    m_rect;
    SetNode(e) {
      (this.m_element = e),
        (this.m_rect = e ? e.getBoundingClientRect() : void 0);
    }
    Reset() {
      this.SetNode(void 0);
    }
    GetRect() {
      return this.m_element?.isConnected
        ? this.m_element.getBoundingClientRect()
        : this.m_rect;
    }
  },
  rt = class {
    m_tree;
    m_target;
    m_interval;
    m_schExecuteQueuedFocus = new ye();
    m_bSuppressed = !1;
    constructor(e) {
      this.m_tree = e;
    }
    RequestFocus(e, t) {
      if (!e) {
        this.m_target = void 0;
        return;
      }
      (this.m_target = { ...t, node: e }),
        !this.m_interval &&
          !this.m_bSuppressed &&
          this.m_schExecuteQueuedFocus.Schedule(1, () => {
            (this.m_interval = void 0), this.ExecuteQueuedFocus();
          });
    }
    BHasQueuedFocusNode() {
      return !!this.m_target;
    }
    BIsQueuedFocusNode(e) {
      return this.m_target && this.m_target.node == e;
    }
    SuppressFocus() {
      (this.m_bSuppressed = !0), this.ClearInterval();
    }
    Reset() {
      (this.m_bSuppressed = !1), (this.m_target = void 0), this.ClearInterval();
    }
    ClearInterval() {
      this.m_schExecuteQueuedFocus.Cancel();
    }
    ExecuteQueuedFocus() {
      if (((this.m_bSuppressed = !1), this.m_target)) {
        let { node: e, bFocusDescendant: t } = this.m_target;
        (this.m_target = void 0),
          en(
            `DeferredFocus in ${this.m_tree.id} - focusing ${t ? "descendant of" : "node"} ${e.NavKey}`,
          ),
          t
            ? e.BChildTakeFocus(2) || this.m_tree.TransferFocus(2, e)
            : e.BTakeFocus(2);
      }
    }
  };
var H = new y("FocusNavigation").Debug,
  Ke = class {
    m_rootWindow;
    m_activeWindow;
    m_activeBrowserView;
    m_valueIsActive = ce(!1);
    m_controller;
    m_rgGamepadNavigationTrees = [];
    m_LastActiveNavTree;
    m_LastActiveFocusNavTree;
    m_bMounted = !0;
    m_schDeferredActivate = new ye();
    m_FocusChangedCallbacks = new h();
    m_bIsGamepadInputSuppressed = !1;
    constructor(e, t, n) {
      (this.m_controller = e),
        (this.m_rootWindow = t),
        (this.m_activeWindow = t),
        (this.m_bIsGamepadInputSuppressed = n);
    }
    get RootWindow() {
      return this.m_rootWindow;
    }
    get ActiveWindow() {
      return this.m_activeWindow;
    }
    FindNavTreeInFocusedWindow() {
      for (let e = this.m_rgGamepadNavigationTrees.length - 1; e >= 0; e--) {
        let t = this.m_rgGamepadNavigationTrees[e];
        if (t.Window?.document.hasFocus()) return t;
      }
    }
    OnMount(e) {
      e == this.m_rootWindow && (this.m_bMounted = !0);
    }
    Destroy(e) {
      e == this.m_rootWindow
        ? (H(`${this.LogName(e)} Destroying context for window`),
          (this.m_bMounted = !1),
          this.m_schDeferredActivate.Cancel(),
          this.SetActive(!1, e))
        : H(`${this.LogName(e)} Child window destroyed`);
    }
    SetActive(e, t, n = void 0) {
      this.m_controller.BatchedUpdate(() => {
        let i = this.m_valueIsActive.Value != e;
        e
          ? ((this.m_activeWindow = t),
            (this.m_activeBrowserView = n),
            this.m_controller.OnContextActivated(this))
          : ((this.m_activeBrowserView = void 0),
            this.m_controller.OnContextDeactivated(this, !1)),
          this.m_valueIsActive.Set(e),
          i && this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(e);
      });
    }
    OnActivate(e) {
      (this.BIsActive() &&
        this.m_activeWindow == e &&
        this.m_activeBrowserView === void 0) ||
        (H(
          `${this.LogName(e)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
        ),
        this.SetActive(!0, e));
    }
    OnActivateBrowserView(e, t) {
      (this.BIsActive() &&
        this.m_activeWindow == e &&
        this.m_activeBrowserView == t) ||
        (H(`${this.LogName(e)} Browser View "${t}" activated in context`),
        this.SetActive(!0, e, t));
    }
    OnDeactivate(e) {
      this.m_activeWindow == e
        ? (H(`${this.LogName(e)} Deactivate context for window`),
          this.SetActive(!1, e))
        : H(
            `${this.LogName(e)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
          );
    }
    OnDeactivateBrowserView(e, t) {
      H(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
        this.m_activeBrowserView == t && this.SetActive(!1, e, t);
    }
    BIsGamepadInputSuppressed() {
      return this.m_bIsGamepadInputSuppressed;
    }
    BIsActive() {
      return this.m_valueIsActive.Value;
    }
    get IsActive() {
      return this.m_valueIsActive;
    }
    AddNavTree(e) {
      this.m_rgGamepadNavigationTrees.push(e);
    }
    LogName(e = void 0) {
      return e && this.m_rootWindow != e
        ? `(${this.m_rootWindow.name}) > (${e.name})`
        : `(${this.m_rootWindow.name})`;
    }
    FindNavTreeToActivate() {
      for (let e = this.m_rgGamepadNavigationTrees.length - 1; e >= 0; e--) {
        let t = this.m_rgGamepadNavigationTrees[e];
        if (!t.BIsEnabled()) continue;
        return t.FindModalDescendant() ?? t;
      }
    }
    SetActiveNavTree(e, t = !1) {
      if (e && this.m_LastActiveNavTree == e) return;
      let n = this.m_LastActiveNavTree;
      n && M.FindAndRemove(this.m_rgGamepadNavigationTrees, n),
        e || (e = this.FindNavTreeToActivate());
      let i = this.m_LastActiveFocusNavTree == e;
      e && M.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        (this.m_LastActiveNavTree = e),
        (!e || !e.BUseVirtualFocus()) && (this.m_LastActiveFocusNavTree = e),
        H(
          `${this.LogName(e?.Window)} Move from nav tree ${n?.id} to nav tree ${e?.id} ${t ? "taking focus" : "no focus"}`,
        ),
        n && this.m_rgGamepadNavigationTrees.push(n),
        e &&
          (this.m_rgGamepadNavigationTrees.push(e),
          !i &&
            t &&
            !e.DeferredFocus.BHasQueuedFocusNode() &&
            e.DeferredFocus.RequestFocus(e.Root)),
        n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(e),
        e && !i && e.OnActivate(n);
    }
    BlurNavTree(e) {
      this.m_LastActiveNavTree == e && this.SetActiveNavTree(void 0, !0),
        M.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        this.m_rgGamepadNavigationTrees.unshift(e);
    }
    UnregisterGamepadNavigationTree(e) {
      M.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        H(
          `(${this.m_rootWindow.name}) Unregister tree ${e?.id} ${this.m_LastActiveFocusNavTree == e ? "(was active)" : "(inactive)"}`,
        ),
        this.m_LastActiveNavTree == e &&
          ((this.m_LastActiveNavTree = void 0),
          this.m_bMounted &&
            this.m_schDeferredActivate.Schedule(1, () => {
              this.m_LastActiveNavTree || this.SetActiveNavTree(void 0, !0);
            }));
    }
    get FocusChangedCallbacks() {
      return this.m_FocusChangedCallbacks;
    }
    m_iFocusChangeStack = 0;
    m_ActiveFocusChange;
    OnFocusChangeStart(e, t, n, i) {
      return (
        this.m_iFocusChangeStack == 0
          ? (this.m_ActiveFocusChange = {
              source: e,
              from: n || void 0,
              to: i || void 0,
            })
          : this.m_ActiveFocusChange &&
            (!this.m_ActiveFocusChange.from &&
              n &&
              (this.m_ActiveFocusChange.from = n),
            i && (this.m_ActiveFocusChange.to = i)),
        this.m_iFocusChangeStack++
      );
    }
    OnFocusChangeComplete(e) {
      if (
        (this.m_iFocusChangeStack--,
        A(e == this.m_iFocusChangeStack, "out of order focus pop"),
        this.m_iFocusChangeStack == 0)
      ) {
        let { source: t, from: n, to: i } = this.m_ActiveFocusChange ?? {};
        this.m_FocusChangedCallbacks.Dispatch(t, n, i);
      }
    }
  };
var x = new y("FocusNavigation").Debug,
  Vn = new y("FocusNavigation").Assert,
  at = "focus-nav-show-debug-focus-ring";
function Kn() {
  return sessionStorage.getItem(at) == "shown";
}
function zn(o) {
  o ? sessionStorage.setItem(at, "shown") : sessionStorage.removeItem(at);
}
function $n(o, e) {
  return (
    o?.eActivationSourceType === e?.eActivationSourceType &&
    o?.nActiveGamepadIndex === e?.nActiveGamepadIndex &&
    o?.nLastActiveGamepadIndex === e?.nLastActiveGamepadIndex
  );
}
var ge = class {
  m_rgGamepadInputSources = [];
  m_DefaultContext;
  m_rgAllContexts = [];
  m_ActiveContext;
  m_LastActiveContext;
  m_fnCatchAllGamepadInput = null;
  m_UnhandledButtonEventsCallbacks = new h();
  m_navigationSource = ce(
    {
      eActivationSourceType: 0,
      nActiveGamepadIndex: -1,
      nLastActiveGamepadIndex: -1,
    },
    $n,
  );
  m_navigationSourceSupportsFocus = pt(
    this.m_navigationSource,
    (e) => e?.eActivationSourceType === 1 || e?.eActivationSourceType === 2,
  );
  m_bShowDebugFocusRing = ce(!1);
  m_bRestoringHistory = !1;
  m_fnGamepadEventUpdateBatcher = (e) => e();
  constructor() {
    window.FocusNavController = this;
  }
  Init() {
    this.m_bShowDebugFocusRing.Set(Kn());
  }
  CreateContext(e, t) {
    let n = new Ke(this, e, t);
    return this.m_rgAllContexts.push(n), n;
  }
  GetDefaultContext() {
    return (
      this.m_DefaultContext ||
        (this.m_DefaultContext = this.CreateContext(window, !1)),
      this.m_DefaultContext
    );
  }
  GetActiveContext() {
    return this.m_ActiveContext;
  }
  FindAnActiveContext() {
    if (!this.m_ActiveContext && this.m_rgAllContexts.length != 0) {
      console.warn("No active context; finding one");
      for (let e of this.m_rgAllContexts) {
        let t = e.FindNavTreeInFocusedWindow();
        if (t) {
          x(
            `${e.LogName(t.Window)} Found a focused window; setting this context as active.`,
          ),
            (this.m_ActiveContext = e),
            this.m_ActiveContext.OnActivate(t.Window);
          break;
        }
      }
    }
    return (
      !this.m_ActiveContext &&
        this.m_LastActiveContext &&
        (x(
          `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
        ),
        (this.m_ActiveContext = this.m_LastActiveContext),
        this.m_ActiveContext.OnActivate(
          this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
        )),
      this.m_ActiveContext
    );
  }
  SetShowDebugFocusRing(e) {
    this.m_bShowDebugFocusRing.Set(e), zn(e);
  }
  GetShowDebugFocusRing() {
    return this.m_bShowDebugFocusRing;
  }
  RegisterInputSource(e) {
    let t = new mt();
    return (
      this.m_rgGamepadInputSources.push(e),
      t.PushArrayRemove(this.m_rgGamepadInputSources, e),
      t.Push(e.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister),
      t.Push(e.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
      t.Push(
        e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
          .Unregister,
      ),
      e.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
      t.Push(() => e.SetRepeatAllowed()),
      e.GetSourceType() == 1 && this.UpdateDefaultSourceToGamepad(),
      t.GetUnregisterFunc()
    );
  }
  UpdateDefaultSourceToGamepad() {
    this.m_navigationSource.Value.eActivationSourceType == 0 &&
      this.m_navigationSource.Set({
        ...this.m_navigationSource.Value,
        eActivationSourceType: 1,
      });
  }
  SetGamepadEventUpdateBatcher(e) {
    this.m_fnGamepadEventUpdateBatcher = e;
  }
  get NavigationSource() {
    return this.m_navigationSource;
  }
  get NavigationSourceSupportsFocus() {
    return this.m_navigationSourceSupportsFocus;
  }
  DispatchVirtualButtonClick(e, t) {
    let n;
    t && (n = this.GetActiveContext() ?? this.FindAnActiveContext()),
      this.OnButtonDown(e, 1, -1, void 0, t, n, !0),
      this.OnButtonUp(e, 1, -1, void 0, t, n, !0);
  }
  DispatchVirtualGamepad(e, t) {
    switch (e) {
      case "vgp_onbuttondown":
        this.OnButtonDown(t.button, t.source, -1, t.is_repeat);
        break;
      case "vgp_onbuttonup":
        this.OnButtonUp(t.button, t.source, -1);
        break;
    }
  }
  BGlobalGamepadButton(e) {
    return e === 27 || e === 28 || e === 2;
  }
  GetEventTarget(e, t, n = !1) {
    let i = this.GetActiveContext();
    !i && n && (i = this.FindAnActiveContext());
    let r = i?.ActiveWindow?.document.activeElement;
    if (i?.m_LastActiveNavTree) {
      if (
        (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
        !i.m_LastActiveNavTree.GetLastFocusedNode() &&
          (t == 1 || t == 2) &&
          (x(
            `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} has no focused node, ${n ? "finding one" : "will not find one"}`,
          ),
          n && i.m_LastActiveNavTree.TakeFocus(0, !0),
          !this.BGlobalGamepadButton(e)))
      )
        return [void 0, i];
      i.m_LastActiveNavTree.GetLastFocusedNode()
        ? (r = i.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
        : x(
            `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
          );
    }
    return [r, i];
  }
  ChangeNavigationSource(e, t) {
    let n = this.m_navigationSource.Value,
      i = n.nLastActiveGamepadIndex;
    return (
      n.nActiveGamepadIndex &&
        n.nActiveGamepadIndex >= 0 &&
        (i = n.nActiveGamepadIndex),
      this.m_navigationSource.Set({
        eActivationSourceType: e,
        nActiveGamepadIndex: t,
        nLastActiveGamepadIndex: i,
      }),
      e != 3 &&
        it("Browser.HideCursorUntilMouseEvent") &&
        SteamClient.Browser.HideCursorUntilMouseEvent(),
      n.eActivationSourceType != e
    );
  }
  OnButtonActionInternal(e, t, n, i, r, s, a, l) {
    if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t)) {
      e &&
        x(
          "Ignoring button press - gamepad input is suppressed by parent window",
        );
      return;
    }
    Vn(
      !!s == !!a,
      "Must set both overrideContext and overrideElement or neither",
    );
    let c = s,
      u = a;
    if (
      ((c == null || u == null) && ([c, u] = this.GetEventTarget(t, n, e)),
      u?.BIsGamepadInputSuppressed() && !l)
    ) {
      x(
        `Suppressing ${W[t]} input on element ${c?.className} because tree ${u?.m_LastActiveNavTree?.id} has it disabled`,
      );
      return;
    }
    this.ChangeNavigationSource(n, i),
      e && x(`Firing ${W[t]} in tree ${u?.m_LastActiveNavTree?.id} at `, c),
      this.BatchedUpdate(() =>
        q(c, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
          button: t,
          source: n,
          is_repeat: r,
        }),
      );
  }
  OnButtonDown(e, t, n, i, r, s, a) {
    this.OnButtonActionInternal(!0, e, t, n, i, r, s, a);
  }
  OnButtonUp(e, t, n, i, r, s, a) {
    this.OnButtonActionInternal(!1, e, t, n, !1, r, s, a);
  }
  BatchedUpdate(e) {
    this.m_fnGamepadEventUpdateBatcher(e);
  }
  OnNavigationTypeChange(e) {
    if (
      this.ChangeNavigationSource(e, -1) &&
      document.hasFocus() &&
      (e == 3 || e == 4) &&
      this.m_ActiveContext?.m_LastActiveNavTree
    ) {
      let t = this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
        n = qn(t?.Element) ? t : null;
      this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(2, n);
    }
  }
  NewGamepadNavigationTree(e, t, n) {
    return new Ue(this, e, t, n);
  }
  RegisterGamepadNavigationTree(e, t) {
    let n = e.WindowContext;
    n.AddNavTree(e);
    let i = e.MountNavTree(t);
    return (
      !e.Parent &&
        e.BIsEnabled() &&
        (n.SetActiveNavTree(e, !0),
        (this.m_LastActiveContext = this.m_ActiveContext = n)),
      () => {
        i(), n.UnregisterGamepadNavigationTree(e);
      }
    );
  }
  OnGamepadNavigationTreeActivated(e, t = !1) {
    e.WindowContext.SetActiveNavTree(e, t);
  }
  OnGamepadNavigationTreeFocused(e, t, n = !1) {
    let i = e.WindowContext;
    i != this.m_ActiveContext &&
      x(`(${i.LogName(e.Window)}) Focus event in inactive window`),
      e != i.m_LastActiveFocusNavTree &&
        e != i.m_LastActiveNavTree &&
        (i.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
        e.GetParentEmbeddedNavTree() == i.m_LastActiveFocusNavTree
          ? (x(
              `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
            ),
            e.Activate())
          : x(
              `There was a focus event in ${e.id}, but the active nav tree is ${i.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${t && Z[t]}.`,
            ));
  }
  BlurNavTree(e) {
    e.WindowContext.BlurNavTree(e);
  }
  IsActiveFocusNavTree(e) {
    return !!(e && e == this.m_ActiveContext?.m_LastActiveFocusNavTree);
  }
  IsActiveNavTree(e) {
    return !!(e && e == this.m_ActiveContext?.m_LastActiveNavTree);
  }
  BIsInActiveContext(e) {
    return !!(e && e.WindowContext == this.m_ActiveContext);
  }
  RegisterForUnhandledButtonDownEvents(e) {
    return this.m_UnhandledButtonEventsCallbacks.Register(e);
  }
  FireUnhandledGamepadEventCallbacks(e) {
    return this.m_UnhandledButtonEventsCallbacks.CountRegistered()
      ? (this.m_UnhandledButtonEventsCallbacks.Dispatch(e), !1)
      : !0;
  }
  SetSuppressGamepadInput(e) {
    this.m_fnCatchAllGamepadInput = e ? () => !0 : null;
  }
  SetCatchAllGamepadInput(e) {
    this.m_fnCatchAllGamepadInput = e;
  }
  TakeFocusChangingIFrame() {
    window.focus();
    let e =
      this.m_ActiveContext?.m_LastActiveFocusNavTree ||
      this.m_ActiveContext?.m_LastActiveNavTree;
    e && e.TakeFocus(2);
  }
  OnContextActivated(e) {
    (this.m_ActiveContext = e), (this.m_LastActiveContext = e);
  }
  OnContextDeactivated(e, t) {
    t &&
      (this.m_LastActiveContext == e && (this.m_LastActiveContext = void 0),
      M.FindAndRemove(this.m_rgAllContexts, e)),
      this.m_ActiveContext == e && (this.m_ActiveContext = void 0);
  }
  BIsRestoringHistory() {
    return this.m_bRestoringHistory;
  }
  async RestoreHistoryTransaction(e) {
    this.m_bRestoringHistory = !0;
    try {
      await e();
    } finally {
      this.m_bRestoringHistory = !1;
    }
  }
};
R([I], ge.prototype, "OnButtonDown", 1),
  R([I], ge.prototype, "OnButtonUp", 1),
  R([I], ge.prototype, "OnNavigationTypeChange", 1);
function qn(o) {
  if (!_e(o)) return !1;
  let e = o.tagName,
    t = vt(o) ? o.type : void 0;
  return gt(e, t);
}
var We = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(e) {
    this.m_node = e;
  }
  TakeFocus(e) {
    return this.m_node.BTakeFocus(e ? 0 : 2, e);
  }
  ParentTakeFocus(e) {
    this.m_node.Parent?.BTakeFocus(e ? 0 : 2, e);
  }
  ChildTakeFocus(e) {
    return this.m_node.BChildTakeFocus(e ? 0 : 2, e);
  }
  FocusVisibleChild(e) {
    return this.m_node.BVisibleChildTakeFocus(e);
  }
  BHasFocus() {
    return this.m_node.BHasFocus();
  }
  BFocusWithin() {
    return this.m_node.BFocusWithin();
  }
  get NavKey() {
    return this.m_node.NavKey;
  }
  PushState() {
    this.m_History || (this.m_History = new Ee(this.m_node)),
      this.m_History.PushState();
  }
  PopState(e = 0) {
    this.m_History && this.m_History.PopState(e);
  }
  SaveState(e) {
    this.m_StateHistory || (this.m_StateHistory = new Pe(this.m_node)),
      this.m_StateHistory.SaveState(e);
  }
  RestoreState(e, t = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(e, t) : !1;
  }
  GetFocusSnapshot() {
    return Lt(this.m_node);
  }
  RestoreFocusSnapshot(e, t = 0) {
    return Gt(this.m_node, e, t);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function Be(o, e, t, n = 0.001) {
  return o == "x"
    ? e.x + e.width > t.x + n && e.x + n < t.x + t.width
    : o == "y"
      ? e.y + e.height > t.y + n && e.y + n < t.y + t.height
      : (A(!1, `Invalid axis ${o}`), !1);
}
function Xt(o, e, t) {
  let n;
  return (
    o == "x"
      ? (n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x))
      : o == "y"
        ? (n = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y))
        : (A(!1, `Invalid axis ${o}`), (n = 0)),
    n < 0 ? 0 : n
  );
}
function Xn(o, e) {
  return o == "x"
    ? { min: e.x, max: e.x + e.width }
    : { min: e.y, max: e.y + e.height };
}
function Yt(o, e, t) {
  let n = e[o],
    i = Xn(o, t);
  return n < i.min ? i.min - n : n > i.max ? n - i.max : 0;
}
function jt(o) {
  return { x: o.x, y: o.y };
}
var tn = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function Qt(o) {
  if (!o) return 0;
  let e = o.ownerDocument.defaultView,
    t = e.getComputedStyle(o);
  if (t.display == "flex")
    switch (t.flexDirection) {
      case "row":
        return t.flexWrap == "wrap" ? 5 : 2;
      case "row-reverse":
        return 4;
      case "column":
        return 1;
      case "column-reverse":
        return 3;
    }
  else {
    if (t.display == "grid") return 5;
    if (o.childElementCount > 0) {
      let n = e.getComputedStyle(o.firstElementChild);
      if (n.float === "left") return 2;
      if (n.float === "right") return 4;
      if (n.display === "inline" || n.display === "inline-block") return 5;
    }
  }
  return 1;
}
function Oe(o) {
  switch (o) {
    case 9:
    case 10:
      return "y";
    case 11:
    case 12:
      return "x";
    default:
      return;
  }
}
function ie(o) {
  switch (o) {
    case "column":
      return 1;
    case "column-reverse":
      return 3;
    case "row":
      return 2;
    case "row-reverse":
      return 4;
    case "grid":
      return 5;
    default:
      return 0;
  }
}
var L = f(G(), 1);
function Yn(o) {
  return {
    ShowVirtualKeyboard: () => {},
    ShowModalKeyboard: () => {},
    SetAsCurrentVirtualKeyboardTarget: () => {},
    HideVirtualKeyboard: () => {},
    DelayHideVirtualKeyboard: () => {},
    BIsActive: () => !1,
    BIsElementValidForInput: () => !1,
  };
}
var nn = L.default.createContext(Yn);
function ar(o) {
  let { factory: e, children: t } = o,
    n = L.default.useMemo(() => e.CreateVirtualKeyboardRef.bind(e), [e]);
  return L.default.createElement(nn.Provider, { value: n }, t);
}
function on(o, e) {
  let { onTextEntered: t, ...n } = o,
    i = L.default.useRef(null),
    r = L.default.useRef({});
  Object.assign(r.current, {
    ...n,
    BIsElementValidForInput: () =>
      i.current && document.activeElement == i.current,
  });
  let s = jn(r.current),
    a = L.default.useCallback(
      (c) => {
        if (!(!document.hasFocus() && document.activeElement == i.current)) {
          if (c.currentTarget != i.current) {
            console.warn(
              "keyboard got blur event, but it's not the active element",
            );
            return;
          }
          (!s.BIsActive() && !s.bInVR) || s.DelayHideVirtualKeyboard();
        }
      },
      [s],
    ),
    l = lt(
      (c) => {
        i.current = c;
        let u = [];
        return (
          c &&
            (c.addEventListener("focus", s.SetAsCurrentVirtualKeyboardTarget),
            u.push(() =>
              c.removeEventListener(
                "focus",
                s.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            c.addEventListener("click", s.ShowVirtualKeyboard),
            u.push(() => c.removeEventListener("click", s.ShowVirtualKeyboard)),
            u.push(Te(c, s.ShowVirtualKeyboard)),
            u.push(Ie(c, a))),
          () => u.forEach((p) => p())
        );
      },
      [a, s],
    );
  return (
    L.default.useLayoutEffect(
      () => (
        B(e, {
          TakeFocusAndShowKeyboard: () => {
            let c = i.current;
            c &&
              (document.activeElement != c && c.focus(),
              s.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            s.HideVirtualKeyboard();
          },
        }),
        () => B(e, null)
      ),
      [s, e],
    ),
    l
  );
}
function jn(o) {
  let e = L.default.useRef(),
    t = L.default.useContext(nn);
  return e.current || (e.current = t(o || {})), e.current;
}
function rn(o) {
  let {
    onEnterKeyPress: e,
    strEnterKeyLabel: t,
    onKeyboardNavOut: n,
    onKeyboardShow: i,
    onKeyboardFullyVisible: r,
    onTextEntered: s,
    BIsElementValidForInput: a,
    ...l
  } = o;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: e,
      strEnterKeyLabel: t,
      onKeyboardNavOut: n,
      onKeyboardShow: i,
      onKeyboardFullyVisible: r,
      onTextEntered: s,
      BIsElementValidForInput: a,
    },
    props: l,
  };
}
var dn = f(E(), 1),
  j = S.createContext(null),
  Qn = S.createContext(tn);
function Jn(o, e) {
  let t = S.useRef(null);
  return (
    o &&
      (!t.current || t.current.m_Parent != o) &&
      (t.current = o.Tree.CreateNode(o, e)),
    t.current
  );
}
function pe(o) {
  let { navRef: e, ...t } = o,
    n = S.useRef(null),
    i = (0, ze.useContext)(j),
    r = (0, ze.useContext)(Qn),
    s = Jn(i, r);
  return (
    S.useLayoutEffect(() => {
      s && s.SetProperties(t);
    }),
    S.useLayoutEffect(() => {
      if (!i) return;
      let a = i.Tree.RegisterNavigationItem(s, n.current);
      return () => {
        a();
      };
    }, [i, s, n]),
    S.useLayoutEffect(() => {
      if (!(!s || !e)) return B(e, s.CreateHandle()), () => B(e, null);
    }, [s, e]),
    { ref: n, node: s }
  );
}
function Zn(o) {
  let {
      onButtonDown: e,
      onButtonUp: t,
      onOKButton: n,
      onCancelButton: i,
      onSecondaryButton: r,
      onOptionsButton: s,
      onGamepadDirection: a,
      onGamepadFocus: l,
      onGamepadBlur: c,
      onMenuButton: u,
      onOKActionDescription: p,
      onCancelActionDescription: d,
      onSecondaryActionDescription: b,
      onOptionsActionDescription: g,
      onMenuActionDescription: v,
      actionDescriptionMap: F,
      ...D
    } = o,
    C = {};
  e !== void 0 && (C.onButtonDown = e),
    t !== void 0 && (C.onButtonUp = t),
    n !== void 0 && (C.onOKButton = n),
    i !== void 0 && (C.onCancelButton = i),
    r !== void 0 && (C.onSecondaryButton = r),
    s !== void 0 && (C.onOptionsButton = s),
    u !== void 0 && (C.onMenuButton = u),
    a !== void 0 && (C.onGamepadDirection = a),
    l !== void 0 && (C.onGamepadFocus = l),
    c !== void 0 && (C.onGamepadBlur = c);
  let _ = Pt({
    onOKActionDescription: p,
    onCancelActionDescription: d,
    onSecondaryActionDescription: b,
    onOptionsActionDescription: g,
    onMenuActionDescription: v,
    actionDescriptionMap: F,
  });
  return { gamepadEvents: C, actionDescriptions: _, props: D };
}
function re(o) {
  let {
      autoFocus: e,
      preferredFocus: t,
      disableNavSounds: n,
      fnCanTakeFocus: i,
      childFocusDisabled: r,
      retainFocus: s,
      onFocusWithin: a,
      navKey: l,
      noFocusRing: c,
      focusable: u,
      focusableIfNoChildren: p,
      navRef: d,
      actionDescriptionMap: b,
      onMoveUp: g,
      onMoveRight: v,
      onMoveDown: F,
      onMoveLeft: D,
      navEntryPreferPosition: C,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: se,
      scrollIntoViewType: Xe,
      resetNavOnEntry: mn,
      ...bn
    } = o,
    { gamepadEvents: vn, actionDescriptions: gn, props: Cn } = Zn(bn),
    fn = {
      autoFocus: e,
      preferredFocus: t,
      disableNavSounds: n,
      fnCanTakeFocus: i,
      childFocusDisabled: r,
      retainFocus: s,
      onFocusWithin: a,
      navKey: l,
      noFocusRing: c,
      focusable: u,
      focusableIfNoChildren: p,
      navRef: d,
      onMoveUp: g,
      onMoveRight: v,
      onMoveDown: F,
      onMoveLeft: D,
      navEntryPreferPosition: C,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: se,
      scrollIntoViewType: Xe,
      resetNavOnEntry: mn,
      actionDescriptionMap: { ...b, ...gn },
    };
  return { elemProps: Cn, navOptions: fn, gamepadEvents: vn };
}
function st(o) {
  return function (t) {
    let {
        focusClassName: n,
        focusWithinClassName: i,
        bFocusableByDefault: r,
        className: s,
        divRef: a,
        node: l,
        tabIndex: c,
        children: u,
        ...p
      } = t,
      d = ut(),
      b = de(),
      g = l.BHasFocus() && b,
      v = l.BFocusWithin() && b,
      {
        bActiveTree: F,
        bActiveTreeWithinContext: D,
        bDisableFocusClasses: C,
      } = sn();
    J(l.FocusCallbackList, d), J(l.FocusWithinCallbackList, d);
    let _ = F && !C,
      se = !D && (c !== void 0 || r);
    return S.createElement(
      o,
      {
        ...p,
        className: (0, Ce.default)(s, g && _ && n, v && _ && i),
        tabIndex: se ? -1 : c,
        ref: a,
      },
      u,
    );
  };
}
var ln = st("div");
function an(o) {
  return (
    Ct.PlayNavSound(21), _e(o.currentTarget) && o.currentTarget.click(), !0
  );
}
var cn = S.createContext(void 0),
  En = cn.Provider;
function un(o, e, t, n, i) {
  let {
      elemProps: { focusClassName: r, children: s, "flow-children": a, ...l },
      navOptions: c,
      gamepadEvents: u,
    } = re(t),
    {
      bFocusableByDefault: p = !0,
      bActivateByDefault: d = !1,
      bDOMElementFocusByDefault: b = p,
    } = i || {};
  c.focusable === void 0 && !l.disabled && p && (c.focusable = !0);
  let g = ie(a),
    { ref: v, node: F } = pe({ layout: g, ...c });
  u.onOKButton ||
    ((("onClick" in l && l.onClick) || (d && (d === !0 || d(l)))) &&
      (u.onOKButton = an)),
    c.focusable && !b
      ? (l.tabIndex = l.tabIndex || 0)
      : !c.focusable && b && (l.tabIndex = l.tabIndex ?? -1),
    U(u, v);
  let D = $(n, v),
    C = (0, ze.useContext)(cn)?.Component,
    _ = { ...l };
  return (
    "onClick" in l && (_.role ??= "button"),
    F
      ? ((_ = {
          ..._,
          divRef: D,
          node: F,
          focusClassName: (0, Ce.default)(r, "gpfocus"),
          focusWithinClassName: "gpfocuswithin",
          bFocusableByDefault: b,
          className: (0, Ce.default)(l.className, "Focusable"),
        }),
        (0, dn.jsx)(j.Provider, {
          value: F,
          children: C
            ? S.createElement(C, { ..._, Component: e }, s)
            : S.createElement(e, _, s),
        }))
      : S.createElement(
          o,
          {
            ..._,
            ref: D,
            className: (0, Ce.default)(l.className, "Focusable"),
          },
          s,
        )
  );
}
function V(o, e) {
  let t = st(o);
  return S.forwardRef(function (i, r) {
    return un(o, t, i, r, e);
  });
}
function Je(o) {
  let e = st(o);
  return S.forwardRef(function (n, i) {
    let {
        virtualKeyboardProps: r,
        props: { refKeyboardHandle: s, ...a },
      } = rn(n),
      l = on(r, s),
      c = $(i, l);
    return un(o, e, a, c);
  });
}
var ae = f(E(), 1),
  An = T.default.forwardRef(function (e, t) {
    let {
        navID: n,
        onActivated: i,
        onDeactivated: r,
        navTreeRef: s,
        enabled: a,
        modal: l,
        virtualFocus: c,
        parentEmbeddedNavTree: u,
        onGlobalButtonDown: p,
        disableFocusClasses: d,
        disabledRoot: b,
        "flow-children": g,
        ...v
      } = e,
      { elemProps: F, navOptions: D, gamepadEvents: C } = re(v);
    return (0, ae.jsx)(eo, {
      navID: n,
      onActivated: i,
      onDeactivated: r,
      navTreeRef: s,
      enabled: a,
      modal: l,
      virtualFocus: c,
      parentEmbeddedNavTree: u,
      onGlobalButtonDown: p,
      disableFocusClasses: d,
      disabledRoot: b,
      "flow-children": g,
      ...D,
      ...C,
      children: (0, ae.jsx)("div", { ...F, ref: t }),
    });
  });
function eo(o) {
  let {
      navID: e,
      onActivated: t,
      onDeactivated: n,
      navTreeRef: i,
      enabled: r = !0,
      modal: s = !1,
      virtualFocus: a = !1,
      children: l,
      parentEmbeddedNavTree: c,
      onGlobalButtonDown: u,
      disableFocusClasses: p = !1,
      disabledRoot: d = !1,
      "flow-children": b,
      ...g
    } = o,
    { elemProps: v, navOptions: F, gamepadEvents: D } = re(g),
    { refDiv: C, tree: _ } = to({
      navID: e,
      virtualFocus: a,
      parentEmbeddedNavTree: c,
      disabledRoot: d,
      enabled: r,
      modal: s,
      onGlobalButtonDown: u,
      navTreeRef: i,
    });
  J(_.OnActivateCallbacks, t),
    J(_.OnDeactivateCallbacks, n),
    Nt(D, C, _),
    T.default.useLayoutEffect(() => {
      let Xe = ie(b);
      _.Root.SetProperties({ ...F, layout: Xe });
    });
  let se = $(C, l.ref);
  return (0, ae.jsx)(no, {
    tree: d ? null : _,
    disableFocusClasses: p || d,
    children: (0, ae.jsx)(j.Provider, {
      value: d ? null : _.Root,
      children: T.default.cloneElement(l, {
        id: e,
        "data-react-nav-root": e,
        ref: se,
      }),
    }),
  });
}
function to(o) {
  let {
      navID: e,
      virtualFocus: t,
      parentEmbeddedNavTree: n,
      disabledRoot: i,
      enabled: r,
      modal: s,
      navTreeRef: a,
      onGlobalButtonDown: l,
    } = o,
    c = te(),
    u = xt() || c.GetDefaultContext(),
    p = T.default.useContext(j),
    [d] = T.default.useState(() =>
      c.NewGamepadNavigationTree(u, e, n ?? p?.Tree),
    ),
    b = T.default.useRef(null);
  return (
    d.SetUseVirtualFocus(t),
    d.SetModal(s),
    d.SetIsEmbeddedInLegacyTree(!!n),
    d.SetOnGlobalButtonDown(l),
    T.default.useEffect(
      () => d.RegisterNavigationItem(d.Root, b.current),
      [d, b],
    ),
    T.default.useEffect(() => {
      d.SetIsEnabled(r);
    }, [d, r]),
    T.default.useEffect(() => {
      if (!i)
        return c.RegisterGamepadNavigationTree(
          d,
          b.current.ownerDocument.defaultView,
        );
    }, [c, d, i]),
    T.default.useEffect(() => (B(a, d), () => B(a, null)), [a, d]),
    { refDiv: b, tree: d }
  );
}
var pn = T.default.createContext({
  bActiveTree: !1,
  bActiveTreeWithinContext: !1,
  bDisableFocusClasses: !1,
});
function no(o) {
  let { tree: e, disableFocusClasses: t = !1, children: n } = o,
    [i, r] = T.default.useState(e?.BIsActive() || !1),
    [s, a] = T.default.useState(e?.BIsActiveWithinContext() || !1);
  T.default.useEffect(() => {
    if (!e) {
      r(!1), a(!1);
      return;
    }
    return (
      r(e.BIsActive()),
      a(e.BIsActiveWithinContext()),
      e.OnActiveStateChangedCallbacks.Register(() => {
        r(e.BIsActive()), a(e.BIsActiveWithinContext());
      }).Unregister
    );
  }, [e]);
  let l = T.default.useMemo(
    () => ({
      bActiveTree: i,
      bActiveTreeWithinContext: s,
      bDisableFocusClasses: t,
    }),
    [i, t, s],
  );
  return (0, ae.jsx)(pn.Provider, { value: l, children: n });
}
function sn() {
  return T.default.useContext(pn);
}
var $e = f(dt()),
  fe = f(G());
var qe = f(E()),
  oo = fe.default.createContext({ Component: ln });
var Mr = fe.default.forwardRef(function (e, t) {
  let {
      "flow-children": n,
      onActivate: i,
      onCancel: r,
      focusClassName: s,
      focusWithinClassName: a,
      ...l
    } = e,
    { elemProps: c, navOptions: u, gamepadEvents: p } = re(l),
    d = {},
    b = ie(n);
  b != 0 && (d.layout = b),
    i && ((c.onClick = c.onClick || i), (p.onOKButton = p.onOKButton || i)),
    p.onOKButton &&
      u.focusable === void 0 &&
      u.focusableIfNoChildren === void 0 &&
      (u.focusable = !0),
    r && (p.onCancelButton = p.onCancelButton || r);
  let { ref: g, node: v } = pe({ ...d, ...u }),
    F = de();
  (c.className = (0, $e.default)(c.className, "Panel", F && "Focusable")),
    U(p, g);
  let D = $(g, t);
  (u.focusable || u.focusableIfNoChildren) &&
    (!v || !v.Tree.BUseVirtualFocus()) &&
    (c.tabIndex = c.tabIndex || 0),
    u.focusable && (i || p.onOKButton) && (c.role ??= "button");
  let C = (0, fe.useContext)(oo).Component;
  return (0, qe.jsx)(j.Provider, {
    value: v,
    children: v
      ? (0, qe.jsx)(C, {
          ...c,
          divRef: D,
          node: v,
          focusClassName: (0, $e.default)(s, "gpfocus"),
          focusWithinClassName: (0, $e.default)(a, "gpfocuswithin"),
        })
      : (0, qe.jsx)("div", { ...c, ref: D }),
  });
});
export {
  Ct as a,
  y as b,
  _t as c,
  ei as d,
  wn as e,
  ti as f,
  Ut as g,
  Zt as h,
  it as i,
  ge as j,
  ar as k,
  Do as l,
  Ao as m,
  Eo as n,
  In as o,
  xt as p,
  de as q,
  An as r,
  eo as s,
  sn as t,
  Qn as u,
  Zn as v,
  Mo as w,
  Bo as x,
  Oo as y,
  Ho as z,
  Wo as A,
  Uo as B,
  Ko as C,
  zo as D,
  $o as E,
  qo as F,
  Xo as G,
  Mr as H,
};
