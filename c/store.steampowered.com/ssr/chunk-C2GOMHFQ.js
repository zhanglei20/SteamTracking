import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import {
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
} from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
var _ = _((_, _) => {
  "use strict";
  _.exports = function (_, _) {
    return function () {
      for (var _ = new Array(arguments.length), _ = 0; _ < _.length; _++)
        _[_] = arguments[_];
      return _.apply(_, _);
    };
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = Object.prototype.toString,
    _ = (function (_) {
      return function (_) {
        var _ = _.call(_);
        return _[_] || (_[_] = _.slice(8, -1).toLowerCase());
      };
    })(Object.create(null));
  function _(_) {
    return (
      (_ = _.toLowerCase()),
      function (_) {
        return _(_) === _;
      }
    );
  }
  function _(_) {
    return Array.isArray(_);
  }
  function _(_) {
    return typeof _ > "u";
  }
  function _(_) {
    return (
      _ !== null &&
      !_(_) &&
      _.constructor !== null &&
      !_(_.constructor) &&
      typeof _.constructor.isBuffer == "function" &&
      _.constructor.isBuffer(_)
    );
  }
  var _ = _("ArrayBuffer");
  function _(_) {
    var _;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (_ = ArrayBuffer.isView(_))
        : (_ = _ && _.buffer && _(_.buffer)),
      _
    );
  }
  function _(_) {
    return typeof _ == "string";
  }
  function _(_) {
    return typeof _ == "number";
  }
  function _(_) {
    return _ !== null && typeof _ == "object";
  }
  function _(_) {
    if (_(_) !== "object") return !1;
    var _ = Object.getPrototypeOf(_);
    return _ === null || _ === Object.prototype;
  }
  var _ = _("Date"),
    _ = _("File"),
    _ = _("Blob"),
    _ = _("FileList");
  function _(_) {
    return _.call(_) === "[object Function]";
  }
  function _(_) {
    return _(_) && _(_.pipe);
  }
  function _(_) {
    var _ = "[object FormData]";
    return (
      _ &&
      ((typeof FormData == "function" && _ instanceof FormData) ||
        _.call(_) === _ ||
        (_(_.toString) && _.toString() === _))
    );
  }
  var _ = _("URLSearchParams");
  function _(_) {
    return _.trim ? _.trim() : _.replace(/^\s+|\s+$/g, "");
  }
  function _() {
    return typeof navigator < "u" &&
      (navigator.product === "ReactNative" ||
        navigator.product === "NativeScript" ||
        navigator.product === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  }
  function _(_, _) {
    if (!(_ === null || typeof _ > "u"))
      if ((typeof _ != "object" && (_ = [_]), _(_)))
        for (var _ = 0, _ = _.length; _ < _; _++) _.call(null, _[_], _, _);
      else
        for (var _ in _)
          Object.prototype.hasOwnProperty.call(_, _) &&
            _.call(null, _[_], _, _);
  }
  function _() {
    var _ = {};
    function _(_, _) {
      _(_[_]) && _(_)
        ? (_[_] = _(_[_], _))
        : _(_)
          ? (_[_] = _({}, _))
          : _(_)
            ? (_[_] = _.slice())
            : (_[_] = _);
    }
    for (var _ = 0, _ = arguments.length; _ < _; _++) _(arguments[_], _);
    return _;
  }
  function _(_, _, _) {
    return (
      _(_, function (_, _) {
        _ && typeof _ == "function" ? (_[_] = _(_, _)) : (_[_] = _);
      }),
      _
    );
  }
  function _(_) {
    return _.charCodeAt(0) === 65279 && (_ = _.slice(1)), _;
  }
  function _(_, _, _, _) {
    (_.prototype = Object.create(_.prototype, _)),
      (_.prototype.constructor = _),
      _ && Object.assign(_.prototype, _);
  }
  function _(_, _, _) {
    var _,
      _,
      _,
      _ = {};
    _ = _ || {};
    do {
      for (_ = Object.getOwnPropertyNames(_), _ = _.length; _-- > 0; )
        (_ = _[_]), _[_] || ((_[_] = _[_]), (_[_] = !0));
      _ = Object.getPrototypeOf(_);
    } while (_ && (!_ || _(_, _)) && _ !== Object.prototype);
    return _;
  }
  function _(_, _, _) {
    (_ = String(_)),
      (_ === void 0 || _ > _.length) && (_ = _.length),
      (_ -= _.length);
    var _ = _.indexOf(_, _);
    return _ !== -1 && _ === _;
  }
  function _(_) {
    if (!_) return null;
    var _ = _.length;
    if (_(_)) return null;
    for (var _ = new Array(_); _-- > 0; ) _[_] = _[_];
    return _;
  }
  var _ = (function (_) {
    return function (_) {
      return _ && _ instanceof _;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
  _.exports = {
    isArray: _,
    isArrayBuffer: _,
    isBuffer: _,
    isFormData: _,
    isArrayBufferView: _,
    isString: _,
    isNumber: _,
    isObject: _,
    isPlainObject: _,
    isUndefined: _,
    isDate: _,
    isFile: _,
    isBlob: _,
    isFunction: _,
    isStream: _,
    isURLSearchParams: _,
    isStandardBrowserEnv: _,
    forEach: _,
    merge: _,
    extend: _,
    trim: _,
    stripBOM: _,
    inherits: _,
    toFlatObject: _,
    kindOf: _,
    kindOfTest: _,
    endsWith: _,
    toArray: _,
    isTypedArray: _,
    isFileList: _,
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  function _(_) {
    return encodeURIComponent(_)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  _.exports = function (_, _, _) {
    if (!_) return _;
    var _;
    if (_) _ = _(_);
    else if (_.isURLSearchParams(_)) _ = _.toString();
    else {
      var _ = [];
      _.forEach(_, function (_, _) {
        _ === null ||
          typeof _ > "u" ||
          (_.isArray(_) ? (_ = _ + "[]") : (_ = [_]),
          _.forEach(_, function (_) {
            _.isDate(_)
              ? (_ = _.toISOString())
              : _.isObject(_) && (_ = JSON.stringify(_)),
              _.push(_(_) + "=" + _(_));
          }));
      }),
        (_ = _.join("&"));
    }
    if (_) {
      var _ = _.indexOf("#");
      _ !== -1 && (_ = _.slice(0, _)),
        (_ += (_.indexOf("?") === -1 ? "?" : "&") + _);
    }
    return _;
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  function _() {
    this.handlers = [];
  }
  _.prototype.use = function (_, _, _) {
    return (
      this.handlers.push({
        fulfilled: _,
        rejected: _,
        synchronous: _ ? _.synchronous : !1,
        runWhen: _ ? _.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  _.prototype.eject = function (_) {
    this.handlers[_] && (this.handlers[_] = null);
  };
  _.prototype.forEach = function (_) {
    _.forEach(this.handlers, function (_) {
      _ !== null && _(_);
    });
  };
  _.exports = _;
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  _.exports = function (_, _) {
    _.forEach(_, function (_, _) {
      _ !== _ &&
        _.toUpperCase() === _.toUpperCase() &&
        ((_[_] = _), delete _[_]);
    });
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  function _(_, _, _, _, _) {
    Error.call(this),
      (this.message = _),
      (this.name = "AxiosError"),
      _ && (this.code = _),
      _ && (this.config = _),
      _ && (this.request = _),
      _ && (this.response = _);
  }
  _.inherits(_, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var _ = _.prototype,
    _ = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
  ].forEach(function (_) {
    _[_] = {
      value: _,
    };
  });
  Object.defineProperties(_, _);
  Object.defineProperty(_, "isAxiosError", {
    value: !0,
  });
  _.from = function (_, _, _, _, _, _) {
    var _ = Object.create(_);
    return (
      _.toFlatObject(_, _, function (_) {
        return _ !== Error.prototype;
      }),
      _.call(_, _.message, _, _, _, _),
      (_.name = _.name),
      _ && Object.assign(_, _),
      _
    );
  };
  _.exports = _;
});
var _ = _((_, _) => {
  "use strict";
  _.exports = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  function _(_, _) {
    _ = _ || new FormData();
    var _ = [];
    function _(_) {
      return _ === null
        ? ""
        : _.isDate(_)
          ? _.toISOString()
          : _.isArrayBuffer(_) || _.isTypedArray(_)
            ? typeof Blob == "function"
              ? new Blob([_])
              : Buffer.from(_)
            : _;
    }
    function _(_, _) {
      if (_.isPlainObject(_) || _.isArray(_)) {
        if (_.indexOf(_) !== -1)
          throw Error("Circular reference detected in " + _);
        _.push(_),
          _.forEach(_, function (_, _) {
            if (!_.isUndefined(_)) {
              var _ = _ ? _ + "." + _ : _,
                _;
              if (_ && !_ && typeof _ == "object") {
                if (_.endsWith(_, "{}")) _ = JSON.stringify(_);
                else if (_.endsWith(_, "[]") && (_ = _.toArray(_))) {
                  _.forEach(function (_) {
                    !_.isUndefined(_) && _.append(_, _(_));
                  });
                  return;
                }
              }
              _(_, _);
            }
          }),
          _.pop();
      } else _.append(_, _(_));
    }
    return _(_), _;
  }
  _.exports = _;
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  _.exports = function (_, _, _) {
    var _ = _.config.validateStatus;
    !_.status || !_ || _(_.status)
      ? _(_)
      : _(
          new _(
            "Request failed with status code " + _.status,
            [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][
              Math.floor(_.status / 100) - 4
            ],
            _.config,
            _.request,
            _,
          ),
        );
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  _.exports = _.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (_, _, _, _, _, _) {
            var _ = [];
            _.push(_ + "=" + encodeURIComponent(_)),
              _.isNumber(_) && _.push("expires=" + new Date(_).toGMTString()),
              _.isString(_) && _.push("path=" + _),
              _.isString(_) && _.push("domain=" + _),
              _ === !0 && _.push("secure"),
              (document.cookie = _.join("; "));
          },
          read: function (_) {
            var _ = document.cookie.match(
              new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"),
            );
            return _ ? decodeURIComponent(_[3]) : null;
          },
          remove: function (_) {
            this.write(_, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
});
var _ = _((_, _) => {
  "use strict";
  _.exports = function (_) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(_);
  };
});
var _ = _((_, _) => {
  "use strict";
  _.exports = function (_, _) {
    return _ ? _.replace(/\/+$/, "") + "/" + _.replace(/^\/+/, "") : _;
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _();
  _.exports = function (_, _) {
    return _ && !_(_) ? _(_, _) : _;
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  _.exports = function (_) {
    var _ = {},
      _,
      _,
      _;
    return (
      _ &&
        _.forEach(
          _.split(`
`),
          function (_) {
            if (
              ((_ = _.indexOf(":")),
              (_ = _.trim(_.substr(0, _)).toLowerCase()),
              (_ = _.trim(_.substr(_ + 1))),
              _)
            ) {
              if (_[_] && _.indexOf(_) >= 0) return;
              _ === "set-cookie"
                ? (_[_] = (_[_] ? _[_] : []).concat([_]))
                : (_[_] = _[_] ? _[_] + ", " + _ : _);
            }
          },
        ),
      _
    );
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  _.exports = _.isStandardBrowserEnv()
    ? (function () {
        var _ = /(msie|trident)/i.test(navigator.userAgent),
          _ = document.createElement("a"),
          _;
        function _(_) {
          var _ = _;
          return (
            _ && (_.setAttribute("href", _), (_ = _.href)),
            _.setAttribute("href", _),
            {
              href: _.href,
              protocol: _.protocol ? _.protocol.replace(/:$/, "") : "",
              host: _.host,
              search: _.search ? _.search.replace(/^\?/, "") : "",
              hash: _.hash ? _.hash.replace(/^#/, "") : "",
              hostname: _.hostname,
              port: _.port,
              pathname:
                _.pathname.charAt(0) === "/" ? _.pathname : "/" + _.pathname,
            }
          );
        }
        return (
          (_ = _(window.location.href)),
          function (_) {
            var _ = _.isString(_) ? _(_) : _;
            return _.protocol === _.protocol && _.host === _.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _();
  function _(_) {
    _.call(this, _ ?? "canceled", _.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  _.inherits(_, _, {
    __CANCEL__: !0,
  });
  _.exports = _;
});
var _ = _((_, _) => {
  "use strict";
  _.exports = function (_) {
    var _ = /^([-+\w]{1,25})(:?\/\/|:)/.exec(_);
    return (_ && _[1]) || "";
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  _.exports = function (_) {
    return new Promise(function (_, _) {
      var _ = _.data,
        _ = _.headers,
        _ = _.responseType,
        _;
      function _() {
        _.cancelToken && _.cancelToken.unsubscribe(_),
          _.signal && _.signal.removeEventListener("abort", _);
      }
      _.isFormData(_) && _.isStandardBrowserEnv() && delete _["Content-Type"];
      var _ = new XMLHttpRequest();
      if (_.auth) {
        var _ = _.auth.username || "",
          _ = _.auth.password
            ? unescape(encodeURIComponent(_.auth.password))
            : "";
        _.Authorization = "Basic " + btoa(_ + ":" + _);
      }
      var _ = _(_.baseURL, _.url);
      _.open(_.method.toUpperCase(), _(_, _.params, _.paramsSerializer), !0),
        (_.timeout = _.timeout);
      function _() {
        if (_) {
          var _ =
              "getAllResponseHeaders" in _
                ? _(_.getAllResponseHeaders())
                : null,
            _ =
              !_ || _ === "text" || _ === "json" ? _.responseText : _.response,
            _ = {
              data: _,
              status: _.status,
              statusText: _.statusText,
              headers: _,
              config: _,
              request: _,
            };
          _(
            function (_) {
              _(_), _();
            },
            function (_) {
              _(_), _();
            },
            _,
          ),
            (_ = null);
        }
      }
      if (
        ("onloadend" in _
          ? (_.onloadend = _)
          : (_.onreadystatechange = function () {
              !_ ||
                _.readyState !== 4 ||
                (_.status === 0 &&
                  !(_.responseURL && _.responseURL.indexOf("file:") === 0)) ||
                setTimeout(_);
            }),
        (_.onabort = function () {
          _ && (_(new _("Request aborted", _.ECONNABORTED, _, _)), (_ = null));
        }),
        (_.onerror = function () {
          _(new _("Network Error", _.ERR_NETWORK, _, _, _)), (_ = null);
        }),
        (_.ontimeout = function () {
          var _ = _.timeout
              ? "timeout of " + _.timeout + "ms exceeded"
              : "timeout exceeded",
            _ = _.transitional || _;
          _.timeoutErrorMessage && (_ = _.timeoutErrorMessage),
            _(
              new _(
                _,
                _.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
                _,
                _,
              ),
            ),
            (_ = null);
        }),
        _.isStandardBrowserEnv())
      ) {
        var _ =
          (_.withCredentials || _(_)) && _.xsrfCookieName
            ? _.read(_.xsrfCookieName)
            : void 0;
        _ && (_[_.xsrfHeaderName] = _);
      }
      "setRequestHeader" in _ &&
        _.forEach(_, function (_, _) {
          typeof _ > "u" && _.toLowerCase() === "content-type"
            ? delete _[_]
            : _.setRequestHeader(_, _);
        }),
        _.isUndefined(_.withCredentials) ||
          (_.withCredentials = !!_.withCredentials),
        _ && _ !== "json" && (_.responseType = _.responseType),
        typeof _.onDownloadProgress == "function" &&
          _.addEventListener("progress", _.onDownloadProgress),
        typeof _.onUploadProgress == "function" &&
          _.upload &&
          _.upload.addEventListener("progress", _.onUploadProgress),
        (_.cancelToken || _.signal) &&
          ((_ = function (_) {
            _ && (_(!_ || (_ && _.type) ? new _() : _), _.abort(), (_ = null));
          }),
          _.cancelToken && _.cancelToken.subscribe(_),
          _.signal &&
            (_.signal.aborted ? _() : _.signal.addEventListener("abort", _))),
        _ || (_ = null);
      var _ = _(_);
      if (_ && ["http", "https", "file"].indexOf(_) === -1) {
        _(new _("Unsupported protocol " + _ + ":", _.ERR_BAD_REQUEST, _));
        return;
      }
      _.send(_);
    });
  };
});
var _ = _((_, _) => {
  "use strict";
  _.exports = null;
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
  function _(_, _) {
    !_.isUndefined(_) &&
      _.isUndefined(_["Content-Type"]) &&
      (_["Content-Type"] = _);
  }
  function _() {
    var _;
    return (
      typeof XMLHttpRequest < "u"
        ? (_ = _())
        : typeof process < "u" &&
          Object.prototype.toString.call(process) === "[object process]" &&
          (_ = _()),
      _
    );
  }
  function _(_, _, _) {
    if (_.isString(_))
      try {
        return (_ || JSON.parse)(_), _.trim(_);
      } catch (_) {
        if (_.name !== "SyntaxError") throw _;
      }
    return (_ || JSON.stringify)(_);
  }
  var _ = {
    transitional: _,
    adapter: _(),
    transformRequest: [
      function (_, _) {
        if (
          (_(_, "Accept"),
          _(_, "Content-Type"),
          _.isFormData(_) ||
            _.isArrayBuffer(_) ||
            _.isBuffer(_) ||
            _.isStream(_) ||
            _.isFile(_) ||
            _.isBlob(_))
        )
          return _;
        if (_.isArrayBufferView(_)) return _.buffer;
        if (_.isURLSearchParams(_))
          return (
            _(_, "application/x-www-form-urlencoded;charset=utf-8"),
            _.toString()
          );
        var _ = _.isObject(_),
          _ = _ && _["Content-Type"],
          _;
        if ((_ = _.isFileList(_)) || (_ && _ === "multipart/form-data")) {
          var _ = this.env && this.env.FormData;
          return _(
            _
              ? {
                  "files[]": _,
                }
              : _,
            _ && new _(),
          );
        } else if (_ || _ === "application/json")
          return _(_, "application/json"), _(_);
        return _;
      },
    ],
    transformResponse: [
      function (_) {
        var _ = this.transitional || _.transitional,
          _ = _ && _.silentJSONParsing,
          _ = _ && _.forcedJSONParsing,
          _ = !_ && this.responseType === "json";
        if (_ || (_ && _.isString(_) && _.length))
          try {
            return JSON.parse(_);
          } catch (_) {
            if (_)
              throw _.name === "SyntaxError"
                ? _.from(_, _.ERR_BAD_RESPONSE, this, null, this.response)
                : _;
          }
        return _;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: _(),
    },
    validateStatus: function (_) {
      return _ >= 200 && _ < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
      },
    },
  };
  _.forEach(["delete", "get", "head"], function (_) {
    _.headers[_] = {};
  });
  _.forEach(["post", "put", "patch"], function (_) {
    _.headers[_] = _.merge(_);
  });
  _.exports = _;
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _();
  _.exports = function (_, _, _) {
    var _ = this || _;
    return (
      _.forEach(_, function (_) {
        _ = _.call(_, _, _);
      }),
      _
    );
  };
});
var _ = _((_, _) => {
  "use strict";
  _.exports = function (_) {
    return !!(_ && _.__CANCEL__);
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  function _(_) {
    if (
      (_.cancelToken && _.cancelToken.throwIfRequested(),
      _.signal && _.signal.aborted)
    )
      throw new _();
  }
  _.exports = function (_) {
    _(_),
      (_.headers = _.headers || {}),
      (_.data = _.call(_, _.data, _.headers, _.transformRequest)),
      (_.headers = _.merge(
        _.headers.common || {},
        _.headers[_.method] || {},
        _.headers,
      )),
      _.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (_) {
          delete _.headers[_];
        },
      );
    var _ = _.adapter || _.adapter;
    return _(_).then(
      function (_) {
        return (
          _(_), (_.data = _.call(_, _.data, _.headers, _.transformResponse)), _
        );
      },
      function (_) {
        return (
          _(_) ||
            (_(_),
            _ &&
              _.response &&
              (_.response.data = _.call(
                _,
                _.response.data,
                _.response.headers,
                _.transformResponse,
              ))),
          Promise.reject(_)
        );
      },
    );
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  _.exports = function (_, _) {
    _ = _ || {};
    var _ = {};
    function _(_, _) {
      return _.isPlainObject(_) && _.isPlainObject(_)
        ? _.merge(_, _)
        : _.isPlainObject(_)
          ? _.merge({}, _)
          : _.isArray(_)
            ? _.slice()
            : _;
    }
    function _(_) {
      if (_.isUndefined(_[_])) {
        if (!_.isUndefined(_[_])) return _(void 0, _[_]);
      } else return _(_[_], _[_]);
    }
    function _(_) {
      if (!_.isUndefined(_[_])) return _(void 0, _[_]);
    }
    function _(_) {
      if (_.isUndefined(_[_])) {
        if (!_.isUndefined(_[_])) return _(void 0, _[_]);
      } else return _(void 0, _[_]);
    }
    function _(_) {
      if (_ in _) return _(_[_], _[_]);
      if (_ in _) return _(void 0, _[_]);
    }
    var _ = {
      url: _,
      method: _,
      data: _,
      baseURL: _,
      transformRequest: _,
      transformResponse: _,
      paramsSerializer: _,
      timeout: _,
      timeoutMessage: _,
      withCredentials: _,
      adapter: _,
      responseType: _,
      xsrfCookieName: _,
      xsrfHeaderName: _,
      onUploadProgress: _,
      onDownloadProgress: _,
      decompress: _,
      maxContentLength: _,
      maxBodyLength: _,
      beforeRedirect: _,
      transport: _,
      httpAgent: _,
      httpsAgent: _,
      cancelToken: _,
      socketPath: _,
      responseEncoding: _,
      validateStatus: _,
    };
    return (
      _.forEach(Object.keys(_).concat(Object.keys(_)), function (_) {
        var _ = _[_] || _,
          _ = _(_);
        (_.isUndefined(_) && _ !== _) || (_[_] = _);
      }),
      _
    );
  };
});
var _ = _((_, _) => {
  "use strict";
  _.exports = {
    version: "0.27.2",
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _().version,
    _ = _(),
    _ = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (_, _) {
      _[_] = function (_) {
        return typeof _ === _ || "a" + (_ < 1 ? "n " : " ") + _;
      };
    },
  );
  var _ = {};
  _.transitional = function (_, _, _) {
    function _(_, _) {
      return (
        "[Axios v" +
        _ +
        "] Transitional option '" +
        _ +
        "'" +
        _ +
        (_ ? ". " + _ : "")
      );
    }
    return function (_, _, _) {
      if (_ === !1)
        throw new _(
          _(_, " has been removed" + (_ ? " in " + _ : "")),
          _.ERR_DEPRECATED,
        );
      return (
        _ &&
          !_[_] &&
          ((_[_] = !0),
          console.warn(
            _(
              _,
              " has been deprecated since v" +
                _ +
                " and will be removed in the near future",
            ),
          )),
        _ ? _(_, _, _) : !0
      );
    };
  };
  function _(_, _, _) {
    if (typeof _ != "object")
      throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
    for (var _ = Object.keys(_), _ = _.length; _-- > 0; ) {
      var _ = _[_],
        _ = _[_];
      if (_) {
        var _ = _[_],
          _ = _ === void 0 || _(_, _, _);
        if (_ !== !0)
          throw new _("option " + _ + " must be " + _, _.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (_ !== !0) throw new _("Unknown option " + _, _.ERR_BAD_OPTION);
    }
  }
  _.exports = {
    assertOptions: _,
    validators: _,
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _.validators;
  function _(_) {
    (this.defaults = _),
      (this.interceptors = {
        request: new _(),
        response: new _(),
      });
  }
  _.prototype.request = function (_, _) {
    typeof _ == "string" ? ((_ = _ || {}), (_.url = _)) : (_ = _ || {}),
      (_ = _(this.defaults, _)),
      _.method
        ? (_.method = _.method.toLowerCase())
        : this.defaults.method
          ? (_.method = this.defaults.method.toLowerCase())
          : (_.method = "get");
    var _ = _.transitional;
    _ !== void 0 &&
      _.assertOptions(
        _,
        {
          silentJSONParsing: _.transitional(_.boolean),
          forcedJSONParsing: _.transitional(_.boolean),
          clarifyTimeoutError: _.transitional(_.boolean),
        },
        !1,
      );
    var _ = [],
      _ = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(_) === !1) ||
        ((_ = _ && _.synchronous), _.unshift(_.fulfilled, _.rejected));
    });
    var _ = [];
    this.interceptors.response.forEach(function (_) {
      _.push(_.fulfilled, _.rejected);
    });
    var _;
    if (!_) {
      var _ = [_, void 0];
      for (
        Array.prototype.unshift.apply(_, _),
          _ = _.concat(_),
          _ = Promise.resolve(_);
        _.length;
      )
        _ = _.then(_.shift(), _.shift());
      return _;
    }
    for (var _ = _; _.length; ) {
      var _ = _.shift(),
        _ = _.shift();
      try {
        _ = _(_);
      } catch (_) {
        _(_);
        break;
      }
    }
    try {
      _ = _(_);
    } catch (_) {
      return Promise.reject(_);
    }
    for (; _.length; ) _ = _.then(_.shift(), _.shift());
    return _;
  };
  _.prototype.getUri = function (_) {
    _ = _(this.defaults, _);
    var _ = _(_.baseURL, _.url);
    return _(_, _.params, _.paramsSerializer);
  };
  _.forEach(["delete", "get", "head", "options"], function (_) {
    _.prototype[_] = function (_, _) {
      return this.request(
        _(_ || {}, {
          method: _,
          url: _,
          data: (_ || {}).data,
        }),
      );
    };
  });
  _.forEach(["post", "put", "patch"], function (_) {
    function _(_) {
      return function (_, _, _) {
        return this.request(
          _(_ || {}, {
            method: _,
            headers: _
              ? {
                  "Content-Type": "multipart/form-data",
                }
              : {},
            url: _,
            data: _,
          }),
        );
      };
    }
    (_.prototype[_] = _()), (_.prototype[_ + "Form"] = _(!0));
  });
  _.exports = _;
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  function _(_) {
    if (typeof _ != "function")
      throw new TypeError("executor must be a function.");
    var _;
    this.promise = new Promise(function (_) {
      _ = _;
    });
    var _ = this;
    this.promise.then(function (_) {
      if (_._listeners) {
        var _,
          _ = _._listeners.length;
        for (_ = 0; _ < _; _++) _._listeners[_](_);
        _._listeners = null;
      }
    }),
      (this.promise.then = function (_) {
        var _,
          _ = new Promise(function (_) {
            _.subscribe(_), (_ = _);
          }).then(_);
        return (
          (_.cancel = function () {
            _.unsubscribe(_);
          }),
          _
        );
      }),
      _(function (_) {
        _.reason || ((_.reason = new _(_)), _(_.reason));
      });
  }
  _.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  _.prototype.subscribe = function (_) {
    if (this.reason) {
      _(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(_) : (this._listeners = [_]);
  };
  _.prototype.unsubscribe = function (_) {
    if (this._listeners) {
      var _ = this._listeners.indexOf(_);
      _ !== -1 && this._listeners.splice(_, 1);
    }
  };
  _.source = function () {
    var _,
      _ = new _(function (_) {
        _ = _;
      });
    return {
      token: _,
      cancel: _,
    };
  };
  _.exports = _;
});
var _ = _((_, _) => {
  "use strict";
  _.exports = function (_) {
    return function (_) {
      return _.apply(null, _);
    };
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _();
  _.exports = function (_) {
    return _.isObject(_) && _.isAxiosError === !0;
  };
});
var _ = _((_, _) => {
  "use strict";
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  function _(_) {
    var _ = new _(_),
      _ = _(_.prototype.request, _);
    return (
      _.extend(_, _.prototype, _),
      _.extend(_, _),
      (_.create = function (_) {
        return _(_(_, _));
      }),
      _
    );
  }
  var _ = _(_);
  _.Axios = _;
  _.CanceledError = _();
  _.CancelToken = _();
  _.isCancel = _();
  _.VERSION = _().version;
  _.toFormData = _();
  _.AxiosError = _();
  _.Cancel = _.CanceledError;
  _.all = function (_) {
    return Promise.all(_);
  };
  _.spread = _();
  _.isAxiosError = _();
  _.exports = _;
  _.exports.default = _;
});
var _ = _((_, _) => {
  "use strict";
  _.exports = _();
});
var _ = class {
    m_transport = null;
    m_registry = null;
    SetDefaultTransport(_) {
      this.m_transport != null &&
        console.error(
          "Multiple attempts to set a default WebUI transport: overriding previous",
        ),
        (this.m_transport = _);
    }
    GetDefaultTransport() {
      return this.m_transport;
    }
    SetDefaultHandlerRegistry(_) {
      this.m_registry != null &&
        console.error(
          "Multiple attempts to set a default WebUI message handler registry: overriding previous",
        ),
        (this.m_registry = _);
    }
    GetDefaultHandlerRegistry() {
      return this.m_registry;
    }
  },
  _ = new _();
function _() {
  return _;
}
var _ = class _ {
  m_ulSteamID;
  constructor(_ = 0, _, _, _) {
    _ instanceof _
      ? (this.m_ulSteamID = _.m_ulSteamID)
      : typeof _ == "string"
        ? (this.m_ulSteamID = _.fromString(_, !0))
        : _ && _ && _ !== void 0
          ? this.SetFromComponents(_ ?? 0, _, _, _)
          : _
            ? (this.m_ulSteamID = _.fromNumber(_, !0))
            : (this.m_ulSteamID = _.UZERO);
  }
  static InitFromAccountID(_) {
    return new _(Number(_), _.EUNIVERSE, 1, _);
  }
  static InitFromClanID(_) {
    return new _(Number(_), _.EUNIVERSE, 7, 0);
  }
  GetAccountID() {
    return this.m_ulSteamID.getLowBitsUnsigned();
  }
  GetInstance() {
    return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
  }
  GetAccountType() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
  }
  GetUniverse() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
  }
  ConvertTo64BitString() {
    return this.m_ulSteamID.toString();
  }
  Render() {
    switch (this.GetAccountType()) {
      case 0:
        return "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 7:
        return "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 4:
        return (
          "[A:" +
          this.GetUniverse() +
          ":" +
          this.GetAccountID() +
          ":" +
          this.GetInstance() +
          "]"
        );
      case 3:
        return "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 2:
        return (
          "[M:" +
          this.GetUniverse() +
          ":" +
          this.GetAccountID() +
          ":" +
          this.GetInstance() +
          "]"
        );
      case 5:
        return "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 6:
        return "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      default:
        return "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
    }
  }
  static InitFromString(_) {
    let _ = new _();
    try {
      let [_, _, _, _, _] =
          _.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        _ = Number(_),
        _ = Number(_),
        _ = _ ? Number(_) : 1;
      switch (_) {
        case "I":
          _.SetFromComponents(_, _, 0, _);
        case "g":
          _.SetFromComponents(_, 0, 7, _);
        case "A":
          _.SetFromComponents(_, _, 4, _);
        case "G":
          _.SetFromComponents(_, _, 3, _);
        case "M":
          _.SetFromComponents(_, _, 2, _);
        case "P":
          _.SetFromComponents(_, _, 5, _);
        case "C":
          _.SetFromComponents(_, _, 6, _);
        case "U":
          _.SetFromComponents(_, _, 1, _);
      }
    } catch {}
    return _;
  }
  BIsValid() {
    let _ = this.GetAccountType();
    if (_ <= 0 || _ >= 11) return !1;
    let _ = this.GetUniverse();
    if (_ <= 0 || _ >= 5) return !1;
    if (_ == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > _) return !1;
    } else if (_ == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (_ == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(_) {
    this.m_ulSteamID = new _(_, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      _,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      _,
      this.GetUniverse(),
    );
  }
  SetUniverse(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      _,
    );
  }
  SetFromComponents(_, _, _, _) {
    let _ = ((_ & 255) << 24) + ((_ & 15) << 20) + (_ & 1048575),
      _ = _ & 4294967295;
    this.m_ulSteamID = new _(_, _, !0);
  }
};
function _(_) {
  return _
    ? DOMParser
      ? new DOMParser().parseFromString(_, "text/html").documentElement
          .textContent
      : _
    : "";
}
function _(_) {
  return atob(_.replace(/-/g, "+").replace(/_/g, "/"));
}
var _ = _(_()),
  _ = _(_());
var _ = _(_());
var _ = 900;
function _(_) {
  try {
    if (!_ || typeof _ != "string") return null;
    let _ = _.split(".");
    if (_.length !== 3) return null;
    let [_, _] = _,
      _ = _(_),
      _ = _(_);
    return !_ || !_
      ? null
      : {
          header: JSON.parse(_),
          body: JSON.parse(_),
        };
  } catch (_) {
    return (
      console.error(`Exception while attempting to decode token: "${_}"`), null
    );
  }
}
function _(_) {
  return _ ? _.body.exp : 0;
}
function _(_) {
  return _ ? _.body.nbf || _.body.iat : 0;
}
function _(_) {
  let _ = _(_),
    _ = _(_),
    _ = _,
    _ = _ - _;
  return _ < _ * 1.5 && (_ = _ <= 60 ? 0 : 60), _(_) - _ < Date.now() / 1e3;
}
var _ = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = "";
  m_bJsonMode = !1;
  m_strSpoofedSteamID = "";
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  constructor(_, _, _ = !1, _) {
    (this.m_strWebAPIBaseURL = _),
      (this.m_webApiAccessToken = _),
      (this.m_bJsonMode = _),
      (this.m_fnRequestNewAccessToken = _),
      (this.m_bJWTToken = _(_) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !0,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !0,
        }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !1,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !1,
        }),
        MakeReady: this.MakeReady.bind(this),
      });
    let _ = _("steamLoginSpoofSteamID");
    _ && /[0-9]+/g.test(_) && (this.m_strSpoofedSteamID = _);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new _();
  }
  RTime32ToDate(_) {
    return new Date(_ * 1e3);
  }
  MakeReady() {
    return Promise.resolve({
      result: 1,
      message: "ready",
    });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetWebAPIAccessToken() {
    return this.m_webApiAccessToken;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  async SendMsgAndAwaitResponse(_, _, _, _, _) {
    let _ = null;
    try {
      if (this.m_bJWTToken && _.bSendAuth) {
        let _ = Date.now() / 1e3;
        if (this.m_refreshAccessTokenPromise)
          await this.m_refreshAccessTokenPromise;
        else if (
          this.m_fnRequestNewAccessToken &&
          _ - this.m_dtLastExpireCheck > 60
        ) {
          this.m_dtLastExpireCheck = _;
          let _ = _(this.m_webApiAccessToken);
          _ &&
            _(_) &&
            ((this.m_refreshAccessTokenPromise =
              this.m_fnRequestNewAccessToken()),
            (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
            (this.m_refreshAccessTokenPromise = void 0));
        }
      }
      let _ = await this.Send(_, _, _, _);
      if (_.status != 200 || !_.data) throw new Error("Request Error");
      if (
        ((_ = _.Init(_, 147)),
        _.headers &&
          (_.headers["x-eresult"] &&
            _.Hdr().set_eresult(parseInt(_.headers["x-eresult"])),
          _.headers["x-error_message"] &&
            _.Hdr().set_error_message(_.headers["x-error_message"])),
        this.m_bJsonMode)
      )
        _.SetBodyJSON(_.data.response);
      else {
        let _ = new _(_.data),
          _ = new _.BinaryReader(
            _.GetPacket(),
            _.TellGet(),
            _.GetCountBytesRemaining(),
          );
        _.deserializeBinaryFromReader(_.Body(), _);
      }
    } catch (_) {
      let _ =
          _ &&
          typeof _ == "object" &&
          "response" in _ &&
          _?.response?.status === 401,
        _ = _ ? "Unauthorized" : null;
      (_ = this.CreateFailedMsgProtobuf(_, 3, _)),
        _ &&
          !this.m_refreshAccessTokenPromise &&
          this.m_bJWTToken &&
          _.bSendAuth &&
          this.m_fnRequestNewAccessToken &&
          ((this.m_refreshAccessTokenPromise =
            this.m_fnRequestNewAccessToken()),
          (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
          (this.m_refreshAccessTokenPromise = void 0));
    }
    return _;
  }
  SendNotification(_, _, _, _) {
    return this.Send(_, _, _, _), !0;
  }
  Send(_, _, _, _) {
    let _ = this.CreateWebAPIURL(_);
    if (!_) throw "Couldn't find service name " + _;
    let _ = _.SerializeBody(),
      _ = _.fromByteArray(_),
      _ = _?.eWebAPIKeyRequirement,
      _ = _?.ePrivilege == 0 && _ == 1,
      _ = {
        responseType: this.m_bJsonMode ? "json" : "arraybuffer",
        params: {},
        headers: _?.bConstMethod
          ? {}
          : {
              "Content-Type": "multipart/form-data",
            },
      };
    if (
      (!_.bSendAuth &&
        _ != 1 &&
        console.error(
          `Attempting to invoke service ${_} without auth, but auth is required.`,
        ),
      this.m_webApiAccessToken &&
        _.bSendAuth &&
        !_ &&
        ((_.params.access_token = this.m_webApiAccessToken),
        (_.params.spoof_steamid = this.m_strSpoofedSteamID)),
      _?.bConstMethod)
    )
      return (
        (_.params.origin = self.origin),
        this.m_bJsonMode
          ? (_.params.input_json = JSON.stringify(_.Body().toObject()))
          : (_.params.input_protobuf_encoded = _),
        _.default.get(_, _)
      );
    {
      let _ = new FormData();
      return (
        this.m_bJsonMode
          ? _.append("input_json", JSON.stringify(_.Body().toObject()))
          : _.append("input_protobuf_encoded", _),
        _.default.post(_, _, _)
      );
    }
  }
  CreateWebAPIURL(_) {
    let _ = /([^\.]+)\.(.+)#(\d+)/,
      _ = _.match(_);
    return !_ || _.length != 4
      ? null
      : `${this.m_strWebAPIBaseURL}I${_[1]}Service/${_[2]}/v${_[3]}`;
  }
  CreateFailedMsgProtobuf(_, _, _) {
    let _ = _.Init(_);
    return (
      _.Hdr().set_eresult(2),
      _.Hdr().set_transport_error(_),
      _ && _.Hdr().set_error_message(_),
      _
    );
  }
};
_([_], _.prototype, "SendMsgAndAwaitResponse", 1),
  _([_], _.prototype, "SendNotification", 1),
  _([_], _.prototype, "Send", 1);
var _ = _(_());
function _(_) {
  if (_.default.isCancel(_))
    return {
      strErrorMsg: "Action Cancelled:" + _,
      errorCode: 52,
    };
  if (
    typeof _.response < "u" &&
    _.response.data &&
    typeof _.response.data == "object"
  ) {
    if ("msg" in _.response.data)
      return {
        strErrorMsg: _.response.data.msg,
        errorCode: _.response.data.success,
      };
    if ("err_msg" in _.response.data)
      return {
        strErrorMsg: _.response.data.err_msg,
        errorCode: _.response.data.success,
      };
    if ("message" in _.response.data)
      return {
        strErrorMsg: _.response.data.message,
        errorCode: _.response.data.success,
      };
    if ("success" in _.response.data)
      return {
        strErrorMsg: "error code: " + _.response.data.success,
        errorCode: _.response.data.success,
      };
  } else if (typeof _.data == "object") {
    if ("msg" in _.data)
      return {
        strErrorMsg: _.data.msg,
        errorCode: _.data.success,
      };
    if ("err_msg" in _.data)
      return {
        strErrorMsg: _.data.err_msg,
        errorCode: _.data.success,
      };
    if ("message" in _.data)
      return {
        strErrorMsg: _.data.message,
        errorCode: _.data.success,
      };
    if ("success" in _.data)
      return {
        strErrorMsg: "error code: " + _.data.success,
        errorCode: _.data.success,
      };
  } else {
    if (typeof _.success < "u" && typeof _.msg < "u")
      return {
        strErrorMsg: _.msg,
        errorCode: _.success,
      };
    if (typeof _.success < "u" && typeof _.message < "u")
      return {
        strErrorMsg: _.message,
        errorCode: _.success,
      };
    if (typeof _.success < "u" && typeof _.err_msg < "u")
      return {
        strErrorMsg: _.err_msg,
        errorCode: _.success,
      };
    if (typeof _ == "string" && _.length > 1024)
      console.groupCollapsed("GetMsgAndErrorCodeFromResponse cannot parse: "),
        console.warn(_),
        console.groupEnd();
    else {
      if (typeof _ == "object" && _ instanceof _)
        return {
          strErrorMsg: "" + _.GetErrorMessage(),
          errorCode: _.GetEResult(),
        };
      console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", _);
    }
  }
  return typeof _ == "object" && "status" in _
    ? {
        strErrorMsg:
          "Unknown Error: " +
          _ +
          `
Status Code:` +
          _.status,
        errorCode: 2,
      }
    : {
        strErrorMsg: "Unknown Error: " + _,
        errorCode: 2,
      };
}
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              title: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              visibility: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              priority: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              association_type: {
                _: 6,
                _: _.readEnum,
                _: _.writeEnum,
              },
              associated_id: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              associated_name: {
                _: 8,
                _: _.readString,
                _: _.writeString,
              },
              start_date: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              end_date: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              country_allow: {
                _: 11,
                _: _.readString,
                _: _.writeString,
              },
              country_deny: {
                _: 12,
                _: _.readString,
                _: _.writeString,
              },
              ownership_restrictions_overridden: {
                _: 13,
                _: _.readBool,
                _: _.writeBool,
              },
              must_own_appid: {
                _: 14,
                _: _.readUint32,
                _: _.writeUint32,
              },
              must_not_own_appid: {
                _: 15,
                _: _.readUint32,
                _: _.writeUint32,
              },
              must_own_packageid: {
                _: 16,
                _: _.readUint32,
                _: _.writeUint32,
              },
              must_not_own_packageid: {
                _: 17,
                _: _.readUint32,
                _: _.writeUint32,
              },
              must_have_launched_appid: {
                _: 18,
                _: _.readUint32,
                _: _.writeUint32,
              },
              additional_restrictions: {
                _: 19,
                _: _.readString,
                _: _.writeString,
              },
              template_type: {
                _: 20,
                _: _.readString,
                _: _.writeString,
              },
              template_vars: {
                _: 21,
                _: _.readString,
                _: _.writeString,
              },
              flags: {
                _: 22,
                _: _.readUint32,
                _: _.writeUint32,
              },
              creator_name: {
                _: 23,
                _: _.readString,
                _: _.writeString,
              },
              template_vars_json: {
                _: 24,
                _: _.readString,
                _: _.writeString,
              },
              additional_restrictions_json: {
                _: 25,
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
      return "CMarketingMessageProto";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              title: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              associated_item_id: {
                _: 4,
                _: _,
              },
              associated_item: {
                _: 5,
                _: _,
              },
              associated_name: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              template_type: {
                _: 10,
                _: _.readString,
                _: _.writeString,
              },
              template_vars_json: {
                _: 11,
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
      return "CDisplayMarketingMessage";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country || _(_._()),
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
              country: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              anonymous_user: {
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
      return "CMarketingMessages_GetActiveMarketingMessages_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
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
              messages: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              time_next_message_age: {
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
      return "CMarketingMessages_GetActiveMarketingMessages_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.start_past_days || _(_._()),
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
              start_past_days: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              upto_past_days: {
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
      return "CMarketingMessages_GetPastMarketingMessages_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
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
              messages: {
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
      return "CMarketingMessages_GetPastMarketingMessages_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_seen_messages || _(_._()),
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
              include_seen_messages: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              country_code: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              elanguage: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              operating_system: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              client_package_version: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              context: {
                _: 6,
                _: _,
              },
              data_request: {
                _: 7,
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
      return "CMarketingMessages_GetMarketingMessagesForUser_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
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
              messages: {
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
      return "CMarketingMessages_GetMarketingMessagesForUser_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.already_seen || _(_._()),
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
              already_seen: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              message: {
                _: 2,
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
      return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country_code || _(_._()),
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
              country_code: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              elanguage: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              operating_system: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              client_package_version: {
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
      return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.has_pending_messages || _(_._()),
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
              has_pending_messages: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              pending_message_count: {
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
      return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              context: {
                _: 2,
                _: _,
              },
              data_request: {
                _: 3,
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
      return "CMarketingMessages_GetDisplayMarketingMessage_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
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
              message: {
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
      return "CMarketingMessages_GetDisplayMarketingMessage_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              display_index: {
                _: 2,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              template_type: {
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
      return "CMarketingMessages_MarkMessageSeen_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              display_index: {
                _: 2,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              template_type: {
                _: 3,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              click_location: {
                _: 4,
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
      return "CMarketingMessages_MarkMessageClicked_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
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
      return "CMarketingMessages_GetMarketingMessage_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
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
              message: {
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
      return "CMarketingMessages_GetMarketingMessage_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.lookup_type || _(_._()),
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
              lookup_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              gid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              message_type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              gidlist: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readFixed64String,
                pbr: _.readPackedFixed64String,
                _: _.writeRepeatedFixed64String,
              },
              title: {
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
      return "CMarketingMessages_FindMarketingMessages_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
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
              messages: {
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
      return "CMarketingMessages_FindMarketingMessages_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
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
              message: {
                _: 1,
                _: _,
              },
              from_json: {
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
      return "CMarketingMessages_CreateMarketingMessage_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
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
      return "CMarketingMessages_CreateMarketingMessage_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              message: {
                _: 2,
                _: _,
              },
              from_json: {
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
      return "CMarketingMessages_UpdateMarketingMessage_Request";
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
      return "CMarketingMessages_UpdateMarketingMessage_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
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
      return "CMarketingMessages_DeleteMarketingMessage_Request";
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
      return "CMarketingMessages_DeleteMarketingMessage_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
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
      return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_time_hour || _(_._()),
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
              rt_time_hour: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              seen_count: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              template_type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              display_index: {
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
      return "CMarketingMessageHourlyStats";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
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
              stats: {
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
      return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_start_time || _(_._()),
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
              rt_start_time: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rt_end_time: {
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
      return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_time_hour || _(_._()),
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
              rt_time_hour: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              clicked_count: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              display_index: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              template_type: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              click_location: {
                _: 5,
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
      return "CMarketingMessageClickedHourlyStats";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
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
              stats: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              clicked_stats: {
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
      return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
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
      return "CMarketingMessages_GetMarketingMessageClickedStats_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.stats || _(_._()),
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
              stats: {
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
      return "CMarketingMessages_GetMarketingMessageClickedStats_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
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
              partnerid: {
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
      return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
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
              messages: {
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
      return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              partnerid: {
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
      return "CMarketingMessages_PartnerPublishMessage_Request";
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
      return "CMarketingMessages_PartnerPublishMessage_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              partnerid: {
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
      return "CMarketingMessages_GetPartnerMessagePreview_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.message || _(_._()),
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
              message: {
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
      return "CMarketingMessages_GetPartnerMessagePreview_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
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
              appids: {
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
      return "CMarketingMessage_GetMarketingMessagesForApps_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
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
              messages: {
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
      return "CMarketingMessage_GetMarketingMessagesForApps_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
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
              partnerid: {
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
      return "CMarketingMessage_GetMarketingMessagesForPartner_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.messages || _(_._()),
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
              messages: {
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
      return "CMarketingMessage_GetMarketingMessagesForPartner_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetActiveMarketingMessages#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetActiveMarketingMessages = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetPastMarketingMessages#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetPastMarketingMessages = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetMarketingMessagesForUser#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetMarketingMessagesForUser = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.DoesUserHavePendingMarketingMessages = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetDisplayMarketingMessage#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetDisplayMarketingMessage = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetDisplayMarketingMessageForUser#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDisplayMarketingMessageForUser = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetDisplayMarketingMessageAdmin = _;
  function _(_, _) {
    return _.SendNotification("MarketingMessages.MarkMessageSeen#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.MarkMessageSeen = _;
  function _(_, _) {
    return _.SendNotification(
      "MarketingMessages.MarkMessageClicked#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.MarkMessageClicked = _;
  function _(_, _) {
    return _.SendMsg("MarketingMessages.GetMarketingMessage#1", _(_, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetMarketingMessage = _;
  function _(_, _) {
    return _.SendMsg("MarketingMessages.CreateMarketingMessage#1", _(_, _), _, {
      ePrivilege: 4,
    });
  }
  _.CreateMarketingMessage = _;
  function _(_, _) {
    return _.SendMsg("MarketingMessages.UpdateMarketingMessage#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.UpdateMarketingMessage = _;
  function _(_, _) {
    return _.SendMsg("MarketingMessages.DeleteMarketingMessage#1", _(_, _), _, {
      ePrivilege: 4,
    });
  }
  _.DeleteMarketingMessage = _;
  function _(_, _) {
    return _.SendMsg("MarketingMessages.FindMarketingMessages#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.FindMarketingMessages = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetMarketingMessageViewerStats#1",
      _(_, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessageViewerStats = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
      _(_, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesViewerRangeStats = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetMarketingMessageClickedStats#1",
      _(_, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessageClickedStats = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetPartnerReadyToPublishMessages#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerReadyToPublishMessages = _;
  function _(_, _) {
    return _.SendMsg("MarketingMessages.PublishPartnerMessage#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.PublishPartnerMessage = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetPartnerMessagePreview#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetPartnerMessagePreview = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetMarketingMessagesForPartner#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.GetMarketingMessagesForPartner = _;
  function _(_, _) {
    return _.SendMsg(
      "MarketingMessages.GetMarketingMessagesForApps#1",
      _(_, _),
      _,
      {
        ePrivilege: 4,
      },
    );
  }
  _.GetMarketingMessagesForApps = _;
})((_ ||= {}));
function _(_) {
  switch (_) {
    case 0:
      return "app";
    case 2:
      return "bundle";
    case 1:
      return "package";
    case 3:
      return "mtx";
  }
  return "invalid";
}
var _ = class _ {
  m_eItemType;
  m_unID;
  m_bVisible = !1;
  m_strName;
  m_strStoreURLPath;
  m_unAppID;
  m_eAppType;
  m_rgIncludedAppTypes;
  m_rgIncludedAppIDs;
  m_bIsFree;
  m_bIsFreeTemporary;
  m_bIsComingSoon;
  m_bIsEarlyAccess;
  m_RelatedItems;
  m_ContentDescriptorIDs;
  m_StoreCategories;
  m_ReviewInfo;
  m_BasicInfo;
  m_rgStoreTags = [];
  m_rgStoreTagIDs = [];
  m_Assets;
  m_AssetsWithoutOverrides;
  m_ReleaseInfo;
  m_Platforms;
  m_BestPurchaseOption;
  m_SelfPurchaseOption;
  m_rgPurchaseOptions;
  m_Screenshots;
  m_Trailers;
  m_rgSupportedLanguages;
  m_strStoreURLPathOverride;
  m_freeWeekend;
  m_DataRequested = {
    include_tag_count: 0,
  };
  m_strInternalName;
  m_rgLinks;
  m_userFilterFailure;
  constructor(_, _) {
    (this.m_eItemType = _.item_type()),
      (this.m_unID = _._()),
      (this.m_bVisible = !!_.visible()),
      (this.m_strName = _.name()),
      (this.m_strStoreURLPath = _.store_url_path()),
      (this.m_unAppID = _.appid()),
      (this.m_eAppType = _.type()),
      (this.m_rgIncludedAppTypes = _.included_types()),
      (this.m_rgIncludedAppIDs = _.included_appids()),
      (this.m_bIsFree = !!_.is_free()),
      (this.m_bIsFreeTemporary = !!_.is_free_temporarily()),
      (this.m_bIsComingSoon =
        !!_.is_coming_soon() || !!_.release()?.is_coming_soon()),
      (this.m_bIsEarlyAccess = !!_.is_early_access()),
      (this.m_RelatedItems = _.related_items()?.toObject()),
      (this.m_ContentDescriptorIDs = _.content_descriptorids()),
      (this.m_StoreCategories = _.categories().toObject()),
      (this.m_BestPurchaseOption = _.best_purchase_option()?.toObject()),
      (this.m_strStoreURLPathOverride = _.store_url_path_override()),
      (this.m_freeWeekend = _.free_weekend()?.toObject()),
      (this.m_strInternalName = _.internal_name()),
      (this.m_eItemType == 1 || this.m_eItemType == 2) &&
        (this.m_SelfPurchaseOption = _.self_purchase_option(!1)
          ? _.self_purchase_option().toObject()
          : this.m_BestPurchaseOption),
      this.MergeData(_, _);
  }
  MergeData(_, _) {
    _.include_assets &&
      !this.m_Assets &&
      ((this.m_Assets = new _(_.assets(), _._())),
      (this.m_DataRequested.include_assets = !0)),
      _.include_assets_without_overrides &&
        !this.m_AssetsWithoutOverrides &&
        ((this.m_AssetsWithoutOverrides = new _(
          _.assets_without_overrides(),
          _._(),
        )),
        (this.m_DataRequested.include_assets_without_overrides = !0)),
      _.include_release &&
        !this.m_ReleaseInfo &&
        ((this.m_ReleaseInfo = _.release().toObject()),
        (this.m_DataRequested.include_release = !0)),
      _.include_platforms &&
        !this.m_Platforms &&
        ((this.m_Platforms = _.platforms().toObject()),
        (this.m_DataRequested.include_platforms = !0)),
      _.include_all_purchase_options &&
        !this.m_rgPurchaseOptions &&
        ((this.m_rgPurchaseOptions = _.purchase_options().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_all_purchase_options = !0)),
      _.include_screenshots &&
        !this.m_Screenshots &&
        ((this.m_Screenshots = new _(_.screenshots())),
        (this.m_DataRequested.include_screenshots = !0)),
      _.include_trailers &&
        !this.m_Trailers &&
        ((this.m_Trailers = new _(_.trailers())),
        (this.m_DataRequested.include_trailers = !0)),
      _.include_tag_count &&
        _.include_tag_count > this.m_rgStoreTags.length &&
        this.m_DataRequested.include_tag_count < _.include_tag_count &&
        ((this.m_rgStoreTags = _.tags().map((_) => _.toObject())),
        (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((_) => _.tagid)),
        (this.m_DataRequested.include_tag_count = Math.max(
          _.include_tag_count,
          this.m_rgStoreTags.length || 0,
        ))),
      _.include_reviews &&
        !this.m_ReviewInfo &&
        ((this.m_ReviewInfo = _.reviews().toObject()),
        (this.m_DataRequested.include_reviews = !0)),
      _.include_basic_info &&
        !this.m_BasicInfo &&
        ((this.m_BasicInfo = _.basic_info().toObject()),
        (this.m_DataRequested.include_basic_info = !0)),
      _.include_supported_languages &&
        !this.m_rgSupportedLanguages &&
        ((this.m_rgSupportedLanguages = _.supported_languages().map((_) =>
          _.toObject(),
        )),
        (this.m_DataRequested.include_supported_languages = !0)),
      _.include_links &&
        !this.m_rgLinks &&
        ((this.m_rgLinks = _.links().map((_) => _.toObject())),
        (this.m_DataRequested.include_links = !0)),
      _.apply_user_filters &&
        !this.m_userFilterFailure &&
        ((this.m_userFilterFailure = _.user_filter_failure()?.toObject()),
        (this.m_DataRequested.apply_user_filters = !0));
  }
  static BDataRequestContainsOtherDataRequest(_, _) {
    return !!(
      (!_.include_assets || _.include_assets) &&
      (!_.include_assets_without_overrides ||
        _.include_assets_without_overrides) &&
      (!_.include_release || _.include_release) &&
      (!_.include_platforms || _.include_platforms) &&
      (!_.include_all_purchase_options || _.include_all_purchase_options) &&
      (!_.include_screenshots || _.include_screenshots) &&
      (!_.include_trailers || _.include_trailers) &&
      (!_.include_ratings || _.include_ratings) &&
      (!_.include_tag_count ||
        (_.include_tag_count || 0) >= _.include_tag_count) &&
      (!_.include_reviews || _.include_reviews) &&
      (!_.include_basic_info || _.include_basic_info) &&
      (!_.include_supported_languages || _.include_supported_languages) &&
      (!_.include_links || _.include_links)
    );
  }
  BContainDataRequest(_) {
    return _.BDataRequestContainsOtherDataRequest(this.m_DataRequested, _);
  }
  BCheckDataRequestIncluded(_) {
    (_.WEB_UNIVERSE == "dev" || _.WEB_UNIVERSE == "beta") &&
      _(
        this.BContainDataRequest(_),
        `Requested data without for ${_(this.m_eItemType)} @ ${this.m_unID}`,
        _,
        this.m_DataRequested,
      );
  }
  GetStoreItemType() {
    return this.m_eItemType;
  }
  GetID() {
    return this.m_unID;
  }
  GetUniqueID() {
    return this.m_eItemType + "_" + this.m_unID;
  }
  BIsVisible() {
    return this.m_bVisible;
  }
  GetName() {
    return this.m_strName;
  }
  GetStorePageURL(_ = !1) {
    return _ && this.HasDemoStandaloneStorePage()
      ? _.STORE_BASE_URL + "app/" + this.GetDemoStandaloneStorePageAppIDs()[0]
      : _.STORE_BASE_URL + this.m_strStoreURLPath;
  }
  GetStorePageURLWithOverride() {
    return this.m_strStoreURLPathOverride &&
      this.m_strStoreURLPathOverride.length > 0
      ? this.GetStorePageURLOverride()
      : this.GetStorePageURL();
  }
  GetStorePageURLOverride() {
    return this.m_strStoreURLPathOverride;
  }
  GetCommunityPageURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
      : null;
  }
  GetCommunityDiscussionForumsURL() {
    return this.GetAppID()
      ? _.COMMUNITY_BASE_URL + "app/" + this.GetAppID() + "/discussions/"
      : null;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppType() {
    return this.m_eAppType;
  }
  BIsApplicationOrTool() {
    return this.GetAppType() == 6 || this.GetAppType() == 13;
  }
  k_regexSalePage =
    /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
  BIsSalePage() {
    return this.GetStoreItemType() === 0
      ? this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
      : !1;
  }
  GetSalePageVanityURL() {
    let _ = this.GetStorePageURLWithOverride();
    return (
      this.GetStoreItemType() === 0 &&
        ((_ = this.GetStorePageURLWithOverride().replace(
          this.k_regexSalePage,
          "",
        )),
        _.endsWith("/") && (_ = _.replace("/", ""))),
      _
    );
  }
  GetIncludedAppTypes() {
    return this.m_rgIncludedAppTypes;
  }
  GetIncludedAppIDs() {
    return this.m_rgIncludedAppIDs;
  }
  GetIncludedAppIDsOrSelf() {
    return this.GetStoreItemType() == 0
      ? [this.GetID()]
      : this.GetIncludedAppIDs();
  }
  BIsFree() {
    return this.m_bIsFree;
  }
  BIsFreeTemporary() {
    return this.m_bIsFreeTemporary;
  }
  BIsFreeWeekend() {
    let _ = Date.now() / 1e3;
    return (
      !!this.m_freeWeekend &&
      this.m_freeWeekend.start_time <= _ &&
      _ <= this.m_freeWeekend.end_time
    );
  }
  GetFreeWeekendEnd() {
    return this.m_freeWeekend?.end_time;
  }
  GetFreeWeekendPlayTextOverride() {
    return this.m_freeWeekend?.text;
  }
  BIsEarlyAccess() {
    return this.m_bIsEarlyAccess;
  }
  GetParentAppID() {
    return this.m_RelatedItems?.parent_appid;
  }
  BHasDemo() {
    return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
  }
  GetDemoAppIDs() {
    return this.m_RelatedItems?.demo_appid ?? [];
  }
  HasDemoStandaloneStorePage() {
    return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
  }
  GetDemoStandaloneStorePageAppIDs() {
    return this.m_RelatedItems?.standalone_demo_appid ?? [];
  }
  GetContentDescriptorIDs() {
    return this.m_ContentDescriptorIDs;
  }
  HasContentDescriptorID(_) {
    return this.m_ContentDescriptorIDs?.includes(_);
  }
  GetStoreCategories_SupportedPlayers() {
    return this.m_StoreCategories?.supported_player_categoryids || [];
  }
  GetStoreCategories_Features() {
    return this.m_StoreCategories?.feature_categoryids || [];
  }
  GetStoreCategories_Controller() {
    return this.m_StoreCategories?.controller_categoryids || [];
  }
  BHasStoreCategory(_) {
    return !!(
      this.GetStoreCategories_SupportedPlayers().find((_) => _ === _) ||
      this.GetStoreCategories_Features().find((_) => _ === _) ||
      this.GetStoreCategories_Controller().find((_) => _ === _)
    );
  }
  GetFilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_filtered
    );
  }
  GetUnfilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_unfiltered ||
        this.m_ReviewInfo?.summary_filtered
    );
  }
  GetFilteredReviewSummaryLanguage() {
    return (
      this.BCheckDataRequestIncluded({
        include_reviews: !0,
      }),
      this.m_ReviewInfo?.summary_language_specific
    );
  }
  GetShortDescription() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.short_description ?? ""
    );
  }
  GetDeveloperNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.developers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetFranchiseNames() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.franchises
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? []
    );
  }
  GetPublisherNames() {
    this.BCheckDataRequestIncluded({
      include_basic_info: !0,
    });
    let _ =
      this.m_BasicInfo?.publishers
        ?.map((_) => _.name.trim())
        ?.filter((_) => _?.length > 0) ?? [];
    return _?.length > 0 ? _ : this.GetDeveloperNames();
  }
  GetAllCreatorClanIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo
        ? _([
            ...this.m_BasicInfo.developers,
            ...this.m_BasicInfo.publishers,
            ...this.m_BasicInfo.franchises,
          ])
        : []
    );
  }
  GetAllPublisherCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.publishers) : []
    );
  }
  GetAllDeveloperCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.developers) : []
    );
  }
  GetAllFranchiseCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo ? _(this.m_BasicInfo.franchises) : []
    );
  }
  GetCapsuleHeadline() {
    return (
      this.BCheckDataRequestIncluded({
        include_basic_info: !0,
      }),
      this.m_BasicInfo?.capsule_headline
    );
  }
  GetTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTags
    );
  }
  GetTagIDs() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs
    );
  }
  BHasTags() {
    return (
      this.BCheckDataRequestIncluded({
        include_tag_count: 1,
      }),
      this.m_rgStoreTagIDs?.length > 0
    );
  }
  GetAssets() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets: !0,
      }),
      this.m_Assets
    );
  }
  GetAssetsWithoutOverrides() {
    return (
      this.BCheckDataRequestIncluded({
        include_assets_without_overrides: !0,
      }),
      this.m_AssetsWithoutOverrides
    );
  }
  GetOriginalReleaseDateRTime() {
    this.BCheckDataRequestIncluded({
      include_release: !0,
    });
    let _ = this.m_ReleaseInfo?.original_steam_release_date;
    return _ || (_ = this.GetReleaseDateRTime()), _;
  }
  GetReleaseDateRTime(_ = !1) {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon && !_)
    )
      return 0;
    let _ = this.m_ReleaseInfo?.steam_release_date;
    return _ || (_ = this.m_ReleaseInfo?.original_release_date), _;
  }
  GetFormattedSteamReleaseDate() {
    if (
      (this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.m_ReleaseInfo?.is_coming_soon)
    ) {
      if (this.m_ReleaseInfo?.coming_soon_display) return _(this.m_ReleaseInfo);
      if (this.m_ReleaseInfo?.custom_release_date_message)
        return this.m_ReleaseInfo.custom_release_date_message;
      let _ = this.m_ReleaseInfo?.steam_release_date;
      return _
        ? this.m_ReleaseInfo?.is_abridged_release_date
          ? _(new Date(_ * 1e3))
          : _(_)
        : "";
    }
    let _ = this.GetReleaseDateRTime();
    return _ ? _(_) : "";
  }
  BIsComingSoon() {
    return this.m_bIsComingSoon;
  }
  BIsCustomComingSoonDisplay() {
    return (
      this.BCheckDataRequestIncluded({
        include_release: !0,
      }),
      this.BIsComingSoon()
        ? this.m_ReleaseInfo?.coming_soon_display
          ? ["text_tba", "text_comingsoon"].includes(
              this.m_ReleaseInfo.coming_soon_display,
            )
          : !!this.m_ReleaseInfo?.custom_release_date_message
        : !1
    );
  }
  BLimitedLaunchActive() {
    return this.m_ReleaseInfo?.limited_launch_active;
  }
  BIsPrePurchase() {
    return this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid;
  }
  BIsReleased() {
    return !this.BIsComingSoon();
  }
  GetPlatforms() {
    return (
      this.BCheckDataRequestIncluded({
        include_platforms: !0,
      }),
      this.m_Platforms
    );
  }
  GetBestPurchaseOption() {
    return this.m_BestPurchaseOption;
  }
  GetBestPurchasePriceInCents() {
    if (this.m_BestPurchaseOption?.final_price_in_cents)
      return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
  }
  GetBestPurchasePriceFormatted() {
    return this.m_BestPurchaseOption?.formatted_final_price;
  }
  GetBestPurchaseOriginalPriceInCents() {
    return this.m_BestPurchaseOption?.original_price_in_cents
      ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
      : this.GetBestPurchasePriceInCents();
  }
  GetBestPurchaseOriginalPriceFormatted() {
    return (
      this.m_BestPurchaseOption?.formatted_original_price ??
      this.m_BestPurchaseOption?.formatted_final_price
    );
  }
  GetAllPurchaseOptions() {
    return (
      this.BCheckDataRequestIncluded({
        include_all_purchase_options: !0,
      }),
      this.m_rgPurchaseOptions
    );
  }
  GetSelfPurchaseOption() {
    return this.m_SelfPurchaseOption;
  }
  BHasAgeSafeScreenshots() {
    return this.GetScreenshots(!0).length > 0;
  }
  GetScreenshots(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_screenshots: !0,
      }),
      this.m_Screenshots
        ? _
          ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
          : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
        : []
    );
  }
  BIsAgeSafeScreenshot(_) {
    return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(_);
  }
  BHasTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers?.BHasTrailers(_)
    );
  }
  BHasHighlightTrailers(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      (this.m_Trailers?.GetHighlightTrailers(_)?.length ?? 0) > 0
    );
  }
  GetAllTrailers() {
    return (
      this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers
    );
  }
  BHasSomeLanguageSupport(_) {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages?.some(
        (_) => _.elanguage == _ && (_.supported || _.subtitles || _.full_audio),
      ) || !1
    );
  }
  GetAllLanguagesWithSomeSupport() {
    return (
      this.BCheckDataRequestIncluded({
        include_supported_languages: !0,
      }),
      this.m_rgSupportedLanguages
        ?.filter((_) => _.supported || _.subtitles || _.full_audio)
        .map((_) => _.elanguage) || []
    );
  }
  GetDataRequest() {
    return this.m_DataRequested;
  }
  GetMicroTrailer(_) {
    if (
      (this.BCheckDataRequestIncluded({
        include_trailers: !0,
      }),
      this.m_Trailers)
    ) {
      let _ = this.m_Trailers
        .GetAllTrailers(_)
        .find((_) => !!_.GetMicroTrailer());
      if (_) return _.GetMicroTrailer();
    }
    return null;
  }
  GetLinks() {
    return (
      this.BCheckDataRequestIncluded({
        include_links: !0,
      }),
      this.m_rgLinks
    );
  }
  GetUserFilterFailure() {
    return (
      this.BCheckDataRequestIncluded({
        apply_user_filters: !0,
      }),
      this.m_userFilterFailure
    );
  }
  ReplaceBestPurchaseOption(_) {
    this.m_BestPurchaseOption = _;
  }
  GetInternalName() {
    return this.m_strInternalName;
  }
};
function _(_) {
  if (!_?.length) return [];
  let _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
  return Array.from(new Set(_));
}
var _ = class {
    m_strMainCapsuleURL;
    m_strSmallCapsuleURL;
    m_strHeaderURL;
    m_strPackageHeaderURL;
    m_strPageBackgroundURL;
    m_strRawPageBackgroundURL;
    m_strHeroCapsuleURL;
    m_strHeroCapsuleURL_2x;
    m_strLibraryCapsuleURL;
    m_strLibraryCapsuleURL_2x;
    m_strLibraryHeroURL;
    m_strLibraryHeroURL_2x;
    m_strCommunityIcon;
    m_strCommunityIcon_Full;
    constructor(_, _) {
      let _ = _.asset_url_format();
      _ &&
        (_.main_capsule() &&
          (this.m_strMainCapsuleURL = this.ConstructAssetURL(
            _,
            _.main_capsule(),
          )),
        _.small_capsule() &&
          (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
            _,
            _.small_capsule(),
          )),
        _.header() &&
          (this.m_strHeaderURL = this.ConstructAssetURL(_, _.header())),
        _.package_header() &&
          (this.m_strPackageHeaderURL = this.ConstructAssetURL(
            _,
            _.package_header(),
          )),
        _.raw_page_background() &&
          (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
            _,
            _.raw_page_background(),
          )),
        _.hero_capsule() &&
          (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
            _,
            _.hero_capsule(),
          )),
        _.hero_capsule_2x() &&
          (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.hero_capsule_2x(),
          )),
        _.library_capsule() &&
          (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
            _,
            _.library_capsule(),
          )),
        _.library_capsule_2x() &&
          (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
            _,
            _.library_capsule_2x(),
          )),
        _.library_hero() &&
          (this.m_strLibraryHeroURL = this.ConstructAssetURL(
            _,
            _.library_hero(),
          )),
        _.library_hero_2x() &&
          (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
            _,
            _.library_hero_2x(),
          ))),
        _.community_icon() &&
          ((this.m_strCommunityIcon = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}.jpg`),
          (this.m_strCommunityIcon_Full = `${_.MEDIA_CDN_COMMUNITY_URL}images/apps/${_}/${_.community_icon()}_full.jpg`)),
        _.page_background_path() &&
          (this.m_strPageBackgroundURL = `${_.STORE_CDN_URL}images/storepagebackground/${_.page_background_path()}`);
    }
    GetMainCapsuleURL() {
      return this.m_strMainCapsuleURL;
    }
    GetSmallCapsuleURL() {
      return this.m_strSmallCapsuleURL;
    }
    GetHeaderURL() {
      return this.m_strHeaderURL;
    }
    GetPackageHeaderURL() {
      return this.m_strPackageHeaderURL;
    }
    GetPageBackgroundURL() {
      return this.m_strPageBackgroundURL;
    }
    GetRawPageBackgroundURL() {
      return this.m_strRawPageBackgroundURL;
    }
    GetHeroCapsuleURL() {
      return this.m_strHeroCapsuleURL;
    }
    GetHeroCapsuleURL_2x() {
      return this.m_strHeroCapsuleURL_2x;
    }
    GetLibraryCapsuleURL() {
      return this.m_strLibraryCapsuleURL;
    }
    GetLibraryCapsuleURL_2x() {
      return this.m_strLibraryCapsuleURL_2x;
    }
    GetLibraryHeroURL() {
      return this.m_strLibraryHeroURL;
    }
    GetLibraryHeroURL_2x() {
      return this.m_strLibraryHeroURL_2x;
    }
    ConstructAssetURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        "/store_item_assets/" +
        _.replace("${FILENAME}", _)
      );
    }
    GetCommunityIconURL() {
      return this.m_strCommunityIcon;
    }
    GetCommunityIconURL_Full() {
      return this.m_strCommunityIcon_Full;
    }
  },
  _ = class {
    m_mapTrailer;
    m_highlightTrailers;
    m_highlightTrailersAllAges;
    m_otherTrailers;
    m_otherTrailersAllAges;
    constructor(_) {
      (this.m_highlightTrailers = _.highlights()?.map((_) => new _(_)) ?? []),
        (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
          (_) => _.BIsAllAges(),
        )),
        (this.m_otherTrailers = _.other_trailers()?.map((_) => new _(_)) ?? []),
        (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((_) =>
          _.BIsAllAges(),
        )),
        (this.m_mapTrailer = new Map(
          [...this.m_highlightTrailers, ...this.m_otherTrailers].map((_) => [
            _.GetTrailerID(),
            _,
          ]),
        ));
    }
    BHasTrailers(_) {
      return _
        ? this.m_highlightTrailersAllAges.length > 0 ||
            this.m_otherTrailersAllAges.length > 0
        : this.m_highlightTrailers.length > 0 ||
            this.m_otherTrailers.length > 0;
    }
    GetHighlightTrailers(_) {
      return _ ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
    }
    GetOtherTrailers(_) {
      return _ ? this.m_otherTrailersAllAges : this.m_otherTrailers;
    }
    GetAllTrailers(_) {
      return [...this.GetHighlightTrailers(_), ...this.GetOtherTrailers(_)];
    }
    GetTrailerByID(_) {
      return this.m_mapTrailer.get(_);
    }
  },
  _ = class {
    m_strTrailerName;
    m_eTrailerCategory;
    m_nBaseID;
    m_MicroTrailer;
    m_rgDashTrailers;
    m_rgHlsTrailer;
    m_strScreenshotMedium;
    m_strScreenshotFull;
    m_bIsAllAges;
    constructor(_) {
      (this.m_strTrailerName = _.trailer_name()),
        (this.m_nBaseID = _.trailer_base_id()),
        (this.m_eTrailerCategory = _.trailer_category());
      let _ = _.trailer_url_format();
      if (
        (_ &&
          (_.microtrailer() &&
            (this.m_MicroTrailer = this.ExtractTrailerFormats(
              _,
              _.microtrailer(),
            )),
          _.screenshot_medium() &&
            (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
              _,
              _.screenshot_medium(),
            )),
          _.screenshot_full() &&
            (this.m_strScreenshotFull = this.ConstructScreenshotURL(
              _,
              _.screenshot_full(),
            ))),
        _.adaptive_trailers())
      ) {
        this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
          _.adaptive_trailers(),
          "dash",
        );
        let _ = this.ExtractAdaptiveTrailers(_.adaptive_trailers(), "hls");
        _.length > 0 && (this.m_rgHlsTrailer = _[0]);
      }
      this.m_bIsAllAges = _.all_ages() ?? !0;
    }
    GetName() {
      return this.m_strTrailerName;
    }
    GetTrailerID() {
      return this.m_nBaseID;
    }
    GetTrailerCategory() {
      return this.m_eTrailerCategory;
    }
    GetTrailersDash() {
      return this.m_rgDashTrailers;
    }
    GetTrailerHls() {
      return this.m_rgHlsTrailer;
    }
    GetMicroTrailer() {
      return this.m_MicroTrailer;
    }
    GetScreenshot() {
      return this.m_strScreenshotFull
        ? this.m_strScreenshotFull
        : this.m_strScreenshotMedium;
    }
    BIsAllAges() {
      return this.m_bIsAllAges;
    }
    ExtractTrailerFormats(_, _) {
      let _ = {};
      return (
        _.forEach((_) => {
          _.type() == "video/mp4"
            ? (_.strMP4URL = this.ConstructAssetURL(_, _.filename()))
            : _.type() == "video/webm" &&
              (_.strWebMURL = this.ConstructAssetURL(_, _.filename()));
        }),
        _
      );
    }
    ExtractAdaptiveTrailers(_, _) {
      let _ = `${_}_`,
        _ = _.filter(
          (_) => _.encoding() && _.cdn_path() && _.encoding().startsWith(_),
        ),
        _ = _.findIndex((_) => _.encoding().endsWith("_av1"));
      return (
        _ > 0 && _.MoveElement(_, _, 0),
        _.map((_) => this.ConstructAssetURL(_.cdn_path(), ""))
      );
    }
    ConstructScreenshotURL(_, _) {
      return (
        _.BASE_URL_SHARED_CDN +
        "/store_item_assets/" +
        _.replace("${FILENAME}", _)
      );
    }
    ConstructAssetURL(_, _) {
      return _.VIDEO_CDN_URL + "/store_trailers/" + _.replace("${FILENAME}", _);
    }
  },
  _ = class {
    m_rgAllScreenshots;
    m_rgOnlyAllAgesScreenshots;
    constructor(_) {
      let _ = _.all_ages_screenshots() || [],
        _ = _.mature_content_screenshots() || [],
        _ = (_) => _.BASE_URL_SHARED_CDN + "/store_item_assets/" + _.filename();
      (this.m_rgOnlyAllAgesScreenshots = _.map(_)),
        (this.m_rgAllScreenshots = [..._, ..._]
          .sort((_, _) => _.ordinal() - _.ordinal())
          .map(_));
    }
    GetAllAgesAndMatureScreenshots() {
      return this.m_rgAllScreenshots;
    }
    GetOnlyAllAgesScreenshots() {
      return this.m_rgOnlyAllAgesScreenshots;
    }
  };
function _(_) {
  if (_)
    switch (_.item_type) {
      case 0:
        return {
          appid: _.appid,
        };
      case 1:
        return {
          packageid: _._,
        };
      case 2:
        return {
          bundleid: _._,
        };
      case 4:
        return {
          tagid: _._,
        };
      case 5:
        return {
          creatorid: _._,
        };
      case 6:
        return {
          hubcategoryid: _._,
        };
      case 3:
      case -1:
        return;
      default:
        _(
          _.item_type,
          `Unknown EStoreItemType ${_.item_type} ${_(_.item_type)} `,
        );
        return;
    }
}
var _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function _(_, _) {
  let _ = ".jpg";
  (!_ || _ === "0000000000000000000000000000000000000000") && (_ = _),
    _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
  let _ = _.AVATAR_BASE_URL;
  return (
    _ ||
      ((_ = _.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (_ += _.substr(0, 2) + "/")),
    (_ += _),
    _ && _ != "small" && (_ += "_" + _),
    (_ += _),
    _
  );
}
var _ = _(_());
var _ = _(_());
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = class _ extends _.Message {
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
              clan_steamid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              relation: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              linkname: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              json: {
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
      return "CDeveloperPageLink";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clan_account_id || _(_._()),
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
              clan_account_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              appid_list: {
                _: 2,
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
      return "CDeveloperPageToApps";
    }
  };
var _ = class _ extends _.Message {
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
              link: {
                _: 2,
                _: _,
              },
              remove: {
                _: 3,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              update_json_only: {
                _: 4,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              skip_clan_permissions: {
                _: 5,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              partner_id: {
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
      return "CStoreCatalog_SetDevPageLink_Request";
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
      return "CStoreCatalog_SetDevPageLink_Response";
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
      return "CStoreCatalog_GetDevPageLinks_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.links || _(_._()),
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
              links: {
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
      return "CStoreCatalog_GetDevPageLinks_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clan_account_ids || _(_._()),
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
              clan_account_ids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              ignore_dlc: {
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
      return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
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
      return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.partnerid || _(_._()),
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
              partnerid: {
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
      return "CStoreCatalog_GetDevPagesForPartner_Request";
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
      return "CStoreCatalog_GetDevPagesForPartner_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clan_accountid || _(_._()),
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
              clan_accountid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              linknames: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
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
      return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("StoreCatalog.SetDevPageLink#1", _(_, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.SetDevPageLink = _;
  function _(_, _) {
    return _.SendMsg("StoreCatalog.GetDevPageLinks#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetDevPageLinks = _;
  function _(_, _) {
    return _.SendMsg("StoreCatalog.GetDevPageAllAppsLinked#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetDevPageAllAppsLinked = _;
  function _(_, _) {
    return _.SendMsg("StoreCatalog.GetDevPagesForPartner#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetDevPagesForPartner = _;
})((_ ||= {}));
var _ = _(_(), 1);
var _ = class _ extends _.Message {
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
              clanid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              link_url: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              link_text: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              blurb: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              time_recommended: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              comment_count: {
                _: 7,
                _: _.readInt32,
                _: _.writeInt32,
              },
              upvote_count: {
                _: 8,
                _: _.readInt32,
                _: _.writeInt32,
              },
              accountid_creator: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              recommendation_state: {
                _: 10,
                _: _.readEnum,
                _: _.writeEnum,
              },
              received_compensation: {
                _: 11,
                _: _.readBool,
                _: _.writeBool,
              },
              received_for_free: {
                _: 12,
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
      return "CStoreCuration_RecommendedApp";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.listid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 12, 13, 14], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              listid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              title: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              blurb: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              link: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              list_state: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              sort_order: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_created: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_updated: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              accountid: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              apps: {
                _: 10,
                _: _,
                _: !0,
                _: !0,
              },
              list_type: {
                _: 11,
                _: _.readEnum,
                _: _.writeEnum,
              },
              title_localization: {
                _: 12,
                _: _,
                _: !0,
                _: !0,
              },
              blurb_localization: {
                _: 13,
                _: _,
                _: !0,
                _: !0,
              },
              link_localization: {
                _: 14,
                _: _,
                _: !0,
                _: !0,
              },
              sale_clan_steamid: {
                _: 15,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              sale_clan_event_gid: {
                _: 16,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              list_jsondata: {
                _: 17,
                _: _.readString,
                _: _.writeString,
              },
              clan_account_id: {
                _: 18,
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
      return "CStoreCuration_ListDetails";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recommended_app || _(_._()),
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
              recommended_app: {
                _: 1,
                _: _,
              },
              blurb: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              sort_order: {
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
      return "CStoreCuration_ListDetails_ListItem";
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
              list_state: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              start: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              count: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              return_total_only: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              return_metadata_only: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              max_apps: {
                _: 7,
                _: _.readInt32,
                _: _.writeInt32,
              },
              sale_clan_event_gid: {
                _: 8,
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
      return "CStoreCuration_GetLists_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.list_details || _(_._()),
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
              list_details: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              total: {
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
      return "CStoreCuration_GetLists_Response";
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
              listid: {
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
      return "CStoreCuration_GetListDetails_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.list_details || _(_._()),
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
              list_details: {
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
      return "CStoreCuration_GetListDetails_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("StoreCuration.GetLists#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetLists = _;
  function _(_, _) {
    return _.SendMsg("StoreCuration.GetListDetails#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetListDetails = _;
})((_ ||= {}));
var _ = _(_());
var _ = _(_());
var _ = _(_(), 1);
var _ = class _ extends _.Message {
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
              accept: {
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
      return "CClan_RespondToClanInvite_Request";
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
      return "CClan_RespondToClanInvite_Response";
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
              rtime_oldest_date: {
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
      return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.snippets || _(_._()),
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
              snippets: {
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
      return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gid || _(_._()),
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
              gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              announcement_gid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              hidden: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              published: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              rtime32_start_time: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              event_name: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              event_type: {
                _: 7,
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
      return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
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
              cursor: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              count: {
                _: 3,
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
      return "CClan_GetPartnerEventsByBuildIDRange_Request";
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
              start_build_id: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              end_build_id: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              branch: {
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
      return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.matches || _(_._()),
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
              matches: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              num_total_results: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              next_cursor: {
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
      return "CClan_GetPartnerEventsByBuildIDRange_Response";
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
              build_id: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              branch: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              clan_event_gid: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              clan_account_id: {
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
      return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("Clan.RespondToClanInvite#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RespondToClanInvite = _;
  function _(_, _) {
    return _.SendMsg(
      "Clan.GetDraftAndRecentPartnerEventSnippet#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDraftAndRecentPartnerEventSnippet = _;
  function _(_, _) {
    return _.SendMsg("Clan.GetPartnerEventsByBuildIDRange#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetPartnerEventsByBuildIDRange = _;
})((_ ||= {}));
var _ = class {
  m_clanSteamID;
  m_appidList = new Array();
  m_strName = "";
  m_strAvatarURLFullSize = "";
  m_strTagLineLoc = "";
  m_nFollowers = 0;
  m_strVanity = "";
  m_webLink = void 0;
  m_linkedEvent = void 0;
  m_mapListInfo = new Map();
  m_promise;
  m_bIsLoaded = !1;
  m_bIsHidden = !1;
  m_clanAccountFlags = 0;
  constructor(_) {
    _(this), (this.m_clanSteamID = _);
  }
  Initialize(_) {
    (this.m_strName = _.name || ""),
      (this.m_strAvatarURLFullSize =
        _.avatar_url_full_size ||
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
      (this.m_strTagLineLoc = _.tag_line_localized || ""),
      (this.m_nFollowers = _.followers || 0),
      (this.m_strVanity = _.vanity || void 0),
      (this.m_webLink = _.weblink),
      (this.m_bIsHidden = _.hidden || !1),
      (this.m_clanAccountFlags = _.clan_account_flags ?? 0),
      (this.m_linkedEvent = _.linked_event),
      (this.m_mapListInfo = new Map(Object.entries(_.list_info ?? {}))),
      _.appids && _.appids.forEach((_) => this.m_appidList.push(_)),
      (this.m_bIsLoaded = !0);
  }
  GetCreatorHomeIdentifier() {
    return {
      name: this.m_strName,
      clan_account_id: this.m_clanSteamID.GetAccountID(),
      type: "developer",
      hidden: this.m_bIsHidden,
    };
  }
  BIsPartnerEventEditorEnabled() {
    return !!(this.m_clanAccountFlags & 8);
  }
  BHasClanAccountFlagSet(_) {
    return !!(this.m_clanAccountFlags & _);
  }
  BIsLoaded() {
    return this.m_bIsLoaded;
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  GetClanAccountID() {
    return this.m_clanSteamID.GetAccountID();
  }
  GetAppIDList() {
    return this.m_appidList;
  }
  GetName() {
    return this.m_strName;
  }
  GetAvatarURLFullSize() {
    return this.m_strAvatarURLFullSize;
  }
  GetTagLine() {
    return this.m_strTagLineLoc;
  }
  GetNumFollowers() {
    return this.m_nFollowers;
  }
  BIsHidden() {
    return this.m_bIsHidden;
  }
  GetCreatorHomeURL(_) {
    if (this.m_strVanity) {
      switch (_) {
        case "publisher":
          return _.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/";
        case "franchise":
          return _.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/";
      }
      return _.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
    }
    return (
      _.STORE_BASE_URL + "curator/" + this.m_clanSteamID.GetAccountID() + "/"
    );
  }
  BHasWebLink() {
    return this.m_webLink !== void 0;
  }
  GetWebLink() {
    return this.m_webLink;
  }
  GetVanityString() {
    return this.m_strVanity;
  }
  GetLinkedEventGID() {
    return this.m_linkedEvent;
  }
  GetListInfo() {
    return this.m_mapListInfo;
  }
  AdjustFollower(_) {
    this.m_nFollowers += _;
  }
  async EnablePartnerEventEditorFlag() {
    this.BIsPartnerEventEditorEnabled() ||
      (await this.UpdateGroupFlagsFeature([2, 8], !0));
  }
  async UpdateGroupFlagsFeature(_, _) {
    let _ = _.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
      _ = this.m_clanAccountFlags;
    if (
      (_.forEach((_) => {
        _ ? (_ |= _) : (_ &= ~_);
      }),
      _ == this.m_clanAccountFlags)
    )
      return;
    let _ = new Array();
    _ & 1 && _.push(1),
      _ & 8 && _.push(8),
      _ & 2 && _.push(2),
      _ & 4 && _.push(4),
      _ & 16 && _.push(16),
      _ & 32 && _.push(32),
      _ & 64 && _.push(64);
    let _ = new FormData();
    _.append("sessionid", _.SESSIONID),
      _.append("clan_account_id", this.GetClanAccountID().toString()),
      _.append("accountflags", JSON.stringify(_));
    let _ = await _.default.post(_, _);
    _ &&
      _.status == 200 &&
      _.data.success == 1 &&
      (this.m_clanAccountFlags = _);
  }
};
_([_], _.prototype, "m_appidList", 2),
  _([_], _.prototype, "m_nFollowers", 2),
  _([_], _.prototype, "m_clanAccountFlags", 2);
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let _ = _("creatorhome", "application_config");
      this.ValidateStoreDefault(_) &&
        _.forEach((_) => {
          let _ = Number(_.creator_clan_id),
            _ = _.InitFromClanID(_),
            _ = new _(_);
          _.Initialize(_),
            (_.m_promise = _.GetAsPromise(_)),
            this.m_mapClanToCreatorHome.set(_, _);
        });
      let _ = _("creatorhomeforapp", "application_config");
      this.ValidateStoreDefaultAppList(_) &&
        _.forEach((_) => {
          _.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(_.appid) ||
              this.m_mapAppToCreatorIDList.set(_.appid, new Array()),
            this.m_mapAppToCreatorIDList.get(_.appid).push(_));
        }),
        (this.m_bLoadedFromConfig = !0);
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let _ = _("loyalty_webapi_token", "application_config"),
        _ = new _(_.WEBAPI_BASE_URL, _ || void 0);
      this.m_serviceTransport = _.GetServiceTransport();
    }
    return this.m_serviceTransport;
  }
  static async GetAsPromise(_) {
    return _;
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == "object"
      ? typeof _[0].name == "string" &&
          (typeof _[0].creator_clan_id == "string" ||
            typeof _[0].creator_clan_id == "number")
      : !1;
  }
  ValidateStoreDefaultAppList(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == "object"
      ? typeof _[0].clan_account_id == "number" &&
          _[0].clan_account_id > 0 &&
          typeof _[0].appid == "number" &&
          _[0].appid > 0
      : !1;
  }
  BHasCreatorHomeLoaded(_) {
    return (
      this.m_mapClanToCreatorHome.has(_.GetAccountID()) &&
      this.m_mapClanToCreatorHome.get(_.GetAccountID()).BIsLoaded()
    );
  }
  GetCreatorHome(_) {
    return this.m_mapClanToCreatorHome.get(_.GetAccountID());
  }
  GetCreatorHomeByID(_) {
    return this.m_mapClanToCreatorHome.get(_.clan_account_id);
  }
  async LoadCreatorHome(_, _ = !1, _) {
    if (
      (this.LazyInit(), _ || !this.m_mapClanToCreatorHome.has(_.GetAccountID()))
    ) {
      let _ = new _(_);
      (_.m_promise = this.InternalCreatorHome(_, _)),
        await _.m_promise,
        this.m_mapClanToCreatorHome.set(_.GetAccountID(), _);
    }
    return this.m_mapClanToCreatorHome.get(_.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(_, _) {
    let _ = {
        get_appids: !0,
        _: _.LANGUAGE,
        origin: self.origin,
      },
      _ =
        _.STORE_BASE_URL +
        "curator/" +
        _.GetClanAccountID() +
        "/ajaxgetcreatorhomeinfo",
      _ = await _.default.get(_, {
        params: _,
        cancelToken: _ && _.token,
      });
    return _.Initialize(_.data), _;
  }
  async LoadCreatorHomeListForAppIncludeHiddden(_, _) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(_))) {
      let _ = {
          appid: _,
        },
        _ = _.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
        _ = await _.default.get(_, {
          params: _,
          cancelToken: _ && _.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(_, _.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(_);
  }
  async SearchCreatorHomeStore(_, _, _) {
    let _ = `${_.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      _ = {
        term: _.replace(" ", "+"),
        require_creator: _,
        _: _.COUNTRY,
        _: _.LANGUAGE,
        origin: self.origin,
      },
      _ = new Array(),
      _ = await _.default.get(_, {
        params: _,
        cancelToken: _.token,
      });
    return (
      _.data.curators &&
        _(() => {
          _.data.curators.forEach((_) => {
            if (!this.m_mapClanToCreatorHome.has(_.creator_clan_id)) {
              let _ = _.InitFromClanID(_.creator_clan_id),
                _ = new _(_);
              _.Initialize(_),
                this.m_mapClanToCreatorHome.set(_.creator_clan_id, _);
            }
            _.push(this.m_mapClanToCreatorHome.get(_.creator_clan_id));
          });
        }),
      _
    );
  }
  GetCreatorHomeListForAppIncludeHidden(_) {
    return this.m_mapAppToCreatorIDList.has(_)
      ? this.m_mapAppToCreatorIDList.get(_)
      : [];
  }
};
_([_], _.prototype, "m_mapClanToCreatorHome", 2),
  _([_], _.prototype, "m_mapAppToCreatorIDList", 2),
  _([_], _.prototype, "LazyInit", 1);
var _ = _,
  _ = new _();
window.g_CreatorHomeStore = _;
var _ = class {
  constructor() {
    _(this);
  }
  m_mapListInfo = new Map();
  m_bLoadedFromConfig = !1;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let _ = _("creator_home_list_info", "application_config");
      if (this.ValidateCreatorHomeTitles(_))
        for (let [
          _,
          { title: _, description: _, listtileimage: _ },
        ] of Object.entries(_ ?? {}))
          _ &&
            this.m_mapListInfo.set(_, {
              title: _ ?? "",
              description: _?.length ? _ : void 0,
              imageUrl: _?.length ? _ : void 0,
            });
      this.m_bLoadedFromConfig = !0;
    }
  }
  ValidateCreatorHomeTitles(_) {
    return !(_ == null || typeof _ != "object" || Array.isArray(_));
  }
  GetListTitle(_) {
    return this.LazyInit(), _ ? this.m_mapListInfo.get(_)?.title : void 0;
  }
  GetListSubtitle(_) {
    return this.LazyInit(), _ ? this.m_mapListInfo.get(_)?.description : void 0;
  }
  GetListtileImage(_) {
    return this.LazyInit(), _ ? this.m_mapListInfo.get(_)?.imageUrl : void 0;
  }
};
_([_], _.prototype, "m_mapListInfo", 2), _([_], _.prototype, "LazyInit", 1);
var _ = new _();
window.g_CreatorHomeListInfoStore = _;
var _ = () => (_.EUNIVERSE === 2 ? 2581 : 45267781);
var _ = _(_());
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
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
              appids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              language: {
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
      return "CCommunity_GetApps_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.apps || _(_._()),
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
              apps: {
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
      return "CCommunity_GetApps_Response";
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
                _: _.readInt32,
                _: _.writeInt32,
              },
              language: {
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
      return "CCommunity_GetAppRichPresenceLocalization_Request";
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
                _: _.readInt32,
                _: _.writeInt32,
              },
              token_lists: {
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
      return "CCommunity_GetAppRichPresenceLocalization_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.name || _(_._()),
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
              name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              value: {
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
      return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
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
              language: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              tokens: {
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
      return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
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
              comment_thread_type: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              gidfeature: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              gidfeature2: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              commentthreadid: {
                _: 5,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              start: {
                _: 6,
                _: _.readInt32,
                _: _.writeInt32,
              },
              count: {
                _: 7,
                _: _.readInt32,
                _: _.writeInt32,
              },
              upvoters: {
                _: 8,
                _: _.readInt32,
                _: _.writeInt32,
              },
              include_deleted: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              gidcomment: {
                _: 10,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              time_oldest: {
                _: 11,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_first: {
                _: 12,
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
      return "CCommunity_GetCommentThread_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gidcomment || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              gidcomment: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              steamid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              timestamp: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              text: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              upvotes: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              hidden: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              hidden_by_user: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              deleted: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              ipaddress: {
                _: 9,
                _: _,
              },
              total_hidden: {
                _: 10,
                _: _.readInt32,
                _: _.writeInt32,
              },
              upvoted_by_user: {
                _: 11,
                _: _.readBool,
                _: _.writeBool,
              },
              reactions: {
                _: 12,
                _: _,
                _: !0,
                _: !0,
              },
              gidparentcomment: {
                _: 13,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              delete_reason: {
                _: 14,
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
      return "CCommunity_Comment";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactionid || _(_._()),
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
              reactionid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              count: {
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
      return "CCommunity_Comment_Reaction";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.comments || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              comments: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              deleted_comments: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              steamid: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              commentthreadid: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              start: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              count: {
                _: 6,
                _: _.readInt32,
                _: _.writeInt32,
              },
              total_count: {
                _: 7,
                _: _.readInt32,
                _: _.writeInt32,
              },
              upvotes: {
                _: 8,
                _: _.readInt32,
                _: _.writeInt32,
              },
              upvoters: {
                _: 9,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              user_subscribed: {
                _: 10,
                _: _.readBool,
                _: _.writeBool,
              },
              user_upvoted: {
                _: 11,
                _: _.readBool,
                _: _.writeBool,
              },
              answer_commentid: {
                _: 12,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              answer_actor: {
                _: 13,
                _: _.readUint32,
                _: _.writeUint32,
              },
              answer_actor_rank: {
                _: 14,
                _: _.readInt32,
                _: _.writeInt32,
              },
              can_post: {
                _: 15,
                _: _.readBool,
                _: _.writeBool,
              },
              comment_thread_type: {
                _: 16,
                _: _.readUint32,
                _: _.writeUint32,
              },
              gidfeature: {
                _: 17,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              gidfeature2: {
                _: 18,
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
      return "CCommunity_GetCommentThread_Response";
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
              comment_thread_type: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              gidfeature: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              gidfeature2: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              text: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              gidparentcomment: {
                _: 7,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              suppress_notifications: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              is_report: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              start_hidden: {
                _: 10,
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
      return "CCommunity_PostCommentToThread_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gidcomment || _(_._()),
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
              gidcomment: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              commentthreadid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              count: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              upvotes: {
                _: 4,
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
      return "CCommunity_PostCommentToThread_Response";
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
              comment_thread_type: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              gidfeature: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              gidfeature2: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              gidcomment: {
                _: 5,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              undelete: {
                _: 6,
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
      return "CCommunity_DeleteCommentFromThread_Request";
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
      return "CCommunity_DeleteCommentFromThread_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.commentthreadtype || _(_._()),
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
              commentthreadtype: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              steamid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidfeature: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidfeature2: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidcomment: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              rate_up: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              suppress_notifications: {
                _: 7,
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
      return "CCommunity_RateCommentThread_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gidcomment || _(_._()),
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
              gidcomment: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              commentthreadid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              count: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              upvotes: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              has_upvoted: {
                _: 5,
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
      return "CCommunity_RateCommentThread_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.commentthreadtype || _(_._()),
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
              commentthreadtype: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              steamid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidfeature: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidfeature2: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidcomment: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              max_results: {
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
      return "CCommunity_GetCommentThreadRatings_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.commentthreadid || _(_._()),
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
              commentthreadid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidcomment: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              upvotes: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              has_upvoted: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              upvoter_accountids: {
                _: 5,
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
      return "CCommunity_GetCommentThreadRatings_Response";
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
              steamids_verifymembership: {
                _: 2,
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
      return "CCommunity_VerifyClanMembership_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamids_nonmembers || _(_._()),
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
              steamids_nonmembers: {
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
      return "CCommunity_VerifyClanMembership_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.announcementid || _(_._()),
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
              announcementid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              vote_up: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              clan_accountid: {
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
      return "CCommunity_RateClanAnnouncement_Request";
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
      return "CCommunity_RateClanAnnouncement_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.announcementid || _(_._()),
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
              announcementid: {
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
      return "CCommunity_GetClanAnnouncementVoteForUser_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.voted_up || _(_._()),
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
              voted_up: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              voted_down: {
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
      return "CCommunity_GetClanAnnouncementVoteForUser_Response";
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
      return "CCommunity_GetClanMetadata_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_ogg || _(_._()),
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
              is_ogg: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              name: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              profile_url: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              appid: {
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
      return "CCommunity_GetClanMetadata_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.loc_group_id || _(_._()),
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
              loc_group_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              image_hash: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              thumbnail_hash: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              file_type: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              group: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              width: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              height: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              extensions: {
                _: 8,
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
      return "CCommunity_ClanLocGroupImage";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              group: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              language: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              loc_group_ids: {
                _: 4,
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
      return "CCommunity_GetClanLocGroupImages_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.images || _(_._()),
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
              images: {
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
      return "CCommunity_GetClanLocGroupImages_Response";
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
              filter_user_uploaded_only: {
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
      return "CCommunity_GetAvatarHistory_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.avatars || _(_._()),
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
              avatars: {
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
      return "CCommunity_GetAvatarHistory_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.avatar_sha1 || _(_._()),
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
              avatar_sha1: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              user_uploaded: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
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
      return "CCommunity_GetAvatarHistory_Response_AvatarData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.priority || _(_._()),
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
              priority: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              appid: {
                _: 2,
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
      return "CAppPriority";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.count || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 8], null);
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
              offset: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime32_start_time: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime32_end_time: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              language_preference: {
                _: 5,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              filter_event_type: {
                _: 6,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              filter_to_appid: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              app_list: {
                _: 8,
                _: _,
                _: !0,
                _: !0,
              },
              count_after: {
                _: 9,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              count_before: {
                _: 10,
                _: 0,
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
      return "CCommunity_GetUserPartnerEventNews_Request";
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
      return "CCommunity_GetUserPartnerEventNews_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_steam_blog || _(_._()),
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
              include_steam_blog: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              filter_to_played_within_days: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              include_only_game_updates: {
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
      return "CCommunity_GetBestEventsForUser_Request";
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
              appid: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              possible_takeover: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              rtime32_last_modified: {
                _: 6,
                _: 0,
                _: _.readUint32,
                _: _.writeUint32,
              },
              user_app_priority: {
                _: 7,
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
      return "CCommunity_PartnerEventResult";
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
      return "CCommunity_GetBestEventsForUser_Response";
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
      return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
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
      return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
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
              user_app_priority: {
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
      return "CCommunity_PartnerEventsAppPriority";
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
      return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.priorities || _(_._()),
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
              priorities: {
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
      return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
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
      return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
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
      return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
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
      return "CCommunity_PartnerEventsShowMoreForApp_Request";
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
      return "CCommunity_PartnerEventsShowMoreForApp_Response";
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
      return "CCommunity_PartnerEventsShowLessForApp_Request";
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
      return "CCommunity_PartnerEventsShowLessForApp_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.markings || _(_._()),
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
              markings: {
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
      return "CCommunity_MarkPartnerEventsForUser_Request";
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
              display_location: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              mark_shown: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              mark_read: {
                _: 5,
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
      return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
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
      return "CCommunity_MarkPartnerEventsForUser_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.event_gids || _(_._()),
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
              event_gids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readFixed64String,
                pbr: _.readPackedFixed64String,
                _: _.writeRepeatedFixed64String,
              },
              include_read_events_only: {
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
      return "CCommunity_GetUserPartnerEventViewStatus_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.events || _(_._()),
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
              events: {
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
      return "CCommunity_GetUserPartnerEventViewStatus_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.event_gid || _(_._()),
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
              event_gid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              last_shown_time: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              last_read_time: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              clan_account_id: {
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
      return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gidfeature || _(_._()),
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
              gidfeature: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidfeature2: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gidcomment: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              steamid: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              commentthreadtype: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              hide: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              report_reason: {
                _: 7,
                _: _.readEnum,
                _: _.writeEnum,
              },
              report_text: {
                _: 8,
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
      return "CCommunity_HideAndReportComment_Request";
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
      return "CCommunity_HideAndReportComment_Response";
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
              itemid: {
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
      return "CCommunity_GetClanEventCrowdInMetadata_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.crowdin_project_id || _(_._()),
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
              crowdin_project_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              crowdin_file_id: {
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
      return "CCommunity_GetClanEventCrowdInMetadata_Response";
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
      return "CCommunity_GetClanCrowdInMetadata_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.crowdin_project_id || _(_._()),
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
              crowdin_project_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              crowdin_directory_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              push_by_default: {
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
      return "CCommunity_GetClanCrowdInMetadata_Response";
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
              itemid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              language: {
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
      return "CCommunity_FetchTranslationFromCrowdIn_Request";
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
      return "CCommunity_FetchTranslationFromCrowdIn_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.review_labels || _(_._()),
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
              review_labels: {
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
      return "CCommunity_SetRecommendationBotReviewStatus_Request";
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
              recommendationid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              is_bot_review: {
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
      return "CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel";
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
      return "CCommunity_SetRecommendationBotReviewStatus_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("Community.GetApps#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetApps = _;
  function _(_, _) {
    return _.SendMsg("Community.GetAppRichPresenceLocalization#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAppRichPresenceLocalization = _;
  function _(_, _) {
    return _.SendMsg("Community.GetCommentThread#1", _(_, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetCommentThread = _;
  function _(_, _) {
    return _.SendMsg("Community.PostCommentToThread#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.PostCommentToThread = _;
  function _(_, _) {
    return _.SendMsg("Community.DeleteCommentFromThread#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.DeleteCommentFromThread = _;
  function _(_, _) {
    return _.SendMsg("Community.RateCommentThread#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.RateCommentThread = _;
  function _(_, _) {
    return _.SendMsg("Community.GetCommentThreadRatings#1", _(_, _), _, {
      ePrivilege: 2,
    });
  }
  _.GetCommentThreadRatings = _;
  function _(_, _) {
    return _.SendMsg("Community.VerifyClanMembership#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.VerifyClanMembership = _;
  function _(_, _) {
    return _.SendMsg("Community.RateClanAnnouncement#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.RateClanAnnouncement = _;
  function _(_, _) {
    return _.SendMsg("Community.GetClanAnnouncementVoteForUser#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetClanAnnouncementVoteForUser = _;
  function _(_, _) {
    return _.SendMsg("Community.GetClanMetadata#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetClanMetadata = _;
  function _(_, _) {
    return _.SendMsg("Community.GetClanLocGroupImages#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  _.GetClanLocGroupImages = _;
  function _(_, _) {
    return _.SendMsg("Community.GetAvatarHistory#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAvatarHistory = _;
  function _(_, _) {
    return _.SendMsg("Community.GetClanEventCrowdInMetadata#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetClanEventCrowdInMetadata = _;
  function _(_, _) {
    return _.SendMsg("Community.GetClanCrowdInMetadata#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetClanCrowdInMetadata = _;
  function _(_, _) {
    return _.SendMsg("Community.FetchTranslationFromCrowdIn#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.FetchTranslationFromCrowdIn = _;
  function _(_, _) {
    return _.SendMsg("Community.HideAndReportComment#1", _(_, _), _, {
      ePrivilege: 3,
    });
  }
  _.HideAndReportComment = _;
  function _(_, _) {
    return _.SendMsg("Community.GetUserPartnerEventNews#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetUserPartnerEventNews = _;
  function _(_, _) {
    return _.SendMsg("Community.GetBestEventsForUser#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetBestEventsForUser = _;
  function _(_, _) {
    return _.SendMsg("Community.MarkPartnerEventsForUser#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.MarkPartnerEventsForUser = _;
  function _(_, _) {
    return _.SendMsg("Community.GetUserPartnerEventViewStatus#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetUserPartnerEventViewStatus = _;
  function _(_, _) {
    return _.SendMsg("Community.PartnerEventsShowMoreForApp#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.PartnerEventsShowMoreForApp = _;
  function _(_, _) {
    return _.SendMsg("Community.PartnerEventsShowLessForApp#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.PartnerEventsShowLessForApp = _;
  function _(_, _) {
    return _.SendMsg(
      "Community.ClearUserPartnerEventsAppPriorities#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClearUserPartnerEventsAppPriorities = _;
  function _(_, _) {
    return _.SendMsg(
      "Community.GetUserPartnerEventsAppPriorities#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.GetUserPartnerEventsAppPriorities = _;
  function _(_, _) {
    return _.SendMsg(
      "Community.ClearSinglePartnerEventsAppPriority#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClearSinglePartnerEventsAppPriority = _;
  function _(_, _) {
    return _.SendMsg(
      "Community.SetRecommendationBotReviewStatus#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.SetRecommendationBotReviewStatus = _;
})((_ ||= {}));
var _ = _(_());
var _ = 60,
  _ = 30,
  _ = class {
    m_CMInterface;
    m_setShownEvents = new Set();
    m_setReadEvents = new Set();
    m_rgPendingUpload = [];
    m_schUpload = new _();
    m_bUploading = !1;
    constructor(_) {
      this.m_CMInterface = _;
    }
    MarkEventShown(_, _, _) {
      let _ = this.MakeKey(_, _);
      if (this.m_setShownEvents.has(_)) return !1;
      this.m_setShownEvents.add(_);
      let _ = new _();
      return (
        _.set_event_gid(_),
        _.set_clanid(_),
        _.set_display_location(_),
        _.set_mark_shown(!0),
        this.QueueForUpload(_),
        !0
      );
    }
    MarkEventRead(_, _, _) {
      let _ = this.MakeKey(_, _);
      if (this.m_setReadEvents.has(_)) return !1;
      this.m_setReadEvents.add(_);
      let _ = new _();
      return (
        _.set_event_gid(_),
        _.set_clanid(_),
        _.set_display_location(_),
        _.set_mark_read(!0),
        this.QueueForUpload(_),
        !0
      );
    }
    MakeKey(_, _) {
      return `${_}_${_}`;
    }
    QueueForUpload(_) {
      this.m_rgPendingUpload.push(_), this.ScheduleUpload();
    }
    ScheduleUpload() {
      if (!this.m_bUploading) {
        if (this.m_rgPendingUpload.length >= _) {
          this.UploadPendingData();
          return;
        }
        this.m_schUpload.IsScheduled() ||
          this.m_schUpload.Schedule(_ * 1e3, this.UploadPendingData);
      }
    }
    async Flush() {
      if (!this.m_bUploading) return this.UploadPendingData();
    }
    async UploadPendingData() {
      if (this.m_bUploading) return;
      this.m_schUpload.Cancel();
      let _ = this.m_rgPendingUpload.splice(0, _);
      if (_.length == 0) return;
      let _ = !1;
      if (this.m_CMInterface) {
        let _ = _.Init(_);
        for (let _ of _) _.Body().add_markings(_);
        this.m_bUploading = !0;
        let _ = await _.MarkPartnerEventsForUser(
          this.m_CMInterface.GetServiceTransport(),
          _,
        );
        (this.m_bUploading = !1), (_ = _.GetEResult() == 1);
      } else {
        if (!_.logged_in) return;
        let _ = _.map((_) => _.toObject()),
          _ = _() + "actions/ajaxmarkpartnerevents",
          _ = new FormData();
        _.append("sessionid", _.SESSIONID),
          _.append("request", JSON.stringify(_));
        try {
          _ =
            (
              await _.default.post(_, _, {
                withCredentials: !0,
              })
            ).data.success == 1;
        } catch (_) {
          let _ = _(_);
          console.error(
            "CPartnerEventUserTracking.UploadPendingData error " +
              _.strErrorMsg,
            _,
          );
        }
      }
      if (_) {
        this.m_rgPendingUpload.length > 0 && this.ScheduleUpload();
        return;
      }
      console.log("Saving news event state failed. Will try again soon!"),
        (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(_)),
        this.m_schUpload.Schedule(_ * 1e3, this.UploadPendingData);
    }
  };
_([_], _.prototype, "UploadPendingData", 1);
var _ = _(_());
var _ = class {
  clanid = void 0;
  appid = 0;
  can_edit = !1;
  owns_app = !1;
  follows_app = !1;
  support_user = !1;
  valve_admin = !1;
  limited_user = !1;
  event_ignored = new Array();
  event_followed = new Array();
  event_followed_flags = new Array();
  constructor(_) {
    _(this), (this.clanid = _);
  }
};
_([_], _.prototype, "clanid", 2),
  _([_], _.prototype, "appid", 2),
  _([_], _.prototype, "can_edit", 2),
  _([_], _.prototype, "owns_app", 2),
  _([_], _.prototype, "follows_app", 2),
  _([_], _.prototype, "support_user", 2),
  _([_], _.prototype, "valve_admin", 2),
  _([_], _.prototype, "limited_user", 2),
  _([_], _.prototype, "event_ignored", 2),
  _([_], _.prototype, "event_followed", 2),
  _([_], _.prototype, "event_followed_flags", 2);
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapClanToUserPermissions = new Map();
  m_mapAnnounceGIDToVote = new Map();
  m_setReadEventGIDs = new Set();
  m_tracker = void 0;
  m_cm = void 0;
  static s_EventUserStore;
  m_bIsPresentationMode = _();
  static Get() {
    return (
      _(!!_.s_EventUserStore, "Have not yet initialized global EventUserStore"),
      _.s_EventUserStore
    );
  }
  static IsInitialized() {
    return !!_.s_EventUserStore;
  }
  static async InitGlobal(_) {
    if (!_.s_EventUserStore) {
      let _ = new _();
      await _.Init(_),
        (_.s_EventUserStore = _),
        _.WEB_UNIVERSE == "dev" && (window.g_EventUserStore = _);
    }
  }
  static BIsInited() {
    return !!_.s_EventUserStore;
  }
  async Init(_) {
    (this.m_cm = _), (this.m_tracker = new _(_));
    let _ = _("partnereventpermissions", "application_config");
    this.ValidateStoreDefault(_) &&
      (_(() => {
        _.forEach((_) => {
          let _ = new _(_.clanid),
            _ = {
              result: _,
              promise: _.RemapToPromise(_),
              bLoaded: !0,
            };
          this.CopyFromResponseToTrack(_, _),
            this.m_mapClanToUserPermissions.set(_.clanid, _);
        });
      }),
      (_.WEB_UNIVERSE == "dev" || _.WEB_UNIVERSE == "beta") &&
        console.log(
          "CEventUserStore has loaded",
          this.m_mapClanToUserPermissions.size,
          this.m_mapClanToUserPermissions,
        ));
    let _ = _("uservotes", "application_config");
    _ &&
      _(() => {
        _.forEach((_) => {
          let _ = _.voted_up ? !0 : _.voted_down ? !1 : void 0;
          this.m_mapAnnounceGIDToVote.set(_.clanAnnouncementGID, _);
        });
      });
  }
  GetTracker() {
    return this.m_tracker;
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == "object"
      ? typeof _[0].clanid == "number" && typeof _[0].appid == "number"
      : !1;
  }
  RecordEventShown(_, _) {
    !_ ||
      _.bOldAnnouncement ||
      !_.GID ||
      this.m_tracker.MarkEventShown(_.GID, _.clanSteamID.GetAccountID(), _);
  }
  RecordEventRead(_, _) {
    !_ ||
      _.bOldAnnouncement ||
      !_.GID ||
      this.HasEventBeenRead(_.GID) ||
      (this.SetEventAsRead(_.GID),
      this.m_tracker.MarkEventRead(_.GID, _.clanSteamID.GetAccountID(), _));
  }
  SetEventAsRead(_) {
    this.m_setReadEventGIDs.add(_);
  }
  HasEventBeenRead(_) {
    return this.m_setReadEventGIDs.has(_);
  }
  static async RemapToPromise(_) {
    return _;
  }
  BIsUserLoggedIn() {
    return _.logged_in;
  }
  BIsPartnerEventPermissionsLoaded(_) {
    return (
      this.m_mapClanToUserPermissions.has(_) &&
      this.m_mapClanToUserPermissions.get(_).bLoaded
    );
  }
  GetPartnerEventPermissions(_) {
    if (!_ || !_.BIsValid()) return new _(0);
    let _ = _.GetAccountID();
    return (
      this.m_mapClanToUserPermissions.has(_) ||
        this.LoadSingleAppEventPermissions(_),
      this.m_mapClanToUserPermissions.get(_).result
    );
  }
  BFollowsEvent(_, _) {
    return this.GetPartnerEventPermissions(_).event_followed.indexOf(_) != -1;
  }
  BFollowsEventAndNotifiedBy(_, _, _) {
    let _ = this.GetPartnerEventPermissions(_),
      _ = _.event_followed.indexOf(_);
    return _ !== -1 && (_.event_followed_flags[_] & _) == _;
  }
  BIgnoresEvent(_, _) {
    return this.GetPartnerEventPermissions(_).event_ignored.indexOf(_) != -1;
  }
  async LoadSingleAppEventPermissions(_) {
    let _ = _.GetAccountID(),
      _ = this.m_mapClanToUserPermissions.get(_);
    return (
      _ ||
        ((_ = {
          promise: this.InternalLoadSingleAppEventPermissions(_),
          result: new _(_),
          bLoaded: !1,
        }),
        this.m_mapClanToUserPermissions.set(_, _)),
      _.promise
    );
  }
  CopyFromResponseToTrack(_, _) {
    (_.result.appid = _.appid ?? 0),
      (_.result.can_edit = !!_.can_edit),
      (_.result.clanid = _.appid),
      (_.result.event_followed = _.event_followed ?? []),
      (_.result.event_ignored = _.event_ignored ?? []),
      (_.result.event_followed_flags = _.event_followed_flags ?? []),
      (_.result.follows_app = !!_.follows_app),
      (_.result.owns_app = !!_.owns_app),
      (_.result.limited_user = !!_.limited_user),
      (_.support_user || _.valve_admin) && this.m_bIsPresentationMode
        ? ((_.result.can_edit = !0),
          (_.result.support_user = !1),
          (_.result.valve_admin = !1))
        : ((_.result.support_user = !!_.support_user),
          (_.result.valve_admin = !!_.valve_admin)),
      (_.bLoaded = !0);
  }
  async InternalLoadSingleAppEventPermissions(_) {
    let _ = null,
      _ = _.GetAccountID(),
      _ = !_.logged_in;
    if (!this.m_mapClanToUserPermissions.has(_)) {
      let _ = new _(_.GetAccountID());
      this.m_mapClanToUserPermissions.set(_, {
        result: _,
        promise: _.RemapToPromise(_),
        bLoaded: !1,
      });
    }
    try {
      if (_.logged_in) {
        let _ =
            _.COMMUNITY_BASE_URL +
            "gid/" +
            _.ConvertTo64BitString() +
            "/ajaxgetpartnereventpermissions/",
          _ = {};
        if (
          (_() == "partnerweb"
            ? ((_ =
                _.PARTNER_BASE_URL +
                "partnerevents/ajaxgetpartnereventpermissions"),
              (_ = {
                clanaccountid: _.GetAccountID(),
              }))
            : _() == "store" &&
              ((_ = _.STORE_BASE_URL + "events/ajaxgetpartnereventpermissions"),
              (_ = {
                clanaccountid: _.GetAccountID(),
              })),
          (_ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          })),
          !_ || _.data.success != 1)
        )
          console.error("Partner Events Failed Load:" + _(_?.data).strErrorMsg),
            (_ = !0);
        else {
          let _ = this.m_mapClanToUserPermissions.get(_);
          _ && this.CopyFromResponseToTrack(_, _.data);
        }
      }
    } catch (_) {
      if (
        ((_ = _.response),
        (_ = !0),
        !(
          _ &&
          typeof _.response < "u" &&
          typeof _.response.data < "u" &&
          typeof _.response.data.success < "u" &&
          _.response.data.success == 21
        ))
      ) {
        let _ = _(_);
        console.error(
          "InternalLoadSingleAppEventPermissions account: " +
            _ +
            ": " +
            _.strErrorMsg,
          _,
        );
      }
    } finally {
      _ &&
        _(() => {
          let _ = this.m_mapClanToUserPermissions.get(_);
          (_.result.appid = _?.data.appid ?? 0),
            (_.result.can_edit = !1),
            (_.result.clanid = _ && _.data ? _.data.clanid : 0),
            (_.result.event_followed = new Array()),
            (_.result.event_ignored = new Array()),
            (_.result.event_followed_flags = new Array()),
            (_.result.follows_app = !1),
            (_.result.owns_app = !1),
            (_.result.support_user = !1),
            (_.result.valve_admin = !1),
            (_.result.limited_user = !1),
            (_.bLoaded = !0);
        });
    }
    return this.m_mapClanToUserPermissions.get(_).result;
  }
  async SetFollowOrUnfollowEvent(_, _, _, _, _) {
    let _ = this.GetPartnerEventPermissions(_),
      _ = _.event_followed.indexOf(_),
      _ = 0;
    _ !== -1 && ((_ = _.event_followed_flags[_]), _ ? (_ = _ & ~_) : (_ |= _));
    let _ = _ == 0,
      _ =
        (_() === "store"
          ? _.STORE_BASE_URL + "events"
          : _.COMMUNITY_BASE_URL + "/gid/" + _.ConvertTo64BitString()) +
        (_ ? "/unfolloworunignoreevent" : "/followorignoreevent"),
      _ = new URLSearchParams();
    _.append("sessionid", _.SESSIONID),
      _.append("ignore", "" + _),
      _.append("gid", _),
      _.append("notification_flag", "" + _),
      _.append("clan_accountid", "" + _.GetAccountID());
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
    });
    _(() => {
      let _ = this.m_mapClanToUserPermissions.get(_.GetAccountID()),
        _ = null,
        _ = null,
        _ = null,
        _ = null;
      _
        ? ((_ = _ ? _.result.event_ignored : _.result.event_followed),
          (_ = _ ? null : _.result.event_followed_flags))
        : _
          ? ((_ = _.result.event_followed),
            (_ = _.result.event_followed_flags),
            (_ = _.result.event_ignored))
          : ((_ = _.result.event_ignored),
            (_ = _.result.event_followed),
            (_ = _.result.event_followed_flags));
      let _ = _.indexOf(_);
      if ((_ > -1 && (_.splice(_, 1), _ && _.splice(_, 1)), _)) {
        let _ = _.indexOf(_);
        _ == -1 ? (_.push(_), _ && _.push(_)) : _ && (_[_] = _);
      }
    });
  }
  async Vote(_, _, _) {
    if (!_ || !_.AnnouncementGID) return !1;
    let _ = this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
    if (_ === _) return !0;
    if (
      (this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _),
      _(() => {
        _ === !0 && _.UpdateVoteCount("up", -1),
          _ === !1 && _.UpdateVoteCount("down", -1),
          _ === !0 && _.UpdateVoteCount("up", 1),
          _ === !1 && _.UpdateVoteCount("down", 1);
      }),
      this.m_cm)
    ) {
      let _ = _.Init(_);
      return (
        _.Body().set_announcementid(_.AnnouncementGID),
        _.Body().set_vote_up(!!_),
        _.Body().set_clan_accountid(_.clanSteamID.GetAccountID()),
        (
          await _.RateClanAnnouncement(this.m_cm.GetServiceTransport(), _)
        ).GetEResult() == 1
      );
    } else {
      let _ = _(),
        _ =
          _ == "community" || _ == "steamtv"
            ? _.COMMUNITY_BASE_URL +
              "gid/" +
              _.clanSteamID.ConvertTo64BitString() +
              "/announcements/rate/" +
              _.AnnouncementGID
            : _.STORE_BASE_URL + "updated/ajaxrateupdate/" + _.AnnouncementGID,
        _ = new URLSearchParams();
      _.append("sessionid", _.SESSIONID),
        _.append("voteup", _ ? "1" : "0"),
        _.append("clanid", "" + _.clanSteamID.GetAccountID()),
        _.append("ajax", "1");
      let _ = {
        withCredentials: !0,
        cancelToken: _.token,
      };
      return (await _.default.post(_, _, _)).data.success == 1;
    }
  }
  async LoadMyVote(_, _) {
    if (_?.AnnouncementGID) {
      if (this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID))
        return !!this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID);
      let _;
      if (this.m_cm) {
        let _ = _.Init(_);
        _.Body().set_announcementid(_.AnnouncementGID);
        let _ = await _.GetClanAnnouncementVoteForUser(
          this.m_cm.GetServiceTransport(),
          _,
        );
        _.GetEResult() == 1 &&
          (_ = _.Body().voted_up() ? !0 : _.Body().voted_down() ? !1 : void 0);
      } else {
        let _ = _() == "store",
          _ = _
            ? _.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
            : _.COMMUNITY_BASE_URL +
              "gid/" +
              _.clanSteamID.ConvertTo64BitString() +
              "/announcements/ajaxgetmyvote/" +
              _.AnnouncementGID,
          _ = {
            gid: _ ? _.AnnouncementGID : void 0,
          },
          _ = await _.default.get(_, {
            withCredentials: !0,
            cancelToken: _.token,
            params: _,
          });
        _ = _.data.voted_up ? !0 : _.data.voted_down ? !1 : void 0;
      }
      return this.m_mapAnnounceGIDToVote.set(_.AnnouncementGID, _), _;
    }
  }
  SetVote(_, _) {
    this.m_mapAnnounceGIDToVote.set(_, _);
  }
  BHasMyVote(_) {
    return _.AnnouncementGID
      ? this.m_mapAnnounceGIDToVote.has(_.AnnouncementGID)
      : !1;
  }
  GetPreviouslyLoadedVote(_) {
    return _.AnnouncementGID
      ? this.m_mapAnnounceGIDToVote.get(_.AnnouncementGID)
      : void 0;
  }
  BShowEmailEditorTab(_) {
    if (_.BHasEmailEnabled() || _.clanSteamID.GetAccountID() == _()) return !0;
    let _ = this.GetPartnerEventPermissions(_.clanSteamID);
    return (_.IS_OGG || _.IS_VALVE_GROUP) && _.valve_admin;
  }
};
_([_], _.prototype, "m_mapClanToUserPermissions", 2),
  _([_], _.prototype, "m_mapAnnounceGIDToVote", 2),
  _([_], _.prototype, "m_setReadEventGIDs", 2),
  _([_], _.prototype, "CopyFromResponseToTrack", 1);
var _ = _;
var _ = class {
  constructor() {
    _(this);
  }
  m_mapAppIDToClanInfo = new Map();
  m_mapVanityToClanInfo = new Map();
  m_mapClanAccountIDToClanInfo = new Map();
  m_mapPromisesLoading = new Map();
  m_rgQueuedEventsClanIDs = new Array();
  m_bLoadedFromConfig = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    this.m_bLoadedFromConfig ||
      (_(() => {
        let _ = _("groupvanityinfo", "application_config");
        this.ValidateClanConfig(_) &&
          _.forEach((_) => {
            this.InternalSetupValue(_);
          });
      }),
      (this.m_bLoadedFromConfig = !0));
  }
  AddGroupVanities(_) {
    _(() => {
      this.ValidateClanConfig(_) &&
        _.forEach((_) => {
          this.InternalSetupValue(_);
        });
    });
  }
  ValidateClanConfig(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == "object"
      ? typeof _[0].clanAccountID == "number" &&
          (typeof _[0].appid == "number" || typeof _[0].vanity_url == "string")
      : !1;
  }
  BHasClanInfoLoaded(_) {
    return (
      _(_.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
      _(
        _.BIsClanAccount(),
        "Clan SteamID is not a clan account id when requesting clan info ",
      ),
      this.m_mapClanAccountIDToClanInfo.has(_.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(_) {
    return this.m_mapClanAccountIDToClanInfo.has(_);
  }
  RegisterClanData(_) {
    for (let _ of _) this.InternalSetupValue(_);
  }
  InternalSetupValue(_) {
    let _ = {
      clanAccountID: _.clanAccountID,
      clanSteamID: new _(_.clanSteamIDString),
      appid: _.appid,
      vanity_url: _.vanity_url,
      member_count: _.member_count,
      is_ogg: _.is_ogg,
      is_creator_home: _.is_creator_home,
      is_curator: _.is_curator,
      has_visible_store_page: _.has_visible_store_page,
      has_rss_feed: _.has_rss_feed,
      rss_language: _.rss_language ? _.rss_language : 0,
      avatar_full_url: _.avatar_full_url,
      avatar_medium_url: _.avatar_medium_url,
      group_name: _.group_name,
      creator_page_bg_url: _.creator_page_bg_url,
      curator_title: _.curator_title,
      curator_description: _.curator_description,
      partner_events_enabled: _.partner_events_enabled,
    };
    _.appid != 0 && this.m_mapAppIDToClanInfo.set(_.appid, _),
      _.vanity_url &&
        _.vanity_url.length > 0 &&
        this.m_mapVanityToClanInfo.set(_.vanity_url.toLocaleLowerCase(), _),
      this.m_mapClanAccountIDToClanInfo.set(_.clanAccountID, _);
  }
  GetRequestParam() {
    return {
      origin: self.origin,
    };
  }
  async LoadOGGClanInfoForAppID(_) {
    if (
      (this.LazyInit(),
      typeof _ == "string" && (_ = parseInt(_)),
      _(_ != 0, "LoadOGGClanInfoForAppID called with appid of zero"),
      _ == 0)
    )
      return null;
    if (this.m_mapAppIDToClanInfo.has(_))
      return this.m_mapAppIDToClanInfo.get(_);
    let _ = "appid_" + _;
    return (
      this.m_mapPromisesLoading.has(_) ||
        this.m_mapPromisesLoading.set(
          _,
          this.InternalLoadOGGClanInfoForAppID(_),
        ),
      this.m_mapPromisesLoading.get(_)
    );
  }
  async InternalLoadOGGClanInfoForAppID(_) {
    let _ = _.COMMUNITY_BASE_URL + "ogg/" + _ + "/ajaxgetvanityandclanid/",
      _ = null;
    try {
      _ = (
        await _.default.get(_, {
          params: this.GetRequestParam(),
        })
      ).data;
    } catch {}
    return _
      ? (this.InternalSetupValue(_), this.m_mapAppIDToClanInfo.get(_))
      : null;
  }
  async LoadOGGClanInfoForIdentifier(_) {
    if (
      (this.LazyInit(), this.m_mapVanityToClanInfo.has(_?.toLocaleLowerCase()))
    )
      return this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase());
    let _ = "storevanity_" + _?.toLocaleLowerCase();
    return (
      this.m_mapPromisesLoading.has(_) ||
        this.m_mapPromisesLoading.set(
          _,
          this.InternalLoadOGGClanInfoForIdentifier(_),
        ),
      this.m_mapPromisesLoading.get(_)
    );
  }
  async InternalLoadOGGClanInfoForIdentifier(_) {
    let _ = _.COMMUNITY_BASE_URL + "games/" + _ + "/ajaxgetvanityandclanid/",
      _ = await _.default.get(_, {
        params: this.GetRequestParam(),
      });
    return (
      this.InternalSetupValue(_.data),
      this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase())
    );
  }
  async LoadOGGClanInfoForGroupVanity(_) {
    if (
      (this.LazyInit(), this.m_mapVanityToClanInfo.has(_?.toLocaleLowerCase()))
    )
      return this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase());
    let _ = "community_name_" + _;
    return (
      this.m_mapPromisesLoading.has(_) ||
        this.m_mapPromisesLoading.set(
          _,
          this.InternalLoadOGGClanInfoForGroupVanity(_?.toLocaleLowerCase()),
        ),
      this.m_mapPromisesLoading.get(_)
    );
  }
  async InternalLoadOGGClanInfoForGroupVanity(_) {
    let _ = _.COMMUNITY_BASE_URL + "groups/" + _ + "/ajaxgetvanityandclanid/",
      _ = await _.default.get(_, {
        params: this.GetRequestParam(),
      });
    return (
      this.InternalSetupValue(_.data),
      this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase())
    );
  }
  async LoadClanInfoForClanSteamID(_) {
    this.LazyInit();
    let _ = _.GetAccountID();
    if (this.m_mapClanAccountIDToClanInfo.has(_))
      return this.m_mapClanAccountIDToClanInfo.get(_);
    let _ = "clanaccountid_" + _;
    return (
      this.m_mapPromisesLoading.has(_) ||
        this.m_mapPromisesLoading.set(
          _,
          this.InternalLoadClanInfoForClanSteamID(_),
        ),
      this.m_mapPromisesLoading.get(_)
    );
  }
  async LoadClanInfoForClanAccountID(_) {
    let _ = _.InitFromClanID(_);
    return this.LoadClanInfoForClanSteamID(_);
  }
  async InternalLoadClanInfoForClanSteamID(_) {
    let _ = _.GetAccountID(),
      _ =
        _.COMMUNITY_BASE_URL +
        "gid/" +
        _.ConvertTo64BitString() +
        "/ajaxgetvanityandclanid/",
      _ = await _.default.get(_, {
        params: this.GetRequestParam(),
      });
    return (
      this.InternalSetupValue(_.data), this.m_mapClanAccountIDToClanInfo.get(_)
    );
  }
  GetOGGClanInfo(_) {
    return typeof _ == "string"
      ? this.m_mapVanityToClanInfo.get(_?.toLocaleLowerCase())
      : this.m_mapAppIDToClanInfo.get(_);
  }
  GetClanSteamIDForAppID(_) {
    if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(_)))
      return _.InitFromClanID(this.m_mapAppIDToClanInfo.get(_).clanAccountID);
  }
  GetClanVanityForAppID(_) {
    if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(_)))
      return this.m_mapAppIDToClanInfo.get(_).vanity_url;
  }
  GetClanVanityForClanSteamID(_) {
    if (
      (this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(_.GetAccountID()))
    )
      return this.m_mapClanAccountIDToClanInfo.get(_.GetAccountID()).vanity_url;
  }
  HasLoadedClanAccountID(_) {
    return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(_);
  }
  GetClanMemberCount(_) {
    return this.m_mapAppIDToClanInfo.has(_)
      ? this.m_mapAppIDToClanInfo.get(_).member_count
      : 0;
  }
  GetClanInfoByClanAccountID(_) {
    return (
      this.LazyInit(),
      _(
        !!_,
        "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
      ),
      this.m_mapClanAccountIDToClanInfo.get(_)
    );
  }
  GetCreatorStoreURL(_) {
    let _ = _.GetCreatorHome(_);
    if (_) return _.GetCreatorHomeURL("developer");
    let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
    return (
      _.COMMUNITY_BASE_URL +
      (_.vanity_url
        ? "groups/" + _.vanity_url
        : "gid/" + _.ConvertTo64BitString())
    );
  }
};
_([_], _.prototype, "m_mapAppIDToClanInfo", 2),
  _([_], _.prototype, "m_mapVanityToClanInfo", 2),
  _([_], _.prototype, "m_mapClanAccountIDToClanInfo", 2),
  _([_], _.prototype, "RegisterClanData", 1),
  _([_], _.prototype, "InternalSetupValue", 1);
var _ = new _();
window.g_ClanStore = _;
function _(_) {
  let [_, _] = (0, _.useState)(_ ? _.GetClanInfoByClanAccountID(_) : void 0),
    [_, _] = (0, _.useState)(_ ? !_.BHasClanInfoLoadedByAccountID(_) : !1);
  return (
    (0, _.useEffect)(() => {
      if (!_) _(void 0), _(!1);
      else if (_.BHasClanInfoLoadedByAccountID(_))
        _(_.GetClanInfoByClanAccountID(_)), _(!1);
      else {
        _(!0);
        let _ = _.InitFromClanID(typeof _ == "string" ? Number.parseInt(_) : _);
        _.LoadClanInfoForClanSteamID(_)
          .then((_) => {
            _(_ ?? void 0), _(!1);
          })
          .catch((_) => console.error(`Failed to load clan info ${_}`, _));
      }
    }, [_]),
    [_, _]
  );
}
var _ = 0,
  _ = "061818254b2c99ac49e6626adb128ed1282a392f";
var _ = 120,
  _ = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(_) {
      this.m_unAppID = _;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, _);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(_, _) {
      return _
        ? _.MEDIA_CDN_COMMUNITY_URL +
            "images/apps/" +
            this.appid +
            "/" +
            _ +
            ".jpg"
        : _(_);
    }
    DeserializeFromMessage(_) {
      (this.m_bInitialized = !0),
        (this.m_strName = _.name()),
        (this.m_strIconURL = _.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = _.app_type());
    }
    DeserializeFromAppOverview(_) {
      _.icon_hash() && _.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = _.display_name()),
          (this.m_strIconURL = _.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = _.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(_) {
      try {
        (this.m_strName = _.strName),
          (this.m_strIconURL = _.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
          (this.m_eAppType = _.eAppType),
          (this.m_bInitialized = !0);
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        _(
          this.m_bInitialized,
          "Attempting to serialize an uninitialized AppInfo object for caching!",
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
    }
  };
var _ = class {
  constructor() {
    _(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  m_ErrorReportingStore;
  InstallErrorReportingStore(_) {
    this.m_ErrorReportingStore = _;
  }
  DispatchMsgToHandlers(_, _) {
    let _ = _.GetEMsg();
    if (_ == 146) {
      let _ = _.Hdr().target_job_name();
      if (_) {
        let _ = this.m_mapServiceMethodHandlers.get(_);
        if (_) {
          this.DEBUG_LogMessageDispatch(_, _[0]);
          for (let _ of _)
            try {
              _.invoke(_, _);
            } catch (_) {
              _ instanceof Error && this.m_ErrorReportingStore
                ? this.m_ErrorReportingStore.ReportError(_)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${_}): `,
                    _,
                  );
            }
          return !0;
        }
      }
    } else {
      let _ = this.m_mapCallbacks.get(_);
      if (_) {
        this.DEBUG_LogMessageDispatch(_, _[0]);
        for (let _ of _)
          try {
            _.invoke(_);
          } catch (_) {
            _ instanceof Error && this.m_ErrorReportingStore
              ? this.m_ErrorReportingStore.ReportError(_)
              : console.error(
                  "MessageHandlers failed to dispatch message to handler: ",
                  _,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(_, _) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(_, _, _) {
    let _ = this.m_mapCallbacks.get(_);
    return (
      _ ||
        ((_ = []),
        this.m_mapCallbacks.set(_, _),
        this.m_rgRegisteredEMsgs.push(_)),
      _.push({
        invoke: _,
        msgClass: _,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapCallbacks.get(_);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceMethodHandler(_, _) {
    let _ = (_, _) => {
      let _ = _.InitFromMsg(_.request, _),
        _ = _.Init(_.response, 147),
        _ = _(_, _),
        _ = (_) => {
          _.Hdr().set_eresult(_), _(_);
        };
      _ instanceof Promise
        ? _.then(_).catch(() => {
            _(2);
          })
        : _(_);
    };
    return (
      this.m_mapServiceMethodHandlers.has(_.name)
        ? console.error("Duplicate registration for method " + _.name)
        : (this.m_mapServiceMethodHandlers.set(_.name, [
            {
              invoke: _,
              msgClass: _.request,
            },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceNotificationHandler(_, _) {
    let _ = (_, _) => {
        let _ = _.InitFromMsg(_.request, _);
        _(_);
      },
      _ = this.m_mapServiceMethodHandlers.get(_.name);
    return (
      _ ||
        ((_ = []),
        this.m_mapServiceMethodHandlers.set(_.name, _),
        this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      _.push({
        invoke: _,
        msgClass: _.request,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(_, _) {
    return this.AddCallback(_, void 0, _);
  }
  RegisterEMessageHandler(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(_.InitFromMsg(_, _));
    });
  }
  RegisterEMessageAction(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(() => {
        _(_.InitFromMsg(_, _));
      });
    });
  }
  RegisterServiceNotificationHandler(_, _) {
    return this.AddServiceNotificationHandler(_, _);
  }
  RegisterServiceNotificationHandlerAction(_, _) {
    return this.AddServiceNotificationHandler(_, (_) => {
      let _;
      return (
        _(() => {
          _ = _(_);
        }),
        _
      );
    });
  }
  RegisterServiceMethodHandler(_, _) {
    return this.AddServiceMethodHandler(_, _);
  }
  RegisterServiceMethodHandlerAction(_, _) {
    return this.AddServiceMethodHandler(_, (_, _) => {
      let _;
      return (
        _(() => {
          _ = _(_, _);
        }),
        _
      );
    });
  }
};
_([_], _.prototype, "m_rgRegisteredEMsgs", 2),
  _([_], _.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.auth_key || _(_._()),
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
              auth_key: {
                _: 1,
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
      return "CTransportAuth_Authenticate_Request";
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
      return "CTransportAuth_Authenticate_Response";
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
      return "CTransportAuth_StartShutdown_Notification";
    }
  },
  _;
((_) => {
  _.AuthenticateHandler = {
    name: "TransportAuth.Authenticate#1",
    request: _,
    response: _,
  };
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("TransportAuth.Authenticate#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.Authenticate = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("TransportAuth.Authenticate#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  (_.SendMsgAuthenticate = _),
    (_.NotifyStartShutdownHandler = {
      name: "TransportAuth.NotifyStartShutdown#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyStartShutdownHandler, _)
    );
  }
  _.RegisterForNotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification("TransportAuth.NotifyStartShutdown#1", _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.NotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification("TransportAuth.NotifyStartShutdown#1", _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.SendMsgNotifyStartShutdown = _;
})((_ ||= {}));
var _ = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new _("CWebSocketConnection", () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(_, _) {
    (this.m_sName = _),
      (this.m_fnOnMessageHandler = _.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = _.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        _.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        _.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = _.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = _.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = _.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = _.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs = _.nReconnectAttemptTimeoutMs ?? 1e4);
  }
  get name() {
    return this.m_sName;
  }
  async Connect(_) {
    return (
      (this.m_sURL = _),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(_) {
    return _(_, 1, 5) * 1e3;
  }
  async ConnectWithRetry(_, _, _) {
    this.m_bConnecting = !0;
    let _ = 0;
    do {
      try {
        let _ = await this.ConnectToSocket(_, _);
        if (_.result == 1) return (this.m_bConnecting = !1), _;
        this.Log.Warning(`connect attempt failed: ${_.result} - ${_.message}`);
      } catch (_) {
        this.Log.Warning(`connect attempt failed: exception ${_.name} - ${_}`);
      }
      let _ = this.GetInterAttemptBackoffMs(_);
      this.Log.Info(`connect retry: attempt:${_}/${_} backoff:${_}`),
        await new Promise((_) => setTimeout(_, _)),
        (this.m_socket = null),
        (_ += 1);
    } while (_ < _);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      {
        result: 2,
        message: "not ready, exceeded retry count",
      }
    );
  }
  Disconnect() {
    this.Log.Info("disconnect requested"),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close();
  }
  PrepareForShutdown() {
    this.Log.Info("shutdown pending"), (this.m_bDisconnectRequested = !0);
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    if (
      (this.Log.Info("start reconnect"),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({
        connection: this,
      }),
      (await this.Reconnect()).result != 1)
    ) {
      this.Log.Warning("failed to re-connect to websocket after close"),
        this.m_fnOnReconnectFinishHandler({
          connection: this,
          eResult: 2,
        }),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !0,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    this.Log.Info("reconnect successful"),
      this.m_fnOnReconnectFinishHandler({
        connection: this,
        eResult: 1,
      });
  }
  async ConnectToSocket(_, _) {
    if (this.m_socket != null)
      return this.m_socket.readyState != WebSocket.OPEN
        ? (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          {
            result: 2,
            message: "websocket in an unexpected state",
          })
        : {
            result: 1,
            message: "ready",
          };
    try {
      this.m_socket = new WebSocket(_);
    } catch {
      return (
        this.Log.Warning("failed to initialize websocket connection"),
        {
          result: 35,
          message: "Failed to initialize websocket connection",
        }
      );
    }
    return (
      (this.m_socket.binaryType = "arraybuffer"),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, _))
        ? (this.Log.Info("connection ready"),
          {
            result: 1,
            message: "ready",
          })
        : (this.Log.Warning("failed to reach open state"),
          {
            result: 2,
            message: "failed to reach open state",
          })
    );
  }
  async WaitForSocketOpen(_, _) {
    if (_.readyState != WebSocket.CONNECTING)
      return _.readyState == WebSocket.OPEN;
    let _ = 100,
      _ = _ / _;
    for (; _.readyState == WebSocket.CONNECTING && _ > 0; )
      _--, await new Promise((_) => setTimeout(_, _));
    return _.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(_) {
    this.Log.Warning("websocket error");
  }
  OnSocketOpen(_) {
    this.Log.Info("websocket open");
  }
  OnSocketClose(_) {
    if (this.m_bDisconnectRequested) {
      this.Log.Info("websocket closed"),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning("websocket unexpectedly closed");
    let _ = this.BShouldReconnect();
    this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: _,
    }),
      _ && this.StartReconnect();
  }
  async OnSocketMessage(_) {
    this.m_fnOnMessageHandler(_.data);
  }
  SendSerializedMessage(_) {
    try {
      return this.m_socket.send(_), 1;
    } catch {
      return 2;
    }
  }
};
_([_], _.prototype, "OnSocketError", 1),
  _([_], _.prototype, "OnSocketOpen", 1),
  _([_], _.prototype, "OnSocketClose", 1),
  _([_], _.prototype, "OnSocketMessage", 1);
var _ = "localhost",
  _ = new _("WebUITransport"),
  _ = class _ {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new _();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    static sm_ErrorReportingStore;
    static InstallErrorReportingStore(_) {
      this.sm_ErrorReportingStore = _;
    }
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 64 * 1024 * 1024;
    }
    ReportError(_) {
      _.Warning(_);
      let _ = _.sm_ErrorReportingStore;
      _ &&
        _.ReportError(new Error(_), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!_.IN_CLIENT) return;
      let _ = await SteamClient.WebUITransport.GetTransportInfo();
      (this.m_nMaximumMsgSizeBytes = _.nMaximumMsgSizeBytes),
        this.CreateConnection(1, "steamUI", _.portSteamUI, _.authKeySteamUI),
        this.CreateConnection(
          2,
          "clientdll",
          _.portClientdll,
          _.authKeyClientdll,
        ),
        _().SetDefaultTransport(this),
        _().SetDefaultHandlerRegistry(this.m_messageHandlers),
        _.RegisterForNotifyStartShutdown(this.OnStartShutdown);
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(_) {
      this.m_fnOnStatusEventHandler = _;
    }
    SetReconnectErrorHandler(_) {
      this.m_fnOnReconnectErrorHandler = _;
    }
    CreateConnection(_, _, _, _) {
      let _ = {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        },
        _ = {
          connection: new _(_, _),
          sUrl: `ws://${_}:${_}/transportsocket/`,
          sAuthKey: _,
          eClientExecutionSite: _,
        };
      this.m_mapConnectionDetails.set(_, _);
    }
    SendMsg(_, _, _, _) {
      return new Promise((_, _) => {
        let _ = _.eClientExecutionSite;
        if (_ == null || _ == 0) {
          _.Error(`SendMsg: Invalid client execution site: ${_}`),
            _(`Transport SendMsg: invalid client execution site ${_}`);
          return;
        }
        let _ = this.m_mapConnectionDetails.get(_);
        if (_ == null) {
          _.Error(
            `SendMsg: could not find connection for execution site: ${_}`,
          ),
            _(
              `Transport SendMsg: could not find connection for execution site ${_}`,
            );
          return;
        }
        let _ = _.connection;
        if (!_.BCanSendMessages()) {
          let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
          this.m_mapServiceCallErrorCount.set(_, _ + 1);
          let _ = `SendMsg: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
          _ == 1 && this.ReportError(_),
            _.Warning(_ + ` error count: ${_}`),
            _("Transport SendMsg: socket not ready");
          return;
        }
        let _ = this.m_iMsgSeq++;
        _.SetEMsg(146),
          _.Hdr().set_target_job_name(_),
          _.Hdr().set_jobid_source("" + _);
        let _ = _.Serialize();
        if (_.byteLength >= this.m_nMaximumMsgSizeBytes) {
          _.Error(
            `SendMsg: message exceeds maximum size: ${_.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let _ = _.Init(_);
          _.Hdr().set_eresult(2), _(_);
          return;
        }
        if (_.SendSerializedMessage(_) != 1) {
          _.Error("SendMsg: Failed to send message"),
            _("Transport SendMsg: failed to send message");
          return;
        }
        this.m_mapPendingMethodRequests.set(_, {
          m_iSeq: _,
          m_responseClass: _,
          m_fnCallback: _,
          m_fnError: _,
        });
      });
    }
    SendNotification(_, _, _) {
      let _ = _.eClientExecutionSite;
      if (_ == null || _ == 0)
        return (
          _.Error(`SendNotification: Invalid client execution site: ${_}`), !1
        );
      let _ = this.m_mapConnectionDetails.get(_);
      if (_ == null)
        return (
          _.Error(
            `SendNotification: could not find connection for execution site: ${_}`,
          ),
          !1
        );
      let _ = _.connection;
      if (!_.BCanSendMessages()) {
        let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
        this.m_mapServiceCallErrorCount.set(_, _ + 1);
        let _ = `SendNotification: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
        return (
          _ == 1 && this.ReportError(_), _.Warning(_ + ` error count: ${_}`), !1
        );
      }
      return (
        _.SetEMsg(146),
        _.Hdr().set_target_job_name(_),
        _.SendSerializedMessage(_.Serialize()) == 1
      );
    }
    async ConnectToSite(_) {
      let _ = await _.connection.Connect(_.sUrl);
      return _.result != 1
        ? _
        : (await this.SendAuthMessage(_)).BSuccess()
          ? {
              result: 1,
              message: "connected",
            }
          : {
              result: 2,
              message: "client auth failed",
            };
    }
    async MakeReady() {
      let _ = [];
      for (let [_, _] of this.m_mapConnectionDetails)
        _.push(this.ConnectToSite(_));
      let _ = await Promise.all(_);
      (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
      for (let _ of _) if (_.result != 1) return _;
      return {
        result: 1,
        message: "ready",
      };
    }
    GetConnectionDetails(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        if (_.connection === _) return _;
      return (
        _.Error("GetConnectionDetails: failed to identify connection"), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let _ = !0;
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.BCanSendMessages() || (_ = !1);
      this.m_fnOnStatusEventHandler({
        bConnected: _,
      });
    }
    OnWebsocketReconnectStart(_) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(_) {
      if ((this.DispatchTransportStatusUpdate(), _.eResult != 1)) {
        _.Warning("OnWebsocketReconnect: Failed to reconnect to steam client"),
          this.m_fnOnReconnectErrorHandler?.({});
        return;
      }
      this.FailAllPendingRequests();
      let _ = this.GetConnectionDetails(_.connection);
      _ && this.SendAuthMessage(_);
    }
    OnWebsocketClose(_) {
      _.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(_) {
      let _ = new _(_),
        _ = _.InitHeaderFromPacket(_);
      _.Hdr().jobid_target() && _.Hdr().jobid_target() !== _
        ? this.DispatchMethodResponse(_)
        : this.DispatchNotification(_);
    }
    DispatchMethodResponse(_) {
      let _ = parseInt(_.Hdr().jobid_target()),
        _ = this.m_mapPendingMethodRequests.get(_);
      if (_ == null) {
        _(!1, "Transport Error: no pending callback for request");
        return;
      }
      _(_ == _.m_iSeq, "Transport Error: mistmatched request sequence"),
        this.m_mapPendingMethodRequests.delete(_);
      let _ = _.InitFromMsg(_.m_responseClass, _);
      _.m_fnCallback(_);
    }
    DispatchNotification(_) {
      let _ = (_) => {
        _(!1, "Transport Error: A notification should not generate a response");
      };
      this.m_messageHandlers.DispatchMsgToHandlers(_, _);
    }
    FailAllPendingRequests() {
      for (let [_, _] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${_.m_responseClass.name}`,
        );
        let _ = _.Init(_.m_responseClass);
        _.Hdr().set_eresult(2), _.m_fnCallback(_);
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(_) {
      let _ = _.AuthenticateHandler.name,
        _ = {
          eClientExecutionSite: _.eClientExecutionSite,
        },
        _ = _.Init(_);
      return (
        _.Hdr().set_webui_auth_key(_.sAuthKey),
        await this.SendMsg(_, _, _.AuthenticateHandler.response, _)
      );
    }
    OnStartShutdown(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.PrepareForShutdown();
      return 1;
    }
  };
_([_], _.prototype, "OnWebsocketReconnectStart", 1),
  _([_], _.prototype, "OnWebsocketReconnectFinish", 1),
  _([_], _.prototype, "OnWebsocketClose", 1),
  _([_], _.prototype, "OnWebsocketMessage", 1),
  _([_], _.prototype, "OnStartShutdown", 1);
var _ = _,
  _ = new _();
var _ = _(_());
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.original_hostname || _(_._()),
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
              original_hostname: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              actual_hostname: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              path: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              base_name: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              success: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              status_code: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              address_of_request_url: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              response_time_ms: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes_received: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              num_retries: {
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
      return "CClientMetrics_ClientBootstrap_RequestInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.launcher_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              launcher_type: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              steam_realm: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              beta_name: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              download_completed: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              total_time_ms: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              manifest_requests: {
                _: 7,
                _: _,
                _: !0,
                _: !0,
              },
              package_requests: {
                _: 8,
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
      return "CClientMetrics_ClientBootstrap_Summary";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.class_100 || _(_._()),
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
              class_100: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_200: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_300: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_400: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_500: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              no_response: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_unknown: {
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
      return "CClientMetrics_ContentDownloadResponse_Counts";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.hostname || _(_._()),
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
              hostname: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              source_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              counts: {
                _: 3,
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
      return "CClientMetrics_ContentDownloadResponse_HostCounts";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.hosts || _(_._()),
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
              hosts: {
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
      return "CClientMetrics_ContentDownloadResponse_Hosts";
    }
  };
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.raw_version || _(_._()),
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
              raw_version: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              requested_interface_type: {
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
      return "CClientMetrics_AppInterfaceCreation";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.interface_name || _(_._()),
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
              interface_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              method_name: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              call_count: {
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
      return "CClientMetrics_AppInterfaceMethodCounts";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
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
              game_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              interfaces_created: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              methods_called: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              session_length_seconds: {
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
      return "CClientMetrics_AppInterfaceStats_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.protocol_tested || _(_._()),
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
              protocol_tested: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              connectivity_state: {
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
      return "CClientMetrics_IPv6Connectivity_Result";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cell_id || _(_._()),
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
              cell_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              results: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              private_ip_is_rfc6598: {
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
      return "CClientMetrics_IPv6Connectivity_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.product || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              product: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              version: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              routes: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              components: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              actions: {
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
      return "CClientMetrics_ReportReactUsage_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.route || _(_._()),
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
              route: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              count: {
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
      return "CClientMetrics_ReportReactUsage_Notification_RouteData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.component || _(_._()),
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
              component: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              count: {
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
      return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.action || _(_._()),
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
              action: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              count: {
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
      return "CClientMetrics_ReportReactUsage_Notification_ActionData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.product || _(_._()),
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
              product: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              version: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              errors: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              tags: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
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
      return "CClientMetrics_ReportClientError_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.identifier || _(_._()),
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
              identifier: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              message: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              count: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              context: {
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
      return "CClientMetrics_ReportClientError_Notification_Error";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.type || _(_._()),
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
              type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              num_ops: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              num_bytes: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              busy_time_ms: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              idle_time_ms: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sum_run_time_ms: {
                _: 6,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sum_wait_time_ms: {
                _: 7,
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
      return "CClientMetrics_SteamPipeWorkStats_Operation";
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
              depotid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              work_type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              operations: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              hardware_type: {
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
      return "CClientMetrics_SteamPipeWorkStats_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.summary || _(_._()),
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
              summary: {
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
      return "CClientMetrics_ClientBootstrap_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cell_id || _(_._()),
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
              cell_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              stats: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              throttling_kbps: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              os_type: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              device_type: {
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
      return "CClientMetrics_DownloadRates_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.source_type || _(_._()),
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
              source_type: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              source_id: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              host_name: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              microseconds: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              used_ipv6: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              proxied: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              used_http2: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              cache_hits: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              cache_misses: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              hit_bytes: {
                _: 11,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              miss_bytes: {
                _: 12,
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
      return "CClientMetrics_DownloadRates_Notification_StatsInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.validation_result || _(_._()),
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
              validation_result: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              app_id: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              staged_files: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              user_initiated: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              early_out: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              chunks_scanned: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              chunks_corrupt: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes_scanned: {
                _: 8,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              chunk_bytes_corrupt: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              total_file_size_corrupt: {
                _: 10,
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
      return "CClientMetrics_ContentValidation_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.app_id || _(_._()),
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
              app_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              platform_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              preload: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              blocking_app_launch: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              files_uploaded: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              files_downloaded: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              files_deleted: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes_uploaded: {
                _: 8,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              bytes_downloaded: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_total: {
                _: 10,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_init_caches: {
                _: 11,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_validate_state: {
                _: 12,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_ac_launch: {
                _: 13,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_ac_prep_user_files: {
                _: 14,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_ac_exit: {
                _: 15,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_build_sync_list: {
                _: 16,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_delete_files: {
                _: 17,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_download_files: {
                _: 18,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_upload_files: {
                _: 19,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              hardware_type: {
                _: 20,
                _: _.readUint32,
                _: _.writeUint32,
              },
              files_managed: {
                _: 21,
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
      return "CClientMetrics_CloudAppSyncStats_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cell_id || _(_._()),
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
              cell_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              data: {
                _: 2,
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
      return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.eresult || _(_._()),
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
              eresult: {
                _: 1,
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              share_method: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              seconds: {
                _: 3,
                _: _.readFloat,
                _: _.writeFloat,
              },
              bytes: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gameid: {
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
      return "CClientMetrics_ClipShare_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.original_range_method || _(_._()),
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
              original_range_method: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              start: {
                _: 2,
                _: _,
              },
              end: {
                _: 3,
                _: _,
              },
              seconds: {
                _: 4,
                _: _.readFloat,
                _: _.writeFloat,
              },
              gameid: {
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
      return "CClientMetrics_ClipRange_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.original_range_method || _(_._()),
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
              original_range_method: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              latest_range_method: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              delta_ms: {
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
      return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recording_type || _(_._()),
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
              recording_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              seconds: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
              },
              bytes: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gameid: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              instant_clip: {
                _: 5,
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
      return "CClientMetrics_EndGameRecording_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.frame_rates || _(_._()),
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
              frame_rates: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              system_info: {
                _: 3,
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
      return "CClientMetrics_GamePerformance_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gameid || _(_._()),
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
              gameid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              frame_rate: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              session_seconds: {
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
      return "CClientMetrics_GamePerformance_Notification_FrameRate";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.client_args || _(_._()),
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
              client_args: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              gpu_webview_regkey_disabled: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              suppress_gpu_chrome: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              browser_not_supported: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              hw_accel_video_regkey_disabled: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              mini_mode_enabled: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              fps_counter_enabled: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              library_low_bandwidth_mode_enabled: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              library_low_perf_mode_enabled: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              gr_mode: {
                _: 10,
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
      return "CClientMetrics_ReportClientArgs_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accessibility_desktop_ui_scale || _(_._()),
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
              accessibility_desktop_ui_scale: {
                _: 1,
                _: _.readFloat,
                _: _.writeFloat,
              },
              accessibility_screen_reader_enabled: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              accessibility_high_contrast_mode: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              accessibility_reduce_motion: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              accessibility_color_filter_name: {
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
      return "CClientMetrics_ReportAccessibilitySettings_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.glibc_version_major || _(_._()),
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
              glibc_version_major: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              glibc_version_minor: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              account_type: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              launcher_type: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              game_server_appid: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              process_name: {
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
      return "CClientMetrics_ReportLinuxStats_Notification";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientAppInterfaceStatsReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientAppInterfaceStatsReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientIPv6ConnectivityReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientIPv6ConnectivityReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.SteamPipeWorkStatsReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.SteamPipeWorkStatsReport = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportReactUsage#1", _(_, _), {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.ReportReactUsage = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClientError#1", _(_, _), {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.ReportClientError = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientBootstrapReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientBootstrapReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientDownloadRatesReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientDownloadRatesReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientContentValidationReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientContentValidationReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientCloudAppSyncStats#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientCloudAppSyncStats = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientDownloadResponseCodeCounts#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientDownloadResponseCodeCounts = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClientArgs#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportClientArgs = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportLinuxStats#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportLinuxStats = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ReportAccessibilitySettings#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportAccessibilitySettings = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClipShare#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportClipShare = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClipRange#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportClipRange = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ReportEndGameRecording#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportEndGameRecording = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ReportGamePerformance#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportGamePerformance = _;
})((_ ||= {}));
var _ =
    window.addEventListener ||
    (global && global.addEventListener) ||
    (() => {}),
  _ = [],
  _ = (_, _, _) =>
    _.push({
      error: _,
      cCallsitesToIgnore: _,
      strComponentStack: _,
    }),
  _,
  _ = !0,
  _ = class extends Error {
    constructor(..._) {
      super(..._), (this.name = "Assertion Failed");
    }
  };
if (_) {
  let _ = console.assert;
  console.assert = (_, _, ..._) => {
    if (!_) {
      let _ = _();
      _(new _(_(_, ..._)), 2, _);
    }
    _.apply(console, [_, _, ..._]);
  };
  let _ = console.error;
  (console.error = (_, ..._) => {
    let _ = _();
    _(new Error(_(_, ..._)), 1, _), _.apply(console, [_, ..._]);
  }),
    (console.clogerror = (_, _, ..._) => {
      let _ = _();
      _(new Error(_(_, ..._)), _ + 1, _), _.apply(console, [_, ..._]);
    }),
    _("error", (_) => {
      _(_.error, 0);
    }),
    _("unhandledrejection", (_) => {
      _(_.reason, 0);
    }),
    (_ = window.setTimeout(() => {
      (_ = []), (_ = () => {});
    }, 30 * 1e3));
}
var _ = {
    cCallsitesToIgnore: 0,
    bIncludeMessageInIdentifier: !1,
  },
  _ = [
    "(localhost|127.0.0.1):(?!(80|443))",
    "chrome-extension://",
    "HTMLDivElement.onreset \\(/market",
    "/.millennium/Dist",
    "Refused unauthorized RPC command",
  ];
function _() {
  try {
    let _ = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      _ = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    if (
      _ &&
      typeof _ == "object" &&
      typeof _.ReactDebugCurrentFrame == "object" &&
      typeof _.ReactDebugCurrentFrame.getCurrentStack == "function"
    ) {
      let _ = _.ReactDebugCurrentFrame.getCurrentStack();
      if (typeof _ == "string") return _;
    } else if (
      _ &&
      typeof _ == "object" &&
      typeof _.getCurrentStack == "function"
    ) {
      let _ = _.getCurrentStack();
      if (typeof _ == "string") return _;
    }
  } catch {}
}
var _ = class {
  m_strProduct;
  m_strVersion;
  m_transport = null;
  m_rgErrorQueue = [];
  m_sendTimer = null;
  m_bReportingPaused = !1;
  m_pauseTimer = void 0;
  m_fnGetReportingInterval = _;
  m_fnGetReportTags = () => [];
  m_bEnabled = !0;
  m_bInitialized = !1;
  constructor(_ = !0) {
    _ &&
      (_
        ? (_.forEach(
            ({ error: _, cCallsitesToIgnore: _, strComponentStack: _ }) =>
              this.ReportError(_, {
                cCallsitesToIgnore: _,
                strComponentStack: _,
              }),
          ),
          (_ = (_, _, _) =>
            this.ReportError(_, {
              cCallsitesToIgnore: _,
              strComponentStack: _,
            })))
        : (_ = () => {}),
      (_ = []),
      clearTimeout(_)),
      window.setTimeout(() => {
        this.m_bInitialized ||
          ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
      }, 30 * 1e3);
  }
  Init(_, _, _, _ = {}) {
    (this.m_bInitialized = !0),
      (this.m_strProduct = _),
      (this.m_strVersion = _),
      (this.m_transport = _),
      _.fnGetReportingInterval &&
        (this.m_fnGetReportingInterval = _.fnGetReportingInterval),
      _.fnGetReportTags && (this.m_fnGetReportTags = _.fnGetReportTags),
      this.m_bEnabled ||
        (console.error(
          "Error reporting was initialized after being disabled, possibly dropping errors.",
        ),
        (this.m_bEnabled = !0)),
      this.m_rgErrorQueue.length &&
        (this.SendErrorReports(this.m_rgErrorQueue),
        (this.m_rgErrorQueue = []));
  }
  async ReportError(_, _) {
    if (!_)
      return (
        console.warn(
          "Failed to report error: ReportError() was called without an error to report.",
        ),
        null
      );
    try {
      let _ = {
        ..._,
        ..._,
      };
      if (!this.m_bEnabled || !_) return null;
      let _ = await _(_, _);
      return _
        ? (_.cCallsitesToIgnore && _.message.splice(1, _.cCallsitesToIgnore),
          _.strComponentStack && (_.strComponentStack = _.strComponentStack),
          this.SendErrorReport(_),
          _)
        : null;
    } catch (_) {
      return console.log(`Failed to report error: ${_}`), null;
    }
  }
  PauseReportingForDuration(_) {
    this.PauseReporting(),
      (this.m_pauseTimer = window.setTimeout(() => this.ResumeReporting(), _));
  }
  PauseReporting() {
    (this.m_bReportingPaused = !0), window.clearTimeout(this.m_pauseTimer);
  }
  ResumeReporting() {
    (this.m_bReportingPaused = !1),
      window.clearTimeout(this.m_pauseTimer),
      this.ScheduleSend();
  }
  BIsBlacklisted(_) {
    for (let _ of _.message) {
      let _ = JSON.stringify(_);
      for (let _ of _) {
        let _ = new RegExp(_);
        if (_.match(_))
          return console.warn("Report", _, "matched regex", _), !0;
      }
    }
    return !1;
  }
  SendErrorReport(_) {
    if (!this.BIsBlacklisted(_)) {
      if (!this.m_transport) {
        this.m_rgErrorQueue.push(_);
        return;
      }
      this.QueueReport(_);
    }
  }
  QueueReport(_) {
    this.m_rgErrorQueue.push(_), this.m_bReportingPaused || this.ScheduleSend();
  }
  ScheduleSend() {
    this.m_sendTimer ||
      (this.m_sendTimer = window.setTimeout(() => {
        this.SendErrorReports(this.m_rgErrorQueue),
          (this.m_rgErrorQueue = []),
          (this.m_sendTimer = null);
      }, this.m_fnGetReportingInterval()));
  }
  SendErrorReports(_) {
    if (!_ || !_.length) return;
    let _ = _.Init(_),
      _ = _.reduce(
        (_, _) => (
          _[_.identifier]
            ? _[_.identifier].count++
            : (_[_.identifier] = {
                report: _,
                count: 1,
              }),
          _
        ),
        {},
      ),
      _ = Object.keys(_).map((_) => {
        let { report: _, count: _ } = _[_],
          _ = new _();
        return (
          _.set_count(_),
          _.set_identifier(_.identifier + " " + _.identifierHash),
          _.set_message(JSON.stringify(_.message)),
          _.strComponentStack &&
            _.set_context(
              JSON.stringify({
                componentStack: _.strComponentStack,
              }),
            ),
          _
        );
      });
    _.Body().set_product(this.m_strProduct),
      _.Body().set_version(this.m_strVersion),
      _.Body().set_errors(_);
    for (let _ of this.m_fnGetReportTags()) _.Body().add_tags(_);
    _.ReportClientError(this.m_transport, _);
  }
  get version() {
    return this.m_strVersion;
  }
  get product() {
    return this.m_strProduct;
  }
  get reporting_enabled() {
    return _;
  }
};
function _(_, ..._) {
  return typeof _ == "string" && _.length === 0
    ? _
    : [_, ..._]
        .map((_) => {
          try {
            let _ = String(_);
            return _ == "[object Object]" && (_ = JSON.stringify(_)), _;
          } catch {
            return "[Stringify Error]";
          }
        })
        .join(", ");
}
var _ = /^\s*at .*(\S+:\d+|\(native\))/m,
  _ = /(^|@)\S+:\d+/,
  _ = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/,
  _ = !1;
function _(_, _) {
  try {
    return _.stack && _.stack.match(_)
      ? _(_, _)
      : _.stack && _.stack.match(_)
        ? _(_, _)
        : _.stack && _.stack.match(_)
          ? _(_, _)
          : (_ ||
              (console.warn(
                "Error reporter does not know how to parse generated stack:",
              ),
              console.warn(_.stack),
              (_ = !0)),
            null);
  } catch (_) {
    return console.warn(`Failed to normalize error stack: ${_}`), null;
  }
}
async function _(_, _) {
  let { cCallsitesToIgnore: _, bIncludeMessageInIdentifier: _ } = _,
    { message: _, stack: _ } = _,
    _ =
      _?.split(`
`) ?? [],
    _ = _.filter((_) => !!_.match(_)),
    _ = _(_[_]);
  _ && (_ = `${_} ${_}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*)\((.*):(\d+):(\d+)\)/);
    if (
      ((!_ || _.length != 5) && (_ = _.match(/(.*at )(http.*):(\d+):(\d+)/)),
      !_)
    )
      return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await _(_),
    message: _,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _.lastIndexOf("?");
  if (_ === -1) return _;
  let _ = _.indexOf(":", _);
  return _ === -1 ? _ : _.slice(0, _) + _.slice(_);
}
function _(_) {
  let _ = "https://",
    _ = _.indexOf(_);
  if (_ === -1) return _;
  let _ = _.indexOf("/", _ + _.length);
  return _ === -1 ? _ : _.slice(0, _) + _.slice(_);
}
async function _(_, _) {
  let { cCallsitesToIgnore: _, bIncludeMessageInIdentifier: _ } = _,
    _ =
      _.stack?.split(`
`) ?? [],
    _ = _.filter((_) => !!_.match(_)),
    _ = _(_[_]);
  _ && (_ = `${_} ${_.message}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
    if (!_) return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await _(_),
    message: [_.message, ..._],
  };
}
async function _(_, _) {
  let { bIncludeMessageInIdentifier: _, cCallsitesToIgnore: _ } = _,
    _ =
      _.stack?.split(`
`) ?? [],
    _ = _[_],
    _ = _.split("/"),
    _ = _[_.length - 1];
  _.indexOf("@") > -1 && (_ = _.split("@")[0] + "@" + _),
    _ && (_ = `${_} ${_.message}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
    if (!_) return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await _(_),
    message: [_.message, ..._],
  };
}
var _,
  _ = () => (_ || _(new _()), _),
  _ = (_) => {
    (_ = _),
      _.InstallErrorReportingStore(_),
      _.InstallErrorReportingStore(_),
      _.InstallErrorReportingStore(_),
      _.InstallErrorReportingStore(_);
  };
async function _(_) {
  try {
    return (await _.GenerateSHA(_)).slice(0, 16);
  } catch {
    return "";
  }
}
function _() {
  return 1e3 * 10;
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
