/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10530616";
(() => {
  "use strict";
  var a,
    e,
    n,
    o,
    i,
    t = {},
    c = {};
  function r(a) {
    var e = c[a];
    if (void 0 !== e) return e.exports;
    var n = (c[a] = { id: a, loaded: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, r), (n.loaded = !0), n.exports;
  }
  (r.m = t),
    (a = []),
    (r.O = (e, n, o, i) => {
      if (!n) {
        var t = 1 / 0;
        for (d = 0; d < a.length; d++) {
          for (var [n, o, i] = a[d], c = !0, l = 0; l < n.length; l++)
            (!1 & i || t >= i) && Object.keys(r.O).every((a) => r.O[a](n[l]))
              ? n.splice(l--, 1)
              : ((c = !1), i < t && (t = i));
          if (c) {
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
    (r.n = (a) => {
      var e = a && a.__esModule ? () => a.default : () => a;
      return r.d(e, { a: e }), e;
    }),
    (n = Object.getPrototypeOf
      ? (a) => Object.getPrototypeOf(a)
      : (a) => a.__proto__),
    (r.t = function (a, o) {
      if ((1 & o && (a = this(a)), 8 & o)) return a;
      if ("object" == typeof a && a) {
        if (4 & o && a.__esModule) return a;
        if (16 & o && "function" == typeof a.then) return a;
      }
      var i = Object.create(null);
      r.r(i);
      var t = {};
      e = e || [null, n({}), n([]), n(n)];
      for (var c = 2 & o && a; "object" == typeof c && !~e.indexOf(c); c = n(c))
        Object.getOwnPropertyNames(c).forEach((e) => (t[e] = () => a[e]));
      return (t.default = () => a), r.d(i, t), i;
    }),
    (r.d = (a, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(a, n) &&
          Object.defineProperty(a, n, { enumerable: !0, get: e[n] });
    }),
    (r.f = {}),
    (r.e = (a) =>
      Promise.all(Object.keys(r.f).reduce((e, n) => (r.f[n](a, e), e), []))),
    (r.u = (a) =>
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
        1602: "localization/main_arabic-json",
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
        129: "dd75ce1f207ac6ada42e",
        139: "bc73790976fec948f5ed",
        198: "83dbddd087af3cc381ea",
        286: "f528cf3967e461df2ca3",
        759: "9cb42abad86b3dabb6c8",
        823: "a7bf99f0ee7964103b3f",
        831: "10dc211dfd129c6a445e",
        833: "f3f0b28b561cb224bdc4",
        976: "66955d08674f7f82d250",
        1389: "06df6f66ef388fd5a702",
        1423: "ce7dd2215669d3444c0f",
        1602: "c9e714b4f4196c855fac",
        1721: "f55cfb9b49202283e1b5",
        1724: "edf9cc0e15f8d752612d",
        2021: "b21b86ac325a5d81ce92",
        2199: "5f3ab6c5c6faf0d75644",
        2446: "1e14cfdf0fc0983649b4",
        2481: "3da9f33e95d8632bc809",
        2664: "143f3016599f60c8728b",
        2959: "b822d1761f25263da10b",
        3140: "5ff8d86b8d7df01c5d0b",
        3589: "2d4113d858d09aaabfcb",
        3594: "2c63ec6b6a9d055c185c",
        3867: "5fdc84016800f0b3c40b",
        4102: "be3069fad7610e99339b",
        4694: "59882d00b140e10d48f6",
        4952: "400d0836c975f1fda796",
        5052: "9fb80ef333ae1a1994c6",
        5103: "562df98ec7b9d228b91b",
        5388: "710efa21ee07c9414d56",
        5553: "0bb0bca3d9865eb34c02",
        5803: "175c1df22f12532cad19",
        6120: "86582af991ef07dda689",
        6428: "6afb711ae8d4f17c01cd",
        6430: "dbd1311fe5cdfcd08864",
        6472: "ef83dc1858d448dde17e",
        6577: "03c70fdce34a162b4794",
        6752: "c6533baacf5e2d177de0",
        6888: "4dae3d2f528908db1284",
        7345: "99ee2c8fc99ede9a068c",
        7442: "b91a5803c8f3d7b53eff",
        7553: "1428a4ee622040531f51",
        7696: "fb73cf02a0256e7fe61a",
        7724: "89f01c4ce3a9b216de12",
        8021: "a9f8dff17bd16871e4c5",
        8291: "07547d62a7bee27350ce",
        8443: "c3df70855ccdd0d40d2b",
        8522: "000c357b6485655d301c",
        8547: "03361207aad5f54dc1a7",
        8674: "cbb866c1bff0e2ad8d6b",
        8724: "0b65723fc78210be4b29",
        8749: "3fc185a76a54a0d88045",
        8872: "8c47358d8888525a97c6",
        9053: "37c96f3049e1252c01e5",
        9298: "63a39061b501ce68ab2e",
        9387: "bc0a6b1e79938252231e",
        9453: "e7f2b091158c018a274a",
        9515: "f4d42e6a69b6661681a8",
        9783: "f4daed142667ba86fecc",
        9857: "cb15ede643a0292bc2ab",
        9869: "c8a95ebb7900d156d1ef",
        9914: "073440f813341702a1c0",
      }[a]),
    (r.miniCssF = (a) =>
      "css/applications/help/greenenvelope.css?contenthash=2de6bf140c838f82a5ee"),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (a) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (a, e) => Object.prototype.hasOwnProperty.call(a, e)),
    (o = {}),
    (i = "Help:"),
    (r.l = (a, e, n, t) => {
      if (o[a]) o[a].push(e);
      else {
        var c, l;
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
              c = f;
              break;
            }
          }
        c ||
          ((l = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          r.nc && c.setAttribute("nonce", r.nc),
          c.setAttribute("data-webpack", i + n),
          (c.src = a)),
          (o[a] = [e]);
        var b = (e, n) => {
            (c.onerror = c.onload = null), clearTimeout(h);
            var i = o[a];
            if (
              (delete o[a],
              c.parentNode && c.parentNode.removeChild(c),
              i && i.forEach((a) => a(n)),
              e)
            )
              return e(n);
          },
          h = setTimeout(
            b.bind(null, void 0, { type: "timeout", target: c }),
            12e4,
          );
        (c.onerror = b.bind(null, c.onerror)),
          (c.onload = b.bind(null, c.onload)),
          l && document.head.appendChild(c);
      }
    }),
    (r.r = (a) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (r.nmd = (a) => ((a.paths = []), a.children || (a.children = []), a)),
    (r.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var a = (a) =>
            new Promise((e, n) => {
              var o = r.miniCssF(a),
                i = r.p + o;
              if (
                ((a, e) => {
                  for (
                    var n = document.getElementsByTagName("link"), o = 0;
                    o < n.length;
                    o++
                  ) {
                    var i =
                      (c = n[o]).getAttribute("data-href") ||
                      c.getAttribute("href");
                    if ("stylesheet" === c.rel && (i === a || i === e))
                      return c;
                  }
                  var t = document.getElementsByTagName("style");
                  for (o = 0; o < t.length; o++) {
                    var c;
                    if (
                      (i = (c = t[o]).getAttribute("data-href")) === a ||
                      i === e
                    )
                      return c;
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
                        var c = n && n.type,
                          r = (n && n.target && n.target.href) || e,
                          l = new Error(
                            "Loading CSS chunk " +
                              a +
                              " failed.\n(" +
                              c +
                              ": " +
                              r +
                              ")",
                          );
                        (l.name = "ChunkLoadError"),
                          (l.code = "CSS_CHUNK_LOAD_FAILED"),
                          (l.type = c),
                          (l.request = r),
                          t.parentNode && t.parentNode.removeChild(t),
                          i(l);
                      }
                    }),
                  (t.href = e),
                  n
                    ? n.parentNode.insertBefore(t, n.nextSibling)
                    : document.head.appendChild(t);
              })(a, i, null, e, n);
            }),
          e = { 4556: 0 };
        r.f.miniCss = (n, o) => {
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
      (r.f.j = (e, n) => {
        var o = r.o(a, e) ? a[e] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else if (4556 != e) {
            var i = new Promise((n, i) => (o = a[e] = [n, i]));
            n.push((o[2] = i));
            var t = r.p + r.u(e),
              c = new Error();
            r.l(
              t,
              (n) => {
                if (r.o(a, e) && (0 !== (o = a[e]) && (a[e] = void 0), o)) {
                  var i = n && ("load" === n.type ? "missing" : n.type),
                    t = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + t + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = i),
                    (c.request = t),
                    o[1](c);
                }
              },
              "chunk-" + e,
              e,
            );
          } else a[e] = 0;
      }),
        (r.O.j = (e) => 0 === a[e]);
      var e = (e, n) => {
          var o,
            i,
            [t, c, l] = n,
            s = 0;
          if (t.some((e) => 0 !== a[e])) {
            for (o in c) r.o(c, o) && (r.m[o] = c[o]);
            if (l) var d = l(r);
          }
          for (e && e(n); s < t.length; s++)
            (i = t[s]), r.o(a, i) && a[i] && a[i][0](), (a[i] = 0);
          return r.O(d);
        },
        n = (self.webpackChunkHelp = self.webpackChunkHelp || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
})();
