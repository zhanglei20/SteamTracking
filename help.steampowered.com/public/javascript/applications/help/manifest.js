/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "9856226";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t = {},
    r = {};
  function l(a) {
    var e = r[a];
    if (void 0 !== e) return e.exports;
    var n = (r[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, l), (n.loaded = !0), n.exports;
  }
  (l.m = t),
    (a = []),
    (l.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], r = !0, c = 0; c < n.length; c++)
            (!1 & i || t >= i) && Object.keys(l.O).every((a) => l.O[a](n[c]))
              ? n.splice(c--, 1)
              : ((r = !1), i < t && (t = i));
          if (r) {
            a.splice(d--, 1);
            var s = o();
            void 0 !== s && (e = s);
          }
        }
        return e;
      }
      i = i || 0;
      for (var d = a.length; d > 0 && a[d - 1][2] > i; d--) a[d] = a[d - 1];
      a[d] = [n, o, i];
    }),
    (l.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return l.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (l.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      l.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var r = 2 & o && a; "object" == typeof r && !~e.indexOf(r); r = n(r))
        Object.getOwnPropertyNames(r).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), l.d(i, t), i;
    }),
    (l.d = (a, e) => {
      for (var n in e)
        l.o(e, n) &&
          !l.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (l.f = {}),
    (l.e = (a) =>
      Promise.all(Object.keys(l.f).reduce((e, n) => (l.f[n](a, e), e), []))),
    (l.u = (a) =>
      "javascript/applications/help/" +
      {
        60: "localization/main_spanish-json",
        129: "localization/shared_swedish-json",
        139: "localization/shared_koreana-json",
        198: "localization/main_schinese-json",
        286: "localization/main_ukrainian-json",
        759: "localization/main_koreana-json",
        823: "localization/shared_portuguese-json",
        831: "localization/main_danish-json",
        833: "localization/main_vietnamese-json",
        976: "greenenvelope",
        1389: "localization/shared_japanese-json",
        1423: "localization/shared_czech-json",
        1721: "localization/shared_arabic-json",
        1724: "localization/main_turkish-json",
        2021: "localization/shared_romanian-json",
        2199: "localization/shared_finnish-json",
        2446: "localization/main_brazilian-json",
        2481: "localization/shared_bulgarian-json",
        2664: "localization/shared_english-json",
        2959: "localization/shared_polish-json",
        3140: "localization/main_greek-json",
        3589: "localization/main_bulgarian-json",
        3594: "localization/shared_brazilian-json",
        3867: "localization/main_polish-json",
        4102: "localization/main_indonesian-json",
        4694: "localization/main_french-json",
        4952: "localization/shared_thai-json",
        5052: "localization/main_english-json",
        5103: "localization/main_sc_schinese-json",
        5388: "localization/main_norwegian-json",
        5553: "localization/shared_tchinese-json",
        5803: "localization/shared_latam-json",
        6120: "localization/shared_norwegian-json",
        6428: "localization/main_italian-json",
        6430: "localization/shared_dutch-json",
        6472: "localization/shared_turkish-json",
        6577: "localization/shared_russian-json",
        6752: "localization/shared_spanish-json",
        6888: "localization/shared_german-json",
        7345: "localization/main_hungarian-json",
        7442: "localization/shared_schinese-json",
        7553: "localization/main_romanian-json",
        7696: "localization/shared_italian-json",
        7724: "localization/main_thai-json",
        8021: "localization/main_russian-json",
        8291: "localization/shared_danish-json",
        8443: "localization/shared_sc_schinese-json",
        8522: "localization/shared_indonesian-json",
        8547: "localization/main_finnish-json",
        8674: "localization/shared_french-json",
        8724: "localization/main_german-json",
        8749: "localization/main_tchinese-json",
        8872: "localization/shared_greek-json",
        9053: "localization/shared_hungarian-json",
        9298: "localization/shared_ukrainian-json",
        9387: "localization/main_portuguese-json",
        9453: "localization/main_swedish-json",
        9515: "localization/main_czech-json",
        9783: "localization/main_latam-json",
        9857: "localization/main_japanese-json",
        9869: "localization/shared_vietnamese-json",
        9914: "localization/main_dutch-json",
      }[a] +
      ".js?contenthash=" +
      {
        60: "52d36db8a3eb8ce8bc5e",
        129: "c81af2c79fbad23a12b4",
        139: "b2f2c38e624609d1269f",
        198: "83dbddd087af3cc381ea",
        286: "f528cf3967e461df2ca3",
        759: "9cb42abad86b3dabb6c8",
        823: "8b9252411e777fc44703",
        831: "10dc211dfd129c6a445e",
        833: "f3f0b28b561cb224bdc4",
        976: "95d7fd1dbb92a1b7099b",
        1389: "cb47fb644c2e39369e2e",
        1423: "ef3ae5cc2a60325fdd72",
        1721: "c634214059eacac26a24",
        1724: "edf9cc0e15f8d752612d",
        2021: "4198e58867486f8ab65e",
        2199: "3eaf66e17c58e62dc7af",
        2446: "1e14cfdf0fc0983649b4",
        2481: "625c41add5c800dd6f3d",
        2664: "8c5e9885890c36d2d45c",
        2959: "87324b9c3c3644f65e7e",
        3140: "5ff8d86b8d7df01c5d0b",
        3589: "2d4113d858d09aaabfcb",
        3594: "b9f5fd259b33fc93848a",
        3867: "5fdc84016800f0b3c40b",
        4102: "be3069fad7610e99339b",
        4694: "59882d00b140e10d48f6",
        4952: "d0cf272896a44fda276b",
        5052: "9fb80ef333ae1a1994c6",
        5103: "562df98ec7b9d228b91b",
        5388: "710efa21ee07c9414d56",
        5553: "87259f3a8c16ac62f41e",
        5803: "b7e3b870e6e01422f5c3",
        6120: "1217d47fe37712aa67ca",
        6428: "6afb711ae8d4f17c01cd",
        6430: "8a671e70e0b2943fe4e9",
        6472: "c55ceb733af545388603",
        6577: "989ff9ed43f627f582c7",
        6752: "8aa0c2c2f86c001b21c1",
        6888: "4e53232a87089fc3b239",
        7345: "99ee2c8fc99ede9a068c",
        7442: "20c59761256842ca9f2e",
        7553: "1428a4ee622040531f51",
        7696: "489ce352d75e453a38d1",
        7724: "89f01c4ce3a9b216de12",
        8021: "a9f8dff17bd16871e4c5",
        8291: "4c9588e586f5cb232e18",
        8443: "505a73108fc538196a3d",
        8522: "e0d7331eb869baf3ffc5",
        8547: "03361207aad5f54dc1a7",
        8674: "81bfc4b0e508c2043c4f",
        8724: "0b65723fc78210be4b29",
        8749: "3fc185a76a54a0d88045",
        8872: "d4b8f191d83c3939b4ea",
        9053: "3070b9fce89c137a98b3",
        9298: "4d81874c87bae7bf2bfb",
        9387: "bc0a6b1e79938252231e",
        9453: "e7f2b091158c018a274a",
        9515: "f4d42e6a69b6661681a8",
        9783: "f4daed142667ba86fecc",
        9857: "cb15ede643a0292bc2ab",
        9869: "fd42131e8c344147e20a",
        9914: "073440f813341702a1c0",
      }[a]),
    (l.miniCssF = (a) =>
      "css/applications/help/greenenvelope.css?contenthash=21f6413aff50f54e7633"),
    (l.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (l.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (l.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var r, c;
        if (void 0 !== n)
          for (
            var s = document.getElementsByTagName("script"), d = 0;
            d < s.length;
            d++
          ) {
            var f = s[d];
            if (
              f.getAttribute("src") == a ||
              f.getAttribute("data-webpack") == i + n
            ) {
              r = f;
              break;
            }
          }
        r ||
          ((c = !0),
          ((r = document.createElement("script")).charset = "utf-8"),
          (r.timeout = 120),
          l.nc && r.setAttribute("nonce", l.nc),
          r.setAttribute("data-webpack", i + n),
          (r.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (r.onerror = r.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              r.parentNode && r.parentNode.removeChild(r),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: r }),
            12e4,
          );
        (r.onerror = b.bind(null, r.onerror)),
          (r.onload = b.bind(null, r.onload)),
          c && document.head.appendChild(r);
      }
    }),
    (l.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (l.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (l.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var o = l.miniCssF(a),
                i = l.p + o;
              if (
                ((a, e) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i =
                      (r = n[o]).getAttribute("data-href") ||
                      r.getAttribute("href");
                    if ("stylesheet" === r.rel && (i === a || i === e))
                      return r;
                  }
                  var t = document.getElementsByTagName("style");
                  for (o = 0; o < t.length; o++) {
                    var r;
                    if (
                      (i = (r = t[o]).getAttribute("data-href")) === a ||
                      i === e
                    )
                      return r;
                  }
                })(o, i)
              )
                return e();
              ((a, e, n, o, i) => {
                var t = document.createElement("link");
                (t.rel = "stylesheet"),
                  (t.type = "text/css"),
                  (t.onerror = t.onload =
                    (n) => {
                      if (((t.onerror = t.onload = null), "load" === n.type))
                        o();
                      else {
                        var r = n && n.type,
                          l = (n && n.target && n.target.href) || e,
                          c = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              r +
                              ": " +
                              l +
                              ")",
                          );
                        (c.name = "ChunkLoadError"),
                          (c.code = "CSS_CHUNK_LOAD_FAILED"),
                          (c.type = r),
                          (c.request = l),
                          t.parentNode && t.parentNode.removeChild(t),
                          i(c);
                      }
                    }),
                  (t.href = e),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(a, i, null, e, n);
            }),
          e = { 4556: 0 };
        l.f.miniCss = (n, o) => {
          e[n]
            ? o.push(e[n])
            : 0 !== e[n] &&
              { 976: 1 }[n] &&
              o.push(
                (e[n] = a(n).then(
                  () => {
                    e[n] = 0;
                  },
                  (a) => {
                    throw (delete e[n], a);
                  },
                )),
              );
        };
      }
    })(),
    (() => {
      var a = { 4556: 0 };
      (l.f.j = (e, n) => {
        var o = l.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = l.p + l.u(e),
              r = new Error();
            l.l(
              t,
              (n) => {
                if (l.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (r.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + t + ")"),
                    (r.name = "ChunkLoadError"),
                    (r.type = i),
                    (r.request = t),
                    o[1](r);
                }
              },
              "chunk-" + e,
              e,
            );
          } else a[e] = 0;
      }),
        (l.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, r, c] = n,
            s = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in r) l.o(r, o) && (l.m[o] = r[o]);
            if (c) var d = c(l);
          }
          for (e && e(n); s < t.length; s++)
            (i = t[s]), l.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return l.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
