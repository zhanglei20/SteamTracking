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
                  (this._handle = new p(t)),
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
          function p(e) {
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
              p = !1,
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
                              p = i[u],
                              g = 0,
                              f = 0,
                              _ = 0,
                              x =
                                ((l = void 0),
                                new m({
                                  comments: r,
                                  delimiter: p,
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
                                  : 0 < h && ((g += Math.abs(h - l)), (l = h)));
                          0 < x.data.length && (f /= x.data.length - _),
                            (void 0 === c || g <= c) &&
                              (void 0 === d || d < f) &&
                              1.99 < f &&
                              ((c = g), (a = p), (d = f));
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
                  (n = new m(c)),
                  (x = n.parse(t, i, a)),
                  y(),
                  p ? { meta: { paused: !0 } } : x || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return p;
              }),
              (this.pause = function () {
                (p = !0),
                  n.abort(),
                  (t = S(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                d.streamer._halted
                  ? ((p = !1), d.streamer.parseChunk(t, !0))
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
                  (t = new RegExp(g(t) + "([^]*?)" + g(t), "gm"));
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
          function g(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function m(e) {
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
              p = !1;
            (this.parse = function (o, m, f) {
              if ("string" != typeof o)
                throw new Error("Input must be a string");
              var _ = o.length,
                x = t.length,
                j = n.length,
                v = s.length,
                y = S(r),
                w = [],
                E = [],
                I = [],
                b = (h = 0);
              if (!o) return P();
              if (a || (!1 !== a && -1 === o.indexOf(d))) {
                for (var D = o.split(n), C = 0; C < D.length; C++) {
                  if (((I = D[C]), (h += I.length), C !== D.length - 1))
                    h += n.length;
                  else if (f) return P();
                  if (!s || I.substring(0, v) !== s) {
                    if (y) {
                      if (((w = []), M(I.split(t)), F(), p)) return P();
                    } else M(I.split(t));
                    if (i && i <= C) return (w = w.slice(0, i)), P(!0);
                  }
                }
                return P();
              }
              for (
                var A = o.indexOf(t, h),
                  k = o.indexOf(n, h),
                  T = new RegExp(g(u) + g(d), "g"),
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
                        L()
                      );
                    if (R === _ - 1) return L(o.substring(h, R).replace(T, d));
                    if (d === u && o[R + 1] === u) R++;
                    else if (d === u || 0 === R || o[R - 1] !== u) {
                      -1 !== A && A < R + 1 && (A = o.indexOf(t, R + 1));
                      var N = B(
                        -1 ===
                          (k = -1 !== k && k < R + 1 ? o.indexOf(n, R + 1) : k)
                          ? A
                          : Math.min(A, k),
                      );
                      if (o.substr(R + 1 + N, x) === t) {
                        I.push(o.substring(h, R).replace(T, d)),
                          o[(h = R + 1 + N + x)] !== d && (R = o.indexOf(d, h)),
                          (A = o.indexOf(t, h)),
                          (k = o.indexOf(n, h));
                        break;
                      }
                      if (
                        ((N = B(k)),
                        o.substring(R + 1 + N, R + 1 + N + j) === n)
                      ) {
                        if (
                          (I.push(o.substring(h, R).replace(T, d)),
                          O(R + 1 + N + j),
                          (A = o.indexOf(t, h)),
                          (R = o.indexOf(d, h)),
                          y && (F(), p))
                        )
                          return P();
                        if (i && w.length >= i) return P(!0);
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
                else if (s && 0 === I.length && o.substring(h, h + v) === s) {
                  if (-1 === k) return P();
                  (h = k + j), (k = o.indexOf(n, h)), (A = o.indexOf(t, h));
                } else if (-1 !== A && (A < k || -1 === k))
                  I.push(o.substring(h, A)), (h = A + x), (A = o.indexOf(t, h));
                else {
                  if (-1 === k) break;
                  if ((I.push(o.substring(h, k)), O(k + j), y && (F(), p)))
                    return P();
                  if (i && w.length >= i) return P(!0);
                }
              return L();
              function M(e) {
                w.push(e), (b = h);
              }
              function B(e) {
                var t = 0;
                return -1 !== e &&
                  (e = o.substring(R + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function L(e) {
                return (
                  f ||
                    (void 0 === e && (e = o.substring(h)),
                    I.push(e),
                    (h = _),
                    M(I),
                    y && F()),
                  P()
                );
              }
              function O(e) {
                (h = e), M(I), (I = []), (k = o.indexOf(n, h));
              }
              function P(s) {
                if (e.header && !m && w.length && !l) {
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
                    aborted: p,
                    truncated: !!s,
                    cursor: b + (m || 0),
                    renamedHeaders: c,
                  },
                };
              }
              function F() {
                r(P()), (w = []), (E = []);
              }
            }),
              (this.abort = function () {
                p = !0;
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
                  new RegExp(g(a), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return p(null, e, l);
                if ("object" == typeof e[0])
                  return p(d || Object.keys(e[0]), e, l);
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
                  p(e.fields || [], e.data || [], l)
                );
              throw new Error("Unable to serialize unrecognized input");
              function p(e, t, n) {
                var a = "",
                  o =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  c = !Array.isArray(t[0]);
                if (o && s) {
                  for (var l = 0; l < e.length; l++)
                    0 < l && (a += r), (a += m(e[l], l));
                  0 < t.length && (a += i);
                }
                for (var d = 0; d < t.length; d++) {
                  var u = (o ? e : t[d]).length,
                    h = !1,
                    p = o ? 0 === Object.keys(t[d]).length : 0 === t[d].length;
                  if (
                    (n &&
                      !o &&
                      (h =
                        "greedy" === n
                          ? "" === t[d].join("").trim()
                          : 1 === t[d].length && 0 === t[d][0].length),
                    "greedy" === n && o)
                  ) {
                    for (var g = [], f = 0; f < u; f++) {
                      var _ = c ? e[f] : f;
                      g.push(t[d][_]);
                    }
                    h = "" === g.join("").trim();
                  }
                  if (!h) {
                    for (var x = 0; x < u; x++) {
                      0 < x && !p && (a += r);
                      var j = o && c ? e[x] : x;
                      a += m(t[d][j], x);
                    }
                    d < t.length - 1 && (!n || (0 < u && !p)) && (a += i);
                  }
                }
                return a;
              }
              function m(e, t) {
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
            (o.Parser = m),
            (o.ParserHandle = p),
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
    36637: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => ln, default: () => dn });
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
        p = n.n(h),
        g = n(38135),
        m = n(45737),
        f = n.n(m),
        _ = n(24484),
        x = n(56545),
        j = n(85737),
        v = n(64753),
        S = n(20194),
        y = n(75233),
        w = n(41735),
        E = n.n(w),
        I = n(17720),
        b = n(78327),
        D = n(32179),
        C = n(21711),
        A = n(44165),
        k = n(95034);
      function T() {
        const [e] = i.useState(() =>
            (0, b.Tc)("events_list", "application_config"),
          ),
          [t] = (0, k.QD)("filter"),
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
      async function N(e) {
        const t = `${b.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: b.TS.SESSIONID, partnerid: e },
          s = await E().get(t, { params: n });
        return s?.data?.data;
      }
      function M(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function B(e, t, n) {
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
      var L = n(38390),
        O = n(50304),
        P = n(96001),
        F = n(16676),
        G = n(26161),
        z = n(78395),
        U = n(21869),
        $ = n(22797),
        q = n(26408),
        K = n(52038),
        W = n(61859),
        H = n(91675),
        Y = n(30470),
        V = n(30565),
        J = n.n(V),
        Q = n(34283),
        Z = n.n(Q),
        X = n(68797),
        ee = n(9161),
        te = n(65689),
        ne = n(81393),
        se = n(96059);
      class re {
        m_steamInterface;
        GetSaleFeatureTransport() {
          return this.m_steamInterface;
        }
        static s_Singleton;
        static Get() {
          return (
            re.s_Singleton ||
              ((re.s_Singleton = new re()), re.s_Singleton.Init()),
            re.s_Singleton
          );
        }
        Init() {
          const e = (0, _.Tc)("store_feature_token", "application_config");
          (0, ne.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new se.D(Y.TS.WEBAPI_BASE_URL, e));
        }
      }
      function ie() {
        return re.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      var ae = n(6083);
      function oe(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(!1),
          [o, c] = (0, i.useState)(null),
          [l, d] = i.useState(0),
          [u, p] = i.useState(""),
          [g, m] = i.useState(""),
          [f, _] = i.useState(!1),
          x = ie(),
          j = (0, S.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, l],
            queryFn: async () => {
              const e = {
                  steamid: I.b.InitFromAccountID(l).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await te.Nl.GetUserActionData(x, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && l > 0,
          });
        i.useEffect(() => {
          j.isLoading ||
            (j.isSuccess &&
              (p(j.data.partner_id ? j.data.partner_id.toString() : ""),
              m(j.data.email_override ?? ""),
              _(j.data.allow_registration_if_full ?? !1)));
        }, [j.isLoading, j.isSuccess, j.data]);
        return (0, s.jsxs)(z.o0, {
          strTitle: "Invite User",
          bOKDisabled: !l || r || j.isLoading,
          onOK: async () => {
            a(!0);
            const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
              s = await ue(
                n,
                [
                  {
                    nAccountID: l,
                    nPartnerID: e,
                    strEmailOverride: g,
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
                  (0, s.jsx)(F.pd, {
                    type: "number",
                    label: "Account ID",
                    onChange: (e) => d(Number.parseInt(e.currentTarget.value)),
                    value: l,
                  }),
                  0 != l &&
                    !j.isLoading &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(F.pd, {
                          type: "number",
                          label: "Partner ID (optional)",
                          onChange: (e) => p(e.currentTarget.value),
                          value: u,
                        }),
                        (0, s.jsx)(F.pd, {
                          type: "text",
                          label: "Email override (optional)",
                          onChange: (e) => m(e.currentTarget.value.trim()),
                          value: g,
                        }),
                        (0, s.jsx)(F.Yh, {
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
              (0, s.jsx)($.t, {
                size: "small",
                position: "center",
                string: (0, W.we)("#Saving"),
              }),
            j.isLoading &&
              (0, s.jsx)($.t, {
                size: "small",
                position: "center",
                string: (0, W.we)("#Loading"),
              }),
          ],
        });
      }
      function ce(e) {
        const { hideModal: t, gid: n } = e,
          [r, a] = (0, i.useState)(null),
          [o, c] = (0, i.useState)(!1),
          [l, d] = (0, i.useState)(null),
          [u, p] = (0, i.useState)(null),
          [g, m] = (0, i.useState)(null);
        return (0, s.jsxs)(z.o0, {
          strTitle: "Invite Users",
          bOKDisabled: !r || 0 == r.length || null != u,
          strCancelButtonText: null !== u ? "Close" : "Cancel",
          onOK: async () => {
            c(!0);
            const e = await ue(n, r, !1);
            1 == e?.success
              ? (p(e.rgInvitedAccounts.length), m(e.rgSkippedAccounts.length))
              : d("We hit error during invite, check console: " + e?.msg),
              c(!1);
          },
          onCancel: () => {
            p(null), m(null), c(!1), a(null), t();
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
                  (0, ae.D)(u),
                  " accounts, skipped previously invited ",
                  (0, ae.D)(g),
                ],
              }),
            o &&
              (0, s.jsx)($.t, {
                size: "small",
                position: "center",
                string: (0, W.we)("#Saving"),
              }),
            null == r
              ? (0, s.jsx)(de, { setInvites: a })
              : (0, s.jsx)(le, { rgInvites: r }),
          ],
        });
      }
      function le(e) {
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
      function de(e) {
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
                ee.g.WriteCSVToFile(t, "invite_template.csv");
              },
              children: "Download Template Example",
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(F.$n, {
              children: (0, s.jsxs)("label", {
                className: Z().ImportButtonLabel,
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
                          s = await ee.g.ParseCSVFile(n);
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
      async function ue(e, t, n) {
        const s = t.map((e) => e.nAccountID).join(","),
          r = t.map((e) => e.nPartnerID).join(","),
          i = t.map((e) => e.strEmailOverride).join(","),
          a = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let o = new FormData();
        o.append("sessionid", Y.TS.SESSIONID),
          o.append("gid", e),
          o.append("accounts", s),
          o.append("partnerids", r),
          o.append("emailoverride", i),
          o.append("allowregistrationiffull", a),
          o.append("forceupdate", n ? "1" : "0");
        const c = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await E().post(c, o, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, X.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, X.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var he = n(16666),
        pe = n(66051),
        ge = n(54806),
        me = n(58632),
        fe = n.n(me);
      function _e(e) {
        const t = ie(),
          n = i.useContext(je),
          s = (0, S.I)(ve(n, t, e));
        return s.isLoading ? null : s.data;
      }
      function xe(e) {
        const t = ie(),
          n = i.useContext(je);
        return (0, ge.E)({ queries: e.map((e) => ve(n, t, e)) });
      }
      const je = i.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            Se ||
              (Se = new (fe())(
                async (t) => {
                  const n = x.w.Init(te.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(6);
                  const s = await te.Nl.GetMultipleUserActionData(e, n);
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
                            const n = new I.b(t.steamid);
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
            return Se;
          })(e).load(t),
      });
      function ve(e, t, n) {
        return {
          queryKey: ["MeetSteamAllRegistrationStatus", n],
          queryFn: () => e.loadMeetSteamAllRegistration(t, n),
          enabled: !!n,
        };
      }
      let Se;
      var ye = n(7860);
      function we(e, t) {
        const n = (0, P.a)(),
          s = i.useContext(Ie),
          r = (0, S.I)(be(s, n, e, t));
        return r.isLoading ? null : r.data;
      }
      function Ee(e, t) {
        return ye.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const Ie = i.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            De ||
              (De = new (fe())(
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
            return De;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function be(e, t, n, s) {
        return {
          queryKey: ["PartnerEmailAndName", n, s],
          queryFn: () => e.loadPartnerEmailAndName(t, n, s),
          enabled: !!n || !!s,
        };
      }
      let De;
      function Ce(e) {
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
            (0, s.jsx)(U.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(z.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(Me, { rgEventGIDs: t, fnSelectedEvents: c })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(Ne, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)(F.$n, {
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
      const Ae = (0, he.FB)();
      function ke(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                Ee(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function Te(e) {
        return ke(e.cell.getValue());
      }
      function Re(e, t) {
        const n = xe(t),
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
            const n = (0, P.a)(),
              s = i.useContext(Ie);
            return (0, ge.E)({ queries: e.map((e, r) => be(s, n, e, t[r])) });
          })(r, a);
        return o.filter((e) => !e.isLoading).length == o.length ? s : null;
      }
      function Ne(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, _.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          r = (0, D.vh)(n),
          a = Re(n, t),
          o = (0, i.useMemo)(() => {
            if (!r || !a) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = a.get(t);
                e.push({
                  partner_id: t,
                  partner_name: (0, D.Yd)(t)?.name || "Unknown",
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
              Ae.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ae.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Ae.accessor("invitations", {
                header: "Invitations",
                cell: Te,
                size: 300,
              }),
              Ae.accessor("registrations", {
                header: "Registered to Attend",
                cell: Te,
                size: 300,
              }),
            ],
            [],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(F.JU, { children: "Partner Analysis" }),
            Boolean(o)
              ? (0, s.jsxs)(u.tH, {
                  children: [
                    (0, s.jsx)(pe.k, {
                      columns: c,
                      data: o,
                      getRowKey: (e) => e,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: n.length,
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(F.$n, {
                      id: "download-csv",
                      onClick: function () {
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
                                ? ke(s)
                                : s.toString(),
                            );
                          }
                          e.push(n);
                        }
                        ee.g.WriteCSVToFile(e, "partneranalysis.csv");
                      },
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                  ],
                })
              : (0, s.jsx)($.t, {
                  string: (0, W.we)("#Loading"),
                  position: "center",
                }),
          ],
        });
      }
      function Me(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [r, a] = (0, i.useState)([]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(F.JU, { children: "Choose Events" }),
            t.map((e) =>
              (0, s.jsx)(
                Be,
                { gidClanEvent: e, rgSelected: r, fnSetSelected: a },
                e,
              ),
            ),
            (0, s.jsx)(F.$n, {
              disabled: 0 == r.length,
              onClick: () => n(r),
              children: "Continue",
            }),
          ],
        });
      }
      function Be(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = e,
          i = (0, L.RR)(t).GetNameWithFallback(0);
        return (0, s.jsx)(F.Yh, {
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
      var Le = n(30603),
        Oe = n.n(Le),
        Pe = n(29233);
      function Fe(e) {
        const { hideModal: t, gid: n } = e,
          r = _e(n),
          a = (0, y.jE)(),
          [o, c] = (0, i.useMemo)(
            () =>
              r
                ? [r.length, r.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [r],
          );
        return (0, s.jsxs)(z.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription:
            "This will show the users we have invited and their status. As well as individual who were just sent the registration page on their own.",
          strTitle: "Invitation And Registration Status",
          children: [
            !r &&
              (0, s.jsx)($.t, {
                size: "medium",
                position: "center",
                string: (0, W.we)("#Loading"),
              }),
            r &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    children: ["There are ", o, " registrations."],
                  }),
                  c > 0 &&
                    (0, s.jsxs)(F.$n, {
                      onClick: async () => {
                        await (async function (e, t) {
                          let n = new FormData();
                          n.append("sessionid", Y.TS.SESSIONID),
                            n.append("gid", t);
                          const s = `${Y.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                          try {
                            const r = await E().post(s, n, {
                              withCredentials: !0,
                            });
                            if (1 != r?.data?.success) {
                              let e = (0, X.H)(r);
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
                            let t = (0, X.H)(e);
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
                          (0, s.jsx)(Ge, { reg: e }, "regentry_" + e.steamid),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function Ge(e) {
        const { reg: t } = e,
          [n] = (0, D.UA)(t.partner_id);
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
      function ze(e) {
        const { hideModal: t, gid: n, title: r, group: a, session: o } = e,
          c = (0, P.a)(),
          l = _e(n),
          d = B(c, n, a?.group_id),
          [u, h] = (0, i.useMemo)(() => {
            const e = d?.data?.filter((e) => e.session_id == o.id),
              t = new Map(),
              n = new Map();
            return (
              e?.forEach((e) => {
                const s = new Pe.b2(e.steamid).GetAccountID();
                if ((t.set(s, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    n.set(s, t.pre_event_partner_questions);
                }
              }),
              [t, n]
            );
          }, [o, d]),
          p = l?.filter((e) => u.has(new Pe.b2(e.steamid).GetAccountID()));
        return (0, s.jsxs)(z.o0, {
          bAlertDialog: !0,
          bAllowFullSize: !0,
          bDisableBackgroundDismiss: !0,
          closeModal: t,
          strDescription: "Show who is registered for this session",
          strTitle: "Session Registration",
          children: [
            (0, s.jsx)("div", {
              className: Oe().ExportToCSV,
              children: (0, s.jsx)("a", {
                onClick: () =>
                  (function (e, t, n, s, r) {
                    const i = [],
                      a = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    e.ask_registration_question && a.push("Pre Reg Answer");
                    i.push(a),
                      n.forEach((t) => {
                        const n = [],
                          a = t.partner_id ? (0, D.Yd)(t.partner_id) : void 0;
                        n.push("" + t.steamid),
                          n.push(t.name),
                          n.push(t.invited ? "YES" : ""),
                          n.push(a ? `${a?.name} (${t.partner_id})` : ""),
                          n.push(t.email_override),
                          n.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const o = new Pe.b2(t.steamid);
                        if (s.has(o.GetAccountID())) {
                          const e = Ue(s.get(o.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            n.push(t);
                          } else n.push("");
                        } else n.push("");
                        if (e.ask_registration_question) {
                          const t = r
                            .get(o.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && n.push(t.question);
                        }
                        i.push(n);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(t.guest_names[e]),
                            i.push(n);
                        }
                      });
                    const o =
                      "meetsteam_" +
                      t.replace(/[ <>:"/\\|?*\x00-\x1F]/g, "_") +
                      ".csv";
                    ee.g.WriteCSVToFile(i, o);
                  })(a, r, p, u, h),
                children: "Export to CSV",
              }),
            }),
            (0, s.jsxs)("table", {
              className: Oe().Table,
              children: [
                (0, s.jsx)("thead", {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)("th", { children: "SteamID" }),
                      (0, s.jsx)("th", { children: "Name" }),
                      (0, s.jsx)("th", { children: "Invited" }),
                      (0, s.jsx)("th", { children: "Partner" }),
                      (0, s.jsx)("th", { children: "Email Override" }),
                      (0, s.jsxs)("th", {
                        children: [
                          "Guest Count ",
                          (0, s.jsx)(q.o, {
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
                  children: p?.flatMap((e) => {
                    const t = new Pe.b2(e.steamid).GetAccountID(),
                      n = [
                        (0, s.jsx)(
                          $e,
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
                          qe,
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
      function Ue(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let s = null;
        return n in t && (s = t[n]), s;
      }
      function $e(e) {
        const { inviteInfo: t, regInfo: n, group: r, preRegQuestions: i } = e,
          [a] = (0, D.UA)(t.partner_id),
          o = Ue(n, t);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: t.steamid }),
            (0, s.jsx)("td", { children: t.name }),
            (0, s.jsx)("td", { children: Boolean(t.invited) ? "YES" : "" }),
            (0, s.jsxs)("td", {
              children: [
                (a?.name ?? t.game) ? `Game: ${t.game}` : "",
                " ",
                t.partner_id ? `(${t.partner_id})` : "",
              ],
            }),
            (0, s.jsx)("td", { children: t.email_override }),
            (0, s.jsx)("td", {
              children: n.guests_registered ? n.guests_registered - 1 : 0,
            }),
            (0, s.jsx)("td", { children: o ? (0, W.TW)(o) : "" }),
            r.ask_registration_question &&
              (0, s.jsx)("td", {
                children:
                  i?.find((e) => e.group_id == r.group_id)?.question || "",
              }),
          ],
        });
      }
      function qe(e) {
        const { guestName: t } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: "(guest)" }),
            (0, s.jsx)("td", { children: t }),
          ],
        });
      }
      var Ke = n(2516);
      function We(e) {
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
            (0, s.jsx)(U.E, {
              active: n,
              children: (0, s.jsx)(u.tH, {
                children: (0, s.jsx)(z.o0, {
                  closeModal: a,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                  children: Boolean(null == o)
                    ? (0, s.jsx)(Me, { rgEventGIDs: t, fnSelectedEvents: c })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(Ye, { rgGidMeetSteamEvents: o }),
                          (0, s.jsx)(F.$n, {
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
      const He = (0, he.FB)();
      function Ye(e) {
        const { rgGidMeetSteamEvents: t } = e,
          { rgAllRegistrations: n, rgPartnerIDs: r } = (function (e) {
            const t = xe(e),
              [n, s] = (0, i.useMemo)(() => {
                if (t.filter((e) => !e.isLoading).length != t.length)
                  return [null, null];
                const e = new Array(),
                  n = new Set();
                return (
                  t.forEach((t) => {
                    t.data.forEach((t) => {
                      t.guests_registered > 0 &&
                        (e.push(t), t.partner_id && n.add(t.partner_id));
                    });
                  }),
                  [Array.from(n), e]
                );
              }, [t]);
            return { rgAllRegistrations: s, rgPartnerIDs: n };
          })(t),
          a = (0, D.vh)(r),
          o = (0, i.useMemo)(() => {
            if (!a || !n) return null;
            const e = [];
            return (
              n.forEach((t) => {
                (0, D.Yd)(t.partner_id);
                e.push({
                  partner_id: t.partner_id ? "" + t.partner_id : "",
                  partner_name: (0, D.Yd)(t.partner_id)?.name || "Unknown",
                  name: t.name,
                  accountid: t.accountid,
                  email: t.email_override,
                  guest_registrated: t.guests_registered - 1,
                  guest_names:
                    t.guest_names?.length > 0 ? t.guest_names.join(",") : "",
                });
              }),
              e
            );
          }, [a, n]),
          c = (0, i.useMemo)(
            () => [
              He.accessor("name", { header: "Name", size: 200 }),
              He.accessor("accountid", { header: "Account ID", size: 150 }),
              He.accessor("email", { header: "Email", size: 150 }),
              He.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              He.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              He.accessor("partner_id", { header: "Partner ID", size: 100 }),
              He.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
            ],
            [],
          );
        return a && r && o
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(F.JU, { children: "Registations" }),
                Boolean(o)
                  ? (0, s.jsxs)(u.tH, {
                      children: [
                        (0, s.jsx)(pe.k, {
                          columns: c,
                          data: o,
                          getRowKey: (e) => e,
                          stickyHeader: !0,
                          nItemHeight: 28,
                          overscan: r.length,
                        }),
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)(F.$n, {
                          id: "download-csv",
                          onClick: () =>
                            (0, Ke.K)(
                              "registrationdump.csv",
                              o,
                              c.map((e) => ({
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
                      ],
                    })
                  : (0, s.jsx)($.t, {
                      string: (0, W.we)("#Loading"),
                      position: "center",
                    }),
              ],
            })
          : (0, s.jsx)($.t, { string: (0, W.we)("#Loading") });
      }
      var Ve = n(65);
      function Je(e) {
        const t = Qe();
        return (0, s.jsx)("div", {
          children: (0, s.jsx)("ol", {
            children: Array.from(t.entries()).map(([e, t]) =>
              (0, s.jsx)(
                "li",
                {
                  children: (0, s.jsx)("a", {
                    href: `${b.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
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
      function Qe() {
        const [e] = (0, i.useState)(() => {
          const e = (0, b.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      var Ze = n(74783),
        Xe = n(19367),
        et = n.n(Xe);
      function tt(e) {
        const t = I.b.InitFromClanID((0, G.H)()),
          n = (function () {
            const [e] = (0, i.useState)(() =>
              (0, _.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          [r, a] = (0, k.QD)("showpastevents", !1),
          { bIsLoading: o, events: c } = (0, L.PB)(n),
          l = i.useMemo(() => {
            if (!c) return null;
            const e =
                r && c
                  ? [...c]
                  : c?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, Ve.bv)(e, (e) => (0, Ve.J2)(new Date(1e3 * e.startTime))),
              );
            return t?.sort((e) => -e[0]), t;
          }, [c, r]);
        return o
          ? (0, s.jsx)($.t, {})
          : l
            ? (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("a", {
                        href: `${Y.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                        children: "Open Meet Steam Event Dashboard",
                      }),
                      (0, s.jsx)(Ce, { rgEventGIDs: n }),
                      (0, s.jsx)(We, { rgEventGIDs: n }),
                    ],
                  }),
                  (0, s.jsx)(F.Yh, {
                    checked: r,
                    onChange: a,
                    label: "Show Past Events",
                  }),
                  (0, s.jsx)("hr", {}),
                  l.map((e) =>
                    (0, s.jsx)(
                      nt,
                      { month: new Date(1e3 * e[0]), events: e[1] },
                      e[0],
                    ),
                  ),
                ],
              })
            : null;
      }
      function nt(e) {
        const { month: t, events: n } = e,
          r = i.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          a = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("div", { className: J().MonthTitle, children: a }),
            (0, s.jsx)("div", {
              className: J().MonthEvents,
              children: r.map((e) => (0, s.jsx)(st, { oEvent: e }, e.GID)),
            }),
          ],
        });
      }
      function st(e) {
        const { oEvent: t } = e,
          n = t.GID,
          r = I.b.InitFromClanID((0, G.H)()),
          a = (0, P.a)(),
          o = (0, O.my)(a, (0, G.H)(), n),
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
          className: J().EventRow,
          children: [
            (0, s.jsxs)("div", {
              className: J().EventMainDetails,
              children: [
                (0, s.jsxs)("div", {
                  className: J().TitleLine,
                  children: [
                    (0, s.jsx)("div", { className: J().Title, children: l }),
                    (0, s.jsx)("div", {
                      className: J().StartDate,
                      children: (0, W.TW)(t?.startTime),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: J().ActionLine,
                  children: [
                    (0, s.jsx)("div", {
                      children: (0, s.jsx)("a", {
                        href: `${Y.TS.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                        children: "Edit",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        " | ",
                        (0, s.jsx)("a", {
                          href: `${Y.TS.STORE_BASE_URL}meetsteam/${n}`,
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
                          (0, s.jsx)(ct, { gid: n }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${Y.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${Y.iA.accountid}`,
                            children: "QR Page",
                          }),
                          " | ",
                          (0, s.jsx)("a", {
                            href: `${Y.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                            children: "Attendance List",
                          }),
                          (0, s.jsx)(rt, { gid: n }),
                          (0, s.jsx)(at, { gid: n }),
                          (0, s.jsx)(it, { gid: n }),
                          (0, s.jsx)(ot, { gid: n }),
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
                                dt,
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
                              children: (0, s.jsx)(dt, {
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
      function rt(e) {
        const { gid: t } = e,
          n = Qe();
        return Array.from(n.keys()).includes(t)
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                " | ",
                (0, s.jsx)("a", {
                  href: `${Y.TS.PARTNER_BASE_URL}meetsteam/survey/${t}`,
                  children: "Survey",
                }),
              ],
            })
          : null;
      }
      function it(e) {
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
                (0, s.jsx)(q.o, {
                  tooltip:
                    "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                }),
              ],
            }),
            (0, s.jsx)(u.tH, {
              children: (0, s.jsx)(U.E, {
                active: n,
                children: (0, s.jsx)(ce, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function at(e) {
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
              children: (0, s.jsx)(U.E, {
                active: n,
                children: (0, s.jsx)(oe, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function ot(e) {
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
              children: (0, s.jsx)(U.E, {
                active: n,
                children: (0, s.jsx)(Fe, { hideModal: i, gid: t }),
              }),
            }),
          ],
        });
      }
      function ct(e) {
        const { gid: t } = e,
          n = (0, P.a)(),
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
                    s = I.b.InitFromClanID((0, G.H)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(s.ConvertTo64BitString());
                  const r = await j.ZK.TestFireEmails(e, n);
                  return console.log("test fire", r), r.GetEResult();
                })(n, t);
                c(s);
              },
              children: "Email Self",
            }),
            (0, s.jsx)(U.E, {
              active: r,
              children: (0, s.jsxs)(z.o0, {
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
                    (0, s.jsx)($.t, { string: (0, W.we)("#Loading") }),
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
      function lt(e, t) {
        const n = et().unix(e),
          s = et().unix(e).tz(t),
          r = s.utcOffset() - n.utcOffset(),
          i = new Date(1e3 * (e + 60 * r)),
          a = new Date();
        return `${i.getFullYear() == a.getFullYear() ? ((0, H.$w))(i, !1, !1) : ((0, H._9))(i, !1, !1)} ${(0, H.KC)(e + 60 * r)} ${s.format("z")}`;
      }
      function dt(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: r,
            session: i,
            firstSession: a = !0,
          } = e,
          o = W.NT.GetWithFallback(n?.localized_session_title, 0),
          c = W.NT.GetWithFallback(n?.localized_session_description, 0),
          l = W.NT.GetWithFallback(n?.localized_intended_audience, 0),
          d = r?.find((e) => e.group_id == n.group_id && e.session_id == i.id),
          [h, p, g] = (0, v.uD)(),
          m = B((0, P.a)(), t, n?.group_id);
        let f = Math.min((d?.guest_count / i.max_capacity) * 100, 100),
          _ = d?.guest_count > 0 ? `${f}%` : "0%",
          x = d?.guest_count >= i.max_capacity;
        const j = Intl.DateTimeFormat().resolvedOptions().timeZone,
          S =
            "in_person" === i.location_type
              ? (i.in_person_time_zone ?? Ze.hh)
              : j;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            a && Boolean(n)
              ? (0, s.jsxs)("td", {
                  children: [
                    o,
                    (0, s.jsx)(q.o, { tooltip: c }),
                    Boolean(l) && (0, s.jsx)("div", { children: l }),
                  ],
                })
              : (0, s.jsx)("td", {}),
            (0, s.jsx)("td", {
              children: (0, s.jsx)("span", { children: lt(i.rtime_start, S) }),
            }),
            (0, s.jsx)("td", {
              children: (0, H.IH)(i.rtime_end - i.rtime_start),
            }),
            (0, s.jsxs)("td", {
              children: [
                d?.guest_count || 0,
                " / ",
                i.max_capacity,
                (0, s.jsx)("br", {}),
                (0, s.jsx)("div", {
                  className: J().CapacityBarMax,
                  children: (0, s.jsx)("div", {
                    className: (0, K.A)(
                      J().CapacityBarCurrent,
                      x ? J().Full : "",
                    ),
                    style: { width: _ },
                  }),
                }),
              ],
            }),
            (0, s.jsx)("td", {
              children:
                m.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: m.data?.filter((e) => e.session_id == i.id).length,
                }),
            }),
            (0, s.jsx)("td", {
              children:
                m.isSuccess &&
                (0, s.jsx)(s.Fragment, {
                  children: m.data
                    ?.filter((e) => e.session_id == i.id)
                    .reduce((e, t) => e + t.guests_registered - 1, 0),
                }),
            }),
            (0, s.jsxs)("td", {
              children: [
                (0, s.jsx)(F.$n, { onClick: p, children: "Details" }),
                (0, s.jsx)(u.tH, {
                  children: (0, s.jsx)(U.E, {
                    active: h,
                    children: (0, s.jsx)(ze, {
                      gid: t,
                      title: o,
                      group: n,
                      session: i,
                      hideModal: g,
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var ut = n(22837),
        ht = n(39777),
        pt = n(98019),
        gt = n(35380),
        mt = n(14336),
        ft = n(16021),
        _t = n(68276),
        xt = n(48479);
      function jt(e) {
        const { rgEvents: t } = T(),
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
          o = b.TS.PARTNER_BASE_URL + "meetsteam",
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
          className: J().EventList,
          children: [
            (0, s.jsx)(F.pd, {
              type: "text",
              value: r,
              onChange: (e) => a(e.currentTarget.value.trim()),
              label: "Filter",
            }),
            (0, s.jsxs)("div", {
              children: ["Total Survey Responses: ", (0, ae.D)(n?.length || 0)],
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
                  vt,
                  {
                    conf: e,
                    nInterestCount: c.get(e.id) ?? 0,
                    rgSurveyInterest: n,
                  },
                  e.id,
                ),
              ),
            (0, s.jsx)(Ct, { rgSurveyInterest: n }),
          ],
        });
      }
      function vt(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: r } = e;
        return (0, s.jsx)(xt.qx, {
          title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, ae.D)(n)}`,
          bStartMinimized: !0,
          children: (0, s.jsx)(yt, { conf: t, rgSurveyInterest: r }),
        });
      }
      function St(e) {
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
      function yt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, i.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          a = (0, pt.qh)(),
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
                    new I.b(n.steamid).GetAccountID(),
                      await Promise.all([
                        (0, D.qG)(e),
                        a.prefetchQuery({
                          queryKey: R(e),
                          queryFn: async () => N(e),
                        }),
                        (0, C.PQ)(a, e),
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
              ? (0, s.jsx)(wt, { conf: t, rgSurveyInterest: r })
              : (0, s.jsx)("div", { children: "No users with interest" })
            : (0, s.jsx)($.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : (0, s.jsx)($.t, {
              position: "center",
              string: `Loading ${c} of ${r.length}`,
            });
      }
      function wt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, y.jE)();
        return (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)(F.$n, {
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
                      s = new Pe.b2(t.steamid);
                    n.push("" + s.GetAccountID());
                    const i = (0, mt.z0)(s.GetAccountID()),
                      a = t.results.partner_id;
                    n.push("" + a);
                    const o = (0, C.N6)(a).map(
                      (e) => (0, pt.YA)(r, e)?.displayName || "" + e,
                    );
                    n.push(o.join("|"));
                    const c = t.results.email_override || "";
                    n.push("" + c),
                      n.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const l = Ee(s.GetAccountID(), a);
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
                          ? (0, ut.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const d = (0, D.Yd)(a);
                    n.push(d ? d.name : "");
                    const u = M(r, a);
                    u
                      ? (n.push("" + St(u.strGrossUSD)),
                        n.push("" + u.nBestAppID),
                        n.push(ft.A.Get().GetApp(u.nBestAppID)?.GetName()),
                        n.push("" + u.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const s = t.name.replace(" ", "_") + "_conference_interest.csv";
                ee.g.WriteCSVToFile(e, s);
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
                      Et,
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
      function Et(e) {
        const { partnerID: t, registration: n } = e;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: (0, s.jsx)(It, { ...e }) }),
            (0, s.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
            (0, s.jsx)(bt, { nPartnerID: t }),
            (0, s.jsx)("td", { children: n.attending.length }),
            (0, s.jsx)("td", {
              children:
                n.english_not_good && n.preferred_language
                  ? (0, ut.Lg)(n.preferred_language)
                  : "",
            }),
            (0, s.jsx)("td", { children: n.country_code }),
            (0, s.jsx)("td", { children: (0, W.TW)(n.submit_time) }),
          ],
        });
      }
      function It(e) {
        const { strsteamid: t, partnerID: n, registration: r } = e,
          i = (0, mt.hW)(t),
          a = we(new Pe.b2(t).GetAccountID(), n),
          o = a?.realname || i.data?.m_strPlayerName;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", { children: o }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("span", { children: r.email_override || a?.email }),
          ],
        });
      }
      function bt(e) {
        const { nPartnerID: t } = e,
          [n] = (0, D.UA)(t),
          r = (function (e) {
            const t = (0, S.I)({
              queryKey: R(e),
              queryFn: async () => N(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          i = (0, C.Z4)(t),
          a = (0, y.jE)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("td", { children: n ? n?.name + ` (${t})` : t }),
            (0, s.jsx)("td", {
              children: i
                ?.map((e) => (0, pt.YA)(a, e)?.displayName || "" + e)
                .join(","),
            }),
            (0, s.jsxs)("td", { children: ["$", r?.strGrossUSD] }),
            (0, s.jsx)("td", {
              children:
                r?.nBestAppID > 0
                  ? (0, s.jsx)(Dt, { appid: r?.nBestAppID })
                  : "N/A",
            }),
            (0, s.jsx)("td", { children: r?.nBestAppLongTermSalesRank }),
          ],
        });
      }
      function Dt(e) {
        const { appid: t } = e,
          n = (0, gt.$5)(t),
          { data: r } = (0, ht.J$)(n);
        return (0, s.jsx)(_t.Q, {
          id: n,
          children: (0, s.jsx)("span", { children: r?.name || t }),
        });
      }
      function Ct(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, y.jE)(),
          r =
            ((0, pt.qh)(),
            (0, i.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return (0, s.jsxs)(xt.qx, {
          title: `Alternative Suggestions (${r.length})`,
          bStartMinimized: !0,
          children: [
            (0, s.jsx)(F.$n, {
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
                      r = new Pe.b2(t.steamid);
                    s.push("" + r.GetAccountID());
                    const i = (0, mt.z0)(r.GetAccountID()),
                      a = t.results.partner_id;
                    s.push("" + a);
                    const o = t.results.email_override || "";
                    s.push("" + o),
                      s.push(i?.m_strPlayerName ? i.m_strPlayerName : "");
                    const c = Ee(r.GetAccountID(), a);
                    s.push(c ? c.realname : ""),
                      s.push("" + t.results.attending?.length),
                      s.push(t.results.country_code),
                      s.push(
                        t.results.preferred_language
                          ? (0, ut.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const l = (0, D.Yd)(a);
                    s.push(l ? l.name : "");
                    const d = M(n, a);
                    d
                      ? (s.push("" + St(d.strGrossUSD)),
                        s.push("" + d.nBestAppID),
                        s.push("" + d.nBestAppLongTermSalesRank))
                      : (s.push(""), s.push(""), s.push("")),
                      s.push(t.results.suggestion),
                      e.push(s);
                  });
                ee.g.WriteCSVToFile(e, "suggestsion.csv");
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
                    (0, s.jsx)(At, { survey: e }, "suggested" + e.steamid),
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function At(e) {
        const { survey: t } = e;
        new Pe.b2(t.steamid);
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", {
              children: (0, s.jsx)(It, {
                strsteamid: t.steamid,
                partnerID: t.results.partner_id,
                registration: t.results,
              }),
            }),
            (0, s.jsx)(bt, { nPartnerID: t.results.partner_id }),
            (0, s.jsx)("td", { children: t.results.suggestion.trim() }),
          ],
        });
      }
      const kt = i.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            Rt ||
              (Rt = new (fe())(
                async (e) => {
                  const t = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: b.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    s = await E().get(t, { params: n, withCredentials: !0 });
                  if (!s || 200 != s?.status || 1 != s?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, X.H))(s).strErrorMsg}`;
                  const r = new Map();
                  return (
                    s.data.users.forEach((e) => {
                      const t = new I.b(e.steamid);
                      r.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => r.get(e) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Rt;
          })().load(e),
      });
      function Tt(e, t) {
        return {
          queryKey: ["UserEmailAndLangs", t],
          queryFn: () => e.loadUserEmailAndLangs(t),
          enabled: !!t,
        };
      }
      let Rt;
      var Nt = n(73745),
        Mt = n(3049);
      function Bt(e) {
        const t = (0, P.a)(),
          n = (0, pt.qh)(),
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
                (0, s.jsxs)(F.$n, {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      a.forEach((t) => {
                        const n = (0, mt.z0)(t.accountid),
                          s =
                            ((r = t.accountid),
                            ye.L.getQueryData(["UserEmailAndLangs", r]));
                        var r;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          s?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString((0, Mt.J)()),
                        ]);
                      });
                    ee.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                  children: [
                    "CSV Export",
                    (0, s.jsx)(q.o, {
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
                        (0, s.jsx)(Lt, { organizer: e }, e.accountid),
                      ),
                    }),
                  ],
                }),
              ],
            })
          : (0, s.jsx)($.t, { string: (0, W.we)("#Loading"), size: "medium" });
      }
      function Lt(e) {
        const { organizer: t } = e,
          n = (0, i.useMemo)(
            () => I.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          r = (0, mt.hW)(n),
          a = (function (e) {
            const t = i.useContext(kt);
            return (0, S.I)(Tt(t, e));
          })(t.accountid),
          o = r.data?.m_strPlayerName || "";
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsxs)("td", { children: [o, " (", t.accountid, ")"] }),
            (0, s.jsx)("td", { children: a?.data?.email_address }),
            (0, s.jsx)("td", {
              children: (0, s.jsx)(Ot, {
                name: o,
                rgClanEventGIDs: t.clan_event_gids,
              }),
            }),
          ],
        });
      }
      function Ot(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [r, i, a] = (0, Nt.uD)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(F.$n, {
              onClick: i,
              children: ["See ", (0, ae.D)(n.length), " Events"],
            }),
            (0, s.jsx)(U.E, {
              active: r,
              children: (0, s.jsx)(z.o0, {
                bAlertDialog: !0,
                closeModal: a,
                strTitle: `${t}'s Events`,
                children: n.map((e) => (0, s.jsx)(Pt, { gid: e }, e)),
              }),
            }),
          ],
        });
      }
      function Pt(e) {
        const { gid: t } = e,
          n = (0, L.RR)(t);
        return n
          ? (0, s.jsxs)("a", {
              href: `${Y.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
              target: "_blank",
              children: [
                (0, s.jsx)("div", { children: n.GetNameWithFallback(0) }),
                (0, s.jsx)("img", { src: n.GetImageURL("capsule", 0) }),
              ],
            })
          : (0, s.jsxs)("div", { children: ["Loading ", t] });
      }
      function Ft(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(jt, {}) }),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(tt, {}) }),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(Bt, {}) }),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: (0, s.jsx)(u.tH, { children: (0, s.jsx)(Je, {}) }),
              onClick: t,
            },
          ];
        return (0, s.jsxs)("div", {
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
            (0, s.jsx)(g.V, { tabs: n }),
            (0, s.jsx)("div", { className: p().ClearThings }),
            (0, s.jsx)("br", {}),
          ],
        });
      }
      var Gt = n(65946),
        zt = n(79645),
        Ut = n(1909),
        $t = n(56330),
        qt = n(85761),
        Kt = n.n(qt);
      function Wt(e) {
        const t = (function () {
            const [e] = (0, i.useState)(() =>
              (0, b.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, b.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: r } = (0, mt.js)(b.iA.accountid),
          [a, o] = (0, i.useState)(!1),
          [c, l] = (0, i.useState)(!1),
          [d, u] = (0, i.useState)(!1),
          [h, p] = (0, i.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !r || r.m_bPlayerNamePending
            ? (0, s.jsx)($.t, {
                size: "medium",
                position: "center",
                string: (0, W.we)("#Loading"),
              })
            : (0, s.jsxs)("div", {
                className: (0, K.A)(f().AdminPageCtn, Kt().Ctn),
                children: [
                  (0, s.jsx)("div", {
                    className: f().PageTitle,
                    children: (0, W.we)("#MeetSteam_MainTitle"),
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
                                (0, W.PP)(
                                  "#MeetSteam_Intro",
                                  r.m_strPlayerName,
                                  (0, s.jsx)("br", {}),
                                ),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: f().IntroText,
                              children: (0, W.we)("#MeetSteam_Desc1"),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(Jt, {
                            oRegistration: h,
                            fnSetRegistration: p,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: f().SectionCtn,
                          children: (0, s.jsx)(Ht, {
                            oRegistration: h,
                            fnSetRegistration: p,
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: (0, K.A)(f().SectionCtn, f().ActionBar),
                          children: [
                            (0, s.jsx)(F.jn, {
                              onClick: async () => {
                                l(!0), o(!1), u(!1);
                                const e = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                  t = new FormData();
                                t.append("sessionid", b.TS.SESSIONID),
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
                              children: (0, W.we)("#Button_Submit"),
                            }),
                            c &&
                              (0, s.jsx)($.t, {
                                size: "medium",
                                position: "center",
                                string: (0, W.we)("#Saving"),
                              }),
                            d &&
                              (0, s.jsx)("div", {
                                children: (0, W.we)("#Button_Saved"),
                              }),
                            a &&
                              (0, s.jsx)("div", {
                                className: $t.ErrorStylesWithIcon,
                                children: (0, W.we)(
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
              className: Kt().Ctn,
              children: (0, W.we)("#MeetSteam_closed"),
            });
      }
      function Ht(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          { rgEvents: r, rgOldEvents: i, selectConference: a } = T();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("h1", {
              children: (0, W.we)("#MeetSteam_Events_Interest"),
            }),
            (0, s.jsx)("p", {
              children: (0, W.PP)(
                "#MeetSteam_Events_title",
                (0, b.Tc)("meet_steam_year", "application_config") || "2025",
              ),
            }),
            (0, s.jsxs)("p", {
              children: [
                (0, s.jsx)("span", {
                  className: Kt().Indicator,
                  children: "*",
                }),
                " ",
                (0, W.PP)("#MeetSteam_Events_desc"),
              ],
            }),
            Boolean(a) &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("p", {
                    children: (0, W.we)("#MeetSteam_ConferenceOrg"),
                  }),
                  (0, s.jsx)(Yt, { ...e, rgConference: [a] }),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("br", {}),
                  (0, s.jsx)("hr", {}),
                  (0, s.jsx)("h2", {
                    children: (0, W.we)("#MeetSteam_OtherConference"),
                  }),
                ],
              }),
            (0, s.jsx)(Yt, { ...e, rgConference: r }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(F.pd, {
              type: "text",
              value: t.suggestion || "",
              onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
              label: (0, W.we)("#MeetSteam_others"),
            }),
            Boolean(i?.length > 0) &&
              (0, s.jsx)(xt.qx, {
                bStartMinimized: !0,
                title: (0, W.we)("#MeetSteam_PastEvents", i.length),
                children: (0, s.jsx)(Yt, { ...e, rgConference: i }),
              }),
          ],
        });
      }
      function Yt(e) {
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
                              className: Kt().Indicator,
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
                        children: (0, s.jsx)(Vt, { ...e, conf: t }),
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
      function Vt(e) {
        const { oRegistration: t, fnSetRegistration: n, conf: r } = e;
        return (0, s.jsx)(F.Yh, {
          checked: t.attending?.includes(r.id),
          onChange: (e) => {
            let s = t.attending ? [...t.attending] : [];
            e && !s.includes(r.id)
              ? (s.push(r.id), n({ ...t, attending: s }))
              : !e &&
                s.includes(r.id) &&
                (s.splice(s.indexOf(r.id), 1), n({ ...t, attending: s }));
          },
          tooltip: (0, W.we)("#MeetSteam_attend_ttip"),
        });
      }
      function Jt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          r = (0, mt.js)(b.iA.accountid),
          a = (function (e) {
            const t = (function () {
                const [e] = (0, i.useState)(
                  () =>
                    (0, b.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, i.useState)(() =>
                  (0, b.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              s = we(b.iA.accountid, e != n ? e : null);
            return e == n ? t : s?.email;
          })(t?.partner_id),
          [o, c] = (0, i.useState)(() =>
            Boolean((t.email_override && t.email_override != a) || !a),
          ),
          [l, d, u] = (0, Gt.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return r.data
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h1", { children: (0, W.we)("#MeetSteam_You") }),
                (0, s.jsx)("p", { children: (0, W.we)("#MeetSteam_You_Desc") }),
                (0, s.jsx)(Qt, {
                  nPartnerID: t.partner_id,
                  label: (0, W.we)("#MeetSteam_You_Company"),
                  setPartnerID: (e) => n({ ...t, partner_id: e }),
                }),
                (0, s.jsxs)("div", {
                  className: Kt().EmailInfoRow,
                  children: [
                    (0, s.jsx)("div", {
                      className: Kt().EmailField,
                      children: (0, s.jsx)(F.pd, {
                        type: "string",
                        label: (0, W.we)("#MeetSteam_You_Email"),
                        disabled: !o,
                        value: t.email_override || a || "",
                        placeholder: (0, W.we)("#MeetSteam_You_EmailMissing"),
                        mustBeEmail: !0,
                        onChange: (e) =>
                          n({ ...t, email_override: e.currentTarget.value }),
                      }),
                    }),
                    !o &&
                      (0, s.jsx)(F.Yh, {
                        checked: o,
                        onChange: c,
                        label: (0, W.we)("#MeetSteam_You_Update"),
                        tooltip: (0, W.we)("#MeetSteam_You_Update_ttip"),
                      }),
                  ],
                }),
                (0, s.jsx)(F.JU, {
                  children: (0, W.we)("#MeetSteam_NeverMet"),
                }),
                (0, s.jsx)(F.Yh, {
                  label: (0, W.we)("#MeetSteam_NeverMetNo"),
                  checked: l,
                  onChange: (e) => n({ ...t, have_you_met_steam: !e }),
                }),
                (0, s.jsx)(F.JU, {
                  children: (0, W.we)("#MeetSteam_CapabableEnglish"),
                }),
                (0, s.jsxs)("div", {
                  className: Kt().RadioButtonCtn,
                  children: [
                    (0, s.jsx)(F.Od, {
                      className: Kt().RadioButtons,
                      checked: !d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: void 0,
                          preferred_language: void 0,
                        }),
                      label: (0, W.we)("#MeetSteam_CapabableEnglish_Yes"),
                    }),
                    (0, s.jsx)(F.Od, {
                      className: Kt().RadioButtons,
                      checked: d,
                      onChange: (e) =>
                        e &&
                        n({
                          ...t,
                          english_not_good: !0,
                          preferred_language: (0, ut.sf)(b.TS.LANGUAGE),
                        }),
                      label: (0, W.we)("#MeetSteam_CapabableEnglish_No"),
                    }),
                  ],
                }),
                d &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      (0, s.jsx)(F.JU, {
                        children: (0, W.we)("#MeetSteam_LanguagePref"),
                      }),
                      (0, s.jsx)(Ut.Ng, {
                        selectedLang: u,
                        bAllowUnsetOption: !1,
                        strTooltip: (0, W.we)("#MeetSteam_LanguagePref_ttip"),
                        fnOnLanguageChanged: (e) =>
                          n({ ...t, preferred_language: e }),
                      }),
                    ],
                  }),
              ],
            })
          : (0, s.jsx)($.t, {
              size: "medium",
              position: "center",
              string: (0, W.we)("#Loading"),
            });
      }
      function Qt(e) {
        const { nPartnerID: t, setPartnerID: n, label: r } = e,
          i = (0, zt.c)(b.iA.accountid);
        if (!i)
          return (0, s.jsx)($.t, {
            size: "small",
            position: "center",
            string: (0, W.we)("#Loading"),
          });
        if (1 == i.length) return null;
        const a = [];
        return (
          i.forEach((e) =>
            a.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          (0, s.jsx)(F.m, {
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
      var Zt = n(20587),
        Xt = n(13038),
        en = n.n(Xt);
      function tn(e) {
        const { data: t } = (0, mt.js)(b.iA.accountid),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, b.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          r = (function () {
            const [e] = (0, i.useState)(
              () => (0, b.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [a, c] = (0, i.useState)(() => r || ""),
          { surveyGID: l } = (0, o.g)(),
          [d, u] = (0, i.useState)(!1),
          [h, p] = (0, i.useState)(!1),
          [g, m] = (0, i.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? (0, s.jsx)($.t, {
              size: "medium",
              position: "center",
              string: (0, W.we)("#Loading"),
            })
          : (0, s.jsxs)("div", {
              className: (0, K.A)(f().AdminPageCtn, en().Ctn),
              children: [
                (0, s.jsx)("div", {
                  className: f().PageTitle,
                  children: (0, W.we)("#MeetSteam_PostSurvey_Title", n),
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
                            children: (0, W.we)(
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
                        className: (0, K.A)(f().SectionCtn, f().ActionBar),
                        children: [
                          (0, s.jsx)(F.jn, {
                            onClick: async () => {
                              p(!0), u(!1), m(!1);
                              const e = `${b.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${l}`,
                                t = new FormData();
                              t.append("gid", l),
                                t.append("sessionid", b.TS.SESSIONID);
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
                                  : m(!0);
                              } catch (e) {
                                console.error(
                                  "MeetSteamLanding failed caught",
                                  e,
                                );
                              }
                              p(!1);
                            },
                            children: (0, W.we)("#Button_Submit"),
                          }),
                          h &&
                            (0, s.jsx)($.t, {
                              size: "medium",
                              position: "center",
                              string: (0, W.we)("#Saving"),
                            }),
                          g &&
                            (0, s.jsx)("div", {
                              children: (0, W.we)("#Button_Saved"),
                            }),
                          d &&
                            (0, s.jsx)("div", {
                              className: $t.ErrorStylesWithIcon,
                              children: (0, W.we)(
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
      var nn = n(27144),
        sn = n(5695);
      function rn(e) {
        const t = (function () {
            const [e] = (0, i.useState)(
              () => (0, b.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, i.useState)(
              () => (0, b.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          r = (function () {
            const e = (function () {
              const [e] = (0, i.useState)(() => {
                const e = new Map(),
                  t =
                    (0, b.Tc)("registration_by_gid", "application_config") ||
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
                    const s = new I.b(e.steamid);
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
          { bIsLoading: c, events: l } = (0, L.PB)(t),
          [d, u] = (0, i.useMemo)(
            () => [
              n
                .map((e) => {
                  const t = new I.b(e.steamid);
                  if (r.has(t.GetAccountID())) {
                    const e = r.get(t.GetAccountID());
                    return JSON.parse(e[0].jsondata).partner_id;
                  }
                  return null;
                })
                .filter(Boolean),
              n.map((e) => new I.b(e.steamid).GetAccountID()),
            ],
            [r, n],
          ),
          h = (0, D.vh)(d),
          p = (0, nn.B3)(u);
        return !c && h && p
          ? (0, s.jsx)(on, {
              rgSurveyResults: n,
              mapAccountsToReg: r,
              meetSteamEvents: l,
            })
          : (0, s.jsx)($.t, { string: "Loading Event, Partner and User Info" });
      }
      const an = (0, he.FB)();
      function on(e) {
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
                  i = new I.b(t.steamid);
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
                  const r = (0, D.Yd)(s.partner_id);
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
                  const e = (0, nn.CF)(i.GetAccountID());
                  e && (a.name = e.persona_name);
                }
                s.push(a);
              }),
              s
            );
          }, [n, r, t]),
          o = (0, i.useMemo)(
            () => [
              an.accessor("name", { header: "Name", size: 150 }),
              an.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: sn.Gb,
              }),
              an.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: cn,
              }),
              an.accessor("accountid", { header: "Account ID", size: 150 }),
              an.accessor("email", { header: "Email", size: 150 }),
              an.accessor("partner_name", {
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
                  (0, s.jsx)(F.$n, {
                    id: "download-csv",
                    onClick: () =>
                      (0, Ke.K)(
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
                  (0, s.jsx)(pe.k, {
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
          : (0, s.jsx)($.t, { string: (0, W.we)("#Loading") });
      }
      function cn(e) {
        const t = e.getValue();
        return t?.length > 0
          ? (0, s.jsx)(sn.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const ln = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function dn(e) {
        return (
          (0, i.useEffect)(() => {
            Zt.O3.Init();
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
                    path: ln.AdminDashboard(),
                    component: Ft,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: ln.YearlySurvery(":year(\\d+)"),
                    component: Wt,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: ln.PostEventSurvey(":surveyGID(\\d+)"),
                    component: tn,
                  }),
                  (0, s.jsx)(o.qh, {
                    exact: !0,
                    path: ln.PostEventSurveyResults(":surveyGID(\\d+)"),
                    component: rn,
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
