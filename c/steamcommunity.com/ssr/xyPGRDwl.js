var _ = (_, _, _) => {
    let _ = _.lastIndexOf(`?`),
      _ = _[_ === -1 || _ < _.lastIndexOf(`/`) ? _ : _.slice(0, _)];
    return _
      ? typeof _ == `function`
        ? _()
        : Promise.resolve(_)
      : new Promise((_, _) => {
          (typeof queueMicrotask == `function` ? queueMicrotask : setTimeout)(
            _.bind(
              null,
              Error(
                `Unknown variable dynamic import: ` +
                  _ +
                  (_.split(`/`).length === _
                    ? ``
                    : `. Note that variables only represent file names one level deep.`),
              ),
            ),
          );
        });
  },
  _ = Intl.DateTimeFormat().resolvedOptions().timeZone;
`document` in globalThis &&
  document.cookie
    .split(`;`)
    .find((_) => _.trim().startsWith(`timezoneName`))
    ?.split(`=`)[1];
function _() {
  `document` in globalThis &&
    (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
}
_(),
  _({
    enforceActions: `never`,
  }),
  _();
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _] = await _([
      _(
        Object.assign({
          "../../../shared/localization/shared_arabic.json": () =>
            _(() => import(`./tmltOu0P.js`), [], import.meta.url),
          "../../../shared/localization/shared_brazilian.json": () =>
            _(() => import(`./4tAyV6MF.js`), [], import.meta.url),
          "../../../shared/localization/shared_bulgarian.json": () =>
            _(() => import(`./C-QDp5tQ.js`), [], import.meta.url),
          "../../../shared/localization/shared_czech.json": () =>
            _(() => import(`./D_GRhDr6.js`), [], import.meta.url),
          "../../../shared/localization/shared_danish.json": () =>
            _(() => import(`./MtB9Epbh.js`), [], import.meta.url),
          "../../../shared/localization/shared_dutch.json": () =>
            _(() => import(`./B_bSBE19.js`), [], import.meta.url),
          "../../../shared/localization/shared_english.json": () =>
            _(() => import(`./CHapjyM1.js`), [], import.meta.url),
          "../../../shared/localization/shared_finnish.json": () =>
            _(() => import(`./BsvkRj0e.js`), [], import.meta.url),
          "../../../shared/localization/shared_french.json": () =>
            _(() => import(`./C8IClWxn.js`), [], import.meta.url),
          "../../../shared/localization/shared_german.json": () =>
            _(() => import(`./H0q2IL_T.js`), [], import.meta.url),
          "../../../shared/localization/shared_greek.json": () =>
            _(() => import(`./BtX_v15Y.js`), [], import.meta.url),
          "../../../shared/localization/shared_hungarian.json": () =>
            _(() => import(`./AqDLz34H.js`), [], import.meta.url),
          "../../../shared/localization/shared_indonesian.json": () =>
            _(() => import(`./aiBy5YVK.js`), [], import.meta.url),
          "../../../shared/localization/shared_italian.json": () =>
            _(() => import(`./WLzZjMQH.js`), [], import.meta.url),
          "../../../shared/localization/shared_japanese.json": () =>
            _(() => import(`./CUH-vBww.js`), [], import.meta.url),
          "../../../shared/localization/shared_koreana.json": () =>
            _(() => import(`./CJGNwNKo.js`), [], import.meta.url),
          "../../../shared/localization/shared_latam.json": () =>
            _(() => import(`./8NLzGR4R.js`), [], import.meta.url),
          "../../../shared/localization/shared_malay.json": () =>
            _(() => import(`./BUm3pEMt.js`), [], import.meta.url),
          "../../../shared/localization/shared_norwegian.json": () =>
            _(() => import(`./iIGBmwsG.js`), [], import.meta.url),
          "../../../shared/localization/shared_polish.json": () =>
            _(() => import(`./85KA9JMj.js`), [], import.meta.url),
          "../../../shared/localization/shared_portuguese.json": () =>
            _(() => import(`./Cwt5GOLJ.js`), [], import.meta.url),
          "../../../shared/localization/shared_romanian.json": () =>
            _(() => import(`./Dl9z5ukR.js`), [], import.meta.url),
          "../../../shared/localization/shared_russian.json": () =>
            _(() => import(`./C5EjmbkX.js`), [], import.meta.url),
          "../../../shared/localization/shared_sc_schinese.json": () =>
            _(() => import(`./ByDbZaKa.js`), [], import.meta.url),
          "../../../shared/localization/shared_schinese.json": () =>
            _(() => import(`./BKXm0t5s.js`), [], import.meta.url),
          "../../../shared/localization/shared_spanish.json": () =>
            _(() => import(`./BWwEOm7k2.js`), [], import.meta.url),
          "../../../shared/localization/shared_swedish.json": () =>
            _(() => import(`./DqHr7mk62.js`), [], import.meta.url),
          "../../../shared/localization/shared_tchinese.json": () =>
            _(() => import(`./FapQsxkX2.js`), [], import.meta.url),
          "../../../shared/localization/shared_thai.json": () =>
            _(() => import(`./DHNi5EDq2.js`), [], import.meta.url),
          "../../../shared/localization/shared_turkish.json": () =>
            _(() => import(`./Bqvp8Fbh2.js`), [], import.meta.url),
          "../../../shared/localization/shared_ukrainian.json": () =>
            _(() => import(`./OD8iKzq32.js`), [], import.meta.url),
          "../../../shared/localization/shared_vietnamese.json": () =>
            _(() => import(`./CyuctkK52.js`), [], import.meta.url),
        }),
        `../../../shared/localization/shared_${_}.json`,
        6,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/shared_arabic.json": () =>
                _(() => import(`./tmltOu0P.js`), [], import.meta.url),
              "../../../shared/localization/shared_brazilian.json": () =>
                _(() => import(`./4tAyV6MF.js`), [], import.meta.url),
              "../../../shared/localization/shared_bulgarian.json": () =>
                _(() => import(`./C-QDp5tQ.js`), [], import.meta.url),
              "../../../shared/localization/shared_czech.json": () =>
                _(() => import(`./D_GRhDr6.js`), [], import.meta.url),
              "../../../shared/localization/shared_danish.json": () =>
                _(() => import(`./MtB9Epbh.js`), [], import.meta.url),
              "../../../shared/localization/shared_dutch.json": () =>
                _(() => import(`./B_bSBE19.js`), [], import.meta.url),
              "../../../shared/localization/shared_english.json": () =>
                _(() => import(`./CHapjyM1.js`), [], import.meta.url),
              "../../../shared/localization/shared_finnish.json": () =>
                _(() => import(`./BsvkRj0e.js`), [], import.meta.url),
              "../../../shared/localization/shared_french.json": () =>
                _(() => import(`./C8IClWxn.js`), [], import.meta.url),
              "../../../shared/localization/shared_german.json": () =>
                _(() => import(`./H0q2IL_T.js`), [], import.meta.url),
              "../../../shared/localization/shared_greek.json": () =>
                _(() => import(`./BtX_v15Y.js`), [], import.meta.url),
              "../../../shared/localization/shared_hungarian.json": () =>
                _(() => import(`./AqDLz34H.js`), [], import.meta.url),
              "../../../shared/localization/shared_indonesian.json": () =>
                _(() => import(`./aiBy5YVK.js`), [], import.meta.url),
              "../../../shared/localization/shared_italian.json": () =>
                _(() => import(`./WLzZjMQH.js`), [], import.meta.url),
              "../../../shared/localization/shared_japanese.json": () =>
                _(() => import(`./CUH-vBww.js`), [], import.meta.url),
              "../../../shared/localization/shared_koreana.json": () =>
                _(() => import(`./CJGNwNKo.js`), [], import.meta.url),
              "../../../shared/localization/shared_latam.json": () =>
                _(() => import(`./8NLzGR4R.js`), [], import.meta.url),
              "../../../shared/localization/shared_malay.json": () =>
                _(() => import(`./BUm3pEMt.js`), [], import.meta.url),
              "../../../shared/localization/shared_norwegian.json": () =>
                _(() => import(`./iIGBmwsG.js`), [], import.meta.url),
              "../../../shared/localization/shared_polish.json": () =>
                _(() => import(`./85KA9JMj.js`), [], import.meta.url),
              "../../../shared/localization/shared_portuguese.json": () =>
                _(() => import(`./Cwt5GOLJ.js`), [], import.meta.url),
              "../../../shared/localization/shared_romanian.json": () =>
                _(() => import(`./Dl9z5ukR.js`), [], import.meta.url),
              "../../../shared/localization/shared_russian.json": () =>
                _(() => import(`./C5EjmbkX.js`), [], import.meta.url),
              "../../../shared/localization/shared_sc_schinese.json": () =>
                _(() => import(`./ByDbZaKa.js`), [], import.meta.url),
              "../../../shared/localization/shared_schinese.json": () =>
                _(() => import(`./BKXm0t5s.js`), [], import.meta.url),
              "../../../shared/localization/shared_spanish.json": () =>
                _(() => import(`./BWwEOm7k2.js`), [], import.meta.url),
              "../../../shared/localization/shared_swedish.json": () =>
                _(() => import(`./DqHr7mk62.js`), [], import.meta.url),
              "../../../shared/localization/shared_tchinese.json": () =>
                _(() => import(`./FapQsxkX2.js`), [], import.meta.url),
              "../../../shared/localization/shared_thai.json": () =>
                _(() => import(`./DHNi5EDq2.js`), [], import.meta.url),
              "../../../shared/localization/shared_turkish.json": () =>
                _(() => import(`./Bqvp8Fbh2.js`), [], import.meta.url),
              "../../../shared/localization/shared_ukrainian.json": () =>
                _(() => import(`./OD8iKzq32.js`), [], import.meta.url),
              "../../../shared/localization/shared_vietnamese.json": () =>
                _(() => import(`./CyuctkK52.js`), [], import.meta.url),
            }),
            `../../../shared/localization/shared_${_}.json`,
            6,
          ),
    ]);
  _.AddTokens(
    {
      ..._,
    },
    {
      ..._,
    },
  );
}
_(_().strLanguage).finally(_);
