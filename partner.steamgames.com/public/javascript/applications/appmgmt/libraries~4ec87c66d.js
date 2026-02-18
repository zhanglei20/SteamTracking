/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1084],
  {
    22586: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          t.prototype.isBetween = function (e, t, r, o) {
            var i = n(e),
              a = n(t),
              s = "(" === (o = o || "()")[0],
              l = ")" === o[1];
            return (
              ((s ? this.isAfter(i, r) : !this.isBefore(i, r)) &&
                (l ? this.isBefore(a, r) : !this.isAfter(a, r))) ||
              ((s ? this.isBefore(i, r) : !this.isAfter(i, r)) &&
                (l ? this.isAfter(a, r) : !this.isBefore(a, r)))
            );
          };
        };
      })();
    },
    20237: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          };
        };
      })();
    },
    83632: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t) {
          t.prototype.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          };
        };
      })();
    },
    43334: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          var r = t.prototype,
            o = function (e) {
              return e && (e.indexOf ? e : e.s);
            },
            i = function (e, t, n, r, i) {
              var a = e.name ? e : e.$locale(),
                s = o(a[t]),
                l = o(a[n]),
                c =
                  s ||
                  l.map(function (e) {
                    return e.slice(0, r);
                  });
              if (!i) return c;
              var u = a.weekStart;
              return c.map(function (e, t) {
                return c[(t + (u || 0)) % 7];
              });
            },
            a = function () {
              return n.Ls[n.locale()];
            },
            s = function (e, t) {
              return (
                e.formats[t] ||
                (function (e) {
                  return e.replace(
                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                    function (e, t, n) {
                      return t || n.slice(1);
                    },
                  );
                })(e.formats[t.toUpperCase()])
              );
            },
            l = function () {
              var e = this;
              return {
                months: function (t) {
                  return t ? t.format("MMMM") : i(e, "months");
                },
                monthsShort: function (t) {
                  return t ? t.format("MMM") : i(e, "monthsShort", "months", 3);
                },
                firstDayOfWeek: function () {
                  return e.$locale().weekStart || 0;
                },
                weekdays: function (t) {
                  return t ? t.format("dddd") : i(e, "weekdays");
                },
                weekdaysMin: function (t) {
                  return t
                    ? t.format("dd")
                    : i(e, "weekdaysMin", "weekdays", 2);
                },
                weekdaysShort: function (t) {
                  return t
                    ? t.format("ddd")
                    : i(e, "weekdaysShort", "weekdays", 3);
                },
                longDateFormat: function (t) {
                  return s(e.$locale(), t);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal,
              };
            };
          (r.localeData = function () {
            return l.bind(this)();
          }),
            (n.localeData = function () {
              var e = a();
              return {
                firstDayOfWeek: function () {
                  return e.weekStart || 0;
                },
                weekdays: function () {
                  return n.weekdays();
                },
                weekdaysShort: function () {
                  return n.weekdaysShort();
                },
                weekdaysMin: function () {
                  return n.weekdaysMin();
                },
                months: function () {
                  return n.months();
                },
                monthsShort: function () {
                  return n.monthsShort();
                },
                longDateFormat: function (t) {
                  return s(e, t);
                },
                meridiem: e.meridiem,
                ordinal: e.ordinal,
              };
            }),
            (n.months = function () {
              return i(a(), "months");
            }),
            (n.monthsShort = function () {
              return i(a(), "monthsShort", "months", 3);
            }),
            (n.weekdays = function (e) {
              return i(a(), "weekdays", null, null, e);
            }),
            (n.weekdaysShort = function (e) {
              return i(a(), "weekdaysShort", "weekdays", 3, e);
            }),
            (n.weekdaysMin = function (e) {
              return i(a(), "weekdaysMin", "weekdays", 2, e);
            });
        };
      })();
    },
    39920: function (e) {
      e.exports = (function () {
        "use strict";
        var e = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        return function (t, n, r) {
          var o = n.prototype,
            i = o.format;
          (r.en.formats = e),
            (o.format = function (t) {
              void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
              var n = this.$locale().formats,
                r = (function (t, n) {
                  return t.replace(
                    /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                    function (t, r, o) {
                      var i = o && o.toUpperCase();
                      return (
                        r ||
                        n[o] ||
                        e[o] ||
                        n[i].replace(
                          /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                          function (e, t, n) {
                            return t || n.slice(1);
                          },
                        )
                      );
                    },
                  );
                })(t, void 0 === n ? {} : n);
              return i.call(this, r);
            });
        };
      })();
    },
    4042: function (e) {
      e.exports = (function () {
        "use strict";
        return function (e, t, n) {
          var r = function (e, t) {
            if (
              !t ||
              !t.length ||
              (1 === t.length && !t[0]) ||
              (1 === t.length && Array.isArray(t[0]) && !t[0].length)
            )
              return null;
            var n;
            1 === t.length && t[0].length > 0 && (t = t[0]),
              (n = (t = t.filter(function (e) {
                return e;
              }))[0]);
            for (var r = 1; r < t.length; r += 1)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          };
          (n.max = function () {
            var e = [].slice.call(arguments, 0);
            return r("isAfter", e);
          }),
            (n.min = function () {
              var e = [].slice.call(arguments, 0);
              return r("isBefore", e);
            });
        };
      })();
    },
    14240: function (e) {
      e.exports = (function () {
        "use strict";
        var e = "minute",
          t = /[+-]\d\d(?::?\d\d)?/g,
          n = /([+-]|\d\d)/g;
        return function (r, o, i) {
          var a = o.prototype;
          (i.utc = function (e) {
            return new o({ date: e, utc: !0, args: arguments });
          }),
            (a.utc = function (t) {
              var n = i(this.toDate(), { locale: this.$L, utc: !0 });
              return t ? n.add(this.utcOffset(), e) : n;
            }),
            (a.local = function () {
              return i(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var s = a.parse;
          a.parse = function (e) {
            e.utc && (this.$u = !0),
              this.$utils().u(e.$offset) || (this.$offset = e.$offset),
              s.call(this, e);
          };
          var l = a.init;
          a.init = function () {
            if (this.$u) {
              var e = this.$d;
              (this.$y = e.getUTCFullYear()),
                (this.$M = e.getUTCMonth()),
                (this.$D = e.getUTCDate()),
                (this.$W = e.getUTCDay()),
                (this.$H = e.getUTCHours()),
                (this.$m = e.getUTCMinutes()),
                (this.$s = e.getUTCSeconds()),
                (this.$ms = e.getUTCMilliseconds());
            } else l.call(this);
          };
          var c = a.utcOffset;
          a.utcOffset = function (r, o) {
            var i = this.$utils().u;
            if (i(r))
              return this.$u
                ? 0
                : i(this.$offset)
                  ? c.call(this)
                  : this.$offset;
            if (
              "string" == typeof r &&
              ((r = (function (e) {
                void 0 === e && (e = "");
                var r = e.match(t);
                if (!r) return null;
                var o = ("" + r[0]).match(n) || ["-", 0, 0],
                  i = o[0],
                  a = 60 * +o[1] + +o[2];
                return 0 === a ? 0 : "+" === i ? a : -a;
              })(r)),
              null === r)
            )
              return this;
            var a = Math.abs(r) <= 16 ? 60 * r : r;
            if (0 === a) return this.utc(o);
            var s = this.clone();
            if (o) return (s.$offset = a), (s.$u = !1), s;
            var l = this.$u
              ? this.toDate().getTimezoneOffset()
              : -1 * this.utcOffset();
            return (
              ((s = this.local().add(a + l, e)).$offset = a),
              (s.$x.$localOffset = l),
              s
            );
          };
          var u = a.format;
          (a.format = function (e) {
            var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return u.call(this, t);
          }),
            (a.valueOf = function () {
              var e = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * e;
            }),
            (a.isUTC = function () {
              return !!this.$u;
            }),
            (a.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (a.toString = function () {
              return this.toDate().toUTCString();
            });
          var f = a.toDate;
          a.toDate = function (e) {
            return "s" === e && this.$offset
              ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : f.call(this);
          };
          var d = a.diff;
          a.diff = function (e, t, n) {
            if (e && this.$u === e.$u) return d.call(this, e, t, n);
            var r = this.local(),
              o = i(e).local();
            return d.call(r, o, t, n);
          };
        };
      })();
    },
    38921: (e) => {
      "use strict";
      e.exports = function (e, t, n, r, o, i, a, s) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
            );
          else {
            var c = [n, r, o, i, a, s],
              u = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return c[u++];
              }),
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    40323: function (e, t) {
      var n, r, o;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (r = []),
        (n = function e() {
          var t,
            n =
              "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : void 0 !== n
                    ? n
                    : {},
            r = !n.document && !!n.postMessage,
            o = n.IS_PAPA_WORKER || !1,
            i = {},
            a = 0,
            s = {};
          function l(e) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (e) {
                var t = b(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new h(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var r = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < r) {
                  let t = this._config.newline;
                  t ||
                    ((i = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(t).slice(r)].join(t));
                }
                this.isFirstChunk &&
                  E(this._config.beforeFirstChunk) &&
                  void 0 !== (i = this._config.beforeFirstChunk(e)) &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (r = this._partialLine + e);
                var i =
                  ((this._partialLine = ""),
                  this._handle.parse(r, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    this._finished ||
                      ((this._partialLine = r.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    i && i.data && (this._rowCount += i.data.length),
                    (r =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    o)
                  )
                    n.postMessage({
                      results: i,
                      workerId: s.WORKER_ID,
                      finished: r,
                    });
                  else if (E(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(i, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = i = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(i.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(i.errors)),
                      (this._completeResults.meta = i.meta)),
                    this._completed ||
                      !r ||
                      !E(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    r || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                E(this._config.error)
                  ? this._config.error(e)
                  : o &&
                    this._config.error &&
                    n.postMessage({
                      workerId: s.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function c(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize),
              l.call(this, e),
              (this._nextChunk = r
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (e) {
                (this._input = e), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((t = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (t.withCredentials = this._config.withCredentials),
                    r ||
                      ((t.onload = w(this._chunkLoaded, this)),
                      (t.onerror = w(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !r,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      n = this._config.downloadRequestHeaders;
                    for (e in n) t.setRequestHeader(e, n[e]);
                  }
                  var o;
                  this._config.chunkSize &&
                    ((o = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + o,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  r && 0 === t.status && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                4 === t.readyState &&
                  (t.status < 200 || 400 <= t.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || t.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((e) =>
                            null !== (e = e.getResponseHeader("Content-Range"))
                              ? parseInt(e.substring(e.lastIndexOf("/") + 1))
                              : -1)(t)),
                      this.parseChunk(t.responseText)));
              }),
              (this._chunkError = function (e) {
                (e = t.statusText || e), this._sendError(new Error(e));
              });
          }
          function u(e) {
            (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize),
              l.call(this, e);
            var t,
              n,
              r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = w(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = w(this._chunkError, this)))
                  : (t = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var e = this._input,
                  o =
                    (this._config.chunkSize &&
                      ((o = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, o))),
                    t.readAsText(e, this._config.encoding));
                r || this._chunkLoaded({ target: { result: o } });
              }),
              (this._chunkLoaded = function (e) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(e.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(t.error);
              });
          }
          function f(e) {
            var t;
            l.call(this, (e = e || {})),
              (this.stream = function (e) {
                return (t = e), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var e, n;
                if (!this._finished)
                  return (
                    (e = this._config.chunkSize),
                    (t = e
                      ? ((n = t.substring(0, e)), t.substring(e))
                      : ((n = t), "")),
                    (this._finished = !t),
                    this.parseChunk(n)
                  );
              });
          }
          function d(e) {
            l.call(this, (e = e || {}));
            var t = [],
              n = !0,
              r = !1;
            (this.pause = function () {
              l.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                l.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                r && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = w(function (e) {
                try {
                  t.push(
                    "string" == typeof e
                      ? e
                      : e.toString(this._config.encoding),
                  ),
                    n &&
                      ((n = !1),
                      this._checkIsFinished(),
                      this.parseChunk(t.shift()));
                } catch (e) {
                  this._streamError(e);
                }
              }, this)),
              (this._streamError = w(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = w(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = w(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function h(e) {
            var t,
              n,
              r,
              o,
              i = Math.pow(2, 53),
              a = -i,
              l = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              c =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              u = this,
              f = 0,
              d = 0,
              h = !1,
              v = !1,
              g = [],
              y = { data: [], errors: [], meta: {} };
            function w(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function A() {
              if (
                (y &&
                  r &&
                  (S(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      s.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !w(e);
                  })),
                D())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; D() && t < y.data.length; t++)
                      y.data[t].forEach(n);
                    y.data.splice(0, 1);
                  } else y.data.forEach(n);
                function n(t, n) {
                  E(e.transformHeader) && (t = e.transformHeader(t, n)),
                    g.push(t);
                }
              }
              function o(t, n) {
                for (var r = e.header ? {} : [], o = 0; o < t.length; o++) {
                  var s = o,
                    u = t[o];
                  (u = ((t, n) =>
                    ((t) => (
                      e.dynamicTypingFunction &&
                        void 0 === e.dynamicTyping[t] &&
                        (e.dynamicTyping[t] = e.dynamicTypingFunction(t)),
                      !0 === (e.dynamicTyping[t] || e.dynamicTyping)
                    ))(t)
                      ? "true" === n ||
                        "TRUE" === n ||
                        ("false" !== n &&
                          "FALSE" !== n &&
                          (((e) => {
                            if (
                              l.test(e) &&
                              ((e = parseFloat(e)), a < e && e < i)
                            )
                              return 1;
                          })(n)
                            ? parseFloat(n)
                            : c.test(n)
                              ? new Date(n)
                              : "" === n
                                ? null
                                : n))
                      : n)(
                    (s = e.header
                      ? o >= g.length
                        ? "__parsed_extra"
                        : g[o]
                      : s),
                    (u = e.transform ? e.transform(u, s) : u),
                  )),
                    "__parsed_extra" === s
                      ? ((r[s] = r[s] || []), r[s].push(u))
                      : (r[s] = u);
                }
                return (
                  e.header &&
                    (o > g.length
                      ? S(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            g.length +
                            " fields but parsed " +
                            o,
                          d + n,
                        )
                      : o < g.length &&
                        S(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            g.length +
                            " fields but parsed " +
                            o,
                          d + n,
                        )),
                  r
                );
              }
              var u;
              y &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((u = 1),
                !y.data.length || Array.isArray(y.data[0])
                  ? ((y.data = y.data.map(o)), (u = y.data.length))
                  : (y.data = o(y.data, 0)),
                e.header && y.meta && (y.meta.fields = g),
                (d += u));
            }
            function D() {
              return e.header && 0 === g.length;
            }
            function S(e, t, n, r) {
              (e = { type: e, code: t, message: n }),
                void 0 !== r && (e.row = r),
                y.errors.push(e);
            }
            E(e.step) &&
              ((o = e.step),
              (e.step = function (t) {
                (y = t),
                  D()
                    ? A()
                    : (A(),
                      0 !== y.data.length &&
                        ((f += t.data.length),
                        e.preview && f > e.preview
                          ? n.abort()
                          : ((y.data = y.data[0]), o(y, u))));
              })),
              (this.parse = function (o, i, a) {
                var l = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(o, l)),
                  (r = !1),
                  e.delimiter
                    ? E(e.delimiter) &&
                      ((e.delimiter = e.delimiter(o)),
                      (y.meta.delimiter = e.delimiter))
                    : ((l = ((t, n, r, o, i) => {
                        var a, l, c, u;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          s.RECORD_SEP,
                          s.UNIT_SEP,
                        ];
                        for (var f = 0; f < i.length; f++) {
                          for (
                            var d,
                              h = i[f],
                              p = 0,
                              v = 0,
                              g = 0,
                              y =
                                ((c = void 0),
                                new m({
                                  comments: o,
                                  delimiter: h,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              b = 0;
                            b < y.data.length;
                            b++
                          )
                            r && w(y.data[b])
                              ? g++
                              : ((v += d = y.data[b].length),
                                void 0 === c
                                  ? (c = d)
                                  : 0 < d && ((p += Math.abs(d - c)), (c = d)));
                          0 < y.data.length && (v /= y.data.length - g),
                            (void 0 === l || p <= l) &&
                              (void 0 === u || u < v) &&
                              1.99 < v &&
                              ((l = p), (a = h), (u = v));
                        }
                        return {
                          successful: !!(e.delimiter = a),
                          bestDelimiter: a,
                        };
                      })(
                        o,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = l.bestDelimiter)
                        : ((r = !0), (e.delimiter = s.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (l = b(e)),
                  e.preview && e.header && l.preview++,
                  (t = o),
                  (n = new m(l)),
                  (y = n.parse(t, i, a)),
                  A(),
                  h ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return h;
              }),
              (this.pause = function () {
                (h = !0),
                  n.abort(),
                  (t = E(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((h = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return v;
              }),
              (this.abort = function () {
                (v = !0),
                  n.abort(),
                  (y.meta.aborted = !0),
                  E(e.complete) && e.complete(y),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(p(t) + "([^]*?)" + p(t), "gm"));
                var n = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < n[0].length),
                  1 === n.length || e)
                )
                  return "\n";
                for (var r = 0, o = 0; o < n.length; o++)
                  "\n" === n[o][0] && r++;
                return r >= n.length / 2 ? "\r\n" : "\r";
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function m(e) {
            var t = (e = e || {}).delimiter,
              n = e.newline,
              r = e.comments,
              o = e.step,
              i = e.preview,
              a = e.fastMode,
              l = null,
              c = !1,
              u = null == e.quoteChar ? '"' : e.quoteChar,
              f = u;
            if (
              (void 0 !== e.escapeChar && (f = e.escapeChar),
              ("string" != typeof t || -1 < s.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              r === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === r
              ? (r = "#")
              : ("string" != typeof r || -1 < s.BAD_DELIMITERS.indexOf(r)) &&
                (r = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var d = 0,
              h = !1;
            (this.parse = function (s, m, v) {
              if ("string" != typeof s)
                throw new Error("Input must be a string");
              var g = s.length,
                y = t.length,
                b = n.length,
                w = r.length,
                A = E(o),
                D = [],
                S = [],
                k = [],
                _ = (d = 0);
              if (!s) return I();
              if (a || (!1 !== a && -1 === s.indexOf(u))) {
                for (var O = s.split(n), x = 0; x < O.length; x++) {
                  if (((k = O[x]), (d += k.length), x !== O.length - 1))
                    d += n.length;
                  else if (v) return I();
                  if (!r || k.substring(0, w) !== r) {
                    if (A) {
                      if (((D = []), N(k.split(t)), F(), h)) return I();
                    } else N(k.split(t));
                    if (i && i <= x) return (D = D.slice(0, i)), I(!0);
                  }
                }
                return I();
              }
              for (
                var M = s.indexOf(t, d),
                  R = s.indexOf(n, d),
                  C = new RegExp(p(f) + p(u), "g"),
                  T = s.indexOf(u, d);
                ;
              )
                if (s[d] === u)
                  for (T = d, d++; ; ) {
                    if (-1 === (T = s.indexOf(u, T + 1)))
                      return (
                        v ||
                          S.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: D.length,
                            index: d,
                          }),
                        z()
                      );
                    if (T === g - 1) return z(s.substring(d, T).replace(C, u));
                    if (u === f && s[T + 1] === f) T++;
                    else if (u === f || 0 === T || s[T - 1] !== f) {
                      -1 !== M && M < T + 1 && (M = s.indexOf(t, T + 1));
                      var P = L(
                        -1 ===
                          (R = -1 !== R && R < T + 1 ? s.indexOf(n, T + 1) : R)
                          ? M
                          : Math.min(M, R),
                      );
                      if (s.substr(T + 1 + P, y) === t) {
                        k.push(s.substring(d, T).replace(C, u)),
                          s[(d = T + 1 + P + y)] !== u && (T = s.indexOf(u, d)),
                          (M = s.indexOf(t, d)),
                          (R = s.indexOf(n, d));
                        break;
                      }
                      if (
                        ((P = L(R)),
                        s.substring(T + 1 + P, T + 1 + P + b) === n)
                      ) {
                        if (
                          (k.push(s.substring(d, T).replace(C, u)),
                          j(T + 1 + P + b),
                          (M = s.indexOf(t, d)),
                          (T = s.indexOf(u, d)),
                          A && (F(), h))
                        )
                          return I();
                        if (i && D.length >= i) return I(!0);
                        break;
                      }
                      S.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: D.length,
                        index: d,
                      }),
                        T++;
                    }
                  }
                else if (r && 0 === k.length && s.substring(d, d + w) === r) {
                  if (-1 === R) return I();
                  (d = R + b), (R = s.indexOf(n, d)), (M = s.indexOf(t, d));
                } else if (-1 !== M && (M < R || -1 === R))
                  k.push(s.substring(d, M)), (d = M + y), (M = s.indexOf(t, d));
                else {
                  if (-1 === R) break;
                  if ((k.push(s.substring(d, R)), j(R + b), A && (F(), h)))
                    return I();
                  if (i && D.length >= i) return I(!0);
                }
              return z();
              function N(e) {
                D.push(e), (_ = d);
              }
              function L(e) {
                var t = 0;
                return -1 !== e &&
                  (e = s.substring(T + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function z(e) {
                return (
                  v ||
                    (void 0 === e && (e = s.substring(d)),
                    k.push(e),
                    (d = g),
                    N(k),
                    A && F()),
                  I()
                );
              }
              function j(e) {
                (d = e), N(k), (k = []), (R = s.indexOf(n, d));
              }
              function I(r) {
                if (e.header && !m && D.length && !c) {
                  var o = D[0],
                    i = Object.create(null),
                    a = new Set(o);
                  let t = !1;
                  for (let n = 0; n < o.length; n++) {
                    let r = o[n];
                    if (
                      i[
                        (r = E(e.transformHeader) ? e.transformHeader(r, n) : r)
                      ]
                    ) {
                      let e,
                        s = i[r];
                      for (; (e = r + "_" + s), s++, a.has(e); );
                      a.add(e),
                        (o[n] = e),
                        i[r]++,
                        (t = !0),
                        ((l = null === l ? {} : l)[e] = r);
                    } else (i[r] = 1), (o[n] = r);
                    a.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (c = !0);
                }
                return {
                  data: D,
                  errors: S,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: h,
                    truncated: !!r,
                    cursor: _ + (m || 0),
                    renamedHeaders: l,
                  },
                };
              }
              function F() {
                o(I()), (D = []), (S = []);
              }
            }),
              (this.abort = function () {
                h = !0;
              }),
              (this.getCharIndex = function () {
                return d;
              });
          }
          function v(e) {
            var t = e.data,
              n = i[t.workerId],
              r = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var o = {
                abort: function () {
                  (r = !0),
                    g(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: y,
                resume: y,
              };
              if (E(n.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    o,
                  ),
                  !r);
                  a++
                );
                delete t.results;
              } else
                E(n.userChunk) &&
                  (n.userChunk(t.results, o, t.file), delete t.results);
            }
            t.finished && !r && g(t.workerId, t.results);
          }
          function g(e, t) {
            var n = i[e];
            E(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function y() {
            throw new Error("Not implemented.");
          }
          function b(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = b(e[t]);
            return n;
          }
          function w(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function E(e) {
            return "function" == typeof e;
          }
          return (
            (s.parse = function (t, r) {
              var o = (r = r || {}).dynamicTyping || !1;
              if (
                (E(o) && ((r.dynamicTypingFunction = o), (o = {})),
                (r.dynamicTyping = o),
                (r.transform = !!E(r.transform) && r.transform),
                !r.worker || !s.WORKERS_SUPPORTED)
              )
                return (
                  (o = null),
                  s.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (o = new (r.download ? c : f)(r)))
                    : !0 === t.readable && E(t.read) && E(t.on)
                      ? (o = new d(r))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (o = new u(r)),
                  o.stream(t)
                );
              ((o = (() => {
                var t;
                return (
                  !!s.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      r = e.toString();
                    return (
                      s.BLOB_URL ||
                      (s.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            r,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new n.Worker(t)).onmessage = v),
                  (t.id = a++),
                  (i[t.id] = t))
                );
              })()).userStep = r.step),
                (o.userChunk = r.chunk),
                (o.userComplete = r.complete),
                (o.userError = r.error),
                (r.step = E(r.step)),
                (r.chunk = E(r.chunk)),
                (r.complete = E(r.complete)),
                (r.error = E(r.error)),
                delete r.worker,
                o.postMessage({ input: t, config: r, workerId: o.id });
            }),
            (s.unparse = function (e, t) {
              var n = !1,
                r = !0,
                o = ",",
                i = "\r\n",
                a = '"',
                l = a + a,
                c = !1,
                u = null,
                f = !1,
                d =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          s.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (o = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (c = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        u = t.columns;
                      }
                      void 0 !== t.escapeChar && (l = t.escapeChar + a),
                        t.escapeFormulae instanceof RegExp
                          ? (f = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (f = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return h(null, e, c);
                if ("object" == typeof e[0])
                  return h(u || Object.keys(e[0]), e, c);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || u),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  h(e.fields || [], e.data || [], c)
                );
              throw new Error("Unable to serialize unrecognized input");
              function h(e, t, n) {
                var a = "",
                  s =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  l = !Array.isArray(t[0]);
                if (s && r) {
                  for (var c = 0; c < e.length; c++)
                    0 < c && (a += o), (a += m(e[c], c));
                  0 < t.length && (a += i);
                }
                for (var u = 0; u < t.length; u++) {
                  var f = (s ? e : t[u]).length,
                    d = !1,
                    h = s ? 0 === Object.keys(t[u]).length : 0 === t[u].length;
                  if (
                    (n &&
                      !s &&
                      (d =
                        "greedy" === n
                          ? "" === t[u].join("").trim()
                          : 1 === t[u].length && 0 === t[u][0].length),
                    "greedy" === n && s)
                  ) {
                    for (var p = [], v = 0; v < f; v++) {
                      var g = l ? e[v] : v;
                      p.push(t[u][g]);
                    }
                    d = "" === p.join("").trim();
                  }
                  if (!d) {
                    for (var y = 0; y < f; y++) {
                      0 < y && !h && (a += o);
                      var b = s && l ? e[y] : y;
                      a += m(t[u][b], y);
                    }
                    u < t.length - 1 && (!n || (0 < f && !h)) && (a += i);
                  }
                }
                return a;
              }
              function m(e, t) {
                var r, i;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((i = !1),
                      f &&
                        "string" == typeof e &&
                        f.test(e) &&
                        ((e = "'" + e), (i = !0)),
                      (r = e.toString().replace(d, l)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(r, s.BAD_DELIMITERS) ||
                        -1 < r.indexOf(o) ||
                        " " === r.charAt(0) ||
                        " " === r.charAt(r.length - 1))
                        ? a + r + a
                        : r);
              }
            }),
            (s.RECORD_SEP = String.fromCharCode(30)),
            (s.UNIT_SEP = String.fromCharCode(31)),
            (s.BYTE_ORDER_MARK = "\ufeff"),
            (s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK]),
            (s.WORKERS_SUPPORTED = !r && !!n.Worker),
            (s.NODE_STREAM_INPUT = 1),
            (s.LocalChunkSize = 10485760),
            (s.RemoteChunkSize = 5242880),
            (s.DefaultDelimiter = ","),
            (s.Parser = m),
            (s.ParserHandle = h),
            (s.NetworkStreamer = c),
            (s.FileStreamer = u),
            (s.StringStreamer = f),
            (s.ReadableStreamStreamer = d),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var r = e.config || {},
                  o = [];
                return (
                  this.each(function (e) {
                    if (
                      "INPUT" !== t(this).prop("tagName").toUpperCase() ||
                      "file" !== t(this).attr("type").toLowerCase() ||
                      !n.FileReader ||
                      !this.files ||
                      0 === this.files.length
                    )
                      return !0;
                    for (var i = 0; i < this.files.length; i++)
                      o.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: t.extend({}, r),
                      });
                  }),
                  i(),
                  this
                );
                function i() {
                  if (0 === o.length) E(e.complete) && e.complete();
                  else {
                    var n,
                      r,
                      i,
                      l,
                      c = o[0];
                    if (E(e.before)) {
                      var u = e.before(c.file, c.inputElem);
                      if ("object" == typeof u) {
                        if ("abort" === u.action)
                          return (
                            (n = "AbortError"),
                            (r = c.file),
                            (i = c.inputElem),
                            (l = u.reason),
                            void (E(e.error) && e.error({ name: n }, r, i, l))
                          );
                        if ("skip" === u.action) return void a();
                        "object" == typeof u.config &&
                          (c.instanceConfig = t.extend(
                            c.instanceConfig,
                            u.config,
                          ));
                      } else if ("skip" === u) return void a();
                    }
                    var f = c.instanceConfig.complete;
                    (c.instanceConfig.complete = function (e) {
                      E(f) && f(e, c.file, c.inputElem), a();
                    }),
                      s.parse(c.file, c.instanceConfig);
                  }
                }
                function a() {
                  o.splice(0, 1), i();
                }
              }),
            o &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === s.WORKER_ID && e && (s.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: s.WORKER_ID,
                        results: s.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = s.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: s.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((c.prototype = Object.create(l.prototype)).constructor = c),
            ((u.prototype = Object.create(l.prototype)).constructor = u),
            ((f.prototype = Object.create(f.prototype)).constructor = f),
            ((d.prototype = Object.create(l.prototype)).constructor = d),
            s
          );
        }),
        void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = o);
    },
    41653: (e, t, n) => {
      "use strict";
      n.d(t, { Vv: () => qa, Pp: () => Xo, ye: () => Ga });
      var r = n(54883),
        o = n(2829),
        i = n(11052),
        a = n(30549),
        s = n(50181),
        l = n(35549),
        c = n(96101),
        u = n(15596),
        f = n(90626),
        d = n(38921),
        h = n.n(d),
        p = function () {};
      function m(e, t) {
        return void 0 !== e[t];
      }
      function v(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      var g = n(81115),
        y = n(58584),
        b = n(42891);
      function w() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        null != e && this.setState(e);
      }
      function E(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null != n ? n : null;
          }.bind(this),
        );
      }
      function A(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (w.__suppressDeprecationWarning = !0),
        (E.__suppressDeprecationWarning = !0),
        (A.__suppressDeprecationWarning = !0);
      function D(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = D(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      const S = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = D(e)) && (r && (r += " "), (r += t));
        return r;
      };
      var k = n(61410),
        _ = n.n(k),
        O = "milliseconds",
        x = "seconds",
        M = "minutes",
        R = "hours",
        C = "day",
        T = "week",
        P = "month",
        N = "year",
        L = "decade",
        z = "century",
        j = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          day: 864e5,
          week: 6048e5,
        },
        I = { month: 1, year: 12, decade: 120, century: 1200 };
      function F(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0 ? 29 : 28;
      }
      function W(e, t, n) {
        switch (((e = new Date(e)), n)) {
          case O:
          case x:
          case M:
          case R:
          case C:
          case T:
            return (function (e, t) {
              var n = new Date(+e + t);
              return (function (e, t) {
                var n = e.getTimezoneOffset(),
                  r = t.getTimezoneOffset();
                return new Date(+t + (r - n) * j.minutes);
              })(e, n);
            })(e, t * j[n]);
          case P:
          case N:
          case L:
          case z:
            return (function (e, t) {
              var n = e.getFullYear(),
                r = e.getMonth(),
                o = e.getDate(),
                i = 12 * n + r + t,
                a = Math.trunc(i / 12),
                s = i % 12,
                l = Math.min(
                  o,
                  (function (e) {
                    return [31, F(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                  })(a)[s],
                ),
                c = new Date(e);
              return (
                c.setFullYear(a), c.setDate(1), c.setMonth(s), c.setDate(l), c
              );
            })(e, t * I[n]);
        }
        throw new TypeError('Invalid units: "' + n + '"');
      }
      function H(e, t, n) {
        return W(e, -t, n);
      }
      function U(e, t, n) {
        switch (((e = new Date(e)), t)) {
          case z:
          case L:
          case N:
            e = ie(e, 0);
          case P:
            e = oe(e, 1);
          case T:
          case C:
            e = ne(e, 0);
          case R:
            e = te(e, 0);
          case M:
            e = ee(e, 0);
          case x:
            e = J(e, 0);
        }
        return (
          t === L && (e = H(e, ae(e) % 10, "year")),
          t === z && (e = H(e, ae(e) % 100, "year")),
          t === T &&
            (e = (function (e, t, n) {
              var r = (re(e) + 7 - (n || 0)) % 7;
              return void 0 === t ? r : W(e, t - r, C);
            })(e, 0, n)),
          e
        );
      }
      function Y(e, t, n) {
        switch (((e = U((e = new Date(e)), t, n)), t)) {
          case z:
          case L:
          case N:
          case P:
          case T:
            (e = H((e = W(e, 1, t)), 1, C)).setHours(23, 59, 59, 999);
            break;
          case C:
            e.setHours(23, 59, 59, 999);
            break;
          case R:
          case M:
          case x:
            e = H((e = W(e, 1, t)), 1, O);
        }
        return e;
      }
      var B = le(function (e, t) {
          return e === t;
        }),
        q = le(function (e, t) {
          return e !== t;
        }),
        K = le(function (e, t) {
          return e > t;
        }),
        V = le(function (e, t) {
          return e >= t;
        }),
        $ = le(function (e, t) {
          return e < t;
        }),
        G = le(function (e, t) {
          return e <= t;
        });
      function X() {
        return new Date(Math.min.apply(Math, arguments));
      }
      function Z() {
        return new Date(Math.max.apply(Math, arguments));
      }
      function Q(e, t, n, r) {
        return (r = r || "day"), (!t || V(e, t, r)) && (!n || G(e, n, r));
      }
      var J = se("Milliseconds"),
        ee = se("Seconds"),
        te = se("Minutes"),
        ne = se("Hours"),
        re = se("Day"),
        oe = se("Date"),
        ie = se("Month"),
        ae = se("FullYear");
      function se(e) {
        var t = (function (e) {
          switch (e) {
            case "Milliseconds":
              return 36e5;
            case "Seconds":
              return 3600;
            case "Minutes":
              return 60;
            case "Hours":
              return 1;
            default:
              return null;
          }
        })(e);
        return function (n, r) {
          if (void 0 === r) return n["get" + e]();
          var o = new Date(n);
          return (
            o["set" + e](r),
            t &&
              o["get" + e]() != r &&
              ("Hours" === e ||
                (r >= t && o.getHours() - n.getHours() < Math.floor(r / t))) &&
              o["set" + e](r + t),
            o
          );
        };
      }
      function le(e) {
        return function (t, n, r) {
          return e(+U(t, r), +U(n, r));
        };
      }
      var ce = n(55635),
        ue = n(8950);
      const fe = function (e, t, n) {
        var r = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
        return i;
      };
      var de = n(7e4),
        he = n(55205),
        pe = 1 / 0;
      const me = function (e) {
        return e
          ? (e = (0, he.A)(e)) === pe || e === -1 / 0
            ? 17976931348623157e292 * (e < 0 ? -1 : 1)
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
      const ve = function (e) {
        var t = me(e),
          n = t % 1;
        return t == t ? (n ? t - n : t) : 0;
      };
      var ge = Math.ceil,
        ye = Math.max;
      const be = function (e, t, n) {
        t = (n ? (0, de.A)(e, t, n) : void 0 === t) ? 1 : ye(ve(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var o = 0, i = 0, a = Array(ge(r / t)); o < r; )
          a[i++] = fe(e, o, (o += t));
        return a;
      };
      function we(e) {
        return (e && e.ownerDocument) || document;
      }
      function Ee(e, t) {
        return (function (e) {
          var t = we(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var Ae = /([A-Z])/g;
      var De = /^ms-/;
      function Se(e) {
        return (function (e) {
          return e.replace(Ae, "-$1").toLowerCase();
        })(e).replace(De, "-ms-");
      }
      var ke =
        /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      const _e = function (e, t) {
        var n = "",
          r = "";
        if ("string" == typeof t)
          return (
            e.style.getPropertyValue(Se(t)) || Ee(e).getPropertyValue(Se(t))
          );
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !ke.test(e));
              })(o)
              ? (n += Se(o) + ": " + i + ";")
              : (r += o + "(" + i + ") ")
            : e.style.removeProperty(Se(o));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function Oe(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
            ? e === t || !!(16 & e.compareDocumentPosition(t))
            : void 0;
      }
      function xe(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function Me(e) {
        var t = "pageXOffset" === e ? "scrollLeft" : "scrollTop";
        return function (n, r) {
          var o = xe(n);
          if (void 0 === r) return o ? o[e] : n[t];
          o ? o.scrollTo(o[e], r) : (n[t] = r);
        };
      }
      const Re = Me("pageXOffset"),
        Ce = Me("pageYOffset");
      function Te(e) {
        var t = we(e),
          n = { top: 0, left: 0, height: 0, width: 0 },
          r = t && t.documentElement;
        return r && Oe(r, e)
          ? (void 0 !== e.getBoundingClientRect &&
              (n = e.getBoundingClientRect()),
            (n = {
              top: n.top + Ce(r) - (r.clientTop || 0),
              left: n.left + Re(r) - (r.clientLeft || 0),
              width: n.width,
              height: n.height,
            }))
          : n;
      }
      var Pe = function (e) {
        return !!e && "offsetParent" in e;
      };
      function Ne(e, t) {
        var n,
          r = { top: 0, left: 0 };
        if ("fixed" === _e(e, "position")) n = e.getBoundingClientRect();
        else {
          var o =
            t ||
            (function (e) {
              for (
                var t = we(e), n = e && e.offsetParent;
                Pe(n) &&
                "HTML" !== n.nodeName &&
                "static" === _e(n, "position");
              )
                n = n.offsetParent;
              return n || t.documentElement;
            })(e);
          (n = Te(e)),
            "html" !==
              (function (e) {
                return e.nodeName && e.nodeName.toLowerCase();
              })(o) && (r = Te(o));
          var i = String(_e(o, "borderTopWidth") || 0);
          r.top += parseInt(i, 10) - Ce(o) || 0;
          var a = String(_e(o, "borderLeftWidth") || 0);
          r.left += parseInt(a, 10) - Re(o) || 0;
        }
        var s = String(_e(e, "marginTop") || 0),
          l = String(_e(e, "marginLeft") || 0);
        return (0, y.A)({}, n, {
          top: n.top - r.top - (parseInt(s, 10) || 0),
          left: n.left - r.left - (parseInt(l, 10) || 0),
        });
      }
      const Le = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var ze = new Date().getTime();
      var je = "clearTimeout",
        Ie = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - ze)),
            r = setTimeout(e, n);
          return (ze = t), r;
        },
        Fe = function (e, t) {
          return (
            e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
          );
        };
      Le &&
        ["", "webkit", "moz", "o", "ms"].some(function (e) {
          var t = Fe(e, "request");
          return (
            t in window &&
              ((je = Fe(e, "cancel")),
              (Ie = function (e) {
                return window[t](e);
              })),
            !!Ie
          );
        });
      var We = function (e) {
          "function" == typeof window[je] && window[je](e);
        },
        He = Ie,
        Ue = n(72739);
      function Ye() {
        return (0, f.useState)(null);
      }
      const Be = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      const qe = function (e, t) {
        return (0, f.useMemo)(
          () =>
            (function (e, t) {
              const n = Be(e),
                r = Be(t);
              return (e) => {
                n && n(e), r && r(e);
              };
            })(e, t),
          [e, t],
        );
      };
      var Ke = "top",
        Ve = "bottom",
        $e = "right",
        Ge = "left",
        Xe = "auto",
        Ze = [Ke, Ve, $e, Ge],
        Qe = "start",
        Je = "end",
        et = "viewport",
        tt = "popper",
        nt = Ze.reduce(function (e, t) {
          return e.concat([t + "-" + Qe, t + "-" + Je]);
        }, []),
        rt = [].concat(Ze, [Xe]).reduce(function (e, t) {
          return e.concat([t, t + "-" + Qe, t + "-" + Je]);
        }, []),
        ot = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      const it = function (e) {
        const t = (function () {
          const e = (0, f.useRef)(!0),
            t = (0, f.useRef)(() => e.current);
          return (
            (0, f.useEffect)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              [],
            ),
            t.current
          );
        })();
        return [
          e[0],
          (0, f.useCallback)(
            (n) => {
              if (t()) return e[1](n);
            },
            [t, e[1]],
          ),
        ];
      };
      function at(e) {
        return e.split("-")[0];
      }
      function st(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function lt(e) {
        return e instanceof st(e).Element || e instanceof Element;
      }
      function ct(e) {
        return e instanceof st(e).HTMLElement || e instanceof HTMLElement;
      }
      function ut(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof st(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var ft = Math.max,
        dt = Math.min,
        ht = Math.round;
      function pt() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function mt() {
        return !/^((?!chrome|android).)*safari/i.test(pt());
      }
      function vt(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          o = 1,
          i = 1;
        t &&
          ct(e) &&
          ((o = (e.offsetWidth > 0 && ht(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && ht(r.height) / e.offsetHeight) || 1));
        var a = (lt(e) ? st(e) : window).visualViewport,
          s = !mt() && n,
          l = (r.left + (s && a ? a.offsetLeft : 0)) / o,
          c = (r.top + (s && a ? a.offsetTop : 0)) / i,
          u = r.width / o,
          f = r.height / i;
        return {
          width: u,
          height: f,
          top: c,
          right: l + u,
          bottom: c + f,
          left: l,
          x: l,
          y: c,
        };
      }
      function gt(e) {
        var t = vt(e),
          n = e.offsetWidth,
          r = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - r) <= 1 && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
        );
      }
      function yt(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && ut(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function bt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function wt(e) {
        return st(e).getComputedStyle(e);
      }
      function Et(e) {
        return ["table", "td", "th"].indexOf(bt(e)) >= 0;
      }
      function At(e) {
        return ((lt(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Dt(e) {
        return "html" === bt(e)
          ? e
          : e.assignedSlot || e.parentNode || (ut(e) ? e.host : null) || At(e);
      }
      function St(e) {
        return ct(e) && "fixed" !== wt(e).position ? e.offsetParent : null;
      }
      function kt(e) {
        for (
          var t = st(e), n = St(e);
          n && Et(n) && "static" === wt(n).position;
        )
          n = St(n);
        return n &&
          ("html" === bt(n) ||
            ("body" === bt(n) && "static" === wt(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(pt());
                if (
                  /Trident/i.test(pt()) &&
                  ct(e) &&
                  "fixed" === wt(e).position
                )
                  return null;
                var n = Dt(e);
                for (
                  ut(n) && (n = n.host);
                  ct(n) && ["html", "body"].indexOf(bt(n)) < 0;
                ) {
                  var r = wt(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function _t(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Ot(e, t, n) {
        return ft(e, dt(t, n));
      }
      function xt(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Mt(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      const Rt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            r = e.name,
            o = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = at(n.placement),
            l = _t(s),
            c = [Ge, $e].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var u = (function (e, t) {
                return xt(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            }),
                          )
                        : e)
                    ? e
                    : Mt(e, Ze),
                );
              })(o.padding, n),
              f = gt(i),
              d = "y" === l ? Ke : Ge,
              h = "y" === l ? Ve : $e,
              p =
                n.rects.reference[c] +
                n.rects.reference[l] -
                a[l] -
                n.rects.popper[c],
              m = a[l] - n.rects.reference[l],
              v = kt(i),
              g = v
                ? "y" === l
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              y = p / 2 - m / 2,
              b = u[d],
              w = g - f[c] - u[h],
              E = g / 2 - f[c] / 2 + y,
              A = Ot(b, E, w),
              D = l;
            n.modifiersData[r] =
              (((t = {})[D] = A), (t.centerOffset = A - E), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
          null != r &&
            ("string" != typeof r ||
              (r = t.elements.popper.querySelector(r))) &&
            yt(t.elements.popper, r) &&
            (t.elements.arrow = r);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Ct(e) {
        return e.split("-")[1];
      }
      var Tt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Pt(e) {
        var t,
          n = e.popper,
          r = e.popperRect,
          o = e.placement,
          i = e.variation,
          a = e.offsets,
          s = e.position,
          l = e.gpuAcceleration,
          c = e.adaptive,
          u = e.roundOffsets,
          f = e.isFixed,
          d = a.x,
          h = void 0 === d ? 0 : d,
          p = a.y,
          m = void 0 === p ? 0 : p,
          v = "function" == typeof u ? u({ x: h, y: m }) : { x: h, y: m };
        (h = v.x), (m = v.y);
        var g = a.hasOwnProperty("x"),
          y = a.hasOwnProperty("y"),
          b = Ge,
          w = Ke,
          E = window;
        if (c) {
          var A = kt(n),
            D = "clientHeight",
            S = "clientWidth";
          if (
            (A === st(n) &&
              "static" !== wt((A = At(n))).position &&
              "absolute" === s &&
              ((D = "scrollHeight"), (S = "scrollWidth")),
            o === Ke || ((o === Ge || o === $e) && i === Je))
          )
            (w = Ve),
              (m -=
                (f && A === E && E.visualViewport
                  ? E.visualViewport.height
                  : A[D]) - r.height),
              (m *= l ? 1 : -1);
          if (o === Ge || ((o === Ke || o === Ve) && i === Je))
            (b = $e),
              (h -=
                (f && A === E && E.visualViewport
                  ? E.visualViewport.width
                  : A[S]) - r.width),
              (h *= l ? 1 : -1);
        }
        var k,
          _ = Object.assign({ position: s }, c && Tt),
          O =
            !0 === u
              ? (function (e, t) {
                  var n = e.x,
                    r = e.y,
                    o = t.devicePixelRatio || 1;
                  return { x: ht(n * o) / o || 0, y: ht(r * o) / o || 0 };
                })({ x: h, y: m }, st(n))
              : { x: h, y: m };
        return (
          (h = O.x),
          (m = O.y),
          l
            ? Object.assign(
                {},
                _,
                (((k = {})[w] = y ? "0" : ""),
                (k[b] = g ? "0" : ""),
                (k.transform =
                  (E.devicePixelRatio || 1) <= 1
                    ? "translate(" + h + "px, " + m + "px)"
                    : "translate3d(" + h + "px, " + m + "px, 0)"),
                k),
              )
            : Object.assign(
                {},
                _,
                (((t = {})[w] = y ? m + "px" : ""),
                (t[b] = g ? h + "px" : ""),
                (t.transform = ""),
                t),
              )
        );
      }
      const Nt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            o = void 0 === r || r,
            i = n.adaptive,
            a = void 0 === i || i,
            s = n.roundOffsets,
            l = void 0 === s || s,
            c = {
              placement: at(t.placement),
              variation: Ct(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: o,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Pt(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: a,
                  roundOffsets: l,
                }),
              ),
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Pt(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      };
      var Lt = { passive: !0 };
      const zt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            o = r.scroll,
            i = void 0 === o || o,
            a = r.resize,
            s = void 0 === a || a,
            l = st(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, Lt);
              }),
            s && l.addEventListener("resize", n.update, Lt),
            function () {
              i &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Lt);
                }),
                s && l.removeEventListener("resize", n.update, Lt);
            }
          );
        },
        data: {},
      };
      var jt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function It(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return jt[e];
        });
      }
      var Ft = { start: "end", end: "start" };
      function Wt(e) {
        return e.replace(/start|end/g, function (e) {
          return Ft[e];
        });
      }
      function Ht(e) {
        var t = st(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Ut(e) {
        return vt(At(e)).left + Ht(e).scrollLeft;
      }
      function Yt(e) {
        var t = wt(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + r);
      }
      function Bt(e) {
        return ["html", "body", "#document"].indexOf(bt(e)) >= 0
          ? e.ownerDocument.body
          : ct(e) && Yt(e)
            ? e
            : Bt(Dt(e));
      }
      function qt(e, t) {
        var n;
        void 0 === t && (t = []);
        var r = Bt(e),
          o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = st(r),
          a = o ? [i].concat(i.visualViewport || [], Yt(r) ? r : []) : r,
          s = t.concat(a);
        return o ? s : s.concat(qt(Dt(a)));
      }
      function Kt(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function Vt(e, t, n) {
        return t === et
          ? Kt(
              (function (e, t) {
                var n = st(e),
                  r = At(e),
                  o = n.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  s = 0,
                  l = 0;
                if (o) {
                  (i = o.width), (a = o.height);
                  var c = mt();
                  (c || (!c && "fixed" === t)) &&
                    ((s = o.offsetLeft), (l = o.offsetTop));
                }
                return { width: i, height: a, x: s + Ut(e), y: l };
              })(e, n),
            )
          : lt(t)
            ? (function (e, t) {
                var n = vt(e, !1, "fixed" === t);
                return (
                  (n.top = n.top + e.clientTop),
                  (n.left = n.left + e.clientLeft),
                  (n.bottom = n.top + e.clientHeight),
                  (n.right = n.left + e.clientWidth),
                  (n.width = e.clientWidth),
                  (n.height = e.clientHeight),
                  (n.x = n.left),
                  (n.y = n.top),
                  n
                );
              })(t, n)
            : Kt(
                (function (e) {
                  var t,
                    n = At(e),
                    r = Ht(e),
                    o = null == (t = e.ownerDocument) ? void 0 : t.body,
                    i = ft(
                      n.scrollWidth,
                      n.clientWidth,
                      o ? o.scrollWidth : 0,
                      o ? o.clientWidth : 0,
                    ),
                    a = ft(
                      n.scrollHeight,
                      n.clientHeight,
                      o ? o.scrollHeight : 0,
                      o ? o.clientHeight : 0,
                    ),
                    s = -r.scrollLeft + Ut(e),
                    l = -r.scrollTop;
                  return (
                    "rtl" === wt(o || n).direction &&
                      (s += ft(n.clientWidth, o ? o.clientWidth : 0) - i),
                    { width: i, height: a, x: s, y: l }
                  );
                })(At(e)),
              );
      }
      function $t(e, t, n, r) {
        var o =
            "clippingParents" === t
              ? (function (e) {
                  var t = qt(Dt(e)),
                    n =
                      ["absolute", "fixed"].indexOf(wt(e).position) >= 0 &&
                      ct(e)
                        ? kt(e)
                        : e;
                  return lt(n)
                    ? t.filter(function (e) {
                        return lt(e) && yt(e, n) && "body" !== bt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          i = [].concat(o, [n]),
          a = i[0],
          s = i.reduce(
            function (t, n) {
              var o = Vt(e, n, r);
              return (
                (t.top = ft(o.top, t.top)),
                (t.right = dt(o.right, t.right)),
                (t.bottom = dt(o.bottom, t.bottom)),
                (t.left = ft(o.left, t.left)),
                t
              );
            },
            Vt(e, a, r),
          );
        return (
          (s.width = s.right - s.left),
          (s.height = s.bottom - s.top),
          (s.x = s.left),
          (s.y = s.top),
          s
        );
      }
      function Gt(e) {
        var t,
          n = e.reference,
          r = e.element,
          o = e.placement,
          i = o ? at(o) : null,
          a = o ? Ct(o) : null,
          s = n.x + n.width / 2 - r.width / 2,
          l = n.y + n.height / 2 - r.height / 2;
        switch (i) {
          case Ke:
            t = { x: s, y: n.y - r.height };
            break;
          case Ve:
            t = { x: s, y: n.y + n.height };
            break;
          case $e:
            t = { x: n.x + n.width, y: l };
            break;
          case Ge:
            t = { x: n.x - r.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = i ? _t(i) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (a) {
            case Qe:
              t[c] = t[c] - (n[u] / 2 - r[u] / 2);
              break;
            case Je:
              t[c] = t[c] + (n[u] / 2 - r[u] / 2);
          }
        }
        return t;
      }
      function Xt(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          o = void 0 === r ? e.placement : r,
          i = n.strategy,
          a = void 0 === i ? e.strategy : i,
          s = n.boundary,
          l = void 0 === s ? "clippingParents" : s,
          c = n.rootBoundary,
          u = void 0 === c ? et : c,
          f = n.elementContext,
          d = void 0 === f ? tt : f,
          h = n.altBoundary,
          p = void 0 !== h && h,
          m = n.padding,
          v = void 0 === m ? 0 : m,
          g = xt("number" != typeof v ? v : Mt(v, Ze)),
          y = d === tt ? "reference" : tt,
          b = e.rects.popper,
          w = e.elements[p ? y : d],
          E = $t(
            lt(w) ? w : w.contextElement || At(e.elements.popper),
            l,
            u,
            a,
          ),
          A = vt(e.elements.reference),
          D = Gt({
            reference: A,
            element: b,
            strategy: "absolute",
            placement: o,
          }),
          S = Kt(Object.assign({}, b, D)),
          k = d === tt ? S : A,
          _ = {
            top: E.top - k.top + g.top,
            bottom: k.bottom - E.bottom + g.bottom,
            left: E.left - k.left + g.left,
            right: k.right - E.right + g.right,
          },
          O = e.modifiersData.offset;
        if (d === tt && O) {
          var x = O[o];
          Object.keys(_).forEach(function (e) {
            var t = [$e, Ve].indexOf(e) >= 0 ? 1 : -1,
              n = [Ke, Ve].indexOf(e) >= 0 ? "y" : "x";
            _[e] += x[n] * t;
          });
        }
        return _;
      }
      const Zt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name;
          if (!t.modifiersData[r]._skip) {
            for (
              var o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 === a || a,
                l = n.fallbackPlacements,
                c = n.padding,
                u = n.boundary,
                f = n.rootBoundary,
                d = n.altBoundary,
                h = n.flipVariations,
                p = void 0 === h || h,
                m = n.allowedAutoPlacements,
                v = t.options.placement,
                g = at(v),
                y =
                  l ||
                  (g === v || !p
                    ? [It(v)]
                    : (function (e) {
                        if (at(e) === Xe) return [];
                        var t = It(e);
                        return [Wt(e), t, Wt(t)];
                      })(v)),
                b = [v].concat(y).reduce(function (e, n) {
                  return e.concat(
                    at(n) === Xe
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            r = n.placement,
                            o = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            l = n.allowedAutoPlacements,
                            c = void 0 === l ? rt : l,
                            u = Ct(r),
                            f = u
                              ? s
                                ? nt
                                : nt.filter(function (e) {
                                    return Ct(e) === u;
                                  })
                              : Ze,
                            d = f.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === d.length && (d = f);
                          var h = d.reduce(function (t, n) {
                            return (
                              (t[n] = Xt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: i,
                                padding: a,
                              })[at(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(h).sort(function (e, t) {
                            return h[e] - h[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: u,
                          rootBoundary: f,
                          padding: c,
                          flipVariations: p,
                          allowedAutoPlacements: m,
                        })
                      : n,
                  );
                }, []),
                w = t.rects.reference,
                E = t.rects.popper,
                A = new Map(),
                D = !0,
                S = b[0],
                k = 0;
              k < b.length;
              k++
            ) {
              var _ = b[k],
                O = at(_),
                x = Ct(_) === Qe,
                M = [Ke, Ve].indexOf(O) >= 0,
                R = M ? "width" : "height",
                C = Xt(t, {
                  placement: _,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: d,
                  padding: c,
                }),
                T = M ? (x ? $e : Ge) : x ? Ve : Ke;
              w[R] > E[R] && (T = It(T));
              var P = It(T),
                N = [];
              if (
                (i && N.push(C[O] <= 0),
                s && N.push(C[T] <= 0, C[P] <= 0),
                N.every(function (e) {
                  return e;
                }))
              ) {
                (S = _), (D = !1);
                break;
              }
              A.set(_, N);
            }
            if (D)
              for (
                var L = function (e) {
                    var t = b.find(function (t) {
                      var n = A.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (S = t), "break";
                  },
                  z = p ? 3 : 1;
                z > 0;
                z--
              ) {
                if ("break" === L(z)) break;
              }
            t.placement !== S &&
              ((t.modifiersData[r]._skip = !0),
              (t.placement = S),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Qt(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function Jt(e) {
        return [Ke, $e, Ve, Ge].some(function (t) {
          return e[t] >= 0;
        });
      }
      const en = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            i = void 0 === o ? [0, 0] : o,
            a = rt.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var r = at(e),
                    o = [Ge, Ke].indexOf(r) >= 0 ? -1 : 1,
                    i =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    a = i[0],
                    s = i[1];
                  return (
                    (a = a || 0),
                    (s = (s || 0) * o),
                    [Ge, $e].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
                  );
                })(n, t.rects, i)),
                e
              );
            }, {}),
            s = a[t.placement],
            l = s.x,
            c = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[r] = a);
        },
      };
      const tn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            i = void 0 === o || o,
            a = n.altAxis,
            s = void 0 !== a && a,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            d = n.tether,
            h = void 0 === d || d,
            p = n.tetherOffset,
            m = void 0 === p ? 0 : p,
            v = Xt(t, {
              boundary: l,
              rootBoundary: c,
              padding: f,
              altBoundary: u,
            }),
            g = at(t.placement),
            y = Ct(t.placement),
            b = !y,
            w = _t(g),
            E = "x" === w ? "y" : "x",
            A = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            S = t.rects.popper,
            k =
              "function" == typeof m
                ? m(Object.assign({}, t.rects, { placement: t.placement }))
                : m,
            _ =
              "number" == typeof k
                ? { mainAxis: k, altAxis: k }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            O = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            x = { x: 0, y: 0 };
          if (A) {
            if (i) {
              var M,
                R = "y" === w ? Ke : Ge,
                C = "y" === w ? Ve : $e,
                T = "y" === w ? "height" : "width",
                P = A[w],
                N = P + v[R],
                L = P - v[C],
                z = h ? -S[T] / 2 : 0,
                j = y === Qe ? D[T] : S[T],
                I = y === Qe ? -S[T] : -D[T],
                F = t.elements.arrow,
                W = h && F ? gt(F) : { width: 0, height: 0 },
                H = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                U = H[R],
                Y = H[C],
                B = Ot(0, D[T], W[T]),
                q = b
                  ? D[T] / 2 - z - B - U - _.mainAxis
                  : j - B - U - _.mainAxis,
                K = b
                  ? -D[T] / 2 + z + B + Y + _.mainAxis
                  : I + B + Y + _.mainAxis,
                V = t.elements.arrow && kt(t.elements.arrow),
                $ = V ? ("y" === w ? V.clientTop || 0 : V.clientLeft || 0) : 0,
                G = null != (M = null == O ? void 0 : O[w]) ? M : 0,
                X = P + K - G,
                Z = Ot(h ? dt(N, P + q - G - $) : N, P, h ? ft(L, X) : L);
              (A[w] = Z), (x[w] = Z - P);
            }
            if (s) {
              var Q,
                J = "x" === w ? Ke : Ge,
                ee = "x" === w ? Ve : $e,
                te = A[E],
                ne = "y" === E ? "height" : "width",
                re = te + v[J],
                oe = te - v[ee],
                ie = -1 !== [Ke, Ge].indexOf(g),
                ae = null != (Q = null == O ? void 0 : O[E]) ? Q : 0,
                se = ie ? re : te - D[ne] - S[ne] - ae + _.altAxis,
                le = ie ? te + D[ne] + S[ne] - ae - _.altAxis : oe,
                ce =
                  h && ie
                    ? (function (e, t, n) {
                        var r = Ot(e, t, n);
                        return r > n ? n : r;
                      })(se, te, le)
                    : Ot(h ? se : re, te, h ? le : oe);
              (A[E] = ce), (x[E] = ce - te);
            }
            t.modifiersData[r] = x;
          }
        },
        requiresIfExists: ["offset"],
      };
      function nn(e, t, n) {
        void 0 === n && (n = !1);
        var r,
          o,
          i = ct(t),
          a =
            ct(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = ht(t.width) / e.offsetWidth || 1,
                r = ht(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== r;
            })(t),
          s = At(t),
          l = vt(e, a, n),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (i || (!i && !n)) &&
            (("body" !== bt(t) || Yt(s)) &&
              (c =
                (r = t) !== st(r) && ct(r)
                  ? { scrollLeft: (o = r).scrollLeft, scrollTop: o.scrollTop }
                  : Ht(r)),
            ct(t)
              ? (((u = vt(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
              : s && (u.x = Ut(s))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function rn(e) {
        var t = new Map(),
          n = new Set(),
          r = [];
        function o(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var r = t.get(e);
                  r && o(r);
                }
              }),
            r.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || o(e);
          }),
          r
        );
      }
      var on = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function an() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function sn(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          o = t.defaultOptions,
          i = void 0 === o ? on : o;
        return function (e, t, n) {
          void 0 === n && (n = i);
          var o,
            a,
            s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, on, i),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: s,
              setOptions: function (n) {
                var o = "function" == typeof n ? n(s.options) : n;
                f(),
                  (s.options = Object.assign({}, i, s.options, o)),
                  (s.scrollParents = {
                    reference: lt(e)
                      ? qt(e)
                      : e.contextElement
                        ? qt(e.contextElement)
                        : [],
                    popper: qt(t),
                  });
                var a,
                  c,
                  d = (function (e) {
                    var t = rn(e);
                    return ot.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        }),
                      );
                    }, []);
                  })(
                    ((a = [].concat(r, s.options.modifiers)),
                    (c = a.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(c).map(function (e) {
                      return c[e];
                    })),
                  );
                return (
                  (s.orderedModifiers = d.filter(function (e) {
                    return e.enabled;
                  })),
                  s.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      o = e.effect;
                    if ("function" == typeof o) {
                      var i = o({ state: s, name: t, instance: u, options: r }),
                        a = function () {};
                      l.push(i || a);
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = s.elements,
                    t = e.reference,
                    n = e.popper;
                  if (an(t, n)) {
                    (s.rects = {
                      reference: nn(t, kt(n), "fixed" === s.options.strategy),
                      popper: gt(n),
                    }),
                      (s.reset = !1),
                      (s.placement = s.options.placement),
                      s.orderedModifiers.forEach(function (e) {
                        return (s.modifiersData[e.name] = Object.assign(
                          {},
                          e.data,
                        ));
                      });
                    for (var r = 0; r < s.orderedModifiers.length; r++)
                      if (!0 !== s.reset) {
                        var o = s.orderedModifiers[r],
                          i = o.fn,
                          a = o.options,
                          l = void 0 === a ? {} : a,
                          f = o.name;
                        "function" == typeof i &&
                          (s =
                            i({ state: s, options: l, name: f, instance: u }) ||
                            s);
                      } else (s.reset = !1), (r = -1);
                  }
                }
              },
              update:
                ((o = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(s);
                  });
                }),
                function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0), e(o());
                        });
                      })),
                    a
                  );
                }),
              destroy: function () {
                f(), (c = !0);
              },
            };
          if (!an(e, t)) return u;
          function f() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var ln = sn({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  o = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = Xt(t, { elementContext: "reference" }),
                  s = Xt(t, { altBoundary: !0 }),
                  l = Qt(a, r),
                  c = Qt(s, o, i),
                  u = Jt(l),
                  f = Jt(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": f,
                    },
                  ));
              },
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = Gt({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Nt,
            zt,
            en,
            Zt,
            tn,
            Rt,
          ],
        }),
        cn = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        un = { name: "applyStyles", enabled: !1 },
        fn = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                n = e.reference,
                r = e.popper;
              if ("removeAttribute" in n) {
                var o = (n.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== r.id;
                  });
                o.length
                  ? n.setAttribute("aria-describedby", o.join(","))
                  : n.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              n = e.state.elements,
              r = n.popper,
              o = n.reference,
              i =
                null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (r.id && "tooltip" === i && "setAttribute" in o) {
              var a = o.getAttribute("aria-describedby");
              if (a && -1 !== a.split(",").indexOf(r.id)) return;
              o.setAttribute("aria-describedby", a ? a + "," + r.id : r.id);
            }
          },
        },
        dn = [];
      const hn = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.enabled,
          i = void 0 === o || o,
          a = r.placement,
          s = void 0 === a ? "bottom" : a,
          l = r.strategy,
          c = void 0 === l ? "absolute" : l,
          u = r.modifiers,
          d = void 0 === u ? dn : u,
          h = (0, g.A)(r, ["enabled", "placement", "strategy", "modifiers"]),
          p = (0, f.useRef)(),
          m = (0, f.useCallback)(function () {
            var e;
            null == (e = p.current) || e.update();
          }, []),
          v = (0, f.useCallback)(function () {
            var e;
            null == (e = p.current) || e.forceUpdate();
          }, []),
          b = it(
            (0, f.useState)({
              placement: s,
              update: m,
              forceUpdate: v,
              attributes: {},
              styles: { popper: cn(c), arrow: {} },
            }),
          ),
          w = b[0],
          E = b[1],
          A = (0, f.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    n = {},
                    r = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (n[e] = t.styles[e]), (r[e] = t.attributes[e]);
                  }),
                    E({
                      state: t,
                      styles: n,
                      attributes: r,
                      update: m,
                      forceUpdate: v,
                      placement: t.placement,
                    });
                },
              };
            },
            [m, v, E],
          );
        return (
          (0, f.useEffect)(
            function () {
              p.current &&
                i &&
                p.current.setOptions({
                  placement: s,
                  strategy: c,
                  modifiers: [].concat(d, [A, un]),
                });
            },
            [c, s, A, i],
          ),
          (0, f.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (p.current = ln(
                    e,
                    t,
                    (0, y.A)({}, h, {
                      placement: s,
                      strategy: c,
                      modifiers: [].concat(d, [fn, A]),
                    }),
                  )),
                  function () {
                    null != p.current &&
                      (p.current.destroy(),
                      (p.current = void 0),
                      E(function (e) {
                        return (0, y.A)({}, e, {
                          attributes: {},
                          styles: { popper: cn(c) },
                        });
                      }));
                  }
                );
            },
            [i, e, t],
          ),
          w
        );
      };
      var pn = !1,
        mn = !1;
      try {
        var vn = {
          get passive() {
            return (pn = !0);
          },
          get once() {
            return (mn = pn = !0);
          },
        };
        Le &&
          (window.addEventListener("test", vn, vn),
          window.removeEventListener("test", vn, !0));
      } catch (e) {}
      const gn = function (e, t, n, r) {
        if (r && "boolean" != typeof r && !mn) {
          var o = r.once,
            i = r.capture,
            a = n;
          !mn &&
            o &&
            ((a =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = a)),
            e.addEventListener(t, a, pn ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      const yn = function (e, t, n, r) {
        var o = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, n, o),
          n.__once && e.removeEventListener(t, n.__once, o);
      };
      const bn = function (e, t, n, r) {
        return (
          gn(e, t, n, r),
          function () {
            yn(e, t, n, r);
          }
        );
      };
      const wn = function (e) {
        const t = (0, f.useRef)(e);
        return (
          (0, f.useEffect)(() => {
            t.current = e;
          }, [e]),
          t
        );
      };
      function En(e) {
        const t = wn(e);
        return (0, f.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t],
        );
      }
      var An = n(67501),
        Dn = n.n(An);
      const Sn = function (e) {
        return we(
          (function (e) {
            return e && "setState" in e
              ? Ue.findDOMNode(e)
              : null != e
                ? e
                : null;
          })(e),
        );
      };
      var kn = function () {};
      var _n = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      const On = function (e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.disabled,
          i = r.clickTrigger,
          a = void 0 === i ? "click" : i,
          s = (0, f.useRef)(!1),
          l = t || kn,
          c = (0, f.useCallback)(
            function (t) {
              var n,
                r,
                o = _n(e);
              Dn()(
                !!o,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
              ),
                (s.current = !(
                  o &&
                  ((r = t),
                  !(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !Oe(
                    o,
                    null !=
                      (n =
                        null == t.composedPath ? void 0 : t.composedPath()[0])
                      ? n
                      : t.target,
                  )
                ));
            },
            [e],
          ),
          u = En(function (e) {
            s.current || l(e);
          }),
          d = En(function (e) {
            27 === e.keyCode && l(e);
          });
        (0, f.useEffect)(
          function () {
            if (!o && null != e) {
              var t = window.event,
                n = Sn(_n(e)),
                r = bn(n, a, c, !0),
                i = bn(n, a, function (e) {
                  e !== t ? u(e) : (t = void 0);
                }),
                s = bn(n, "keyup", function (e) {
                  e !== t ? d(e) : (t = void 0);
                }),
                l = [];
              return (
                "ontouchstart" in n.documentElement &&
                  (l = [].slice.call(n.body.children).map(function (e) {
                    return bn(e, "mousemove", kn);
                  })),
                function () {
                  r(),
                    i(),
                    s(),
                    l.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, a, c, u, d],
        );
      };
      var xn = function (e) {
        var t;
        return "undefined" == typeof document
          ? null
          : null == e
            ? we().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (t = e) && t.nodeType && e) || null);
      };
      function Mn(e, t) {
        var n = (0, f.useState)(function () {
            return xn(e);
          }),
          r = n[0],
          o = n[1];
        if (!r) {
          var i = xn(e);
          i && o(i);
        }
        return (
          (0, f.useEffect)(
            function () {
              t && r && t(r);
            },
            [t, r],
          ),
          (0, f.useEffect)(
            function () {
              var t = xn(e);
              t !== r && o(t);
            },
            [e, r],
          ),
          r
        );
      }
      function Rn(e) {
        var t,
          n,
          r,
          o,
          i,
          a = e.enabled,
          s = e.enableEvents,
          l = e.placement,
          c = e.flip,
          u = e.offset,
          f = e.fixed,
          d = e.containerPadding,
          h = e.arrowElement,
          p = e.popperConfig,
          m = void 0 === p ? {} : p,
          v = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(m.modifiers);
        return (0, y.A)({}, m, {
          placement: l,
          enabled: a,
          strategy: f ? "fixed" : m.strategy,
          modifiers:
            ((i = (0, y.A)({}, v, {
              eventListeners: { enabled: s },
              preventOverflow: (0, y.A)({}, v.preventOverflow, {
                options: d
                  ? (0, y.A)(
                      { padding: d },
                      null == (t = v.preventOverflow) ? void 0 : t.options,
                    )
                  : null == (n = v.preventOverflow)
                    ? void 0
                    : n.options,
              }),
              offset: {
                options: (0, y.A)(
                  { offset: u },
                  null == (r = v.offset) ? void 0 : r.options,
                ),
              },
              arrow: (0, y.A)({}, v.arrow, {
                enabled: !!h,
                options: (0, y.A)(
                  {},
                  null == (o = v.arrow) ? void 0 : o.options,
                  { element: h },
                ),
              }),
              flip: (0, y.A)({ enabled: !!c }, v.flip),
            })),
            void 0 === i && (i = {}),
            Array.isArray(i)
              ? i
              : Object.keys(i).map(function (e) {
                  return (i[e].name = e), i[e];
                })),
        });
      }
      var Cn = f.forwardRef(function (e, t) {
        var n = e.flip,
          r = e.offset,
          o = e.placement,
          i = e.containerPadding,
          a = void 0 === i ? 5 : i,
          s = e.popperConfig,
          l = void 0 === s ? {} : s,
          c = e.transition,
          u = Ye(),
          d = u[0],
          h = u[1],
          p = Ye(),
          m = p[0],
          v = p[1],
          b = qe(h, t),
          w = Mn(e.container),
          E = Mn(e.target),
          A = (0, f.useState)(!e.show),
          D = A[0],
          S = A[1],
          k = hn(
            E,
            d,
            Rn({
              placement: o,
              enableEvents: !!e.show,
              containerPadding: a || 5,
              flip: n,
              offset: r,
              arrowElement: m,
              popperConfig: l,
            }),
          ),
          _ = k.styles,
          O = k.attributes,
          x = (0, g.A)(k, ["styles", "attributes"]);
        e.show ? D && S(!1) : e.transition || D || S(!0);
        var M = e.show || (c && !D);
        if (
          (On(d, e.onHide, {
            disabled: !e.rootClose || e.rootCloseDisabled,
            clickTrigger: e.rootCloseEvent,
          }),
          !M)
        )
          return null;
        var R = e.children(
          (0, y.A)({}, x, {
            show: !!e.show,
            props: (0, y.A)({}, O.popper, { style: _.popper, ref: b }),
            arrowProps: (0, y.A)({}, O.arrow, { style: _.arrow, ref: v }),
          }),
        );
        if (c) {
          var C = e.onExit,
            T = e.onExiting,
            P = e.onEnter,
            N = e.onEntering,
            L = e.onEntered;
          R = f.createElement(
            c,
            {
              in: e.show,
              appear: !0,
              onExit: C,
              onExiting: T,
              onExited: function () {
                S(!0), e.onExited && e.onExited.apply(e, arguments);
              },
              onEnter: P,
              onEntering: N,
              onEntered: L,
            },
            R,
          );
        }
        return w ? Ue.createPortal(R, w) : null;
      });
      (Cn.displayName = "Overlay"),
        (Cn.propTypes = {
          show: _().bool,
          placement: _().oneOf(rt),
          target: _().any,
          container: _().any,
          flip: _().bool,
          children: _().func.isRequired,
          containerPadding: _().number,
          popperConfig: _().object,
          rootClose: _().bool,
          rootCloseEvent: _().oneOf(["click", "mousedown"]),
          rootCloseDisabled: _().bool,
          onHide: function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o;
            return e.rootClose
              ? (o = _().func).isRequired.apply(o, [e].concat(n))
              : _().func.apply(_(), [e].concat(n));
          },
          transition: _().elementType,
          onEnter: _().func,
          onEntering: _().func,
          onEntered: _().func,
          onExit: _().func,
          onExiting: _().func,
          onExited: _().func,
        });
      const Tn = Cn;
      var Pn = n(13964);
      const Nn = function (e, t) {
        return (0, Pn.A)(e, t);
      };
      function Ln(e, t) {
        var n = xe(e);
        return n ? n.innerHeight : t ? e.clientHeight : Te(e).height;
      }
      var zn,
        jn = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function In(e, t) {
        if (!zn) {
          var n = document.body,
            r =
              n.matches ||
              n.matchesSelector ||
              n.webkitMatchesSelector ||
              n.mozMatchesSelector ||
              n.msMatchesSelector;
          zn = function (e, t) {
            return r.call(e, t);
          };
        }
        return zn(e, t);
      }
      function Fn(e, t, n) {
        e.closest && !n && e.closest(t);
        var r = e;
        do {
          if (In(r, t)) return r;
          r = r.parentElement;
        } while (r && r !== n && r.nodeType === document.ELEMENT_NODE);
        return null;
      }
      const Wn = function (e, t, n, r) {
        for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
          if (t(e[i], i, e)) return i;
        return -1;
      };
      var Hn = n(17267),
        Un = Math.max;
      const Yn = function (e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var o = null == n ? 0 : ve(n);
        return o < 0 && (o = Un(r + o, 0)), Wn(e, (0, Hn.A)(t, 3), o);
      };
      var Bn = Math.ceil,
        qn = Math.max;
      const Kn = function (e, t, n, r) {
        for (var o = -1, i = qn(Bn((t - e) / (n || 1)), 0), a = Array(i); i--; )
          (a[r ? i : ++o] = e), (e += n);
        return a;
      };
      const Vn = function (e) {
        return function (t, n, r) {
          return (
            r && "number" != typeof r && (0, de.A)(t, n, r) && (n = r = void 0),
            (t = me(t)),
            void 0 === n ? ((n = t), (t = 0)) : (n = me(n)),
            (r = void 0 === r ? (t < n ? 1 : -1) : me(r)),
            Kn(t, n, r, e)
          );
        };
      };
      const $n = Vn();
      var Gn =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function Xn(e, t) {
        return e === t || !(!Gn(e) || !Gn(t));
      }
      function Zn(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (!Xn(e[n], t[n])) return !1;
        return !0;
      }
      function Qn(e, t) {
        void 0 === t && (t = Zn);
        var n = null;
        function r() {
          for (var r = [], o = 0; o < arguments.length; o++)
            r[o] = arguments[o];
          if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
          var i = e.apply(this, r);
          return (n = { lastResult: i, lastArgs: r, lastThis: this }), i;
        }
        return (
          (r.clear = function () {
            n = null;
          }),
          r
        );
      }
      var Jn = n(59913),
        er = n(17488),
        tr = n(35953),
        nr = n(47546),
        rr = n(27761),
        or = tr.A ? tr.A.isConcatSpreadable : void 0;
      const ir = function (e) {
        return (0, rr.A)(e) || (0, nr.A)(e) || !!(or && e && e[or]);
      };
      const ar = function e(t, n, r, o, i) {
        var a = -1,
          s = t.length;
        for (r || (r = ir), i || (i = []); ++a < s; ) {
          var l = t[a];
          n > 0 && r(l)
            ? n > 1
              ? e(l, n - 1, r, o, i)
              : (0, er.A)(i, l)
            : o || (i[i.length] = l);
        }
        return i;
      };
      var sr = n(4516),
        lr = n(78350),
        cr = n(64600);
      const ur = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
      var fr = n(93365),
        dr = n(73914);
      const hr = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            r = null === e,
            o = e == e,
            i = (0, dr.A)(e),
            a = void 0 !== t,
            s = null === t,
            l = t == t,
            c = (0, dr.A)(t);
          if (
            (!s && !c && !i && e > t) ||
            (i && a && l && !s && !c) ||
            (r && a && l) ||
            (!n && l) ||
            !o
          )
            return 1;
          if (
            (!r && !i && !c && e < t) ||
            (c && n && o && !r && !i) ||
            (s && n && o) ||
            (!a && o) ||
            !l
          )
            return -1;
        }
        return 0;
      };
      const pr = function (e, t, n) {
        for (
          var r = -1,
            o = e.criteria,
            i = t.criteria,
            a = o.length,
            s = n.length;
          ++r < a;
        ) {
          var l = hr(o[r], i[r]);
          if (l) return r >= s ? l : l * ("desc" == n[r] ? -1 : 1);
        }
        return e.index - t.index;
      };
      var mr = n(41040);
      const vr = function (e, t, n) {
        t = t.length
          ? (0, sr.A)(t, function (e) {
              return (0, rr.A)(e)
                ? function (t) {
                    return (0, lr.A)(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [mr.A];
        var r = -1;
        t = (0, sr.A)(t, (0, fr.A)(Hn.A));
        var o = (0, cr.A)(e, function (e, n, o) {
          return {
            criteria: (0, sr.A)(t, function (t) {
              return t(e);
            }),
            index: ++r,
            value: e,
          };
        });
        return ur(o, function (e, t) {
          return pr(e, t, n);
        });
      };
      var gr = n(83270);
      const yr = (0, gr.A)(function (e, t) {
        if (null == e) return [];
        var n = t.length;
        return (
          n > 1 && (0, de.A)(e, t[0], t[1])
            ? (t = [])
            : n > 2 && (0, de.A)(t[0], t[1], t[2]) && (t = [t[0]]),
          vr(e, ar(t, 1), [])
        );
      });
      var br;
      function wr(e) {
        if (((!br && 0 !== br) || e) && Le) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (br = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return br;
      }
      function Er(e, t) {
        var n = xe(e);
        return n ? n.innerWidth : t ? e.clientWidth : Te(e).width;
      }
      var Ar = n(87537),
        Dr = n(76805),
        Sr = n(78296),
        kr = n(79474);
      function _r(e) {
        return (0, Ar.A)(e) || (0, Dr.A)(e) || (0, Sr.A)(e) || (0, kr.A)();
      }
      var Or = n(39234),
        xr = n(16673),
        Mr = n(9175),
        Rr = n(13217),
        Cr = n(99763),
        Tr = n(84207),
        Pr = n(74603);
      const Nr = function (e, t) {
        return e && (0, Tr.A)(t, (0, Pr.A)(t), e);
      };
      var Lr = n(70158);
      const zr = function (e, t) {
        return e && (0, Tr.A)(t, (0, Lr.A)(t), e);
      };
      var jr = n(27066),
        Ir = n(80335),
        Fr = n(25606);
      const Wr = function (e, t) {
        return (0, Tr.A)(e, (0, Fr.A)(e), t);
      };
      var Hr = n(57695),
        Ur = n(72097);
      const Yr = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; )
              (0, er.A)(t, (0, Fr.A)(e)), (e = (0, Hr.A)(e));
            return t;
          }
        : Ur.A;
      const Br = function (e, t) {
        return (0, Tr.A)(e, Yr(e), t);
      };
      var qr = n(81218),
        Kr = n(80647);
      const Vr = function (e) {
        return (0, Kr.A)(e, Lr.A, Yr);
      };
      var $r = n(14645),
        Gr = Object.prototype.hasOwnProperty;
      const Xr = function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            Gr.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
      var Zr = n(18277);
      const Qr = function (e, t) {
        var n = t ? (0, Zr.A)(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
      var Jr = /\w*$/;
      const eo = function (e) {
        var t = new e.constructor(e.source, Jr.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var to = tr.A ? tr.A.prototype : void 0,
        no = to ? to.valueOf : void 0;
      const ro = function (e) {
        return no ? Object(no.call(e)) : {};
      };
      var oo = n(12649);
      const io = function (e, t, n) {
        var r = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return (0, Zr.A)(e);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+e);
          case "[object DataView]":
            return Qr(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, oo.A)(e, n);
          case "[object Map]":
          case "[object Set]":
            return new r();
          case "[object Number]":
          case "[object String]":
            return new r(e);
          case "[object RegExp]":
            return eo(e);
          case "[object Symbol]":
            return ro(e);
        }
      };
      var ao = n(43577),
        so = n(6314),
        lo = n(83658);
      const co = function (e) {
        return (0, lo.A)(e) && "[object Map]" == (0, $r.A)(e);
      };
      var uo = n(23785),
        fo = uo.A && uo.A.isMap;
      const ho = fo ? (0, fr.A)(fo) : co;
      var po = n(35181);
      const mo = function (e) {
        return (0, lo.A)(e) && "[object Set]" == (0, $r.A)(e);
      };
      var vo = uo.A && uo.A.isSet;
      const go = vo ? (0, fr.A)(vo) : mo;
      var yo = "[object Arguments]",
        bo = "[object Function]",
        wo = "[object Object]",
        Eo = {};
      (Eo[yo] =
        Eo["[object Array]"] =
        Eo["[object ArrayBuffer]"] =
        Eo["[object DataView]"] =
        Eo["[object Boolean]"] =
        Eo["[object Date]"] =
        Eo["[object Float32Array]"] =
        Eo["[object Float64Array]"] =
        Eo["[object Int8Array]"] =
        Eo["[object Int16Array]"] =
        Eo["[object Int32Array]"] =
        Eo["[object Map]"] =
        Eo["[object Number]"] =
        Eo[wo] =
        Eo["[object RegExp]"] =
        Eo["[object Set]"] =
        Eo["[object String]"] =
        Eo["[object Symbol]"] =
        Eo["[object Uint8Array]"] =
        Eo["[object Uint8ClampedArray]"] =
        Eo["[object Uint16Array]"] =
        Eo["[object Uint32Array]"] =
          !0),
        (Eo["[object Error]"] = Eo[bo] = Eo["[object WeakMap]"] = !1);
      const Ao = function e(t, n, r, o, i, a) {
        var s,
          l = 1 & n,
          c = 2 & n,
          u = 4 & n;
        if ((r && (s = i ? r(t, o, i, a) : r(t)), void 0 !== s)) return s;
        if (!(0, po.A)(t)) return t;
        var f = (0, rr.A)(t);
        if (f) {
          if (((s = Xr(t)), !l)) return (0, Ir.A)(t, s);
        } else {
          var d = (0, $r.A)(t),
            h = d == bo || "[object GeneratorFunction]" == d;
          if ((0, so.A)(t)) return (0, jr.A)(t, l);
          if (d == wo || d == yo || (h && !i)) {
            if (((s = c || h ? {} : (0, ao.A)(t)), !l))
              return c ? Br(t, zr(s, t)) : Wr(t, Nr(s, t));
          } else {
            if (!Eo[d]) return i ? t : {};
            s = io(t, d, l);
          }
        }
        a || (a = new Mr.A());
        var p = a.get(t);
        if (p) return p;
        a.set(t, s),
          go(t)
            ? t.forEach(function (o) {
                s.add(e(o, n, r, o, t, a));
              })
            : ho(t) &&
              t.forEach(function (o, i) {
                s.set(i, e(o, n, r, i, t, a));
              });
        var m = u ? (c ? Vr : qr.A) : c ? Lr.A : Pr.A,
          v = f ? void 0 : m(t);
        return (
          (0, Rr.A)(v || t, function (o, i) {
            v && (o = t[(i = o)]), (0, Cr.A)(s, i, e(o, n, r, i, t, a));
          }),
          s
        );
      };
      var Do = n(1931);
      const So = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
      const ko = function (e, t) {
        return t.length < 2 ? e : (0, lr.A)(e, fe(t, 0, -1));
      };
      var _o = n(5269);
      const Oo = function (e, t) {
        return (
          (t = (0, Do.A)(t, e)),
          null == (e = ko(e, t)) || delete e[(0, _o.A)(So(t))]
        );
      };
      var xo = n(77011);
      const Mo = function (e) {
        return (0, xo.A)(e) ? void 0 : e;
      };
      const Ro = function (e) {
        return (null == e ? 0 : e.length) ? ar(e, 1) : [];
      };
      var Co = n(75702),
        To = n(99660);
      const Po = (function (e) {
        return (0, To.A)((0, Co.A)(e, void 0, Ro), e + "");
      })(function (e, t) {
        var n = {};
        if (null == e) return n;
        var r = !1;
        (t = (0, sr.A)(t, function (t) {
          return (t = (0, Do.A)(t, e)), r || (r = t.length > 1), t;
        })),
          (0, Tr.A)(e, Vr(e), n),
          r && (n = Ao(n, 7, Mo));
        for (var o = t.length; o--; ) Oo(n, t[o]);
        return n;
      });
      var No = n(58760),
        Lo = Object.prototype,
        zo = Lo.hasOwnProperty;
      const jo = (0, gr.A)(function (e, t) {
        e = Object(e);
        var n = -1,
          r = t.length,
          o = r > 2 ? t[2] : void 0;
        for (o && (0, de.A)(t[0], t[1], o) && (r = 1); ++n < r; )
          for (
            var i = t[n], a = (0, Lr.A)(i), s = -1, l = a.length;
            ++s < l;
          ) {
            var c = a[s],
              u = e[c];
            (void 0 === u || ((0, No.A)(u, Lo[c]) && !zo.call(e, c))) &&
              (e[c] = i[c]);
          }
        return e;
      });
      var Io = n(5536),
        Fo = n(25665),
        Wo = n(30186),
        Ho = n(48693);
      const Uo = function (e, t, n) {
        var r = (0, rr.A)(e),
          o = r || (0, so.A)(e) || (0, Ho.A)(e);
        if (((t = (0, Hn.A)(t, 4)), null == n)) {
          var i = e && e.constructor;
          n = o
            ? r
              ? new i()
              : []
            : (0, po.A)(e) && (0, Wo.A)(i)
              ? (0, Io.A)((0, Hr.A)(e))
              : {};
        }
        return (
          (o ? Rr.A : Fo.A)(e, function (e, r, o) {
            return t(n, e, r, o);
          }),
          n
        );
      };
      var Yo = n(63376);
      const Bo = function (e, t) {
        var n = {};
        return (
          (t = (0, Hn.A)(t, 3)),
          (0, Fo.A)(e, function (e, r, o) {
            (0, Yo.A)(n, r, t(e, r, o));
          }),
          n
        );
      };
      n(22586), n(20237), n(83632), n(43334), n(39920), n(4042), n(14240);
      function qo(e) {
        return e.children;
      }
      var Ko = "PREV",
        Vo = "NEXT",
        $o = "TODAY",
        Go = "DATE",
        Xo = {
          MONTH: "month",
          WEEK: "week",
          WORK_WEEK: "work_week",
          DAY: "day",
          AGENDA: "agenda",
        },
        Zo = Object.keys(Xo).map(function (e) {
          return Xo[e];
        });
      function Qo(e, t) {
        e && e.apply(null, [].concat(t));
      }
      _().oneOfType([_().string, _().func]),
        _().any,
        _().func,
        _().oneOfType([
          _().arrayOf(_().oneOf(Zo)),
          _().objectOf(function (e, t) {
            if (-1 !== Zo.indexOf(t) && "boolean" == typeof e[t]) return null;
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
              o < n;
              o++
            )
              r[o - 2] = arguments[o];
            return _().elementType.apply(_(), [e, t].concat(r));
          }),
        ]),
        _().oneOfType([_().oneOf(["overlap", "no-overlap"]), _().func]);
      var Jo = { seconds: 1e3, minutes: 6e4, hours: 36e5, day: 864e5 };
      function ei(e, t) {
        var n = U(e, "month");
        return U(n, "week", t.startOfWeek());
      }
      function ti(e, t) {
        var n = Y(e, "month");
        return Y(n, "week", t.startOfWeek());
      }
      function ni(e, t) {
        for (var n = ei(e, t), r = ti(e, t), o = []; G(n, r, "day"); )
          o.push(n), (n = W(n, 1, "day"));
        return o;
      }
      function ri(e, t) {
        var n = U(e, t);
        return B(n, e) ? n : W(n, 1, t);
      }
      function oi(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            r = e,
            o = [];
          G(r, t, n);
        )
          o.push(r), (r = W(r, 1, n));
        return o;
      }
      function ii(e, t) {
        return null == t && null == e
          ? null
          : (null == t && (t = new Date()),
            null == e && (e = new Date()),
            (e = U(e, "day")),
            (e = ne(e, ne(t))),
            (e = te(e, te(t))),
            (e = ee(e, ee(t))),
            J(e, J(t)));
      }
      function ai(e) {
        return 0 === ne(e) && 0 === te(e) && 0 === ee(e) && 0 === J(e);
      }
      function si(e, t, n) {
        return n && "milliseconds" !== n
          ? Math.round(Math.abs(+U(e, n) / Jo[n] - +U(t, n) / Jo[n]))
          : Math.abs(+e - +t);
      }
      var li = _().oneOfType([_().string, _().func]);
      function ci(e, t, n, r, o) {
        var i = "function" == typeof r ? r(n, o, e) : t.call(e, n, r, o);
        return (
          h()(
            null == i || "string" == typeof i,
            "`localizer format(..)` must return a string, null, or undefined",
          ),
          i
        );
      }
      function ui(e, t, n) {
        return new Date(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          0,
          t + n,
          0,
          0,
        );
      }
      function fi(e, t) {
        return e.getTimezoneOffset() - t.getTimezoneOffset();
      }
      function di(e, t) {
        return si(e, t, "minutes") + fi(e, t);
      }
      function hi(e) {
        var t = U(e, "day");
        return si(t, e, "minutes") + fi(t, e);
      }
      function pi(e, t) {
        return $(e, t, "day");
      }
      function mi(e, t, n) {
        return B(e, t, "minutes") ? V(t, n, "minutes") : K(t, n, "minutes");
      }
      function vi(e) {
        var t = e.evtA,
          n = t.start,
          r = t.end,
          o = t.allDay,
          i = e.evtB,
          a = i.start,
          s = i.end,
          l = i.allDay,
          c = +U(n, "day") - +U(a, "day"),
          u = si(n, ri(r, "day"), "day"),
          f = si(a, ri(s, "day"), "day");
        return (
          c ||
          Math.max(f, 1) - Math.max(u, 1) ||
          !!l - !!o ||
          +n - +a ||
          +r - +s
        );
      }
      function gi(e) {
        var t = e.event,
          n = t.start,
          r = t.end,
          o = e.range,
          i = o.start,
          a = o.end,
          s = U(n, "day"),
          l = G(s, a, "day"),
          c = q(s, r, "minutes") ? K(r, i, "minutes") : V(r, i, "minutes");
        return l && c;
      }
      function yi(e, t) {
        return B(e, t, "day");
      }
      function bi(e, t) {
        return ai(e) && ai(t);
      }
      var wi = (0, s.A)(function e(t) {
        var n = this;
        (0, a.A)(this, e),
          h()(
            "function" == typeof t.format,
            "date localizer `format(..)` must be a function",
          ),
          h()(
            "function" == typeof t.firstOfWeek,
            "date localizer `firstOfWeek(..)` must be a function",
          ),
          (this.propType = t.propType || li),
          (this.formats = t.formats),
          (this.format = function () {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return ci.apply(void 0, [n, t.format].concat(r));
          }),
          (this.startOfWeek = t.firstOfWeek),
          (this.merge = t.merge || ii),
          (this.inRange = t.inRange || Q),
          (this.lt = t.lt || $),
          (this.lte = t.lte || G),
          (this.gt = t.gt || K),
          (this.gte = t.gte || V),
          (this.eq = t.eq || B),
          (this.neq = t.neq || q),
          (this.startOf = t.startOf || U),
          (this.endOf = t.endOf || Y),
          (this.add = t.add || W),
          (this.range = t.range || oi),
          (this.diff = t.diff || si),
          (this.ceil = t.ceil || ri),
          (this.min = t.min || X),
          (this.max = t.max || Z),
          (this.minutes = t.minutes || te),
          (this.firstVisibleDay = t.firstVisibleDay || ei),
          (this.lastVisibleDay = t.lastVisibleDay || ti),
          (this.visibleDays = t.visibleDays || ni),
          (this.getSlotDate = t.getSlotDate || ui),
          (this.getTimezoneOffset =
            t.getTimezoneOffset ||
            function (e) {
              return e.getTimezoneOffset();
            }),
          (this.getDstOffset = t.getDstOffset || fi),
          (this.getTotalMin = t.getTotalMin || di),
          (this.getMinutesFromMidnight = t.getMinutesFromMidnight || hi),
          (this.continuesPrior = t.continuesPrior || pi),
          (this.continuesAfter = t.continuesAfter || mi),
          (this.sortEvents = t.sortEvents || vi),
          (this.inEventRange = t.inEventRange || gi),
          (this.isSameDate = t.isSameDate || yi),
          (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || bi),
          (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
      });
      function Ei(e, t, n, o) {
        var i = (0, r.A)((0, r.A)({}, e.formats), n);
        return (0, r.A)(
          (0, r.A)({}, e),
          {},
          {
            messages: o,
            startOfWeek: function () {
              return e.startOfWeek(t);
            },
            format: function (n, r) {
              return e.format(n, i[r] || r, t);
            },
          },
        );
      }
      var Ai = {
        date: "Date",
        time: "Time",
        event: "Event",
        allDay: "All Day",
        week: "Week",
        work_week: "Work Week",
        day: "Day",
        month: "Month",
        previous: "Back",
        next: "Next",
        yesterday: "Yesterday",
        tomorrow: "Tomorrow",
        today: "Today",
        agenda: "Agenda",
        noEventsInRange: "There are no events in this range.",
        showMore: function (e) {
          return "+".concat(e, " more");
        },
      };
      var Di = [
          "style",
          "className",
          "event",
          "selected",
          "isAllDay",
          "onSelect",
          "onDoubleClick",
          "onKeyPress",
          "localizer",
          "continuesPrior",
          "continuesAfter",
          "accessors",
          "getters",
          "children",
          "components",
          "slotStart",
          "slotEnd",
        ],
        Si = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.style,
                    n = e.className,
                    i = e.event,
                    a = e.selected,
                    s = e.isAllDay,
                    l = e.onSelect,
                    c = e.onDoubleClick,
                    u = e.onKeyPress,
                    d = e.localizer,
                    h = e.continuesPrior,
                    p = e.continuesAfter,
                    m = e.accessors,
                    v = e.getters,
                    g = e.children,
                    y = e.components,
                    b = y.event,
                    w = y.eventWrapper,
                    E = e.slotStart,
                    A = e.slotEnd,
                    D = (0, o.A)(e, Di);
                  delete D.resizable;
                  var k = m.title(i),
                    _ = m.tooltip(i),
                    O = m.end(i),
                    x = m.start(i),
                    M = m.allDay(i),
                    R = s || M || d.diff(x, d.ceil(O, "day"), "day") > 1,
                    C = v.eventProp(i, x, O, a),
                    T = f.createElement(
                      "div",
                      { className: "rbc-event-content", title: _ || void 0 },
                      b
                        ? f.createElement(b, {
                            event: i,
                            continuesPrior: h,
                            continuesAfter: p,
                            title: k,
                            isAllDay: M,
                            localizer: d,
                            slotStart: E,
                            slotEnd: A,
                          })
                        : k,
                    );
                  return f.createElement(
                    w,
                    Object.assign({}, this.props, { type: "date" }),
                    f.createElement(
                      "div",
                      Object.assign({}, D, {
                        tabIndex: 0,
                        style: (0, r.A)((0, r.A)({}, C.style), t),
                        className: S("rbc-event", n, C.className, {
                          "rbc-selected": a,
                          "rbc-event-allday": R,
                          "rbc-event-continues-prior": h,
                          "rbc-event-continues-after": p,
                        }),
                        onClick: function (e) {
                          return l && l(i, e);
                        },
                        onDoubleClick: function (e) {
                          return c && c(i, e);
                        },
                        onKeyPress: function (e) {
                          return u && u(i, e);
                        },
                      }),
                      "function" == typeof g ? g(T) : T,
                    ),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function ki(e, t) {
        return !(!e || null == t) && Nn(e, t);
      }
      function _i(e, t) {
        return (e.right - e.left) / t;
      }
      function Oi(e, t, n, r) {
        var o = _i(e, r);
        return n
          ? r - 1 - Math.floor((t - e.left) / o)
          : Math.floor((t - e.left) / o);
      }
      function xi(e) {
        var t,
          n,
          r,
          o = e.containerRef,
          i = e.accessors,
          a = e.getters,
          s = e.selected,
          l = e.components,
          c = e.localizer,
          u = e.position,
          d = e.show,
          h = e.events,
          p = e.slotStart,
          m = e.slotEnd,
          v = e.onSelect,
          g = e.onDoubleClick,
          y = e.onKeyPress,
          b = e.handleDragStart,
          w = e.popperRef,
          E = e.target,
          A = e.offset;
        (n = (t = { ref: w, callback: d }).ref),
          (r = t.callback),
          (0, f.useEffect)(
            function () {
              var e = function (e) {
                n.current && !n.current.contains(e.target) && r();
              };
              return (
                document.addEventListener("mousedown", e),
                function () {
                  document.removeEventListener("mousedown", e);
                }
              );
            },
            [n, r],
          ),
          (0, f.useLayoutEffect)(
            function () {
              var e = (function (e) {
                  var t = e.target,
                    n = e.offset,
                    r = e.container,
                    o = e.box,
                    i = Te(t),
                    a = i.top,
                    s = i.left,
                    l = i.width,
                    c = i.height,
                    u = Te(r),
                    f = u.top,
                    d = u.left,
                    h = u.width,
                    p = u.height,
                    m = Te(o),
                    v = m.width,
                    g = m.height,
                    y = f + p,
                    b = d + h,
                    w = a + g,
                    E = s + v,
                    A = n.x,
                    D = n.y;
                  return {
                    topOffset: w > y ? a - g - D : a + D + c,
                    leftOffset: E > b ? s + A - v + l : s + A,
                  };
                })({
                  target: E,
                  offset: A,
                  container: o.current,
                  box: w.current,
                }),
                t = e.topOffset,
                n = e.leftOffset;
              (w.current.style.top = "".concat(t, "px")),
                (w.current.style.left = "".concat(n, "px"));
            },
            [A.x, A.y, E],
          );
        var D = u.width,
          S = { minWidth: D + D / 2 };
        return f.createElement(
          "div",
          { style: S, className: "rbc-overlay", ref: w },
          f.createElement(
            "div",
            { className: "rbc-overlay-header" },
            c.format(p, "dayHeaderFormat"),
          ),
          h.map(function (e, t) {
            return f.createElement(Si, {
              key: t,
              type: "popup",
              localizer: c,
              event: e,
              getters: a,
              onSelect: v,
              accessors: i,
              components: l,
              onDoubleClick: g,
              onKeyPress: y,
              continuesPrior: c.lt(i.end(e), p, "day"),
              continuesAfter: c.gte(i.start(e), m, "day"),
              slotStart: p,
              slotEnd: m,
              selected: ki(e, s),
              draggable: !0,
              onDragStart: function () {
                return b(e);
              },
              onDragEnd: function () {
                return d();
              },
            });
          }),
        );
      }
      var Mi = f.forwardRef(function (e, t) {
        return f.createElement(xi, Object.assign({}, e, { popperRef: t }));
      });
      function Ri(e) {
        var t = e.containerRef,
          n = e.popupOffset,
          r = void 0 === n ? 5 : n,
          o = e.overlay,
          i = e.accessors,
          a = e.localizer,
          s = e.components,
          l = e.getters,
          c = e.selected,
          u = e.handleSelectEvent,
          d = e.handleDoubleClickEvent,
          h = e.handleKeyPressEvent,
          p = e.handleDragStart,
          m = e.onHide,
          v = e.overlayDisplay,
          g = (0, f.useRef)(null);
        if (!o.position) return null;
        var y = r;
        isNaN(r) || (y = { x: r, y: r });
        var b = o.position,
          w = o.events,
          E = o.date,
          A = o.end;
        return f.createElement(
          Tn,
          {
            rootClose: !0,
            flip: !0,
            show: !0,
            placement: "bottom",
            onHide: m,
            target: o.target,
          },
          function (e) {
            var n = e.props;
            return f.createElement(
              Mi,
              Object.assign({}, n, {
                containerRef: t,
                ref: g,
                target: o.target,
                offset: y,
                accessors: i,
                getters: l,
                selected: c,
                components: s,
                localizer: a,
                position: b,
                show: v,
                events: w,
                slotStart: E,
                slotEnd: A,
                onSelect: u,
                onDoubleClick: d,
                onKeyPress: h,
                handleDragStart: p,
              }),
            );
          },
        );
      }
      Mi.propTypes = {
        accessors: _().object.isRequired,
        getters: _().object.isRequired,
        selected: _().object,
        components: _().object.isRequired,
        localizer: _().object.isRequired,
        position: _().object.isRequired,
        show: _().func.isRequired,
        events: _().array.isRequired,
        slotStart: _().instanceOf(Date).isRequired,
        slotEnd: _().instanceOf(Date),
        onSelect: _().func,
        onDoubleClick: _().func,
        onKeyPress: _().func,
        handleDragStart: _().func,
        style: _().object,
        offset: _().shape({ x: _().number, y: _().number }),
      };
      var Ci = f.forwardRef(function (e, t) {
        return f.createElement(Ri, Object.assign({}, e, { containerRef: t }));
      });
      function Ti(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : document;
        return bn(n, e, t, { passive: !1 });
      }
      function Pi(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Fn(document.elementFromPoint(n, r), ".rbc-event", e);
        })(e, t);
      }
      function Ni(e, t) {
        return !!(function (e, t) {
          var n = t.clientX,
            r = t.clientY;
          return Fn(document.elementFromPoint(n, r), ".rbc-show-more", e);
        })(e, t);
      }
      function Li(e) {
        var t = e;
        return (
          e.touches && e.touches.length && (t = e.touches[0]),
          {
            clientX: t.clientX,
            clientY: t.clientY,
            pageX: t.pageX,
            pageY: t.pageY,
          }
        );
      }
      Ci.propTypes = {
        popupOffset: _().oneOfType([
          _().number,
          _().shape({ x: _().number, y: _().number }),
        ]),
        overlay: _().shape({
          position: _().object,
          events: _().array,
          date: _().instanceOf(Date),
          end: _().instanceOf(Date),
        }),
        accessors: _().object.isRequired,
        localizer: _().object.isRequired,
        components: _().object.isRequired,
        getters: _().object.isRequired,
        selected: _().object,
        handleSelectEvent: _().func,
        handleDoubleClickEvent: _().func,
        handleKeyPressEvent: _().func,
        handleDragStart: _().func,
        onHide: _().func,
        overlayDisplay: _().func,
      };
      var zi = (function () {
        function e(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.global,
            o = void 0 !== r && r,
            i = n.longPressThreshold,
            s = void 0 === i ? 250 : i,
            l = n.validContainers,
            c = void 0 === l ? [] : l;
          (0, a.A)(this, e),
            (this.isDetached = !1),
            (this.container = t),
            (this.globalMouse = !t || o),
            (this.longPressThreshold = s),
            (this.validContainers = c),
            (this._listeners = Object.create(null)),
            (this._handleInitialEvent = this._handleInitialEvent.bind(this)),
            (this._handleMoveEvent = this._handleMoveEvent.bind(this)),
            (this._handleTerminatingEvent =
              this._handleTerminatingEvent.bind(this)),
            (this._keyListener = this._keyListener.bind(this)),
            (this._dropFromOutsideListener =
              this._dropFromOutsideListener.bind(this)),
            (this._dragOverFromOutsideListener =
              this._dragOverFromOutsideListener.bind(this)),
            (this._removeTouchMoveWindowListener = Ti(
              "touchmove",
              function () {},
              window,
            )),
            (this._removeKeyDownListener = Ti("keydown", this._keyListener)),
            (this._removeKeyUpListener = Ti("keyup", this._keyListener)),
            (this._removeDropFromOutsideListener = Ti(
              "drop",
              this._dropFromOutsideListener,
            )),
            (this._removeDragOverFromOutsideListener = Ti(
              "dragover",
              this._dragOverFromOutsideListener,
            )),
            this._addInitialEventListener();
        }
        return (
          (0, s.A)(e, [
            {
              key: "on",
              value: function (e, t) {
                var n = this._listeners[e] || (this._listeners[e] = []);
                return (
                  n.push(t),
                  {
                    remove: function () {
                      var e = n.indexOf(t);
                      -1 !== e && n.splice(e, 1);
                    },
                  }
                );
              },
            },
            {
              key: "emit",
              value: function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                var o;
                return (
                  (this._listeners[e] || []).forEach(function (e) {
                    void 0 === o && (o = e.apply(void 0, n));
                  }),
                  o
                );
              },
            },
            {
              key: "teardown",
              value: function () {
                (this.isDetached = !0),
                  (this._listeners = Object.create(null)),
                  this._removeTouchMoveWindowListener &&
                    this._removeTouchMoveWindowListener(),
                  this._removeInitialEventListener &&
                    this._removeInitialEventListener(),
                  this._removeEndListener && this._removeEndListener(),
                  this._onEscListener && this._onEscListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._removeKeyUpListener && this._removeKeyUpListener(),
                  this._removeKeyDownListener && this._removeKeyDownListener(),
                  this._removeDropFromOutsideListener &&
                    this._removeDropFromOutsideListener(),
                  this._removeDragOverFromOutsideListener &&
                    this._removeDragOverFromOutsideListener();
              },
            },
            {
              key: "isSelected",
              value: function (e) {
                var t = this._selectRect;
                return !(!t || !this.selecting) && ji(t, Ii(e));
              },
            },
            {
              key: "filter",
              value: function (e) {
                return this._selectRect && this.selecting
                  ? e.filter(this.isSelected, this)
                  : [];
              },
            },
            {
              key: "_addLongPressListener",
              value: function (e, t) {
                var n = this,
                  r = null,
                  o = null,
                  i = null,
                  a = function (t) {
                    (r = setTimeout(function () {
                      l(), e(t);
                    }, n.longPressThreshold)),
                      (o = Ti("touchmove", function () {
                        return l();
                      })),
                      (i = Ti("touchend", function () {
                        return l();
                      }));
                  },
                  s = Ti("touchstart", a),
                  l = function () {
                    r && clearTimeout(r),
                      o && o(),
                      i && i(),
                      (r = null),
                      (o = null),
                      (i = null);
                  };
                return (
                  t && a(t),
                  function () {
                    l(), s();
                  }
                );
              },
            },
            {
              key: "_addInitialEventListener",
              value: function () {
                var e = this,
                  t = Ti("mousedown", function (t) {
                    e._removeInitialEventListener(),
                      e._handleInitialEvent(t),
                      (e._removeInitialEventListener = Ti(
                        "mousedown",
                        e._handleInitialEvent,
                      ));
                  }),
                  n = Ti("touchstart", function (t) {
                    e._removeInitialEventListener(),
                      (e._removeInitialEventListener = e._addLongPressListener(
                        e._handleInitialEvent,
                        t,
                      ));
                  });
                this._removeInitialEventListener = function () {
                  t(), n();
                };
              },
            },
            {
              key: "_dropFromOutsideListener",
              value: function (e) {
                var t = Li(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY;
                this.emit("dropFromOutside", {
                  x: n,
                  y: r,
                  clientX: o,
                  clientY: i,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_dragOverFromOutsideListener",
              value: function (e) {
                var t = Li(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY;
                this.emit("dragOverFromOutside", {
                  x: n,
                  y: r,
                  clientX: o,
                  clientY: i,
                }),
                  e.preventDefault();
              },
            },
            {
              key: "_handleInitialEvent",
              value: function (e) {
                if (!this.isDetached) {
                  var t,
                    n = Li(e),
                    r = n.clientX,
                    o = n.clientY,
                    a = n.pageX,
                    s = n.pageY,
                    l = this.container();
                  if (
                    3 !== e.which &&
                    2 !== e.button &&
                    ((u = r),
                    (f = o),
                    !(c = l) || Oe(c, document.elementFromPoint(u, f)))
                  ) {
                    var c, u, f;
                    if (!this.globalMouse && l && !Oe(l, e.target)) {
                      var d = (function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0;
                          "object" !== (0, i.A)(e) &&
                            (e = { top: e, left: e, right: e, bottom: e });
                          return e;
                        })(0),
                        h = d.top,
                        p = d.left,
                        m = d.bottom,
                        v = d.right;
                      if (
                        !ji(
                          {
                            top: (t = Ii(l)).top - h,
                            left: t.left - p,
                            bottom: t.bottom + m,
                            right: t.right + v,
                          },
                          { top: s, left: a },
                        )
                      )
                        return;
                    }
                    if (
                      !1 !==
                      this.emit(
                        "beforeSelect",
                        (this._initialEventData = {
                          isTouch: /^touch/.test(e.type),
                          x: a,
                          y: s,
                          clientX: r,
                          clientY: o,
                        }),
                      )
                    )
                      switch (e.type) {
                        case "mousedown":
                          (this._removeEndListener = Ti(
                            "mouseup",
                            this._handleTerminatingEvent,
                          )),
                            (this._onEscListener = Ti(
                              "keydown",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ti(
                              "mousemove",
                              this._handleMoveEvent,
                            ));
                          break;
                        case "touchstart":
                          this._handleMoveEvent(e),
                            (this._removeEndListener = Ti(
                              "touchend",
                              this._handleTerminatingEvent,
                            )),
                            (this._removeMoveListener = Ti(
                              "touchmove",
                              this._handleMoveEvent,
                            ));
                      }
                  }
                }
              },
            },
            {
              key: "_isWithinValidContainer",
              value: function (e) {
                var t = e.target,
                  n = this.validContainers;
                return (
                  !(n && n.length && t) ||
                  n.some(function (e) {
                    return !!t.closest(e);
                  })
                );
              },
            },
            {
              key: "_handleTerminatingEvent",
              value: function (e) {
                var t = Li(e),
                  n = t.pageX,
                  r = t.pageY;
                if (
                  ((this.selecting = !1),
                  this._removeEndListener && this._removeEndListener(),
                  this._removeMoveListener && this._removeMoveListener(),
                  this._initialEventData)
                ) {
                  var o = !this.container || Oe(this.container(), e.target),
                    i = this._isWithinValidContainer(e),
                    a = this._selectRect,
                    s = this.isClick(n, r);
                  return (
                    (this._initialEventData = null),
                    "Escape" !== e.key && i
                      ? s && o
                        ? this._handleClickEvent(e)
                        : s
                          ? this.emit("reset")
                          : this.emit("select", a)
                      : this.emit("reset")
                  );
                }
              },
            },
            {
              key: "_handleClickEvent",
              value: function (e) {
                var t = Li(e),
                  n = t.pageX,
                  r = t.pageY,
                  o = t.clientX,
                  i = t.clientY,
                  a = new Date().getTime();
                return this._lastClickData &&
                  a - this._lastClickData.timestamp < 250
                  ? ((this._lastClickData = null),
                    this.emit("doubleClick", {
                      x: n,
                      y: r,
                      clientX: o,
                      clientY: i,
                    }))
                  : ((this._lastClickData = { timestamp: a }),
                    this.emit("click", { x: n, y: r, clientX: o, clientY: i }));
              },
            },
            {
              key: "_handleMoveEvent",
              value: function (e) {
                if (null !== this._initialEventData && !this.isDetached) {
                  var t = this._initialEventData,
                    n = t.x,
                    r = t.y,
                    o = Li(e),
                    i = o.pageX,
                    a = o.pageY,
                    s = Math.abs(n - i),
                    l = Math.abs(r - a),
                    c = Math.min(i, n),
                    u = Math.min(a, r),
                    f = this.selecting;
                  (!this.isClick(i, a) || f || s || l) &&
                    ((this.selecting = !0),
                    (this._selectRect = {
                      top: u,
                      left: c,
                      x: i,
                      y: a,
                      right: c + s,
                      bottom: u + l,
                    }),
                    f || this.emit("selectStart", this._initialEventData),
                    this.isClick(i, a) ||
                      this.emit("selecting", this._selectRect),
                    e.preventDefault());
                }
              },
            },
            {
              key: "_keyListener",
              value: function (e) {
                this.ctrl = e.metaKey || e.ctrlKey;
              },
            },
            {
              key: "isClick",
              value: function (e, t) {
                var n = this._initialEventData,
                  r = n.x,
                  o = n.y;
                return (
                  !n.isTouch && Math.abs(e - r) <= 5 && Math.abs(t - o) <= 5
                );
              },
            },
          ]),
          e
        );
      })();
      function ji(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = Ii(e),
          o = r.top,
          i = r.left,
          a = r.right,
          s = void 0 === a ? i : a,
          l = r.bottom,
          c = void 0 === l ? o : l,
          u = Ii(t),
          f = u.top,
          d = u.left,
          h = u.right,
          p = void 0 === h ? d : h,
          m = u.bottom;
        return !(
          c - n < f ||
          o + n > (void 0 === m ? f : m) ||
          s - n < d ||
          i + n > p
        );
      }
      function Ii(e) {
        if (!e.getBoundingClientRect) return e;
        var t = e.getBoundingClientRect(),
          n = t.left + Fi("left"),
          r = t.top + Fi("top");
        return {
          top: r,
          left: n,
          right: (e.offsetWidth || 0) + n,
          bottom: (e.offsetHeight || 0) + r,
        };
      }
      function Fi(e) {
        return "left" === e
          ? window.pageXOffset || document.body.scrollLeft || 0
          : "top" === e
            ? window.pageYOffset || document.body.scrollTop || 0
            : void 0;
      }
      var Wi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n(e, r) {
            var o;
            return (
              (0, a.A)(this, n),
              ((o = t.call(this, e, r)).state = { selecting: !1 }),
              (o.containerRef = (0, f.createRef)()),
              o
            );
          }
          return (
            (0, s.A)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.selectable && this._selectable();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._teardownSelectable();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  !e.selectable && this.props.selectable && this._selectable(),
                    e.selectable &&
                      !this.props.selectable &&
                      this._teardownSelectable();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.range,
                    n = e.getNow,
                    r = e.getters,
                    o = e.date,
                    i = e.components.dateCellWrapper,
                    a = e.localizer,
                    s = this.state,
                    l = s.selecting,
                    c = s.startIdx,
                    u = s.endIdx,
                    d = n();
                  return f.createElement(
                    "div",
                    { className: "rbc-row-bg", ref: this.containerRef },
                    t.map(function (e, n) {
                      var s = l && n >= c && n <= u,
                        h = r.dayProp(e),
                        p = h.className,
                        m = h.style;
                      return f.createElement(
                        i,
                        { key: n, value: e, range: t },
                        f.createElement("div", {
                          style: m,
                          className: S(
                            "rbc-day-bg",
                            p,
                            s && "rbc-selected-cell",
                            a.isSameDate(e, d) && "rbc-today",
                            o && a.neq(o, e, "month") && "rbc-off-range-bg",
                          ),
                        }),
                      );
                    }),
                  );
                },
              },
              {
                key: "_selectable",
                value: function () {
                  var e = this,
                    t = this.containerRef.current,
                    n = (this._selector = new zi(this.props.container, {
                      longPressThreshold: this.props.longPressThreshold,
                    })),
                    o = function (n, r) {
                      if (!Pi(t, n) && !Ni(t, n)) {
                        var o = Ii(t),
                          i = e.props,
                          a = i.range,
                          s = i.rtl;
                        if (
                          ((c = o),
                          (f = (u = n).x),
                          (d = u.y) >= c.top &&
                            d <= c.bottom &&
                            f >= c.left &&
                            f <= c.right)
                        ) {
                          var l = Oi(o, n.x, s, a.length);
                          e._selectSlot({
                            startIdx: l,
                            endIdx: l,
                            action: r,
                            box: n,
                          });
                        }
                      }
                      var c, u, f, d;
                      (e._initial = {}), e.setState({ selecting: !1 });
                    };
                  n.on("selecting", function (r) {
                    var o = e.props,
                      i = o.range,
                      a = o.rtl,
                      s = -1,
                      l = -1;
                    if (
                      (e.state.selecting ||
                        (Qo(e.props.onSelectStart, [r]),
                        (e._initial = { x: r.x, y: r.y })),
                      n.isSelected(t))
                    ) {
                      var c = Ii(t),
                        u = (function (e, t, n, r, o) {
                          var i = -1,
                            a = -1,
                            s = r - 1,
                            l = _i(t, r),
                            c = Oi(t, n.x, o, r),
                            u = t.top < n.y && t.bottom > n.y,
                            f = t.top < e.y && t.bottom > e.y,
                            d = e.y > t.bottom,
                            h = t.top > e.y;
                          return (
                            n.top < t.top &&
                              n.bottom > t.bottom &&
                              ((i = 0), (a = s)),
                            u &&
                              (h
                                ? ((i = 0), (a = c))
                                : d && ((i = c), (a = s))),
                            f &&
                              ((i = a =
                                o
                                  ? s - Math.floor((e.x - t.left) / l)
                                  : Math.floor((e.x - t.left) / l)),
                              u
                                ? c < i
                                  ? (i = c)
                                  : (a = c)
                                : e.y < n.y
                                  ? (a = s)
                                  : (i = 0)),
                            { startIdx: i, endIdx: a }
                          );
                        })(e._initial, c, r, i.length, a);
                      (s = u.startIdx), (l = u.endIdx);
                    }
                    e.setState({ selecting: !0, startIdx: s, endIdx: l });
                  }),
                    n.on("beforeSelect", function (t) {
                      if ("ignoreEvents" === e.props.selectable)
                        return !Pi(e.containerRef.current, t);
                    }),
                    n.on("click", function (e) {
                      return o(e, "click");
                    }),
                    n.on("doubleClick", function (e) {
                      return o(e, "doubleClick");
                    }),
                    n.on("select", function (t) {
                      e._selectSlot(
                        (0, r.A)(
                          (0, r.A)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                        (e._initial = {}),
                        e.setState({ selecting: !1 }),
                        Qo(e.props.onSelectEnd, [e.state]);
                    });
                },
              },
              {
                key: "_teardownSelectable",
                value: function () {
                  this._selector &&
                    (this._selector.teardown(), (this._selector = null));
                },
              },
              {
                key: "_selectSlot",
                value: function (e) {
                  var t = e.endIdx,
                    n = e.startIdx,
                    r = e.action,
                    o = e.bounds,
                    i = e.box;
                  -1 !== t &&
                    -1 !== n &&
                    this.props.onSelectSlot &&
                    this.props.onSelectSlot({
                      start: n,
                      end: t,
                      action: r,
                      bounds: o,
                      box: i,
                      resourceId: this.props.resourceId,
                    });
                },
              },
            ]),
            n
          );
        })(f.Component),
        Hi =
          (_().object.isRequired,
          _().object,
          _().bool,
          _().object.isRequired,
          _().object.isRequired,
          _().object.isRequired,
          _().object.isRequired,
          _().func,
          _().func,
          _().func,
          { segments: [], selected: {} }),
        Ui = function (e, t) {
          var n = e.selected;
          e.isAllDay;
          var r = e.accessors,
            o = e.getters,
            i = e.onSelect,
            a = e.onDoubleClick,
            s = e.onKeyPress,
            l = e.localizer,
            c = e.slotMetrics,
            u = e.components,
            d = e.resizable,
            h = c.continuesPrior(t),
            p = c.continuesAfter(t);
          return f.createElement(Si, {
            event: t,
            getters: o,
            localizer: l,
            accessors: r,
            components: u,
            onSelect: i,
            onDoubleClick: a,
            onKeyPress: s,
            continuesPrior: h,
            continuesAfter: p,
            slotStart: c.first,
            slotEnd: c.last,
            selected: ki(t, n),
            resizable: d,
          });
        },
        Yi = function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : " ",
            o = (Math.abs(t) / e) * 100 + "%";
          return f.createElement(
            "div",
            {
              key: n,
              className: "rbc-row-segment",
              style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o },
            },
            r,
          );
        },
        Bi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.segments,
                    r = t.slotMetrics.slots,
                    o = t.className,
                    i = 1;
                  return f.createElement(
                    "div",
                    { className: S(o, "rbc-row") },
                    n.reduce(function (t, n, o) {
                      var a = n.event,
                        s = n.left,
                        l = n.right,
                        c = n.span,
                        u = "_lvl_" + o,
                        f = s - i,
                        d = Ui(e.props, a);
                      return (
                        f && t.push(Yi(r, f, "".concat(u, "_gap"))),
                        t.push(Yi(r, c, u, d)),
                        (i = l + 1),
                        t
                      );
                    }, []),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function qi(e) {
        var t = e.dateRange,
          n = e.unit,
          r = void 0 === n ? "day" : n,
          o = e.localizer;
        return { first: t[0], last: o.add(t[t.length - 1], 1, r) };
      }
      function Ki(e) {
        var t,
          n,
          r,
          o =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          i = [],
          a = [];
        for (t = 0; t < e.length; t++) {
          for (r = e[t], n = 0; n < i.length && $i(r, i[n]); n++);
          n >= o ? a.push(r) : (i[n] || (i[n] = [])).push(r);
        }
        for (t = 0; t < i.length; t++)
          i[t].sort(function (e, t) {
            return e.left - t.left;
          });
        return { levels: i, extra: a };
      }
      function Vi(e, t, n, r, o) {
        var i = { start: r.start(e), end: r.end(e) },
          a = { start: t, end: n };
        return o.inEventRange({ event: i, range: a });
      }
      function $i(e, t) {
        return t.some(function (t) {
          return t.left <= e.right && t.right >= e.left;
        });
      }
      function Gi(e, t, n, r) {
        var o = { start: n.start(e), end: n.end(e), allDay: n.allDay(e) },
          i = { start: n.start(t), end: n.end(t), allDay: n.allDay(t) };
        return r.sortEvents({ evtA: o, evtB: i });
      }
      Bi.defaultProps = (0, r.A)({}, Hi);
      var Xi = function (e, t) {
          return e.left <= t && e.right >= t;
        },
        Zi = function (e, t) {
          return e.filter(function (e) {
            return Xi(e, t);
          }).length;
        },
        Qi = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  for (
                    var e = this.props,
                      t = e.segments,
                      n = e.slotMetrics.slots,
                      r = Ki(t).levels[0],
                      o = 1,
                      i = 1,
                      a = [];
                    o <= n;
                  ) {
                    var s = "_lvl_" + o,
                      l =
                        r.filter(function (e) {
                          return Xi(e, o);
                        })[0] || {},
                      c = l.event,
                      u = l.left,
                      d = l.right,
                      h = l.span;
                    if (c) {
                      var p = Math.max(0, u - i);
                      if (this.canRenderSlotEvent(u, h)) {
                        var m = Ui(this.props, c);
                        p && a.push(Yi(n, p, s + "_gap")),
                          a.push(Yi(n, h, s, m)),
                          (i = o = d + 1);
                      } else
                        p && a.push(Yi(n, p, s + "_gap")),
                          a.push(Yi(n, 1, s, this.renderShowMore(t, o))),
                          (i = o += 1);
                    } else o++;
                  }
                  return f.createElement("div", { className: "rbc-row" }, a);
                },
              },
              {
                key: "canRenderSlotEvent",
                value: function (e, t) {
                  var n = this.props.segments;
                  return $n(e, e + t).every(function (e) {
                    return 1 === Zi(n, e);
                  });
                },
              },
              {
                key: "renderShowMore",
                value: function (e, t) {
                  var n = this,
                    r = this.props.localizer,
                    o = Zi(e, t);
                  return (
                    !!o &&
                    f.createElement(
                      "button",
                      {
                        type: "button",
                        key: "sm_" + t,
                        className: S("rbc-button-link", "rbc-show-more"),
                        onClick: function (e) {
                          return n.showMore(t, e);
                        },
                      },
                      r.messages.showMore(o),
                    )
                  );
                },
              },
              {
                key: "showMore",
                value: function (e, t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    this.props.onShowMore(e, t.target);
                },
              },
            ]),
            n
          );
        })(f.Component);
      Qi.defaultProps = (0, r.A)({}, Hi);
      var Ji = function (e) {
          var t = e.children;
          return f.createElement(
            "div",
            { className: "rbc-row-content-scroll-container" },
            t,
          );
        },
        ea = function (e, t) {
          return e[0].range === t[0].range && e[0].events === t[0].events;
        };
      function ta() {
        return Qn(function (e) {
          for (
            var t = e.range,
              n = e.events,
              o = e.maxRows,
              i = e.minRows,
              a = e.accessors,
              s = e.localizer,
              l = qi({ dateRange: t, localizer: s }),
              c = l.first,
              u = l.last,
              f = n.map(function (e) {
                return (function (e, t, n, r) {
                  var o = qi({ dateRange: t, localizer: r }),
                    i = o.first,
                    a = o.last,
                    s = r.diff(i, a, "day"),
                    l = r.max(r.startOf(n.start(e), "day"), i),
                    c = r.min(r.ceil(n.end(e), "day"), a),
                    u = Yn(t, function (e) {
                      return r.isSameDate(e, l);
                    }),
                    f = r.diff(l, c, "day");
                  return (
                    (f = Math.min(f, s)),
                    {
                      event: e,
                      span: (f = Math.max(f - r.segmentOffset, 1)),
                      left: u + 1,
                      right: Math.max(u + f, 1),
                    }
                  );
                })(e, t, a, s);
              }),
              d = Ki(f, Math.max(o - 1, 1)),
              h = d.levels,
              p = d.extra,
              m = p.length > 0 ? i - 1 : i;
            h.length < m;
          )
            h.push([]);
          return {
            first: c,
            last: u,
            levels: h,
            extra: p,
            range: t,
            slots: t.length,
            clone: function (t) {
              return ta()((0, r.A)((0, r.A)({}, e), t));
            },
            getDateForSlot: function (e) {
              return t[e];
            },
            getSlotForDate: function (e) {
              return t.find(function (t) {
                return s.isSameDate(t, e);
              });
            },
            getEventsForSlot: function (e) {
              return f
                .filter(function (t) {
                  return (function (e, t) {
                    return e.left <= t && e.right >= t;
                  })(t, e);
                })
                .map(function (e) {
                  return e.event;
                });
            },
            continuesPrior: function (e) {
              return s.continuesPrior(a.start(e), c);
            },
            continuesAfter: function (e) {
              var t = a.start(e),
                n = a.end(e);
              return s.continuesAfter(t, n, u);
            },
          };
        }, ea);
      }
      var na = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).handleSelectSlot =
              function (t) {
                var n = e.props,
                  r = n.range;
                (0, n.onSelectSlot)(r.slice(t.start, t.end + 1), t);
              }),
            (e.handleShowMore = function (t, n) {
              var r,
                o,
                i,
                a = e.props,
                s = a.range,
                l = a.onShowMore,
                c = e.slotMetrics(e.props),
                u = ((r = e.containerRef.current),
                (o = ".rbc-row-bg"),
                jn(r.querySelectorAll(o)))[0];
              u && (i = u.children[t - 1]),
                l(c.getEventsForSlot(t), s[t - 1], i, t, n);
            }),
            (e.getContainer = function () {
              var t = e.props.container;
              return t ? t() : e.containerRef.current;
            }),
            (e.renderHeadingCell = function (t, n) {
              var r = e.props,
                o = r.renderHeader,
                i = r.getNow,
                a = r.localizer;
              return o({
                date: t,
                key: "header_".concat(n),
                className: S(
                  "rbc-date-cell",
                  a.isSameDate(t, i()) && "rbc-now",
                ),
              });
            }),
            (e.renderDummy = function () {
              var t = e.props,
                n = t.className,
                r = t.range,
                o = t.renderHeader,
                i = t.showAllEvents;
              return f.createElement(
                "div",
                { className: n, ref: e.containerRef },
                f.createElement(
                  "div",
                  {
                    className: S(
                      "rbc-row-content",
                      i && "rbc-row-content-scrollable",
                    ),
                  },
                  o &&
                    f.createElement(
                      "div",
                      { className: "rbc-row", ref: e.headingRowRef },
                      r.map(e.renderHeadingCell),
                    ),
                  f.createElement(
                    "div",
                    { className: "rbc-row", ref: e.eventRowRef },
                    f.createElement(
                      "div",
                      { className: "rbc-row-segment" },
                      f.createElement(
                        "div",
                        { className: "rbc-event" },
                        f.createElement(
                          "div",
                          { className: "rbc-event-content" },
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }),
            (e.containerRef = (0, f.createRef)()),
            (e.headingRowRef = (0, f.createRef)()),
            (e.eventRowRef = (0, f.createRef)()),
            (e.slotMetrics = ta()),
            e
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "getRowLimit",
              value: function () {
                var e,
                  t = Ln(this.eventRowRef.current),
                  n =
                    null !== (e = this.headingRowRef) &&
                    void 0 !== e &&
                    e.current
                      ? Ln(this.headingRowRef.current)
                      : 0,
                  r = Ln(this.containerRef.current) - n;
                return Math.max(Math.floor(r / t), 1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.date,
                  n = e.rtl,
                  r = e.range,
                  o = e.className,
                  i = e.selected,
                  a = e.selectable,
                  s = e.renderForMeasure,
                  l = e.accessors,
                  c = e.getters,
                  u = e.components,
                  d = e.getNow,
                  h = e.renderHeader,
                  p = e.onSelect,
                  m = e.localizer,
                  v = e.onSelectStart,
                  g = e.onSelectEnd,
                  y = e.onDoubleClick,
                  b = e.onKeyPress,
                  w = e.resourceId,
                  E = e.longPressThreshold,
                  A = e.isAllDay,
                  D = e.resizable,
                  k = e.showAllEvents;
                if (s) return this.renderDummy();
                var _ = this.slotMetrics(this.props),
                  O = _.levels,
                  x = _.extra,
                  M = k ? Ji : qo,
                  R = u.weekWrapper,
                  C = {
                    selected: i,
                    accessors: l,
                    getters: c,
                    localizer: m,
                    components: u,
                    onSelect: p,
                    onDoubleClick: y,
                    onKeyPress: b,
                    resourceId: w,
                    slotMetrics: _,
                    resizable: D,
                  };
                return f.createElement(
                  "div",
                  { className: o, role: "rowgroup", ref: this.containerRef },
                  f.createElement(Wi, {
                    localizer: m,
                    date: t,
                    getNow: d,
                    rtl: n,
                    range: r,
                    selectable: a,
                    container: this.getContainer,
                    getters: c,
                    onSelectStart: v,
                    onSelectEnd: g,
                    onSelectSlot: this.handleSelectSlot,
                    components: u,
                    longPressThreshold: E,
                    resourceId: w,
                  }),
                  f.createElement(
                    "div",
                    {
                      className: S(
                        "rbc-row-content",
                        k && "rbc-row-content-scrollable",
                      ),
                      role: "row",
                    },
                    h &&
                      f.createElement(
                        "div",
                        { className: "rbc-row ", ref: this.headingRowRef },
                        r.map(this.renderHeadingCell),
                      ),
                    f.createElement(
                      M,
                      null,
                      f.createElement(
                        R,
                        Object.assign({ isAllDay: A }, C, {
                          rtl: this.props.rtl,
                        }),
                        O.map(function (e, t) {
                          return f.createElement(
                            Bi,
                            Object.assign({ key: t, segments: e }, C),
                          );
                        }),
                        !!x.length &&
                          f.createElement(
                            Qi,
                            Object.assign(
                              { segments: x, onShowMore: this.handleShowMore },
                              C,
                            ),
                          ),
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          n
        );
      })(f.Component);
      na.defaultProps = { minRows: 0, maxRows: 1 / 0 };
      var ra = function (e) {
          var t = e.label;
          return f.createElement(
            "span",
            { role: "columnheader", "aria-sort": "none" },
            t,
          );
        },
        oa = function (e) {
          var t = e.label,
            n = e.drilldownView,
            r = e.onDrillDown;
          return n
            ? f.createElement(
                "button",
                {
                  type: "button",
                  className: "rbc-button-link",
                  onClick: r,
                  role: "cell",
                },
                t,
              )
            : f.createElement("span", null, t);
        },
        ia = ["date", "className"],
        aa = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).getContainer =
                function () {
                  return e.containerRef.current;
                }),
              (e.renderWeek = function (t, n) {
                var r = e.props,
                  o = r.events,
                  i = r.components,
                  a = r.selectable,
                  s = r.getNow,
                  l = r.selected,
                  c = r.date,
                  u = r.localizer,
                  d = r.longPressThreshold,
                  h = r.accessors,
                  p = r.getters,
                  m = r.showAllEvents,
                  v = e.state,
                  g = v.needLimitMeasure,
                  y = v.rowLimit,
                  b = (function (e, t, n, r, o) {
                    return e.filter(function (e) {
                      return Vi(e, t, n, r, o);
                    });
                  })((0, ue.A)(o), t[0], t[t.length - 1], h, u);
                return (
                  b.sort(function (e, t) {
                    return Gi(e, t, h, u);
                  }),
                  f.createElement(na, {
                    key: n,
                    ref: 0 === n ? e.slotRowRef : void 0,
                    container: e.getContainer,
                    className: "rbc-month-row",
                    getNow: s,
                    date: c,
                    range: t,
                    events: b,
                    maxRows: m ? 1 / 0 : y,
                    selected: l,
                    selectable: a,
                    components: i,
                    accessors: h,
                    getters: p,
                    localizer: u,
                    renderHeader: e.readerDateHeading,
                    renderForMeasure: g,
                    onShowMore: e.handleShowMore,
                    onSelect: e.handleSelectEvent,
                    onDoubleClick: e.handleDoubleClickEvent,
                    onKeyPress: e.handleKeyPressEvent,
                    onSelectSlot: e.handleSelectSlot,
                    longPressThreshold: d,
                    rtl: e.props.rtl,
                    resizable: e.props.resizable,
                    showAllEvents: m,
                  })
                );
              }),
              (e.readerDateHeading = function (t) {
                var n = t.date,
                  r = t.className,
                  i = (0, o.A)(t, ia),
                  a = e.props,
                  s = a.date,
                  l = a.getDrilldownView,
                  c = a.localizer,
                  u = c.neq(n, s, "month"),
                  d = c.isSameDate(n, s),
                  h = l(n),
                  p = c.format(n, "dateFormat"),
                  m = e.props.components.dateHeader || oa;
                return f.createElement(
                  "div",
                  Object.assign({}, i, {
                    className: S(r, u && "rbc-off-range", d && "rbc-current"),
                    role: "cell",
                  }),
                  f.createElement(m, {
                    label: p,
                    date: n,
                    drilldownView: h,
                    isOffRange: u,
                    onDrillDown: function (t) {
                      return e.handleHeadingClick(n, h, t);
                    },
                  }),
                );
              }),
              (e.handleSelectSlot = function (t, n) {
                (e._pendingSelection = e._pendingSelection.concat(t)),
                  clearTimeout(e._selectTimer),
                  (e._selectTimer = setTimeout(function () {
                    return e.selectDates(n);
                  }));
              }),
              (e.handleHeadingClick = function (t, n, r) {
                r.preventDefault(),
                  e.clearSelection(),
                  Qo(e.props.onDrillDown, [t, n]);
              }),
              (e.handleSelectEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onSelectEvent, n);
              }),
              (e.handleDoubleClickEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onDoubleClickEvent, n);
              }),
              (e.handleKeyPressEvent = function () {
                e.clearSelection();
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onKeyPressEvent, n);
              }),
              (e.handleShowMore = function (t, n, r, o, i) {
                var a = e.props,
                  s = a.popup,
                  l = a.onDrillDown,
                  c = a.onShowMore,
                  u = a.getDrilldownView,
                  f = a.doShowMoreDrillDown;
                if ((e.clearSelection(), s)) {
                  var d = Ne(r, e.containerRef.current);
                  e.setState({
                    overlay: { date: n, events: t, position: d, target: i },
                  });
                } else f && Qo(l, [n, u(n) || Xo.DAY]);
                Qo(c, [t, n, o]);
              }),
              (e.overlayDisplay = function () {
                e.setState({ overlay: null });
              }),
              (e.state = { rowLimit: 5, needLimitMeasure: !0, date: null }),
              (e.containerRef = (0, f.createRef)()),
              (e.slotRowRef = (0, f.createRef)()),
              (e._bgRows = []),
              (e._pendingSelection = []),
              e
            );
          }
          return (
            (0, s.A)(
              n,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e,
                      t = this;
                    this.state.needLimitMeasure &&
                      this.measureRowLimit(this.props),
                      window.addEventListener(
                        "resize",
                        (this._resizeListener = function () {
                          e ||
                            He(function () {
                              (e = !1), t.setState({ needLimitMeasure: !0 });
                            });
                        }),
                        !1,
                      );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    this.state.needLimitMeasure &&
                      this.measureRowLimit(this.props);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    window.removeEventListener(
                      "resize",
                      this._resizeListener,
                      !1,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.date,
                      n = e.localizer,
                      r = e.className,
                      o = n.visibleDays(t, n),
                      i = be(o, 7);
                    return (
                      (this._weekCount = i.length),
                      f.createElement(
                        "div",
                        {
                          className: S("rbc-month-view", r),
                          role: "table",
                          "aria-label": "Month View",
                          ref: this.containerRef,
                        },
                        f.createElement(
                          "div",
                          {
                            className: "rbc-row rbc-month-header",
                            role: "row",
                          },
                          this.renderHeaders(i[0]),
                        ),
                        i.map(this.renderWeek),
                        this.props.popup && this.renderOverlay(),
                      )
                    );
                  },
                },
                {
                  key: "renderHeaders",
                  value: function (e) {
                    var t = this.props,
                      n = t.localizer,
                      r = t.components,
                      o = e[0],
                      i = e[e.length - 1],
                      a = r.header || ra;
                    return n.range(o, i, "day").map(function (e, t) {
                      return f.createElement(
                        "div",
                        { key: "header_" + t, className: "rbc-header" },
                        f.createElement(a, {
                          date: e,
                          localizer: n,
                          label: n.format(e, "weekdayFormat"),
                        }),
                      );
                    });
                  },
                },
                {
                  key: "renderOverlay",
                  value: function () {
                    var e,
                      t,
                      n = this,
                      r =
                        null !==
                          (e =
                            null === (t = this.state) || void 0 === t
                              ? void 0
                              : t.overlay) && void 0 !== e
                          ? e
                          : {},
                      o = this.props,
                      i = o.accessors,
                      a = o.localizer,
                      s = o.components,
                      l = o.getters,
                      c = o.selected,
                      u = o.popupOffset,
                      d = o.handleDragStart;
                    return f.createElement(Ci, {
                      overlay: r,
                      accessors: i,
                      localizer: a,
                      components: s,
                      getters: l,
                      selected: c,
                      popupOffset: u,
                      ref: this.containerRef,
                      handleKeyPressEvent: this.handleKeyPressEvent,
                      handleSelectEvent: this.handleSelectEvent,
                      handleDoubleClickEvent: this.handleDoubleClickEvent,
                      handleDragStart: d,
                      show: !!r.position,
                      overlayDisplay: this.overlayDisplay,
                      onHide: function () {
                        return n.setState({ overlay: null });
                      },
                    });
                  },
                },
                {
                  key: "measureRowLimit",
                  value: function () {
                    this.setState({
                      needLimitMeasure: !1,
                      rowLimit: this.slotRowRef.current.getRowLimit(),
                    });
                  },
                },
                {
                  key: "selectDates",
                  value: function (e) {
                    var t = this._pendingSelection.slice();
                    (this._pendingSelection = []),
                      t.sort(function (e, t) {
                        return +e - +t;
                      });
                    var n = new Date(t[0]),
                      r = new Date(t[t.length - 1]);
                    r.setDate(t[t.length - 1].getDate() + 1),
                      Qo(this.props.onSelectSlot, {
                        slots: t,
                        start: n,
                        end: r,
                        action: e.action,
                        bounds: e.bounds,
                        box: e.box,
                      });
                  },
                },
                {
                  key: "clearSelection",
                  value: function () {
                    clearTimeout(this._selectTimer),
                      (this._pendingSelection = []);
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = e.date;
                    return {
                      date: n,
                      needLimitMeasure: e.localizer.neq(n, t.date, "month"),
                    };
                  },
                },
              ],
            ),
            n
          );
        })(f.Component);
      (aa.range = function (e, t) {
        var n = t.localizer;
        return { start: n.firstVisibleDay(e, n), end: n.lastVisibleDay(e, n) };
      }),
        (aa.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Ko:
              return r.add(e, -1, "month");
            case Vo:
              return r.add(e, 1, "month");
            default:
              return e;
          }
        }),
        (aa.title = function (e, t) {
          return t.localizer.format(e, "monthHeaderFormat");
        });
      var sa = function (e) {
        var t = e.min,
          n = e.max,
          r = e.step,
          o = e.slots,
          i = e.localizer;
        return (
          "".concat(+i.startOf(t, "minutes")) +
          "".concat(+i.startOf(n, "minutes")) +
          "".concat(r, "-").concat(o)
        );
      };
      function la(e) {
        for (
          var t = e.min,
            n = e.max,
            r = e.step,
            o = e.timeslots,
            i = e.localizer,
            a = sa({ start: t, end: n, step: r, timeslots: o, localizer: i }),
            s = 1 + i.getTotalMin(t, n),
            l = i.getMinutesFromMidnight(t),
            c = Math.ceil((s - 1) / (r * o)),
            u = c * o,
            f = new Array(c),
            d = new Array(u),
            h = 0;
          h < c;
          h++
        ) {
          f[h] = new Array(o);
          for (var p = 0; p < o; p++) {
            var m = h * o + p,
              v = m * r;
            d[m] = f[h][p] = i.getSlotDate(t, l, v);
          }
        }
        var g = d.length * r;
        function y(e) {
          var n = i.diff(t, e, "minutes") + i.getDstOffset(t, e);
          return Math.min(n, s);
        }
        return (
          d.push(i.getSlotDate(t, l, g)),
          {
            groups: f,
            update: function (e) {
              return sa(e) !== a ? la(e) : this;
            },
            dateIsInGroup: function (e, t) {
              var r = f[t + 1];
              return i.inRange(e, f[t][0], r ? r[0] : n, "minutes");
            },
            nextSlot: function (e) {
              var t = d[Math.min(d.indexOf(e) + 1, d.length - 1)];
              return t === e && (t = i.add(e, r, "minutes")), t;
            },
            closestSlotToPosition: function (e) {
              var t = Math.min(d.length - 1, Math.max(0, Math.floor(e * u)));
              return d[t];
            },
            closestSlotFromPoint: function (e, t) {
              var n = Math.abs(t.top - t.bottom);
              return this.closestSlotToPosition((e.y - t.top) / n);
            },
            closestSlotFromDate: function (e) {
              var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (i.lt(e, t, "minutes")) return d[0];
              if (i.gt(e, n, "minutes")) return d[d.length - 1];
              var a = i.diff(t, e, "minutes");
              return d[(a - (a % r)) / r + o];
            },
            startsBeforeDay: function (e) {
              return i.lt(e, t, "day");
            },
            startsAfterDay: function (e) {
              return i.gt(e, n, "day");
            },
            startsBefore: function (e) {
              return i.lt(i.merge(t, e), t, "minutes");
            },
            startsAfter: function (e) {
              return i.gt(i.merge(n, e), n, "minutes");
            },
            getRange: function (e, o, a, s) {
              a || (e = i.min(n, i.max(t, e))),
                s || (o = i.min(n, i.max(t, o)));
              var l = y(e),
                c = y(o),
                f =
                  c > r * u && !i.eq(n, o)
                    ? ((l - r) / (r * u)) * 100
                    : (l / (r * u)) * 100;
              return {
                top: f,
                height: (c / (r * u)) * 100 - f,
                start: y(e),
                startDate: e,
                end: y(o),
                endDate: o,
              };
            },
            getCurrentTimePosition: function (e) {
              return (y(e) / (r * u)) * 100;
            },
          }
        );
      }
      var ca = (function () {
        function e(t, n) {
          var r = n.accessors,
            o = n.slotMetrics;
          (0, a.A)(this, e);
          var i = o.getRange(r.start(t), r.end(t)),
            s = i.start,
            l = i.startDate,
            c = i.end,
            u = i.endDate,
            f = i.top,
            d = i.height;
          (this.start = s),
            (this.end = c),
            (this.startMs = +l),
            (this.endMs = +u),
            (this.top = f),
            (this.height = d),
            (this.data = t);
        }
        return (
          (0, s.A)(e, [
            {
              key: "_width",
              get: function () {
                if (this.rows) {
                  var e =
                    this.rows.reduce(function (e, t) {
                      return Math.max(e, t.leaves.length + 1);
                    }, 0) + 1;
                  return 100 / e;
                }
                return this.leaves
                  ? (100 - this.container._width) / (this.leaves.length + 1)
                  : this.row._width;
              },
            },
            {
              key: "width",
              get: function () {
                var e = this._width,
                  t = Math.min(100, 1.7 * this._width);
                if (this.rows) return t;
                if (this.leaves) return this.leaves.length > 0 ? t : e;
                var n = this.row.leaves;
                return n.indexOf(this) === n.length - 1 ? e : t;
              },
            },
            {
              key: "xOffset",
              get: function () {
                if (this.rows) return 0;
                if (this.leaves) return this.container._width;
                var e = this.row,
                  t = e.leaves,
                  n = e.xOffset,
                  r = e._width;
                return n + (t.indexOf(this) + 1) * r;
              },
            },
          ]),
          e
        );
      })();
      function ua(e, t, n) {
        return (
          Math.abs(t.start - e.start) < n ||
          (t.start > e.start && t.start < e.end)
        );
      }
      function fa(e) {
        for (
          var t = e.events,
            n = e.minimumStartDifference,
            r = e.slotMetrics,
            o = e.accessors,
            i = (function (e) {
              for (
                var t = yr(e, [
                    "startMs",
                    function (e) {
                      return -e.endMs;
                    },
                  ]),
                  n = [];
                t.length > 0;
              ) {
                var r = t.shift();
                n.push(r);
                for (var o = 0; o < t.length; o++) {
                  var i = t[o];
                  if (!(r.endMs > i.startMs)) {
                    if (o > 0) {
                      var a = t.splice(o, 1)[0];
                      n.push(a);
                    }
                    break;
                  }
                }
              }
              return n;
            })(
              t.map(function (e) {
                return new ca(e, { slotMetrics: r, accessors: o });
              }),
            ),
            a = [],
            s = function () {
              var e = i[l],
                t = a.find(function (t) {
                  return t.end > e.start || Math.abs(e.start - t.start) < n;
                });
              if (!t) return (e.rows = []), a.push(e), 1;
              e.container = t;
              for (var r = null, o = t.rows.length - 1; !r && o >= 0; o--)
                ua(t.rows[o], e, n) && (r = t.rows[o]);
              r
                ? (r.leaves.push(e), (e.row = r))
                : ((e.leaves = []), t.rows.push(e));
            },
            l = 0;
          l < i.length;
          l++
        )
          s();
        return i.map(function (e) {
          return {
            event: e.data,
            style: {
              top: e.top,
              height: e.height,
              width: e.width,
              xOffset: Math.max(0, e.xOffset),
            },
          };
        });
      }
      function da(e, t, n) {
        for (var r = 0; r < e.friends.length; ++r)
          if (!(n.indexOf(e.friends[r]) > -1)) {
            (t = t > e.friends[r].idx ? t : e.friends[r].idx),
              n.push(e.friends[r]);
            var o = da(e.friends[r], t, n);
            t = t > o ? t : o;
          }
        return t;
      }
      var ha = {
        overlap: fa,
        "no-overlap": function (e) {
          var t = fa({
            events: e.events,
            minimumStartDifference: e.minimumStartDifference,
            slotMetrics: e.slotMetrics,
            accessors: e.accessors,
          });
          t.sort(function (e, t) {
            return (
              (e = e.style),
              (t = t.style),
              e.top !== t.top
                ? e.top > t.top
                  ? 1
                  : -1
                : e.top + e.height < t.top + t.height
                  ? 1
                  : -1
            );
          });
          for (var n = 0; n < t.length; ++n)
            (t[n].friends = []),
              delete t[n].style.left,
              delete t[n].style.left,
              delete t[n].idx,
              delete t[n].size;
          for (var r = 0; r < t.length - 1; ++r)
            for (
              var o = t[r],
                i = o.style.top,
                a = o.style.top + o.style.height,
                s = r + 1;
              s < t.length;
              ++s
            ) {
              var l = t[s],
                c = l.style.top,
                u = l.style.top + l.style.height;
              ((c >= i && u <= a) || (u > i && u <= a) || (c >= i && c < a)) &&
                (o.friends.push(l), l.friends.push(o));
            }
          for (var f = 0; f < t.length; ++f) {
            for (var d = t[f], h = [], p = 0; p < 100; ++p) h.push(1);
            for (var m = 0; m < d.friends.length; ++m)
              void 0 !== d.friends[m].idx && (h[d.friends[m].idx] = 0);
            d.idx = h.indexOf(1);
          }
          for (var v = 0; v < t.length; ++v) {
            var g;
            if (!t[v].size) {
              var y = [];
              (g = 100 / (da(t[v], 0, y) + 1)), (t[v].size = g);
              for (var b = 0; b < y.length; ++b) y[b].size = g;
            }
          }
          for (var w = 0; w < t.length; ++w) {
            var E = t[w];
            E.style.left = E.idx * E.size;
            for (var A = 0, D = 0; D < E.friends.length; ++D) {
              var S = E.friends[D].idx;
              A = A > S ? A : S;
            }
            A <= E.idx && (E.size = 100 - E.idx * E.size);
            var k = 0 === E.idx ? 0 : 3;
            (E.style.width = "calc(".concat(E.size, "% - ").concat(k, "px)")),
              (E.style.height = "calc(".concat(E.style.height, "% - 2px)")),
              (E.style.xOffset = "calc("
                .concat(E.style.left, "% + ")
                .concat(k, "px)"));
          }
          return t;
        },
      };
      var pa = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          return (0, a.A)(this, n), t.apply(this, arguments);
        }
        return (
          (0, s.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.renderSlot,
                  n = e.resource,
                  r = e.group,
                  o = e.getters,
                  i = e.components,
                  a = (void 0 === i ? {} : i).timeSlotWrapper,
                  s = void 0 === a ? qo : a,
                  l = o ? o.slotGroupProp(r) : {};
                return f.createElement(
                  "div",
                  Object.assign({ className: "rbc-timeslot-group" }, l),
                  r.map(function (e, r) {
                    var i = o ? o.slotProp(e, n) : {};
                    return f.createElement(
                      s,
                      { key: r, value: e, resource: n },
                      f.createElement(
                        "div",
                        Object.assign({}, i, {
                          className: S("rbc-time-slot", i.className),
                        }),
                        t && t(e, r),
                      ),
                    );
                  }),
                );
              },
            },
          ]),
          n
        );
      })(f.Component);
      function ma(e) {
        return "string" == typeof e ? e : e + "%";
      }
      function va(e) {
        var t = e.style,
          n = e.className,
          o = e.event,
          i = e.accessors,
          a = e.rtl,
          s = e.selected,
          l = e.label,
          c = e.continuesPrior,
          u = e.continuesAfter,
          d = e.getters,
          h = e.onClick,
          p = e.onDoubleClick,
          m = e.isBackgroundEvent,
          v = e.onKeyPress,
          g = e.components,
          y = g.event,
          b = g.eventWrapper,
          w = i.title(o),
          E = i.tooltip(o),
          A = i.end(o),
          D = i.start(o),
          k = d.eventProp(o, D, A, s),
          _ = t.height,
          O = t.top,
          x = t.width,
          M = t.xOffset,
          R = [
            f.createElement(
              "div",
              { key: "1", className: "rbc-event-label" },
              l,
            ),
            f.createElement(
              "div",
              { key: "2", className: "rbc-event-content" },
              y ? f.createElement(y, { event: o, title: w }) : w,
            ),
          ],
          C = m
            ? (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, ce.A)(
                  {
                    top: ma(O),
                    height: ma(_),
                    width: "calc(".concat(x, " + 10px)"),
                  },
                  a ? "right" : "left",
                  ma(Math.max(0, M)),
                ),
              )
            : (0, r.A)(
                (0, r.A)({}, k.style),
                {},
                (0, ce.A)(
                  { top: ma(O), width: ma(x), height: ma(_) },
                  a ? "right" : "left",
                  ma(M),
                ),
              );
        return f.createElement(
          b,
          Object.assign({ type: "time" }, e),
          f.createElement(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onClick: h,
              onDoubleClick: p,
              style: C,
              onKeyPress: v,
              title: E ? ("string" == typeof l ? l + ": " : "") + E : void 0,
              className: S(
                m ? "rbc-background-event" : "rbc-event",
                n,
                k.className,
                {
                  "rbc-selected": s,
                  "rbc-event-continues-earlier": c,
                  "rbc-event-continues-later": u,
                },
              ),
            },
            R,
          ),
        );
      }
      var ga = function (e) {
          var t = e.children,
            n = e.className,
            r = e.style,
            o = e.innerRef;
          return f.createElement("div", { className: n, style: r, ref: o }, t);
        },
        ya = f.forwardRef(function (e, t) {
          return f.createElement(ga, Object.assign({}, e, { innerRef: t }));
        }),
        ba = ["dayProp"],
        wa = ["eventContainerWrapper"],
        Ea = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
              i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = {
                selecting: !1,
                timeIndicatorPosition: null,
              }),
              (e.intervalTriggered = !1),
              (e.renderEvents = function (t) {
                var n = t.events,
                  o = t.isBackgroundEvent,
                  i = e.props,
                  a = i.rtl,
                  s = i.selected,
                  l = i.accessors,
                  c = i.localizer,
                  u = i.getters,
                  d = i.components,
                  h = i.step,
                  p = i.timeslots,
                  m = i.dayLayoutAlgorithm,
                  v = i.resizable,
                  g = (0, Jn.A)(e).slotMetrics,
                  y = c.messages,
                  b = (function (e) {
                    e.events,
                      e.minimumStartDifference,
                      e.slotMetrics,
                      e.accessors;
                    var t,
                      n = e.dayLayoutAlgorithm,
                      r = n;
                    return (
                      n in ha && (r = ha[n]),
                      (t = r) && t.constructor && t.call && t.apply
                        ? r.apply(this, arguments)
                        : []
                    );
                  })({
                    events: n,
                    accessors: l,
                    slotMetrics: g,
                    minimumStartDifference: Math.ceil((h * p) / 2),
                    dayLayoutAlgorithm: m,
                  });
                return b.map(function (t, n) {
                  var i,
                    h = t.event,
                    p = t.style,
                    m = l.end(h),
                    b = l.start(h),
                    w = "eventTimeRangeFormat",
                    E = g.startsBeforeDay(b),
                    A = g.startsAfterDay(m);
                  E
                    ? (w = "eventTimeRangeEndFormat")
                    : A && (w = "eventTimeRangeStartFormat"),
                    (i = E && A ? y.allDay : c.format({ start: b, end: m }, w));
                  var D = E || g.startsBefore(b),
                    S = A || g.startsAfter(m);
                  return f.createElement(va, {
                    style: p,
                    event: h,
                    label: i,
                    key: "evt_" + n,
                    getters: u,
                    rtl: a,
                    components: d,
                    continuesPrior: D,
                    continuesAfter: S,
                    accessors: l,
                    resource: e.props.resource,
                    selected: ki(h, s),
                    onClick: function (t) {
                      return e._select(
                        (0, r.A)(
                          (0, r.A)({}, h),
                          {},
                          { sourceResource: e.props.resource },
                        ),
                        t,
                      );
                    },
                    onDoubleClick: function (t) {
                      return e._doubleClick(h, t);
                    },
                    isBackgroundEvent: o,
                    onKeyPress: function (t) {
                      return e._keyPress(h, t);
                    },
                    resizable: v,
                  });
                });
              }),
              (e._selectable = function () {
                var t = e.containerRef.current,
                  n = e.props,
                  o = n.longPressThreshold,
                  i = n.localizer,
                  a = (e._selector = new zi(
                    function () {
                      return t;
                    },
                    { longPressThreshold: o },
                  )),
                  s = function (t) {
                    var n = e.props.onSelecting,
                      r = e.state || {},
                      o = l(t),
                      a = o.startDate,
                      s = o.endDate;
                    (n &&
                      ((i.eq(r.startDate, a, "minutes") &&
                        i.eq(r.endDate, s, "minutes")) ||
                        !1 ===
                          n({
                            start: a,
                            end: s,
                            resourceId: e.props.resource,
                          }))) ||
                      (e.state.start === o.start &&
                        e.state.end === o.end &&
                        e.state.selecting === o.selecting) ||
                      e.setState(o);
                  },
                  l = function (n) {
                    var o = e.slotMetrics.closestSlotFromPoint(n, Ii(t));
                    e.state.selecting || (e._initialSlot = o);
                    var a = e._initialSlot;
                    i.lte(a, o)
                      ? (o = e.slotMetrics.nextSlot(o))
                      : i.gt(a, o) && (a = e.slotMetrics.nextSlot(a));
                    var s = e.slotMetrics.getRange(i.min(a, o), i.max(a, o));
                    return (0, r.A)(
                      (0, r.A)({}, s),
                      {},
                      {
                        selecting: !0,
                        top: "".concat(s.top, "%"),
                        height: "".concat(s.height, "%"),
                      },
                    );
                  },
                  c = function (t, n) {
                    if (!Pi(e.containerRef.current, t)) {
                      var r = l(t),
                        o = r.startDate,
                        i = r.endDate;
                      e._selectSlot({
                        startDate: o,
                        endDate: i,
                        action: n,
                        box: t,
                      });
                    }
                    e.setState({ selecting: !1 });
                  };
                a.on("selecting", s),
                  a.on("selectStart", s),
                  a.on("beforeSelect", function (t) {
                    if ("ignoreEvents" === e.props.selectable)
                      return !Pi(e.containerRef.current, t);
                  }),
                  a.on("click", function (e) {
                    return c(e, "click");
                  }),
                  a.on("doubleClick", function (e) {
                    return c(e, "doubleClick");
                  }),
                  a.on("select", function (t) {
                    e.state.selecting &&
                      (e._selectSlot(
                        (0, r.A)(
                          (0, r.A)({}, e.state),
                          {},
                          { action: "select", bounds: t },
                        ),
                      ),
                      e.setState({ selecting: !1 }));
                  }),
                  a.on("reset", function () {
                    e.state.selecting && e.setState({ selecting: !1 });
                  });
              }),
              (e._teardownSelectable = function () {
                e._selector && (e._selector.teardown(), (e._selector = null));
              }),
              (e._selectSlot = function (t) {
                for (
                  var n = t.startDate,
                    r = t.endDate,
                    o = t.action,
                    i = t.bounds,
                    a = t.box,
                    s = n,
                    l = [];
                  e.props.localizer.lte(s, r);
                )
                  l.push(s), (s = new Date(+s + 60 * e.props.step * 1e3));
                Qo(e.props.onSelectSlot, {
                  slots: l,
                  start: n,
                  end: r,
                  resourceId: e.props.resource,
                  action: o,
                  bounds: i,
                  box: a,
                });
              }),
              (e._select = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onSelectEvent, n);
              }),
              (e._doubleClick = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onDoubleClickEvent, n);
              }),
              (e._keyPress = function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                Qo(e.props.onKeyPressEvent, n);
              }),
              (e.slotMetrics = la(e.props)),
              (e.containerRef = (0, f.createRef)()),
              e
            );
          }
          return (
            (0, s.A)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.selectable && this._selectable(),
                    this.props.isNow &&
                      this.setTimeIndicatorPositionUpdateInterval();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._teardownSelectable(), this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  e.selectable && !this.props.selectable && this._selectable(),
                    !e.selectable &&
                      this.props.selectable &&
                      this._teardownSelectable(),
                    (this.slotMetrics = this.slotMetrics.update(e));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this.props,
                    r = n.getNow,
                    o = n.isNow,
                    i = n.localizer,
                    a = n.date,
                    s = n.min,
                    l = n.max,
                    c = i.neq(e.getNow(), r(), "minutes");
                  if (e.isNow !== o || c) {
                    if ((this.clearTimeIndicatorInterval(), o)) {
                      var u =
                        !c &&
                        i.eq(e.date, a, "minutes") &&
                        t.timeIndicatorPosition ===
                          this.state.timeIndicatorPosition;
                      this.setTimeIndicatorPositionUpdateInterval(u);
                    }
                  } else
                    o &&
                      (i.neq(e.min, s, "minutes") ||
                        i.neq(e.max, l, "minutes")) &&
                      this.positionTimeIndicator();
                },
              },
              {
                key: "setTimeIndicatorPositionUpdateInterval",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  this.intervalTriggered || t || this.positionTimeIndicator(),
                    (this._timeIndicatorTimeout = window.setTimeout(
                      function () {
                        (e.intervalTriggered = !0),
                          e.positionTimeIndicator(),
                          e.setTimeIndicatorPositionUpdateInterval();
                      },
                      6e4,
                    ));
                },
              },
              {
                key: "clearTimeIndicatorInterval",
                value: function () {
                  (this.intervalTriggered = !1),
                    window.clearTimeout(this._timeIndicatorTimeout);
                },
              },
              {
                key: "positionTimeIndicator",
                value: function () {
                  var e = this.props,
                    t = e.min,
                    n = e.max,
                    r = (0, e.getNow)();
                  if (r >= t && r <= n) {
                    var o = this.slotMetrics.getCurrentTimePosition(r);
                    (this.intervalTriggered = !0),
                      this.setState({ timeIndicatorPosition: o });
                  } else this.clearTimeIndicatorInterval();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.max,
                    r = e.rtl,
                    i = e.isNow,
                    a = e.resource,
                    s = e.accessors,
                    l = e.localizer,
                    c = e.getters,
                    u = c.dayProp,
                    d = (0, o.A)(c, ba),
                    h = e.components,
                    p = h.eventContainerWrapper,
                    m = (0, o.A)(h, wa),
                    v = this.slotMetrics,
                    g = this.state,
                    y = g.selecting,
                    b = g.top,
                    w = g.height,
                    E = { start: g.startDate, end: g.endDate },
                    A = u(n),
                    D = A.className,
                    k = A.style,
                    _ = m.dayColumnWrapper || ya;
                  return f.createElement(
                    _,
                    {
                      ref: this.containerRef,
                      date: t,
                      style: k,
                      className: S(
                        D,
                        "rbc-day-slot",
                        "rbc-time-column",
                        i && "rbc-now",
                        i && "rbc-today",
                        y && "rbc-slot-selecting",
                      ),
                      slotMetrics: v,
                    },
                    v.groups.map(function (e, t) {
                      return f.createElement(pa, {
                        key: t,
                        group: e,
                        resource: a,
                        getters: d,
                        components: m,
                      });
                    }),
                    f.createElement(
                      p,
                      {
                        localizer: l,
                        resource: a,
                        accessors: s,
                        getters: d,
                        components: m,
                        slotMetrics: v,
                      },
                      f.createElement(
                        "div",
                        { className: S("rbc-events-container", r && "rtl") },
                        this.renderEvents({
                          events: this.props.backgroundEvents,
                          isBackgroundEvent: !0,
                        }),
                        this.renderEvents({ events: this.props.events }),
                      ),
                    ),
                    y &&
                      f.createElement(
                        "div",
                        {
                          className: "rbc-slot-selection",
                          style: { top: b, height: w },
                        },
                        f.createElement(
                          "span",
                          null,
                          l.format(E, "selectRangeFormat"),
                        ),
                      ),
                    i &&
                      this.intervalTriggered &&
                      f.createElement("div", {
                        className: "rbc-current-time-indicator",
                        style: {
                          top: "".concat(this.state.timeIndicatorPosition, "%"),
                        },
                      }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      Ea.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
      var Aa = function (e) {
          var t = e.min,
            n = e.max,
            r = e.timeslots,
            o = e.step,
            i = e.localizer,
            a = e.getNow,
            s = e.resource,
            l = e.components,
            c = e.getters,
            d = e.gutterRef,
            h = l.timeGutterWrapper,
            p = (0, f.useMemo)(
              function () {
                return (function (e) {
                  var t = e.min,
                    n = e.max,
                    r = e.localizer;
                  return r.getTimezoneOffset(t) !== r.getTimezoneOffset(n)
                    ? { start: r.add(t, -1, "day"), end: r.add(n, -1, "day") }
                    : { start: t, end: n };
                })({ min: t, max: n, localizer: i });
              },
              [
                null == t ? void 0 : t.toISOString(),
                null == n ? void 0 : n.toISOString(),
                i,
              ],
            ),
            m = p.start,
            v = p.end,
            g = (0, f.useState)(
              la({ min: m, max: v, timeslots: r, step: o, localizer: i }),
            ),
            y = (0, u.A)(g, 2),
            b = y[0],
            w = y[1];
          (0, f.useEffect)(
            function () {
              b &&
                w(
                  b.update({
                    min: m,
                    max: v,
                    timeslots: r,
                    step: o,
                    localizer: i,
                  }),
                );
            },
            [
              null == m ? void 0 : m.toISOString(),
              null == v ? void 0 : v.toISOString(),
              r,
              o,
            ],
          );
          var E = (0, f.useCallback)(
            function (e, t) {
              if (t) return null;
              var n = b.dateIsInGroup(a(), t);
              return f.createElement(
                "span",
                { className: S("rbc-label", n && "rbc-now") },
                i.format(e, "timeGutterFormat"),
              );
            },
            [b, i, a],
          );
          return f.createElement(
            h,
            { slotMetrics: b },
            f.createElement(
              "div",
              { className: "rbc-time-gutter rbc-time-column", ref: d },
              b.groups.map(function (e, t) {
                return f.createElement(pa, {
                  key: t,
                  group: e,
                  resource: s,
                  components: l,
                  renderSlot: E,
                  getters: c,
                });
              }),
            ),
          );
        },
        Da = f.forwardRef(function (e, t) {
          return f.createElement(Aa, Object.assign({ gutterRef: t }, e));
        }),
        Sa = function (e) {
          var t = e.label;
          return f.createElement(f.Fragment, null, t);
        },
        ka = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            var e;
            (0, a.A)(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(o))).handleHeaderClick =
                function (t, n, r) {
                  r.preventDefault(), Qo(e.props.onDrillDown, [t, n]);
                }),
              (e.renderRow = function (t) {
                var n = e.props,
                  r = n.events,
                  o = n.rtl,
                  i = n.selectable,
                  a = n.getNow,
                  s = n.range,
                  l = n.getters,
                  c = n.localizer,
                  u = n.accessors,
                  d = n.components,
                  h = n.resizable,
                  p = u.resourceId(t),
                  m = t
                    ? r.filter(function (e) {
                        return u.resource(e) === p;
                      })
                    : r;
                return f.createElement(na, {
                  isAllDay: !0,
                  rtl: o,
                  getNow: a,
                  minRows: 2,
                  maxRows: e.props.allDayMaxRows + 1,
                  range: s,
                  events: m,
                  resourceId: p,
                  className: "rbc-allday-cell",
                  selectable: i,
                  selected: e.props.selected,
                  components: d,
                  accessors: u,
                  getters: l,
                  localizer: c,
                  onSelect: e.props.onSelectEvent,
                  onShowMore: e.props.onShowMore,
                  onDoubleClick: e.props.onDoubleClickEvent,
                  onKeyPress: e.props.onKeyPressEvent,
                  onSelectSlot: e.props.onSelectSlot,
                  longPressThreshold: e.props.longPressThreshold,
                  resizable: h,
                });
              }),
              e
            );
          }
          return (
            (0, s.A)(n, [
              {
                key: "renderHeaderCells",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.localizer,
                    o = n.getDrilldownView,
                    i = n.getNow,
                    a = n.getters.dayProp,
                    s = n.components.header,
                    l = void 0 === s ? ra : s,
                    c = i();
                  return e.map(function (e, n) {
                    var i = o(e),
                      s = r.format(e, "dayFormat"),
                      u = a(e),
                      d = u.className,
                      h = u.style,
                      p = f.createElement(l, {
                        date: e,
                        label: s,
                        localizer: r,
                      });
                    return f.createElement(
                      "div",
                      {
                        key: n,
                        style: h,
                        className: S(
                          "rbc-header",
                          d,
                          r.isSameDate(e, c) && "rbc-today",
                        ),
                      },
                      i
                        ? f.createElement(
                            "button",
                            {
                              type: "button",
                              className: "rbc-button-link",
                              onClick: function (n) {
                                return t.handleHeaderClick(e, i, n);
                              },
                            },
                            p,
                          )
                        : f.createElement("span", null, p),
                    );
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.width,
                    r = t.rtl,
                    o = t.resources,
                    i = t.range,
                    a = t.events,
                    s = t.getNow,
                    l = t.accessors,
                    c = t.selectable,
                    d = t.components,
                    h = t.getters,
                    p = t.scrollRef,
                    m = t.localizer,
                    v = t.isOverflowing,
                    g = t.components,
                    y = g.timeGutterHeader,
                    b = g.resourceHeader,
                    w = void 0 === b ? Sa : b,
                    E = t.resizable,
                    A = {};
                  v &&
                    (A[r ? "marginLeft" : "marginRight"] = "".concat(
                      wr() - 1,
                      "px",
                    ));
                  var D = o.groupEvents(a);
                  return f.createElement(
                    "div",
                    {
                      style: A,
                      ref: p,
                      className: S("rbc-time-header", v && "rbc-overflowing"),
                    },
                    f.createElement(
                      "div",
                      {
                        className: "rbc-label rbc-time-header-gutter",
                        style: { width: n, minWidth: n, maxWidth: n },
                      },
                      y && f.createElement(y, null),
                    ),
                    o.map(function (t, n) {
                      var o = (0, u.A)(t, 2),
                        a = o[0],
                        p = o[1];
                      return f.createElement(
                        "div",
                        { className: "rbc-time-header-content", key: a || n },
                        p &&
                          f.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-row-resource",
                              key: "resource_".concat(n),
                            },
                            f.createElement(
                              "div",
                              { className: "rbc-header" },
                              f.createElement(w, {
                                index: n,
                                label: l.resourceTitle(p),
                                resource: p,
                              }),
                            ),
                          ),
                        f.createElement(
                          "div",
                          {
                            className: "rbc-row rbc-time-header-cell".concat(
                              i.length <= 1
                                ? " rbc-time-header-cell-single-day"
                                : "",
                            ),
                          },
                          e.renderHeaderCells(i),
                        ),
                        f.createElement(na, {
                          isAllDay: !0,
                          rtl: r,
                          getNow: s,
                          minRows: 2,
                          maxRows: e.props.allDayMaxRows + 1,
                          range: i,
                          events: D.get(a) || [],
                          resourceId: p && a,
                          className: "rbc-allday-cell",
                          selectable: c,
                          selected: e.props.selected,
                          components: d,
                          accessors: l,
                          getters: h,
                          localizer: m,
                          onSelect: e.props.onSelectEvent,
                          onShowMore: e.props.onShowMore,
                          onDoubleClick: e.props.onDoubleClickEvent,
                          onKeyPress: e.props.onKeyPressEvent,
                          onSelectSlot: e.props.onSelectSlot,
                          longPressThreshold: e.props.longPressThreshold,
                          resizable: E,
                        }),
                      );
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component),
        _a = {};
      var Oa = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n(e) {
          var o;
          return (
            (0, a.A)(this, n),
            ((o = t.call(this, e)).handleScroll = function (e) {
              o.scrollRef.current &&
                (o.scrollRef.current.scrollLeft = e.target.scrollLeft);
            }),
            (o.handleResize = function () {
              We(o.rafHandle), (o.rafHandle = He(o.checkOverflow));
            }),
            (o.handleKeyPressEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Qo(o.props.onKeyPressEvent, t);
            }),
            (o.handleSelectEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Qo(o.props.onSelectEvent, t);
            }),
            (o.handleDoubleClickEvent = function () {
              o.clearSelection();
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              Qo(o.props.onDoubleClickEvent, t);
            }),
            (o.handleShowMore = function (e, t, n, i, a) {
              var s = o.props,
                l = s.popup,
                c = s.onDrillDown,
                u = s.onShowMore,
                f = s.getDrilldownView,
                d = s.doShowMoreDrillDown;
              if ((o.clearSelection(), l)) {
                var h = Ne(n, o.containerRef.current);
                o.setState({
                  overlay: {
                    date: t,
                    events: e,
                    position: (0, r.A)((0, r.A)({}, h), {}, { width: "200px" }),
                    target: a,
                  },
                });
              } else d && Qo(c, [t, f(t) || Xo.DAY]);
              Qo(u, [e, t, i]);
            }),
            (o.handleSelectAllDaySlot = function (e, t) {
              var n = o.props.onSelectSlot,
                r = new Date(e[0]),
                i = new Date(e[e.length - 1]);
              i.setDate(e[e.length - 1].getDate() + 1),
                Qo(n, {
                  slots: e,
                  start: r,
                  end: i,
                  action: t.action,
                  resourceId: t.resourceId,
                });
            }),
            (o.overlayDisplay = function () {
              o.setState({ overlay: null });
            }),
            (o.checkOverflow = function () {
              if (!o._updatingOverflow) {
                var e = o.contentRef.current;
                if (null != e && e.scrollHeight) {
                  var t = e.scrollHeight > e.clientHeight;
                  o.state.isOverflowing !== t &&
                    ((o._updatingOverflow = !0),
                    o.setState({ isOverflowing: t }, function () {
                      o._updatingOverflow = !1;
                    }));
                }
              }
            }),
            (o.memoizedResources = Qn(function (e, t) {
              return (function (e, t) {
                return {
                  map: function (n) {
                    return e
                      ? e.map(function (e, r) {
                          return n([t.resourceId(e), e], r);
                        })
                      : [n([_a, null], 0)];
                  },
                  groupEvents: function (n) {
                    var r = new Map();
                    return e
                      ? (n.forEach(function (e) {
                          var n = t.resource(e) || _a;
                          if (Array.isArray(n))
                            n.forEach(function (t) {
                              var n = r.get(t) || [];
                              n.push(e), r.set(t, n);
                            });
                          else {
                            var o = r.get(n) || [];
                            o.push(e), r.set(n, o);
                          }
                        }),
                        r)
                      : (r.set(_a, n), r);
                  },
                };
              })(e, t);
            })),
            (o.state = { gutterWidth: void 0, isOverflowing: null }),
            (o.scrollRef = f.createRef()),
            (o.contentRef = f.createRef()),
            (o.containerRef = f.createRef()),
            (o._scrollRatio = null),
            (o.gutterRef = (0, f.createRef)()),
            o
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "getSnapshotBeforeUpdate",
              value: function () {
                return this.checkOverflow(), null;
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                null == this.props.width && this.measureGutter(),
                  this.calculateScroll(),
                  this.applyScroll(),
                  window.addEventListener("resize", this.handleResize);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("resize", this.handleResize),
                  We(this.rafHandle),
                  this.measureGutterAnimationFrameRequest &&
                    window.cancelAnimationFrame(
                      this.measureGutterAnimationFrameRequest,
                    );
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.applyScroll();
              },
            },
            {
              key: "renderEvents",
              value: function (e, t, n, r) {
                var o = this,
                  i = this.props,
                  a = i.min,
                  s = i.max,
                  l = i.components,
                  c = i.accessors,
                  d = i.localizer,
                  h = i.dayLayoutAlgorithm,
                  p = this.memoizedResources(this.props.resources, c),
                  m = p.groupEvents(t),
                  v = p.groupEvents(n);
                return p.map(function (t, n) {
                  var i = (0, u.A)(t, 2),
                    p = i[0],
                    g = i[1];
                  return e.map(function (e, t) {
                    var i = (m.get(p) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      }),
                      u = (v.get(p) || []).filter(function (t) {
                        return d.inRange(e, c.start(t), c.end(t), "day");
                      });
                    return f.createElement(
                      Ea,
                      Object.assign({}, o.props, {
                        localizer: d,
                        min: d.merge(e, a),
                        max: d.merge(e, s),
                        resource: g && p,
                        components: l,
                        isNow: d.isSameDate(e, r),
                        key: n + "-" + t,
                        date: e,
                        events: i,
                        backgroundEvents: u,
                        dayLayoutAlgorithm: h,
                      }),
                    );
                  });
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  n = t.events,
                  r = t.backgroundEvents,
                  o = t.range,
                  i = t.width,
                  a = t.rtl,
                  s = t.selected,
                  l = t.getNow,
                  c = t.resources,
                  u = t.components,
                  d = t.accessors,
                  h = t.getters,
                  p = t.localizer,
                  m = t.min,
                  v = t.max,
                  g = t.showMultiDayTimes,
                  y = t.longPressThreshold,
                  b = t.resizable;
                i = i || this.state.gutterWidth;
                var w = o[0],
                  E = o[o.length - 1];
                this.slots = o.length;
                var A = [],
                  D = [],
                  k = [];
                return (
                  n.forEach(function (e) {
                    if (Vi(e, w, E, d, p)) {
                      var t = d.start(e),
                        n = d.end(e);
                      d.allDay(e) ||
                      p.startAndEndAreDateOnly(t, n) ||
                      (!g && !p.isSameDate(t, n))
                        ? A.push(e)
                        : D.push(e);
                    }
                  }),
                  r.forEach(function (e) {
                    Vi(e, w, E, d, p) && k.push(e);
                  }),
                  A.sort(function (e, t) {
                    return Gi(e, t, d, p);
                  }),
                  f.createElement(
                    "div",
                    {
                      className: S(
                        "rbc-time-view",
                        c && "rbc-time-view-resources",
                      ),
                      ref: this.containerRef,
                    },
                    f.createElement(ka, {
                      range: o,
                      events: A,
                      width: i,
                      rtl: a,
                      getNow: l,
                      localizer: p,
                      selected: s,
                      allDayMaxRows: this.props.showAllEvents
                        ? 1 / 0
                        : null !== (e = this.props.allDayMaxRows) &&
                            void 0 !== e
                          ? e
                          : 1 / 0,
                      resources: this.memoizedResources(c, d),
                      selectable: this.props.selectable,
                      accessors: d,
                      getters: h,
                      components: u,
                      scrollRef: this.scrollRef,
                      isOverflowing: this.state.isOverflowing,
                      longPressThreshold: y,
                      onSelectSlot: this.handleSelectAllDaySlot,
                      onSelectEvent: this.handleSelectEvent,
                      onShowMore: this.handleShowMore,
                      onDoubleClickEvent: this.props.onDoubleClickEvent,
                      onKeyPressEvent: this.props.onKeyPressEvent,
                      onDrillDown: this.props.onDrillDown,
                      getDrilldownView: this.props.getDrilldownView,
                      resizable: b,
                    }),
                    this.props.popup && this.renderOverlay(),
                    f.createElement(
                      "div",
                      {
                        ref: this.contentRef,
                        className: "rbc-time-content",
                        onScroll: this.handleScroll,
                      },
                      f.createElement(Da, {
                        date: w,
                        ref: this.gutterRef,
                        localizer: p,
                        min: p.merge(w, m),
                        max: p.merge(w, v),
                        step: this.props.step,
                        getNow: this.props.getNow,
                        timeslots: this.props.timeslots,
                        components: u,
                        className: "rbc-time-gutter",
                        getters: h,
                      }),
                      this.renderEvents(o, D, k, l()),
                    ),
                  )
                );
              },
            },
            {
              key: "renderOverlay",
              value: function () {
                var e,
                  t,
                  n = this,
                  r =
                    null !==
                      (e =
                        null === (t = this.state) || void 0 === t
                          ? void 0
                          : t.overlay) && void 0 !== e
                      ? e
                      : {},
                  o = this.props,
                  i = o.accessors,
                  a = o.localizer,
                  s = o.components,
                  l = o.getters,
                  c = o.selected,
                  u = o.popupOffset,
                  d = o.handleDragStart;
                return f.createElement(Ci, {
                  overlay: r,
                  accessors: i,
                  localizer: a,
                  components: s,
                  getters: l,
                  selected: c,
                  popupOffset: u,
                  ref: this.containerRef,
                  handleKeyPressEvent: this.handleKeyPressEvent,
                  handleSelectEvent: this.handleSelectEvent,
                  handleDoubleClickEvent: this.handleDoubleClickEvent,
                  handleDragStart: d,
                  show: !!r.position,
                  overlayDisplay: this.overlayDisplay,
                  onHide: function () {
                    return n.setState({ overlay: null });
                  },
                });
              },
            },
            {
              key: "clearSelection",
              value: function () {
                clearTimeout(this._selectTimer), (this._pendingSelection = []);
              },
            },
            {
              key: "measureGutter",
              value: function () {
                var e = this;
                this.measureGutterAnimationFrameRequest &&
                  window.cancelAnimationFrame(
                    this.measureGutterAnimationFrameRequest,
                  ),
                  (this.measureGutterAnimationFrameRequest =
                    window.requestAnimationFrame(function () {
                      var t,
                        n =
                          null !== (t = e.gutterRef) &&
                          void 0 !== t &&
                          t.current
                            ? Er(e.gutterRef.current)
                            : void 0;
                      n &&
                        e.state.gutterWidth !== n &&
                        e.setState({ gutterWidth: n });
                    }));
              },
            },
            {
              key: "applyScroll",
              value: function () {
                if (
                  null != this._scrollRatio &&
                  !0 === this.props.enableAutoScroll
                ) {
                  var e = this.contentRef.current;
                  (e.scrollTop = e.scrollHeight * this._scrollRatio),
                    (this._scrollRatio = null);
                }
              },
            },
            {
              key: "calculateScroll",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.props,
                  t = e.min,
                  n = e.max,
                  r = e.scrollToTime,
                  o = e.localizer,
                  i = o.diff(o.merge(r, t), r, "milliseconds"),
                  a = o.diff(t, n, "milliseconds");
                this._scrollRatio = i / a;
              },
            },
          ]),
          n
        );
      })(f.Component);
      Oa.defaultProps = { step: 30, timeslots: 2 };
      var xa = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ma = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    a = void 0 === i ? r.startOf(new Date(), "day") : i,
                    s = e.max,
                    l = void 0 === s ? r.endOf(new Date(), "day") : s,
                    c = e.scrollToTime,
                    u = void 0 === c ? r.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    h = void 0 === d || d,
                    p = (0, o.A)(e, xa),
                    m = n.range(t, { localizer: r });
                  return f.createElement(
                    Oa,
                    Object.assign({}, p, {
                      range: m,
                      eventOffset: 10,
                      localizer: r,
                      min: a,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: h,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      (Ma.range = function (e, t) {
        return [t.localizer.startOf(e, "day")];
      }),
        (Ma.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Ko:
              return r.add(e, -1, "day");
            case Vo:
              return r.add(e, 1, "day");
            default:
              return e;
          }
        }),
        (Ma.title = function (e, t) {
          return t.localizer.format(e, "dayHeaderFormat");
        });
      var Ra = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ],
        Ca = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    r = e.localizer,
                    i = e.min,
                    a = void 0 === i ? r.startOf(new Date(), "day") : i,
                    s = e.max,
                    l = void 0 === s ? r.endOf(new Date(), "day") : s,
                    c = e.scrollToTime,
                    u = void 0 === c ? r.startOf(new Date(), "day") : c,
                    d = e.enableAutoScroll,
                    h = void 0 === d || d,
                    p = (0, o.A)(e, Ra),
                    m = n.range(t, this.props);
                  return f.createElement(
                    Oa,
                    Object.assign({}, p, {
                      range: m,
                      eventOffset: 15,
                      localizer: r,
                      min: a,
                      max: l,
                      scrollToTime: u,
                      enableAutoScroll: h,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      (Ca.defaultProps = Oa.defaultProps),
        (Ca.navigate = function (e, t, n) {
          var r = n.localizer;
          switch (t) {
            case Ko:
              return r.add(e, -1, "week");
            case Vo:
              return r.add(e, 1, "week");
            default:
              return e;
          }
        }),
        (Ca.range = function (e, t) {
          var n = t.localizer,
            r = n.startOfWeek(),
            o = n.startOf(e, "week", r),
            i = n.endOf(e, "week", r);
          return n.range(o, i);
        }),
        (Ca.title = function (e, t) {
          var n = t.localizer,
            r = _r(Ca.range(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        });
      var Ta = [
        "date",
        "localizer",
        "min",
        "max",
        "scrollToTime",
        "enableAutoScroll",
      ];
      function Pa(e, t) {
        return Ca.range(e, t).filter(function (e) {
          return -1 === [6, 0].indexOf(e.getDay());
        });
      }
      var Na,
        La = (function (e) {
          (0, l.A)(n, e);
          var t = (0, c.A)(n);
          function n() {
            return (0, a.A)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.A)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.date,
                    n = e.localizer,
                    r = e.min,
                    i = void 0 === r ? n.startOf(new Date(), "day") : r,
                    a = e.max,
                    s = void 0 === a ? n.endOf(new Date(), "day") : a,
                    l = e.scrollToTime,
                    c = void 0 === l ? n.startOf(new Date(), "day") : l,
                    u = e.enableAutoScroll,
                    d = void 0 === u || u,
                    h = (0, o.A)(e, Ta),
                    p = Pa(t, this.props);
                  return f.createElement(
                    Oa,
                    Object.assign({}, h, {
                      range: p,
                      eventOffset: 15,
                      localizer: n,
                      min: i,
                      max: s,
                      scrollToTime: c,
                      enableAutoScroll: d,
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(f.Component);
      function za(e) {
        var t = e.accessors,
          n = e.components,
          r = e.date,
          o = e.events,
          i = e.getters,
          a = e.length,
          s = e.localizer,
          l = e.onDoubleClickEvent,
          c = e.onSelectEvent,
          u = e.selected,
          d = (0, f.useRef)(null),
          h = (0, f.useRef)(null),
          p = (0, f.useRef)(null),
          m = (0, f.useRef)(null),
          v = (0, f.useRef)(null);
        (0, f.useEffect)(function () {
          y();
        });
        var g = function (e, r) {
            var o = "",
              i = n.time,
              a = s.messages.allDay,
              l = t.end(r),
              c = t.start(r);
            return (
              t.allDay(r) ||
                (s.eq(c, l)
                  ? (a = s.format(c, "agendaTimeFormat"))
                  : s.isSameDate(c, l)
                    ? (a = s.format(
                        { start: c, end: l },
                        "agendaTimeRangeFormat",
                      ))
                    : s.isSameDate(e, c)
                      ? (a = s.format(c, "agendaTimeFormat"))
                      : s.isSameDate(e, l) &&
                        (a = s.format(l, "agendaTimeFormat"))),
              s.gt(e, c, "day") && (o = "rbc-continues-prior"),
              s.lt(e, l, "day") && (o += " rbc-continues-after"),
              f.createElement(
                "span",
                { className: o.trim() },
                i ? f.createElement(i, { event: r, day: e, label: a }) : a,
              )
            );
          },
          y = function () {
            if (v.current) {
              var e = d.current,
                t = v.current.firstChild;
              if (t) {
                var n = m.current.scrollHeight > m.current.clientHeight,
                  r = [],
                  o = r;
                (r = [Er(t.children[0]), Er(t.children[1])]),
                  (o[0] === r[0] && o[1] === r[1]) ||
                    ((h.current.style.width = r[0] + "px"),
                    (p.current.style.width = r[1] + "px")),
                  n
                    ? ((0, Or.A)(e, "rbc-header-overflowing"),
                      (e.style.marginRight = wr() + "px"))
                    : (0, xr.A)(e, "rbc-header-overflowing");
              }
            }
          },
          b = s.messages,
          w = s.add(r, a, "day"),
          E = s.range(r, w, "day");
        return (
          (o = o.filter(function (e) {
            return Vi(e, s.startOf(r, "day"), s.endOf(w, "day"), t, s);
          })).sort(function (e, n) {
            return +t.start(e) - +t.start(n);
          }),
          f.createElement(
            "div",
            { className: "rbc-agenda-view" },
            0 !== o.length
              ? f.createElement(
                  f.Fragment,
                  null,
                  f.createElement(
                    "table",
                    { ref: d, className: "rbc-agenda-table" },
                    f.createElement(
                      "thead",
                      null,
                      f.createElement(
                        "tr",
                        null,
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: h },
                          b.date,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header", ref: p },
                          b.time,
                        ),
                        f.createElement(
                          "th",
                          { className: "rbc-header" },
                          b.event,
                        ),
                      ),
                    ),
                  ),
                  f.createElement(
                    "div",
                    { className: "rbc-agenda-content", ref: m },
                    f.createElement(
                      "table",
                      { className: "rbc-agenda-table" },
                      f.createElement(
                        "tbody",
                        { ref: v },
                        E.map(function (e, r) {
                          return (function (e, r, o) {
                            var a = n.event,
                              d = n.date;
                            return (r = r.filter(function (n) {
                              return Vi(
                                n,
                                s.startOf(e, "day"),
                                s.endOf(e, "day"),
                                t,
                                s,
                              );
                            })).map(function (n, h) {
                              var p = t.title(n),
                                m = t.end(n),
                                v = t.start(n),
                                y = i.eventProp(n, v, m, ki(n, u)),
                                b = 0 === h && s.format(e, "agendaDateFormat"),
                                w =
                                  0 === h &&
                                  f.createElement(
                                    "td",
                                    {
                                      rowSpan: r.length,
                                      className: "rbc-agenda-date-cell",
                                    },
                                    d
                                      ? f.createElement(d, { day: e, label: b })
                                      : b,
                                  );
                              return f.createElement(
                                "tr",
                                {
                                  key: o + "_" + h,
                                  className: y.className,
                                  style: y.style,
                                },
                                w,
                                f.createElement(
                                  "td",
                                  { className: "rbc-agenda-time-cell" },
                                  g(e, n),
                                ),
                                f.createElement(
                                  "td",
                                  {
                                    className: "rbc-agenda-event-cell",
                                    onClick: function (e) {
                                      return c && c(n, e);
                                    },
                                    onDoubleClick: function (e) {
                                      return l && l(n, e);
                                    },
                                  },
                                  a
                                    ? f.createElement(a, { event: n, title: p })
                                    : p,
                                ),
                              );
                            }, []);
                          })(e, o, r);
                        }),
                      ),
                    ),
                  ),
                )
              : f.createElement(
                  "span",
                  { className: "rbc-agenda-empty" },
                  b.noEventsInRange,
                ),
          )
        );
      }
      (La.defaultProps = Oa.defaultProps),
        (La.range = Pa),
        (La.navigate = Ca.navigate),
        (La.title = function (e, t) {
          var n = t.localizer,
            r = _r(Pa(e, { localizer: n })),
            o = r[0],
            i = r.slice(1);
          return n.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
        }),
        (za.defaultProps = { length: 30 }),
        (za.range = function (e, t) {
          var n = t.length,
            r = void 0 === n ? za.defaultProps.length : n;
          return { start: e, end: t.localizer.add(e, r, "day") };
        }),
        (za.navigate = function (e, t, n) {
          var r = n.length,
            o = void 0 === r ? za.defaultProps.length : r,
            i = n.localizer;
          switch (t) {
            case Ko:
              return i.add(e, -o, "day");
            case Vo:
              return i.add(e, o, "day");
            default:
              return e;
          }
        }),
        (za.title = function (e, t) {
          var n = t.length,
            r = void 0 === n ? za.defaultProps.length : n,
            o = t.localizer,
            i = o.add(e, r, "day");
          return o.format({ start: e, end: i }, "agendaHeaderFormat");
        });
      var ja =
          ((Na = {}),
          (0, ce.A)(Na, Xo.MONTH, aa),
          (0, ce.A)(Na, Xo.WEEK, Ca),
          (0, ce.A)(Na, Xo.WORK_WEEK, La),
          (0, ce.A)(Na, Xo.DAY, Ma),
          (0, ce.A)(Na, Xo.AGENDA, za),
          Na),
        Ia = ["action", "date", "today"];
      var Fa = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).navigate = function (t) {
              e.props.onNavigate(t);
            }),
            (e.view = function (t) {
              e.props.onView(t);
            }),
            e
          );
        }
        return (
          (0, s.A)(n, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.localizer.messages,
                  n = e.label;
                return f.createElement(
                  "div",
                  { className: "rbc-toolbar" },
                  f.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, $o) },
                      t.today,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Ko) },
                      t.previous,
                    ),
                    f.createElement(
                      "button",
                      { type: "button", onClick: this.navigate.bind(null, Vo) },
                      t.next,
                    ),
                  ),
                  f.createElement(
                    "span",
                    { className: "rbc-toolbar-label" },
                    n,
                  ),
                  f.createElement(
                    "span",
                    { className: "rbc-btn-group" },
                    this.viewNamesGroup(t),
                  ),
                );
              },
            },
            {
              key: "viewNamesGroup",
              value: function (e) {
                var t = this,
                  n = this.props.views,
                  r = this.props.view;
                if (n.length > 1)
                  return n.map(function (n) {
                    return f.createElement(
                      "button",
                      {
                        type: "button",
                        key: n,
                        className: S({ "rbc-active": r === n }),
                        onClick: t.view.bind(null, n),
                      },
                      e[n],
                    );
                  });
              },
            },
          ]),
          n
        );
      })(f.Component);
      var Wa = function (e) {
          return function (t) {
            return (function (e, t) {
              var n = null;
              return (
                "function" == typeof t
                  ? (n = t(e))
                  : "string" == typeof t &&
                    "object" === (0, i.A)(e) &&
                    null != e &&
                    t in e &&
                    (n = e[t]),
                n
              );
            })(t, e);
          };
        },
        Ha = ["view", "date", "getNow", "onNavigate"],
        Ua = [
          "view",
          "toolbar",
          "events",
          "backgroundEvents",
          "style",
          "className",
          "elementProps",
          "date",
          "getNow",
          "length",
          "showMultiDayTimes",
          "onShowMore",
          "doShowMoreDrillDown",
          "components",
          "formats",
          "messages",
          "culture",
        ];
      function Ya(e) {
        if (Array.isArray(e)) return e;
        for (var t = [], n = 0, r = Object.entries(e); n < r.length; n++) {
          var o = (0, u.A)(r[n], 2),
            i = o[0];
          o[1] && t.push(i);
        }
        return t;
      }
      var Ba = (function (e) {
        (0, l.A)(n, e);
        var t = (0, c.A)(n);
        function n() {
          var e;
          (0, a.A)(this, n);
          for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
            l[c] = arguments[c];
          return (
            ((e = t.call.apply(t, [this].concat(l))).getViews = function () {
              var t = e.props.views;
              return Array.isArray(t)
                ? Uo(
                    t,
                    function (e, t) {
                      return (e[t] = ja[t]);
                    },
                    {},
                  )
                : "object" === (0, i.A)(t)
                  ? Bo(t, function (e, t) {
                      return !0 === e ? ja[t] : e;
                    })
                  : ja;
            }),
            (e.getView = function () {
              return e.getViews()[e.props.view];
            }),
            (e.getDrilldownView = function (t) {
              var n = e.props,
                r = n.view,
                o = n.drilldownView,
                i = n.getDrilldownView;
              return i ? i(t, r, Object.keys(e.getViews())) : o;
            }),
            (e.handleRangeChange = function (t, n, r) {
              var o = e.props,
                i = o.onRangeChange,
                a = o.localizer;
              i && n.range && i(n.range(t, { localizer: a }), r);
            }),
            (e.handleNavigate = function (t, n) {
              var i = e.props,
                a = i.view,
                s = i.date,
                l = i.getNow,
                c = i.onNavigate,
                u = (0, o.A)(i, Ha),
                f = e.getView(),
                d = l();
              (s = (function (e, t) {
                var n = t.action,
                  r = t.date,
                  i = t.today,
                  a = (0, o.A)(t, Ia);
                switch (((e = "string" == typeof e ? ja[e] : e), n)) {
                  case $o:
                    r = i || new Date();
                    break;
                  case Go:
                    break;
                  default:
                    h()(
                      e && "function" == typeof e.navigate,
                      "Calendar View components must implement a static `.navigate(date, action)` method.s",
                    ),
                      (r = e.navigate(r, n, a));
                }
                return r;
              })(
                f,
                (0, r.A)(
                  (0, r.A)({}, u),
                  {},
                  { action: t, date: n || s || d, today: d },
                ),
              )),
                c(s, a, t),
                e.handleRangeChange(s, f);
            }),
            (e.handleViewChange = function (t) {
              t !== e.props.view &&
                (function (e, t) {
                  return -1 !== Ya(t.views).indexOf(e);
                })(t, e.props) &&
                e.props.onView(t);
              var n = e.getViews();
              e.handleRangeChange(e.props.date || e.props.getNow(), n[t], t);
            }),
            (e.handleSelectEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Qo(e.props.onSelectEvent, n);
            }),
            (e.handleDoubleClickEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Qo(e.props.onDoubleClickEvent, n);
            }),
            (e.handleKeyPressEvent = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              Qo(e.props.onKeyPressEvent, n);
            }),
            (e.handleSelectSlot = function (t) {
              Qo(e.props.onSelectSlot, t);
            }),
            (e.handleDrillDown = function (t, n) {
              var r = e.props.onDrillDown;
              r
                ? r(t, n, e.drilldownView)
                : (n && e.handleViewChange(n), e.handleNavigate(Go, t));
            }),
            (e.state = { context: n.getContext(e.props) }),
            e
          );
        }
        return (
          (0, s.A)(
            n,
            [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.view,
                    n = e.toolbar,
                    r = e.events,
                    i = e.backgroundEvents,
                    a = e.style,
                    s = e.className,
                    l = e.elementProps,
                    c = e.date,
                    u = e.getNow,
                    d = e.length,
                    h = e.showMultiDayTimes,
                    p = e.onShowMore,
                    m = e.doShowMoreDrillDown;
                  e.components, e.formats, e.messages, e.culture;
                  var v = (0, o.A)(e, Ua);
                  c = c || u();
                  var g = this.getView(),
                    y = this.state.context,
                    b = y.accessors,
                    w = y.components,
                    E = y.getters,
                    A = y.localizer,
                    D = y.viewNames,
                    k = w.toolbar || Fa,
                    _ = g.title(c, { localizer: A, length: d });
                  return f.createElement(
                    "div",
                    Object.assign({}, l, {
                      className: S(s, "rbc-calendar", v.rtl && "rbc-rtl"),
                      style: a,
                    }),
                    n &&
                      f.createElement(k, {
                        date: c,
                        view: t,
                        views: D,
                        label: _,
                        onView: this.handleViewChange,
                        onNavigate: this.handleNavigate,
                        localizer: A,
                      }),
                    f.createElement(
                      g,
                      Object.assign({}, v, {
                        events: r,
                        backgroundEvents: i,
                        date: c,
                        getNow: u,
                        length: d,
                        localizer: A,
                        getters: E,
                        components: w,
                        accessors: b,
                        showMultiDayTimes: h,
                        getDrilldownView: this.getDrilldownView,
                        onNavigate: this.handleNavigate,
                        onDrillDown: this.handleDrillDown,
                        onSelectEvent: this.handleSelectEvent,
                        onDoubleClickEvent: this.handleDoubleClickEvent,
                        onKeyPressEvent: this.handleKeyPressEvent,
                        onSelectSlot: this.handleSelectSlot,
                        onShowMore: p,
                        doShowMoreDrillDown: m,
                      }),
                    ),
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e) {
                  return { context: n.getContext(e) };
                },
              },
              {
                key: "getContext",
                value: function (e) {
                  var t = e.startAccessor,
                    n = e.endAccessor,
                    o = e.allDayAccessor,
                    i = e.tooltipAccessor,
                    a = e.titleAccessor,
                    s = e.resourceAccessor,
                    l = e.resourceIdAccessor,
                    c = e.resourceTitleAccessor,
                    u = e.eventPropGetter,
                    f = e.backgroundEventPropGetter,
                    d = e.slotPropGetter,
                    h = e.slotGroupPropGetter,
                    p = e.dayPropGetter,
                    m = e.view,
                    v = e.views,
                    g = e.localizer,
                    y = e.culture,
                    b = e.messages,
                    w = void 0 === b ? {} : b,
                    E = e.components,
                    A = void 0 === E ? {} : E,
                    D = e.formats,
                    S = void 0 === D ? {} : D,
                    k = Ya(v);
                  return {
                    viewNames: k,
                    localizer: Ei(
                      g,
                      y,
                      S,
                      (function (e) {
                        return (0, r.A)((0, r.A)({}, Ai), e);
                      })(w),
                    ),
                    getters: {
                      eventProp: function () {
                        return (u && u.apply(void 0, arguments)) || {};
                      },
                      backgroundEventProp: function () {
                        return (f && f.apply(void 0, arguments)) || {};
                      },
                      slotProp: function () {
                        return (d && d.apply(void 0, arguments)) || {};
                      },
                      slotGroupProp: function () {
                        return (h && h.apply(void 0, arguments)) || {};
                      },
                      dayProp: function () {
                        return (p && p.apply(void 0, arguments)) || {};
                      },
                    },
                    components: jo(A[m] || {}, Po(A, k), {
                      eventWrapper: qo,
                      backgroundEventWrapper: qo,
                      eventContainerWrapper: qo,
                      dateCellWrapper: qo,
                      weekWrapper: qo,
                      timeSlotWrapper: qo,
                      timeGutterWrapper: qo,
                    }),
                    accessors: {
                      start: Wa(t),
                      end: Wa(n),
                      allDay: Wa(o),
                      tooltip: Wa(i),
                      title: Wa(a),
                      resource: Wa(s),
                      resourceId: Wa(l),
                      resourceTitle: Wa(c),
                    },
                  };
                },
              },
            ],
          ),
          n
        );
      })(f.Component);
      Ba.defaultProps = {
        events: [],
        backgroundEvents: [],
        elementProps: {},
        popup: !1,
        toolbar: !0,
        view: Xo.MONTH,
        views: [Xo.MONTH, Xo.WEEK, Xo.DAY, Xo.AGENDA],
        step: 30,
        length: 30,
        allDayMaxRows: 1 / 0,
        doShowMoreDrillDown: !0,
        drilldownView: Xo.DAY,
        titleAccessor: "title",
        tooltipAccessor: "title",
        allDayAccessor: "allDay",
        startAccessor: "start",
        endAccessor: "end",
        resourceAccessor: "resourceId",
        resourceIdAccessor: "id",
        resourceTitleAccessor: "title",
        longPressThreshold: 250,
        getNow: function () {
          return new Date();
        },
        dayLayoutAlgorithm: "overlap",
      };
      var qa = (function e(t, n, r) {
          void 0 === r && (r = []);
          var o,
            i = t.displayName || t.name || "Component",
            a =
              !!(o = t) &&
              ("function" != typeof o ||
                (o.prototype && o.prototype.isReactComponent)),
            s = Object.keys(n),
            l = s.map(v);
          !a && r.length && h()(!1);
          var c = (function (e) {
            function o() {
              for (
                var t, o = arguments.length, i = new Array(o), a = 0;
                a < o;
                a++
              )
                i[a] = arguments[a];
              ((t = e.call.apply(e, [this].concat(i)) || this).handlers =
                Object.create(null)),
                s.forEach(function (e) {
                  var r = n[e];
                  t.handlers[r] = function (n) {
                    if (t.props[r]) {
                      var o;
                      t._notifying = !0;
                      for (
                        var i = arguments.length,
                          a = new Array(i > 1 ? i - 1 : 0),
                          s = 1;
                        s < i;
                        s++
                      )
                        a[s - 1] = arguments[s];
                      (o = t.props)[r].apply(o, [n].concat(a)),
                        (t._notifying = !1);
                    }
                    t.unmounted ||
                      t.setState(function (t) {
                        var r,
                          o = t.values;
                        return {
                          values: (0, y.A)(
                            Object.create(null),
                            o,
                            ((r = {}), (r[e] = n), r),
                          ),
                        };
                      });
                  };
                }),
                r.length &&
                  (t.attachRef = function (e) {
                    t.inner = e;
                  });
              var l = Object.create(null);
              return (
                s.forEach(function (e) {
                  l[e] = t.props[v(e)];
                }),
                (t.state = { values: l, prevProps: {} }),
                t
              );
            }
            (0, b.A)(o, e);
            var i = o.prototype;
            return (
              (i.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (o.getDerivedStateFromProps = function (e, t) {
                var n = t.values,
                  r = t.prevProps,
                  o = {
                    values: (0, y.A)(Object.create(null), n),
                    prevProps: {},
                  };
                return (
                  s.forEach(function (t) {
                    (o.prevProps[t] = e[t]),
                      !m(e, t) && m(r, t) && (o.values[t] = e[v(t)]);
                  }),
                  o
                );
              }),
              (i.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (i.render = function () {
                var e = this,
                  n = this.props,
                  r = n.innerRef,
                  o = (0, g.A)(n, ["innerRef"]);
                l.forEach(function (e) {
                  delete o[e];
                });
                var i = {};
                return (
                  s.forEach(function (t) {
                    var n = e.props[t];
                    i[t] = void 0 !== n ? n : e.state.values[t];
                  }),
                  f.createElement(
                    t,
                    (0, y.A)({}, o, i, this.handlers, {
                      ref: r || this.attachRef,
                    }),
                  )
                );
              }),
              o
            );
          })(f.Component);
          !(function (e) {
            var t = e.prototype;
            if (!t || !t.isReactComponent)
              throw new Error("Can only polyfill class components");
            if (
              "function" != typeof e.getDerivedStateFromProps &&
              "function" != typeof t.getSnapshotBeforeUpdate
            )
              return e;
            var n = null,
              r = null,
              o = null;
            if (
              ("function" == typeof t.componentWillMount
                ? (n = "componentWillMount")
                : "function" == typeof t.UNSAFE_componentWillMount &&
                  (n = "UNSAFE_componentWillMount"),
              "function" == typeof t.componentWillReceiveProps
                ? (r = "componentWillReceiveProps")
                : "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                  (r = "UNSAFE_componentWillReceiveProps"),
              "function" == typeof t.componentWillUpdate
                ? (o = "componentWillUpdate")
                : "function" == typeof t.UNSAFE_componentWillUpdate &&
                  (o = "UNSAFE_componentWillUpdate"),
              null !== n || null !== r || null !== o)
            ) {
              var i = e.displayName || e.name,
                a =
                  "function" == typeof e.getDerivedStateFromProps
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
              throw Error(
                "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                  i +
                  " uses " +
                  a +
                  " but also contains the following legacy lifecycles:" +
                  (null !== n ? "\n  " + n : "") +
                  (null !== r ? "\n  " + r : "") +
                  (null !== o ? "\n  " + o : "") +
                  "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
              );
            }
            if (
              ("function" == typeof e.getDerivedStateFromProps &&
                ((t.componentWillMount = w), (t.componentWillReceiveProps = E)),
              "function" == typeof t.getSnapshotBeforeUpdate)
            ) {
              if ("function" != typeof t.componentDidUpdate)
                throw new Error(
                  "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
                );
              t.componentWillUpdate = A;
              var s = t.componentDidUpdate;
              t.componentDidUpdate = function (e, t, n) {
                var r = this.__reactInternalSnapshotFlag
                  ? this.__reactInternalSnapshot
                  : n;
                s.call(this, e, t, r);
              };
            }
          })(c),
            (c.displayName = "Uncontrolled(" + i + ")"),
            (c.propTypes = (0, y.A)(
              { innerRef: function () {} },
              (function (e) {
                var t = {};
                return (
                  Object.keys(e).forEach(function (e) {
                    t[v(e)] = p;
                  }),
                  t
                );
              })(n),
            )),
            r.forEach(function (e) {
              c.prototype[e] = function () {
                var t;
                return (t = this.inner)[e].apply(t, arguments);
              };
            });
          var u = c;
          return (
            f.forwardRef &&
              ((u = f.forwardRef(function (e, t) {
                return f.createElement(
                  c,
                  (0, y.A)({}, e, {
                    innerRef: t,
                    __source: {
                      fileName:
                        "/Users/jquense/src/uncontrollable/src/uncontrollable.js",
                      lineNumber: 128,
                    },
                    __self: this,
                  }),
                );
              })).propTypes = c.propTypes),
            (u.ControlledComponent = t),
            (u.deferControlTo = function (t, r, o) {
              return void 0 === r && (r = {}), e(t, (0, y.A)({}, n, r), o);
            }),
            u
          );
        })(Ba, {
          view: "onView",
          date: "onNavigate",
          selected: "onSelectEvent",
        }),
        Ka = function (e, t, n) {
          var r = e.start,
            o = e.end;
          return n.format(r, "LT", t) + " – " + n.format(o, "LT", t);
        },
        Va = {
          dateFormat: "DD",
          dayFormat: "DD ddd",
          weekdayFormat: "ddd",
          selectRangeFormat: Ka,
          eventTimeRangeFormat: Ka,
          eventTimeRangeStartFormat: function (e, t, n) {
            var r = e.start;
            return n.format(r, "LT", t) + " – ";
          },
          eventTimeRangeEndFormat: function (e, t, n) {
            var r = e.end;
            return " – " + n.format(r, "LT", t);
          },
          timeGutterFormat: "LT",
          monthHeaderFormat: "MMMM YYYY",
          dayHeaderFormat: "dddd MMM DD",
          dayRangeHeaderFormat: function (e, t, n) {
            var r = e.start,
              o = e.end;
            return (
              n.format(r, "MMMM DD", t) +
              " – " +
              n.format(o, n.eq(r, o, "month") ? "DD" : "MMMM DD", t)
            );
          },
          agendaHeaderFormat: function (e, t, n) {
            var r = e.start,
              o = e.end;
            return n.format(r, "L", t) + " – " + n.format(o, "L", t);
          },
          agendaDateFormat: "ddd MMM DD",
          agendaTimeFormat: "LT",
          agendaTimeRangeFormat: Ka,
        };
      function $a(e) {
        var t = e ? e.toLowerCase() : e;
        return "FullYear" === t ? (t = "year") : t || (t = void 0), t;
      }
      function Ga(e) {
        function t(t, n) {
          var r,
            o,
            i = e(t).local(),
            a = e(n).local();
          if (!e.tz)
            return (
              i.toDate().getTimezoneOffset() - a.toDate().getTimezoneOffset()
            );
          var s =
            null !==
              (r =
                null == i || null === (o = i._z) || void 0 === o
                  ? void 0
                  : o.name) && void 0 !== r
              ? r
              : e.tz.guess();
          return e.tz.zone(s).utcOffset(+i) - e.tz.zone(s).utcOffset(+a);
        }
        function n(t, n, r) {
          var o = $a(r);
          return [o ? e(t).startOf(o) : e(t), o ? e(n).startOf(o) : e(n), o];
        }
        function r() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n = $a(arguments.length > 1 ? arguments[1] : void 0);
          return n ? e(t).startOf(n).toDate() : e(t).toDate();
        }
        function o(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            l = i[2];
          return a.isSame(s, l);
        }
        function i(e, t, r) {
          var o = n(e, t, r),
            i = (0, u.A)(o, 3),
            a = i[0],
            s = i[1],
            l = i[2];
          return a.isSameOrBefore(s, l);
        }
        function a(t, n, r) {
          var o = $a(r);
          return e(t).add(n, o).toDate();
        }
        function s(e, t) {
          var n = $a(t),
            i = r(e, n);
          return o(i, e) ? i : a(i, 1, n);
        }
        function l(t, n) {
          var r = $a(
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "day",
            ),
            o = e(t);
          return e(n).diff(o, r);
        }
        function c(t) {
          return e(t).startOf("month").startOf("week").toDate();
        }
        function f(t) {
          return e(t).endOf("month").endOf("week").toDate();
        }
        return new wi({
          formats: Va,
          firstOfWeek: function (t) {
            var n = t ? e.localeData(t) : e.localeData();
            return n ? n.firstDayOfWeek() : 0;
          },
          firstVisibleDay: c,
          lastVisibleDay: f,
          visibleDays: function (e) {
            for (var t = c(e), n = f(e), r = []; i(t, n); )
              r.push(t), (t = a(t, 1, "d"));
            return r;
          },
          format: function (t, n, r) {
            return ((o = e(t)), (i = r), i ? o.locale(i) : o).format(n);
            var o, i;
          },
          lt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isBefore(s, l);
          },
          lte: i,
          gt: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isAfter(s, l);
          },
          gte: function (e, t, r) {
            var o = n(e, t, r),
              i = (0, u.A)(o, 3),
              a = i[0],
              s = i[1],
              l = i[2];
            return a.isSameOrBefore(s, l);
          },
          eq: o,
          neq: function (e, t, n) {
            return !o(e, t, n);
          },
          merge: function (t, n) {
            if (!t && !n) return null;
            var r = e(n).format("HH:mm:ss"),
              o = e(t).startOf("day").format("MM/DD/YYYY");
            return e(
              "".concat(o, " ").concat(r),
              "MM/DD/YYYY HH:mm:ss",
            ).toDate();
          },
          inRange: function (t, n, r) {
            var o = $a(
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "day",
              ),
              i = e(t),
              a = e(n),
              s = e(r);
            return i.isBetween(a, s, o, "[]");
          },
          startOf: r,
          endOf: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              n = $a(arguments.length > 1 ? arguments[1] : void 0);
            return n ? e(t).endOf(n).toDate() : e(t).toDate();
          },
          range: function (t, n) {
            for (
              var r = $a(
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "day",
                ),
                o = e(t).toDate(),
                s = [];
              i(o, n);
            )
              s.push(o), (o = a(o, 1, r));
            return s;
          },
          add: a,
          diff: l,
          ceil: s,
          min: function (t, n) {
            var r = e(t),
              o = e(n);
            return e.min(r, o).toDate();
          },
          max: function (t, n) {
            var r = e(t),
              o = e(n);
            return e.max(r, o).toDate();
          },
          minutes: function (t) {
            return e(t).minutes();
          },
          getSlotDate: function (t, n, r) {
            return e(t)
              .startOf("day")
              .minute(n + r)
              .toDate();
          },
          getTimezoneOffset: function (t) {
            return e(t).toDate().getTimezoneOffset();
          },
          getDstOffset: t,
          getTotalMin: function (e, t) {
            return l(e, t, "minutes");
          },
          getMinutesFromMidnight: function (n) {
            var r = e(n).startOf("day");
            return (
              e(n).diff(r, "minutes") +
              (function (n) {
                return t(e(n).startOf("day"), n);
              })(n)
            );
          },
          continuesPrior: function (t, n) {
            var r = e(t),
              o = e(n);
            return r.isBefore(o, "day");
          },
          continuesAfter: function (t, n, r) {
            var o = e(n),
              i = e(r);
            return o.isSameOrAfter(i, "minutes");
          },
          sortEvents: function (e) {
            var t = e.evtA,
              n = t.start,
              o = t.end,
              i = t.allDay,
              a = e.evtB,
              c = a.start,
              u = a.end,
              f = a.allDay,
              d = +r(n, "day") - +r(c, "day"),
              h = l(n, s(o, "day"), "day"),
              p = l(c, s(u, "day"), "day");
            return (
              d ||
              Math.max(p, 1) - Math.max(h, 1) ||
              !!f - !!i ||
              +n - +c ||
              +o - +u
            );
          },
          inEventRange: function (t) {
            var n = t.event,
              r = n.start,
              o = n.end,
              i = t.range,
              a = i.start,
              s = i.end,
              l = e(r).startOf("day"),
              c = e(o),
              u = e(a),
              f = e(s),
              d = l.isSameOrBefore(f, "day"),
              h = !l.isSame(c, "minutes")
                ? c.isAfter(u, "minutes")
                : c.isSameOrAfter(u, "minutes");
            return d && h;
          },
          isSameDate: function (t, n) {
            var r = e(t),
              o = e(n);
            return r.isSame(o, "day");
          },
          browserTZOffset: function () {
            var t = new Date(),
              n = /-/.test(t.toString()) ? "-" : "",
              r = t.getTimezoneOffset(),
              o = Number("".concat(n).concat(Math.abs(r)));
            return e().utcOffset() > o ? 1 : 0;
          },
        });
      }
    },
    11314: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => l });
      var r = n(1839),
        o = n(62059),
        i = n(36058),
        a = n(55241),
        s = n(5608),
        l = (0, r.gu)({
          chartName: "BarChart",
          GraphicalChild: o.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: a.h },
          ],
          formatAxisMap: s.pr,
        });
    },
    66251: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => l });
      var r = n(1839),
        o = n(76549),
        i = n(36058),
        a = n(55241),
        s = n(5608),
        l = (0, r.gu)({
          chartName: "LineChart",
          GraphicalChild: o.N,
          axisComponents: [
            { axisType: "xAxis", AxisComp: i.W },
            { axisType: "yAxis", AxisComp: a.h },
          ],
          formatAxisMap: s.pr,
        });
    },
    67501: (e) => {
      "use strict";
      var t = function () {};
      e.exports = t;
    },
  },
]);
