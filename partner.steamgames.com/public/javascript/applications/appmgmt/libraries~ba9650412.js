/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7224],
  {
    40323: function (e, t) {
      var n, r, i;
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
            i = n.IS_PAPA_WORKER || !1,
            o = {},
            s = 0,
            u = {};
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
                    ((o = this._config.quoteChar || '"'),
                    (t = this._handle.guessLineEndings(e, o))),
                    (e = [...e.split(t).slice(r)].join(t));
                }
                this.isFirstChunk &&
                  E(this._config.beforeFirstChunk) &&
                  void 0 !== (o = this._config.beforeFirstChunk(e)) &&
                  (e = o),
                  (this.isFirstChunk = !1),
                  (this._halted = !1),
                  (r = this._partialLine + e);
                var o =
                  ((this._partialLine = ""),
                  this._handle.parse(r, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = o.meta.cursor),
                    this._finished ||
                      ((this._partialLine = r.substring(e - this._baseIndex)),
                      (this._baseIndex = e)),
                    o && o.data && (this._rowCount += o.data.length),
                    (r =
                      this._finished ||
                      (this._config.preview &&
                        this._rowCount >= this._config.preview)),
                    i)
                  )
                    n.postMessage({
                      results: o,
                      workerId: u.WORKER_ID,
                      finished: r,
                    });
                  else if (E(this._config.chunk) && !t) {
                    if (
                      (this._config.chunk(o, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = o = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(o.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(o.errors)),
                      (this._completeResults.meta = o.meta)),
                    this._completed ||
                      !r ||
                      !E(this._config.complete) ||
                      (o && o.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    r || (o && o.meta.paused) || this._nextChunk(),
                    o
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                E(this._config.error)
                  ? this._config.error(e)
                  : i &&
                    this._config.error &&
                    n.postMessage({
                      workerId: u.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function a(e) {
            var t;
            (e = e || {}).chunkSize || (e.chunkSize = u.RemoteChunkSize),
              c.call(this, e),
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
                  var i;
                  this._config.chunkSize &&
                    ((i = this._start + this._config.chunkSize - 1),
                    t.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + i,
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
          function l(e) {
            (e = e || {}).chunkSize || (e.chunkSize = u.LocalChunkSize),
              c.call(this, e);
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
                  i =
                    (this._config.chunkSize &&
                      ((i = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (e = n.call(e, this._start, i))),
                    t.readAsText(e, this._config.encoding));
                r || this._chunkLoaded({ target: { result: i } });
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
          function d(e) {
            c.call(this, (e = e || {}));
            var t = [],
              n = !0,
              r = !1;
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
              i,
              o = Math.pow(2, 53),
              s = -o,
              c = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              a =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              l = this,
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
            function R() {
              if (
                (y &&
                  r &&
                  (_(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      u.DefaultDelimiter +
                      "'",
                  ),
                  (r = !1)),
                e.skipEmptyLines &&
                  (y.data = y.data.filter(function (e) {
                    return !w(e);
                  })),
                k())
              ) {
                if (y)
                  if (Array.isArray(y.data[0])) {
                    for (var t = 0; k() && t < y.data.length; t++)
                      y.data[t].forEach(n);
                    y.data.splice(0, 1);
                  } else y.data.forEach(n);
                function n(t, n) {
                  E(e.transformHeader) && (t = e.transformHeader(t, n)),
                    g.push(t);
                }
              }
              function i(t, n) {
                for (var r = e.header ? {} : [], i = 0; i < t.length; i++) {
                  var u = i,
                    l = t[i];
                  (l = ((t, n) =>
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
                              ((e = parseFloat(e)), s < e && e < o)
                            )
                              return 1;
                          })(n)
                            ? parseFloat(n)
                            : a.test(n)
                              ? new Date(n)
                              : "" === n
                                ? null
                                : n))
                      : n)(
                    (u = e.header
                      ? i >= g.length
                        ? "__parsed_extra"
                        : g[i]
                      : u),
                    (l = e.transform ? e.transform(l, u) : l),
                  )),
                    "__parsed_extra" === u
                      ? ((r[u] = r[u] || []), r[u].push(l))
                      : (r[u] = l);
                }
                return (
                  e.header &&
                    (i > g.length
                      ? _(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            g.length +
                            " fields but parsed " +
                            i,
                          d + n,
                        )
                      : i < g.length &&
                        _(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            g.length +
                            " fields but parsed " +
                            i,
                          d + n,
                        )),
                  r
                );
              }
              var l;
              y &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((l = 1),
                !y.data.length || Array.isArray(y.data[0])
                  ? ((y.data = y.data.map(i)), (l = y.data.length))
                  : (y.data = i(y.data, 0)),
                e.header && y.meta && (y.meta.fields = g),
                (d += l));
            }
            function k() {
              return e.header && 0 === g.length;
            }
            function _(e, t, n, r) {
              (e = { type: e, code: t, message: n }),
                void 0 !== r && (e.row = r),
                y.errors.push(e);
            }
            E(e.step) &&
              ((i = e.step),
              (e.step = function (t) {
                (y = t),
                  k()
                    ? R()
                    : (R(),
                      0 !== y.data.length &&
                        ((f += t.data.length),
                        e.preview && f > e.preview
                          ? n.abort()
                          : ((y.data = y.data[0]), i(y, l))));
              })),
              (this.parse = function (i, o, s) {
                var c = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(i, c)),
                  (r = !1),
                  e.delimiter
                    ? E(e.delimiter) &&
                      ((e.delimiter = e.delimiter(i)),
                      (y.meta.delimiter = e.delimiter))
                    : ((c = ((t, n, r, i, o) => {
                        var s, c, a, l;
                        o = o || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          u.RECORD_SEP,
                          u.UNIT_SEP,
                        ];
                        for (var f = 0; f < o.length; f++) {
                          for (
                            var d,
                              h = o[f],
                              p = 0,
                              v = 0,
                              g = 0,
                              y =
                                ((a = void 0),
                                new m({
                                  comments: i,
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
                                void 0 === a
                                  ? (a = d)
                                  : 0 < d && ((p += Math.abs(d - a)), (a = d)));
                          0 < y.data.length && (v /= y.data.length - g),
                            (void 0 === c || p <= c) &&
                              (void 0 === l || l < v) &&
                              1.99 < v &&
                              ((c = p), (s = h), (l = v));
                        }
                        return {
                          successful: !!(e.delimiter = s),
                          bestDelimiter: s,
                        };
                      })(
                        i,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = c.bestDelimiter)
                        : ((r = !0), (e.delimiter = u.DefaultDelimiter)),
                      (y.meta.delimiter = e.delimiter)),
                  (c = b(e)),
                  e.preview && e.header && c.preview++,
                  (t = i),
                  (n = new m(c)),
                  (y = n.parse(t, o, s)),
                  R(),
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
                l.streamer._halted
                  ? ((h = !1), l.streamer.parseChunk(t, !0))
                  : setTimeout(l.resume, 3);
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
                for (var r = 0, i = 0; i < n.length; i++)
                  "\n" === n[i][0] && r++;
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
              i = e.step,
              o = e.preview,
              s = e.fastMode,
              c = null,
              a = !1,
              l = null == e.quoteChar ? '"' : e.quoteChar,
              f = l;
            if (
              (void 0 !== e.escapeChar && (f = e.escapeChar),
              ("string" != typeof t || -1 < u.BAD_DELIMITERS.indexOf(t)) &&
                (t = ","),
              r === t)
            )
              throw new Error("Comment character same as delimiter");
            !0 === r
              ? (r = "#")
              : ("string" != typeof r || -1 < u.BAD_DELIMITERS.indexOf(r)) &&
                (r = !1),
              "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
            var d = 0,
              h = !1;
            (this.parse = function (u, m, v) {
              if ("string" != typeof u)
                throw new Error("Input must be a string");
              var g = u.length,
                y = t.length,
                b = n.length,
                w = r.length,
                R = E(i),
                k = [],
                _ = [],
                x = [],
                C = (d = 0);
              if (!u) return q();
              if (s || (!1 !== s && -1 === u.indexOf(l))) {
                for (var I = u.split(n), S = 0; S < I.length; S++) {
                  if (((x = I[S]), (d += x.length), S !== I.length - 1))
                    d += n.length;
                  else if (v) return q();
                  if (!r || x.substring(0, w) !== r) {
                    if (R) {
                      if (((k = []), D(x.split(t)), j(), h)) return q();
                    } else D(x.split(t));
                    if (o && o <= S) return (k = k.slice(0, o)), q(!0);
                  }
                }
                return q();
              }
              for (
                var O = u.indexOf(t, d),
                  M = u.indexOf(n, d),
                  A = new RegExp(p(f) + p(l), "g"),
                  L = u.indexOf(l, d);
                ;
              )
                if (u[d] === l)
                  for (L = d, d++; ; ) {
                    if (-1 === (L = u.indexOf(l, L + 1)))
                      return (
                        v ||
                          _.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: k.length,
                            index: d,
                          }),
                        N()
                      );
                    if (L === g - 1) return N(u.substring(d, L).replace(A, l));
                    if (l === f && u[L + 1] === f) L++;
                    else if (l === f || 0 === L || u[L - 1] !== f) {
                      -1 !== O && O < L + 1 && (O = u.indexOf(t, L + 1));
                      var T = P(
                        -1 ===
                          (M = -1 !== M && M < L + 1 ? u.indexOf(n, L + 1) : M)
                          ? O
                          : Math.min(O, M),
                      );
                      if (u.substr(L + 1 + T, y) === t) {
                        x.push(u.substring(d, L).replace(A, l)),
                          u[(d = L + 1 + T + y)] !== l && (L = u.indexOf(l, d)),
                          (O = u.indexOf(t, d)),
                          (M = u.indexOf(n, d));
                        break;
                      }
                      if (
                        ((T = P(M)),
                        u.substring(L + 1 + T, L + 1 + T + b) === n)
                      ) {
                        if (
                          (x.push(u.substring(d, L).replace(A, l)),
                          F(L + 1 + T + b),
                          (O = u.indexOf(t, d)),
                          (L = u.indexOf(l, d)),
                          R && (j(), h))
                        )
                          return q();
                        if (o && k.length >= o) return q(!0);
                        break;
                      }
                      _.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: k.length,
                        index: d,
                      }),
                        L++;
                    }
                  }
                else if (r && 0 === x.length && u.substring(d, d + w) === r) {
                  if (-1 === M) return q();
                  (d = M + b), (M = u.indexOf(n, d)), (O = u.indexOf(t, d));
                } else if (-1 !== O && (O < M || -1 === M))
                  x.push(u.substring(d, O)), (d = O + y), (O = u.indexOf(t, d));
                else {
                  if (-1 === M) break;
                  if ((x.push(u.substring(d, M)), F(M + b), R && (j(), h)))
                    return q();
                  if (o && k.length >= o) return q(!0);
                }
              return N();
              function D(e) {
                k.push(e), (C = d);
              }
              function P(e) {
                var t = 0;
                return -1 !== e &&
                  (e = u.substring(L + 1, e)) &&
                  "" === e.trim()
                  ? e.length
                  : t;
              }
              function N(e) {
                return (
                  v ||
                    (void 0 === e && (e = u.substring(d)),
                    x.push(e),
                    (d = g),
                    D(x),
                    R && j()),
                  q()
                );
              }
              function F(e) {
                (d = e), D(x), (x = []), (M = u.indexOf(n, d));
              }
              function q(r) {
                if (e.header && !m && k.length && !a) {
                  var i = k[0],
                    o = Object.create(null),
                    s = new Set(i);
                  let t = !1;
                  for (let n = 0; n < i.length; n++) {
                    let r = i[n];
                    if (
                      o[
                        (r = E(e.transformHeader) ? e.transformHeader(r, n) : r)
                      ]
                    ) {
                      let e,
                        u = o[r];
                      for (; (e = r + "_" + u), u++, s.has(e); );
                      s.add(e),
                        (i[n] = e),
                        o[r]++,
                        (t = !0),
                        ((c = null === c ? {} : c)[e] = r);
                    } else (o[r] = 1), (i[n] = r);
                    s.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (a = !0);
                }
                return {
                  data: k,
                  errors: _,
                  meta: {
                    delimiter: t,
                    linebreak: n,
                    aborted: h,
                    truncated: !!r,
                    cursor: C + (m || 0),
                    renamedHeaders: c,
                  },
                };
              }
              function j() {
                i(q()), (k = []), (_ = []);
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
              n = o[t.workerId],
              r = !1;
            if (t.error) n.userError(t.error, t.file);
            else if (t.results && t.results.data) {
              var i = {
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
                  var s = 0;
                  s < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[s],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    i,
                  ),
                  !r);
                  s++
                );
                delete t.results;
              } else
                E(n.userChunk) &&
                  (n.userChunk(t.results, i, t.file), delete t.results);
            }
            t.finished && !r && g(t.workerId, t.results);
          }
          function g(e, t) {
            var n = o[e];
            E(n.userComplete) && n.userComplete(t), n.terminate(), delete o[e];
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
            (u.parse = function (t, r) {
              var i = (r = r || {}).dynamicTyping || !1;
              if (
                (E(i) && ((r.dynamicTypingFunction = i), (i = {})),
                (r.dynamicTyping = i),
                (r.transform = !!E(r.transform) && r.transform),
                !r.worker || !u.WORKERS_SUPPORTED)
              )
                return (
                  (i = null),
                  u.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (i = new (r.download ? a : f)(r)))
                    : !0 === t.readable && E(t.read) && E(t.on)
                      ? (i = new d(r))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (i = new l(r)),
                  i.stream(t)
                );
              ((i = (() => {
                var t;
                return (
                  !!u.WORKERS_SUPPORTED &&
                  ((t = (() => {
                    var t = n.URL || n.webkitURL || null,
                      r = e.toString();
                    return (
                      u.BLOB_URL ||
                      (u.BLOB_URL = t.createObjectURL(
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
                  (t.id = s++),
                  (o[t.id] = t))
                );
              })()).userStep = r.step),
                (i.userChunk = r.chunk),
                (i.userComplete = r.complete),
                (i.userError = r.error),
                (r.step = E(r.step)),
                (r.chunk = E(r.chunk)),
                (r.complete = E(r.complete)),
                (r.error = E(r.error)),
                delete r.worker,
                i.postMessage({ input: t, config: r, workerId: i.id });
            }),
            (u.unparse = function (e, t) {
              var n = !1,
                r = !0,
                i = ",",
                o = "\r\n",
                s = '"',
                c = s + s,
                a = !1,
                l = null,
                f = !1,
                d =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          u.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (i = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (a = t.skipEmptyLines),
                        "string" == typeof t.newline && (o = t.newline),
                        "string" == typeof t.quoteChar && (s = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        l = t.columns;
                      }
                      void 0 !== t.escapeChar && (c = t.escapeChar + s),
                        t.escapeFormulae instanceof RegExp
                          ? (f = t.escapeFormulae)
                          : "boolean" == typeof t.escapeFormulae &&
                            t.escapeFormulae &&
                            (f = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(p(s), "g"));
              if (
                ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))
              ) {
                if (!e.length || Array.isArray(e[0])) return h(null, e, a);
                if ("object" == typeof e[0])
                  return h(l || Object.keys(e[0]), e, a);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || l),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  h(e.fields || [], e.data || [], a)
                );
              throw new Error("Unable to serialize unrecognized input");
              function h(e, t, n) {
                var s = "",
                  u =
                    ("string" == typeof e && (e = JSON.parse(e)),
                    "string" == typeof t && (t = JSON.parse(t)),
                    Array.isArray(e) && 0 < e.length),
                  c = !Array.isArray(t[0]);
                if (u && r) {
                  for (var a = 0; a < e.length; a++)
                    0 < a && (s += i), (s += m(e[a], a));
                  0 < t.length && (s += o);
                }
                for (var l = 0; l < t.length; l++) {
                  var f = (u ? e : t[l]).length,
                    d = !1,
                    h = u ? 0 === Object.keys(t[l]).length : 0 === t[l].length;
                  if (
                    (n &&
                      !u &&
                      (d =
                        "greedy" === n
                          ? "" === t[l].join("").trim()
                          : 1 === t[l].length && 0 === t[l][0].length),
                    "greedy" === n && u)
                  ) {
                    for (var p = [], v = 0; v < f; v++) {
                      var g = c ? e[v] : v;
                      p.push(t[l][g]);
                    }
                    d = "" === p.join("").trim();
                  }
                  if (!d) {
                    for (var y = 0; y < f; y++) {
                      0 < y && !h && (s += i);
                      var b = u && c ? e[y] : y;
                      s += m(t[l][b], y);
                    }
                    l < t.length - 1 && (!n || (0 < f && !h)) && (s += o);
                  }
                }
                return s;
              }
              function m(e, t) {
                var r, o;
                return null == e
                  ? ""
                  : e.constructor === Date
                    ? JSON.stringify(e).slice(1, 25)
                    : ((o = !1),
                      f &&
                        "string" == typeof e &&
                        f.test(e) &&
                        ((e = "'" + e), (o = !0)),
                      (r = e.toString().replace(d, c)),
                      (o =
                        o ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(r, u.BAD_DELIMITERS) ||
                        -1 < r.indexOf(i) ||
                        " " === r.charAt(0) ||
                        " " === r.charAt(r.length - 1))
                        ? s + r + s
                        : r);
              }
            }),
            (u.RECORD_SEP = String.fromCharCode(30)),
            (u.UNIT_SEP = String.fromCharCode(31)),
            (u.BYTE_ORDER_MARK = "\ufeff"),
            (u.BAD_DELIMITERS = ["\r", "\n", '"', u.BYTE_ORDER_MARK]),
            (u.WORKERS_SUPPORTED = !r && !!n.Worker),
            (u.NODE_STREAM_INPUT = 1),
            (u.LocalChunkSize = 10485760),
            (u.RemoteChunkSize = 5242880),
            (u.DefaultDelimiter = ","),
            (u.Parser = m),
            (u.ParserHandle = h),
            (u.NetworkStreamer = a),
            (u.FileStreamer = l),
            (u.StringStreamer = f),
            (u.ReadableStreamStreamer = d),
            n.jQuery &&
              ((t = n.jQuery).fn.parse = function (e) {
                var r = e.config || {},
                  i = [];
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
                    for (var o = 0; o < this.files.length; o++)
                      i.push({
                        file: this.files[o],
                        inputElem: this,
                        instanceConfig: t.extend({}, r),
                      });
                  }),
                  o(),
                  this
                );
                function o() {
                  if (0 === i.length) E(e.complete) && e.complete();
                  else {
                    var n,
                      r,
                      o,
                      c,
                      a = i[0];
                    if (E(e.before)) {
                      var l = e.before(a.file, a.inputElem);
                      if ("object" == typeof l) {
                        if ("abort" === l.action)
                          return (
                            (n = "AbortError"),
                            (r = a.file),
                            (o = a.inputElem),
                            (c = l.reason),
                            void (E(e.error) && e.error({ name: n }, r, o, c))
                          );
                        if ("skip" === l.action) return void s();
                        "object" == typeof l.config &&
                          (a.instanceConfig = t.extend(
                            a.instanceConfig,
                            l.config,
                          ));
                      } else if ("skip" === l) return void s();
                    }
                    var f = a.instanceConfig.complete;
                    (a.instanceConfig.complete = function (e) {
                      E(f) && f(e, a.file, a.inputElem), s();
                    }),
                      u.parse(a.file, a.instanceConfig);
                  }
                }
                function s() {
                  i.splice(0, 1), o();
                }
              }),
            i &&
              (n.onmessage = function (e) {
                (e = e.data),
                  void 0 === u.WORKER_ID && e && (u.WORKER_ID = e.workerId),
                  "string" == typeof e.input
                    ? n.postMessage({
                        workerId: u.WORKER_ID,
                        results: u.parse(e.input, e.config),
                        finished: !0,
                      })
                    : ((n.File && e.input instanceof File) ||
                        e.input instanceof Object) &&
                      (e = u.parse(e.input, e.config)) &&
                      n.postMessage({
                        workerId: u.WORKER_ID,
                        results: e,
                        finished: !0,
                      });
              }),
            ((a.prototype = Object.create(c.prototype)).constructor = a),
            ((l.prototype = Object.create(c.prototype)).constructor = l),
            ((f.prototype = Object.create(f.prototype)).constructor = f),
            ((d.prototype = Object.create(c.prototype)).constructor = d),
            u
          );
        }),
        void 0 === (i = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = i);
    },
    94621: (e, t, n) => {
      "use strict";
      n.d(t, {
        BN: () => p,
        Ej: () => v,
        UU: () => m,
        cY: () => h,
        we: () => d,
      });
      var r = n(28505),
        i = n(33559),
        o = n(90626),
        s = n(72739),
        u = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function c(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, i;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 !== r--; ) if (!c(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 !== r--; )
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 !== r--; ) {
            const n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function a(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function l(e, t) {
        const n = a(e);
        return Math.round(t * n) / n;
      }
      function f(e) {
        const t = o.useRef(e);
        return (
          u(() => {
            t.current = e;
          }),
          t
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: i = [],
            platform: d,
            elements: { reference: h, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: v,
            open: g,
          } = e,
          [y, b] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, E] = o.useState(i);
        c(w, i) || E(i);
        const [R, k] = o.useState(null),
          [_, x] = o.useState(null),
          C = o.useCallback((e) => {
            e !== M.current && ((M.current = e), k(e));
          }, []),
          I = o.useCallback((e) => {
            e !== A.current && ((A.current = e), x(e));
          }, []),
          S = h || R,
          O = p || _,
          M = o.useRef(null),
          A = o.useRef(null),
          L = o.useRef(y),
          T = null != v,
          D = f(v),
          P = f(d),
          N = f(g),
          F = o.useCallback(() => {
            if (!M.current || !A.current) return;
            const e = { placement: t, strategy: n, middleware: w };
            P.current && (e.platform = P.current),
              (0, r.rD)(M.current, A.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== N.current };
                q.current &&
                  !c(L.current, t) &&
                  ((L.current = t),
                  s.flushSync(() => {
                    b(t);
                  }));
              });
          }, [w, t, n, P, N]);
        u(() => {
          !1 === g &&
            L.current.isPositioned &&
            ((L.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        const q = o.useRef(!1);
        u(
          () => (
            (q.current = !0),
            () => {
              q.current = !1;
            }
          ),
          [],
        ),
          u(() => {
            if ((S && (M.current = S), O && (A.current = O), S && O)) {
              if (D.current) return D.current(S, O, F);
              F();
            }
          }, [S, O, F, D, T]);
        const j = o.useMemo(
            () => ({
              reference: M,
              floating: A,
              setReference: C,
              setFloating: I,
            }),
            [C, I],
          ),
          U = o.useMemo(() => ({ reference: S, floating: O }), [S, O]),
          K = o.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!U.floating) return e;
            const t = l(U.floating, y.x),
              r = l(U.floating, y.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(a(U.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, U.floating, y.x, y.y]);
        return o.useMemo(
          () => ({ ...y, update: F, refs: j, elements: U, floatingStyles: K }),
          [y, F, j, U, K],
        );
      }
      const h = (e, t) => ({ ...(0, i.cY)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      "use strict";
      n.d(t, {
        s3: () => rt,
        ph: () => he,
        kp: () => st,
        s9: () => lt,
        we: () => ft,
        iQ: () => dt,
        bv: () => vt,
        rm: () => pe,
        C1: () => kt,
        SV: () => Q,
        It: () => xt,
        lY: () => Ct,
      });
      var r = n(90626),
        i = n.t(r, 2),
        o = n(977);
      function s(e) {
        let t = e.activeElement;
        for (
          ;
          null !=
          (null == (n = t) || null == (n = n.shadowRoot)
            ? void 0
            : n.activeElement);
        ) {
          var n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function u(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, o.Ng)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function c() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function a() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + "/" + n;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function l(e) {
        return (
          !(0 !== e.mozInputSource || !e.isTrusted) ||
          (h() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function f(e) {
        return (
          !a().includes("jsdom/") &&
          ((!h() && 0 === e.width && 0 === e.height) ||
            (h() &&
              1 === e.width &&
              1 === e.height &&
              0 === e.pressure &&
              0 === e.detail &&
              "mouse" === e.pointerType) ||
            (e.width < 1 &&
              e.height < 1 &&
              0 === e.pressure &&
              0 === e.detail &&
              "touch" === e.pointerType))
        );
      }
      function d() {
        return /apple/i.test(navigator.vendor);
      }
      function h() {
        const e = /android/i;
        return e.test(c()) || e.test(a());
      }
      function p(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function m(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function v(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function g(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const y =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function b(e) {
        return (0, o.sb)(e) && e.matches(y);
      }
      function w(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function E(e) {
        return !!e && "combobox" === e.getAttribute("role") && b(e);
      }
      var R = n(58015),
        k = n(7850),
        _ = [
          "input:not([inert])",
          "select:not([inert])",
          "textarea:not([inert])",
          "a[href]:not([inert])",
          "button:not([inert])",
          "[tabindex]:not(slot):not([inert])",
          "audio[controls]:not([inert])",
          "video[controls]:not([inert])",
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          "details>summary:first-of-type:not([inert])",
          "details:not([inert])",
        ],
        x = _.join(","),
        C = "undefined" == typeof Element,
        I = C
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        S =
          !C && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        O = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var i =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === i || "true" === i || (n && t && e(t.parentNode));
        },
        M = function (e, t, n) {
          if (O(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(x));
          return t && I.call(e, x) && r.unshift(e), (r = r.filter(n));
        },
        A = function e(t, n, r) {
          for (var i = [], o = Array.from(t); o.length; ) {
            var s = o.shift();
            if (!O(s, !1))
              if ("SLOT" === s.tagName) {
                var u = s.assignedElements(),
                  c = e(u.length ? u : s.children, !0, r);
                r.flatten
                  ? i.push.apply(i, c)
                  : i.push({ scopeParent: s, candidates: c });
              } else {
                I.call(s, x) &&
                  r.filter(s) &&
                  (n || !t.includes(s)) &&
                  i.push(s);
                var a =
                    s.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(s)),
                  l =
                    !O(a, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
                if (a && l) {
                  var f = e(!0 === a ? s.children : a.children, !0, r);
                  r.flatten
                    ? i.push.apply(i, f)
                    : i.push({ scopeParent: s, candidates: f });
                } else o.unshift.apply(o, s.children);
              }
          }
          return i;
        },
        L = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        T = function (e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var t,
                  n =
                    null == e || null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              })(e)) &&
            !L(e)
            ? 0
            : e.tabIndex;
        },
        D = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        P = function (e) {
          return "INPUT" === e.tagName;
        },
        N = function (e) {
          return (
            (function (e) {
              return P(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || S(e),
                r = function (e) {
                  return n.querySelectorAll(
                    'input[type="radio"][name="' + e + '"]',
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                t = r(window.CSS.escape(e.name));
              else
                try {
                  t = r(e.name);
                } catch (e) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      e.message,
                    ),
                    !1
                  );
                }
              var i = (function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              })(t, e.form);
              return !i || i === e;
            })(e)
          );
        },
        F = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        q = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var i = I.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (I.call(i, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var o = e; e; ) {
                var s = e.parentElement,
                  u = S(e);
                if (s && !s.shadowRoot && !0 === r(s)) return F(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : s || u === e.ownerDocument
                    ? s
                    : u.host;
              }
              e = o;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  i,
                  o = e && S(e),
                  s = null === (t = o) || void 0 === t ? void 0 : t.host,
                  u = !1;
                if (o && o !== e)
                  for (
                    u = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (i = e.ownerDocument) &&
                        void 0 !== i &&
                        i.contains(e))
                    );
                    !u && s;
                  ) {
                    var c, a, l;
                    u = !(
                      null ===
                        (a = s =
                          null === (c = o = S(s)) || void 0 === c
                            ? void 0
                            : c.host) ||
                      void 0 === a ||
                      null === (l = a.ownerDocument) ||
                      void 0 === l ||
                      !l.contains(s)
                    );
                  }
                return u;
              })(e)
            )
              return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
          }
          return !1;
        },
        j = function (e, t) {
          return !(
            t.disabled ||
            O(t) ||
            (function (e) {
              return P(e) && "hidden" === e.type;
            })(t) ||
            q(t, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(t) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var t = e.parentElement; t; ) {
                  if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                      var r = t.children.item(n);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!I.call(t, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  t = t.parentElement;
                }
              return !1;
            })(t)
          );
        },
        U = function (e, t) {
          return !(N(t) || T(t) < 0 || !j(e, t));
        },
        K = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        z = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, i) {
              var o = !!t.scopeParent,
                s = o ? t.scopeParent : t,
                u = (function (e, t) {
                  var n = T(e);
                  return n < 0 && t && !L(e) ? 0 : n;
                })(s, o),
                c = o ? e(t.candidates) : s;
              0 === u
                ? o
                  ? n.push.apply(n, c)
                  : n.push(s)
                : r.push({
                    documentOrder: i,
                    tabIndex: u,
                    item: t,
                    isScope: o,
                    content: c,
                  });
            }),
            r
              .sort(D)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        B = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? A([e], t.includeContainer, {
                  filter: U.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: K,
                })
              : M(e, t.includeContainer, U.bind(null, t))),
            z(n)
          );
        },
        W = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== I.call(e, x) && U(t, e);
        },
        H = (n(72739), n(94621));
      function Q(e) {
        const t = r.useRef(void 0),
          n = r.useCallback((t) => {
            const n = e.map((e) => {
              if (null != e) {
                if ("function" == typeof e) {
                  const n = e,
                    r = n(t);
                  return "function" == typeof r
                    ? r
                    : () => {
                        n(null);
                      };
                }
                return (
                  (e.current = t),
                  () => {
                    e.current = null;
                  }
                );
              }
            });
            return () => {
              n.forEach((e) => (null == e ? void 0 : e()));
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  t.current && (t.current(), (t.current = void 0)),
                    null != e && (t.current = n(e));
                },
          e,
        );
      }
      const $ = { ...i },
        Y = $.useInsertionEffect || ((e) => e());
      function V(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          Y(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const J = "ArrowUp",
        G = "ArrowDown",
        X = "ArrowLeft",
        Z = "ArrowRight";
      function ee(e, t, n) {
        return Math.floor(e / t) !== n;
      }
      function te(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function ne(e, t) {
        return ie(e, { disabledIndices: t });
      }
      function re(e, t) {
        return ie(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t,
        });
      }
      function ie(e, t) {
        let {
          startingIndex: n = -1,
          decrement: r = !1,
          disabledIndices: i,
          amount: o = 1,
        } = void 0 === t ? {} : t;
        const s = e.current;
        let u = n;
        do {
          u += r ? -o : o;
        } while (u >= 0 && u <= s.length - 1 && ae(s, u, i));
        return u;
      }
      function oe(e, t) {
        let {
            event: n,
            orientation: r,
            loop: i,
            rtl: o,
            cols: s,
            disabledIndices: u,
            minIndex: c,
            maxIndex: a,
            prevIndex: l,
            stopEvent: f = !1,
          } = t,
          d = l;
        if (n.key === J) {
          if ((f && w(n), -1 === l)) d = a;
          else if (
            ((d = ie(e, {
              startingIndex: d,
              amount: s,
              decrement: !0,
              disabledIndices: u,
            })),
            i && (l - s < c || d < 0))
          ) {
            const e = l % s,
              t = a % s,
              n = a - (t - e);
            d = t === e ? a : t > e ? n : n - s;
          }
          te(e, d) && (d = l);
        }
        if (
          (n.key === G &&
            (f && w(n),
            -1 === l
              ? (d = c)
              : ((d = ie(e, {
                  startingIndex: l,
                  amount: s,
                  disabledIndices: u,
                })),
                i &&
                  l + s > a &&
                  (d = ie(e, {
                    startingIndex: (l % s) - s,
                    amount: s,
                    disabledIndices: u,
                  }))),
            te(e, d) && (d = l)),
          "both" === r)
        ) {
          const t = (0, R.RI)(l / s);
          n.key === (o ? X : Z) &&
            (f && w(n),
            l % s !== s - 1
              ? ((d = ie(e, { startingIndex: l, disabledIndices: u })),
                i &&
                  ee(d, s, t) &&
                  (d = ie(e, {
                    startingIndex: l - (l % s) - 1,
                    disabledIndices: u,
                  })))
              : i &&
                (d = ie(e, {
                  startingIndex: l - (l % s) - 1,
                  disabledIndices: u,
                })),
            ee(d, s, t) && (d = l)),
            n.key === (o ? Z : X) &&
              (f && w(n),
              l % s !== 0
                ? ((d = ie(e, {
                    startingIndex: l,
                    decrement: !0,
                    disabledIndices: u,
                  })),
                  i &&
                    ee(d, s, t) &&
                    (d = ie(e, {
                      startingIndex: l + (s - (l % s)),
                      decrement: !0,
                      disabledIndices: u,
                    })))
                : i &&
                  (d = ie(e, {
                    startingIndex: l + (s - (l % s)),
                    decrement: !0,
                    disabledIndices: u,
                  })),
              ee(d, s, t) && (d = l));
          const r = (0, R.RI)(a / s) === t;
          te(e, d) &&
            (d =
              i && r
                ? n.key === (o ? Z : X)
                  ? a
                  : ie(e, {
                      startingIndex: l - (l % s) - 1,
                      disabledIndices: u,
                    })
                : l);
        }
        return d;
      }
      function se(e, t, n) {
        const r = [];
        let i = 0;
        return (
          e.forEach((e, o) => {
            let { width: s, height: u } = e,
              c = !1;
            for (n && (i = 0); !c; ) {
              const e = [];
              for (let n = 0; n < s; n++)
                for (let r = 0; r < u; r++) e.push(i + n + r * t);
              (i % t) + s <= t && e.every((e) => null == r[e])
                ? (e.forEach((e) => {
                    r[e] = o;
                  }),
                  (c = !0))
                : i++;
            }
          }),
          [...r]
        );
      }
      function ue(e, t, n, r, i) {
        if (-1 === e) return -1;
        const o = n.indexOf(e),
          s = t[e];
        switch (i) {
          case "tl":
            return o;
          case "tr":
            return s ? o + s.width - 1 : o;
          case "bl":
            return s ? o + (s.height - 1) * r : o;
          case "br":
            return n.lastIndexOf(e);
        }
      }
      function ce(e, t) {
        return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
      }
      function ae(e, t, n) {
        if (n) return n.includes(t);
        const r = e[t];
        return (
          null == r ||
          r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled")
        );
      }
      var le = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function fe(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ||
          n & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING ||
              n & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const de = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function he(e) {
        const { children: t, elementsRef: n, labelsRef: i } = e,
          [o, s] = r.useState(() => new Set()),
          u = r.useCallback((e) => {
            s((t) => new Set(t).add(e));
          }, []),
          c = r.useCallback((e) => {
            s((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          a = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(o.keys())
                .sort(fe)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [o]);
        return (0, k.jsx)(de.Provider, {
          value: r.useMemo(
            () => ({
              register: u,
              unregister: c,
              map: a,
              elementsRef: n,
              labelsRef: i,
            }),
            [u, c, a, n, i],
          ),
          children: t,
        });
      }
      function pe(e) {
        void 0 === e && (e = {});
        const { label: t } = e,
          {
            register: n,
            unregister: i,
            map: o,
            elementsRef: s,
            labelsRef: u,
          } = r.useContext(de),
          [c, a] = r.useState(null),
          l = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((l.current = e), null !== c && ((s.current[c] = e), u))) {
                var n;
                const r = void 0 !== t;
                u.current[c] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [c, s, u, t],
          );
        return (
          le(() => {
            const e = l.current;
            if (e)
              return (
                n(e),
                () => {
                  i(e);
                }
              );
          }, [n, i]),
          le(() => {
            const e = l.current ? o.get(l.current) : null;
            null != e && a(e);
          }, [o]),
          r.useMemo(() => ({ ref: f, index: null == c ? -1 : c }), [c, f])
        );
      }
      const me = [X, Z],
        ve = [J, G];
      let ge = !1,
        ye = 0;
      const be = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ye++;
      const we =
        $.useId ||
        function () {
          const [e, t] = r.useState(() => (ge ? be() : void 0));
          return (
            le(() => {
              null == e && t(be());
            }, []),
            r.useEffect(() => {
              ge = !0;
            }, []),
            e
          );
        };
      function Ee() {
        const e = new Map();
        return {
          emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach((e) => e(n));
          },
          on(t, n) {
            e.set(t, [...(e.get(t) || []), n]);
          },
          off(t, n) {
            var r;
            e.set(
              t,
              (null == (r = e.get(t)) ? void 0 : r.filter((e) => e !== n)) ||
                [],
            );
          },
        };
      }
      const Re = r.createContext(null),
        ke = r.createContext(null),
        _e = () => {
          var e;
          return (null == (e = r.useContext(Re)) ? void 0 : e.id) || null;
        },
        xe = () => r.useContext(ke);
      function Ce(e) {
        return "data-floating-ui-" + e;
      }
      function Ie(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Se(e) {
        const t = (0, r.useRef)(e);
        return (
          le(() => {
            t.current = e;
          }),
          t
        );
      }
      let Oe = 0;
      function Me(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: i = !1,
        } = t;
        r && cancelAnimationFrame(Oe);
        const o = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        i ? o() : (Oe = requestAnimationFrame(o));
      }
      function Ae(e, t) {
        var n;
        let r = [],
          i = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; i; ) {
          const t = e.find((e) => e.id === i);
          (i = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function Le(e, t) {
        let n = e.filter((e) => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter((e) => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some((t) => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let Te = new WeakMap(),
        De = new WeakSet(),
        Pe = {},
        Ne = 0;
      const Fe = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        qe = (e) => e && (e.host || qe(e.parentNode)),
        je = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = qe(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function Ue(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = m(e[0]).body;
        return (function (e, t, n, r) {
          const i = "data-floating-ui-inert",
            s = r ? "inert" : n ? "aria-hidden" : null,
            u = je(t, e),
            c = new Set(),
            a = new Set(u),
            l = [];
          Pe[i] || (Pe[i] = new WeakMap());
          const f = Pe[i];
          return (
            u.forEach(function e(t) {
              t && !c.has(t) && (c.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !a.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, o.mq)(t))
                    if (c.has(t)) e(t);
                    else {
                      const e = s ? t.getAttribute(s) : null,
                        n = null !== e && "false" !== e,
                        r = Te.get(t) || 0,
                        o = s ? r + 1 : r,
                        u = (f.get(t) || 0) + 1;
                      Te.set(t, o),
                        f.set(t, u),
                        l.push(t),
                        1 === o && n && De.add(t),
                        1 === u && t.setAttribute(i, ""),
                        !n && s && t.setAttribute(s, "true");
                    }
                });
            })(t),
            c.clear(),
            Ne++,
            () => {
              l.forEach((e) => {
                const t = Te.get(e) || 0,
                  n = s ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                Te.set(e, n),
                  f.set(e, r),
                  n || (!De.has(e) && s && e.removeAttribute(s), De.delete(e)),
                  r || e.removeAttribute(i);
              }),
                Ne--,
                Ne ||
                  ((Te = new WeakMap()),
                  (Te = new WeakMap()),
                  (De = new WeakSet()),
                  (Pe = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const Ke = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function ze(e, t) {
        const n = B(e, Ke());
        "prev" === t && n.reverse();
        const r = n.indexOf(s(m(e)));
        return n.slice(r + 1)[0];
      }
      function Be() {
        return ze(document.body, "next");
      }
      function We() {
        return ze(document.body, "prev");
      }
      function He(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !u(n, r);
      }
      const Qe = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: 0,
          left: 0,
        },
        $e = r.forwardRef(function (e, t) {
          const [n, i] = r.useState();
          le(() => {
            d() && i("button");
          }, []);
          const o = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Ce("focus-guard")]: "",
            style: Qe,
          };
          return (0, k.jsx)("span", { ...e, ...o });
        }),
        Ye = r.createContext(null);
      const Ve = () => r.useContext(Ye),
        Je = "data-floating-ui-focusable";
      function Ge(e) {
        return e
          ? e.hasAttribute(Je)
            ? e
            : e.querySelector("[" + Je + "]") || e
          : null;
      }
      function Xe(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const Ze = 20;
      let et = [];
      function tt() {
        return et
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const nt = r.forwardRef(function (e, t) {
        return (0, k.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Qe,
        });
      });
      function rt(e) {
        const {
            context: t,
            children: n,
            disabled: i = !1,
            order: c = ["content"],
            guards: a = !0,
            initialFocus: d = 0,
            returnFocus: h = !0,
            restoreFocus: p = !1,
            modal: v = !0,
            visuallyHiddenDismiss: y = !1,
            closeOnFocusOut: b = !0,
            outsideElementsInert: R = !1,
          } = e,
          {
            open: _,
            onOpenChange: x,
            events: C,
            dataRef: I,
            elements: { domReference: S, floating: O },
          } = t,
          M = V(() => {
            var e;
            return null == (e = I.current.floatingContext) ? void 0 : e.nodeId;
          }),
          A = "number" == typeof d && d < 0,
          L = E(S) && A,
          T = Fe(),
          D = !T || a,
          P = !D || (T && R),
          N = Se(c),
          F = Se(d),
          q = Se(h),
          j = xe(),
          U = Ve(),
          K = r.useRef(null),
          z = r.useRef(null),
          H = r.useRef(!1),
          Q = r.useRef(!1),
          $ = r.useRef(-1),
          Y = null != U,
          J = Ge(O),
          G = V(function (e) {
            return void 0 === e && (e = J), e ? B(e, Ke()) : [];
          }),
          X = V((e) => {
            const t = G(e);
            return N.current
              .map((e) =>
                S && "reference" === e ? S : J && "floating" === e ? J : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (i) return;
          if (!v) return;
          function e(e) {
            if ("Tab" === e.key) {
              u(J, s(m(J))) && 0 === G().length && !L && w(e);
              const t = X(),
                n = g(e);
              "reference" === N.current[0] &&
                n === S &&
                (w(e), e.shiftKey ? Me(t[t.length - 1]) : Me(t[1])),
                "floating" === N.current[1] &&
                  n === J &&
                  e.shiftKey &&
                  (w(e), Me(t[0]));
            }
          }
          const t = m(J);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [i, S, J, v, N, L, G, X]),
          r.useEffect(() => {
            if (!i && O)
              return (
                O.addEventListener("focusin", e),
                () => {
                  O.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = g(e),
                n = G().indexOf(t);
              -1 !== n && ($.current = n);
            }
          }, [i, O, G]),
          r.useEffect(() => {
            if (!i && b)
              return O && (0, o.sb)(S)
                ? (S.addEventListener("focusout", t),
                  S.addEventListener("pointerdown", e),
                  O.addEventListener("focusout", t),
                  () => {
                    S.removeEventListener("focusout", t),
                      S.removeEventListener("pointerdown", e),
                      O.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (Q.current = !0),
                setTimeout(() => {
                  Q.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = M(),
                  r = !(
                    u(S, t) ||
                    u(O, t) ||
                    u(t, O) ||
                    u(null == U ? void 0 : U.portalNode, t) ||
                    (null != t && t.hasAttribute(Ce("focus-guard"))) ||
                    (j &&
                      (Le(j.nodesRef.current, n).find((e) => {
                        var n, r;
                        return (
                          u(
                            null == (n = e.context)
                              ? void 0
                              : n.elements.floating,
                            t,
                          ) ||
                          u(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            t,
                          )
                        );
                      }) ||
                        Ae(j.nodesRef.current, n).find((e) => {
                          var n, r, i;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              Ge(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(t) ||
                            (null == (i = e.context)
                              ? void 0
                              : i.elements.domReference) === t
                          );
                        })))
                  );
                if (p && r && s(m(J)) === m(J).body) {
                  (0, o.sb)(J) && J.focus();
                  const e = $.current,
                    t = G(),
                    n = t[e] || t[t.length - 1] || J;
                  (0, o.sb)(n) && n.focus();
                }
                (!L && v) ||
                  !t ||
                  !r ||
                  Q.current ||
                  t === tt() ||
                  ((H.current = !0), x(!1, e, "focus-out"));
              });
            }
          }, [i, S, O, J, v, j, U, x, b, p, G, L, M]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          te = Xe([Z, null == U ? void 0 : U.beforeInsideRef]),
          ne = Xe([ee, null == U ? void 0 : U.afterInsideRef]);
        function re(e) {
          return !i && y && v
            ? (0, k.jsx)(nt, {
                ref: "start" === e ? K : z,
                onClick: (e) => x(!1, e.nativeEvent),
                children: "string" == typeof y ? y : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (i) return;
          if (!O) return;
          const t = Array.from(
              (null == U || null == (e = U.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Ce("portal") + "]")) || [],
            ),
            n =
              j && !v
                ? Ae(null == j ? void 0 : j.nodesRef.current, M()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              O,
              ...t,
              ...n,
              K.current,
              z.current,
              Z.current,
              ee.current,
              null == U ? void 0 : U.beforeOutsideRef.current,
              null == U ? void 0 : U.afterOutsideRef.current,
              N.current.includes("reference") || L ? S : null,
            ].filter((e) => null != e),
            o = v || L ? Ue(r, !P, P) : Ue(r);
          return () => {
            o();
          };
        }, [i, S, O, v, N, U, L, D, P, j, M]),
          le(() => {
            if (i || !(0, o.sb)(J)) return;
            const e = s(m(J));
            queueMicrotask(() => {
              const t = X(J),
                n = F.current,
                r = ("number" == typeof n ? t[n] : n.current) || J,
                i = u(J, e);
              A || i || !_ || Me(r, { preventScroll: r === J });
            });
          }, [i, _, J, A, X, F]),
          le(() => {
            if (i || !J) return;
            let e = !1,
              t = !1;
            const n = m(J),
              r = s(n);
            let c = I.current.openEvent;
            var a;
            function d(n) {
              let { open: r, reason: i, event: o, nested: s } = n;
              if (
                (r && (c = o),
                "escape-key" === i && (t = !0),
                ["hover", "safe-polygon"].includes(i) &&
                  "mouseleave" === o.type &&
                  (H.current = !0),
                "outside-press" === i)
              )
                if (s) (H.current = !1), (e = !0);
                else if (l(o) || f(o)) H.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((H.current = !1), (e = !0)) : (H.current = !0);
                }
            }
            (a = r),
              (et = et.filter((e) => e.isConnected)),
              a &&
                "body" !== (0, o.mq)(a) &&
                (et.push(a), et.length > Ze && (et = et.slice(-Ze))),
              C.on("openchange", d);
            const h = n.createElement("span");
            return (
              h.setAttribute("tabindex", "-1"),
              h.setAttribute("aria-hidden", "true"),
              Object.assign(h.style, Qe),
              Y && S && S.insertAdjacentElement("afterend", h),
              () => {
                C.off("openchange", d);
                const r = s(n),
                  i =
                    u(O, r) ||
                    (j &&
                      Le(j.nodesRef.current, M()).some((e) => {
                        var t;
                        return u(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (i || (c && ["click", "mousedown"].includes(c.type))) &&
                  (t = !0);
                const a =
                  "boolean" == typeof q.current
                    ? t && S
                      ? S
                      : tt() || h
                    : q.current.current || h;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Ke();
                    return W(e, t) ? e : B(e, t)[0] || e;
                  })(a);
                  q.current &&
                    !H.current &&
                    (0, o.sb)(t) &&
                    (t === r || r === n.body || i) &&
                    t.focus({ preventScroll: e }),
                    h.remove();
                });
              }
            );
          }, [i, O, J, q, I, C, j, Y, S, M]),
          r.useEffect(() => {
            queueMicrotask(() => {
              H.current = !1;
            });
          }, [i]),
          le(() => {
            if (!i && U)
              return (
                U.setFocusManagerState({
                  modal: v,
                  closeOnFocusOut: b,
                  open: _,
                  onOpenChange: x,
                  domReference: S,
                }),
                () => {
                  U.setFocusManagerState(null);
                }
              );
          }, [i, U, v, _, x, b, S]),
          le(() => {
            if (i) return;
            if (!J) return;
            if ("function" != typeof MutationObserver) return;
            if (A) return;
            const e = () => {
              const e = J.getAttribute("tabindex"),
                t = G(),
                n = s(m(O)),
                r = t.indexOf(n);
              -1 !== r && ($.current = r),
                N.current.includes("floating") || (n !== S && 0 === t.length)
                  ? "0" !== e && J.setAttribute("tabindex", "0")
                  : "-1" !== e && J.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe(J, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [i, O, J, S, N, G, A]);
        const ie = !i && D && (!v || !L) && (Y || v);
        return (0, k.jsxs)(k.Fragment, {
          children: [
            ie &&
              (0, k.jsx)($e, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (v) {
                    const e = X();
                    Me("reference" === c[0] ? e[0] : e[e.length - 1]);
                  } else if (null != U && U.preserveTabOrder && U.portalNode)
                    if (((H.current = !1), He(e, U.portalNode))) {
                      const e = Be() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = U.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !L && re("start"),
            n,
            re("end"),
            ie &&
              (0, k.jsx)($e, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (v) Me(X()[0]);
                  else if (null != U && U.preserveTabOrder && U.portalNode)
                    if ((b && (H.current = !0), He(e, U.portalNode))) {
                      const e = We() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = U.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function it(e) {
        return (0, o.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function ot(e) {
        return b(e);
      }
      function st(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: i,
            dataRef: o,
            elements: { domReference: s },
          } = e,
          {
            enabled: u = !0,
            event: c = "click",
            toggle: a = !0,
            ignoreMouse: l = !1,
            keyboardHandlers: f = !0,
            stickIfOpen: d = !0,
          } = t,
          h = r.useRef(),
          m = r.useRef(!1),
          v = r.useMemo(
            () => ({
              onPointerDown(e) {
                h.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = h.current;
                0 === e.button &&
                  "click" !== c &&
                  ((p(t, !0) && l) ||
                    (!n ||
                    !a ||
                    (o.current.openEvent &&
                      d &&
                      "mousedown" !== o.current.openEvent.type)
                      ? (e.preventDefault(), i(!0, e.nativeEvent, "click"))
                      : i(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = h.current;
                "mousedown" === c && h.current
                  ? (h.current = void 0)
                  : (p(t, !0) && l) ||
                    (!n ||
                    !a ||
                    (o.current.openEvent &&
                      d &&
                      "click" !== o.current.openEvent.type)
                      ? i(!0, e.nativeEvent, "click")
                      : i(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (h.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    it(e) ||
                    (" " !== e.key ||
                      ot(s) ||
                      (e.preventDefault(), (m.current = !0)),
                    "Enter" === e.key && i(!n || !a, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  it(e) ||
                  ot(s) ||
                  (" " === e.key &&
                    m.current &&
                    ((m.current = !1), i(!n || !a, e.nativeEvent, "click")));
              },
            }),
            [o, s, c, l, f, i, n, d, a],
          );
        return r.useMemo(() => (u ? { reference: v } : {}), [u, v]);
      }
      const ut = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        ct = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        at = (e) => {
          var t, n;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function lt(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: i, elements: s, dataRef: c } = e,
          {
            enabled: a = !0,
            escapeKey: l = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: h = !1,
            referencePressEvent: p = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: b,
            capture: w,
          } = t,
          E = xe(),
          R = V("function" == typeof f ? f : () => !1),
          k = "function" == typeof f ? R : f,
          _ = r.useRef(!1),
          x = r.useRef(!1),
          { escapeKey: C, outsidePress: I } = at(b),
          { escapeKey: S, outsidePress: O } = at(w),
          M = r.useRef(!1),
          A = V((e) => {
            var t;
            if (!n || !a || !l || "Escape" !== e.key) return;
            if (M.current) return;
            const r =
                null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
              o = E ? Le(E.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), o.length > 0)) {
              let e = !0;
              if (
                (o.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__escapeKeyBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            i(
              !1,
              (function (e) {
                return "nativeEvent" in e;
              })(e)
                ? e.nativeEvent
                : e,
              "escape-key",
            );
          }),
          L = V((e) => {
            var t;
            const n = () => {
              var t;
              A(e), null == (t = g(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = g(e)) || t.addEventListener("keydown", n);
          }),
          T = V((e) => {
            var t;
            const n = _.current;
            _.current = !1;
            const r = x.current;
            if (((x.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof k && !k(e)) return;
            const a = g(e),
              l = "[" + Ce("inert") + "]",
              f = m(s.floating).querySelectorAll(l);
            let h = (0, o.vq)(a) ? a : null;
            for (; h && !(0, o.eu)(h); ) {
              const e = (0, o.$4)(h);
              if ((0, o.eu)(e) || !(0, o.vq)(e)) break;
              h = e;
            }
            if (
              f.length &&
              (0, o.vq)(a) &&
              !a.matches("html,body") &&
              !u(a, s.floating) &&
              Array.from(f).every((e) => !u(h, e))
            )
              return;
            if ((0, o.sb)(a) && N) {
              const t = (0, o.eu)(a),
                n = (0, o.L9)(a),
                r = /auto|scroll/,
                i = t || r.test(n.overflowX),
                s = t || r.test(n.overflowY),
                u = i && a.clientWidth > 0 && a.scrollWidth > a.clientWidth,
                c = s && a.clientHeight > 0 && a.scrollHeight > a.clientHeight,
                l = "rtl" === n.direction,
                f =
                  c &&
                  (l
                    ? e.offsetX <= a.offsetWidth - a.clientWidth
                    : e.offsetX > a.clientWidth),
                d = u && e.offsetY > a.clientHeight;
              if (f || d) return;
            }
            const p =
                null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
              y =
                E &&
                Le(E.nodesRef.current, p).some((t) => {
                  var n;
                  return v(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (v(e, s.floating) || v(e, s.domReference) || y) return;
            const b = E ? Le(E.nodesRef.current, p) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            i(!1, e, "outside-press");
          }),
          D = V((e) => {
            var t;
            const n = () => {
              var t;
              T(e), null == (t = g(e)) || t.removeEventListener(d, n);
            };
            null == (t = g(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !a) return;
          (c.current.__escapeKeyBubbles = C),
            (c.current.__outsidePressBubbles = I);
          let e = -1;
          function t(e) {
            i(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (M.current = !0);
          }
          function u() {
            e = window.setTimeout(
              () => {
                M.current = !1;
              },
              (0, o.Tc)() ? 5 : 0,
            );
          }
          const f = m(s.floating);
          l &&
            (f.addEventListener("keydown", S ? L : A, S),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", u)),
            k && f.addEventListener(d, O ? D : T, O);
          let h = [];
          return (
            y &&
              ((0, o.vq)(s.domReference) && (h = (0, o.v9)(s.domReference)),
              (0, o.vq)(s.floating) && (h = h.concat((0, o.v9)(s.floating))),
              !(0, o.vq)(s.reference) &&
                s.reference &&
                s.reference.contextElement &&
                (h = h.concat((0, o.v9)(s.reference.contextElement)))),
            (h = h.filter((e) => {
              var t;
              return (
                e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            h.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              l &&
                (f.removeEventListener("keydown", S ? L : A, S),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", u)),
                k && f.removeEventListener(d, O ? D : T, O),
                h.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [c, s, l, k, d, n, i, y, a, C, I, A, S, L, T, O, D]),
          r.useEffect(() => {
            _.current = !1;
          }, [k, d]);
        const P = r.useMemo(
            () => ({
              onKeyDown: A,
              ...(h && {
                [ut[p]]: (e) => {
                  i(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== p && {
                  onClick(e) {
                    i(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [A, i, h, p],
          ),
          N = r.useMemo(
            () => ({
              onKeyDown: A,
              onMouseDown() {
                x.current = !0;
              },
              onMouseUp() {
                x.current = !0;
              },
              [ct[d]]: () => {
                _.current = !0;
              },
            }),
            [A, d],
          );
        return r.useMemo(
          () => (a ? { reference: P, floating: N } : {}),
          [a, P, N],
        );
      }
      function ft(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: i } = e,
              o = we(),
              s = r.useRef({}),
              [u] = r.useState(() => Ee()),
              c = null != _e(),
              [a, l] = r.useState(i.reference),
              f = V((e, t, r) => {
                (s.current.openEvent = e ? t : void 0),
                  u.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: c,
                  }),
                  null == n || n(e, t, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: l }), []),
              h = r.useMemo(
                () => ({
                  reference: a || i.reference || null,
                  floating: i.floating || null,
                  domReference: i.reference,
                }),
                [a, i.reference, i.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: s,
                open: t,
                onOpenChange: f,
                elements: h,
                events: u,
                floatingId: o,
                refs: d,
              }),
              [t, f, h, u, o, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          i = e.rootContext || n,
          s = i.elements,
          [u, c] = r.useState(null),
          [a, l] = r.useState(null),
          f = (null == s ? void 0 : s.domReference) || u,
          d = r.useRef(null),
          h = xe();
        le(() => {
          f && (d.current = f);
        }, [f]);
        const p = (0, H.we)({
            ...e,
            elements: { ...s, ...(a && { reference: a }) },
          }),
          m = r.useCallback(
            (e) => {
              const t = (0, o.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              l(t), p.refs.setReference(t);
            },
            [p.refs],
          ),
          v = r.useCallback(
            (e) => {
              ((0, o.vq)(e) || null === e) && ((d.current = e), c(e)),
                ((0, o.vq)(p.refs.reference.current) ||
                  null === p.refs.reference.current ||
                  (null !== e && !(0, o.vq)(e))) &&
                  p.refs.setReference(e);
            },
            [p.refs],
          ),
          g = r.useMemo(
            () => ({
              ...p.refs,
              setReference: v,
              setPositionReference: m,
              domReference: d,
            }),
            [p.refs, v, m],
          ),
          y = r.useMemo(
            () => ({ ...p.elements, domReference: f }),
            [p.elements, f],
          ),
          b = r.useMemo(
            () => ({ ...p, ...i, refs: g, elements: y, nodeId: t }),
            [p, g, y, t, i],
          );
        return (
          le(() => {
            i.dataRef.current.floatingContext = b;
            const e =
              null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = b);
          }),
          r.useMemo(
            () => ({ ...p, context: b, refs: g, elements: y }),
            [p, g, y, b],
          )
        );
      }
      function dt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: i,
            events: a,
            dataRef: l,
            elements: h,
          } = e,
          { enabled: p = !0, visibleOnly: v = !0 } = t,
          y = r.useRef(!1),
          w = r.useRef(-1),
          E = r.useRef(!0);
        r.useEffect(() => {
          if (!p) return;
          const e = (0, o.zk)(h.domReference);
          function t() {
            !n &&
              (0, o.sb)(h.domReference) &&
              h.domReference === s(m(h.domReference)) &&
              (y.current = !0);
          }
          function r() {
            E.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [h.domReference, n, p]),
          r.useEffect(() => {
            if (p)
              return (
                a.on("openchange", e),
                () => {
                  a.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (y.current = !0);
            }
          }, [a, p]),
          r.useEffect(
            () => () => {
              Ie(w);
            },
            [],
          );
        const R = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (E.current = !1);
            },
            onMouseLeave() {
              y.current = !1;
            },
            onFocus(e) {
              if (y.current) return;
              const t = g(e.nativeEvent);
              if (v && (0, o.vq)(t))
                try {
                  if (
                    d() &&
                    c().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!E.current && !b(t)) return;
                }
              i(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              y.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, o.vq)(t) &&
                  t.hasAttribute(Ce("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              w.current = window.setTimeout(() => {
                var e;
                const o = s(
                  h.domReference ? h.domReference.ownerDocument : document,
                );
                (t || o !== h.domReference) &&
                  (u(
                    null == (e = l.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    o,
                  ) ||
                    u(h.domReference, o) ||
                    r ||
                    i(!1, n, "focus"));
              });
            },
          }),
          [l, h.domReference, i, v],
        );
        return r.useMemo(() => (p ? { reference: R } : {}), [p, R]);
      }
      const ht = "active",
        pt = "selected";
      function mt(e, t, n) {
        const r = new Map(),
          i = "item" === n;
        let o = e;
        if (i && e) {
          const { [ht]: t, [pt]: n, ...r } = e;
          o = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [Je]: "" }),
          ...o,
          ...t
            .map((t) => {
              const r = t ? t[n] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) =>
                t
                  ? (Object.entries(t).forEach((t) => {
                      let [n, o] = t;
                      var s;
                      (i && [ht, pt].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof o &&
                              (null == (s = r.get(n)) || s.push(o),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    i = new Array(t),
                                    o = 0;
                                  o < t;
                                  o++
                                )
                                  i[o] = arguments[o];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...i))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = o));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function vt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          i = e.map((e) => (null == e ? void 0 : e.item)),
          o = r.useCallback((t) => mt(t, e, "reference"), t),
          s = r.useCallback((t) => mt(t, e, "floating"), n),
          u = r.useCallback((t) => mt(t, e, "item"), i);
        return r.useMemo(
          () => ({
            getReferenceProps: o,
            getFloatingProps: s,
            getItemProps: u,
          }),
          [o, s, u],
        );
      }
      const gt = "Escape";
      function yt(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function bt(e, t) {
        return yt(t, e === J || e === G, e === X || e === Z);
      }
      function wt(e, t, n) {
        return (
          yt(t, e === G, n ? e === X : e === Z) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function Et(e, t, n) {
        return yt(t, n ? e === X : e === Z, e === G);
      }
      function Rt(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === gt
          : yt(t, n ? e === Z : e === X, e === J);
      }
      function kt(e, t) {
        const { open: n, onOpenChange: i, elements: c } = e,
          {
            listRef: a,
            activeIndex: d,
            onNavigate: h = () => {},
            enabled: p = !0,
            selectedIndex: v = null,
            allowEscape: g = !1,
            loop: y = !1,
            nested: b = !1,
            rtl: R = !1,
            virtual: k = !1,
            focusItemOnOpen: _ = "auto",
            focusItemOnHover: x = !0,
            openOnArrowKeyDown: C = !0,
            disabledIndices: I,
            orientation: S = "vertical",
            cols: O = 1,
            scrollItemIntoView: M = !0,
            virtualItemRef: A,
            itemSizes: L,
            dense: T = !1,
          } = t;
        const D = Se(Ge(c.floating)),
          P = _e(),
          N = xe();
        le(() => {
          e.dataRef.current.orientation = S;
        }, [e, S]);
        const F = V(() => {
            h(-1 === U.current ? null : U.current);
          }),
          q = E(c.domReference),
          j = r.useRef(_),
          U = r.useRef(null != v ? v : -1),
          K = r.useRef(null),
          z = r.useRef(!0),
          B = r.useRef(F),
          W = r.useRef(!!c.floating),
          H = r.useRef(n),
          Q = r.useRef(!1),
          $ = r.useRef(!1),
          Y = Se(I),
          J = Se(n),
          ee = Se(M),
          fe = Se(v),
          [de, he] = r.useState(),
          [pe, me] = r.useState(),
          ve = V(() => {
            function e(e) {
              k
                ? (he(e.id),
                  null == N || N.events.emit("virtualfocus", e),
                  A && (A.current = e))
                : Me(e, { sync: Q.current, preventScroll: !0 });
            }
            const t = a.current[U.current];
            t && e(t);
            (Q.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = a.current[U.current] || t;
              if (!n) return;
              t || e(n);
              const r = ee.current;
              r &&
                ye &&
                ($.current || !z.current) &&
                (null == n.scrollIntoView ||
                  n.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        le(() => {
          p &&
            (n && c.floating
              ? j.current &&
                null != v &&
                (($.current = !0), (U.current = v), F())
              : W.current && ((U.current = -1), B.current()));
        }, [p, n, c.floating, v, F]),
          le(() => {
            if (p && n && c.floating)
              if (null == d) {
                if (((Q.current = !1), null != fe.current)) return;
                if (
                  (W.current && ((U.current = -1), ve()),
                  (!H.current || !W.current) &&
                    j.current &&
                    (null != K.current ||
                      (!0 === j.current && null == K.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == a.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (U.current =
                        null == K.current || wt(K.current, S, R) || b
                          ? ne(a, Y.current)
                          : re(a, Y.current)),
                        (K.current = null),
                        F();
                  };
                  t();
                }
              } else te(a, d) || ((U.current = d), ve(), ($.current = !1));
          }, [p, n, c.floating, d, fe, b, a, S, R, F, ve, Y]),
          le(() => {
            var e;
            if (!p || c.floating || !N || k || !W.current) return;
            const t = N.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === P)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = s(m(c.floating)),
              i = t.some((e) => e.context && u(e.context.elements.floating, r));
            n && !i && z.current && n.focus({ preventScroll: !0 });
          }, [p, c.floating, N, P, k]),
          le(() => {
            if (p && N && k && !P)
              return (
                N.events.on("virtualfocus", e),
                () => {
                  N.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              me(e.id), A && (A.current = e);
            }
          }, [p, N, k, P, A]),
          le(() => {
            (B.current = F), (H.current = n), (W.current = !!c.floating);
          }),
          le(() => {
            n || (K.current = null);
          }, [n]);
        const ge = null != d,
          ye = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = a.current.indexOf(e);
              -1 !== t && U.current !== t && ((U.current = t), F());
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                (Q.current = !0), e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(x && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  (Q.current = !0), ($.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  z.current &&
                    "touch" !== t &&
                    ((Q.current = !0),
                    (U.current = -1),
                    F(),
                    k ||
                      null == (n = D.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, D, x, a, F, k]),
          be = V((e) => {
            if (((z.current = !1), (Q.current = !0), 229 === e.which)) return;
            if (!J.current && e.currentTarget === D.current) return;
            if (b && Rt(e.key, S, R, O))
              return (
                w(e),
                i(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, o.sb)(c.domReference) &&
                  (k
                    ? null == N || N.events.emit("virtualfocus", c.domReference)
                    : c.domReference.focus())
                )
              );
            const t = U.current,
              r = ne(a, I),
              u = re(a, I);
            if (
              (q ||
                ("Home" === e.key && (w(e), (U.current = r), F()),
                "End" === e.key && (w(e), (U.current = u), F())),
              O > 1)
            ) {
              const t =
                  L ||
                  Array.from({ length: a.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = se(t, O, T),
                i = n.findIndex((e) => null != e && !ae(a.current, e, I)),
                o = n.reduce(
                  (e, t, n) => (null == t || ae(a.current, t, I) ? e : n),
                  -1,
                ),
                s =
                  n[
                    oe(
                      {
                        current: n.map((e) =>
                          null != e ? a.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: S,
                        loop: y,
                        rtl: R,
                        cols: O,
                        disabledIndices: ce(
                          [
                            ...(I ||
                              a.current.map((e, t) =>
                                ae(a.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: i,
                        maxIndex: o,
                        prevIndex: ue(
                          U.current > u ? r : U.current,
                          t,
                          n,
                          O,
                          e.key === G
                            ? "bl"
                            : e.key === (R ? X : Z)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != s && ((U.current = s), F()), "both" === S)) return;
            }
            if (bt(e.key, S)) {
              if (
                (w(e),
                n && !k && s(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (U.current = wt(e.key, S, R) ? r : u), void F();
              wt(e.key, S, R)
                ? (U.current = y
                    ? t >= u
                      ? g && t !== a.current.length
                        ? -1
                        : r
                      : ie(a, { startingIndex: t, disabledIndices: I })
                    : Math.min(
                        u,
                        ie(a, { startingIndex: t, disabledIndices: I }),
                      ))
                : (U.current = y
                    ? t <= r
                      ? g && -1 !== t
                        ? a.current.length
                        : u
                      : ie(a, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: I,
                        })
                    : Math.max(
                        r,
                        ie(a, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: I,
                        }),
                      )),
                te(a, U.current) && (U.current = -1),
                F();
            }
          }),
          we = r.useMemo(
            () => k && n && ge && { "aria-activedescendant": pe || de },
            [k, n, ge, pe, de],
          ),
          Ee = r.useMemo(
            () => ({
              "aria-orientation": "both" === S ? void 0 : S,
              ...(q ? {} : we),
              onKeyDown: be,
              onPointerMove() {
                z.current = !0;
              },
            }),
            [we, be, S, q],
          ),
          Re = r.useMemo(() => {
            function e(e) {
              "auto" === _ && l(e.nativeEvent) && (j.current = !0);
            }
            function t(e) {
              (j.current = _),
                "auto" === _ && f(e.nativeEvent) && (j.current = !0);
            }
            return {
              ...we,
              onKeyDown(e) {
                var t;
                z.current = !1;
                const r = e.key.startsWith("Arrow"),
                  o = ["Home", "End"].includes(e.key),
                  s = r || o,
                  u =
                    null == N ||
                    null == (t = N.nodesRef.current.find((e) => e.id === P)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  c = Et(e.key, S, R),
                  l = Rt(e.key, S, R, O),
                  f = Et(e.key, u, R),
                  d = bt(e.key, S),
                  h = (b ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (k && n) {
                  const t =
                      null == N
                        ? void 0
                        : N.nodesRef.current.find((e) => null == e.parentId),
                    n =
                      N && t
                        ? (function (e, t) {
                            let n,
                              r = -1;
                            return (
                              (function t(i, o) {
                                o > r && ((n = i), (r = o)),
                                  Le(e, i).forEach((e) => {
                                    t(e.id, o + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(N.nodesRef.current, t.id)
                        : null;
                  if (s && n && A) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (c || l) {
                      var p, m;
                      const r =
                          (null == (p = n.context)
                            ? void 0
                            : p.elements.domReference) === e.currentTarget,
                        i =
                          l && !r
                            ? null == (m = n.context)
                              ? void 0
                              : m.elements.domReference
                            : c
                              ? a.current.find(
                                  (e) => (null == e ? void 0 : e.id) === de,
                                )
                              : null;
                      i && (w(e), i.dispatchEvent(t), me(void 0));
                    }
                    var g;
                    if ((d || o) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          w(e),
                          void (
                            null == (g = n.context.elements.domReference) ||
                            g.dispatchEvent(t)
                          )
                        );
                  }
                  return be(e);
                }
                if (n || C || !r) {
                  if (h) {
                    const t = bt(e.key, u);
                    K.current = b && t ? null : e.key;
                  }
                  b
                    ? f &&
                      (w(e),
                      n
                        ? ((U.current = ne(a, Y.current)), F())
                        : i(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != v && (U.current = v),
                      w(e),
                      !n && C ? i(!0, e.nativeEvent, "list-navigation") : be(e),
                      n && F());
                }
              },
              onFocus() {
                n && !k && ((U.current = -1), F());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, we, O, be, Y, _, a, b, F, i, n, C, S, P, R, v, N, k, A]);
        return r.useMemo(
          () => (p ? { reference: Re, floating: Ee, item: ye } : {}),
          [p, Re, Ee, ye],
        );
      }
      const _t = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function xt(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: i, floatingId: o } = e,
          { enabled: s = !0, role: u = "dialog" } = t,
          c = null != (n = _t.get(u)) ? n : u,
          a = we(),
          l = null != _e(),
          f = r.useMemo(
            () =>
              "tooltip" === c || "label" === u
                ? {
                    ["aria-" + ("label" === u ? "labelledby" : "describedby")]:
                      i ? o : void 0,
                  }
                : {
                    "aria-expanded": i ? "true" : "false",
                    "aria-haspopup": "alertdialog" === c ? "dialog" : c,
                    "aria-controls": i ? o : void 0,
                    ...("listbox" === c && { role: "combobox" }),
                    ...("menu" === c && { id: a }),
                    ...("menu" === c && l && { role: "menuitem" }),
                    ...("select" === u && { "aria-autocomplete": "none" }),
                    ...("combobox" === u && { "aria-autocomplete": "list" }),
                  },
            [c, o, l, i, a, u],
          ),
          d = r.useMemo(() => {
            const e = { id: o, ...(c && { role: c }) };
            return "tooltip" === c || "label" === u
              ? e
              : { ...e, ...("menu" === c && { "aria-labelledby": a }) };
          }, [c, o, a, u]),
          h = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: o + "-option" }) };
              switch (u) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [o, u],
          );
        return r.useMemo(
          () => (s ? { reference: f, floating: d, item: h } : {}),
          [s, f, d, h],
        );
      }
      function Ct(e, t) {
        var n;
        const { open: i, dataRef: o } = e,
          {
            listRef: s,
            activeIndex: u,
            onMatch: c,
            onTypingChange: a,
            enabled: l = !0,
            findMatch: f = null,
            resetMs: d = 750,
            ignoreKeys: h = [],
            selectedIndex: p = null,
          } = t,
          m = r.useRef(-1),
          v = r.useRef(""),
          g = r.useRef(null != (n = null != p ? p : u) ? n : -1),
          y = r.useRef(null),
          b = V(c),
          E = V(a),
          R = Se(f),
          k = Se(h);
        le(() => {
          i && (Ie(m), (y.current = null), (v.current = ""));
        }, [i]),
          le(() => {
            var e;
            i &&
              "" === v.current &&
              (g.current = null != (e = null != p ? p : u) ? e : -1);
          }, [i, p, u]);
        const _ = V((e) => {
            e
              ? o.current.typing || ((o.current.typing = e), E(e))
              : o.current.typing && ((o.current.typing = e), E(e));
          }),
          x = V((e) => {
            function t(e, t, n) {
              const r = R.current
                ? R.current(t, n)
                : t.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const n = s.current;
            if (
              (v.current.length > 0 &&
                " " !== v.current[0] &&
                (-1 === t(n, n, v.current) ? _(!1) : " " === e.key && w(e)),
              null == n ||
                k.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            i && " " !== e.key && (w(e), _(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              v.current === e.key &&
              ((v.current = ""), (g.current = y.current)),
              (v.current += e.key),
              Ie(m),
              (m.current = window.setTimeout(() => {
                (v.current = ""), (g.current = y.current), _(!1);
              }, d));
            const r = g.current,
              o = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                v.current,
              );
            -1 !== o
              ? (b(o), (y.current = o))
              : " " !== e.key && ((v.current = ""), _(!1));
          }),
          C = r.useMemo(() => ({ onKeyDown: x }), [x]),
          I = r.useMemo(
            () => ({
              onKeyDown: x,
              onKeyUp(e) {
                " " === e.key && _(!1);
              },
            }),
            [x, _],
          );
        return r.useMemo(
          () => (l ? { reference: C, floating: I } : {}),
          [l, C, I],
        );
      }
    },
    54806: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => v });
      var r = n(90626),
        i = n(86709),
        o = n(45747),
        s = n(74500),
        u = n(57168);
      function c(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var a = class extends s.Q {
          #e;
          #t;
          #n;
          #r;
          #i;
          #o;
          #s;
          #u;
          constructor(e, t, n) {
            super(),
              (this.#e = e),
              (this.#r = n),
              (this.#n = []),
              (this.#i = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#i.forEach((e) => {
                e.subscribe((t) => {
                  this.#c(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#i.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, n) {
            (this.#n = e),
              (this.#r = t),
              i.j.batch(() => {
                const e = this.#i,
                  t = this.#a(this.#n);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, n),
                );
                const r = t.map((e) => e.observer),
                  i = r.map((e) => e.getCurrentResult()),
                  o = r.some((t, n) => t !== e[n]);
                (e.length !== r.length || o) &&
                  ((this.#i = r),
                  (this.#t = i),
                  this.hasListeners() &&
                    (c(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    c(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#c(e, t);
                      });
                    }),
                    this.#l()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#i.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#i;
          }
          getOptimisticResult(e, t) {
            const n = this.#a(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [n, (e) => this.#f(e ?? n, t), () => this.#d(n, e)];
          }
          #d(e, t) {
            const n = this.#a(t);
            return n.map((t, r) => {
              const i = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? i
                : t.observer.trackResult(i, (e) => {
                    n.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #f(e, t) {
            return t
              ? ((this.#o && this.#t === this.#u && t === this.#s) ||
                  ((this.#s = t),
                  (this.#u = this.#t),
                  (this.#o = (0, u.BH)(this.#o, t(e)))),
                this.#o)
              : e;
          }
          #a(e) {
            const t = new Map(this.#i.map((e) => [e.options.queryHash, e])),
              n = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  i = t.get(r.queryHash);
                i
                  ? n.push({ defaultedQueryOptions: r, observer: i })
                  : n.push({
                      defaultedQueryOptions: r,
                      observer: new o.$(this.#e, r),
                    });
              }),
              n
            );
          }
          #c(e, t) {
            const n = this.#i.indexOf(e);
            -1 !== n &&
              ((this.#t = (function (e, t, n) {
                const r = e.slice(0);
                return (r[t] = n), r;
              })(this.#t, n, t)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#o !==
                this.#f(this.#d(this.#t, this.#n), this.#r?.combine) &&
                i.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        l = n(75233),
        f = n(22730),
        d = n(43424),
        h = n(19086),
        p = n(44407),
        m = n(19866);
      function v({ queries: e, ...t }, n) {
        const s = (0, l.jE)(n),
          u = (0, f.w)(),
          c = (0, d.h)(),
          v = r.useMemo(
            () =>
              e.map((e) => {
                const t = s.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = u ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, s, u],
          );
        v.forEach((e) => {
          (0, p.jv)(e), (0, h.LJ)(e, c);
        }),
          (0, h.wZ)(c);
        const [g] = r.useState(() => new a(s, v, t)),
          [y, b, w] = g.getOptimisticResult(v, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (u ? m.l : g.subscribe(i.j.batchCalls(e))),
            [g, u],
          ),
          () => g.getCurrentResult(),
          () => g.getCurrentResult(),
        ),
          r.useEffect(() => {
            g.setQueries(v, t, { listeners: !1 });
          }, [v, t, g]);
        const E = y.some((e, t) => (0, p.EU)(v[t], e))
          ? y.flatMap((e, t) => {
              const n = v[t];
              if (n) {
                const t = new o.$(s, n);
                if ((0, p.EU)(n, e)) return (0, p.iL)(n, t, c);
                (0, p.nE)(e, u) && (0, p.iL)(n, t, c);
              }
              return [];
            })
          : [];
        if (E.length > 0) throw Promise.all(E);
        const R = y.find((e, t) => {
          const n = v[t];
          return (
            n &&
            (0, h.$1)({
              result: e,
              errorResetBoundary: c,
              throwOnError: n.throwOnError,
              query: s.getQueryCache().get(n.queryHash),
            })
          );
        });
        if (R?.error) throw R.error;
        return b(w());
      }
    },
  },
]);
