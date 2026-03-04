/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6762],
  {
    30565: (e) => {
      e.exports = {
        EventList: "_3iKeBOMuwqPC87BLxvCKll",
        EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
        EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
        Title: "_1bLTz07sQnRA0DjTpjXCza",
        StartDate: "_6accgtG1qR7tHFL1wnO58",
        TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
        ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
        CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
        CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
        Full: "ndEhtgivpXhCilYDnAAVe",
        MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
        MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
      };
    },
    34283: (e) => {
      e.exports = { ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_" };
    },
    85761: (e) => {
      e.exports = {
        Ctn: "_8n9wPNrWDu91tlwBW9bHt",
        Indicator: "_355XkH0xfIpJF1YsMX7I7k",
        EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
        EmailField: "_1E-g4exFlAQhvXDqspYTR0",
        RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
        RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
      };
    },
    13038: (e) => {
      e.exports = {
        Ctn: "_1olTwzPkPjzL36u0WgyDG0",
        Indicator: "_3d0cYrmQzzda_P3DQ994kX",
      };
    },
    30603: (e) => {
      e.exports = {
        ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
        Table: "_2JSoC65mCQdxh-B_srjUjf",
      };
    },
    40323: function (e, t) {
      var n, s, r;
      /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (s = []),
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
            s = !n.document && !!n.postMessage,
            r = n.IS_PAPA_WORKER || !1,
            i = {},
            a = 0,
            o = {};
          function c(e) {
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
                var t = j(e);
                (t.chunkSize = parseInt(t.chunkSize)),
                  e.step || e.chunk || (t.chunkSize = null),
                  (this._handle = new g(t)),
                  ((this._handle.streamer = this)._config = t);
              }.call(this, e),
              (this.parseChunk = function (e, t) {
                var s = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < s) {
                  let t = this._config.newline;
                  t ||
                    ((i = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(t).slice(s)].join(t));
                }
                this.isFirstChunk &&
                  S(this._config.beforeFirstChunk) &&
                  void 0 !== (i = this._config.beforeFirstChunk(e)) &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (s = this._partialLine + e);
                var i =
                  ((this._partialLine = ""),
                  this._handle.parse(s, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    this._finished ||
                      ((this._partialLine = s.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    i && i.data && (this._rowCount += i.data.length),
                    (s =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    r)
                  )
                    n.postMessage({
                      results: i,
                      workerId: o.WORKER_ID,
                      finished: s,
                    });
                  else if (S(this._config.chunk) && !t) {
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
                      !s ||
                      !S(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    s || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                S(this._config.error)
                  ? this._config.error(e)
                  : r &&
                    this._config.error &&
                    n.postMessage({
                      workerId: o.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function l(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = o.RemoteChunkSize),
              c.call(this, e),
              (this._nextChunk = s
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
                    s ||
                      ((t.onload = v(this._chunkLoaded, this)),
                      (t.onerror = v(this._chunkError, this))),
                    t.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !s,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var e,
                      n = this._config.downloadRequestHeaders;
                    for (e in n) t.setRequestHeader(e, n[e]);
                  }
                  var r;
                  this._config.chunkSize &&
                    ((r = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + r,
                    ));
                  try {
                    t.send(this._config.downloadRequestBody);
                  } catch (e) {
                    this._chunkError(e.message);
                  }
                  s && 0 === t.status && this._chunkError();
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
          function d(e) {
            (e = e || {}).chunkSize || (e.chunkSize = o.LocalChunkSize),
              c.call(this, e);
            var t,
              n,
              s = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                s
                  ? (((t = new FileReader()).onload = v(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = v(this._chunkError, this)))
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
                  r =
                    (this._config.chunkSize &&
                      ((r = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, r))),
                    t.readAsText(e, this._config.encoding));
                s || this._chunkLoaded({ target: { result: r } });
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
          function u(e) {
            var t;
            c.call(this, (e = e || {})),
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
          function h(e) {
            c.call(this, (e = e || {}));
            var t = [],
              n = !0,
              s = !1;
            (this.pause = function () {
              c.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                c.prototype.resume.apply(this, arguments), this._input.resume();
              }),
              (this.stream = function (e) {
                (this._input = e),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                s && 1 === t.length && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  t.length ? this.parseChunk(t.shift()) : (n = !0);
              }),
              (this._streamData = v(function (e) {
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
              (this._streamError = v(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = v(function () {
                this._streamCleanUp(), (s = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = v(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function g(e) {
            var t,
              n,
              s,
              r,
              i = Math.pow(2, 53),
              a = -i,
              c = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              l =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              d = this,
              u = 0,
              h = 0,
              g = !1,
              f = !1,
              _ = [],
              x = { data: [], errors: [], meta: {} };
            function v(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function y() {
              if (
                (x &&
                  s &&
                  (E(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      o.DefaultDelimiter +
                      "'",
                  ),
                  (s = !1)),
                e.skipEmptyLines &&
                  (x.data = x.data.filter(function (e) {
                    return !v(e);
                  })),
                w())
              ) {
                if (x)
                  if (Array.isArray(x.data[0])) {
                    for (var t = 0; w() && t < x.data.length; t++)
                      x.data[t].forEach(n);
                    x.data.splice(0, 1);
                  } else x.data.forEach(n);
                function n(t, n) {
                  S(e.transformHeader) && (t = e.transformHeader(t, n)),
                    _.push(t);
                }
              }
              function r(t, n) {
                for (var s = e.header ? {} : [], r = 0; r < t.length; r++) {
                  var o = r,
                    d = t[r];
                  (d = ((t, n) =>
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
                              c.test(e) &&
                              ((e = parseFloat(e)), a < e && e < i)
                            )
                              return 1;
                          })(n)
                            ? parseFloat(n)
                            : l.test(n)
                              ? new Date(n)
                              : "" === n
                                ? null
                                : n))
                      : n)(
                    (o = e.header
                      ? r >= _.length
                        ? "__parsed_extra"
                        : _[r]
                      : o),
                    (d = e.transform ? e.transform(d, o) : d),
                  )),
                    "__parsed_extra" === o
                      ? ((s[o] = s[o] || []), s[o].push(d))
                      : (s[o] = d);
                }
                return (
                  e.header &&
                    (r > _.length
                      ? E(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            _.length +
                            " fields but parsed " +
                            r,
                          h + n,
                        )
                      : r < _.length &&
                        E(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            _.length +
                            " fields but parsed " +
                            r,
                          h + n,
                        )),
                  s
                );
              }
              var d;
              x &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((d = 1),
                !x.data.length || Array.isArray(x.data[0])
                  ? ((x.data = x.data.map(r)), (d = x.data.length))
                  : (x.data = r(x.data, 0)),
                e.header && x.meta && (x.meta.fields = _),
                (h += d));
            }
            function w() {
              return e.header && 0 === _.length;
            }
            function E(e, t, n, s) {
              (e = { type: e, code: t, message: n }),
                void 0 !== s && (e.row = s),
                x.errors.push(e);
            }
            S(e.step) &&
              ((r = e.step),
              (e.step = function (t) {
                (x = t),
                  w()
                    ? y()
                    : (y(),
                      0 !== x.data.length &&
                        ((u += t.data.length),
                        e.preview && u > e.preview
                          ? n.abort()
                          : ((x.data = x.data[0]), r(x, d))));
              })),
              (this.parse = function (r, i, a) {
                var c = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(r, c)),
                  (s = !1),
                  e.delimiter
                    ? S(e.delimiter) &&
                      ((e.delimiter = e.delimiter(r)),
                      (x.meta.delimiter = e.delimiter))
                    : ((c = ((t, n, s, r, i) => {
                        var a, c, l, d;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          o.RECORD_SEP,
                          o.UNIT_SEP,
                        ];
                        for (var u = 0; u < i.length; u++) {
                          for (
                            var h,
                              g = i[u],
                              m = 0,
                              f = 0,
                              _ = 0,
                              x =
                                ((l = void 0),
                                new p({
                                  comments: r,
                                  delimiter: g,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              j = 0;
                            j < x.data.length;
                            j++
                          )
                            s && v(x.data[j])
                              ? _++
                              : ((f += h = x.data[j].length),
                                void 0 === l
                                  ? (l = h)
                                  : 0 < h && ((m += Math.abs(h - l)), (l = h)));
                          0 < x.data.length && (f /= x.data.length - _),
                            (void 0 === c || m <= c) &&
                              (void 0 === d || d < f) &&
                              1.99 < f &&
                              ((c = m), (a = g), (d = f));
                        }
                        return {
                          successful: !!(e.delimiter = a),
                          bestDelimiter: a,
                        };
                      })(
                        r,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = c.bestDelimiter)
                        : ((s = !0), (e.delimiter = o.DefaultDelimiter)),
                      (x.meta.delimiter = e.delimiter)),
                  (c = j(e)),
                  e.preview && e.header && c.preview++,
                  (t = r),
                  (n = new p(c)),
                  (x = n.parse(t, i, a)),
                  y(),
                  g ? { meta: { paused: !0 } } : x || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return g;
              }),
              (this.pause = function () {
                (g = !0),
                  n.abort(),
                  (t = S(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                d.streamer._halted
                  ? ((g = !1), d.streamer.parseChunk(t, !0))
                  : setTimeout(d.resume, 3);
              }),
              (this.aborted = function () {
                return f;
              }),
              (this.abort = function () {
                (f = !0),
                  n.abort(),
                  (x.meta.aborted = !0),
                  S(e.complete) && e.complete(x),
                  (t = "");
              }),
              (this.guessLineEndings = function (e, t) {
                (e = e.substring(0, 1048576)),
                  (t = new RegExp(m(t) + "([^]*?)" + m(t), "gm"));
                var n = (e = e.replace(t, "")).split("\r");
                if (
                  ((e =
                    1 < (t = e.split("\n")).length &&
                    t[0].length < n[0].length),
                  1 === n.length || e)
                )
                  return "\n";
                for (var s = 0, r = 0; r < n.length; r++)
                  "\n" === n[r][0] && s++;
                return s >= n.length / 2 ? "\r\n" : "\r";
              });
          }
          function m(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function p(e) {
            var t = (e = e || {}).delimiter,
              n = e.newline,
              s = e.comments,
              r = e.step,
              i = e.preview,
              a = e.fastMode,
              c = null,
              l = !1,
              d = null == e.quoteChar ? '"' : e.quoteChar,
              u = d;
            if (
              (void 0 !== e.escapeChar && (u = e.escapeChar),
              ("string" != typeof t || -1 < o.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              s === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === s
              ? (s = "#")
              : ("string" != typeof s || -1 < o.BAD_DELIMITERS.indexOf(s)) &&
                (s = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var h = 0,
              g = !1;
            (this.parse = function (o, p, f) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var _ = o.length,
                x = t.length,
                j = n.length,
                v = s.length,
                y = S(r),
                w = [],
                E = [],
                b = [],
                I = (h = 0);
              if (!o) return O();
              if (a || (!1 !== a && -1 === o.indexOf(d))) {
                for (var C = o.split(n), D = 0; D < C.length; D++) {
                  if (((b = C[D]), (h += b.length), D !== C.length - 1))
                    h += n.length;
                  else if (f) return O();
                  if (!s || b.substring(0, v) !== s) {
                    if (y) {
                      if (((w = []), N(b.split(t)), F(), g)) return O();
                    } else N(b.split(t));
                    if (i && i <= D) return (w = w.slice(0, i)), O(!0);
                  }
                }
                return O();
              }
              for (
                var A = o.indexOf(t, h),
                  T = o.indexOf(n, h),
                  k = new RegExp(m(u) + m(d), "g"),
                  R = o.indexOf(d, h);
                ;
              )
                if (o[h] === d)
                  for (R = h, h++; ; ) {
                    if (-1 === (R = o.indexOf(d, R + 1)))
                      return (
                        f ||
                          E.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: w.length,
                            index: h,
                          }),
                        P()
                      );
                    if (R === _ - 1) return P(o.substring(h, R).replace(k, d));
                    if (d === u && o[R + 1] === u) R++;
                    else if (d === u || 0 === R || o[R - 1] !== u) {
                      -1 !== A && A < R + 1 && (A = o.indexOf(t, R + 1));
                      var M = L(
                        -1 ===
                          (T = -1 !== T && T < R + 1 ? o.indexOf(n, R + 1) : T)
                          ? A
                          : Math.min(A, T),
                      );
                      if (o.substr(R + 1 + M, x) === t) {
                        b.push(o.substring(h, R).replace(k, d)),
                          o[(h = R + 1 + M + x)] !== d && (R = o.indexOf(d, h)),
                          (A = o.indexOf(t, h)),
                          (T = o.indexOf(n, h));
                        break;
                      }
                      if (
                        ((M = L(T)),
                        o.substring(R + 1 + M, R + 1 + M + j) === n)
                      ) {
                        if (
                          (b.push(o.substring(h, R).replace(k, d)),
                          B(R + 1 + M + j),
                          (A = o.indexOf(t, h)),
                          (R = o.indexOf(d, h)),
                          y && (F(), g))
                        )
                          return O();
                        if (i && w.length >= i) return O(!0);
                        break;
                      }
                      E.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: w.length,
                        index: h,
                      }),
                        R++;
                    }
                  }
                else if (s && 0 === b.length && o.substring(h, h + v) === s) {
                  if (-1 === T) return O();
                  (h = T + j), (T = o.indexOf(n, h)), (A = o.indexOf(t, h));
                } else if (-1 !== A && (A < T || -1 === T))
                  b.push(o.substring(h, A)), (h = A + x), (A = o.indexOf(t, h));
                else {
                  if (-1 === T) break;
                  if ((b.push(o.substring(h, T)), B(T + j), y && (F(), g)))
                    return O();
                  if (i && w.length >= i) return O(!0);
                }
              return P();
              function N(e) {
                w.push(e), (I = h);
              }
              function L(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(R + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function P(e) {
                return (
                  f ||
                    (void 0 === e && (e = o.substring(h)),
                    b.push(e),
                    (h = _),
                    N(b),
                    y && F()),
                  O()
                );
              }
              function B(e) {
                (h = e), N(b), (b = []), (T = o.indexOf(n, h));
              }
              function O(s) {
                if (e.header && !p && w.length && !l) {
                  var r = w[0],
                    i = Object.create(null),
                    a = new Set(r);
                  let t = !1;
                  for (let n = 0; n < r.length; n++) {
                    let s = r[n];
                    if (
                      i[
                        (s = S(e.transformHeader) ? e.transformHeader(s, n) : s)
                      ]
                    ) {
                      let e,
                        o = i[s];
                      for (; (e = s + "_" + o), o++, a.has(e); );
                      a.add(e),
                        (r[n] = e),
                        i[s]++,
                        (t = !0),
                        ((c = null === c ? {} : c)[e] = s);
                    } else (i[s] = 1), (r[n] = s);
                    a.add(s);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (l = !0);
                }
                return {
                  data: w,
                  errors: E,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: g,
                    truncated: !!s,
                    cursor: I + (p || 0),
                    renamedHeaders: c,
                  },
                };
              }
              function F() {
                r(O()), (w = []), (E = []);
              }
            }),
              (this.abort = function () {
                g = !0;
              }),
              (this.getCharIndex = function () {
                return h;
              });
          }
          function f(e) {
            var t = e.data,
              n = i[t.workerId],
              s = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var r = {
                abort: function () {
                  (s = !0),
                    _(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: x,
                resume: x,
              };
              if (S(n.userStep)) {
                for (
                  var a = 0;
                  a < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[a],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    r,
                  ),
                  !s);
                  a++
                );
                delete t.results;
              } else
                S(n.userChunk) &&
                  (n.userChunk(t.results, r, t.file), delete t.results);
            }
            t.finished && !s && _(t.workerId, t.results);
          }
          function _(e, t) {
            var n = i[e];
            S(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function x() {
            throw new Error("Not implemented.");
          }
          function j(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = j(e[t]);
            return n;
          }
          function v(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function S(e) {
            return "function" == typeof e;
          }
          return (
            (o.parse = function (t, s) {
              var r = (s = s || {}).dynamicTyping || !1;
              if (
                (S(r) && ((s.dynamicTypingFunction = r), (r = {})),
                (s.dynamicTyping = r),
                (s.transform = !!S(s.transform) && s.transform),
                !s.worker || !o.WORKERS_SUPPORTED)
              )
                return (
                  (r = null),
                  o.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (r = new (s.download ? l : u)(s)))
                    : !0 === t.readable && S(t.read) && S(t.on)
                      ? (r = new h(s))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (r = new d(s)),
                  r.stream(t)
                );
              ((r = (() => {
                var t;
                return (
                  !!o.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      s = e.toString();
                    return (
                      o.BLOB_URL ||
                      (o.BLOB_URL = t.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            s,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((t = new n.Worker(t)).onmessage = f),
                  (t.id = a++),
                  (i[t.id] = t))
                );
              })()).userStep = s.step),
                (r.userChunk = s.chunk),
                (r.userComplete = s.complete),
                (r.userError = s.error),
                (s.step = S(s.step)),
                (s.chunk = S(s.chunk)),
                (s.complete = S(s.complete)),
                (s.error = S(s.error)),
                delete s.worker,
                r.postMessage({ input: t, config: s, workerId: r.id });
            }),
            (o.unparse = function (e, t) {
              var n = !1,
                s = !0,
                r = ",",
                i = "\r\n",
                a = '"',
                c = a + a,
                l = !1,
                d = null,
                u = !1,
                h =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          o.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (r = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (l = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (a = t.quoteChar),
                        "boolean" == typeof t.header && (s = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        d = t.columns;
                      }
                      void 0 !== t.escapeChar && (c = t.escapeChar + a),
                        t.escapeFormulae instanceof RegExp
                          ? (u = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (u = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(m(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return g(null, e, l);
                if ("object" == typeof e[0])
                  return g(d || Object.keys(e[0]), e, l);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || d),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  g(e.fields || [], e.data || [], l)
                );
              throw new Error("Unable to serialize unrecognized input");
              function g(e, t, n) {
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  c = !Array.isArray(t[0]);
                if (o && s) {
                  for (var l = 0; l < e.length; l++)
                    0 < l && (a += r), (a += p(e[l], l));
                  0 < t.length && (a += i);
                }
                for (var d = 0; d < t.length; d++) {
                  var u = (o ? e : t[d]).length,
                    h = !1,
                    g = o ? 0 === Object.keys(t[d]).length : 0 === t[d].length;
                  if (
                    (n &&
                      !o &&
                      (h =
                        "greedy" === n
                          ? "" === t[d].join("").trim()
                          : 1 === t[d].length && 0 === t[d][0].length),
                    "greedy" === n && o)
                  ) {
                    for (var m = [], f = 0; f < u; f++) {
                      var _ = c ? e[f] : f;
                      m.push(t[d][_]);
                    }
                    h = "" === m.join("").trim();
                  }
                  if (!h) {
                    for (var x = 0; x < u; x++) {
                      0 < x && !g && (a += r);
                      var j = o && c ? e[x] : x;
                      a += p(t[d][j], x);
                    }
                    d < t.length - 1 && (!n || (0 < u && !g)) && (a += i);
                  }
                }
                return a;
              }
              function p(e, t) {
                var s, i;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((i = !1),
                      u &&
                        "string" == typeof e &&
                        u.test(e) &&
                        ((e = "'" + e), (i = !0)),
                      (s = e.toString().replace(h, c)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(s, o.BAD_DELIMITERS) ||
                        -1 < s.indexOf(r) ||
                        " " === s.charAt(0) ||
                        " " === s.charAt(s.length - 1))
                        ? a + s + a
                        : s);
              }
            }),
            (o.RECORD_SEP = String.fromCharCode(30)),
            (o.UNIT_SEP = String.fromCharCode(31)),
            (o.BYTE_ORDER_MARK = "\ufeff"),
            (o.BAD_DELIMITERS = ["\r", "\n", '"', o.BYTE_ORDER_MARK]),
            (o.WORKERS_SUPPORTED = !s && !!n.Worker),
            (o.NODE_STREAM_INPUT = 1),
            (o.LocalChunkSize = 10485760),
            (o.RemoteChunkSize = 5242880),
            (o.DefaultDelimiter = ","),
            (o.Parser = p),
            (o.ParserHandle = g),
            (o.NetworkStreamer = l),
            (o.FileStreamer = d),
            (o.StringStreamer = u),
            (o.ReadableStreamStreamer = h),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var s = e.config || {},
                  r = [];
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
                      r.push({
                        file: this.files[i],
                        inputElem: this,
                        instanceConfig: t.extend({}, s),
                      });
                  }),
                  i(),
                  this
                );
                function i() {
                  if (0 === r.length) S(e.complete) && e.complete();
                  else {
                    var n,
                      s,
                      i,
                      c,
                      l = r[0];
                    if (S(e.before)) {
                      var d = e.before(l.file, l.inputElem);
                      if ("object" == typeof d) {
                        if ("abort" === d.action)
                          return (
                            (n = "AbortError"),
                            (s = l.file),
                            (i = l.inputElem),
                            (c = d.reason),
                            void (S(e.error) && e.error({ name: n }, s, i, c))
                          );
                        if ("skip" === d.action) return void a();
                        "object" == typeof d.config &&
                          (l.instanceConfig = t.extend(
                            l.instanceConfig,
                            d.config,
                          ));
                      } else if ("skip" === d) return void a();
                    }
                    var u = l.instanceConfig.complete;
                    (l.instanceConfig.complete = function (e) {
                      S(u) && u(e, l.file, l.inputElem), a();
                    }),
                      o.parse(l.file, l.instanceConfig);
                  }
                }
                function a() {
                  r.splice(0, 1), i();
                }
              }),
            r &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === o.WORKER_ID && e && (o.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: o.WORKER_ID,
                        results: o.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = o.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: o.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((l.prototype = Object.create(c.prototype)).constructor = l),
            ((d.prototype = Object.create(c.prototype)).constructor = d),
            ((u.prototype = Object.create(u.prototype)).constructor = u),
            ((h.prototype = Object.create(c.prototype)).constructor = h),
            o
          );
        }),
        void 0 === (r = "function" == typeof n ? n.apply(t, s) : n) ||
          (e.exports = r);
    },
    20153: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => xn, default: () => jn });
      var s = n(7850),
        r = n(43527),
        i = n(90626),
        a = n(17083),
        o = n(92757),
        c = n(11577),
        l = n(14932),
        d = n(97058),
        u = n(84811),
        h = n(95695),
        g = n.n(h),
        m = n(38135),
        p = n(45737),
        f = n.n(p),
        _ = n(24484),
        x = n(56545),
        j = n(85737),
        v = n(64753),
        S = n(20194),
        y = n(75233),
        w = n(41735),
        E = n.n(w),
        b = n(17720),
        I = n(78327),
        C = n(32179),
        D = n(21711),
        A = n(44165),
        T = n(95034);
      function k() {
        const [e] = i.useState(() =>
            (0, I.Tc)("events_list", "application_config"),
          ),
          [t] = (0, T.QD)("filter"),
          n = (0, A.f1)(),
          [s, r] = i.useMemo(() => {
            let t = new Array(),
              s = new Array();
            return (
              e.forEach((e) => {
                e.endtime &&
                (function (e, t = !1) {
                  const [n, s = "00:00:00"] = e.trim().split(/\s+/),
                    [r, i, a] = n.split("-").map(Number),
                    [o, c, l] = s.split(":").map(Number),
                    d = t
                      ? Date.UTC(r, i - 1, a, o, c, l ?? 0)
                      : new Date(r, i - 1, a, o, c, l ?? 0).getTime();
                  return Math.floor(d / 1e3);
                })(e.endtime) < n
                  ? s.push(e)
                  : t.push(e);
              }),
              [s, t]
            );
          }, [e, n]);
        return {
          rgOldEvents: s,
          rgEvents: r,
          selectConference: (0, i.useMemo)(
            () => e.find((e) => e.id === t?.toLocaleLowerCase()),
            [e, t],
          ),
        };
      }
      function R(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function M(e) {
        const t = `${I.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: I.TS.SESSIONID, partnerid: e },
          s = await E().get(t, { params: n });
        return s?.data?.data;
      }
      function N(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function L(e, t, n) {
        return (0, S.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, n],
          queryFn: async () => {
            const n = x.w.Init(j.q3);
            n.Body().set_clan_event_gid(t);
            const s = await j.ZK.GetRegistrations(e, n);
            return s.BSuccess()
              ? s
                  .Body()
                  .registrations()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: null != t && 0 != n,
        });
      }
      var P = n(19367),
        B = n.n(P),
        O = n(38390),
        F = n(50304),
        G = n(96001),
        $ = n(16676),
        z = n(74783),
        U = n(26161),
        q = n(78395),
        K = n(21869),
        W = n(22797),
        H = n(26408),
        Y = n(52038),
        V = n(65),
        J = n(61859),
        Q = n(91675),
        Z = n(30470),
        X = n(30565),
        ee = n.n(X);
      function te(e) {
        const t = ne();
        return (0, s.jsx)("div", {
          children: (0, s.jsx)("ol", {
            children: Array.from(t.entries()).map(([e, t]) =>
              (0, s.jsx)(
                "li",
                {
                  children: (0, s.jsx)("a", {
                    href: `${I.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
                    target: "_blank",
                    children: t,
                  }),
                },
                e,
              ),
            ),
          }),
        });
      }
      function ne() {
        const [e] = (0, i.useState)(() => {
          const e = (0, I.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      function se(e, t) {
        const n = (function () {
            const [e, t] = (0, i.useState)(location.search);
            return (
              (0, i.useEffect)(() => {
                function e(e) {
                  "urlchange" === e.data && t(location.search);
                }
                return (
                  window.addEventListener("message", e),
                  () => {
                    window.removeEventListener("message", e);
                  }
                );
              }, []),
              e
            );
          })(),
          s = (0, i.useMemo)(() => {
            const s = new URLSearchParams(n.substring(1)).get(e);
            return null != s
              ? null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== s)
                  : t.constructor(s)
                : s
              : t;
          }, [e, t, n]),
          [r, a] = (0, i.useState)(s),
          o = i.useCallback(
            (t, s = !1) => {
              const r = new URLSearchParams(n.substring(1));
              if (null != t) {
                if (r.get(e) == t) return;
                r.set(e, String(t));
              } else {
                if (!r.has(e)) return;
                r.delete(e);
              }
              s
                ? history.replaceState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${r}`),
                  )
                : history.pushState(
                    history.state,
                    "",
                    decodeURIComponent(`${window.location.pathname}?${r}`),
                  ),
                (0, i.startTransition)(() => {
                  a(t), window.postMessage("urlchange");
                });
            },
            [e, n],
          );
        return [r, o];
      }
      const re = i.createContext(void 0);
      function ie(e) {
        const { children: t } = e,
          [n, r] = se("showpastevents", !1);
        return (0, s.jsx)(re.Provider, {
          value: { bShowArchived: n, setShowArchived: r },
          children: t,
        });
      }
      const ae = () => {
        const e = (0, i.useContext)(re);
        if (!e)
          throw new Error(
            "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
          );
        return e;
      };
      var oe = n(34283),
        ce = n.n(oe),
        le = n(68797),
        de = n(9161),
        ue = n(65689),
        he = n(81393),
        ge = n(96059);
      class me {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            me.s_Singleton ||
              ((me.s_Singleton = new me()), me.s_Singleton.Init()),
            me.s_Singleton
          );
        }
        Init() {
          const e = (0, _.Tc)("store_feature_token", "application_config");
          (0, he.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new ge.D(Z.TS.WEBAPI_BASE_URL, e));
        }
      }
      function pe() {
        return me.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      var fe = n(6083);
      function _e(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(!1),
          [o, c] = (0, i.useState)(null),
          [l, d] = i.useState(0),
          [u, g] = i.useState(""),
          [m, p] = i.useState(""),
          [f, _] = i.useState(!1),
          x = pe(),
          j = (0, S.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, l],
            queryFn: async () => {
              const e = {
                  steamid: b.b.InitFromAccountID(l).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await ue.Nl.GetUserActionData(x, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && l > 0,
          });
        i.useEffect(() => {
          j.isLoading ||
            (j.isSuccess &&
              (g(j.data.partner_id ? j.data.partner_id.toString() : ""),
              p(j.data.email_override ?? ""),
              _(j.data.allow_registration_if_full ?? !1)));
        }, [j.isLoading, j.isSuccess, j.data]);
        return (0, s.jsxs)(q.o0, {
          strTitle: "Invite User",
          bOKDisabled: !l || r || j.isLoading,
          onOK: async () => {
            a(!0);
            const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
              s = await Se(
                n,
                [
                  {
                    nAccountID: l,
                    nPartnerID: e,
                    strEmailOverride: m,
                    bAllowRegistrationIfFull: f,
                  },
                ],
                !0,
              ),
              r = s && 1 == s.success;
            r || c("We hit error during invite, check console: " + s?.msg),
              a(!1),
              j.refetch(),
              r && t();
          },
          onCancel: t,
          children: [
            Boolean(o) &&
              (0, s.jsx)("div", {
                className: h.ErrorStylesWithIcon,
                children: o,
              }),
            !r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)($.pd, {
                    type: "number",
                    label: "Account ID",
                    onChange: (e) => d(Number.parseInt(e.currentTarget.value)),
                    value: l,
                  }),
                  0 != l &&
                    !j.isLoading &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)($.pd, {
                          type: "number",
                          label: "Partner ID (optional)",
                          onChange: (e) => g(e.currentTarget.value),
                          value: u,
                        }),
                        (0, s.jsx)($.pd, {
                          type: "text",
                          label: "Email override (optional)",
                          onChange: (e) => p(e.currentTarget.value.trim()),
                          value: m,
                        }),
                        (0, s.jsx)($.Yh, {
                          controlled: !0,
                          checked: f,
                          onChange: _,
                          label: "Allow if registration is full",
                        }),
                      ],
                    }),
                ],
              }),
            r &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, J.we)("#Saving"),
              }),
            j.isLoading &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, J.we)("#Loading"),
              }),
          ],
        });
      }
      function xe(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(null),
          [o, c] = (0, i.useState)(!1),
          [l, d] = (0, i.useState)(null),
          [u, g] = (0, i.useState)(null),
          [m, p] = (0, i.useState)(null);
        return (0, s.jsxs)(q.o0, {
          strTitle: "Invite Users",
          bOKDisabled: !r || 0 == r.length || null != u,
          strCancelButtonText: null !== u ? "Close" : "Cancel",
          onOK: async () => {
            c(!0);
            const e = await Se(n, r, !1);
            1 == e?.success
              ? (g(e.rgInvitedAccounts.length), p(e.rgSkippedAccounts.length))
              : d("We hit error during invite, check console: " + e?.msg),
              c(!1);
          },
          onCancel: () => {
            g(null), p(null), c(!1), a(null), t();
          },
          children: [
            Boolean(l) &&
              (0, s.jsx)("div", {
                className: h.ErrorStylesWithIcon,
                children: l,
              }),
            null != u &&
              (0, s.jsxs)("div", {
                children: [
                  "Invited ",
                  (0, fe.D)(u),
                  " accounts, skipped previously invited ",
                  (0, fe.D)(m),
                ],
              }),
            o &&
              (0, s.jsx)(W.t, {
                size: "small",
                position: "center",
                string: (0, J.we)("#Saving"),
              }),
            null == r
              ? (0, s.jsx)(ve, { setInvites: a })
              : (0, s.jsx)(je, { rgInvites: r }),
          ],
        });
      }
      function je(e) {
        const { rgInvites: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              children: ["Total Invites Parsed: ", t.length, " "],
            }),
            (0, s.jsxs)("table", {
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "AccountID" }),
                      (0, s.jsx)("th", { children: "PartnerID" }),
                      (0, s.jsx)("th", { children: "Email Override" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: t.map((e, t) =>
                    (0, s.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, s.jsx)("td", { children: e.nAccountID }),
                          (0, s.jsx)("td", { children: e.nPartnerID }),
                          (0, s.jsx)("td", { children: e.strEmailOverride }),
                        ],
                      },
                      "invite" + e.nAccountID + "_" + t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function ve(e) {
        const { setInvites: t } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              children: "Format for CSV File, please use the template below:",
            }),
            (0, s.jsxs)("ul", {
              children: [
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "nAccountID" }),
                    " - required, 32-bit integer value, not the 64-bit steam id",
                  ],
                }),
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "nPartnerID" }),
                    " - (preferred for biz contact)",
                  ],
                }),
                (0, s.jsxs)("li", {
                  children: [
                    (0, s.jsx)("b", { children: "strOverrideEmail" }),
                    " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                  ],
                }),
              ],
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                de.g.WriteCSVToFile(t, "invite_template.csv");
              },
              children: "Download Template Example",
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            (0, s.jsx)($.$n, {
              children: (0, s.jsxs)("label", {
                className: ce().ImportButtonLabel,
                htmlFor: "import-discount-input",
                children: [
                  "Choose CSV File",
                  (0, s.jsx)("input", {
                    id: "import-discount-input",
                    type: "file",
                    style: { display: "none" },
                    onChange: async (e) => {
                      if (e.target.files.length >= 1) {
                        const n = e.target.files[0],
                          s = await de.g.ParseCSVFile(n);
                        if (s?.data) {
                          const e = new Array();
                          s.data.forEach((t) => {
                            if (t.nAccountID) {
                              const n = {
                                nAccountID: Number.parseInt(t.nAccountID),
                              };
                              t.nPartnerID &&
                                (n.nPartnerID = Number.parseInt(t.nPartnerID)),
                                t.strEmailOverride &&
                                  (n.strEmailOverride = t.strEmailOverride),
                                e.push(n);
                            }
                          }),
                            t(e);
                        }
                      }
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      }
      async function Se(e, t, n) {
        const s = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          i = t.map((e) => e.strEmailOverride).join(","),
          a = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let o = new FormData();
        o.append("sessionid", Z.TS.SESSIONID),
          o.append("gid", e),
          o.append("accounts", s),
          o.append("partnerids", r),
          o.append("emailoverride", i),
          o.append("allowregistrationiffull", a),
          o.append("forceupdate", n ? "1" : "0");
        const c = `${Z.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await E().post(c, o, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, le.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, le.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var ye = n(16666),
        we = n(66051),
        Ee = n(54806),
        be = n(58632),
        Ie = n.n(be);
      function Ce(e) {
        const t = pe(),
          n = i.useContext(Ae),
          s = (0, S.I)(Te(n, t, e));
        return s.isLoading ? null : s.data;
      }
      function De(e) {
        const t = pe(),
          n = i.useContext(Ae);
        return (0, Ee.E)({ queries: e.map((e) => Te(n, t, e)) });
      }
      const Ae = i.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            ke ||
              (ke = new (Ie())(
                async (t) => {
                  const n = x.w.Init(ue.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(6);
                  const s = await ue.Nl.GetMultipleUserActionData(e, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${s.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    s
                      .Body()
                      .entries()
                      .forEach((e) => {
                        try {
                          const t = JSON.parse(e.jsondata());
                          if (!("steamid" in t) || !t.steamid) {
                            t.steamid = e.steamid();
                            const n = new b.b(t.steamid);
                            t.accountid = n.GetAccountID();
                          }
                          const n = e.gid();
                          return (
                            r.has(n) ? r.get(n).push(t) : r.set(n, [t]), [t]
                          );
                        } catch (t) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
                        }
                      }),
                    t.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              ));
            return ke;
          })(e).load(t),
      });
      function Te(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let ke;
      var Re = n(7860);
      function Me(e, t) {
        const n = (0, G.a)(),
          s = i.useContext(Le),
          r = (0, S.I)(Pe(s, n, e, t));
        return r.isLoading ? null : r.data;
      }
      function Ne(e, t) {
        return Re.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const Le = i.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            Be ||
              (Be = new (Ie())(
                async (t) => {
                  const n = x.w.Init(j.g9);
                  n.Body().set_accountids(t.map((e) => e.accountID)),
                    n.Body().set_partnerids(t.map((e) => e.partnerID));
                  const s = await j.ZK.GetBatchPartnerEmailAndName(e, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${s.GetErrorMessage()}`;
                  const r = new Map();
                  return (
                    s
                      .Body()
                      .info()
                      .forEach((e) => {
                        r.set(
                          e.accountid() + "_" + e.partnerid(),
                          e.toObject(),
                        );
                      }),
                    t.map((e) => r.get(e.accountID + "_" + e.partnerID) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Be;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function Pe(e, t, n, s) {
        return {
          queryKey: ["PartnerEmailAndName", n, s],
          queryFn: () => e.loadPartnerEmailAndName(t, n, s),
          enabled: !!n || !!s,
        };
      }
      let Be;
      function Oe(e) {
        const { rgEventGIDs: t } = e,
          [n, r, a] = (0, v.uD)(),
          [o, c] = (0, i.useState)(null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: " | " }),
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Analyse Top Partner Coverage",
            }),
            (0, s.jsx)(K.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(q.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(qe, { rgEventGIDs: t, fnSelectedEvents: c })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(Ue, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)($.$n, {
                            onClick: () => c(null),
                            children: "Reset Selection",
                          }),
                        ],
                      }),
                }),
              }),
            }),
          ],
        });
      }
      const Fe = (0, ye.FB)();
      function Ge(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                Ne(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function $e(e) {
        return Ge(e.cell.getValue());
      }
      function ze(e, t) {
        const n = De(t),
          [s, r, a] = (0, i.useMemo)(() => {
            if (n.filter((e) => !e.isLoading).length != n.length)
              return [null, [], []];
            const t = new Map(),
              s = new Set(e),
              r = new Map();
            n.forEach((e) =>
              e.data.forEach((e) => {
                if (
                  s.has(e.partner_id) &&
                  (r.has(e.partner_id)
                    ? r.get(e.partner_id).push(e)
                    : r.set(e.partner_id, [e]),
                  !e.name)
                ) {
                  const n = e.accountid;
                  t.set(`${n}_${e.partner_id}`, {
                    accountID: n,
                    partnerID: e.partner_id,
                  });
                }
              }),
            );
            const i = Array.from(t.values());
            return [r, i.map((e) => e.accountID), i.map((e) => e.partnerID)];
          }, [n, e]),
          o = (function (e, t) {
            const n = (0, G.a)(),
              s = i.useContext(Le);
            return (0, Ee.E)({ queries: e.map((e, r) => Pe(s, n, e, t[r])) });
          })(r, a);
        return o.filter((e) => !e.isLoading).length == o.length ? s : null;
      }
      function Ue(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, _.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          r = (0, C.vh)(n),
          a = ze(n, t),
          o = (0, i.useMemo)(() => {
            if (!r || !a) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = a.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, C.Yd)(t)?.name || "Unknown",
                  invitations:
                    n?.filter(
                      (e) =>
                        e.invited &&
                        !Object.keys(e).some((e) =>
                          e.startsWith("registration_emailed"),
                        ),
                    ) || [],
                  registrations:
                    n?.filter((e) =>
                      Object.keys(e).some((e) =>
                        e.startsWith("registration_emailed"),
                      ),
                    ) || [],
                });
              }),
              e
            );
          }, [r, a, n]),
          c = (0, i.useMemo)(
            () => [
              Fe.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Fe.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Fe.accessor("invitations", {
                header: "Invitations",
                cell: $e,
                size: 300,
              }),
              Fe.accessor("registrations", {
                header: "Registered to Attend",
                cell: $e,
                size: 300,
              }),
            ],
            [],
          );
        function l() {
          const e = [],
            t = [];
          for (const e of c) t.push(e.header);
          e.push(t);
          for (const t of o) {
            const n = [];
            for (const e of c) {
              const s = t[e.accessorKey];
              n.push(
                "invitations" == e.accessorKey ||
                  "registrations" == e.accessorKey
                  ? Ge(s)
                  : s.toString(),
              );
            }
            e.push(n);
          }
          de.g.WriteCSVToFile(e, "partneranalysis.csv");
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)($.JU, { children: "Partner Analysis" }),
            Boolean(o)
              ? (0, s.jsxs)(u.tH, {
                  children: [
                    (0, s.jsx)($.$n, {
                      id: "download-csv",
                      onClick: l,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, s.jsx)(we.k, {
                      columns: c,
                      data: o,
                      getRowKey: (e) => e,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: n.length,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)($.$n, {
                      id: "download-csv",
                      onClick: l,
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                  ],
                })
              : (0, s.jsx)(W.t, {
                  string: (0, J.we)("#Loading"),
                  position: "center",
                }),
          ],
        });
      }
      function qe(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [r, a] = (0, i.useState)([]),
          { bShowArchived: o, setShowArchived: c } = ae(),
          { bIsLoading: l, events: d } = (0, O.PB)(t),
          u = (0, i.useMemo)(() => {
            const e = Math.floor(new Date().getTime() / 1e3);
            return o && d ? [...d] : d?.filter((t) => t.endTime >= e);
          }, [d, o]);
        return l
          ? (0, s.jsx)(W.t, { string: "Loading..." })
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)($.Yh, {
                  checked: o,
                  onChange: c,
                  label: "Show Past Events",
                }),
                (0, s.jsx)($.JU, { children: "Choose Events" }),
                u.map((e) =>
                  (0, s.jsx)(
                    Ke,
                    { gidClanEvent: e.GID, rgSelected: r, fnSetSelected: a },
                    e.GID,
                  ),
                ),
                (0, s.jsx)($.$n, {
                  disabled: 0 == r.length,
                  onClick: () => n(r),
                  children: "Continue",
                }),
              ],
            });
      }
      function Ke(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = e,
          i = (0, O.RR)(t).GetNameWithFallback(0);
        return (0, s.jsx)($.Yh, {
          label: i,
          checked: n.includes(t),
          onChange: (e) => {
            const s = n.indexOf(t),
              i = Boolean(s >= 0);
            e && !i
              ? r([...n, t])
              : !e && i && r([...n.slice(0, s), ...n.slice(s + 1)]);
          },
        });
      }
      var We = n(67361),
        He = n(29233),
        Ye = n(30603),
        Ve = n.n(Ye);
      function Je(e) {
        const { hideModal: t, gid: n } = e,
          r = Ce(n),
          a = (0, y.jE)(),
          [o, c] = (0, i.useMemo)(
            () =>
              r
                ? [r.length, r.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [r],
          );
        return (0, s.jsxs)(q.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription:
            "This will show the users we have invited and their status. As well as individual who were just sent the registration page on their own.",
          strTitle: "Invitation And Registration Status",
          children: [
            !r &&
              (0, s.jsx)(W.t, {
                size: "medium",
                position: "center",
                string: (0, J.we)("#Loading"),
              }),
            r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    children: ["There are ", o, " registrations."],
                  }),
                  c > 0 &&
                    (0, s.jsxs)($.$n, {
                      onClick: async () => {
                        await (async function (e, t) {
                          let n = new FormData();
                          n.append("sessionid", Z.TS.SESSIONID),
                            n.append("gid", t);
                          const s = `${Z.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                          try {
                            const r = await E().post(s, n, {
                              withCredentials: !0,
                            });
                            if (1 != r?.data?.success) {
                              let e = (0, le.H)(r);
                              console.error(
                                "AsyncSendInviteEmails error: " + e.strErrorMsg,
                                e,
                              );
                            }
                            return (
                              e.invalidateQueries({
                                queryKey: [
                                  "useMeetSteamAllRegistrationStatus",
                                  t,
                                ],
                              }),
                              r?.data
                            );
                          } catch (e) {
                            let t = (0, le.H)(e);
                            console.error(
                              "AsyncSendInviteEmails error: " + t.strErrorMsg,
                              t,
                            );
                          }
                          return null;
                        })(a, n);
                      },
                      children: [c, " Invites To Sent. Send now?"],
                    }),
                  (0, s.jsxs)("table", {
                    children: [
                      (0, s.jsx)("thead", {
                        children: (0, s.jsxs)("tr", {
                          children: [
                            (0, s.jsx)("th", { children: "SteamID" }),
                            (0, s.jsx)("th", { children: "Name" }),
                            (0, s.jsx)("th", { children: "invited" }),
                            (0, s.jsx)("th", { children: "Invite Emailed" }),
                            (0, s.jsx)("th", { children: "Partner" }),
                            (0, s.jsx)("th", { children: "Email Override" }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("tbody", {
                        children: r?.map((e) =>
                          (0, s.jsx)(Qe, { reg: e }, "regentry_" + e.steamid),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function Qe(e) {
        const { reg: t } = e,
          [n] = (0, C.UA)(t.partner_id);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: t.steamid }),
            (0, s.jsx)("td", { children: t.name }),
            (0, s.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, s.jsx)("td", {
              children: Boolean(t.invitation_emailed) ? "YES" : "",
            }),
            (0, s.jsxs)("td", { children: [n?.name, " (", t.partner_id, ")"] }),
            (0, s.jsx)("td", { children: t.email_override }),
          ],
        });
      }
      function Ze(e) {
        const { hideModal: t, gid: n, title: r, group: a, session: o } = e,
          c = (0, G.a)(),
          l = Ce(n),
          d = L(c, n, a?.group_id),
          [u, h] = (0, i.useMemo)(() => {
            const e = d?.data?.filter((e) => e.session_id == o.id),
              t = new Map(),
              n = new Map();
            return (
              e?.forEach((e) => {
                const s = new He.b2(e.steamid).GetAccountID();
                if ((t.set(s, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    n.set(s, t.pre_event_partner_questions);
                }
              }),
              [t, n]
            );
          }, [o, d]),
          g = l?.filter((e) => u.has(new He.b2(e.steamid).GetAccountID()));
        return (0, s.jsxs)(q.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription: "Show who is registered for this session",
          strTitle: "Session Registration",
          children: [
            (0, s.jsx)("div", {
              className: Ve().ExportToCSV,
              children: (0, s.jsx)("a", {
                onClick: () =>
                  (function (e, t, n, s, r, i) {
                    const a = [],
                      o = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Game",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    e.ask_registration_question && o.push("Pre Reg Answer");
                    a.push(o),
                      s.forEach((t) => {
                        const n = [],
                          s = t.partner_id ? (0, C.Yd)(t.partner_id) : void 0;
                        n.push("" + t.steamid),
                          n.push(t.name),
                          n.push(t.invited ? "YES" : ""),
                          n.push(s ? `${s?.name} (${t.partner_id})` : ""),
                          n.push(t.game ? `Game: ${t.game}` : ""),
                          n.push(t.email_override),
                          n.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const o = new He.b2(t.steamid);
                        if (r.has(o.GetAccountID())) {
                          const e = Xe(r.get(o.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            n.push(t);
                          } else n.push("");
                        } else n.push("");
                        if (e.ask_registration_question) {
                          const t = i
                            .get(o.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && n.push(t.question);
                        }
                        a.push(n);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(t.guest_names[e]),
                            a.push(n);
                        }
                      });
                    const c =
                      `meetsteam_${n}_${(0, J.TW)(t.rtime_start)}_at_${(0, We.KC)(t.rtime_start)}.csv`.replace(
                        /[ <>:"/\\|?*\x00-\x1F]/g,
                        "_",
                      );
                    de.g.WriteCSVToFile(a, c);
                  })(a, o, r, g, u, h),
                children: "Export to CSV",
              }),
            }),
            (0, s.jsxs)("table", {
              className: Ve().Table,
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "SteamID" }),
                      (0, s.jsx)("th", { children: "Name" }),
                      (0, s.jsx)("th", { children: "Invited" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Game" }),
                      (0, s.jsx)("th", { children: "Email Override" }),
                      (0, s.jsxs)("th", {
                        children: [
                          "Guest Count ",
                          (0, s.jsx)(H.o, {
                            tooltip:
                              "Additional guests, doesn't include main registrant",
                          }),
                        ],
                      }),
                      (0, s.jsx)("th", { children: "Reg Confirm Email Sent" }),
                      a.ask_registration_question &&
                        (0, s.jsx)("th", { children: "Answer" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: g?.flatMap((e) => {
                    const t = new He.b2(e.steamid).GetAccountID(),
                      n = [
                        (0, s.jsx)(
                          et,
                          {
                            group: a,
                            regInfo: u.get(t),
                            inviteInfo: e,
                            preRegQuestions: h.get(t),
                          },
                          "regrow" + e.steamid,
                        ),
                      ];
                    for (let t = 0; t < e.guest_names?.length; t++)
                      n.push(
                        (0, s.jsx)(
                          tt,
                          { guestName: e.guest_names[t] },
                          "regguestrow" + e.steamid + "_" + t,
                        ),
                      );
                    return n;
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function Xe(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let s = null;
        return n in t && (s = t[n]), s;
      }
      function et(e) {
        const { inviteInfo: t, regInfo: n, group: r, preRegQuestions: i } = e,
          [a] = (0, C.UA)(t.partner_id),
          o = Xe(n, t);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: t.steamid }),
            (0, s.jsx)("td", { children: t.name }),
            (0, s.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, s.jsx)("td", { children: a?.name ?? `(${t.partner_id})` }),
            (0, s.jsx)("td", { children: t.game ? `Game: ${t.game}` : "" }),
            (0, s.jsx)("td", { children: t.email_override }),
            (0, s.jsx)("td", {
              children: n.guests_registered ? n.guests_registered - 1 : 0,
            }),
            (0, s.jsx)("td", { children: o ? (0, J.TW)(o) : "" }),
            r.ask_registration_question &&
              (0, s.jsx)("td", {
                children:
                  i?.find((e) => e.group_id == r.group_id)?.question || "",
              }),
          ],
        });
      }
      function tt(e) {
        const { guestName: t } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: "(guest)" }),
            (0, s.jsx)("td", { children: t }),
          ],
        });
      }
      var nt = n(2516),
        st = n(98019),
        rt = n(8527);
      function it(e) {
        return (0, S.I)({
          queryKey: [],
          queryFn: async () =>
            await (async function (e) {
              const t = { sessionid: (0, _.KC)(), gids: e },
                n = `${rt.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
                s = await fetch(n, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                });
              if (!s.ok)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}`,
                );
              const r = await s.json();
              if (1 != r.success)
                throw new Error(
                  `Failed to read registrations for gids ${e.join(",")}: ${r.msg}`,
                );
              return r.lists ?? [];
            })(e),
          enabled: e && e.length > 0,
        });
      }
      function at(e) {
        const { rgEventGIDs: t } = e,
          [n, r, a] = (0, v.uD)(),
          [o, c] = (0, i.useState)(null);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: " | " }),
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Show Registration Across Events",
            }),
            (0, s.jsx)(K.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(q.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(qe, { rgEventGIDs: t, fnSelectedEvents: c })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(ct, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)($.$n, {
                            onClick: () => c(null),
                            children: "Reset Selection",
                          }),
                        ],
                      }),
                }),
              }),
            }),
          ],
        });
      }
      const ot = (0, ye.FB)();
      function ct(e) {
        const { rgGidMeetSteamEvents: t } = e,
          {
            rgAllRegistrations: n,
            rgPartnerIDs: r,
            rgValveAccounts: a,
            rgMapAccountToSessionTimes: o,
          } = (function (e) {
            const t = De(e),
              n = (0, st.qh)(),
              { bIsLoading: s, events: r } = (0, O.PB)(e),
              { data: a } = it(e),
              [o, c, l] = (0, i.useMemo)(() => {
                if (
                  s ||
                  !a ||
                  0 == a.length ||
                  t.filter((e) => !e.isLoading).length != t.length
                )
                  return [null, null, null];
                const e = new Array(),
                  n = new Set(),
                  i = new Map();
                t.forEach((t) => {
                  t.data.forEach((t) => {
                    t.guests_registered > 0 &&
                      (e.push(t), t.partner_id && n.add(t.partner_id));
                  });
                });
                const o = new Map();
                return (
                  r.forEach((e) => {
                    e.jsondata.meet_steam_groups?.forEach((t) => {
                      t.sessions?.forEach((n) => {
                        o.set(
                          `${e.GID}_${t.group_id}_${n.id}`,
                          `${t.localized_session_title[0]}@${(0, We.TW)(n.rtime_start)} ${(0, We.KC)(n.rtime_start)}`,
                        );
                      });
                    });
                  }),
                  a.forEach((e) => {
                    e.rgRegistrations.forEach((t) => {
                      const n = new b.b(t.steamid).GetAccountID(),
                        s =
                          o.get(`${e.gid}_${t.group_id}_${t.session_id}`) ||
                          `${t.group_id}:${t.session_id}`;
                      i.has(n) ? i.set(n, i.get(n) + `,${s}`) : i.set(n, s);
                    });
                  }),
                  [Array.from(n), e, i]
                );
              }, [t, s, a, r]);
            return (0, D.fI)(o)
              ? {
                  rgAllRegistrations: c,
                  rgPartnerIDs: o,
                  rgValveAccounts: n,
                  rgMapAccountToSessionTimes: l,
                }
              : {
                  rgAllRegistrations: void 0,
                  rgPartnerIDs: void 0,
                  rgValveAccounts: void 0,
                  rgMapAccountToSessionTimes: void 0,
                };
          })(t),
          c = (0, C.vh)(r),
          l = (0, i.useMemo)(() => {
            if (!(c && n && a && o)) return null;
            const e = new Map();
            a.forEach((t) => e.set(t.id, t));
            const t = [];
            return (
              n.forEach((n) => {
                const s = (0, C.Yd)(n.partner_id),
                  r = (0, D.Gl)(n.partner_id);
                t.push({
                  partner_id: n.partner_id ? "" + n.partner_id : "",
                  partner_name: s?.name || "Unknown",
                  name: n.name,
                  game: n.game || "",
                  accountid: n.accountid,
                  email: n.email_override,
                  guest_registrated: n.guests_registered - 1,
                  guest_names:
                    n.guest_names?.length > 0 ? n.guest_names.join(",") : "",
                  business_contact:
                    r && r.length > 0
                      ? r
                          .filter((e) => e.is_business_contact)
                          .map((t) => {
                            const n = new b.b(t.steamid),
                              s = e.get(n.GetAccountID());
                            return s?.displayName || t.steamid;
                          })
                          .join(",")
                      : "",
                  sessions: o.get(n.accountid) || "missing data",
                });
              }),
              t
            );
          }, [c, n, a, o]),
          d = lt();
        return c && r && l
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)($.JU, { children: "Registations" }),
                Boolean(l)
                  ? (0, s.jsxs)(u.tH, {
                      children: [
                        (0, s.jsx)(dt, { rgData: l }),
                        (0, s.jsx)(we.k, {
                          columns: d,
                          data: l,
                          getRowKey: (e) => e,
                          stickyHeader: !0,
                          nItemHeight: 28,
                          overscan: r.length,
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)(dt, { rgData: l }),
                      ],
                    })
                  : (0, s.jsx)(W.t, {
                      string: (0, J.we)("#Loading"),
                      position: "center",
                    }),
              ],
            })
          : (0, s.jsx)(W.t, { string: (0, J.we)("#Loading") });
      }
      function lt() {
        return (0, i.useMemo)(
          () => [
            ot.accessor("name", { header: "Name", size: 200 }),
            ot.accessor("accountid", { header: "Account ID", size: 150 }),
            ot.accessor("email", { header: "Email", size: 150 }),
            ot.accessor("guest_registrated", {
              header: "Guest Count",
              size: 100,
            }),
            ot.accessor("guest_names", { header: "Guest's Names", size: 100 }),
            ot.accessor("partner_id", { header: "Partner ID", size: 100 }),
            ot.accessor("partner_name", { header: "Partner Name", size: 300 }),
            ot.accessor("game", { header: "Game Name", size: 150 }),
            ot.accessor("business_contact", {
              header: "Business Contact",
              size: 150,
            }),
            ot.accessor("sessions", { header: "Sessions", size: 150 }),
          ],
          [],
        );
      }
      function dt(e) {
        const { rgData: t } = e,
          n = lt();
        return (0, s.jsx)($.$n, {
          id: "download-csv",
          onClick: () =>
            (0, nt.K)(
              "registrationdump.csv",
              t,
              n.map((e) => ({
                accessorKey: e.accessorKey,
                header:
                  "string" == typeof e.header
                    ? e.header
                    : (e.accessorKey ?? ""),
              })),
            ),
          style: { width: "120px" },
          children: "Download CSV",
        });
      }
      function ut(e) {
        const t = b.b.InitFromClanID((0, U.H)()),
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, _.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          { bShowArchived: r, setShowArchived: a } = ae(),
          { bIsLoading: o, events: c } = (0, O.PB)(n),
          l = i.useMemo(() => {
            if (!c) return null;
            const e =
                r && c
                  ? [...c]
                  : c?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, V.bv)(e, (e) => (0, V.J2)(new Date(1e3 * e.startTime))),
              );
            return t?.sort((e) => -e[0]), t;
          }, [c, r]);
        return o
          ? (0, s.jsx)(W.t, {})
          : l
            ? (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("a", {
                        href: `${Z.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                        children: "Open Meet Steam Event Dashboard",
                      }),
                      (0, s.jsx)(Oe, { rgEventGIDs: n }),
                      (0, s.jsx)(at, { rgEventGIDs: n }),
                    ],
                  }),
                  (0, s.jsx)($.Yh, {
                    checked: r,
                    onChange: a,
                    label: "Show Past Events",
                  }),
                  (0, s.jsx)("hr", {}),
                  l.map((e) =>
                    (0, s.jsx)(
                      ht,
                      { month: new Date(1e3 * e[0]), events: e[1] },
                      e[0],
                    ),
                  ),
                ],
              })
            : null;
      }
      function ht(e) {
        const { month: t, events: n } = e,
          r = i.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          a = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", { className: ee().MonthTitle, children: a }),
            (0, s.jsx)("div", {
              className: ee().MonthEvents,
              children: r.map((e) => (0, s.jsx)(gt, { oEvent: e }, e.GID)),
            }),
          ],
        });
      }
      function gt(e) {
        const { oEvent: t } = e,
          n = t.GID,
          r = b.b.InitFromClanID((0, U.H)()),
          a = (0, G.a)(),
          o = (0, F.my)(a, (0, U.H)(), n),
          c = o.isSuccess ? o.data : null,
          l = t.GetNameWithFallback(0),
          d = (0, i.useMemo)(() => {
            const e = new Array();
            return (
              t.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, s) => {
                  e.push({ group: t, session: n, firstSession: 0 == s });
                });
              }),
              e
            );
          }, [t.jsondata.meet_steam_groups]);
        return (0, s.jsxs)("div", {
          className: ee().EventRow,
          children: [
            (0, s.jsxs)("div", {
              className: ee().EventMainDetails,
              children: [
                (0, s.jsxs)("div", {
                  className: ee().TitleLine,
                  children: [
                    (0, s.jsx)("div", { className: ee().Title, children: l }),
                    (0, s.jsx)("div", {
                      className: ee().StartDate,
                      children: (0, J.TW)(t?.startTime),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: ee().ActionLine,
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, s.jsx)("a", {
                        href: `${Z.TS.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                        children: "Edit",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        " | ",
                        (0, s.jsx)("a", {
                          href: `${Z.TS.STORE_BASE_URL}meetsteam/${n}`,
                          children: "View",
                        }),
                      ],
                    }),
                    Boolean(
                      t.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(xt, { gid: n }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${Z.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${Z.iA.accountid}`,
                            children: "QR Page",
                          }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${Z.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                            children: "Attendance List",
                          }),
                          (0, s.jsx)(mt, { gid: n }),
                          (0, s.jsx)(ft, { gid: n }),
                          (0, s.jsx)(pt, { gid: n }),
                          (0, s.jsx)(_t, { gid: n }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              children: (0, s.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, s.jsx)("thead", {
                    children: (0, s.jsxs)("tr", {
                      children: [
                        (0, s.jsx)("th", { children: "Group" }),
                        (0, s.jsx)("th", { children: "Session Start" }),
                        (0, s.jsx)("th", { children: "Session Duration" }),
                        (0, s.jsx)("th", { children: "Seats" }),
                        (0, s.jsx)("th", {
                          style: { width: "50px" },
                          children: "Registered",
                        }),
                        (0, s.jsx)("th", {
                          style: { width: "50px" },
                          children: "Guests",
                        }),
                        (0, s.jsx)("th", {
                          style: { width: "100px" },
                          children: "Details",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("tbody", {
                    children: [
                      (0, s.jsxs)("tr", {
                        children: [
                          Boolean(d.length > 0)
                            ? (0, s.jsx)(
                                vt,
                                {
                                  gid: n,
                                  group: d[0].group,
                                  session: d[0].session,
                                  rgAvailability: c,
                                },
                                d[0].session.id,
                              )
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)("td", { children: "None" }),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                  (0, s.jsx)("td", {}),
                                ],
                              }),
                          (0, s.jsx)("td", {
                            children:
                              !Boolean(
                                t?.BIsUnlistedEvent() &&
                                  t.jsondata.meet_steam_groups?.length > 0,
                              ) &&
                              (0, s.jsx)("div", {
                                children:
                                  "Invite Disabled. Event need to publish into Unlisted State",
                              }),
                          }),
                        ],
                      }),
                      d
                        .filter((e, t) => t > 0)
                        .map((e) =>
                          (0, s.jsx)(
                            "tr",
                            {
                              children: (0, s.jsx)(vt, {
                                group: e.group,
                                gid: n,
                                session: e.session,
                                rgAvailability: c,
                                firstSession: e.firstSession,
                              }),
                            },
                            e.session.id,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function mt(e) {
        const { gid: t } = e,
          n = ne();
        return Array.from(n.keys()).includes(t)
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                " | ",
                (0, s.jsx)("a", {
                  href: `${Z.TS.PARTNER_BASE_URL}meetsteam/survey/${t}`,
                  children: "Survey",
                }),
              ],
            })
          : null;
      }
      function pt(e) {
        const { gid: t } = e,
          [n, r, i] = (0, v.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsxs)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: [
                "Invite via CSV",
                (0, s.jsx)(H.o, {
                  tooltip:
                    "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                }),
              ],
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(xe, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function ft(e) {
        const { gid: t } = e,
          [n, r, i] = (0, v.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Invite",
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(_e, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function _t(e) {
        const { gid: t } = e,
          [n, r, i] = (0, v.uD)();
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsx)("a", {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
              children: "Show Invites",
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(K.E, {
                active: n,
                children: (0, s.jsx)(Je, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function xt(e) {
        const { gid: t } = e,
          n = (0, G.a)(),
          [r, a] = (0, i.useState)(!1),
          [o, c] = (0, i.useState)(null);
        return (0, s.jsxs)("div", {
          children: [
            " | ",
            (0, s.jsx)("a", {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), a(!0);
                const s = await (async function (e, t) {
                  const n = x.w.Init(j.VI),
                    s = b.b.InitFromClanID((0, U.H)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(s.ConvertTo64BitString());
                  const r = await j.ZK.TestFireEmails(e, n);
                  return console.log("test fire", r), r.GetEResult();
                })(n, t);
                c(s);
              },
              children: "Email Self",
            }),
            (0, s.jsx)(K.E, {
              active: r,
              children: (0, s.jsxs)(q.o0, {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  a(!1), c(null);
                },
                onOK: () => {},
                children: [
                  (0, s.jsx)("div", {
                    children:
                      "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                  }),
                  Boolean(null == o) &&
                    (0, s.jsx)(W.t, { string: (0, J.we)("#Loading") }),
                  Boolean(1 == o) &&
                    (0, s.jsx)("div", { children: "Test Emails Sent" }),
                  Boolean(o && 1 != o) &&
                    (0, s.jsx)("div", {
                      children: "Email Failed to Send. Check console",
                    }),
                ],
              }),
            }),
          ],
        });
      }
      function jt(e, t) {
        const n = B().unix(e),
          s = B().unix(e).tz(t),
          r = s.utcOffset() - n.utcOffset(),
          i = new Date(1e3 * (e + 60 * r)),
          a = new Date();
        return `${i.getFullYear() == a.getFullYear() ? ((0, Q.$w))(i, !1, !1) : ((0, Q._9))(i, !1, !1)} ${(0, Q.KC)(e + 60 * r)} ${s.format("z")}`;
      }
      function vt(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: r,
            session: i,
            firstSession: a = !0,
          } = e,
          o = J.NT.GetWithFallback(n?.localized_session_title, 0),
          c = J.NT.GetWithFallback(n?.localized_session_description, 0),
          l = J.NT.GetWithFallback(n?.localized_intended_audience, 0),
          d = r?.find((e) => e.group_id == n.group_id && e.session_id == i.id),
          [h, g, m] = (0, v.uD)(),
          p = L((0, G.a)(), t, n?.group_id);
        let f = Math.min((d?.guest_count / i.max_capacity) * 100, 100),
          _ = d?.guest_count > 0 ? `${f}%` : "0%",
          x = d?.guest_count >= i.max_capacity;
        const j = Intl.DateTimeFormat().resolvedOptions().timeZone,
          S =
            "in_person" === i.location_type
              ? (i.in_person_time_zone ?? z.hh)
              : j;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            a && Boolean(n)
              ? (0, s.jsxs)("td", {
                  children: [
                    o,
                    (0, s.jsx)(H.o, { tooltip: c }),
                    Boolean(l) && (0, s.jsx)("div", { children: l }),
                  ],
                })
              : (0, s.jsx)("td", {}),
            (0, s.jsx)("td", {
              children: (0, s.jsx)("span", { children: jt(i.rtime_start, S) }),
            }),
            (0, s.jsx)("td", {
              children: (0, Q.IH)(i.rtime_end - i.rtime_start),
            }),
            (0, s.jsxs)("td", {
              children: [
                d?.guest_count || 0,
                " / ",
                i.max_capacity,
                (0, s.jsx)("br", {}),
                (0, s.jsx)("div", {
                  className: ee().CapacityBarMax,
                  children: (0, s.jsx)("div", {
                    className: (0, Y.A)(
                      ee().CapacityBarCurrent,
                      x ? ee().Full : "",
                    ),
                    style: { width: _ },
                  }),
                }),
              ],
            }),
            (0, s.jsx)("td", {
              children:
                p.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: p.data?.filter((e) => e.session_id == i.id).length,
                }),
            }),
            (0, s.jsx)("td", {
              children:
                p.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: p.data
                    ?.filter((e) => e.session_id == i.id)
                    .reduce((e, t) => e + t.guests_registered - 1, 0),
                }),
            }),
            (0, s.jsxs)("td", {
              children: [
                (0, s.jsx)($.$n, { onClick: g, children: "Details" }),
                (0, s.jsx)(u.tH, {
                  children: (0, s.jsx)(K.E, {
                    active: h,
                    children: (0, s.jsx)(Ze, {
                      gid: t,
                      title: o,
                      group: n,
                      session: i,
                      hideModal: m,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var St = n(22837),
        yt = n(39777),
        wt = n(35380),
        Et = n(14336),
        bt = n(16021),
        It = n(68276),
        Ct = n(48479);
      function Dt(e) {
        const { rgEvents: t } = k(),
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, _.Tc)("interest_results", "application_config"),
            );
            return (0, i.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [r, a] = (0, i.useState)(""),
          o = I.TS.PARTNER_BASE_URL + "meetsteam",
          c = (0, i.useMemo)(() => {
            const e = new Map();
            return (
              n.forEach((t) => {
                t.results?.attending?.forEach((t) => {
                  e.has(t) ? e.set(t, e.get(t) + 1) : e.set(t, 1);
                });
              }),
              e
            );
          }, [n]);
        return (0, s.jsxs)("div", {
          className: ee().EventList,
          children: [
            (0, s.jsx)($.pd, {
              type: "text",
              value: r,
              onChange: (e) => a(e.currentTarget.value.trim()),
              label: "Filter",
            }),
            (0, s.jsxs)("div", {
              children: ["Total Survey Responses: ", (0, fe.D)(n?.length || 0)],
            }),
            (0, s.jsxs)("div", {
              children: [
                "Link to partner-facing survey: ",
                (0, s.jsx)("a", { href: o, children: o }),
              ],
            }),
            t
              .filter(
                (e) => 0 == r.length || e.name.includes(r) || e.id.includes(r),
              )
              .map((e) =>
                (0, s.jsx)(
                  At,
                  {
                    conf: e,
                    nInterestCount: c.get(e.id) ?? 0,
                    rgSurveyInterest: n,
                  },
                  e.id,
                ),
              ),
            (0, s.jsx)(Bt, { rgSurveyInterest: n }),
          ],
        });
      }
      function At(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: r } = e;
        return (0, s.jsx)(Ct.qx, {
          title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, fe.D)(n)}`,
          bStartMinimized: !0,
          children: (0, s.jsx)(kt, { conf: t, rgSurveyInterest: r }),
        });
      }
      function Tt(e) {
        if ("number" == typeof e) return e;
        const t = e.slice(-1).toUpperCase(),
          n = parseFloat(e.slice(0, -1));
        switch (t) {
          case "K":
            return 1e3 * n;
          case "M":
            return 1e6 * n;
          case "B":
            return 1e9 * n;
          default:
            return parseFloat(e);
        }
      }
      function kt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, i.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          a = (0, st.qh)(),
          { bComplete: o, nCount: c } = (function (e) {
            const [t, n] = (0, i.useState)(!1),
              [s, r] = (0, i.useState)(0),
              a = (0, y.jE)();
            return (
              (0, i.useEffect)(() => {
                (async () => {
                  let t = 0;
                  for (const n of e) {
                    const e = n.results.partner_id;
                    new b.b(n.steamid).GetAccountID(),
                      await Promise.all([
                        (0, C.qG)(e),
                        a.prefetchQuery({
                          queryKey: R(e),
                          queryFn: async () => M(e),
                        }),
                        (0, D.PQ)(a, e),
                      ]),
                      ++t,
                      r(t);
                  }
                  n(!0);
                })();
              }, [a, e]),
              { bComplete: t, nCount: s }
            );
          })(r);
        return o
          ? a?.length
            ? r && 0 != r.length
              ? (0, s.jsx)(Rt, { conf: t, rgSurveyInterest: r })
              : (0, s.jsx)("div", { children: "No users with interest" })
            : (0, s.jsx)(W.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : (0, s.jsx)(W.t, {
              position: "center",
              string: `Loading ${c} of ${r.length}`,
            });
      }
      function Rt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, y.jE)();
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)($.$n, {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Valve Partner Contacts",
                  "Email Override",
                  "Account Name",
                  "Name",
                  "Have you met steam",
                  "Survey Time",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Best AppID Name",
                  "Long Term Sales Rank",
                ]),
                  n.forEach((t) => {
                    const n = [],
                      s = new He.b2(t.steamid);
                    n.push("" + s.GetAccountID());
                    const i = (0, Et.z0)(s.GetAccountID()),
                      a = t.results.partner_id;
                    n.push("" + a);
                    const o = (0, D.N6)(a).map(
                      (e) => (0, st.YA)(r, e)?.displayName || "" + e,
                    );
                    n.push(o.join("|"));
                    const c = t.results.email_override || "";
                    n.push("" + c),
                      n.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const l = Ne(s.GetAccountID(), a);
                    if (
                      (n.push(l ? l.realname : ""),
                      n.push(t.results.have_you_met_steam ? "yes" : "no"),
                      t.results.submit_time)
                    ) {
                      const e = t.results.submit_time,
                        s = new Date(1e3 * e)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      n.push(s);
                    } else n.push("");
                    n.push("" + t.results.attending?.length),
                      n.push(t.results.country_code),
                      n.push(
                        t.results.preferred_language
                          ? (0, St.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const d = (0, C.Yd)(a);
                    n.push(d ? d.name : "");
                    const u = N(r, a);
                    u
                      ? (n.push("" + Tt(u.strGrossUSD)),
                        n.push("" + u.nBestAppID),
                        n.push(bt.A.Get().GetApp(u.nBestAppID)?.GetName()),
                        n.push("" + u.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const s = t.name.replace(" ", "_") + "_conference_interest.csv";
                de.g.WriteCSVToFile(e, s);
              },
              children: "Export to CSV",
            }),
            (0, s.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "Name and Email" }),
                      (0, s.jsx)("th", { children: "Have you met steam?" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Valve Contacts" }),
                      (0, s.jsx)("th", { children: "Partner Revenue" }),
                      (0, s.jsx)("th", { children: "Biggest Game" }),
                      (0, s.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, s.jsx)("th", { children: "Attending count?" }),
                      (0, s.jsx)("th", { children: "Alt Language" }),
                      (0, s.jsx)("th", { children: "Country" }),
                      (0, s.jsx)("th", { children: "Submit Survey Time" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: n.map((e) =>
                    (0, s.jsx)(
                      Mt,
                      {
                        strsteamid: e.steamid,
                        partnerID: e.results.partner_id,
                        registration: e.results,
                      },
                      t.id + "_" + e.steamid,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function Mt(e) {
        const { partnerID: t, registration: n } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: (0, s.jsx)(Nt, { ...e }) }),
            (0, s.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
            (0, s.jsx)(Lt, { nPartnerID: t }),
            (0, s.jsx)("td", { children: n.attending.length }),
            (0, s.jsx)("td", {
              children:
                n.english_not_good && n.preferred_language
                  ? (0, St.Lg)(n.preferred_language)
                  : "",
            }),
            (0, s.jsx)("td", { children: n.country_code }),
            (0, s.jsx)("td", { children: (0, J.TW)(n.submit_time) }),
          ],
        });
      }
      function Nt(e) {
        const { strsteamid: t, partnerID: n, registration: r } = e,
          i = (0, Et.hW)(t),
          a = Me(new He.b2(t).GetAccountID(), n),
          o = a?.realname || i.data?.m_strPlayerName;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: o }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("span", { children: r.email_override || a?.email }),
          ],
        });
      }
      function Lt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, C.UA)(t),
          r = (function (e) {
            const t = (0, S.I)({
              queryKey: R(e),
              queryFn: async () => M(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          i = (0, D.Z4)(t),
          a = (0, y.jE)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("td", { children: n ? n?.name + ` (${t})` : t }),
            (0, s.jsx)("td", {
              children: i
                ?.map((e) => (0, st.YA)(a, e)?.displayName || "" + e)
                .join(","),
            }),
            (0, s.jsxs)("td", { children: ["$", r?.strGrossUSD] }),
            (0, s.jsx)("td", {
              children:
                r?.nBestAppID > 0
                  ? (0, s.jsx)(Pt, { appid: r?.nBestAppID })
                  : "N/A",
            }),
            (0, s.jsx)("td", { children: r?.nBestAppLongTermSalesRank }),
          ],
        });
      }
      function Pt(e) {
        const { appid: t } = e,
          n = (0, wt.$5)(t),
          { data: r } = (0, yt.J$)(n);
        return (0, s.jsx)(It.Q, {
          id: n,
          children: (0, s.jsx)("span", { children: r?.name || t }),
        });
      }
      function Bt(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, y.jE)(),
          r =
            ((0, st.qh)(),
            (0, i.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return (0, s.jsxs)(Ct.qx, {
          title: `Alternative Suggestions (${r.length})`,
          bStartMinimized: !0,
          children: [
            (0, s.jsx)($.$n, {
              onClick: () => {
                const e = [];
                e.push([
                  "AccountID",
                  "Partner ID",
                  "Email Override",
                  "Account Name",
                  "name",
                  "Attending Other Event Count",
                  "Country",
                  "Alt Language",
                  "Partner Name",
                  "Gross USD",
                  "Best AppID",
                  "Long Term Sales Rank",
                  "Suggestion",
                ]),
                  r.forEach((t) => {
                    const s = [],
                      r = new He.b2(t.steamid);
                    s.push("" + r.GetAccountID());
                    const i = (0, Et.z0)(r.GetAccountID()),
                      a = t.results.partner_id;
                    s.push("" + a);
                    const o = t.results.email_override || "";
                    s.push("" + o),
                      s.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const c = Ne(r.GetAccountID(), a);
                    s.push(c ? c.realname : ""),
                      s.push("" + t.results.attending?.length),
                      s.push(t.results.country_code),
                      s.push(
                        t.results.preferred_language
                          ? (0, St.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const l = (0, C.Yd)(a);
                    s.push(l ? l.name : "");
                    const d = N(n, a);
                    d
                      ? (s.push("" + Tt(d.strGrossUSD)),
                        s.push("" + d.nBestAppID),
                        s.push("" + d.nBestAppLongTermSalesRank))
                      : (s.push(""), s.push(""), s.push("")),
                      s.push(t.results.suggestion),
                      e.push(s);
                  });
                de.g.WriteCSVToFile(e, "suggestsion.csv");
              },
              children: "Export to CSV (wait until the table populates fully)",
            }),
            (0, s.jsxs)("table", {
              className: "landingTable",
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "Name and Email" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Valve Contacts" }),
                      (0, s.jsx)("th", { children: "Partner Revenue" }),
                      (0, s.jsx)("th", { children: "Biggest Game" }),
                      (0, s.jsx)("th", { children: "Long Term Sales Rank" }),
                      (0, s.jsx)("th", { children: "Suggestions" }),
                    ],
                  }),
                }),
                (0, s.jsx)("tbody", {
                  children: r.map((e) =>
                    (0, s.jsx)(Ot, { survey: e }, "suggested" + e.steamid),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function Ot(e) {
        const { survey: t } = e;
        new He.b2(t.steamid);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", {
              children: (0, s.jsx)(Nt, {
                strsteamid: t.steamid,
                partnerID: t.results.partner_id,
                registration: t.results,
              }),
            }),
            (0, s.jsx)(Lt, { nPartnerID: t.results.partner_id }),
            (0, s.jsx)("td", { children: t.results.suggestion.trim() }),
          ],
        });
      }
      const Ft = i.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            $t ||
              ($t = new (Ie())(
                async (e) => {
                  const t = `${I.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: I.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    s = await E().get(t, { params: n, withCredentials: !0 });
                  if (!s || 200 != s?.status || 1 != s?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, le.H))(s).strErrorMsg}`;
                  const r = new Map();
                  return (
                    s.data.users.forEach((e) => {
                      const t = new b.b(e.steamid);
                      r.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return $t;
          })().load(e),
      });
      function Gt(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let $t;
      var zt = n(73745),
        Ut = n(3049);
      function qt(e) {
        const t = (0, G.a)(),
          n = (0, st.qh)(),
          r = (function (e) {
            const t = (0, S.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = x.w.Init(j.Rl),
                  n = new Date();
                n.setFullYear(n.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const s = await j.ZK.GetSaleEventOrganizers(e, t);
                return s.BSuccess()
                  ? s
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })(t),
          a = (0, i.useMemo)(() => {
            if (!r || !n) return null;
            const e = new Set(n.map((e) => e.id));
            return r
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [r, n]);
        return a
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)($.$n, {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      a.forEach((t) => {
                        const n = (0, Et.z0)(t.accountid),
                          s =
                            ((r = t.accountid),
                            Re.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          s?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString((0, Ut.J)()),
                        ]);
                      });
                    de.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                  children: [
                    "CSV Export",
                    (0, s.jsx)(H.o, {
                      tooltip:
                        "Wait until the page finishes loading before export",
                    }),
                  ],
                }),
                (0, s.jsxs)("table", {
                  children: [
                    (0, s.jsx)("thead", {
                      children: (0, s.jsxs)("tr", {
                        children: [
                          (0, s.jsx)("th", { children: "User" }),
                          (0, s.jsx)("th", { children: "Email" }),
                          (0, s.jsx)("th", { children: "Events" }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("tbody", {
                      children: a.map((e) =>
                        (0, s.jsx)(Kt, { organizer: e }, e.accountid),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : (0, s.jsx)(W.t, { string: (0, J.we)("#Loading"), size: "medium" });
      }
      function Kt(e) {
        const { organizer: t } = e,
          n = (0, i.useMemo)(
            () => b.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          r = (0, Et.hW)(n),
          a = (function (e) {
            const t = i.useContext(Ft);
            return (0, S.I)(Gt(t, e));
          })(t.accountid),
          o = r.data?.m_strPlayerName || "";
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsxs)("td", { children: [o, " (", t.accountid, ")"] }),
            (0, s.jsx)("td", { children: a?.data?.email_address }),
            (0, s.jsx)("td", {
              children: (0, s.jsx)(Wt, {
                name: o,
                rgClanEventGIDs: t.clan_event_gids,
              }),
            }),
          ],
        });
      }
      function Wt(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [r, i, a] = (0, zt.uD)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)($.$n, {
              onClick: i,
              children: ["See ", (0, fe.D)(n.length), " Events"],
            }),
            (0, s.jsx)(K.E, {
              active: r,
              children: (0, s.jsx)(q.o0, {
                bAlertDialog: !0,
                closeModal: a,
                strTitle: `${t}'s Events`,
                children: n.map((e) => (0, s.jsx)(Ht, { gid: e }, e)),
              }),
            }),
          ],
        });
      }
      function Ht(e) {
        const { gid: t } = e,
          n = (0, O.RR)(t);
        return n
          ? (0, s.jsxs)("a", {
              href: `${Z.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              target: "_blank",
              children: [
                (0, s.jsx)("div", { children: n.GetNameWithFallback(0) }),
                (0, s.jsx)("img", { src: n.GetImageURL("capsule", 0) }),
              ],
            })
          : (0, s.jsxs)("div", { children: ["Loading ", t] });
      }
      function Yt(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(Dt, {}) }),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(ut, {}) }),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(qt, {}) }),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(te, {}) }),
              onClick: t,
            },
          ];
        return (0, s.jsx)(ie, {
          children: (0, s.jsxs)("div", {
            className: f().AdminPageCtn,
            children: [
              (0, s.jsxs)("div", {
                className: f().PageTitle,
                children: [
                  "Meet Steam Admin Dashboard ",
                  (0, _.Fd)("current_year", "application_config"),
                ],
              }),
              (0, s.jsx)("hr", {}),
              (0, s.jsx)(m.V, { tabs: n }),
              (0, s.jsx)("div", { className: g().ClearThings }),
              (0, s.jsx)("br", {}),
            ],
          }),
        });
      }
      var Vt = n(65946),
        Jt = n(79645),
        Qt = n(1909),
        Zt = n(56330),
        Xt = n(85761),
        en = n.n(Xt);
      function tn(e) {
        const t = (function () {
            const [e] = (0, i.useState)(() =>
              (0, I.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, I.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: r } = (0, Et.js)(I.iA.accountid),
          [a, o] = (0, i.useState)(!1),
          [c, l] = (0, i.useState)(!1),
          [d, u] = (0, i.useState)(!1),
          [h, g] = (0, i.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !r || r.m_bPlayerNamePending
            ? (0, s.jsx)(W.t, {
                size: "medium",
                position: "center",
                string: (0, J.we)("#Loading"),
              })
            : (0, s.jsxs)("div", {
                className: (0, Y.A)(f().AdminPageCtn, en().Ctn),
                children: [
                  (0, s.jsx)("div", {
                    className: f().PageTitle,
                    children: (0, J.we)("#MeetSteam_MainTitle"),
                  }),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("div", {
                    className: f().ColumnCtn,
                    children: (0, s.jsxs)("div", {
                      className: f().LeftCol,
                      children: [
                        (0, s.jsxs)("div", {
                          className: f().SectionCtn,
                          children: [
                            (0, s.jsxs)("h1", {
                              children: [
                                " ",
                                (0, J.PP)(
                                  "#MeetSteam_Intro",
                                  r.m_strPlayerName,
                                  (0, s.jsx)("br", {}),
                                ),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: f().IntroText,
                              children: (0, J.we)("#MeetSteam_Desc1"),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(an, {
                            oRegistration: h,
                            fnSetRegistration: g,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(nn, {
                            oRegistration: h,
                            fnSetRegistration: g,
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: (0, Y.A)(f().SectionCtn, f().ActionBar),
                          children: [
                            (0, s.jsx)($.jn, {
                              onClick: async () => {
                                l(!0), o(!1), u(!1);
                                const e = `${I.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                  t = new FormData();
                                t.append("sessionid", I.TS.SESSIONID),
                                  t.append(
                                    "registrationJson",
                                    JSON.stringify(h),
                                  );
                                try {
                                  const n = await E().post(e, t, {
                                    withCredentials: !0,
                                  });
                                  1 != n.data.success
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          n.data.success,
                                      ),
                                      o(!0))
                                    : u(!0);
                                } catch (e) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    e,
                                  );
                                }
                                l(!1);
                              },
                              children: (0, J.we)("#Button_Submit"),
                            }),
                            c &&
                              (0, s.jsx)(W.t, {
                                size: "medium",
                                position: "center",
                                string: (0, J.we)("#Saving"),
                              }),
                            d &&
                              (0, s.jsx)("div", {
                                children: (0, J.we)("#Button_Saved"),
                              }),
                            a &&
                              (0, s.jsx)("div", {
                                className: Zt.ErrorStylesWithIcon,
                                children: (0, J.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
          : (0, s.jsx)("div", {
              className: en().Ctn,
              children: (0, J.we)("#MeetSteam_closed"),
            });
      }
      function nn(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          { rgEvents: r, rgOldEvents: i, selectConference: a } = k();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("h1", {
              children: (0, J.we)("#MeetSteam_Events_Interest"),
            }),
            (0, s.jsx)("p", {
              children: (0, J.PP)(
                "#MeetSteam_Events_title",
                (0, I.Tc)("meet_steam_year", "application_config") || "2025",
              ),
            }),
            (0, s.jsxs)("p", {
              children: [
                (0, s.jsx)("span", {
                  className: en().Indicator,
                  children: "*",
                }),
                " ",
                (0, J.PP)("#MeetSteam_Events_desc"),
              ],
            }),
            Boolean(a) &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("p", {
                    children: (0, J.we)("#MeetSteam_ConferenceOrg"),
                  }),
                  (0, s.jsx)(sn, { ...e, rgConference: [a] }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("h2", {
                    children: (0, J.we)("#MeetSteam_OtherConference"),
                  }),
                ],
              }),
            (0, s.jsx)(sn, { ...e, rgConference: r }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)($.pd, {
              type: "text",
              value: t.suggestion || "",
              onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
              label: (0, J.we)("#MeetSteam_others"),
            }),
            Boolean(i?.length > 0) &&
              (0, s.jsx)(Ct.qx, {
                bStartMinimized: !0,
                title: (0, J.we)("#MeetSteam_PastEvents", i.length),
                children: (0, s.jsx)(sn, { ...e, rgConference: i }),
              }),
          ],
        });
      }
      function sn(e) {
        const { rgConference: t } = e;
        return (0, s.jsxs)("table", {
          children: [
            (0, s.jsx)("thead", {
              children: (0, s.jsxs)("tr", {
                children: [
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                  (0, s.jsx)("th", {}),
                ],
              }),
            }),
            (0, s.jsx)("tbody", {
              children: t.map((t) =>
                (0, s.jsxs)(
                  "tr",
                  {
                    children: [
                      (0, s.jsx)("td", {
                        children: t.attending
                          ? (0, s.jsx)("span", {
                              className: en().Indicator,
                              children: "*",
                            })
                          : "",
                      }),
                      (0, s.jsxs)("td", {
                        children: [
                          (0, s.jsx)("div", { children: t.name }),
                          (0, s.jsx)("div", { children: t.place }),
                        ],
                      }),
                      (0, s.jsx)("td", {
                        children: (0, s.jsx)("div", { children: t.time }),
                      }),
                      (0, s.jsx)("td", {
                        children: (0, s.jsx)(rn, { ...e, conf: t }),
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          ],
        });
      }
      function rn(e) {
        const { oRegistration: t, fnSetRegistration: n, conf: r } = e;
        return (0, s.jsx)($.Yh, {
          checked: t.attending?.includes(r.id),
          onChange: (e) => {
            let s = t.attending ? [...t.attending] : [];
            e && !s.includes(r.id)
              ? (s.push(r.id), n({ ...t, attending: s }))
              : !e &&
                s.includes(r.id) &&
                (s.splice(s.indexOf(r.id), 1), n({ ...t, attending: s }));
          },
          tooltip: (0, J.we)("#MeetSteam_attend_ttip"),
        });
      }
      function an(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          r = (0, Et.js)(I.iA.accountid),
          a = (function (e) {
            const t = (function () {
                const [e] = (0, i.useState)(
                  () =>
                    (0, I.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, i.useState)(() =>
                  (0, I.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              s = Me(I.iA.accountid, e != n ? e : null);
            return e == n ? t : s?.email;
          })(t?.partner_id),
          [o, c] = (0, i.useState)(() =>
            Boolean((t.email_override && t.email_override != a) || !a),
          ),
          [l, d, u] = (0, Vt.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return r.data
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h1", { children: (0, J.we)("#MeetSteam_You") }),
                (0, s.jsx)("p", { children: (0, J.we)("#MeetSteam_You_Desc") }),
                (0, s.jsx)(on, {
                  nPartnerID: t.partner_id,
                  label: (0, J.we)("#MeetSteam_You_Company"),
                  setPartnerID: (e) => n({ ...t, partner_id: e }),
                }),
                (0, s.jsxs)("div", {
                  className: en().EmailInfoRow,
                  children: [
                    (0, s.jsx)("div", {
                      className: en().EmailField,
                      children: (0, s.jsx)($.pd, {
                        type: "string",
                        label: (0, J.we)("#MeetSteam_You_Email"),
                        disabled: !o,
                        value: t.email_override || a || "",
                        placeholder: (0, J.we)("#MeetSteam_You_EmailMissing"),
                        mustBeEmail: !0,
                        onChange: (e) =>
                          n({ ...t, email_override: e.currentTarget.value }),
                      }),
                    }),
                    !o &&
                      (0, s.jsx)($.Yh, {
                        checked: o,
                        onChange: c,
                        label: (0, J.we)("#MeetSteam_You_Update"),
                        tooltip: (0, J.we)("#MeetSteam_You_Update_ttip"),
                      }),
                  ],
                }),
                (0, s.jsx)($.JU, {
                  children: (0, J.we)("#MeetSteam_NeverMet"),
                }),
                (0, s.jsx)($.Yh, {
                  label: (0, J.we)("#MeetSteam_NeverMetNo"),
                  checked: l,
                  onChange: (e) => n({ ...t, have_you_met_steam: !e }),
                }),
                (0, s.jsx)($.JU, {
                  children: (0, J.we)("#MeetSteam_CapabableEnglish"),
                }),
                (0, s.jsxs)("div", {
                  className: en().RadioButtonCtn,
                  children: [
                    (0, s.jsx)($.Od, {
                      className: en().RadioButtons,
                      checked: !d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: void 0,
                          preferred_language: void 0,
                        }),
                      label: (0, J.we)("#MeetSteam_CapabableEnglish_Yes"),
                    }),
                    (0, s.jsx)($.Od, {
                      className: en().RadioButtons,
                      checked: d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: !0,
                          preferred_language: (0, St.sf)(I.TS.LANGUAGE),
                        }),
                      label: (0, J.we)("#MeetSteam_CapabableEnglish_No"),
                    }),
                  ],
                }),
                d &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      (0, s.jsx)($.JU, {
                        children: (0, J.we)("#MeetSteam_LanguagePref"),
                      }),
                      (0, s.jsx)(Qt.Ng, {
                        selectedLang: u,
                        bAllowUnsetOption: !1,
                        strTooltip: (0, J.we)("#MeetSteam_LanguagePref_ttip"),
                        fnOnLanguageChanged: (e) =>
                          n({ ...t, preferred_language: e }),
                      }),
                    ],
                  }),
              ],
            })
          : (0, s.jsx)(W.t, {
              size: "medium",
              position: "center",
              string: (0, J.we)("#Loading"),
            });
      }
      function on(e) {
        const { nPartnerID: t, setPartnerID: n, label: r } = e,
          i = (0, Jt.c)(I.iA.accountid);
        if (!i)
          return (0, s.jsx)(W.t, {
            size: "small",
            position: "center",
            string: (0, J.we)("#Loading"),
          });
        if (1 == i.length) return null;
        const a = [];
        return (
          i.forEach((e) =>
            a.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          (0, s.jsx)($.m, {
            layout: "inline",
            label: r,
            rgOptions: a,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      var cn = n(20587),
        ln = n(13038),
        dn = n.n(ln);
      function un(e) {
        const { data: t } = (0, Et.js)(I.iA.accountid),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, I.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          r = (function () {
            const [e] = (0, i.useState)(
              () => (0, I.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [a, c] = (0, i.useState)(() => r || ""),
          { surveyGID: l } = (0, o.g)(),
          [d, u] = (0, i.useState)(!1),
          [h, g] = (0, i.useState)(!1),
          [m, p] = (0, i.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? (0, s.jsx)(W.t, {
              size: "medium",
              position: "center",
              string: (0, J.we)("#Loading"),
            })
          : (0, s.jsxs)("div", {
              className: (0, Y.A)(f().AdminPageCtn, dn().Ctn),
              children: [
                (0, s.jsx)("div", {
                  className: f().PageTitle,
                  children: (0, J.we)("#MeetSteam_PostSurvey_Title", n),
                }),
                (0, s.jsx)("hr", {}),
                (0, s.jsx)("div", {
                  className: f().ColumnCtn,
                  children: (0, s.jsxs)("div", {
                    className: f().LeftCol,
                    children: [
                      (0, s.jsxs)("div", {
                        className: f().SectionCtn,
                        children: [
                          (0, s.jsx)("div", {
                            children: (0, J.we)(
                              "#MeetSteam_PostSurvey_Question",
                            ),
                          }),
                          (0, s.jsx)("textarea", {
                            rows: 10,
                            onChange: (e) => c(e.currentTarget.value),
                            value: a,
                            autoFocus: !0,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: (0, Y.A)(f().SectionCtn, f().ActionBar),
                        children: [
                          (0, s.jsx)($.jn, {
                            onClick: async () => {
                              g(!0), u(!1), p(!1);
                              const e = `${I.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${l}`,
                                t = new FormData();
                              t.append("gid", l),
                                t.append("sessionid", I.TS.SESSIONID);
                              let n = {
                                gid: l,
                                simple_response: a,
                                submit_time: Math.floor(
                                  new Date().getTime() / 1e3,
                                ),
                              };
                              t.append("surveyjson", JSON.stringify(n));
                              try {
                                const n = await E().post(e, t, {
                                  withCredentials: !0,
                                });
                                1 != n.data.success
                                  ? (console.error(
                                      "MeetSteamLanding failed " +
                                        n.data.success,
                                    ),
                                    u(!0))
                                  : p(!0);
                              } catch (e) {
                                console.error(
                                  "MeetSteamLanding failed caught",
                                  e,
                                );
                              }
                              g(!1);
                            },
                            children: (0, J.we)("#Button_Submit"),
                          }),
                          h &&
                            (0, s.jsx)(W.t, {
                              size: "medium",
                              position: "center",
                              string: (0, J.we)("#Saving"),
                            }),
                          m &&
                            (0, s.jsx)("div", {
                              children: (0, J.we)("#Button_Saved"),
                            }),
                          d &&
                            (0, s.jsx)("div", {
                              className: Zt.ErrorStylesWithIcon,
                              children: (0, J.we)(
                                "#Error_ErrorCommunicatingWithNetwork",
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      var hn = n(27144),
        gn = n(5695);
      function mn(e) {
        const t = (function () {
            const [e] = (0, i.useState)(
              () => (0, I.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, I.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          r = (function () {
            const e = (function () {
              const [e] = (0, i.useState)(() => {
                const e = new Map(),
                  t =
                    (0, I.Tc)("registration_by_gid", "application_config") ||
                    {};
                for (const n in t) {
                  const s = t[n];
                  e.set(n, s);
                }
                return e;
              });
              return e;
            })();
            return (0, i.useMemo)(() => {
              const t = new Map();
              return (
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    const s = new b.b(e.steamid);
                    t.has(s.GetAccountID()) || t.set(s.GetAccountID(), []),
                      (e.gidEvent = n),
                      t.get(s.GetAccountID()).push(e);
                  });
                }),
                t
              );
            }, [e]);
          })(),
          { surveyGID: a } = (0, o.g)(),
          { bIsLoading: c, events: l } = (0, O.PB)(t),
          [d, u] = (0, i.useMemo)(
            () => [
              n
                .map((e) => {
                  const t = new b.b(e.steamid);
                  if (r.has(t.GetAccountID())) {
                    const e = r.get(t.GetAccountID());
                    return JSON.parse(e[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              n.map((e) => new b.b(e.steamid).GetAccountID()),
            ],
            [r, n],
          ),
          h = (0, C.vh)(d),
          g = (0, hn.B3)(u);
        return !c && h && g
          ? (0, s.jsx)(fn, {
              rgSurveyResults: n,
              mapAccountsToReg: r,
              meetSteamEvents: l,
            })
          : (0, s.jsx)(W.t, { string: "Loading Event, Partner and User Info" });
      }
      const pn = (0, ye.FB)();
      function fn(e) {
        const {
            rgSurveyResults: t,
            mapAccountsToReg: n,
            meetSteamEvents: r,
          } = e,
          a = (0, i.useMemo)(() => {
            if (!t) return null;
            const e = new Map();
            r.forEach((t) => e.set(t.GID, t));
            const s = [];
            return (
              t.forEach((t) => {
                const r = JSON.parse(t.jsondata),
                  i = new b.b(t.steamid);
                let a = {
                  feedback: r.simple_response,
                  accountid: i.GetAccountID(),
                };
                if (n.has(i.GetAccountID())) {
                  const t = n.get(i.GetAccountID()),
                    s = JSON.parse(t[0].jsondata);
                  (a.partner_id = s.partner_id),
                    (a.email = s.email_override),
                    (a.name = s.name),
                    (a.registrations = "");
                  const r = (0, C.Yd)(s.partner_id);
                  r && (a.partner_name = r.name),
                    t.forEach((t) => {
                      const n = e.get(t.gidEvent);
                      if (n) {
                        const e = n.jsondata.meet_steam_groups.find(
                          (e) => e.group_id === t.group_id,
                        ).localized_session_title[0];
                        a.registrations.length > 0 && (a.registrations += "|"),
                          (a.registrations += e);
                      }
                    });
                } else {
                  const e = (0, hn.CF)(i.GetAccountID());
                  e && (a.name = e.persona_name);
                }
                s.push(a);
              }),
              s
            );
          }, [n, r, t]),
          o = (0, i.useMemo)(
            () => [
              pn.accessor("name", { header: "Name", size: 150 }),
              pn.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: gn.Gb,
              }),
              pn.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: _n,
              }),
              pn.accessor("accountid", { header: "Account ID", size: 150 }),
              pn.accessor("email", { header: "Email", size: 150 }),
              pn.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return a
          ? (0, s.jsx)(u.tH, {
              children: (0, s.jsxs)("div", {
                className: f().AdminPageCtn,
                children: [
                  (0, s.jsx)("div", {
                    className: f().PageTitle,
                    children: "Survey Results",
                  }),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)($.$n, {
                    id: "download-csv",
                    onClick: () =>
                      (0, nt.K)(
                        "meetsteam_survey_results.csv",
                        a,
                        o.map((e) => ({
                          accessorKey: e.accessorKey,
                          header:
                            "string" == typeof e.header
                              ? e.header
                              : (e.accessorKey ?? ""),
                        })),
                      ),
                    style: { width: "120px" },
                    children: "Download CSV",
                  }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)(we.k, {
                    columns: o,
                    data: a,
                    getRowKey: (e) => e,
                    stickyHeader: !0,
                    nItemHeight: 28,
                    overscan: a.length,
                  }),
                ],
              }),
            })
          : (0, s.jsx)(W.t, { string: (0, J.we)("#Loading") });
      }
      function _n(e) {
        const t = e.getValue();
        return t?.length > 0
          ? (0, s.jsx)(gn.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const xn = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function jn(e) {
        return (
          (0, i.useEffect)(() => {
            cn.O3.Init();
          }, []),
          (0, s.jsx)(c.m, {
            children: (0, s.jsx)(a.Kd, {
              basename: (0, r.C)() + "meetsteam/",
              children: (0, s.jsxs)(o.dO, {
                children: [
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: r.B.DiagData(),
                    render: (e) =>
                      (0, s.jsx)(l.z, {
                        ...e,
                        strConfigID: "application_config",
                      }),
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: xn.AdminDashboard(),
                    component: Yt,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: xn.YearlySurvery(":year(\\d+)"),
                    component: tn,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: xn.PostEventSurvey(":surveyGID(\\d+)"),
                    component: un,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: xn.PostEventSurveyResults(":surveyGID(\\d+)"),
                    component: mn,
                  }),
                  (0, s.jsx)(o.qh, { component: d.a }),
                ],
              }),
            }),
          })
        );
      }
    },
  },
]);
