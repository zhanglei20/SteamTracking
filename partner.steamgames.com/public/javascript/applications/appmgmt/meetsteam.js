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
      var n, r, a;
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
            a = n.IS_PAPA_WORKER || !1,
            s = {},
            i = 0,
            l = {};
          function o(e) {
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
                var t = v(e);
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
                    ((s = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, s))),
                    (e = [...e.split(t).slice(r)].join(t));
                }
                this.isFirstChunk &&
                  y(this._config.beforeFirstChunk) &&
                  void 0 !== (s = this._config.beforeFirstChunk(e)) &&
                  (e = s),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (r = this._partialLine + e);
                var s =
                  ((this._partialLine = ""),
                  this._handle.parse(r, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = s.meta.cursor),
                    this._finished ||
                      ((this._partialLine = r.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    s && s.data && (this._rowCount += s.data.length),
                    (r =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    a)
                  )
                    n.postMessage({
                      results: s,
                      workerId: l.WORKER_ID,
                      finished: r,
                    });
                  else if (y(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(s, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = s = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(s.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(s.errors)),
                      (this._completeResults.meta = s.meta)),
                    this._completed ||
                      !r ||
                      !y(this._config.complete) ||
                      (s && s.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    r || (s && s.meta.paused) || this._nextChunk(),
                    s
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                y(this._config.error)
                  ? this._config.error(e)
                  : a &&
                    this._config.error &&
                    n.postMessage({
                      workerId: l.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function c(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = l.RemoteChunkSize),
              o.call(this, e),
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
                      ((t.onload = S(this._chunkLoaded, this)),
                      (t.onerror = S(this._chunkError, this))),
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
                  var a;
                  this._config.chunkSize &&
                    ((a = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + a,
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
            (e = e || {}).chunkSize || (e.chunkSize = l.LocalChunkSize),
              o.call(this, e);
            var t,
              n,
              r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = S(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = S(this._chunkError, this)))
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
                  a =
                    (this._config.chunkSize &&
                      ((a = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, a))),
                    t.readAsText(e, this._config.encoding));
                r || this._chunkLoaded({ target: { result: a } });
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
          function m(e) {
            var t;
            o.call(this, (e = e || {})),
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
            o.call(this, (e = e || {}));
            var t = [],
              n = !0,
              r = !1;
            (this.pause = function () {
              o.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                o.prototype.resume.apply(this, arguments), this._input.resume();
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
              (this._streamData = S(function (e) {
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
              (this._streamError = S(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = S(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = S(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function h(e) {
            var t,
              n,
              r,
              a,
              s = Math.pow(2, 53),
              i = -s,
              o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              c =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              u = this,
              m = 0,
              d = 0,
              h = !1,
              E = !1,
              f = [],
              _ = { data: [], errors: [], meta: {} };
            function S(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function w() {
              if (
                (_ &&
                  r &&
                  (b(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      l.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (_.data = _.data.filter(function (e) {
                    return !S(e);
                  })),
                I())
              ) {
                if (_)
                  if (Array.isArray(_.data[0])) {
                    for (var t = 0; I() && t < _.data.length; t++)
                      _.data[t].forEach(n);
                    _.data.splice(0, 1);
                  } else _.data.forEach(n);
                function n(t, n) {
                  y(e.transformHeader) && (t = e.transformHeader(t, n)),
                    f.push(t);
                }
              }
              function a(t, n) {
                for (var r = e.header ? {} : [], a = 0; a < t.length; a++) {
                  var l = a,
                    u = t[a];
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
                              o.test(e) &&
                              ((e = parseFloat(e)), i < e && e < s)
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
                    (l = e.header
                      ? a >= f.length
                        ? "__parsed_extra"
                        : f[a]
                      : l),
                    (u = e.transform ? e.transform(u, l) : u),
                  )),
                    "__parsed_extra" === l
                      ? ((r[l] = r[l] || []), r[l].push(u))
                      : (r[l] = u);
                }
                return (
                  e.header &&
                    (a > f.length
                      ? b(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            f.length +
                            " fields but parsed " +
                            a,
                          d + n,
                        )
                      : a < f.length &&
                        b(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            f.length +
                            " fields but parsed " +
                            a,
                          d + n,
                        )),
                  r
                );
              }
              var u;
              _ &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((u = 1),
                !_.data.length || Array.isArray(_.data[0])
                  ? ((_.data = _.data.map(a)), (u = _.data.length))
                  : (_.data = a(_.data, 0)),
                e.header && _.meta && (_.meta.fields = f),
                (d += u));
            }
            function I() {
              return e.header && 0 === f.length;
            }
            function b(e, t, n, r) {
              (e = { type: e, code: t, message: n }),
                void 0 !== r && (e.row = r),
                _.errors.push(e);
            }
            y(e.step) &&
              ((a = e.step),
              (e.step = function (t) {
                (_ = t),
                  I()
                    ? w()
                    : (w(),
                      0 !== _.data.length &&
                        ((m += t.data.length),
                        e.preview && m > e.preview
                          ? n.abort()
                          : ((_.data = _.data[0]), a(_, u))));
              })),
              (this.parse = function (a, s, i) {
                var o = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(a, o)),
                  (r = !1),
                  e.delimiter
                    ? y(e.delimiter) &&
                      ((e.delimiter = e.delimiter(a)),
                      (_.meta.delimiter = e.delimiter))
                    : ((o = ((t, n, r, a, s) => {
                        var i, o, c, u;
                        s = s || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          l.RECORD_SEP,
                          l.UNIT_SEP,
                        ];
                        for (var m = 0; m < s.length; m++) {
                          for (
                            var d,
                              h = s[m],
                              p = 0,
                              E = 0,
                              f = 0,
                              _ =
                                ((c = void 0),
                                new g({
                                  comments: a,
                                  delimiter: h,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              v = 0;
                            v < _.data.length;
                            v++
                          )
                            r && S(_.data[v])
                              ? f++
                              : ((E += d = _.data[v].length),
                                void 0 === c
                                  ? (c = d)
                                  : 0 < d && ((p += Math.abs(d - c)), (c = d)));
                          0 < _.data.length && (E /= _.data.length - f),
                            (void 0 === o || p <= o) &&
                              (void 0 === u || u < E) &&
                              1.99 < E &&
                              ((o = p), (i = h), (u = E));
                        }
                        return {
                          successful: !!(e.delimiter = i),
                          bestDelimiter: i,
                        };
                      })(
                        a,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = o.bestDelimiter)
                        : ((r = !0), (e.delimiter = l.DefaultDelimiter)),
                      (_.meta.delimiter = e.delimiter)),
                  (o = v(e)),
                  e.preview && e.header && o.preview++,
                  (t = a),
                  (n = new g(o)),
                  (_ = n.parse(t, s, i)),
                  w(),
                  h ? { meta: { paused: !0 } } : _ || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return h;
              }),
              (this.pause = function () {
                (h = !0),
                  n.abort(),
                  (t = y(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                u.streamer._halted
                  ? ((h = !1), u.streamer.parseChunk(t, !0))
                  : setTimeout(u.resume, 3);
              }),
              (this.aborted = function () {
                return E;
              }),
              (this.abort = function () {
                (E = !0),
                  n.abort(),
                  (_.meta.aborted = !0),
                  y(e.complete) && e.complete(_),
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
                for (var r = 0, a = 0; a < n.length; a++)
                  "\n" === n[a][0] && r++;
                return r >= n.length / 2 ? "\r\n" : "\r";
              });
          }
          function p(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function g(e) {
            var t = (e = e || {}).delimiter,
              n = e.newline,
              r = e.comments,
              a = e.step,
              s = e.preview,
              i = e.fastMode,
              o = null,
              c = !1,
              u = null == e.quoteChar ? '"' : e.quoteChar,
              m = u;
            if (
              (void 0 !== e.escapeChar && (m = e.escapeChar),
              ("string" != typeof t || -1 < l.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              r === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === r
              ? (r = "#")
              : ("string" != typeof r || -1 < l.BAD_DELIMITERS.indexOf(r)) &&
                (r = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var d = 0,
              h = !1;
            (this.parse = function (l, g, E) {
              if ("string" != typeof l)
                throw new Error("Input must be a string");
              var f = l.length,
                _ = t.length,
                v = n.length,
                S = r.length,
                w = y(a),
                I = [],
                b = [],
                D = [],
                C = (d = 0);
              if (!l) return x();
              if (i || (!1 !== i && -1 === l.indexOf(u))) {
                for (var A = l.split(n), k = 0; k < A.length; k++) {
                  if (((D = A[k]), (d += D.length), k !== A.length - 1))
                    d += n.length;
                  else if (E) return x();
                  if (!r || D.substring(0, S) !== r) {
                    if (w) {
                      if (((I = []), L(D.split(t)), G(), h)) return x();
                    } else L(D.split(t));
                    if (s && s <= k) return (I = I.slice(0, s)), x(!0);
                  }
                }
                return x();
              }
              for (
                var T = l.indexOf(t, d),
                  R = l.indexOf(n, d),
                  N = new RegExp(p(m) + p(u), "g"),
                  M = l.indexOf(u, d);
                ;
              )
                if (l[d] === u)
                  for (M = d, d++; ; ) {
                    if (-1 === (M = l.indexOf(u, M + 1)))
                      return (
                        E ||
                          b.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: I.length,
                            index: d,
                          }),
                        P()
                      );
                    if (M === f - 1) return P(l.substring(d, M).replace(N, u));
                    if (u === m && l[M + 1] === m) M++;
                    else if (u === m || 0 === M || l[M - 1] !== m) {
                      -1 !== T && T < M + 1 && (T = l.indexOf(t, M + 1));
                      var B = O(
                        -1 ===
                          (R = -1 !== R && R < M + 1 ? l.indexOf(n, M + 1) : R)
                          ? T
                          : Math.min(T, R),
                      );
                      if (l.substr(M + 1 + B, _) === t) {
                        D.push(l.substring(d, M).replace(N, u)),
                          l[(d = M + 1 + B + _)] !== u && (M = l.indexOf(u, d)),
                          (T = l.indexOf(t, d)),
                          (R = l.indexOf(n, d));
                        break;
                      }
                      if (
                        ((B = O(R)),
                        l.substring(M + 1 + B, M + 1 + B + v) === n)
                      ) {
                        if (
                          (D.push(l.substring(d, M).replace(N, u)),
                          F(M + 1 + B + v),
                          (T = l.indexOf(t, d)),
                          (M = l.indexOf(u, d)),
                          w && (G(), h))
                        )
                          return x();
                        if (s && I.length >= s) return x(!0);
                        break;
                      }
                      b.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: I.length,
                        index: d,
                      }),
                        M++;
                    }
                  }
                else if (r && 0 === D.length && l.substring(d, d + S) === r) {
                  if (-1 === R) return x();
                  (d = R + v), (R = l.indexOf(n, d)), (T = l.indexOf(t, d));
                } else if (-1 !== T && (T < R || -1 === R))
                  D.push(l.substring(d, T)), (d = T + _), (T = l.indexOf(t, d));
                else {
                  if (-1 === R) break;
                  if ((D.push(l.substring(d, R)), F(R + v), w && (G(), h)))
                    return x();
                  if (s && I.length >= s) return x(!0);
                }
              return P();
              function L(e) {
                I.push(e), (C = d);
              }
              function O(e) {
                var t = 0;
                return -1 !== e &&
                  (e = l.substring(M + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function P(e) {
                return (
                  E ||
                    (void 0 === e && (e = l.substring(d)),
                    D.push(e),
                    (d = f),
                    L(D),
                    w && G()),
                  x()
                );
              }
              function F(e) {
                (d = e), L(D), (D = []), (R = l.indexOf(n, d));
              }
              function x(r) {
                if (e.header && !g && I.length && !c) {
                  var a = I[0],
                    s = Object.create(null),
                    i = new Set(a);
                  let t = !1;
                  for (let n = 0; n < a.length; n++) {
                    let r = a[n];
                    if (
                      s[
                        (r = y(e.transformHeader) ? e.transformHeader(r, n) : r)
                      ]
                    ) {
                      let e,
                        l = s[r];
                      for (; (e = r + "_" + l), l++, i.has(e); );
                      i.add(e),
                        (a[n] = e),
                        s[r]++,
                        (t = !0),
                        ((o = null === o ? {} : o)[e] = r);
                    } else (s[r] = 1), (a[n] = r);
                    i.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (c = !0);
                }
                return {
                  data: I,
                  errors: b,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: h,
                    truncated: !!r,
                    cursor: C + (g || 0),
                    renamedHeaders: o,
                  },
                };
              }
              function G() {
                a(x()), (I = []), (b = []);
              }
            }),
              (this.abort = function () {
                h = !0;
              }),
              (this.getCharIndex = function () {
                return d;
              });
          }
          function E(e) {
            var t = e.data,
              n = s[t.workerId],
              r = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var a = {
                abort: function () {
                  (r = !0),
                    f(t.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: _,
                resume: _,
              };
              if (y(n.userStep)) {
                for (
                  var i = 0;
                  i < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[i],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    a,
                  ),
                  !r);
                  i++
                );
                delete t.results;
              } else
                y(n.userChunk) &&
                  (n.userChunk(t.results, a, t.file), delete t.results);
            }
            t.finished && !r && f(t.workerId, t.results);
          }
          function f(e, t) {
            var n = s[e];
            y(n.userComplete) && n.userComplete(t), n.terminate(), delete s[e];
          }
          function _() {
            throw new Error("Not implemented.");
          }
          function v(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = v(e[t]);
            return n;
          }
          function S(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function y(e) {
            return "function" == typeof e;
          }
          return (
            (l.parse = function (t, r) {
              var a = (r = r || {}).dynamicTyping || !1;
              if (
                (y(a) && ((r.dynamicTypingFunction = a), (a = {})),
                (r.dynamicTyping = a),
                (r.transform = !!y(r.transform) && r.transform),
                !r.worker || !l.WORKERS_SUPPORTED)
              )
                return (
                  (a = null),
                  l.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (a = new (r.download ? c : m)(r)))
                    : !0 === t.readable && y(t.read) && y(t.on)
                      ? (a = new d(r))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (a = new u(r)),
                  a.stream(t)
                );
              ((a = (() => {
                var t;
                return (
                  !!l.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      r = e.toString();
                    return (
                      l.BLOB_URL ||
                      (l.BLOB_URL = t.createObjectURL(
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
                  ((t = new n.Worker(t)).onmessage = E),
                  (t.id = i++),
                  (s[t.id] = t))
                );
              })()).userStep = r.step),
                (a.userChunk = r.chunk),
                (a.userComplete = r.complete),
                (a.userError = r.error),
                (r.step = y(r.step)),
                (r.chunk = y(r.chunk)),
                (r.complete = y(r.complete)),
                (r.error = y(r.error)),
                delete r.worker,
                a.postMessage({ input: t, config: r, workerId: a.id });
            }),
            (l.unparse = function (e, t) {
              var n = !1,
                r = !0,
                a = ",",
                s = "\r\n",
                i = '"',
                o = i + i,
                c = !1,
                u = null,
                m = !1,
                d =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          l.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (a = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (c = t.skipEmptyLines),
                        "string" == typeof t.newline && (s = t.newline),
                        "string" == typeof t.quoteChar && (i = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        u = t.columns;
                      }
                      void 0 !== t.escapeChar && (o = t.escapeChar + i),
                        t.escapeFormulae instanceof RegExp
                          ? (m = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (m = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(i), "g"));
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
                var i = "",
                  l =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  o = !Array.isArray(t[0]);
                if (l && r) {
                  for (var c = 0; c < e.length; c++)
                    0 < c && (i += a), (i += g(e[c], c));
                  0 < t.length && (i += s);
                }
                for (var u = 0; u < t.length; u++) {
                  var m = (l ? e : t[u]).length,
                    d = !1,
                    h = l ? 0 === Object.keys(t[u]).length : 0 === t[u].length;
                  if (
                    (n &&
                      !l &&
                      (d =
                        "greedy" === n
                          ? "" === t[u].join("").trim()
                          : 1 === t[u].length && 0 === t[u][0].length),
                    "greedy" === n && l)
                  ) {
                    for (var p = [], E = 0; E < m; E++) {
                      var f = o ? e[E] : E;
                      p.push(t[u][f]);
                    }
                    d = "" === p.join("").trim();
                  }
                  if (!d) {
                    for (var _ = 0; _ < m; _++) {
                      0 < _ && !h && (i += a);
                      var v = l && o ? e[_] : _;
                      i += g(t[u][v], _);
                    }
                    u < t.length - 1 && (!n || (0 < m && !h)) && (i += s);
                  }
                }
                return i;
              }
              function g(e, t) {
                var r, s;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((s = !1),
                      m &&
                        "string" == typeof e &&
                        m.test(e) &&
                        ((e = "'" + e), (s = !0)),
                      (r = e.toString().replace(d, o)),
                      (s =
                        s ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(r, l.BAD_DELIMITERS) ||
                        -1 < r.indexOf(a) ||
                        " " === r.charAt(0) ||
                        " " === r.charAt(r.length - 1))
                        ? i + r + i
                        : r);
              }
            }),
            (l.RECORD_SEP = String.fromCharCode(30)),
            (l.UNIT_SEP = String.fromCharCode(31)),
            (l.BYTE_ORDER_MARK = "\ufeff"),
            (l.BAD_DELIMITERS = ["\r", "\n", '"', l.BYTE_ORDER_MARK]),
            (l.WORKERS_SUPPORTED = !r && !!n.Worker),
            (l.NODE_STREAM_INPUT = 1),
            (l.LocalChunkSize = 10485760),
            (l.RemoteChunkSize = 5242880),
            (l.DefaultDelimiter = ","),
            (l.Parser = g),
            (l.ParserHandle = h),
            (l.NetworkStreamer = c),
            (l.FileStreamer = u),
            (l.StringStreamer = m),
            (l.ReadableStreamStreamer = d),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var r = e.config || {},
                  a = [];
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
                    for (var s = 0; s < this.files.length; s++)
                      a.push({
                        file: this.files[s],
                        inputElem: this,
                        instanceConfig: t.extend({}, r),
                      });
                  }),
                  s(),
                  this
                );
                function s() {
                  if (0 === a.length) y(e.complete) && e.complete();
                  else {
                    var n,
                      r,
                      s,
                      o,
                      c = a[0];
                    if (y(e.before)) {
                      var u = e.before(c.file, c.inputElem);
                      if ("object" == typeof u) {
                        if ("abort" === u.action)
                          return (
                            (n = "AbortError"),
                            (r = c.file),
                            (s = c.inputElem),
                            (o = u.reason),
                            void (y(e.error) && e.error({ name: n }, r, s, o))
                          );
                        if ("skip" === u.action) return void i();
                        "object" == typeof u.config &&
                          (c.instanceConfig = t.extend(
                            c.instanceConfig,
                            u.config,
                          ));
                      } else if ("skip" === u) return void i();
                    }
                    var m = c.instanceConfig.complete;
                    (c.instanceConfig.complete = function (e) {
                      y(m) && m(e, c.file, c.inputElem), i();
                    }),
                      l.parse(c.file, c.instanceConfig);
                  }
                }
                function i() {
                  a.splice(0, 1), s();
                }
              }),
            a &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === l.WORKER_ID && e && (l.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: l.WORKER_ID,
                        results: l.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = l.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: l.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((c.prototype = Object.create(o.prototype)).constructor = c),
            ((u.prototype = Object.create(o.prototype)).constructor = u),
            ((m.prototype = Object.create(m.prototype)).constructor = m),
            ((d.prototype = Object.create(o.prototype)).constructor = d),
            l
          );
        }),
        void 0 === (a = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = a);
    },
    36637: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MeetSteamRoutes: () => ln, default: () => on });
      var r = n(43527),
        a = n(90626),
        s = n(17083),
        i = n(92757),
        l = n(11577),
        o = n(14932),
        c = n(97058),
        u = n(84811),
        m = n(95695),
        d = n.n(m),
        h = n(38135),
        p = n(45737),
        g = n.n(p),
        E = n(24484),
        f = n(56545),
        _ = n(85737),
        v = n(64753),
        S = n(20194),
        y = n(75233),
        w = n(41735),
        I = n.n(w),
        b = n(17720),
        D = n(78327),
        C = n(32179),
        A = n(21711),
        k = n(44165),
        T = n(95034);
      function R() {
        const [e] = a.useState(() =>
            (0, D.Tc)("events_list", "application_config"),
          ),
          [t] = (0, T.QD)("filter"),
          n = (0, k.f1)(),
          [r, s] = a.useMemo(() => {
            let t = new Array(),
              r = new Array();
            return (
              e.forEach((e) => {
                e.endtime &&
                (function (e, t = !1) {
                  const [n, r = "00:00:00"] = e.trim().split(/\s+/),
                    [a, s, i] = n.split("-").map(Number),
                    [l, o, c] = r.split(":").map(Number),
                    u = t
                      ? Date.UTC(a, s - 1, i, l, o, c ?? 0)
                      : new Date(a, s - 1, i, l, o, c ?? 0).getTime();
                  return Math.floor(u / 1e3);
                })(e.endtime) < n
                  ? r.push(e)
                  : t.push(e);
              }),
              [r, t]
            );
          }, [e, n]);
        return {
          rgOldEvents: r,
          rgEvents: s,
          selectConference: (0, a.useMemo)(
            () => e.find((e) => e.id === t?.toLocaleLowerCase()),
            [e, t],
          ),
        };
      }
      function N(e) {
        return ["usePartnerRevAndBestAppSlow", e];
      }
      async function M(e) {
        const t = `${D.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
          n = { sessionid: D.TS.SESSIONID, partnerid: e },
          r = await I().get(t, { params: n });
        return r?.data?.data;
      }
      function B(e, t) {
        return e.getQueryData(["usePartnerRevAndBestAppSlow", t]);
      }
      function L(e, t, n) {
        return (0, S.I)({
          queryKey: ["useMeetSteamGetAllRegistration", t, n],
          queryFn: async () => {
            const n = f.w.Init(_.q3);
            n.Body().set_clan_event_gid(t);
            const r = await _.ZK.GetRegistrations(e, n);
            return r.BSuccess()
              ? r
                  .Body()
                  .registrations()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: null != t && 0 != n,
        });
      }
      var O = n(38390),
        P = n(50304),
        F = n(96001),
        x = n(16676),
        G = n(26161),
        z = n(78395),
        j = n(21869),
        U = n(22797),
        $ = n(26408),
        q = n(52038),
        K = n(61859),
        W = n(91675),
        H = n(30470),
        Y = n(30565),
        V = n.n(Y),
        J = n(34283),
        Q = n.n(J),
        Z = n(68797),
        X = n(9161),
        ee = n(65689),
        te = n(81393),
        ne = n(96059);
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
          const e = (0, E.Tc)("store_feature_token", "application_config");
          (0, te.wT)(Boolean(e), "require store_feature_token"),
            (this.m_steamInterface = new ne.D(H.TS.WEBAPI_BASE_URL, e));
        }
      }
      function ae() {
        return re.Get().GetSaleFeatureTransport().GetServiceTransport();
      }
      var se = n(6083);
      function ie(e) {
        const { hideModal: t, gid: n } = e,
          [r, s] = (0, a.useState)(!1),
          [i, l] = (0, a.useState)(null),
          [o, c] = a.useState(0),
          [u, d] = a.useState(""),
          [h, p] = a.useState(""),
          [g, E] = a.useState(!1),
          f = ae(),
          _ = (0, S.I)({
            queryKey: ["MeetSteamInviteDirectDialog", n, o],
            queryFn: async () => {
              const e = {
                  steamid: b.b.InitFromAccountID(o).ConvertTo64BitString(),
                  gid: n,
                  type: 6,
                },
                t = await ee.Nl.GetUserActionData(f, e);
              return t.BSuccess() && t.Body().jsondata()
                ? JSON.parse(t.Body().jsondata())
                : {};
            },
            enabled: Boolean(n) && o > 0,
          });
        a.useEffect(() => {
          _.isLoading ||
            (_.isSuccess &&
              (d(_.data.partner_id ? _.data.partner_id.toString() : ""),
              p(_.data.email_override ?? ""),
              E(_.data.allow_registration_if_full ?? !1)));
        }, [_.isLoading, _.isSuccess, _.data]);
        return a.createElement(
          z.o0,
          {
            strTitle: "Invite User",
            bOKDisabled: !o || r || _.isLoading,
            onOK: async () => {
              s(!0);
              const e = Number.parseInt(u) > 0 ? Number.parseInt(u) : 0,
                r = await ue(
                  n,
                  [
                    {
                      nAccountID: o,
                      nPartnerID: e,
                      strEmailOverride: h,
                      bAllowRegistrationIfFull: g,
                    },
                  ],
                  !0,
                ),
                a = r && 1 == r.success;
              a || l("We hit error during invite, check console: " + r?.msg),
                s(!1),
                _.refetch(),
                a && t();
            },
            onCancel: t,
          },
          Boolean(i) &&
            a.createElement("div", { className: m.ErrorStylesWithIcon }, i),
          !r &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(x.pd, {
                type: "number",
                label: "Account ID",
                onChange: (e) => c(Number.parseInt(e.currentTarget.value)),
                value: o,
              }),
              0 != o &&
                !_.isLoading &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(x.pd, {
                    type: "number",
                    label: "Partner ID (optional)",
                    onChange: (e) => d(e.currentTarget.value),
                    value: u,
                  }),
                  a.createElement(x.pd, {
                    type: "text",
                    label: "Email override (optional)",
                    onChange: (e) => p(e.currentTarget.value.trim()),
                    value: h,
                  }),
                  a.createElement(x.Yh, {
                    controlled: !0,
                    checked: g,
                    onChange: E,
                    label: "Allow if registration is full",
                  }),
                ),
            ),
          r &&
            a.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, K.we)("#Saving"),
            }),
          _.isLoading &&
            a.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, K.we)("#Loading"),
            }),
        );
      }
      function le(e) {
        const { hideModal: t, gid: n } = e,
          [r, s] = (0, a.useState)(null),
          [i, l] = (0, a.useState)(!1),
          [o, c] = (0, a.useState)(null),
          [u, d] = (0, a.useState)(null),
          [h, p] = (0, a.useState)(null);
        return a.createElement(
          z.o0,
          {
            strTitle: "Invite Users",
            bOKDisabled: !r || 0 == r.length || null != u,
            strCancelButtonText: null !== u ? "Close" : "Cancel",
            onOK: async () => {
              l(!0);
              const e = await ue(n, r, !1);
              1 == e?.success
                ? (d(e.rgInvitedAccounts.length), p(e.rgSkippedAccounts.length))
                : c("We hit error during invite, check console: " + e?.msg),
                l(!1);
            },
            onCancel: () => {
              d(null), p(null), l(!1), s(null), t();
            },
          },
          Boolean(o) &&
            a.createElement("div", { className: m.ErrorStylesWithIcon }, o),
          null != u &&
            a.createElement(
              "div",
              null,
              "Invited ",
              (0, se.D)(u),
              " accounts, skipped previously invited ",
              (0, se.D)(h),
            ),
          i &&
            a.createElement(U.t, {
              size: "small",
              position: "center",
              string: (0, K.we)("#Saving"),
            }),
          null == r
            ? a.createElement(ce, { setInvites: s })
            : a.createElement(oe, { rgInvites: r }),
        );
      }
      function oe(e) {
        const { rgInvites: t } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("div", null, "Total Invites Parsed: ", t.length, " "),
          a.createElement(
            "table",
            null,
            a.createElement(
              "thead",
              null,
              a.createElement(
                "tr",
                null,
                a.createElement("th", null, "AccountID"),
                a.createElement("th", null, "PartnerID"),
                a.createElement("th", null, "Email Override"),
              ),
            ),
            a.createElement(
              "tbody",
              null,
              t.map((e, t) =>
                a.createElement(
                  "tr",
                  { key: "invite" + e.nAccountID + "_" + t },
                  a.createElement("td", null, e.nAccountID),
                  a.createElement("td", null, e.nPartnerID),
                  a.createElement("td", null, e.strEmailOverride),
                ),
              ),
            ),
          ),
        );
      }
      function ce(e) {
        const { setInvites: t } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            null,
            "Format for CSV File, please use the template below:",
          ),
          a.createElement(
            "ul",
            null,
            a.createElement(
              "li",
              null,
              a.createElement("b", null, "nAccountID"),
              " - required, 32-bit integer value, not the 64-bit steam id",
            ),
            a.createElement(
              "li",
              null,
              a.createElement("b", null, "nPartnerID"),
              " - (preferred for biz contact)",
            ),
            a.createElement(
              "li",
              null,
              a.createElement("b", null, "strOverrideEmail"),
              " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
            ),
          ),
          a.createElement("br", null),
          a.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation();
                const t = [];
                t.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                  t.push(["388445686", "1", "adils@valvesoftware.com"]);
                X.g.WriteCSVToFile(t, "invite_template.csv");
              },
            },
            "Download Template Example",
          ),
          a.createElement("br", null),
          a.createElement("br", null),
          a.createElement(
            x.$n,
            null,
            a.createElement(
              "label",
              {
                className: Q().ImportButtonLabel,
                htmlFor: "import-discount-input",
              },
              "Choose CSV File",
              a.createElement("input", {
                id: "import-discount-input",
                type: "file",
                style: { display: "none" },
                onChange: async (e) => {
                  if (e.target.files.length >= 1) {
                    const n = e.target.files[0],
                      r = await X.g.ParseCSVFile(n);
                    if (r?.data) {
                      const e = new Array();
                      r.data.forEach((t) => {
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
            ),
          ),
        );
      }
      async function ue(e, t, n) {
        const r = t.map((e) => e.nAccountID).join(","),
          a = t.map((e) => e.nPartnerID).join(","),
          s = t.map((e) => e.strEmailOverride).join(","),
          i = t.map((e) => (e.bAllowRegistrationIfFull ? "1" : "0")).join(",");
        let l = new FormData();
        l.append("sessionid", H.TS.SESSIONID),
          l.append("gid", e),
          l.append("accounts", r),
          l.append("partnerids", a),
          l.append("emailoverride", s),
          l.append("allowregistrationiffull", i),
          l.append("forceupdate", n ? "1" : "0");
        const o = `${H.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
        try {
          const e = await I().post(o, l, { withCredentials: !0 });
          if (1 != e?.data?.success) {
            let t = (0, Z.H)(e);
            console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
          }
          return e?.data;
        } catch (e) {
          let t = (0, Z.H)(e);
          console.error("DisplayPartnerEventRow error: " + t.strErrorMsg, t);
        }
        return null;
      }
      var me = n(16666),
        de = n(66051),
        he = n(54806),
        pe = n(58632),
        ge = n.n(pe);
      function Ee(e) {
        const t = ae(),
          n = a.useContext(_e),
          r = (0, S.I)(ve(n, t, e));
        return r.isLoading ? null : r.data;
      }
      function fe(e) {
        const t = ae(),
          n = a.useContext(_e);
        return (0, he.E)({ queries: e.map((e) => ve(n, t, e)) });
      }
      const _e = a.createContext({
        loadMeetSteamAllRegistration: async (e, t) =>
          await (function (e) {
            Se ||
              (Se = new (ge())(
                async (t) => {
                  const n = f.w.Init(ee.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(6);
                  const r = await ee.Nl.GetMultipleUserActionData(e, n);
                  if (!r.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${r.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    r
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
                            a.has(n) ? a.get(n).push(t) : a.set(n, [t]), [t]
                          );
                        } catch (t) {
                          throw `Failed to parse GetMultipleUserActionData with details: ${e.steamid()}`;
                        }
                      }),
                    t.map((e) => a.get(e) ?? null)
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
        const n = (0, F.a)(),
          r = a.useContext(be),
          s = (0, S.I)(De(r, n, e, t));
        return s.isLoading ? null : s.data;
      }
      function Ie(e, t) {
        return ye.L.getQueryData(["PartnerEmailAndName", e, t]);
      }
      const be = a.createContext({
        loadPartnerEmailAndName: async (e, t, n) =>
          await (function (e) {
            Ce ||
              (Ce = new (ge())(
                async (t) => {
                  const n = f.w.Init(_.g9);
                  n.Body().set_accountids(t.map((e) => e.accountID)),
                    n.Body().set_partnerids(t.map((e) => e.partnerID));
                  const r = await _.ZK.GetBatchPartnerEmailAndName(e, n);
                  if (!r.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${r.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    r
                      .Body()
                      .info()
                      .forEach((e) => {
                        a.set(
                          e.accountid() + "_" + e.partnerid(),
                          e.toObject(),
                        );
                      }),
                    t.map((e) => a.get(e.accountID + "_" + e.partnerID) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              ));
            return Ce;
          })(e).load({ accountID: t, partnerID: n }),
      });
      function De(e, t, n, r) {
        return {
          queryKey: ["PartnerEmailAndName", n, r],
          queryFn: () => e.loadPartnerEmailAndName(t, n, r),
          enabled: !!n || !!r,
        };
      }
      let Ce;
      function Ae(e) {
        const { rgEventGIDs: t } = e,
          [n, r, s] = (0, v.uD)(),
          [i, l] = (0, a.useState)(null);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("span", null, " | "),
          a.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
            },
            "Analyse Top Partner Coverage",
          ),
          a.createElement(
            j.E,
            { active: n },
            a.createElement(
              u.tH,
              null,
              a.createElement(
                z.o0,
                {
                  closeModal: s,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == i)
                  ? a.createElement(Be, { rgEventGIDs: t, fnSelectedEvents: l })
                  : a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(Me, { rgGidMeetSteamEvents: i }),
                      a.createElement(
                        x.$n,
                        { onClick: () => l(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const ke = (0, me.FB)();
      function Te(e) {
        return (
          (e = e?.filter(
            (t, n) =>
              0 == n || !e.slice(0, n).some((e) => e.accountid == t.accountid),
          )),
          e
            ?.map(
              (e) =>
                e.name ||
                Ie(e.accountid, e.partner_id)?.realname ||
                e.accountid,
            )
            .join(",") || ""
        );
      }
      function Re(e) {
        return Te(e.cell.getValue());
      }
      function Ne(e, t) {
        const n = fe(t),
          [r, s, i] = (0, a.useMemo)(() => {
            if (n.filter((e) => !e.isLoading).length != n.length)
              return [null, [], []];
            const t = new Map(),
              r = new Set(e),
              a = new Map();
            n.forEach((e) =>
              e.data.forEach((e) => {
                if (
                  r.has(e.partner_id) &&
                  (a.has(e.partner_id)
                    ? a.get(e.partner_id).push(e)
                    : a.set(e.partner_id, [e]),
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
            const s = Array.from(t.values());
            return [a, s.map((e) => e.accountID), s.map((e) => e.partnerID)];
          }, [n, e]),
          l = (function (e, t) {
            const n = (0, F.a)(),
              r = a.useContext(be);
            return (0, he.E)({ queries: e.map((e, a) => De(r, n, e, t[a])) });
          })(s, i);
        return l.filter((e) => !e.isLoading).length == l.length ? r : null;
      }
      function Me(e) {
        const { rgGidMeetSteamEvents: t } = e,
          n = (function () {
            const [e] = (0, a.useState)(() =>
              (0, E.Tc)("partners_to_verify", "application_config"),
            );
            return e;
          })(),
          r = (0, C.vh)(n),
          s = Ne(n, t),
          i = (0, a.useMemo)(() => {
            if (!r || !s) return null;
            const e = [];
            return (
              n.forEach((t) => {
                const n = s.get(t);
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
          }, [r, s, n]),
          l = (0, a.useMemo)(
            () => [
              ke.accessor("partner_id", { header: "Partner ID", size: 100 }),
              ke.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              ke.accessor("invitations", {
                header: "Invitations",
                cell: Re,
                size: 300,
              }),
              ke.accessor("registrations", {
                header: "Registered to Attend",
                cell: Re,
                size: 300,
              }),
            ],
            [],
          );
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(x.JU, null, "Partner Analysis"),
          Boolean(i)
            ? a.createElement(
                u.tH,
                null,
                a.createElement(de.k, {
                  columns: l,
                  data: i,
                  getRowKey: (e) => e,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: n.length,
                }),
                a.createElement("br", null),
                a.createElement(
                  x.$n,
                  {
                    id: "download-csv",
                    onClick: function () {
                      const e = [],
                        t = [];
                      for (const e of l) t.push(e.header);
                      e.push(t);
                      for (const t of i) {
                        const n = [];
                        for (const e of l) {
                          const r = t[e.accessorKey];
                          n.push(
                            "invitations" == e.accessorKey ||
                              "registrations" == e.accessorKey
                              ? Te(r)
                              : r.toString(),
                          );
                        }
                        e.push(n);
                      }
                      X.g.WriteCSVToFile(e, "partneranalysis.csv");
                    },
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
              )
            : a.createElement(U.t, {
                string: (0, K.we)("#Loading"),
                position: "center",
              }),
        );
      }
      function Be(e) {
        const { rgEventGIDs: t, fnSelectedEvents: n } = e,
          [r, s] = (0, a.useState)([]);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(x.JU, null, "Choose Events"),
          t.map((e) =>
            a.createElement(Le, {
              key: e,
              gidClanEvent: e,
              rgSelected: r,
              fnSetSelected: s,
            }),
          ),
          a.createElement(
            x.$n,
            { disabled: 0 == r.length, onClick: () => n(r) },
            "Continue",
          ),
        );
      }
      function Le(e) {
        const { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = e,
          s = (0, O.RR)(t).GetNameWithFallback(0);
        return a.createElement(x.Yh, {
          label: s,
          checked: n.includes(t),
          onChange: (e) => {
            const a = n.indexOf(t),
              s = Boolean(a >= 0);
            e && !s
              ? r([...n, t])
              : !e && s && r([...n.slice(0, a), ...n.slice(a + 1)]);
          },
        });
      }
      var Oe = n(30603),
        Pe = n.n(Oe),
        Fe = n(29233);
      function xe(e) {
        const { hideModal: t, gid: n } = e,
          r = Ee(n),
          s = (0, y.jE)(),
          [i, l] = (0, a.useMemo)(
            () =>
              r
                ? [r.length, r.filter((e) => !e.invitation_emailed).length]
                : [0, 0],
            [r],
          );
        return a.createElement(
          z.o0,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription:
              "This will show the users we have invited and their status. As well as individual who were just sent the registration page on their own.",
            strTitle: "Invitation And Registration Status",
          },
          !r &&
            a.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, K.we)("#Loading"),
            }),
          r &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement("div", null, "There are ", i, " registrations."),
              l > 0 &&
                a.createElement(
                  x.$n,
                  {
                    onClick: async () => {
                      await (async function (e, t) {
                        let n = new FormData();
                        n.append("sessionid", H.TS.SESSIONID),
                          n.append("gid", t);
                        const r = `${H.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
                        try {
                          const a = await I().post(r, n, {
                            withCredentials: !0,
                          });
                          if (1 != a?.data?.success) {
                            let e = (0, Z.H)(a);
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
                            a?.data
                          );
                        } catch (e) {
                          let t = (0, Z.H)(e);
                          console.error(
                            "AsyncSendInviteEmails error: " + t.strErrorMsg,
                            t,
                          );
                        }
                        return null;
                      })(s, n);
                    },
                  },
                  l,
                  " Invites To Sent. Send now?",
                ),
              a.createElement(
                "table",
                null,
                a.createElement(
                  "thead",
                  null,
                  a.createElement(
                    "tr",
                    null,
                    a.createElement("th", null, "SteamID"),
                    a.createElement("th", null, "Name"),
                    a.createElement("th", null, "invited"),
                    a.createElement("th", null, "Invite Emailed"),
                    a.createElement("th", null, "Partner"),
                    a.createElement("th", null, "Email Override"),
                  ),
                ),
                a.createElement(
                  "tbody",
                  null,
                  r?.map((e) =>
                    a.createElement(Ge, {
                      key: "regentry_" + e.steamid,
                      reg: e,
                    }),
                  ),
                ),
              ),
            ),
        );
      }
      function Ge(e) {
        const { reg: t } = e,
          [n] = (0, C.UA)(t.partner_id);
        return a.createElement(
          "tr",
          null,
          a.createElement("td", null, t.steamid),
          a.createElement("td", null, t.name),
          a.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          a.createElement(
            "td",
            null,
            Boolean(t.invitation_emailed) ? "YES" : "",
          ),
          a.createElement("td", null, n?.name, " (", t.partner_id, ")"),
          a.createElement("td", null, t.email_override),
        );
      }
      function ze(e) {
        const { hideModal: t, gid: n, title: r, group: s, session: i } = e,
          l = (0, F.a)(),
          o = Ee(n),
          c = L(l, n, s?.group_id),
          [u, m] = (0, a.useMemo)(() => {
            const e = c?.data?.filter((e) => e.session_id == i.id),
              t = new Map(),
              n = new Map();
            return (
              e?.forEach((e) => {
                const r = new Fe.b2(e.steamid).GetAccountID();
                if ((t.set(r, e), e.jsondata)) {
                  const t = JSON.parse(e.jsondata);
                  t.pre_event_partner_questions &&
                    n.set(r, t.pre_event_partner_questions);
                }
              }),
              [t, n]
            );
          }, [i, c]),
          d = o?.filter((e) => u.has(new Fe.b2(e.steamid).GetAccountID()));
        return a.createElement(
          z.o0,
          {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
          },
          a.createElement(
            "div",
            { className: Pe().ExportToCSV },
            a.createElement(
              "a",
              {
                onClick: () =>
                  (function (e, t, n, r, a) {
                    const s = [],
                      i = [
                        "SteamID",
                        "Name",
                        "Invited",
                        "Partner",
                        "Email Override",
                        "Guest Count",
                        "Reg Confirmation Email Sent",
                      ];
                    e.ask_registration_question && i.push("Pre Reg Answer");
                    s.push(i),
                      n.forEach((t) => {
                        const n = [],
                          i = t.partner_id ? (0, C.Yd)(t.partner_id) : void 0;
                        n.push("" + t.steamid),
                          n.push(t.name),
                          n.push(t.invited ? "YES" : ""),
                          n.push(i ? `${i?.name} (${t.partner_id})` : ""),
                          n.push(t.email_override),
                          n.push(
                            "" +
                              (t.guests_registered
                                ? t.guests_registered - 1
                                : 0),
                          );
                        const l = new Fe.b2(t.steamid);
                        if (r.has(l.GetAccountID())) {
                          const e = je(r.get(l.GetAccountID()), t);
                          if (e) {
                            const t = new Date(1e3 * e)
                              .toISOString()
                              .replace("T", " ")
                              .split(".")[0];
                            n.push(t);
                          } else n.push("");
                        } else n.push("");
                        if (e.ask_registration_question) {
                          const t = a
                            .get(l.GetAccountID())
                            ?.find((t) => t.group_id == e.group_id);
                          t && n.push(t.question);
                        }
                        s.push(n);
                        for (let e = 0; e < t.guest_names?.length; e++) {
                          const n = [];
                          n.push("(guest)"),
                            n.push(t.guest_names[e]),
                            s.push(n);
                        }
                      });
                    const l =
                      "meetsteam_" +
                      t.replace(/[ <>:"/\\|?*\x00-\x1F]/g, "_") +
                      ".csv";
                    X.g.WriteCSVToFile(s, l);
                  })(s, r, d, u, m),
              },
              "Export to CSV",
            ),
          ),
          a.createElement(
            "table",
            { className: Pe().Table },
            a.createElement(
              "thead",
              null,
              a.createElement(
                "tr",
                null,
                a.createElement("th", null, "SteamID"),
                a.createElement("th", null, "Name"),
                a.createElement("th", null, "Invited"),
                a.createElement("th", null, "Partner"),
                a.createElement("th", null, "Email Override"),
                a.createElement(
                  "th",
                  null,
                  "Guest Count ",
                  a.createElement($.o, {
                    tooltip:
                      "Additional guests, doesn't include main registrant",
                  }),
                ),
                a.createElement("th", null, "Reg Confirm Email Sent"),
                s.ask_registration_question &&
                  a.createElement("th", null, "Answer"),
              ),
            ),
            a.createElement(
              "tbody",
              null,
              d?.flatMap((e) => {
                const t = new Fe.b2(e.steamid).GetAccountID(),
                  n = [
                    a.createElement(Ue, {
                      key: "regrow" + e.steamid,
                      group: s,
                      regInfo: u.get(t),
                      inviteInfo: e,
                      preRegQuestions: m.get(t),
                    }),
                  ];
                for (let t = 0; t < e.guest_names?.length; t++)
                  n.push(
                    a.createElement($e, {
                      key: "regguestrow" + e.steamid + "_" + t,
                      guestName: e.guest_names[t],
                    }),
                  );
                return n;
              }),
            ),
          ),
        );
      }
      function je(e, t) {
        const n = `registration_emailed_${e.group_id}_${e.session_id}`;
        let r = null;
        return n in t && (r = t[n]), r;
      }
      function Ue(e) {
        const { inviteInfo: t, regInfo: n, group: r, preRegQuestions: s } = e,
          [i] = (0, C.UA)(t.partner_id),
          l = je(n, t);
        return a.createElement(
          "tr",
          null,
          a.createElement("td", null, t.steamid),
          a.createElement("td", null, t.name),
          a.createElement("td", null, Boolean(t.invited) ? "YES" : ""),
          a.createElement(
            "td",
            null,
            (i?.name ?? t.game) ? `Game: ${t.game}` : "",
            " ",
            t.partner_id ? `(${t.partner_id})` : "",
          ),
          a.createElement("td", null, t.email_override),
          a.createElement(
            "td",
            null,
            n.guests_registered ? n.guests_registered - 1 : 0,
          ),
          a.createElement("td", null, l ? (0, K.TW)(l) : ""),
          r.ask_registration_question &&
            a.createElement(
              "td",
              null,
              s?.find((e) => e.group_id == r.group_id)?.question || "",
            ),
        );
      }
      function $e(e) {
        const { guestName: t } = e;
        return a.createElement(
          "tr",
          null,
          a.createElement("td", null, "(guest)"),
          a.createElement("td", null, t),
        );
      }
      var qe = n(2516);
      function Ke(e) {
        const { rgEventGIDs: t } = e,
          [n, r, s] = (0, v.uD)(),
          [i, l] = (0, a.useState)(null);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("span", null, " | "),
          a.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
            },
            "Show Registration Across Events",
          ),
          a.createElement(
            j.E,
            { active: n },
            a.createElement(
              u.tH,
              null,
              a.createElement(
                z.o0,
                {
                  closeModal: s,
                  bAllowFullSize: !0,
                  bDisableBackgroundDismiss: !0,
                },
                Boolean(null == i)
                  ? a.createElement(Be, { rgEventGIDs: t, fnSelectedEvents: l })
                  : a.createElement(
                      a.Fragment,
                      null,
                      a.createElement(He, { rgGidMeetSteamEvents: i }),
                      a.createElement(
                        x.$n,
                        { onClick: () => l(null) },
                        "Reset Selection",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
      const We = (0, me.FB)();
      function He(e) {
        const { rgGidMeetSteamEvents: t } = e,
          { rgAllRegistrations: n, rgPartnerIDs: r } = (function (e) {
            const t = fe(e),
              [n, r] = (0, a.useMemo)(() => {
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
            return { rgAllRegistrations: r, rgPartnerIDs: n };
          })(t),
          s = (0, C.vh)(r),
          i = (0, a.useMemo)(() => {
            if (!s || !n) return null;
            const e = [];
            return (
              n.forEach((t) => {
                (0, C.Yd)(t.partner_id);
                e.push({
                  partner_id: t.partner_id ? "" + t.partner_id : "",
                  partner_name: (0, C.Yd)(t.partner_id)?.name || "Unknown",
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
          }, [s, n]),
          l = (0, a.useMemo)(
            () => [
              We.accessor("name", { header: "Name", size: 200 }),
              We.accessor("accountid", { header: "Account ID", size: 150 }),
              We.accessor("email", { header: "Email", size: 150 }),
              We.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              We.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              We.accessor("partner_id", { header: "Partner ID", size: 100 }),
              We.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
            ],
            [],
          );
        return s && r && i
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(x.JU, null, "Registations"),
              Boolean(i)
                ? a.createElement(
                    u.tH,
                    null,
                    a.createElement(de.k, {
                      columns: l,
                      data: i,
                      getRowKey: (e) => e,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: r.length,
                    }),
                    a.createElement("br", null),
                    a.createElement(
                      x.$n,
                      {
                        id: "download-csv",
                        onClick: () =>
                          (0, qe.K)(
                            "registrationdump.csv",
                            i,
                            l.map((e) => ({
                              accessorKey: e.accessorKey,
                              header:
                                "string" == typeof e.header
                                  ? e.header
                                  : (e.accessorKey ?? ""),
                            })),
                          ),
                        style: { width: "120px" },
                      },
                      "Download CSV",
                    ),
                  )
                : a.createElement(U.t, {
                    string: (0, K.we)("#Loading"),
                    position: "center",
                  }),
            )
          : a.createElement(U.t, { string: (0, K.we)("#Loading") });
      }
      var Ye = n(65);
      function Ve(e) {
        const t = Je();
        return a.createElement(
          "div",
          null,
          a.createElement(
            "ol",
            null,
            Array.from(t.entries()).map(([e, t]) =>
              a.createElement(
                "li",
                { key: e },
                a.createElement(
                  "a",
                  {
                    href: `${D.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${e}`,
                    target: "_blank",
                  },
                  t,
                ),
              ),
            ),
          ),
        );
      }
      function Je() {
        const [e] = (0, a.useState)(() => {
          const e = (0, D.Tc)("survey_list", "application_config") || {},
            t = new Map();
          for (const n of Object.keys(e)) t.set(n, e[n]);
          return t;
        });
        return e;
      }
      var Qe = n(74783),
        Ze = n(19367),
        Xe = n.n(Ze);
      function et(e) {
        const t = b.b.InitFromClanID((0, G.H)()),
          n = (function () {
            const [e] = (0, a.useState)(() =>
              (0, E.Tc)("event_gids", "application_config"),
            );
            return e;
          })(),
          [r, s] = (0, T.QD)("showpastevents", !1),
          { bIsLoading: i, events: l } = (0, O.PB)(n),
          o = a.useMemo(() => {
            if (!l) return null;
            const e =
                r && l
                  ? [...l]
                  : l?.filter((e) => e.endTime >= new Date().getTime() / 1e3),
              t = Array.from(
                (0, Ye.bv)(e, (e) => (0, Ye.J2)(new Date(1e3 * e.startTime))),
              );
            return t?.sort((e) => -e[0]), t;
          }, [l, r]);
        return i
          ? a.createElement(U.t, null)
          : o
            ? a.createElement(
                "div",
                null,
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "a",
                    {
                      href: `${H.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                    },
                    "Open Meet Steam Event Dashboard",
                  ),
                  a.createElement(Ae, { rgEventGIDs: n }),
                  a.createElement(Ke, { rgEventGIDs: n }),
                ),
                a.createElement(x.Yh, {
                  checked: r,
                  onChange: s,
                  label: "Show Past Events",
                }),
                a.createElement("hr", null),
                o.map((e) =>
                  a.createElement(tt, {
                    key: e[0],
                    month: new Date(1e3 * e[0]),
                    events: e[1],
                  }),
                ),
              )
            : null;
      }
      function tt(e) {
        const { month: t, events: n } = e,
          r = a.useMemo(() => [...n].sort((e) => -e.startTime), [n]),
          s = new Intl.DateTimeFormat(navigator.language, {
            year: "numeric",
            month: "long",
          }).format(t);
        return a.createElement(
          "div",
          null,
          a.createElement("div", { className: V().MonthTitle }, s),
          a.createElement(
            "div",
            { className: V().MonthEvents },
            r.map((e) => a.createElement(nt, { oEvent: e, key: e.GID })),
          ),
        );
      }
      function nt(e) {
        const { oEvent: t } = e,
          n = t.GID,
          r = b.b.InitFromClanID((0, G.H)()),
          s = (0, F.a)(),
          i = (0, P.my)(s, (0, G.H)(), n),
          l = i.isSuccess ? i.data : null,
          o = t.GetNameWithFallback(0),
          c = (0, a.useMemo)(() => {
            const e = new Array();
            return (
              t.jsondata.meet_steam_groups?.forEach((t) => {
                t.sessions.forEach((n, r) => {
                  e.push({ group: t, session: n, firstSession: 0 == r });
                });
              }),
              e
            );
          }, [t.jsondata.meet_steam_groups]);
        return a.createElement(
          "div",
          { className: V().EventRow },
          a.createElement(
            "div",
            { className: V().EventMainDetails },
            a.createElement(
              "div",
              { className: V().TitleLine },
              a.createElement("div", { className: V().Title }, o),
              a.createElement(
                "div",
                { className: V().StartDate },
                (0, K.TW)(t?.startTime),
              ),
            ),
            a.createElement(
              "div",
              { className: V().ActionLine },
              a.createElement(
                "div",
                null,
                a.createElement(
                  "a",
                  {
                    href: `${H.TS.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                  },
                  "Edit",
                ),
              ),
              a.createElement(
                "div",
                null,
                " | ",
                a.createElement(
                  "a",
                  { href: `${H.TS.STORE_BASE_URL}meetsteam/${n}` },
                  "View",
                ),
              ),
              Boolean(
                t.BIsUnlistedEvent() &&
                  t.jsondata.meet_steam_groups?.length > 0,
              ) &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(lt, { gid: n }),
                  " | ",
                  a.createElement(
                    "a",
                    {
                      href: `${H.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${H.iA.accountid}`,
                    },
                    "QR Page",
                  ),
                  " | ",
                  a.createElement(
                    "a",
                    {
                      href: `${H.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                    },
                    "Attendance List",
                  ),
                  a.createElement(rt, { gid: n }),
                  a.createElement(st, { gid: n }),
                  a.createElement(at, { gid: n }),
                  a.createElement(it, { gid: n }),
                ),
            ),
          ),
          a.createElement(
            "div",
            null,
            a.createElement(
              "table",
              { className: "landingTable" },
              a.createElement(
                "thead",
                null,
                a.createElement(
                  "tr",
                  null,
                  a.createElement("th", null, "Group"),
                  a.createElement("th", null, "Session Start"),
                  a.createElement("th", null, "Session Duration"),
                  a.createElement("th", null, "Seats"),
                  a.createElement(
                    "th",
                    { style: { width: "50px" } },
                    "Registered",
                  ),
                  a.createElement("th", { style: { width: "50px" } }, "Guests"),
                  a.createElement(
                    "th",
                    { style: { width: "100px" } },
                    "Details",
                  ),
                ),
              ),
              a.createElement(
                "tbody",
                null,
                a.createElement(
                  "tr",
                  null,
                  Boolean(c.length > 0)
                    ? a.createElement(ot, {
                        key: c[0].session.id,
                        gid: n,
                        group: c[0].group,
                        session: c[0].session,
                        rgAvailability: l,
                      })
                    : a.createElement(
                        a.Fragment,
                        null,
                        a.createElement("td", null, "None"),
                        a.createElement("td", null),
                        a.createElement("td", null),
                        a.createElement("td", null),
                        a.createElement("td", null),
                        a.createElement("td", null),
                      ),
                  a.createElement(
                    "td",
                    null,
                    !Boolean(
                      t?.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0,
                    ) &&
                      a.createElement(
                        "div",
                        null,
                        "Invite Disabled. Event need to publish into Unlisted State",
                      ),
                  ),
                ),
                c
                  .filter((e, t) => t > 0)
                  .map((e) =>
                    a.createElement(
                      "tr",
                      { key: e.session.id },
                      a.createElement(ot, {
                        group: e.group,
                        gid: n,
                        session: e.session,
                        rgAvailability: l,
                        firstSession: e.firstSession,
                      }),
                    ),
                  ),
              ),
            ),
          ),
        );
      }
      function rt(e) {
        const { gid: t } = e,
          n = Je();
        return Array.from(n.keys()).includes(t)
          ? a.createElement(
              a.Fragment,
              null,
              " | ",
              a.createElement(
                "a",
                { href: `${H.TS.PARTNER_BASE_URL}meetsteam/survey/${t}` },
                "Survey",
              ),
            )
          : null;
      }
      function at(e) {
        const { gid: t } = e,
          [n, r, s] = (0, v.uD)();
        return a.createElement(
          "div",
          null,
          " | ",
          a.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
            },
            "Invite via CSV",
            a.createElement($.o, {
              tooltip:
                "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
            }),
          ),
          a.createElement(
            u.tH,
            null,
            a.createElement(
              j.E,
              { active: n },
              a.createElement(le, { hideModal: s, gid: t }),
            ),
          ),
        );
      }
      function st(e) {
        const { gid: t } = e,
          [n, r, s] = (0, v.uD)();
        return a.createElement(
          "div",
          null,
          " | ",
          a.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
            },
            "Invite",
          ),
          a.createElement(
            u.tH,
            null,
            a.createElement(
              j.E,
              { active: n },
              a.createElement(ie, { hideModal: s, gid: t }),
            ),
          ),
        );
      }
      function it(e) {
        const { gid: t } = e,
          [n, r, s] = (0, v.uD)();
        return a.createElement(
          "div",
          null,
          " | ",
          a.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation(), r();
              },
            },
            "Show Invites",
          ),
          a.createElement(
            u.tH,
            null,
            a.createElement(
              j.E,
              { active: n },
              a.createElement(xe, { hideModal: s, gid: t }),
            ),
          ),
        );
      }
      function lt(e) {
        const { gid: t } = e,
          n = (0, F.a)(),
          [r, s] = (0, a.useState)(!1),
          [i, l] = (0, a.useState)(null);
        return a.createElement(
          "div",
          null,
          " | ",
          a.createElement(
            "a",
            {
              href: "#",
              onClick: async (e) => {
                e.preventDefault(), e.stopPropagation(), s(!0);
                const r = await (async function (e, t) {
                  const n = f.w.Init(_.VI),
                    r = b.b.InitFromClanID((0, G.H)());
                  n.Body().set_clan_event_gid(t),
                    n.Body().set_steamid(r.ConvertTo64BitString());
                  const a = await _.ZK.TestFireEmails(e, n);
                  return console.log("test fire", a), a.GetEResult();
                })(n, t);
                l(r);
              },
            },
            "Email Self",
          ),
          a.createElement(
            j.E,
            { active: r },
            a.createElement(
              z.o0,
              {
                bAlertDialog: !0,
                strTitle: "Test Emails",
                closeModal: () => {
                  s(!1), l(null);
                },
                onOK: () => {},
              },
              a.createElement(
                "div",
                null,
                "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
              ),
              Boolean(null == i) &&
                a.createElement(U.t, { string: (0, K.we)("#Loading") }),
              Boolean(1 == i) &&
                a.createElement("div", null, "Test Emails Sent"),
              Boolean(i && 1 != i) &&
                a.createElement(
                  "div",
                  null,
                  "Email Failed to Send. Check console",
                ),
            ),
          ),
        );
      }
      function ot(e) {
        const {
            gid: t,
            group: n,
            rgAvailability: r,
            session: s,
            firstSession: i = !0,
          } = e,
          l = K.NT.GetWithFallback(n?.localized_session_title, 0),
          o = K.NT.GetWithFallback(n?.localized_session_description, 0),
          c = K.NT.GetWithFallback(n?.localized_intended_audience, 0),
          m = r?.find((e) => e.group_id == n.group_id && e.session_id == s.id),
          [d, h, p] = (0, v.uD)(),
          g = L((0, F.a)(), t, n?.group_id);
        let E = Math.min((m?.guest_count / s.max_capacity) * 100, 100),
          f = m?.guest_count > 0 ? `${E}%` : "0%",
          _ = m?.guest_count >= s.max_capacity;
        const S = Intl.DateTimeFormat().resolvedOptions().timeZone,
          y =
            "in_person" === s.location_type
              ? (s.in_person_time_zone ?? Qe.hh)
              : S;
        return a.createElement(
          a.Fragment,
          null,
          i && Boolean(n)
            ? a.createElement(
                "td",
                null,
                l,
                a.createElement($.o, { tooltip: o }),
                Boolean(c) && a.createElement("div", null, c),
              )
            : a.createElement("td", null),
          a.createElement(
            "td",
            null,
            a.createElement(
              "span",
              null,
              (function (e, t) {
                const n = Xe().unix(e),
                  r = Xe().unix(e).tz(t),
                  a = r.utcOffset() - n.utcOffset(),
                  s = new Date(1e3 * (e + 60 * a)),
                  i = new Date();
                return `${s.getFullYear() == i.getFullYear() ? ((0, W.$w))(s, !1, !1) : ((0, W._9))(s, !1, !1)} ${(0, W.KC)(e + 60 * a)} ${r.format("z")}`;
              })(s.rtime_start, y),
            ),
          ),
          a.createElement("td", null, (0, W.IH)(s.rtime_end - s.rtime_start)),
          a.createElement(
            "td",
            null,
            m?.guest_count || 0,
            " / ",
            s.max_capacity,
            a.createElement("br", null),
            a.createElement(
              "div",
              { className: V().CapacityBarMax },
              a.createElement("div", {
                className: (0, q.A)(V().CapacityBarCurrent, _ ? V().Full : ""),
                style: { width: f },
              }),
            ),
          ),
          a.createElement(
            "td",
            null,
            g.isSuccess &&
              a.createElement(
                a.Fragment,
                null,
                g.data?.filter((e) => e.session_id == s.id).length,
              ),
          ),
          a.createElement(
            "td",
            null,
            g.isSuccess &&
              a.createElement(
                a.Fragment,
                null,
                g.data
                  ?.filter((e) => e.session_id == s.id)
                  .reduce((e, t) => e + t.guests_registered - 1, 0),
              ),
          ),
          a.createElement(
            "td",
            null,
            a.createElement(x.$n, { onClick: h }, "Details"),
            a.createElement(
              u.tH,
              null,
              a.createElement(
                j.E,
                { active: d },
                a.createElement(ze, {
                  gid: t,
                  title: l,
                  group: n,
                  session: s,
                  hideModal: p,
                }),
              ),
            ),
          ),
        );
      }
      var ct = n(22837),
        ut = n(14336),
        mt = n(55263),
        dt = n(29863),
        ht = n(48479),
        pt = n(16021),
        gt = n(98019);
      function Et(e) {
        const { rgEvents: t } = R(),
          n = (function () {
            const [e] = (0, a.useState)(() =>
              (0, E.Tc)("interest_results", "application_config"),
            );
            return (0, a.useMemo)(
              () => e.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
              [e],
            );
          })(),
          [r, s] = (0, a.useState)(""),
          i = D.TS.PARTNER_BASE_URL + "meetsteam",
          l = (0, a.useMemo)(() => {
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
        return a.createElement(
          "div",
          { className: V().EventList },
          a.createElement(x.pd, {
            type: "text",
            value: r,
            onChange: (e) => s(e.currentTarget.value.trim()),
            label: "Filter",
          }),
          a.createElement(
            "div",
            null,
            "Total Survey Responses: ",
            (0, se.D)(n?.length || 0),
          ),
          a.createElement(
            "div",
            null,
            "Link to partner-facing survey: ",
            a.createElement("a", { href: i }, i),
          ),
          t
            .filter(
              (e) => 0 == r.length || e.name.includes(r) || e.id.includes(r),
            )
            .map((e) =>
              a.createElement(ft, {
                key: e.id,
                conf: e,
                nInterestCount: l.get(e.id) ?? 0,
                rgSurveyInterest: n,
              }),
            ),
          a.createElement(Ct, { rgSurveyInterest: n }),
        );
      }
      function ft(e) {
        const { conf: t, nInterestCount: n, rgSurveyInterest: r } = e;
        return a.createElement(
          ht.qx,
          {
            title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, se.D)(n)}`,
            bStartMinimized: !0,
          },
          a.createElement(vt, { conf: t, rgSurveyInterest: r }),
        );
      }
      function _t(e) {
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
      function vt(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, a.useMemo)(
            () => n.filter((e) => e.results?.attending?.includes(t.id)),
            [t, n],
          ),
          s = (0, gt.qh)(),
          { bComplete: i, nCount: l } = (function (e) {
            const [t, n] = (0, a.useState)(!1),
              [r, s] = (0, a.useState)(0),
              i = (0, y.jE)();
            return (
              (0, a.useEffect)(() => {
                (async () => {
                  let t = 0;
                  for (const n of e) {
                    const e = n.results.partner_id;
                    new b.b(n.steamid).GetAccountID(),
                      await Promise.all([
                        (0, C.qG)(e),
                        i.prefetchQuery({
                          queryKey: N(e),
                          queryFn: async () => M(e),
                        }),
                        (0, A.PQ)(i, e),
                      ]),
                      ++t,
                      s(t);
                  }
                  n(!0);
                })();
              }, [i, e]),
              { bComplete: t, nCount: r }
            );
          })(r);
        return i
          ? s?.length
            ? r && 0 != r.length
              ? a.createElement(St, { conf: t, rgSurveyInterest: r })
              : a.createElement("div", null, "No users with interest")
            : a.createElement(U.t, {
                position: "center",
                string: "Loading Valve Account info (this shouldn't take long)",
              })
          : a.createElement(U.t, {
              position: "center",
              string: `Loading ${l} of ${r.length}`,
            });
      }
      function St(e) {
        const { conf: t, rgSurveyInterest: n } = e,
          r = (0, y.jE)();
        return a.createElement(
          "div",
          null,
          a.createElement(
            x.$n,
            {
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
                      a = new Fe.b2(t.steamid);
                    n.push("" + a.GetAccountID());
                    const s = (0, ut.z0)(a.GetAccountID()),
                      i = t.results.partner_id;
                    n.push("" + i);
                    const l = (0, A.N6)(i).map(
                      (e) => (0, gt.YA)(r, e)?.displayName || "" + e,
                    );
                    n.push(l.join("|"));
                    const o = t.results.email_override || "";
                    n.push("" + o),
                      n.push(s?.m_strPlayerName ? s.m_strPlayerName : "");
                    const c = Ie(a.GetAccountID(), i);
                    if (
                      (n.push(c ? c.realname : ""),
                      n.push(t.results.have_you_met_steam ? "yes" : "no"),
                      t.results.submit_time)
                    ) {
                      const e = t.results.submit_time,
                        r = new Date(1e3 * e)
                          .toISOString()
                          .replace("T", " ")
                          .split(".")[0];
                      n.push(r);
                    } else n.push("");
                    n.push("" + t.results.attending?.length),
                      n.push(t.results.country_code),
                      n.push(
                        t.results.preferred_language
                          ? (0, ct.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const u = (0, C.Yd)(i);
                    n.push(u ? u.name : "");
                    const m = B(r, i);
                    m
                      ? (n.push("" + _t(m.strGrossUSD)),
                        n.push("" + m.nBestAppID),
                        n.push(pt.A.Get().GetApp(m.nBestAppID)?.GetName()),
                        n.push("" + m.nBestAppLongTermSalesRank))
                      : (n.push(""), n.push(""), n.push(""), n.push("")),
                      e.push(n);
                  });
                const a = t.name.replace(" ", "_") + "_conference_interest.csv";
                X.g.WriteCSVToFile(e, a);
              },
            },
            "Export to CSV",
          ),
          a.createElement(
            "table",
            { className: "landingTable" },
            a.createElement(
              "thead",
              null,
              a.createElement(
                "tr",
                null,
                a.createElement("th", null, "Name and Email"),
                a.createElement("th", null, "Have you met steam?"),
                a.createElement("th", null, "Partner"),
                a.createElement("th", null, "Valve Contacts"),
                a.createElement("th", null, "Partner Revenue"),
                a.createElement("th", null, "Biggest Game"),
                a.createElement("th", null, "Long Term Sales Rank"),
                a.createElement("th", null, "Attending count?"),
                a.createElement("th", null, "Alt Language"),
                a.createElement("th", null, "Country"),
                a.createElement("th", null, "Submit Survey Time"),
              ),
            ),
            a.createElement(
              "tbody",
              null,
              n.map((e) =>
                a.createElement(yt, {
                  key: t.id + "_" + e.steamid,
                  strsteamid: e.steamid,
                  partnerID: e.results.partner_id,
                  registration: e.results,
                }),
              ),
            ),
          ),
        );
      }
      function yt(e) {
        const { partnerID: t, registration: n } = e;
        return a.createElement(
          "tr",
          null,
          a.createElement("td", null, a.createElement(wt, { ...e })),
          a.createElement("td", null, n.have_you_met_steam ? "" : "NO"),
          a.createElement(It, { nPartnerID: t }),
          a.createElement("td", null, n.attending.length),
          a.createElement(
            "td",
            null,
            n.english_not_good && n.preferred_language
              ? (0, ct.Lg)(n.preferred_language)
              : "",
          ),
          a.createElement("td", null, n.country_code),
          a.createElement("td", null, (0, K.TW)(n.submit_time)),
        );
      }
      function wt(e) {
        const { strsteamid: t, partnerID: n, registration: r } = e,
          s = (0, ut.hW)(t),
          i = we(new Fe.b2(t).GetAccountID(), n),
          l = i?.realname || s.data?.m_strPlayerName;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("span", null, l),
          a.createElement("br", null),
          a.createElement("span", null, r.email_override || i?.email),
        );
      }
      function It(e) {
        const { nPartnerID: t } = e,
          [n] = (0, C.UA)(t),
          r = (function (e) {
            const t = (0, S.I)({
              queryKey: N(e),
              queryFn: async () => M(e),
              enabled: Boolean(e),
            });
            return t.isLoading ? null : t.data;
          })(t),
          s = (0, A.Z4)(t),
          i = (0, y.jE)();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("td", null, n ? n?.name + ` (${t})` : t),
          a.createElement(
            "td",
            null,
            s?.map((e) => (0, gt.YA)(i, e)?.displayName || "" + e).join(","),
          ),
          a.createElement("td", null, "$", r?.strGrossUSD),
          a.createElement(
            "td",
            null,
            r?.nBestAppID > 0
              ? a.createElement(Dt, { appid: r?.nBestAppID })
              : "N/A",
          ),
          a.createElement("td", null, r?.nBestAppLongTermSalesRank),
        );
      }
      const bt = {};
      function Dt(e) {
        const { appid: t } = e,
          [n] = (0, mt.t7)(t, bt),
          r = (0, a.useMemo)(() => ({ id: t, type: "game" }), [t]);
        return a.createElement(
          dt.Qf,
          { item: r },
          a.createElement("span", null, n?.GetName() || t),
        );
      }
      function Ct(e) {
        const { rgSurveyInterest: t } = e,
          n = (0, y.jE)(),
          r =
            ((0, gt.qh)(),
            (0, a.useMemo)(
              () =>
                t.filter((e) =>
                  Boolean(e.results?.suggestion?.trim().length > 0),
                ),
              [t],
            ));
        return a.createElement(
          ht.qx,
          {
            title: `Alternative Suggestions (${r.length})`,
            bStartMinimized: !0,
          },
          a.createElement(
            x.$n,
            {
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
                    const r = [],
                      a = new Fe.b2(t.steamid);
                    r.push("" + a.GetAccountID());
                    const s = (0, ut.z0)(a.GetAccountID()),
                      i = t.results.partner_id;
                    r.push("" + i);
                    const l = t.results.email_override || "";
                    r.push("" + l),
                      r.push(s?.m_strPlayerName ? s.m_strPlayerName : "");
                    const o = Ie(a.GetAccountID(), i);
                    r.push(o ? o.realname : ""),
                      r.push("" + t.results.attending?.length),
                      r.push(t.results.country_code),
                      r.push(
                        t.results.preferred_language
                          ? (0, ct.Lg)(t.results.preferred_language)
                          : "",
                      );
                    const c = (0, C.Yd)(i);
                    r.push(c ? c.name : "");
                    const u = B(n, i);
                    u
                      ? (r.push("" + _t(u.strGrossUSD)),
                        r.push("" + u.nBestAppID),
                        r.push("" + u.nBestAppLongTermSalesRank))
                      : (r.push(""), r.push(""), r.push("")),
                      r.push(t.results.suggestion),
                      e.push(r);
                  });
                X.g.WriteCSVToFile(e, "suggestsion.csv");
              },
            },
            "Export to CSV (wait until the table populates fully)",
          ),
          a.createElement(
            "table",
            { className: "landingTable" },
            a.createElement(
              "thead",
              null,
              a.createElement(
                "tr",
                null,
                a.createElement("th", null, "Name and Email"),
                a.createElement("th", null, "Partner"),
                a.createElement("th", null, "Valve Contacts"),
                a.createElement("th", null, "Partner Revenue"),
                a.createElement("th", null, "Biggest Game"),
                a.createElement("th", null, "Long Term Sales Rank"),
                a.createElement("th", null, "Suggestions"),
              ),
            ),
            a.createElement(
              "tbody",
              null,
              r.map((e) =>
                a.createElement(At, {
                  key: "suggested" + e.steamid,
                  survey: e,
                }),
              ),
            ),
          ),
        );
      }
      function At(e) {
        const { survey: t } = e;
        new Fe.b2(t.steamid);
        return a.createElement(
          "tr",
          null,
          a.createElement(
            "td",
            null,
            a.createElement(wt, {
              strsteamid: t.steamid,
              partnerID: t.results.partner_id,
              registration: t.results,
            }),
          ),
          a.createElement(It, { nPartnerID: t.results.partner_id }),
          a.createElement("td", null, t.results.suggestion.trim()),
        );
      }
      const kt = a.createContext({
        loadUserEmailAndLangs: async (e) =>
          await (function () {
            Rt ||
              (Rt = new (ge())(
                async (e) => {
                  const t = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = {
                      sessionid: D.TS.SESSIONID,
                      strAccountIDs: e.join(","),
                    },
                    r = await I().get(t, { params: n, withCredentials: !0 });
                  if (!r || 200 != r?.status || 1 != r?.data?.success)
                    throw `Failed to load app to user email and langs: ${((0, Z.H))(r).strErrorMsg}`;
                  const a = new Map();
                  return (
                    r.data.users.forEach((e) => {
                      const t = new b.b(e.steamid);
                      a.set(t.GetAccountID(), e);
                    }),
                    e.map((e) => a.get(e) ?? null)
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
        const t = (0, F.a)(),
          n = (0, gt.qh)(),
          r = (function (e) {
            const t = (0, S.I)({
              queryKey: ["useMeetSteamSaleOperators"],
              queryFn: async () => {
                const t = f.w.Init(_.Rl),
                  n = new Date();
                n.setFullYear(n.getFullYear() - 2),
                  t.Body().set_rt_oldest_date(0);
                const r = await _.ZK.GetSaleEventOrganizers(e, t);
                return r.BSuccess()
                  ? r
                      .Body()
                      .info()
                      .map((e) => e.toObject())
                  : [];
              },
            });
            return t.isLoading ? null : t.data;
          })(t),
          s = (0, a.useMemo)(() => {
            if (!r || !n) return null;
            const e = new Set(n.map((e) => e.id));
            return r
              .filter((t) => !e.has(t.accountid))
              .sort(
                (e, t) => t.clan_event_gids?.length - e.clan_event_gids.length,
              );
          }, [r, n]);
        return s
          ? a.createElement(
              "div",
              null,
              a.createElement(
                x.$n,
                {
                  onClick: () => {
                    const e = [];
                    e.push(["User Name", "account id", "Email", "Event Count"]),
                      s.forEach((t) => {
                        const n = (0, ut.z0)(t.accountid),
                          r =
                            ((a = t.accountid),
                            ye.L.getQueryData(["UserEmailAndLangs", a]));
                        var a;
                        e.push([
                          n?.m_strPlayerName || "",
                          "" + t.accountid,
                          r?.email_address || "",
                          t.clan_event_gids?.length.toLocaleString((0, Mt.J)()),
                        ]);
                      });
                    X.g.WriteCSVToFile(e, "sale_operators.csv");
                  },
                },
                "CSV Export",
                a.createElement($.o, {
                  tooltip: "Wait until the page finishes loading before export",
                }),
              ),
              a.createElement(
                "table",
                null,
                a.createElement(
                  "thead",
                  null,
                  a.createElement(
                    "tr",
                    null,
                    a.createElement("th", null, "User"),
                    a.createElement("th", null, "Email"),
                    a.createElement("th", null, "Events"),
                  ),
                ),
                a.createElement(
                  "tbody",
                  null,
                  s.map((e) =>
                    a.createElement(Lt, { key: e.accountid, organizer: e }),
                  ),
                ),
              ),
            )
          : a.createElement(U.t, {
              string: (0, K.we)("#Loading"),
              size: "medium",
            });
      }
      function Lt(e) {
        const { organizer: t } = e,
          n = (0, a.useMemo)(
            () => b.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
            [t],
          ),
          r = (0, ut.hW)(n),
          s = (function (e) {
            const t = a.useContext(kt);
            return (0, S.I)(Tt(t, e));
          })(t.accountid),
          i = r.data?.m_strPlayerName || "";
        return a.createElement(
          "tr",
          null,
          a.createElement("td", null, i, " (", t.accountid, ")"),
          a.createElement("td", null, s?.data?.email_address),
          a.createElement(
            "td",
            null,
            a.createElement(Ot, {
              name: i,
              rgClanEventGIDs: t.clan_event_gids,
            }),
          ),
        );
      }
      function Ot(e) {
        const { name: t, rgClanEventGIDs: n } = e,
          [r, s, i] = (0, Nt.uD)();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            x.$n,
            { onClick: s },
            "See ",
            (0, se.D)(n.length),
            " Events",
          ),
          a.createElement(
            j.E,
            { active: r },
            a.createElement(
              z.o0,
              { bAlertDialog: !0, closeModal: i, strTitle: `${t}'s Events` },
              n.map((e) => a.createElement(Pt, { gid: e, key: e })),
            ),
          ),
        );
      }
      function Pt(e) {
        const { gid: t } = e,
          n = (0, O.RR)(t);
        return n
          ? a.createElement(
              "a",
              {
                href: `${H.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                target: "_blank",
              },
              a.createElement("div", null, n.GetNameWithFallback(0)),
              a.createElement("img", { src: n.GetImageURL("capsule", 0) }),
            )
          : a.createElement("div", null, "Loading ", t);
      }
      function Ft(e) {
        const t = (e) =>
            window.sessionStorage.setItem("meetsteamadmin", `?tab=${e.key}`),
          n = [
            {
              name: "Interest Survey Results",
              key: "survey",
              contents: a.createElement(u.tH, null, a.createElement(Et, null)),
              onClick: t,
            },
            {
              name: "Event Management",
              key: "event",
              contents: a.createElement(u.tH, null, a.createElement(et, null)),
              onClick: t,
            },
            {
              name: "Sale Operators",
              key: "saleops",
              contents: a.createElement(u.tH, null, a.createElement(Bt, null)),
              onClick: t,
            },
            {
              name: "Post Event Surveys",
              key: "postsurvey",
              contents: a.createElement(u.tH, null, a.createElement(Ve, null)),
              onClick: t,
            },
          ];
        return a.createElement(
          "div",
          { className: g().AdminPageCtn },
          a.createElement(
            "div",
            { className: g().PageTitle },
            "Meet Steam Admin Dashboard ",
            (0, E.Fd)("current_year", "application_config"),
          ),
          a.createElement("hr", null),
          a.createElement(h.V, { tabs: n }),
          a.createElement("div", { className: d().ClearThings }),
          a.createElement("br", null),
        );
      }
      var xt = n(65946),
        Gt = n(79645),
        zt = n(1909),
        jt = n(56330),
        Ut = n(85761),
        $t = n.n(Ut);
      function qt(e) {
        const t = (function () {
            const [e] = (0, a.useState)(() =>
              (0, D.Tc)("registration_open", "application_config"),
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, a.useState)(
              () => (0, D.Tc)("user_reg", "application_config") || {},
            );
            return e;
          })(),
          { data: r } = (0, ut.js)(D.iA.accountid),
          [s, i] = (0, a.useState)(!1),
          [l, o] = (0, a.useState)(!1),
          [c, u] = (0, a.useState)(!1),
          [m, d] = (0, a.useState)(() => JSON.parse(JSON.stringify(n)));
        return t
          ? !r || r.m_bPlayerNamePending
            ? a.createElement(U.t, {
                size: "medium",
                position: "center",
                string: (0, K.we)("#Loading"),
              })
            : a.createElement(
                "div",
                { className: (0, q.A)(g().AdminPageCtn, $t().Ctn) },
                a.createElement(
                  "div",
                  { className: g().PageTitle },
                  (0, K.we)("#MeetSteam_MainTitle"),
                ),
                a.createElement("hr", null),
                a.createElement(
                  "div",
                  { className: g().ColumnCtn },
                  a.createElement(
                    "div",
                    { className: g().LeftCol },
                    a.createElement(
                      "div",
                      { className: g().SectionCtn },
                      a.createElement(
                        "h1",
                        null,
                        " ",
                        (0, K.PP)(
                          "#MeetSteam_Intro",
                          r.m_strPlayerName,
                          a.createElement("br", null),
                        ),
                      ),
                      a.createElement(
                        "p",
                        { className: g().IntroText },
                        (0, K.we)("#MeetSteam_Desc1"),
                      ),
                    ),
                    a.createElement(
                      "div",
                      { className: g().SectionCtn },
                      a.createElement(Yt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    a.createElement(
                      "div",
                      { className: g().SectionCtn },
                      a.createElement(Kt, {
                        oRegistration: m,
                        fnSetRegistration: d,
                      }),
                    ),
                    a.createElement(
                      "div",
                      { className: (0, q.A)(g().SectionCtn, g().ActionBar) },
                      a.createElement(
                        x.jn,
                        {
                          onClick: async () => {
                            o(!0), i(!1), u(!1);
                            const e = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                              t = new FormData();
                            t.append("sessionid", D.TS.SESSIONID),
                              t.append("registrationJson", JSON.stringify(m));
                            try {
                              const n = await I().post(e, t, {
                                withCredentials: !0,
                              });
                              1 != n.data.success
                                ? (console.error(
                                    "MeetSteamLanding failed " + n.data.success,
                                  ),
                                  i(!0))
                                : u(!0);
                            } catch (e) {
                              console.error(
                                "MeetSteamLanding failed caught",
                                e,
                              );
                            }
                            o(!1);
                          },
                        },
                        (0, K.we)("#Button_Submit"),
                      ),
                      l &&
                        a.createElement(U.t, {
                          size: "medium",
                          position: "center",
                          string: (0, K.we)("#Saving"),
                        }),
                      c &&
                        a.createElement(
                          "div",
                          null,
                          (0, K.we)("#Button_Saved"),
                        ),
                      s &&
                        a.createElement(
                          "div",
                          { className: jt.ErrorStylesWithIcon },
                          (0, K.we)("#Error_ErrorCommunicatingWithNetwork"),
                        ),
                    ),
                  ),
                ),
              )
          : a.createElement(
              "div",
              { className: $t().Ctn },
              (0, K.we)("#MeetSteam_closed"),
            );
      }
      function Kt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          { rgEvents: r, rgOldEvents: s, selectConference: i } = R();
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("h1", null, (0, K.we)("#MeetSteam_Events_Interest")),
          a.createElement(
            "p",
            null,
            (0, K.PP)(
              "#MeetSteam_Events_title",
              (0, D.Tc)("meet_steam_year", "application_config") || "2025",
            ),
          ),
          a.createElement(
            "p",
            null,
            a.createElement("span", { className: $t().Indicator }, "*"),
            " ",
            (0, K.PP)("#MeetSteam_Events_desc"),
          ),
          Boolean(i) &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement("hr", null),
              a.createElement("p", null, (0, K.we)("#MeetSteam_ConferenceOrg")),
              a.createElement(Wt, { ...e, rgConference: [i] }),
              a.createElement("br", null),
              a.createElement("br", null),
              a.createElement("hr", null),
              a.createElement(
                "h2",
                null,
                (0, K.we)("#MeetSteam_OtherConference"),
              ),
            ),
          a.createElement(Wt, { ...e, rgConference: r }),
          a.createElement("br", null),
          a.createElement(x.pd, {
            type: "text",
            value: t.suggestion || "",
            onChange: (e) => n({ ...t, suggestion: e.currentTarget.value }),
            label: (0, K.we)("#MeetSteam_others"),
          }),
          Boolean(s?.length > 0) &&
            a.createElement(
              ht.qx,
              {
                bStartMinimized: !0,
                title: (0, K.we)("#MeetSteam_PastEvents", s.length),
              },
              a.createElement(Wt, { ...e, rgConference: s }),
            ),
        );
      }
      function Wt(e) {
        const { rgConference: t } = e;
        return a.createElement(
          "table",
          null,
          a.createElement(
            "thead",
            null,
            a.createElement(
              "tr",
              null,
              a.createElement("th", null),
              a.createElement("th", null),
              a.createElement("th", null),
              a.createElement("th", null),
            ),
          ),
          a.createElement(
            "tbody",
            null,
            t.map((t) =>
              a.createElement(
                "tr",
                { key: t.id },
                a.createElement(
                  "td",
                  null,
                  t.attending
                    ? a.createElement(
                        "span",
                        { className: $t().Indicator },
                        "*",
                      )
                    : "",
                ),
                a.createElement(
                  "td",
                  null,
                  a.createElement("div", null, t.name),
                  a.createElement("div", null, t.place),
                ),
                a.createElement(
                  "td",
                  null,
                  a.createElement("div", null, t.time),
                ),
                a.createElement(
                  "td",
                  null,
                  a.createElement(Ht, { ...e, conf: t }),
                ),
              ),
            ),
          ),
        );
      }
      function Ht(e) {
        const { oRegistration: t, fnSetRegistration: n, conf: r } = e;
        return a.createElement(x.Yh, {
          checked: t.attending?.includes(r.id),
          onChange: (e) => {
            let a = t.attending ? [...t.attending] : [];
            e && !a.includes(r.id)
              ? (a.push(r.id), n({ ...t, attending: a }))
              : !e &&
                a.includes(r.id) &&
                (a.splice(a.indexOf(r.id), 1), n({ ...t, attending: a }));
          },
          tooltip: (0, K.we)("#MeetSteam_attend_ttip"),
        });
      }
      function Yt(e) {
        const { oRegistration: t, fnSetRegistration: n } = e,
          r = (0, ut.js)(D.iA.accountid),
          s = (function (e) {
            const t = (function () {
                const [e] = (0, a.useState)(
                  () =>
                    (0, D.Tc)("partner_user_email", "application_config") || "",
                );
                return e;
              })(),
              n = (function () {
                const [e] = (0, a.useState)(() =>
                  (0, D.Tc)("primary_partner_id", "application_config"),
                );
                return e;
              })(),
              r = we(D.iA.accountid, e != n ? e : null);
            return e == n ? t : r?.email;
          })(t?.partner_id),
          [i, l] = (0, a.useState)(() =>
            Boolean((t.email_override && t.email_override != s) || !s),
          ),
          [o, c, u] = (0, xt.q3)(() => [
            !Boolean(t.have_you_met_steam),
            Boolean(t.english_not_good),
            t.preferred_language,
          ]);
        return r.data
          ? a.createElement(
              "div",
              null,
              a.createElement("h1", null, (0, K.we)("#MeetSteam_You")),
              a.createElement("p", null, (0, K.we)("#MeetSteam_You_Desc")),
              a.createElement(Vt, {
                nPartnerID: t.partner_id,
                label: (0, K.we)("#MeetSteam_You_Company"),
                setPartnerID: (e) => n({ ...t, partner_id: e }),
              }),
              a.createElement(
                "div",
                { className: $t().EmailInfoRow },
                a.createElement(
                  "div",
                  { className: $t().EmailField },
                  a.createElement(x.pd, {
                    type: "string",
                    label: (0, K.we)("#MeetSteam_You_Email"),
                    disabled: !i,
                    value: t.email_override || s || "",
                    placeholder: (0, K.we)("#MeetSteam_You_EmailMissing"),
                    mustBeEmail: !0,
                    onChange: (e) =>
                      n({ ...t, email_override: e.currentTarget.value }),
                  }),
                ),
                !i &&
                  a.createElement(x.Yh, {
                    checked: i,
                    onChange: l,
                    label: (0, K.we)("#MeetSteam_You_Update"),
                    tooltip: (0, K.we)("#MeetSteam_You_Update_ttip"),
                  }),
              ),
              a.createElement(x.JU, null, (0, K.we)("#MeetSteam_NeverMet")),
              a.createElement(x.Yh, {
                label: (0, K.we)("#MeetSteam_NeverMetNo"),
                checked: o,
                onChange: (e) => n({ ...t, have_you_met_steam: !e }),
              }),
              a.createElement(
                x.JU,
                null,
                (0, K.we)("#MeetSteam_CapabableEnglish"),
              ),
              a.createElement(
                "div",
                { className: $t().RadioButtonCtn },
                a.createElement(x.Od, {
                  className: $t().RadioButtons,
                  checked: !c,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: void 0,
                      preferred_language: void 0,
                    }),
                  label: (0, K.we)("#MeetSteam_CapabableEnglish_Yes"),
                }),
                a.createElement(x.Od, {
                  className: $t().RadioButtons,
                  checked: c,
                  onChange: (e) =>
                    e &&
                    n({
                      ...t,
                      english_not_good: !0,
                      preferred_language: (0, ct.sf)(D.TS.LANGUAGE),
                    }),
                  label: (0, K.we)("#MeetSteam_CapabableEnglish_No"),
                }),
              ),
              c &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement("br", null),
                  a.createElement(
                    x.JU,
                    null,
                    (0, K.we)("#MeetSteam_LanguagePref"),
                  ),
                  a.createElement(zt.Ng, {
                    selectedLang: u,
                    bAllowUnsetOption: !1,
                    strTooltip: (0, K.we)("#MeetSteam_LanguagePref_ttip"),
                    fnOnLanguageChanged: (e) =>
                      n({ ...t, preferred_language: e }),
                  }),
                ),
            )
          : a.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, K.we)("#Loading"),
            });
      }
      function Vt(e) {
        const { nPartnerID: t, setPartnerID: n, label: r } = e,
          s = (0, Gt.c)(D.iA.accountid);
        if (!s)
          return a.createElement(U.t, {
            size: "small",
            position: "center",
            string: (0, K.we)("#Loading"),
          });
        if (1 == s.length) return null;
        const i = [];
        return (
          s.forEach((e) =>
            i.push({ label: e?.partner_name, data: e.partnerid }),
          ),
          a.createElement(x.m, {
            layout: "inline",
            label: r,
            rgOptions: i,
            selectedOption: t,
            onChange: (e) => {
              n(e.data);
            },
          })
        );
      }
      var Jt = n(20587),
        Qt = n(13038),
        Zt = n.n(Qt);
      function Xt(e) {
        const { data: t } = (0, ut.js)(D.iA.accountid),
          n = (function () {
            const [e] = (0, a.useState)(
              () => (0, D.Tc)("survey_event_name", "application_config") || "",
            );
            return e;
          })(),
          r = (function () {
            const [e] = (0, a.useState)(
              () => (0, D.Tc)("survey_data", "application_config") || "",
            );
            return e;
          })(),
          [s, l] = (0, a.useState)(() => r || ""),
          { surveyGID: o } = (0, i.g)(),
          [c, u] = (0, a.useState)(!1),
          [m, d] = (0, a.useState)(!1),
          [h, p] = (0, a.useState)(!1);
        return !t || t.m_bPlayerNamePending
          ? a.createElement(U.t, {
              size: "medium",
              position: "center",
              string: (0, K.we)("#Loading"),
            })
          : a.createElement(
              "div",
              { className: (0, q.A)(g().AdminPageCtn, Zt().Ctn) },
              a.createElement(
                "div",
                { className: g().PageTitle },
                (0, K.we)("#MeetSteam_PostSurvey_Title", n),
              ),
              a.createElement("hr", null),
              a.createElement(
                "div",
                { className: g().ColumnCtn },
                a.createElement(
                  "div",
                  { className: g().LeftCol },
                  a.createElement(
                    "div",
                    { className: g().SectionCtn },
                    a.createElement(
                      "div",
                      null,
                      (0, K.we)("#MeetSteam_PostSurvey_Question"),
                    ),
                    a.createElement("textarea", {
                      rows: 10,
                      onChange: (e) => l(e.currentTarget.value),
                      value: s,
                      autoFocus: !0,
                    }),
                  ),
                  a.createElement(
                    "div",
                    { className: (0, q.A)(g().SectionCtn, g().ActionBar) },
                    a.createElement(
                      x.jn,
                      {
                        onClick: async () => {
                          d(!0), u(!1), p(!1);
                          const e = `${D.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${o}`,
                            t = new FormData();
                          t.append("gid", o),
                            t.append("sessionid", D.TS.SESSIONID);
                          let n = {
                            gid: o,
                            simple_response: s,
                            submit_time: Math.floor(new Date().getTime() / 1e3),
                          };
                          t.append("surveyjson", JSON.stringify(n));
                          try {
                            const n = await I().post(e, t, {
                              withCredentials: !0,
                            });
                            1 != n.data.success
                              ? (console.error(
                                  "MeetSteamLanding failed " + n.data.success,
                                ),
                                u(!0))
                              : p(!0);
                          } catch (e) {
                            console.error("MeetSteamLanding failed caught", e);
                          }
                          d(!1);
                        },
                      },
                      (0, K.we)("#Button_Submit"),
                    ),
                    m &&
                      a.createElement(U.t, {
                        size: "medium",
                        position: "center",
                        string: (0, K.we)("#Saving"),
                      }),
                    h &&
                      a.createElement("div", null, (0, K.we)("#Button_Saved")),
                    c &&
                      a.createElement(
                        "div",
                        { className: jt.ErrorStylesWithIcon },
                        (0, K.we)("#Error_ErrorCommunicatingWithNetwork"),
                      ),
                  ),
                ),
              ),
            );
      }
      var en = n(27144),
        tn = n(5695);
      function nn(e) {
        const t = (function () {
            const [e] = (0, a.useState)(
              () => (0, D.Tc)("event_gids", "application_config") || [],
            );
            return e;
          })(),
          n = (function () {
            const [e] = (0, a.useState)(
              () => (0, D.Tc)("survey_results", "application_config") || [],
            );
            return e;
          })(),
          r = (function () {
            const e = (function () {
              const [e] = (0, a.useState)(() => {
                const e = new Map(),
                  t =
                    (0, D.Tc)("registration_by_gid", "application_config") ||
                    {};
                for (const n in t) {
                  const r = t[n];
                  e.set(n, r);
                }
                return e;
              });
              return e;
            })();
            return (0, a.useMemo)(() => {
              const t = new Map();
              return (
                e.forEach((e, n) => {
                  e.forEach((e) => {
                    const r = new b.b(e.steamid);
                    t.has(r.GetAccountID()) || t.set(r.GetAccountID(), []),
                      (e.gidEvent = n),
                      t.get(r.GetAccountID()).push(e);
                  });
                }),
                t
              );
            }, [e]);
          })(),
          { surveyGID: s } = (0, i.g)(),
          { bIsLoading: l, events: o } = (0, O.PB)(t),
          [c, u] = (0, a.useMemo)(
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
          m = (0, C.vh)(c),
          d = (0, en.B3)(u);
        return !l && m && d
          ? a.createElement(an, {
              rgSurveyResults: n,
              mapAccountsToReg: r,
              meetSteamEvents: o,
            })
          : a.createElement(U.t, {
              string: "Loading Event, Partner and User Info",
            });
      }
      const rn = (0, me.FB)();
      function an(e) {
        const {
            rgSurveyResults: t,
            mapAccountsToReg: n,
            meetSteamEvents: r,
          } = e,
          s = (0, a.useMemo)(() => {
            if (!t) return null;
            const e = new Map();
            r.forEach((t) => e.set(t.GID, t));
            const a = [];
            return (
              t.forEach((t) => {
                const r = JSON.parse(t.jsondata),
                  s = new b.b(t.steamid);
                let i = {
                  feedback: r.simple_response,
                  accountid: s.GetAccountID(),
                };
                if (n.has(s.GetAccountID())) {
                  const t = n.get(s.GetAccountID()),
                    r = JSON.parse(t[0].jsondata);
                  (i.partner_id = r.partner_id),
                    (i.email = r.email_override),
                    (i.name = r.name),
                    (i.registrations = "");
                  const a = (0, C.Yd)(r.partner_id);
                  a && (i.partner_name = a.name),
                    t.forEach((t) => {
                      const n = e.get(t.gidEvent);
                      if (n) {
                        const e = n.jsondata.meet_steam_groups.find(
                          (e) => e.group_id === t.group_id,
                        ).localized_session_title[0];
                        i.registrations.length > 0 && (i.registrations += "|"),
                          (i.registrations += e);
                      }
                    });
                } else {
                  const e = (0, en.CF)(s.GetAccountID());
                  e && (i.name = e.persona_name);
                }
                a.push(i);
              }),
              a
            );
          }, [n, r, t]),
          i = (0, a.useMemo)(
            () => [
              rn.accessor("name", { header: "Name", size: 150 }),
              rn.accessor("feedback", {
                header: "Feedback",
                size: 500,
                cell: tn.Gb,
              }),
              rn.accessor("registrations", {
                header: "Sessions",
                size: 200,
                cell: sn,
              }),
              rn.accessor("accountid", { header: "Account ID", size: 150 }),
              rn.accessor("email", { header: "Email", size: 150 }),
              rn.accessor("partner_name", {
                header: "Partner Name",
                size: 200,
              }),
            ],
            [],
          );
        return s
          ? a.createElement(
              u.tH,
              null,
              a.createElement(
                "div",
                { className: g().AdminPageCtn },
                a.createElement(
                  "div",
                  { className: g().PageTitle },
                  "Survey Results",
                ),
                a.createElement("hr", null),
                a.createElement(
                  x.$n,
                  {
                    id: "download-csv",
                    onClick: () =>
                      (0, qe.K)(
                        "meetsteam_survey_results.csv",
                        s,
                        i.map((e) => ({
                          accessorKey: e.accessorKey,
                          header:
                            "string" == typeof e.header
                              ? e.header
                              : (e.accessorKey ?? ""),
                        })),
                      ),
                    style: { width: "120px" },
                  },
                  "Download CSV",
                ),
                a.createElement("br", null),
                a.createElement(de.k, {
                  columns: i,
                  data: s,
                  getRowKey: (e) => e,
                  stickyHeader: !0,
                  nItemHeight: 28,
                  overscan: s.length,
                }),
              ),
            )
          : a.createElement(U.t, { string: (0, K.we)("#Loading") });
      }
      function sn(e) {
        const t = e.getValue();
        return t?.length > 0
          ? a.createElement(tn.DP, { text: e.getValue(), regExp: /\|/ })
          : "";
      }
      const ln = {
        YearlySurvery: (e = ":year") => `/${e}`,
        PostEventSurvey: (e = ":surveyGID") => `/survey/${e}`,
        AdminDashboard: () => "/admin",
        PostEventSurveyResults: (e = ":surveyGID") => `/surveyresults/${e}`,
      };
      function on(e) {
        return (
          (0, a.useEffect)(() => {
            Jt.O3.Init();
          }, []),
          a.createElement(
            l.m,
            null,
            a.createElement(
              s.Kd,
              { basename: (0, r.C)() + "meetsteam/" },
              a.createElement(
                i.dO,
                null,
                a.createElement(i.qh, {
                  exact: !0,
                  path: r.B.DiagData(),
                  render: (e) =>
                    a.createElement(o.z, {
                      ...e,
                      strConfigID: "application_config",
                    }),
                }),
                a.createElement(i.qh, {
                  exact: !0,
                  path: ln.AdminDashboard(),
                  component: Ft,
                }),
                a.createElement(i.qh, {
                  exact: !0,
                  path: ln.YearlySurvery(":year(\\d+)"),
                  component: qt,
                }),
                a.createElement(i.qh, {
                  exact: !0,
                  path: ln.PostEventSurvey(":surveyGID(\\d+)"),
                  component: Xt,
                }),
                a.createElement(i.qh, {
                  exact: !0,
                  path: ln.PostEventSurveyResults(":surveyGID(\\d+)"),
                  component: nn,
                }),
                a.createElement(i.qh, { component: c.a }),
              ),
            ),
          )
        );
      }
    },
  },
]);
