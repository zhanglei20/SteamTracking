/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7224],
  {
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
                var t = y(e);
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
                  R(this._config.beforeFirstChunk) &&
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
                      workerId: u.WORKER_ID,
                      finished: r,
                    });
                  else if (R(this._config.chunk) && !t) {
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
                      !R(this._config.complete) ||
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
                R(this._config.error)
                  ? this._config.error(e)
                  : o &&
                    this._config.error &&
                    n.postMessage({
                      workerId: u.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function l(e) {
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
                      ((t.onload = E(this._chunkLoaded, this)),
                      (t.onerror = E(this._chunkError, this))),
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
          function a(e) {
            (e = e || {}).chunkSize || (e.chunkSize = u.LocalChunkSize),
              c.call(this, e);
            var t,
              n,
              r = "undefined" != typeof FileReader;
            (this.stream = function (e) {
              (this._input = e),
                (n = e.slice || e.webkitSlice || e.mozSlice),
                r
                  ? (((t = new FileReader()).onload = E(
                      this._chunkLoaded,
                      this,
                    )),
                    (t.onerror = E(this._chunkError, this)))
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
              (this._streamData = E(function (e) {
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
              (this._streamError = E(function (e) {
                this._streamCleanUp(), this._sendError(e);
              }, this)),
              (this._streamEnd = E(function () {
                this._streamCleanUp(), (r = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = E(function () {
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
              s = -i,
              c = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              l =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              a = this,
              f = 0,
              d = 0,
              h = !1,
              v = !1,
              g = [],
              b = { data: [], errors: [], meta: {} };
            function E(t) {
              return "greedy" === e.skipEmptyLines
                ? "" === t.join("").trim()
                : 1 === t.length && 0 === t[0].length;
            }
            function w() {
              if (
                (b &&
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
                  (b.data = b.data.filter(function (e) {
                    return !E(e);
                  })),
                k())
              ) {
                if (b)
                  if (Array.isArray(b.data[0])) {
                    for (var t = 0; k() && t < b.data.length; t++)
                      b.data[t].forEach(n);
                    b.data.splice(0, 1);
                  } else b.data.forEach(n);
                function n(t, n) {
                  R(e.transformHeader) && (t = e.transformHeader(t, n)),
                    g.push(t);
                }
              }
              function o(t, n) {
                for (var r = e.header ? {} : [], o = 0; o < t.length; o++) {
                  var u = o,
                    a = t[o];
                  (a = ((t, n) =>
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
                              ((e = parseFloat(e)), s < e && e < i)
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
                    (u = e.header
                      ? o >= g.length
                        ? "__parsed_extra"
                        : g[o]
                      : u),
                    (a = e.transform ? e.transform(a, u) : a),
                  )),
                    "__parsed_extra" === u
                      ? ((r[u] = r[u] || []), r[u].push(a))
                      : (r[u] = a);
                }
                return (
                  e.header &&
                    (o > g.length
                      ? _(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            g.length +
                            " fields but parsed " +
                            o,
                          d + n,
                        )
                      : o < g.length &&
                        _(
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
              var a;
              b &&
                (e.header || e.dynamicTyping || e.transform) &&
                ((a = 1),
                !b.data.length || Array.isArray(b.data[0])
                  ? ((b.data = b.data.map(o)), (a = b.data.length))
                  : (b.data = o(b.data, 0)),
                e.header && b.meta && (b.meta.fields = g),
                (d += a));
            }
            function k() {
              return e.header && 0 === g.length;
            }
            function _(e, t, n, r) {
              (e = { type: e, code: t, message: n }),
                void 0 !== r && (e.row = r),
                b.errors.push(e);
            }
            R(e.step) &&
              ((o = e.step),
              (e.step = function (t) {
                (b = t),
                  k()
                    ? w()
                    : (w(),
                      0 !== b.data.length &&
                        ((f += t.data.length),
                        e.preview && f > e.preview
                          ? n.abort()
                          : ((b.data = b.data[0]), o(b, a))));
              })),
              (this.parse = function (o, i, s) {
                var c = e.quoteChar || '"';
                return (
                  e.newline || (e.newline = this.guessLineEndings(o, c)),
                  (r = !1),
                  e.delimiter
                    ? R(e.delimiter) &&
                      ((e.delimiter = e.delimiter(o)),
                      (b.meta.delimiter = e.delimiter))
                    : ((c = ((t, n, r, o, i) => {
                        var s, c, l, a;
                        i = i || [
                          ",",
                          "\t",
                          "|",
                          ";",
                          u.RECORD_SEP,
                          u.UNIT_SEP,
                        ];
                        for (var f = 0; f < i.length; f++) {
                          for (
                            var d,
                              h = i[f],
                              p = 0,
                              v = 0,
                              g = 0,
                              b =
                                ((l = void 0),
                                new m({
                                  comments: o,
                                  delimiter: h,
                                  newline: n,
                                  preview: 10,
                                }).parse(t)),
                              y = 0;
                            y < b.data.length;
                            y++
                          )
                            r && E(b.data[y])
                              ? g++
                              : ((v += d = b.data[y].length),
                                void 0 === l
                                  ? (l = d)
                                  : 0 < d && ((p += Math.abs(d - l)), (l = d)));
                          0 < b.data.length && (v /= b.data.length - g),
                            (void 0 === c || p <= c) &&
                              (void 0 === a || a < v) &&
                              1.99 < v &&
                              ((c = p), (s = h), (a = v));
                        }
                        return {
                          successful: !!(e.delimiter = s),
                          bestDelimiter: s,
                        };
                      })(
                        o,
                        e.newline,
                        e.skipEmptyLines,
                        e.comments,
                        e.delimitersToGuess,
                      )).successful
                        ? (e.delimiter = c.bestDelimiter)
                        : ((r = !0), (e.delimiter = u.DefaultDelimiter)),
                      (b.meta.delimiter = e.delimiter)),
                  (c = y(e)),
                  e.preview && e.header && c.preview++,
                  (t = o),
                  (n = new m(c)),
                  (b = n.parse(t, i, s)),
                  w(),
                  h ? { meta: { paused: !0 } } : b || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return h;
              }),
              (this.pause = function () {
                (h = !0),
                  n.abort(),
                  (t = R(e.chunk) ? "" : t.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                a.streamer._halted
                  ? ((h = !1), a.streamer.parseChunk(t, !0))
                  : setTimeout(a.resume, 3);
              }),
              (this.aborted = function () {
                return v;
              }),
              (this.abort = function () {
                (v = !0),
                  n.abort(),
                  (b.meta.aborted = !0),
                  R(e.complete) && e.complete(b),
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
              s = e.fastMode,
              c = null,
              l = !1,
              a = null == e.quoteChar ? '"' : e.quoteChar,
              f = a;
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
                b = t.length,
                y = n.length,
                E = r.length,
                w = R(o),
                k = [],
                _ = [],
                x = [],
                C = (d = 0);
              if (!u) return F();
              if (s || (!1 !== s && -1 === u.indexOf(a))) {
                for (var I = u.split(n), S = 0; S < I.length; S++) {
                  if (((x = I[S]), (d += x.length), S !== I.length - 1))
                    d += n.length;
                  else if (v) return F();
                  if (!r || x.substring(0, E) !== r) {
                    if (w) {
                      if (((k = []), D(x.split(t)), j(), h)) return F();
                    } else D(x.split(t));
                    if (i && i <= S) return (k = k.slice(0, i)), F(!0);
                  }
                }
                return F();
              }
              for (
                var O = u.indexOf(t, d),
                  M = u.indexOf(n, d),
                  L = new RegExp(p(f) + p(a), "g"),
                  A = u.indexOf(a, d);
                ;
              )
                if (u[d] === a)
                  for (A = d, d++; ; ) {
                    if (-1 === (A = u.indexOf(a, A + 1)))
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
                    if (A === g - 1) return N(u.substring(d, A).replace(L, a));
                    if (a === f && u[A + 1] === f) A++;
                    else if (a === f || 0 === A || u[A - 1] !== f) {
                      -1 !== O && O < A + 1 && (O = u.indexOf(t, A + 1));
                      var T = P(
                        -1 ===
                          (M = -1 !== M && M < A + 1 ? u.indexOf(n, A + 1) : M)
                          ? O
                          : Math.min(O, M),
                      );
                      if (u.substr(A + 1 + T, b) === t) {
                        x.push(u.substring(d, A).replace(L, a)),
                          u[(d = A + 1 + T + b)] !== a && (A = u.indexOf(a, d)),
                          (O = u.indexOf(t, d)),
                          (M = u.indexOf(n, d));
                        break;
                      }
                      if (
                        ((T = P(M)),
                        u.substring(A + 1 + T, A + 1 + T + y) === n)
                      ) {
                        if (
                          (x.push(u.substring(d, A).replace(L, a)),
                          q(A + 1 + T + y),
                          (O = u.indexOf(t, d)),
                          (A = u.indexOf(a, d)),
                          w && (j(), h))
                        )
                          return F();
                        if (i && k.length >= i) return F(!0);
                        break;
                      }
                      _.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: k.length,
                        index: d,
                      }),
                        A++;
                    }
                  }
                else if (r && 0 === x.length && u.substring(d, d + E) === r) {
                  if (-1 === M) return F();
                  (d = M + y), (M = u.indexOf(n, d)), (O = u.indexOf(t, d));
                } else if (-1 !== O && (O < M || -1 === M))
                  x.push(u.substring(d, O)), (d = O + b), (O = u.indexOf(t, d));
                else {
                  if (-1 === M) break;
                  if ((x.push(u.substring(d, M)), q(M + y), w && (j(), h)))
                    return F();
                  if (i && k.length >= i) return F(!0);
                }
              return N();
              function D(e) {
                k.push(e), (C = d);
              }
              function P(e) {
                var t = 0;
                return -1 !== e &&
                  (e = u.substring(A + 1, e)) &&
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
                    w && j()),
                  F()
                );
              }
              function q(e) {
                (d = e), D(x), (x = []), (M = u.indexOf(n, d));
              }
              function F(r) {
                if (e.header && !m && k.length && !l) {
                  var o = k[0],
                    i = Object.create(null),
                    s = new Set(o);
                  let t = !1;
                  for (let n = 0; n < o.length; n++) {
                    let r = o[n];
                    if (
                      i[
                        (r = R(e.transformHeader) ? e.transformHeader(r, n) : r)
                      ]
                    ) {
                      let e,
                        u = i[r];
                      for (; (e = r + "_" + u), u++, s.has(e); );
                      s.add(e),
                        (o[n] = e),
                        i[r]++,
                        (t = !0),
                        ((c = null === c ? {} : c)[e] = r);
                    } else (i[r] = 1), (o[n] = r);
                    s.add(r);
                  }
                  t && console.warn("Duplicate headers found and renamed."),
                    (l = !0);
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
                o(F()), (k = []), (_ = []);
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
                pause: b,
                resume: b,
              };
              if (R(n.userStep)) {
                for (
                  var s = 0;
                  s < t.results.data.length &&
                  (n.userStep(
                    {
                      data: t.results.data[s],
                      errors: t.results.errors,
                      meta: t.results.meta,
                    },
                    o,
                  ),
                  !r);
                  s++
                );
                delete t.results;
              } else
                R(n.userChunk) &&
                  (n.userChunk(t.results, o, t.file), delete t.results);
            }
            t.finished && !r && g(t.workerId, t.results);
          }
          function g(e, t) {
            var n = i[e];
            R(n.userComplete) && n.userComplete(t), n.terminate(), delete i[e];
          }
          function b() {
            throw new Error("Not implemented.");
          }
          function y(e) {
            if ("object" != typeof e || null === e) return e;
            var t,
              n = Array.isArray(e) ? [] : {};
            for (t in e) n[t] = y(e[t]);
            return n;
          }
          function E(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function R(e) {
            return "function" == typeof e;
          }
          return (
            (u.parse = function (t, r) {
              var o = (r = r || {}).dynamicTyping || !1;
              if (
                (R(o) && ((r.dynamicTypingFunction = o), (o = {})),
                (r.dynamicTyping = o),
                (r.transform = !!R(r.transform) && r.transform),
                !r.worker || !u.WORKERS_SUPPORTED)
              )
                return (
                  (o = null),
                  u.NODE_STREAM_INPUT,
                  "string" == typeof t
                    ? ((t = ((e) =>
                        65279 !== e.charCodeAt(0) ? e : e.slice(1))(t)),
                      (o = new (r.download ? l : f)(r)))
                    : !0 === t.readable && R(t.read) && R(t.on)
                      ? (o = new d(r))
                      : ((n.File && t instanceof File) ||
                          t instanceof Object) &&
                        (o = new a(r)),
                  o.stream(t)
                );
              ((o = (() => {
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
                  (i[t.id] = t))
                );
              })()).userStep = r.step),
                (o.userChunk = r.chunk),
                (o.userComplete = r.complete),
                (o.userError = r.error),
                (r.step = R(r.step)),
                (r.chunk = R(r.chunk)),
                (r.complete = R(r.complete)),
                (r.error = R(r.error)),
                delete r.worker,
                o.postMessage({ input: t, config: r, workerId: o.id });
            }),
            (u.unparse = function (e, t) {
              var n = !1,
                r = !0,
                o = ",",
                i = "\r\n",
                s = '"',
                c = s + s,
                l = !1,
                a = null,
                f = !1,
                d =
                  ((() => {
                    if ("object" == typeof t) {
                      if (
                        ("string" != typeof t.delimiter ||
                          u.BAD_DELIMITERS.filter(function (e) {
                            return -1 !== t.delimiter.indexOf(e);
                          }).length ||
                          (o = t.delimiter),
                        ("boolean" != typeof t.quotes &&
                          "function" != typeof t.quotes &&
                          !Array.isArray(t.quotes)) ||
                          (n = t.quotes),
                        ("boolean" != typeof t.skipEmptyLines &&
                          "string" != typeof t.skipEmptyLines) ||
                          (l = t.skipEmptyLines),
                        "string" == typeof t.newline && (i = t.newline),
                        "string" == typeof t.quoteChar && (s = t.quoteChar),
                        "boolean" == typeof t.header && (r = t.header),
                        Array.isArray(t.columns))
                      ) {
                        if (0 === t.columns.length)
                          throw new Error("Option columns is empty");
                        a = t.columns;
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
                if (!e.length || Array.isArray(e[0])) return h(null, e, l);
                if ("object" == typeof e[0])
                  return h(a || Object.keys(e[0]), e, l);
              } else if ("object" == typeof e)
                return (
                  "string" == typeof e.data && (e.data = JSON.parse(e.data)),
                  Array.isArray(e.data) &&
                    (e.fields || (e.fields = (e.meta && e.meta.fields) || a),
                    e.fields ||
                      (e.fields = Array.isArray(e.data[0])
                        ? e.fields
                        : "object" == typeof e.data[0]
                          ? Object.keys(e.data[0])
                          : []),
                    Array.isArray(e.data[0]) ||
                      "object" == typeof e.data[0] ||
                      (e.data = [e.data])),
                  h(e.fields || [], e.data || [], l)
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
                  for (var l = 0; l < e.length; l++)
                    0 < l && (s += o), (s += m(e[l], l));
                  0 < t.length && (s += i);
                }
                for (var a = 0; a < t.length; a++) {
                  var f = (u ? e : t[a]).length,
                    d = !1,
                    h = u ? 0 === Object.keys(t[a]).length : 0 === t[a].length;
                  if (
                    (n &&
                      !u &&
                      (d =
                        "greedy" === n
                          ? "" === t[a].join("").trim()
                          : 1 === t[a].length && 0 === t[a][0].length),
                    "greedy" === n && u)
                  ) {
                    for (var p = [], v = 0; v < f; v++) {
                      var g = c ? e[v] : v;
                      p.push(t[a][g]);
                    }
                    d = "" === p.join("").trim();
                  }
                  if (!d) {
                    for (var b = 0; b < f; b++) {
                      0 < b && !h && (s += o);
                      var y = u && c ? e[b] : b;
                      s += m(t[a][y], b);
                    }
                    a < t.length - 1 && (!n || (0 < f && !h)) && (s += i);
                  }
                }
                return s;
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
                      (r = e.toString().replace(d, c)),
                      (i =
                        i ||
                        !0 === n ||
                        ("function" == typeof n && n(e, t)) ||
                        (Array.isArray(n) && n[t]) ||
                        ((e, t) => {
                          for (var n = 0; n < t.length; n++)
                            if (-1 < e.indexOf(t[n])) return !0;
                          return !1;
                        })(r, u.BAD_DELIMITERS) ||
                        -1 < r.indexOf(o) ||
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
            (u.NetworkStreamer = l),
            (u.FileStreamer = a),
            (u.StringStreamer = f),
            (u.ReadableStreamStreamer = d),
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
                  if (0 === o.length) R(e.complete) && e.complete();
                  else {
                    var n,
                      r,
                      i,
                      c,
                      l = o[0];
                    if (R(e.before)) {
                      var a = e.before(l.file, l.inputElem);
                      if ("object" == typeof a) {
                        if ("abort" === a.action)
                          return (
                            (n = "AbortError"),
                            (r = l.file),
                            (i = l.inputElem),
                            (c = a.reason),
                            void (R(e.error) && e.error({ name: n }, r, i, c))
                          );
                        if ("skip" === a.action) return void s();
                        "object" == typeof a.config &&
                          (l.instanceConfig = t.extend(
                            l.instanceConfig,
                            a.config,
                          ));
                      } else if ("skip" === a) return void s();
                    }
                    var f = l.instanceConfig.complete;
                    (l.instanceConfig.complete = function (e) {
                      R(f) && f(e, l.file, l.inputElem), s();
                    }),
                      u.parse(l.file, l.instanceConfig);
                  }
                }
                function s() {
                  o.splice(0, 1), i();
                }
              }),
            o &&
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
            ((l.prototype = Object.create(c.prototype)).constructor = l),
            ((a.prototype = Object.create(c.prototype)).constructor = a),
            ((f.prototype = Object.create(f.prototype)).constructor = f),
            ((d.prototype = Object.create(c.prototype)).constructor = d),
            u
          );
        }),
        void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) ||
          (e.exports = o);
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
        o = n(33559),
        i = n(90626),
        s = n(72739),
        u = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function c(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 !== r--; ) if (!c(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 !== r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--; ) {
            const n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function l(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function a(e, t) {
        const n = l(e);
        return Math.round(t * n) / n;
      }
      function f(e) {
        const t = i.useRef(e);
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
            middleware: o = [],
            platform: d,
            elements: { reference: h, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: v,
            open: g,
          } = e,
          [b, y] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [E, R] = i.useState(o);
        c(E, o) || R(o);
        const [w, k] = i.useState(null),
          [_, x] = i.useState(null),
          C = i.useCallback((e) => {
            e !== M.current && ((M.current = e), k(e));
          }, []),
          I = i.useCallback((e) => {
            e !== L.current && ((L.current = e), x(e));
          }, []),
          S = h || w,
          O = p || _,
          M = i.useRef(null),
          L = i.useRef(null),
          A = i.useRef(b),
          T = null != v,
          D = f(v),
          P = f(d),
          N = f(g),
          q = i.useCallback(() => {
            if (!M.current || !L.current) return;
            const e = { placement: t, strategy: n, middleware: E };
            P.current && (e.platform = P.current),
              (0, r.rD)(M.current, L.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== N.current };
                F.current &&
                  !c(A.current, t) &&
                  ((A.current = t),
                  s.flushSync(() => {
                    y(t);
                  }));
              });
          }, [E, t, n, P, N]);
        u(() => {
          !1 === g &&
            A.current.isPositioned &&
            ((A.current.isPositioned = !1),
            y((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        const F = i.useRef(!1);
        u(
          () => (
            (F.current = !0),
            () => {
              F.current = !1;
            }
          ),
          [],
        ),
          u(() => {
            if ((S && (M.current = S), O && (L.current = O), S && O)) {
              if (D.current) return D.current(S, O, q);
              q();
            }
          }, [S, O, q, D, T]);
        const j = i.useMemo(
            () => ({
              reference: M,
              floating: L,
              setReference: C,
              setFloating: I,
            }),
            [C, I],
          ),
          U = i.useMemo(() => ({ reference: S, floating: O }), [S, O]),
          K = i.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!U.floating) return e;
            const t = a(U.floating, b.x),
              r = a(U.floating, b.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(l(U.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, U.floating, b.x, b.y]);
        return i.useMemo(
          () => ({ ...b, update: q, refs: j, elements: U, floatingStyles: K }),
          [b, q, j, U, K],
        );
      }
      const h = (e, t) => ({ ...(0, o.cY)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      "use strict";
      n.d(t, {
        s3: () => ft,
        ph: () => pe,
        XF: () => nt,
        iB: () => Nt,
        kp: () => pt,
        s9: () => bt,
        we: () => yt,
        iQ: () => Et,
        Mk: () => Ae,
        bv: () => _t,
        rm: () => me,
        C1: () => Lt,
        SV: () => Y,
        It: () => Tt,
        lY: () => Dt,
      });
      var r = n(90626),
        o = n.t(r, 2),
        i = n(977);
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
        if (n && (0, i.Ng)(n)) {
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
      function l() {
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
      function a(e) {
        return (
          !(0 !== e.mozInputSource || !e.isTrusted) ||
          (h() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function f(e) {
        return (
          !l().includes("jsdom/") &&
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
        return e.test(c()) || e.test(l());
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
      const b =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, i.sb)(e) && e.matches(b);
      }
      function E(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function R(e) {
        return !!e && "combobox" === e.getAttribute("role") && y(e);
      }
      var w = n(58015),
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
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        M = function (e, t, n) {
          if (O(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(x));
          return t && I.call(e, x) && r.unshift(e), (r = r.filter(n));
        },
        L = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var s = i.shift();
            if (!O(s, !1))
              if ("SLOT" === s.tagName) {
                var u = s.assignedElements(),
                  c = e(u.length ? u : s.children, !0, r);
                r.flatten
                  ? o.push.apply(o, c)
                  : o.push({ scopeParent: s, candidates: c });
              } else {
                I.call(s, x) &&
                  r.filter(s) &&
                  (n || !t.includes(s)) &&
                  o.push(s);
                var l =
                    s.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(s)),
                  a =
                    !O(l, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
                if (l && a) {
                  var f = e(!0 === l ? s.children : l.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: s, candidates: f });
                } else i.unshift.apply(i, s.children);
              }
          }
          return o;
        },
        A = function (e) {
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
            !A(e)
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
              var o = (function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              })(t, e.form);
              return !o || o === e;
            })(e)
          );
        },
        q = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        F = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = I.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (I.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return q(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var s = e.parentElement,
                  u = S(e);
                if (s && !s.shadowRoot && !0 === r(s)) return q(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : s || u === e.ownerDocument
                    ? s
                    : u.host;
              }
              e = i;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = e && S(e),
                  s = null === (t = i) || void 0 === t ? void 0 : t.host,
                  u = !1;
                if (i && i !== e)
                  for (
                    u = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !u && s;
                  ) {
                    var c, l, a;
                    u = !(
                      null ===
                        (l = s =
                          null === (c = i = S(s)) || void 0 === c
                            ? void 0
                            : c.host) ||
                      void 0 === l ||
                      null === (a = l.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(s)
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
            F(t, e) ||
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
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                s = i ? t.scopeParent : t,
                u = (function (e, t) {
                  var n = T(e);
                  return n < 0 && t && !A(e) ? 0 : n;
                })(s, i),
                c = i ? e(t.candidates) : s;
              0 === u
                ? i
                  ? n.push.apply(n, c)
                  : n.push(s)
                : r.push({
                    documentOrder: o,
                    tabIndex: u,
                    item: t,
                    isScope: i,
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
              ? L([e], t.includeContainer, {
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
        H = n(72739),
        Q = n(94621);
      function Y(e) {
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
      const $ = { ...o },
        X = $.useInsertionEffect || ((e) => e());
      function V(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          X(() => {
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
        Z = "ArrowLeft",
        ee = "ArrowRight";
      function te(e, t, n) {
        return Math.floor(e / t) !== n;
      }
      function ne(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function re(e, t) {
        return ie(e, { disabledIndices: t });
      }
      function oe(e, t) {
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
          disabledIndices: o,
          amount: i = 1,
        } = void 0 === t ? {} : t;
        const s = e.current;
        let u = n;
        do {
          u += r ? -i : i;
        } while (u >= 0 && u <= s.length - 1 && ae(s, u, o));
        return u;
      }
      function se(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: i,
            cols: s,
            disabledIndices: u,
            minIndex: c,
            maxIndex: l,
            prevIndex: a,
            stopEvent: f = !1,
          } = t,
          d = a;
        if (n.key === J) {
          if ((f && E(n), -1 === a)) d = l;
          else if (
            ((d = ie(e, {
              startingIndex: d,
              amount: s,
              decrement: !0,
              disabledIndices: u,
            })),
            o && (a - s < c || d < 0))
          ) {
            const e = a % s,
              t = l % s,
              n = l - (t - e);
            d = t === e ? l : t > e ? n : n - s;
          }
          ne(e, d) && (d = a);
        }
        if (
          (n.key === G &&
            (f && E(n),
            -1 === a
              ? (d = c)
              : ((d = ie(e, {
                  startingIndex: a,
                  amount: s,
                  disabledIndices: u,
                })),
                o &&
                  a + s > l &&
                  (d = ie(e, {
                    startingIndex: (a % s) - s,
                    amount: s,
                    disabledIndices: u,
                  }))),
            ne(e, d) && (d = a)),
          "both" === r)
        ) {
          const t = (0, w.RI)(a / s);
          n.key === (i ? Z : ee) &&
            (f && E(n),
            a % s !== s - 1
              ? ((d = ie(e, { startingIndex: a, disabledIndices: u })),
                o &&
                  te(d, s, t) &&
                  (d = ie(e, {
                    startingIndex: a - (a % s) - 1,
                    disabledIndices: u,
                  })))
              : o &&
                (d = ie(e, {
                  startingIndex: a - (a % s) - 1,
                  disabledIndices: u,
                })),
            te(d, s, t) && (d = a)),
            n.key === (i ? ee : Z) &&
              (f && E(n),
              a % s !== 0
                ? ((d = ie(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: u,
                  })),
                  o &&
                    te(d, s, t) &&
                    (d = ie(e, {
                      startingIndex: a + (s - (a % s)),
                      decrement: !0,
                      disabledIndices: u,
                    })))
                : o &&
                  (d = ie(e, {
                    startingIndex: a + (s - (a % s)),
                    decrement: !0,
                    disabledIndices: u,
                  })),
              te(d, s, t) && (d = a));
          const r = (0, w.RI)(l / s) === t;
          ne(e, d) &&
            (d =
              o && r
                ? n.key === (i ? ee : Z)
                  ? l
                  : ie(e, {
                      startingIndex: a - (a % s) - 1,
                      disabledIndices: u,
                    })
                : a);
        }
        return d;
      }
      function ue(e, t, n) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, i) => {
            let { width: s, height: u } = e,
              c = !1;
            for (n && (o = 0); !c; ) {
              const e = [];
              for (let n = 0; n < s; n++)
                for (let r = 0; r < u; r++) e.push(o + n + r * t);
              (o % t) + s <= t && e.every((e) => null == r[e])
                ? (e.forEach((e) => {
                    r[e] = i;
                  }),
                  (c = !0))
                : o++;
            }
          }),
          [...r]
        );
      }
      function ce(e, t, n, r, o) {
        if (-1 === e) return -1;
        const i = n.indexOf(e),
          s = t[e];
        switch (o) {
          case "tl":
            return i;
          case "tr":
            return s ? i + s.width - 1 : i;
          case "bl":
            return s ? i + (s.height - 1) * r : i;
          case "br":
            return n.lastIndexOf(e);
        }
      }
      function le(e, t) {
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
      var fe = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function de(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ||
          n & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING ||
              n & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const he = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function pe(e) {
        const { children: t, elementsRef: n, labelsRef: o } = e,
          [i, s] = r.useState(() => new Set()),
          u = r.useCallback((e) => {
            s((t) => new Set(t).add(e));
          }, []),
          c = r.useCallback((e) => {
            s((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          l = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(i.keys())
                .sort(de)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [i]);
        return (0, k.jsx)(he.Provider, {
          value: r.useMemo(
            () => ({
              register: u,
              unregister: c,
              map: l,
              elementsRef: n,
              labelsRef: o,
            }),
            [u, c, l, n, o],
          ),
          children: t,
        });
      }
      function me(e) {
        void 0 === e && (e = {});
        const { label: t } = e,
          {
            register: n,
            unregister: o,
            map: i,
            elementsRef: s,
            labelsRef: u,
          } = r.useContext(he),
          [c, l] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== c && ((s.current[c] = e), u))) {
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
          fe(() => {
            const e = a.current;
            if (e)
              return (
                n(e),
                () => {
                  o(e);
                }
              );
          }, [n, o]),
          fe(() => {
            const e = a.current ? i.get(a.current) : null;
            null != e && l(e);
          }, [i]),
          r.useMemo(() => ({ ref: f, index: null == c ? -1 : c }), [c, f])
        );
      }
      const ve = [Z, ee],
        ge = [J, G];
      let be = !1,
        ye = 0;
      const Ee = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ye++;
      const Re =
        $.useId ||
        function () {
          const [e, t] = r.useState(() => (be ? Ee() : void 0));
          return (
            fe(() => {
              null == e && t(Ee());
            }, []),
            r.useEffect(() => {
              be = !0;
            }, []),
            e
          );
        };
      function we() {
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
      const ke = r.createContext(null),
        _e = r.createContext(null),
        xe = () => {
          var e;
          return (null == (e = r.useContext(ke)) ? void 0 : e.id) || null;
        },
        Ce = () => r.useContext(_e);
      function Ie(e) {
        return "data-floating-ui-" + e;
      }
      function Se(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Oe(e) {
        const t = (0, r.useRef)(e);
        return (
          fe(() => {
            t.current = e;
          }),
          t
        );
      }
      const Me = Ie("safe-polygon");
      function Le(e, t, n) {
        return n && !p(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function Ae(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: s,
            events: c,
            elements: l,
          } = e,
          {
            enabled: a = !0,
            delay: f = 0,
            handleClose: d = null,
            mouseOnly: h = !1,
            restMs: v = 0,
            move: g = !0,
          } = t,
          b = Ce(),
          y = xe(),
          E = Oe(d),
          R = Oe(f),
          w = Oe(n),
          k = r.useRef(),
          _ = r.useRef(-1),
          x = r.useRef(),
          C = r.useRef(-1),
          I = r.useRef(!0),
          S = r.useRef(!1),
          O = r.useRef(() => {}),
          M = r.useRef(!1),
          L = r.useCallback(() => {
            var e;
            const t = null == (e = s.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [s]);
        r.useEffect(() => {
          if (a)
            return (
              c.on("openchange", e),
              () => {
                c.off("openchange", e);
              }
            );
          function e(e) {
            let { open: t } = e;
            t || (Se(_), Se(C), (I.current = !0), (M.current = !1));
          }
        }, [a, c]),
          r.useEffect(() => {
            if (!a) return;
            if (!E.current) return;
            if (!n) return;
            function e(e) {
              L() && o(!1, e, "hover");
            }
            const t = m(l.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [l.floating, n, o, a, E, L]);
        const A = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = Le(R.current, "close", k.current);
              r && !x.current
                ? (Se(_), (_.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (Se(_), o(!1, e, n));
            },
            [R, o],
          ),
          T = V(() => {
            O.current(), (x.current = void 0);
          }),
          D = V(() => {
            if (S.current) {
              const e = m(l.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(Me),
                (S.current = !1);
            }
          }),
          P = V(
            () =>
              !!s.current.openEvent &&
              ["click", "mousedown"].includes(s.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, i.vq)(l.domReference)) {
            var e;
            const o = l.domReference;
            return (
              n && o.addEventListener("mouseleave", c),
              null == (e = l.floating) || e.addEventListener("mouseleave", c),
              g && o.addEventListener("mousemove", t, { once: !0 }),
              o.addEventListener("mouseenter", t),
              o.addEventListener("mouseleave", r),
              () => {
                var e;
                n && o.removeEventListener("mouseleave", c),
                  null == (e = l.floating) ||
                    e.removeEventListener("mouseleave", c),
                  g && o.removeEventListener("mousemove", t),
                  o.removeEventListener("mouseenter", t),
                  o.removeEventListener("mouseleave", r);
              }
            );
          }
          function t(e) {
            if (
              (Se(_),
              (I.current = !1),
              (h && !p(k.current)) || (v > 0 && !Le(R.current, "open")))
            )
              return;
            const t = Le(R.current, "open", k.current);
            t
              ? (_.current = window.setTimeout(() => {
                  w.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (P()) return;
            O.current();
            const t = m(l.floating);
            if (
              (Se(C), (M.current = !1), E.current && s.current.floatingContext)
            ) {
              n || Se(_),
                (x.current = E.current({
                  ...s.current.floatingContext,
                  tree: b,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    D(), T(), P() || A(e, !0, "safe-polygon");
                  },
                }));
              const r = x.current;
              return (
                t.addEventListener("mousemove", r),
                void (O.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== k.current || !u(l.floating, e.relatedTarget)) && A(e);
          }
          function c(e) {
            P() ||
              (s.current.floatingContext &&
                (null == E.current ||
                  E.current({
                    ...s.current.floatingContext,
                    tree: b,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      D(), T(), P() || A(e);
                    },
                  })(e)));
          }
        }, [l, a, e, h, v, g, A, T, D, o, n, w, b, R, E, s, P]),
          fe(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = E.current) &&
              e.__options.blockPointerEvents &&
              L()
            ) {
              S.current = !0;
              const e = l.floating;
              if ((0, i.vq)(l.domReference) && e) {
                var t;
                const n = m(l.floating).body;
                n.setAttribute(Me, "");
                const r = l.domReference,
                  o =
                    null == b ||
                    null == (t = b.nodesRef.current.find((e) => e.id === y)) ||
                    null == (t = t.context)
                      ? void 0
                      : t.elements.floating;
                return (
                  o && (o.style.pointerEvents = ""),
                  (n.style.pointerEvents = "none"),
                  (r.style.pointerEvents = "auto"),
                  (e.style.pointerEvents = "auto"),
                  () => {
                    (n.style.pointerEvents = ""),
                      (r.style.pointerEvents = ""),
                      (e.style.pointerEvents = "");
                  }
                );
              }
            }
          }, [a, n, y, l, b, E, L]),
          fe(() => {
            n || ((k.current = void 0), (M.current = !1), T(), D());
          }, [n, T, D]),
          r.useEffect(
            () => () => {
              T(), Se(_), Se(C), D();
            },
            [a, l.domReference, T, D],
          );
        const N = r.useMemo(() => {
            function e(e) {
              k.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  I.current || w.current || o(!0, t, "hover");
                }
                (h && !p(k.current)) ||
                  n ||
                  0 === v ||
                  (M.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (Se(C),
                  "touch" === k.current
                    ? r()
                    : ((M.current = !0),
                      (C.current = window.setTimeout(r, v))));
              },
            };
          }, [h, o, n, w, v]),
          q = r.useMemo(
            () => ({
              onMouseEnter() {
                Se(_);
              },
              onMouseLeave(e) {
                P() || A(e.nativeEvent, !1);
              },
            }),
            [A, P],
          );
        return r.useMemo(
          () => (a ? { reference: N, floating: q } : {}),
          [a, N, q],
        );
      }
      let Te = 0;
      function De(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(Te);
        const i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? i() : (Te = requestAnimationFrame(i));
      }
      function Pe(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; o; ) {
          const t = e.find((e) => e.id === o);
          (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function Ne(e, t) {
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
      let qe = new WeakMap(),
        Fe = new WeakSet(),
        je = {},
        Ue = 0;
      const Ke = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        ze = (e) => e && (e.host || ze(e.parentNode)),
        Be = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = ze(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function We(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = m(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            s = r ? "inert" : n ? "aria-hidden" : null,
            u = Be(t, e),
            c = new Set(),
            l = new Set(u),
            a = [];
          je[o] || (je[o] = new WeakMap());
          const f = je[o];
          return (
            u.forEach(function e(t) {
              t && !c.has(t) && (c.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !l.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, i.mq)(t))
                    if (c.has(t)) e(t);
                    else {
                      const e = s ? t.getAttribute(s) : null,
                        n = null !== e && "false" !== e,
                        r = qe.get(t) || 0,
                        i = s ? r + 1 : r,
                        u = (f.get(t) || 0) + 1;
                      qe.set(t, i),
                        f.set(t, u),
                        a.push(t),
                        1 === i && n && Fe.add(t),
                        1 === u && t.setAttribute(o, ""),
                        !n && s && t.setAttribute(s, "true");
                    }
                });
            })(t),
            c.clear(),
            Ue++,
            () => {
              a.forEach((e) => {
                const t = qe.get(e) || 0,
                  n = s ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                qe.set(e, n),
                  f.set(e, r),
                  n || (!Fe.has(e) && s && e.removeAttribute(s), Fe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                Ue--,
                Ue ||
                  ((qe = new WeakMap()),
                  (qe = new WeakMap()),
                  (Fe = new WeakSet()),
                  (je = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const He = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function Qe(e, t) {
        const n = B(e, He());
        "prev" === t && n.reverse();
        const r = n.indexOf(s(m(e)));
        return n.slice(r + 1)[0];
      }
      function Ye() {
        return Qe(document.body, "next");
      }
      function $e() {
        return Qe(document.body, "prev");
      }
      function Xe(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !u(n, r);
      }
      function Ve(e) {
        B(e, He()).forEach((e) => {
          (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
            e.setAttribute("tabindex", "-1");
        });
      }
      function Je(e) {
        e.querySelectorAll("[data-tabindex]").forEach((e) => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex,
            t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
        });
      }
      const Ge = {
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
        Ze = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          fe(() => {
            d() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Ie("focus-guard")]: "",
            style: Ge,
          };
          return (0, k.jsx)("span", { ...e, ...i });
        }),
        et = r.createContext(null),
        tt = Ie("portal");
      function nt(e) {
        const { children: t, id: n, root: o, preserveTabOrder: s = !0 } = e,
          u = (function (e) {
            void 0 === e && (e = {});
            const { id: t, root: n } = e,
              o = Re(),
              s = rt(),
              [u, c] = r.useState(null),
              l = r.useRef(null);
            return (
              fe(
                () => () => {
                  null == u || u.remove(),
                    queueMicrotask(() => {
                      l.current = null;
                    });
                },
                [u],
              ),
              fe(() => {
                if (!o) return;
                if (l.current) return;
                const e = t ? document.getElementById(t) : null;
                if (!e) return;
                const n = document.createElement("div");
                (n.id = o),
                  n.setAttribute(tt, ""),
                  e.appendChild(n),
                  (l.current = n),
                  c(n);
              }, [t, o]),
              fe(() => {
                if (null === n) return;
                if (!o) return;
                if (l.current) return;
                let e = n || (null == s ? void 0 : s.portalNode);
                e && !(0, i.vq)(e) && (e = e.current), (e = e || document.body);
                let r = null;
                t &&
                  ((r = document.createElement("div")),
                  (r.id = t),
                  e.appendChild(r));
                const u = document.createElement("div");
                (u.id = o),
                  u.setAttribute(tt, ""),
                  (e = r || e),
                  e.appendChild(u),
                  (l.current = u),
                  c(u);
              }, [t, n, o, s]),
              u
            );
          })({ id: n, root: o }),
          [c, l] = r.useState(null),
          a = r.useRef(null),
          f = r.useRef(null),
          d = r.useRef(null),
          h = r.useRef(null),
          p = null == c ? void 0 : c.modal,
          m = null == c ? void 0 : c.open,
          v = !!c && !c.modal && c.open && s && !(!o && !u);
        return (
          r.useEffect(() => {
            if (u && s && !p)
              return (
                u.addEventListener("focusin", e, !0),
                u.addEventListener("focusout", e, !0),
                () => {
                  u.removeEventListener("focusin", e, !0),
                    u.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              if (u && Xe(e)) {
                ("focusin" === e.type ? Je : Ve)(u);
              }
            }
          }, [u, s, p]),
          r.useEffect(() => {
            u && (m || Je(u));
          }, [m, u]),
          (0, k.jsxs)(et.Provider, {
            value: r.useMemo(
              () => ({
                preserveTabOrder: s,
                beforeOutsideRef: a,
                afterOutsideRef: f,
                beforeInsideRef: d,
                afterInsideRef: h,
                portalNode: u,
                setFocusManagerState: l,
              }),
              [s, u],
            ),
            children: [
              v &&
                u &&
                (0, k.jsx)(Ze, {
                  "data-type": "outside",
                  ref: a,
                  onFocus: (e) => {
                    if (Xe(e, u)) {
                      var t;
                      null == (t = d.current) || t.focus();
                    } else {
                      const e = $e() || (null == c ? void 0 : c.domReference);
                      null == e || e.focus();
                    }
                  },
                }),
              v && u && (0, k.jsx)("span", { "aria-owns": u.id, style: Ge }),
              u && H.createPortal(t, u),
              v &&
                u &&
                (0, k.jsx)(Ze, {
                  "data-type": "outside",
                  ref: f,
                  onFocus: (e) => {
                    if (Xe(e, u)) {
                      var t;
                      null == (t = h.current) || t.focus();
                    } else {
                      const t = Ye() || (null == c ? void 0 : c.domReference);
                      null == t || t.focus(),
                        (null == c ? void 0 : c.closeOnFocusOut) &&
                          (null == c ||
                            c.onOpenChange(!1, e.nativeEvent, "focus-out"));
                    }
                  },
                }),
            ],
          })
        );
      }
      const rt = () => r.useContext(et),
        ot = "data-floating-ui-focusable";
      function it(e) {
        return e
          ? e.hasAttribute(ot)
            ? e
            : e.querySelector("[" + ot + "]") || e
          : null;
      }
      function st(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const ut = 20;
      let ct = [];
      function lt() {
        return ct
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const at = r.forwardRef(function (e, t) {
        return (0, k.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Ge,
        });
      });
      function ft(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: c = ["content"],
            guards: l = !0,
            initialFocus: d = 0,
            returnFocus: h = !0,
            restoreFocus: p = !1,
            modal: v = !0,
            visuallyHiddenDismiss: b = !1,
            closeOnFocusOut: y = !0,
            outsideElementsInert: w = !1,
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
          L = "number" == typeof d && d < 0,
          A = R(S) && L,
          T = Ke(),
          D = !T || l,
          P = !D || (T && w),
          N = Oe(c),
          q = Oe(d),
          F = Oe(h),
          j = Ce(),
          U = rt(),
          K = r.useRef(null),
          z = r.useRef(null),
          H = r.useRef(!1),
          Q = r.useRef(!1),
          Y = r.useRef(-1),
          $ = null != U,
          X = it(O),
          J = V(function (e) {
            return void 0 === e && (e = X), e ? B(e, He()) : [];
          }),
          G = V((e) => {
            const t = J(e);
            return N.current
              .map((e) =>
                S && "reference" === e ? S : X && "floating" === e ? X : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!v) return;
          function e(e) {
            if ("Tab" === e.key) {
              u(X, s(m(X))) && 0 === J().length && !A && E(e);
              const t = G(),
                n = g(e);
              "reference" === N.current[0] &&
                n === S &&
                (E(e), e.shiftKey ? De(t[t.length - 1]) : De(t[1])),
                "floating" === N.current[1] &&
                  n === X &&
                  e.shiftKey &&
                  (E(e), De(t[0]));
            }
          }
          const t = m(X);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, S, X, v, N, A, J, G]),
          r.useEffect(() => {
            if (!o && O)
              return (
                O.addEventListener("focusin", e),
                () => {
                  O.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = g(e),
                n = J().indexOf(t);
              -1 !== n && (Y.current = n);
            }
          }, [o, O, J]),
          r.useEffect(() => {
            if (!o && y)
              return O && (0, i.sb)(S)
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
                    (null != t && t.hasAttribute(Ie("focus-guard"))) ||
                    (j &&
                      (Ne(j.nodesRef.current, n).find((e) => {
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
                        Pe(j.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              it(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(t) ||
                            (null == (o = e.context)
                              ? void 0
                              : o.elements.domReference) === t
                          );
                        })))
                  );
                if (p && r && s(m(X)) === m(X).body) {
                  (0, i.sb)(X) && X.focus();
                  const e = Y.current,
                    t = J(),
                    n = t[e] || t[t.length - 1] || X;
                  (0, i.sb)(n) && n.focus();
                }
                (!A && v) ||
                  !t ||
                  !r ||
                  Q.current ||
                  t === lt() ||
                  ((H.current = !0), x(!1, e, "focus-out"));
              });
            }
          }, [o, S, O, X, v, j, U, x, y, p, J, A, M]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          te = st([Z, null == U ? void 0 : U.beforeInsideRef]),
          ne = st([ee, null == U ? void 0 : U.afterInsideRef]);
        function re(e) {
          return !o && b && v
            ? (0, k.jsx)(at, {
                ref: "start" === e ? K : z,
                onClick: (e) => x(!1, e.nativeEvent),
                children: "string" == typeof b ? b : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!O) return;
          const t = Array.from(
              (null == U || null == (e = U.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Ie("portal") + "]")) || [],
            ),
            n =
              j && !v
                ? Pe(null == j ? void 0 : j.nodesRef.current, M()).map((e) => {
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
              N.current.includes("reference") || A ? S : null,
            ].filter((e) => null != e),
            i = v || A ? We(r, !P, P) : We(r);
          return () => {
            i();
          };
        }, [o, S, O, v, N, U, A, D, P, j, M]),
          fe(() => {
            if (o || !(0, i.sb)(X)) return;
            const e = s(m(X));
            queueMicrotask(() => {
              const t = G(X),
                n = q.current,
                r = ("number" == typeof n ? t[n] : n.current) || X,
                o = u(X, e);
              L || o || !_ || De(r, { preventScroll: r === X });
            });
          }, [o, _, X, L, G, q]),
          fe(() => {
            if (o || !X) return;
            let e = !1,
              t = !1;
            const n = m(X),
              r = s(n);
            let c = I.current.openEvent;
            var l;
            function d(n) {
              let { open: r, reason: o, event: i, nested: s } = n;
              if (
                (r && (c = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (H.current = !0),
                "outside-press" === o)
              )
                if (s) (H.current = !1), (e = !0);
                else if (a(i) || f(i)) H.current = !1;
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
            (l = r),
              (ct = ct.filter((e) => e.isConnected)),
              l &&
                "body" !== (0, i.mq)(l) &&
                (ct.push(l), ct.length > ut && (ct = ct.slice(-ut))),
              C.on("openchange", d);
            const h = n.createElement("span");
            return (
              h.setAttribute("tabindex", "-1"),
              h.setAttribute("aria-hidden", "true"),
              Object.assign(h.style, Ge),
              $ && S && S.insertAdjacentElement("afterend", h),
              () => {
                C.off("openchange", d);
                const r = s(n),
                  o =
                    u(O, r) ||
                    (j &&
                      Ne(j.nodesRef.current, M()).some((e) => {
                        var t;
                        return u(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (o || (c && ["click", "mousedown"].includes(c.type))) &&
                  (t = !0);
                const l =
                  "boolean" == typeof F.current
                    ? t && S
                      ? S
                      : lt() || h
                    : F.current.current || h;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = He();
                    return W(e, t) ? e : B(e, t)[0] || e;
                  })(l);
                  F.current &&
                    !H.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    h.remove();
                });
              }
            );
          }, [o, O, X, F, I, C, j, $, S, M]),
          r.useEffect(() => {
            queueMicrotask(() => {
              H.current = !1;
            });
          }, [o]),
          fe(() => {
            if (!o && U)
              return (
                U.setFocusManagerState({
                  modal: v,
                  closeOnFocusOut: y,
                  open: _,
                  onOpenChange: x,
                  domReference: S,
                }),
                () => {
                  U.setFocusManagerState(null);
                }
              );
          }, [o, U, v, _, x, y, S]),
          fe(() => {
            if (o) return;
            if (!X) return;
            if ("function" != typeof MutationObserver) return;
            if (L) return;
            const e = () => {
              const e = X.getAttribute("tabindex"),
                t = J(),
                n = s(m(O)),
                r = t.indexOf(n);
              -1 !== r && (Y.current = r),
                N.current.includes("floating") || (n !== S && 0 === t.length)
                  ? "0" !== e && X.setAttribute("tabindex", "0")
                  : "-1" !== e && X.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe(X, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [o, O, X, S, N, J, L]);
        const oe = !o && D && (!v || !A) && ($ || v);
        return (0, k.jsxs)(k.Fragment, {
          children: [
            oe &&
              (0, k.jsx)(Ze, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (v) {
                    const e = G();
                    De("reference" === c[0] ? e[0] : e[e.length - 1]);
                  } else if (null != U && U.preserveTabOrder && U.portalNode)
                    if (((H.current = !1), Xe(e, U.portalNode))) {
                      const e = Ye() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = U.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !A && re("start"),
            n,
            re("end"),
            oe &&
              (0, k.jsx)(Ze, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (v) De(G()[0]);
                  else if (null != U && U.preserveTabOrder && U.portalNode)
                    if ((y && (H.current = !0), Xe(e, U.portalNode))) {
                      const e = $e() || S;
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
      function dt(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function ht(e) {
        return y(e);
      }
      function pt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            elements: { domReference: s },
          } = e,
          {
            enabled: u = !0,
            event: c = "click",
            toggle: l = !0,
            ignoreMouse: a = !1,
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
                  ((p(t, !0) && a) ||
                    (!n ||
                    !l ||
                    (i.current.openEvent &&
                      d &&
                      "mousedown" !== i.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = h.current;
                "mousedown" === c && h.current
                  ? (h.current = void 0)
                  : (p(t, !0) && a) ||
                    (!n ||
                    !l ||
                    (i.current.openEvent &&
                      d &&
                      "click" !== i.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (h.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    dt(e) ||
                    (" " !== e.key ||
                      ht(s) ||
                      (e.preventDefault(), (m.current = !0)),
                    "Enter" === e.key && o(!n || !l, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  dt(e) ||
                  ht(s) ||
                  (" " === e.key &&
                    m.current &&
                    ((m.current = !1), o(!n || !l, e.nativeEvent, "click")));
              },
            }),
            [i, s, c, a, f, o, n, d, l],
          );
        return r.useMemo(() => (u ? { reference: v } : {}), [u, v]);
      }
      const mt = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        vt = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        gt = (e) => {
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
      function bt(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: s, dataRef: c } = e,
          {
            enabled: l = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: h = !1,
            referencePressEvent: p = "pointerdown",
            ancestorScroll: b = !1,
            bubbles: y,
            capture: E,
          } = t,
          R = Ce(),
          w = V("function" == typeof f ? f : () => !1),
          k = "function" == typeof f ? w : f,
          _ = r.useRef(!1),
          x = r.useRef(!1),
          { escapeKey: C, outsidePress: I } = gt(y),
          { escapeKey: S, outsidePress: O } = gt(E),
          M = r.useRef(!1),
          L = V((e) => {
            var t;
            if (!n || !l || !a || "Escape" !== e.key) return;
            if (M.current) return;
            const r =
                null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
              i = R ? Ne(R.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), i.length > 0)) {
              let e = !0;
              if (
                (i.forEach((t) => {
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
            o(
              !1,
              (function (e) {
                return "nativeEvent" in e;
              })(e)
                ? e.nativeEvent
                : e,
              "escape-key",
            );
          }),
          A = V((e) => {
            var t;
            const n = () => {
              var t;
              L(e), null == (t = g(e)) || t.removeEventListener("keydown", n);
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
            const l = g(e),
              a = "[" + Ie("inert") + "]",
              f = m(s.floating).querySelectorAll(a);
            let h = (0, i.vq)(l) ? l : null;
            for (; h && !(0, i.eu)(h); ) {
              const e = (0, i.$4)(h);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              h = e;
            }
            if (
              f.length &&
              (0, i.vq)(l) &&
              !l.matches("html,body") &&
              !u(l, s.floating) &&
              Array.from(f).every((e) => !u(h, e))
            )
              return;
            if ((0, i.sb)(l) && N) {
              const t = (0, i.eu)(l),
                n = (0, i.L9)(l),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                s = t || r.test(n.overflowY),
                u = o && l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
                c = s && l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
                a = "rtl" === n.direction,
                f =
                  c &&
                  (a
                    ? e.offsetX <= l.offsetWidth - l.clientWidth
                    : e.offsetX > l.clientWidth),
                d = u && e.offsetY > l.clientHeight;
              if (f || d) return;
            }
            const p =
                null == (t = c.current.floatingContext) ? void 0 : t.nodeId,
              b =
                R &&
                Ne(R.nodesRef.current, p).some((t) => {
                  var n;
                  return v(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (v(e, s.floating) || v(e, s.domReference) || b) return;
            const y = R ? Ne(R.nodesRef.current, p) : [];
            if (y.length > 0) {
              let e = !0;
              if (
                (y.forEach((t) => {
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
            o(!1, e, "outside-press");
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
          if (!n || !l) return;
          (c.current.__escapeKeyBubbles = C),
            (c.current.__outsidePressBubbles = I);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (M.current = !0);
          }
          function u() {
            e = window.setTimeout(
              () => {
                M.current = !1;
              },
              (0, i.Tc)() ? 5 : 0,
            );
          }
          const f = m(s.floating);
          a &&
            (f.addEventListener("keydown", S ? A : L, S),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", u)),
            k && f.addEventListener(d, O ? D : T, O);
          let h = [];
          return (
            b &&
              ((0, i.vq)(s.domReference) && (h = (0, i.v9)(s.domReference)),
              (0, i.vq)(s.floating) && (h = h.concat((0, i.v9)(s.floating))),
              !(0, i.vq)(s.reference) &&
                s.reference &&
                s.reference.contextElement &&
                (h = h.concat((0, i.v9)(s.reference.contextElement)))),
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
              a &&
                (f.removeEventListener("keydown", S ? A : L, S),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", u)),
                k && f.removeEventListener(d, O ? D : T, O),
                h.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [c, s, a, k, d, n, o, b, l, C, I, L, S, A, T, O, D]),
          r.useEffect(() => {
            _.current = !1;
          }, [k, d]);
        const P = r.useMemo(
            () => ({
              onKeyDown: L,
              ...(h && {
                [mt[p]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== p && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [L, o, h, p],
          ),
          N = r.useMemo(
            () => ({
              onKeyDown: L,
              onMouseDown() {
                x.current = !0;
              },
              onMouseUp() {
                x.current = !0;
              },
              [vt[d]]: () => {
                _.current = !0;
              },
            }),
            [L, d],
          );
        return r.useMemo(
          () => (l ? { reference: P, floating: N } : {}),
          [l, P, N],
        );
      }
      function yt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = Re(),
              s = r.useRef({}),
              [u] = r.useState(() => we()),
              c = null != xe(),
              [l, a] = r.useState(o.reference),
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
              d = r.useMemo(() => ({ setPositionReference: a }), []),
              h = r.useMemo(
                () => ({
                  reference: l || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [l, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: s,
                open: t,
                onOpenChange: f,
                elements: h,
                events: u,
                floatingId: i,
                refs: d,
              }),
              [t, f, h, u, i, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          s = o.elements,
          [u, c] = r.useState(null),
          [l, a] = r.useState(null),
          f = (null == s ? void 0 : s.domReference) || u,
          d = r.useRef(null),
          h = Ce();
        fe(() => {
          f && (d.current = f);
        }, [f]);
        const p = (0, Q.we)({
            ...e,
            elements: { ...s, ...(l && { reference: l }) },
          }),
          m = r.useCallback(
            (e) => {
              const t = (0, i.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), p.refs.setReference(t);
            },
            [p.refs],
          ),
          v = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((d.current = e), c(e)),
                ((0, i.vq)(p.refs.reference.current) ||
                  null === p.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
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
          b = r.useMemo(
            () => ({ ...p.elements, domReference: f }),
            [p.elements, f],
          ),
          y = r.useMemo(
            () => ({ ...p, ...o, refs: g, elements: b, nodeId: t }),
            [p, g, b, t, o],
          );
        return (
          fe(() => {
            o.dataRef.current.floatingContext = y;
            const e =
              null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = y);
          }),
          r.useMemo(
            () => ({ ...p, context: y, refs: g, elements: b }),
            [p, g, b, y],
          )
        );
      }
      function Et(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: l,
            dataRef: a,
            elements: h,
          } = e,
          { enabled: p = !0, visibleOnly: v = !0 } = t,
          b = r.useRef(!1),
          E = r.useRef(-1),
          R = r.useRef(!0);
        r.useEffect(() => {
          if (!p) return;
          const e = (0, i.zk)(h.domReference);
          function t() {
            !n &&
              (0, i.sb)(h.domReference) &&
              h.domReference === s(m(h.domReference)) &&
              (b.current = !0);
          }
          function r() {
            R.current = !0;
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
                l.on("openchange", e),
                () => {
                  l.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (b.current = !0);
            }
          }, [l, p]),
          r.useEffect(
            () => () => {
              Se(E);
            },
            [],
          );
        const w = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (R.current = !1);
            },
            onMouseLeave() {
              b.current = !1;
            },
            onFocus(e) {
              if (b.current) return;
              const t = g(e.nativeEvent);
              if (v && (0, i.vq)(t))
                try {
                  if (
                    d() &&
                    c().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!R.current && !y(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              b.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(Ie("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              E.current = window.setTimeout(() => {
                var e;
                const i = s(
                  h.domReference ? h.domReference.ownerDocument : document,
                );
                (t || i !== h.domReference) &&
                  (u(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    u(h.domReference, i) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [a, h.domReference, o, v],
        );
        return r.useMemo(() => (p ? { reference: w } : {}), [p, w]);
      }
      const Rt = "active",
        wt = "selected";
      function kt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [Rt]: t, [wt]: n, ...r } = e;
          i = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [ot]: "" }),
          ...i,
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
                      let [n, i] = t;
                      var s;
                      (o && [Rt, wt].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof i &&
                              (null == (s = r.get(n)) || s.push(i),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    o = new Array(t),
                                    i = 0;
                                  i < t;
                                  i++
                                )
                                  o[i] = arguments[i];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = i));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function _t(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => kt(t, e, "reference"), t),
          s = r.useCallback((t) => kt(t, e, "floating"), n),
          u = r.useCallback((t) => kt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: s,
            getItemProps: u,
          }),
          [i, s, u],
        );
      }
      const xt = "Escape";
      function Ct(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function It(e, t) {
        return Ct(t, e === J || e === G, e === Z || e === ee);
      }
      function St(e, t, n) {
        return (
          Ct(t, e === G, n ? e === Z : e === ee) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function Ot(e, t, n) {
        return Ct(t, n ? e === Z : e === ee, e === G);
      }
      function Mt(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === xt
          : Ct(t, n ? e === ee : e === Z, e === J);
      }
      function Lt(e, t) {
        const { open: n, onOpenChange: o, elements: c } = e,
          {
            listRef: l,
            activeIndex: d,
            onNavigate: h = () => {},
            enabled: p = !0,
            selectedIndex: v = null,
            allowEscape: g = !1,
            loop: b = !1,
            nested: y = !1,
            rtl: w = !1,
            virtual: k = !1,
            focusItemOnOpen: _ = "auto",
            focusItemOnHover: x = !0,
            openOnArrowKeyDown: C = !0,
            disabledIndices: I,
            orientation: S = "vertical",
            cols: O = 1,
            scrollItemIntoView: M = !0,
            virtualItemRef: L,
            itemSizes: A,
            dense: T = !1,
          } = t;
        const D = Oe(it(c.floating)),
          P = xe(),
          N = Ce();
        fe(() => {
          e.dataRef.current.orientation = S;
        }, [e, S]);
        const q = V(() => {
            h(-1 === U.current ? null : U.current);
          }),
          F = R(c.domReference),
          j = r.useRef(_),
          U = r.useRef(null != v ? v : -1),
          K = r.useRef(null),
          z = r.useRef(!0),
          B = r.useRef(q),
          W = r.useRef(!!c.floating),
          H = r.useRef(n),
          Q = r.useRef(!1),
          Y = r.useRef(!1),
          $ = Oe(I),
          X = Oe(n),
          J = Oe(M),
          te = Oe(v),
          [de, he] = r.useState(),
          [pe, me] = r.useState(),
          ve = V(() => {
            function e(e) {
              k
                ? (he(e.id),
                  null == N || N.events.emit("virtualfocus", e),
                  L && (L.current = e))
                : De(e, { sync: Q.current, preventScroll: !0 });
            }
            const t = l.current[U.current];
            t && e(t);
            (Q.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = l.current[U.current] || t;
              if (!n) return;
              t || e(n);
              const r = J.current;
              r &&
                be &&
                (Y.current || !z.current) &&
                (null == n.scrollIntoView ||
                  n.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        fe(() => {
          p &&
            (n && c.floating
              ? j.current &&
                null != v &&
                ((Y.current = !0), (U.current = v), q())
              : W.current && ((U.current = -1), B.current()));
        }, [p, n, c.floating, v, q]),
          fe(() => {
            if (p && n && c.floating)
              if (null == d) {
                if (((Q.current = !1), null != te.current)) return;
                if (
                  (W.current && ((U.current = -1), ve()),
                  (!H.current || !W.current) &&
                    j.current &&
                    (null != K.current ||
                      (!0 === j.current && null == K.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == l.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (U.current =
                        null == K.current || St(K.current, S, w) || y
                          ? re(l, $.current)
                          : oe(l, $.current)),
                        (K.current = null),
                        q();
                  };
                  t();
                }
              } else ne(l, d) || ((U.current = d), ve(), (Y.current = !1));
          }, [p, n, c.floating, d, te, y, l, S, w, q, ve, $]),
          fe(() => {
            var e;
            if (!p || c.floating || !N || k || !W.current) return;
            const t = N.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === P)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = s(m(c.floating)),
              o = t.some((e) => e.context && u(e.context.elements.floating, r));
            n && !o && z.current && n.focus({ preventScroll: !0 });
          }, [p, c.floating, N, P, k]),
          fe(() => {
            if (p && N && k && !P)
              return (
                N.events.on("virtualfocus", e),
                () => {
                  N.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              me(e.id), L && (L.current = e);
            }
          }, [p, N, k, P, L]),
          fe(() => {
            (B.current = q), (H.current = n), (W.current = !!c.floating);
          }),
          fe(() => {
            n || (K.current = null);
          }, [n]);
        const ge = null != d,
          be = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = l.current.indexOf(e);
              -1 !== t && U.current !== t && ((U.current = t), q());
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
                  (Q.current = !0), (Y.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  z.current &&
                    "touch" !== t &&
                    ((Q.current = !0),
                    (U.current = -1),
                    q(),
                    k ||
                      null == (n = D.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, D, x, l, q, k]),
          ye = V((e) => {
            if (((z.current = !1), (Q.current = !0), 229 === e.which)) return;
            if (!X.current && e.currentTarget === D.current) return;
            if (y && Mt(e.key, S, w, O))
              return (
                E(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, i.sb)(c.domReference) &&
                  (k
                    ? null == N || N.events.emit("virtualfocus", c.domReference)
                    : c.domReference.focus())
                )
              );
            const t = U.current,
              r = re(l, I),
              u = oe(l, I);
            if (
              (F ||
                ("Home" === e.key && (E(e), (U.current = r), q()),
                "End" === e.key && (E(e), (U.current = u), q())),
              O > 1)
            ) {
              const t =
                  A ||
                  Array.from({ length: l.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = ue(t, O, T),
                o = n.findIndex((e) => null != e && !ae(l.current, e, I)),
                i = n.reduce(
                  (e, t, n) => (null == t || ae(l.current, t, I) ? e : n),
                  -1,
                ),
                s =
                  n[
                    se(
                      {
                        current: n.map((e) =>
                          null != e ? l.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: S,
                        loop: b,
                        rtl: w,
                        cols: O,
                        disabledIndices: le(
                          [
                            ...(I ||
                              l.current.map((e, t) =>
                                ae(l.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: i,
                        prevIndex: ce(
                          U.current > u ? r : U.current,
                          t,
                          n,
                          O,
                          e.key === G
                            ? "bl"
                            : e.key === (w ? Z : ee)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != s && ((U.current = s), q()), "both" === S)) return;
            }
            if (It(e.key, S)) {
              if (
                (E(e),
                n && !k && s(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (U.current = St(e.key, S, w) ? r : u), void q();
              St(e.key, S, w)
                ? (U.current = b
                    ? t >= u
                      ? g && t !== l.current.length
                        ? -1
                        : r
                      : ie(l, { startingIndex: t, disabledIndices: I })
                    : Math.min(
                        u,
                        ie(l, { startingIndex: t, disabledIndices: I }),
                      ))
                : (U.current = b
                    ? t <= r
                      ? g && -1 !== t
                        ? l.current.length
                        : u
                      : ie(l, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: I,
                        })
                    : Math.max(
                        r,
                        ie(l, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: I,
                        }),
                      )),
                ne(l, U.current) && (U.current = -1),
                q();
            }
          }),
          Ee = r.useMemo(
            () => k && n && ge && { "aria-activedescendant": pe || de },
            [k, n, ge, pe, de],
          ),
          Re = r.useMemo(
            () => ({
              "aria-orientation": "both" === S ? void 0 : S,
              ...(F ? {} : Ee),
              onKeyDown: ye,
              onPointerMove() {
                z.current = !0;
              },
            }),
            [Ee, ye, S, F],
          ),
          we = r.useMemo(() => {
            function e(e) {
              "auto" === _ && a(e.nativeEvent) && (j.current = !0);
            }
            function t(e) {
              (j.current = _),
                "auto" === _ && f(e.nativeEvent) && (j.current = !0);
            }
            return {
              ...Ee,
              onKeyDown(e) {
                var t;
                z.current = !1;
                const r = e.key.startsWith("Arrow"),
                  i = ["Home", "End"].includes(e.key),
                  s = r || i,
                  u =
                    null == N ||
                    null == (t = N.nodesRef.current.find((e) => e.id === P)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  c = Ot(e.key, S, w),
                  a = Mt(e.key, S, w, O),
                  f = Ot(e.key, u, w),
                  d = It(e.key, S),
                  h = (y ? f : d) || "Enter" === e.key || "" === e.key.trim();
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
                              (function t(o, i) {
                                i > r && ((n = o), (r = i)),
                                  Ne(e, o).forEach((e) => {
                                    t(e.id, i + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(N.nodesRef.current, t.id)
                        : null;
                  if (s && n && L) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (c || a) {
                      var p, m;
                      const r =
                          (null == (p = n.context)
                            ? void 0
                            : p.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (m = n.context)
                              ? void 0
                              : m.elements.domReference
                            : c
                              ? l.current.find(
                                  (e) => (null == e ? void 0 : e.id) === de,
                                )
                              : null;
                      o && (E(e), o.dispatchEvent(t), me(void 0));
                    }
                    var g;
                    if ((d || i) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          E(e),
                          void (
                            null == (g = n.context.elements.domReference) ||
                            g.dispatchEvent(t)
                          )
                        );
                  }
                  return ye(e);
                }
                if (n || C || !r) {
                  if (h) {
                    const t = It(e.key, u);
                    K.current = y && t ? null : e.key;
                  }
                  y
                    ? f &&
                      (E(e),
                      n
                        ? ((U.current = re(l, $.current)), q())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != v && (U.current = v),
                      E(e),
                      !n && C ? o(!0, e.nativeEvent, "list-navigation") : ye(e),
                      n && q());
                }
              },
              onFocus() {
                n && !k && ((U.current = -1), q());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, Ee, O, ye, $, _, l, y, q, o, n, C, S, P, w, v, N, k, L]);
        return r.useMemo(
          () => (p ? { reference: we, floating: Re, item: be } : {}),
          [p, we, Re, be],
        );
      }
      const At = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function Tt(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: i } = e,
          { enabled: s = !0, role: u = "dialog" } = t,
          c = null != (n = At.get(u)) ? n : u,
          l = Re(),
          a = null != xe(),
          f = r.useMemo(
            () =>
              "tooltip" === c || "label" === u
                ? {
                    ["aria-" + ("label" === u ? "labelledby" : "describedby")]:
                      o ? i : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === c ? "dialog" : c,
                    "aria-controls": o ? i : void 0,
                    ...("listbox" === c && { role: "combobox" }),
                    ...("menu" === c && { id: l }),
                    ...("menu" === c && a && { role: "menuitem" }),
                    ...("select" === u && { "aria-autocomplete": "none" }),
                    ...("combobox" === u && { "aria-autocomplete": "list" }),
                  },
            [c, i, a, o, l, u],
          ),
          d = r.useMemo(() => {
            const e = { id: i, ...(c && { role: c }) };
            return "tooltip" === c || "label" === u
              ? e
              : { ...e, ...("menu" === c && { "aria-labelledby": l }) };
          }, [c, i, l, u]),
          h = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: i + "-option" }) };
              switch (u) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [i, u],
          );
        return r.useMemo(
          () => (s ? { reference: f, floating: d, item: h } : {}),
          [s, f, d, h],
        );
      }
      function Dt(e, t) {
        var n;
        const { open: o, dataRef: i } = e,
          {
            listRef: s,
            activeIndex: u,
            onMatch: c,
            onTypingChange: l,
            enabled: a = !0,
            findMatch: f = null,
            resetMs: d = 750,
            ignoreKeys: h = [],
            selectedIndex: p = null,
          } = t,
          m = r.useRef(-1),
          v = r.useRef(""),
          g = r.useRef(null != (n = null != p ? p : u) ? n : -1),
          b = r.useRef(null),
          y = V(c),
          R = V(l),
          w = Oe(f),
          k = Oe(h);
        fe(() => {
          o && (Se(m), (b.current = null), (v.current = ""));
        }, [o]),
          fe(() => {
            var e;
            o &&
              "" === v.current &&
              (g.current = null != (e = null != p ? p : u) ? e : -1);
          }, [o, p, u]);
        const _ = V((e) => {
            e
              ? i.current.typing || ((i.current.typing = e), R(e))
              : i.current.typing && ((i.current.typing = e), R(e));
          }),
          x = V((e) => {
            function t(e, t, n) {
              const r = w.current
                ? w.current(t, n)
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
                (-1 === t(n, n, v.current) ? _(!1) : " " === e.key && E(e)),
              null == n ||
                k.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (E(e), _(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              v.current === e.key &&
              ((v.current = ""), (g.current = b.current)),
              (v.current += e.key),
              Se(m),
              (m.current = window.setTimeout(() => {
                (v.current = ""), (g.current = b.current), _(!1);
              }, d));
            const r = g.current,
              i = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                v.current,
              );
            -1 !== i
              ? (y(i), (b.current = i))
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
          () => (a ? { reference: C, floating: I } : {}),
          [a, C, I],
        );
      }
      function Pt(e, t) {
        const [n, r] = e;
        let o = !1;
        const i = t.length;
        for (let e = 0, s = i - 1; e < i; s = e++) {
          const [i, u] = t[e] || [0, 0],
            [c, l] = t[s] || [0, 0];
          u >= r != l >= r &&
            n <= ((c - i) * (r - u)) / (l - u) + i &&
            (o = !o);
        }
        return o;
      }
      function Nt(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = 0.5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0,
        } = e;
        let o,
          s = !1,
          c = null,
          l = null,
          a = performance.now();
        const f = (e) => {
          let {
            x: n,
            y: f,
            placement: d,
            elements: h,
            onClose: p,
            nodeId: m,
            tree: v,
          } = e;
          return function (e) {
            function b() {
              clearTimeout(o), p();
            }
            if (
              (clearTimeout(o),
              !h.domReference ||
                !h.floating ||
                null == d ||
                null == n ||
                null == f)
            )
              return;
            const { clientX: y, clientY: E } = e,
              R = [y, E],
              w = g(e),
              k = "mouseleave" === e.type,
              _ = u(h.floating, w),
              x = u(h.domReference, w),
              C = h.domReference.getBoundingClientRect(),
              I = h.floating.getBoundingClientRect(),
              S = d.split("-")[0],
              O = n > I.right - I.width / 2,
              M = f > I.bottom - I.height / 2,
              L = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(R, C),
              A = I.width > C.width,
              T = I.height > C.height,
              D = (A ? C : I).left,
              P = (A ? C : I).right,
              N = (T ? C : I).top,
              q = (T ? C : I).bottom;
            if (_ && ((s = !0), !k)) return;
            if ((x && (s = !1), x && !k)) return void (s = !0);
            if (
              k &&
              (0, i.vq)(e.relatedTarget) &&
              u(h.floating, e.relatedTarget)
            )
              return;
            if (
              v &&
              Ne(v.nodesRef.current, m).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === S && f >= C.bottom - 1) ||
              ("bottom" === S && f <= C.top + 1) ||
              ("left" === S && n >= C.right - 1) ||
              ("right" === S && n <= C.left + 1)
            )
              return b();
            let F = [];
            switch (S) {
              case "top":
                F = [
                  [D, C.top + 1],
                  [D, I.bottom - 1],
                  [P, I.bottom - 1],
                  [P, C.top + 1],
                ];
                break;
              case "bottom":
                F = [
                  [D, I.top + 1],
                  [D, C.bottom - 1],
                  [P, C.bottom - 1],
                  [P, I.top + 1],
                ];
                break;
              case "left":
                F = [
                  [I.right - 1, q],
                  [I.right - 1, N],
                  [C.left + 1, N],
                  [C.left + 1, q],
                ];
                break;
              case "right":
                F = [
                  [C.right - 1, q],
                  [C.right - 1, N],
                  [I.left + 1, N],
                  [I.left + 1, q],
                ];
            }
            if (!Pt([y, E], F)) {
              if (s && !L) return b();
              if (!k && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === c || null === l || 0 === r)
                    return (c = e), (l = t), (a = n), null;
                  const o = e - c,
                    i = t - l,
                    s = Math.sqrt(o * o + i * i);
                  return (c = e), (l = t), (a = n), s / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return b();
              }
              Pt(
                [y, E],
                (function (e) {
                  let [n, r] = e;
                  switch (S) {
                    case "top":
                      return [
                        [A ? n + t / 2 : O ? n + 4 * t : n - 4 * t, r + t + 1],
                        [A ? n - t / 2 : O ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [I.left, O || A ? I.bottom - t : I.top],
                          [
                            I.right,
                            O ? (A ? I.bottom - t : I.top) : I.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [A ? n + t / 2 : O ? n + 4 * t : n - 4 * t, r - t],
                        [A ? n - t / 2 : O ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [I.left, O || A ? I.top + t : I.bottom],
                          [I.right, O ? (A ? I.top + t : I.bottom) : I.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          T ? r + t / 2 : M ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          T ? r - t / 2 : M ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [M || T ? I.right - t : I.left, I.top],
                          [
                            M ? (T ? I.right - t : I.left) : I.right - t,
                            I.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, T ? r + t / 2 : M ? r + 4 * t : r - 4 * t],
                        [n - t, T ? r - t / 2 : M ? r + 4 * t : r - 4 * t],
                        ...[
                          [M || T ? I.left + t : I.right, I.top],
                          [
                            M ? (T ? I.left + t : I.right) : I.left + t,
                            I.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, f]),
              )
                ? !s && r && (o = window.setTimeout(b, 40))
                : b();
            }
          };
        };
        return (f.__options = { blockPointerEvents: n }), f;
      }
    },
    54806: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => v });
      var r = n(90626),
        o = n(86709),
        i = n(45747),
        s = n(74500),
        u = n(57168);
      function c(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var l = class extends s.Q {
          #e;
          #t;
          #n;
          #r;
          #o;
          #i;
          #s;
          #u;
          constructor(e, t, n) {
            super(),
              (this.#e = e),
              (this.#r = n),
              (this.#n = []),
              (this.#o = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#o.forEach((e) => {
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
              this.#o.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, n) {
            (this.#n = e),
              (this.#r = t),
              o.j.batch(() => {
                const e = this.#o,
                  t = this.#l(this.#n);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, n),
                );
                const r = t.map((e) => e.observer),
                  o = r.map((e) => e.getCurrentResult()),
                  i = r.some((t, n) => t !== e[n]);
                (e.length !== r.length || i) &&
                  ((this.#o = r),
                  (this.#t = o),
                  this.hasListeners() &&
                    (c(e, r).forEach((e) => {
                      e.destroy();
                    }),
                    c(r, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#c(e, t);
                      });
                    }),
                    this.#a()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#o.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#o;
          }
          getOptimisticResult(e, t) {
            const n = this.#l(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [n, (e) => this.#f(e ?? n, t), () => this.#d(n, e)];
          }
          #d(e, t) {
            const n = this.#l(t);
            return n.map((t, r) => {
              const o = e[r];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? o
                : t.observer.trackResult(o, (e) => {
                    n.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #f(e, t) {
            return t
              ? ((this.#i && this.#t === this.#u && t === this.#s) ||
                  ((this.#s = t),
                  (this.#u = this.#t),
                  (this.#i = (0, u.BH)(this.#i, t(e)))),
                this.#i)
              : e;
          }
          #l(e) {
            const t = new Map(this.#o.map((e) => [e.options.queryHash, e])),
              n = [];
            return (
              e.forEach((e) => {
                const r = this.#e.defaultQueryOptions(e),
                  o = t.get(r.queryHash);
                o
                  ? n.push({ defaultedQueryOptions: r, observer: o })
                  : n.push({
                      defaultedQueryOptions: r,
                      observer: new i.$(this.#e, r),
                    });
              }),
              n
            );
          }
          #c(e, t) {
            const n = this.#o.indexOf(e);
            -1 !== n &&
              ((this.#t = (function (e, t, n) {
                const r = e.slice(0);
                return (r[t] = n), r;
              })(this.#t, n, t)),
              this.#a());
          }
          #a() {
            if (this.hasListeners()) {
              this.#i !==
                this.#f(this.#d(this.#t, this.#n), this.#r?.combine) &&
                o.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        a = n(75233),
        f = n(22730),
        d = n(43424),
        h = n(19086),
        p = n(44407),
        m = n(19866);
      function v({ queries: e, ...t }, n) {
        const s = (0, a.jE)(n),
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
        const [g] = r.useState(() => new l(s, v, t)),
          [b, y, E] = g.getOptimisticResult(v, t.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (e) => (u ? m.l : g.subscribe(o.j.batchCalls(e))),
            [g, u],
          ),
          () => g.getCurrentResult(),
          () => g.getCurrentResult(),
        ),
          r.useEffect(() => {
            g.setQueries(v, t, { listeners: !1 });
          }, [v, t, g]);
        const R = b.some((e, t) => (0, p.EU)(v[t], e))
          ? b.flatMap((e, t) => {
              const n = v[t];
              if (n) {
                const t = new i.$(s, n);
                if ((0, p.EU)(n, e)) return (0, p.iL)(n, t, c);
                (0, p.nE)(e, u) && (0, p.iL)(n, t, c);
              }
              return [];
            })
          : [];
        if (R.length > 0) throw Promise.all(R);
        const w = b.find((e, t) => {
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
        if (w?.error) throw w.error;
        return y(E());
      }
    },
  },
]);
