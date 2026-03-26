import { _, _, _ } from "./chunk-XXXXXXXX.js";
async function _(_, _, ..._) {
  return (
    await fetch(_, {
      method: "POST",
      body: JSON.stringify({
        _: _,
        _: _,
      }),
      headers: {
        [_]: "mutationAction",
        "Content-Type": "application/json; charset=utf-8",
      },
    })
  ).json();
}
async function _(_, _, ..._) {
  let _ = new URL(_, window.location.href);
  return (
    _.searchParams.set("q", _),
    _.searchParams.set("qp", JSON.stringify(_)),
    (
      await fetch(_, {
        headers: {
          [_]: "queryAction",
        },
      })
    ).json()
  );
}
function _(_) {
  return {
    ..._,
    useLoaderData() {
      return _();
    },
    useRefetchLoader() {
      return _();
    },
  };
}
export { _, _, _ };
