import { d as s } from "./chunk-IWD5Y773.js";
var a = "./store_brazilian-MAE7X2AA.json";
var o = "./store_bulgarian-2KAK3VBA.json";
var n = "./store_czech-GKCAI5DA.json";
var _ = "./store_danish-25QSSFCA.json";
var r = "./store_dutch-5YJUJBCA.json";
var l = "./store_english-2MZKFBBA.json";
var c = "./store_finnish-QVJ3MJDA.json";
var d = "./store_french-AIY3HOCA.json";
var p = "./store_german-DVD7XXDA.json";
var m = "./store_greek-GZVRIRAA.json";
var u = "./store_hungarian-2NGDA4BA.json";
var h = "./store_indonesian-6MP6JABA.json";
var g = "./store_italian-PGBXFXBA.json";
var v = "./store_japanese-2NOLYMAA.json";
var y = "./store_koreana-BXAKC7DA.json";
var w = "./store_latam-BDX3SMCA.json";
var f = "./store_norwegian-7XMCSOBA.json";
var b = "./store_polish-3BGU4SBA.json";
var k = "./store_portuguese-4YVLX2AA.json";
var S = "./store_romanian-HVNBBYAA.json";
var z = "./store_russian-64IOBDBA.json";
var $ = "./store_schinese-ZDPXP7AA.json";
var j = "./store_spanish-NDHQDUDA.json";
var P = "./store_swedish-VK5DKDBA.json";
var D = "./store_tchinese-IHGZZ3AA.json";
var V = "./store_thai-RWH2NZDA.json";
var C = "./store_turkish-4XIZRRBA.json";
var T = "./store_ukrainian-K5AQDKBA.json";
var L = "./store_vietnamese-TAEMJHBA.json";
var e = {};
e.brazilian = a;
e.bulgarian = o;
e.czech = n;
e.danish = _;
e.dutch = r;
e.english = l;
e.finnish = c;
e.french = d;
e.german = p;
e.greek = m;
e.hungarian = u;
e.indonesian = h;
e.italian = g;
e.japanese = v;
e.koreana = y;
e.latam = w;
e.norwegian = f;
e.polish = b;
e.portuguese = k;
e.romanian = S;
e.russian = z;
e.schinese = $;
e.spanish = j;
e.swedish = P;
e.tchinese = D;
e.thai = V;
e.turkish = C;
e.ukrainian = T;
e.vietnamese = L;
async function t(i) {
  if (e[i]) return (await fetch(new URL(e[i], import.meta.url))).json();
}
var ht = s(t);
export { ht as a };
