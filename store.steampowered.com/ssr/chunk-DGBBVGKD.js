const CLSTAMP = 9621725;

function s(e, n, ...o) {
  try {
    console.assert
      ? o.length == 0
        ? console.assert(!!e, n)
        : console.assert(!!e, n, ...o)
      : e || console.warn(n, ...o);
  } catch {}
}
export { s as a };
