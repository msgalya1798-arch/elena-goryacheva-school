import test from "node:test";
import assert from "node:assert/strict";
import { getCanonicalRedirectTarget } from "../src/lib/canonicalHost.ts";

const cases = [
  ["www.goryacheva.online", "/", "", "https://goryacheva.online/"],
  ["www.goryacheva.online", "/offline/nail-master-start", "", "https://goryacheva.online/offline/nail-master-start"],
  ["www.goryacheva.online", "/offline/nail-master-start", "?utm_source=test", "https://goryacheva.online/offline/nail-master-start?utm_source=test"],
  ["elena-goryacheva.vercel.app", "/", "", "https://goryacheva.online/"],
  ["elena-goryacheva.vercel.app", "/online/material-logic-online", "", "https://goryacheva.online/online/material-logic-online"],
  ["elena-goryacheva.vercel.app", "/online/material-logic-online", "?utm_source=test", "https://goryacheva.online/online/material-logic-online?utm_source=test"],
  ["elena-goryacheva-galina123.msk1.amvera.tech", "/faq", "?from=tech", "https://goryacheva.online/faq?from=tech"],
];

for (const [host, pathname, search, expected] of cases) {
  test(`redirects ${host}${pathname}${search} to canonical origin`, () => {
    assert.equal(getCanonicalRedirectTarget(null, host, pathname, search), expected);
  });
}

test("canonical host does not redirect", () => {
  assert.equal(getCanonicalRedirectTarget(null, "goryacheva.online", "/faq", ""), null);
});

test("internal Amvera host does not redirect", () => {
  assert.equal(getCanonicalRedirectTarget(null, "run-elena-goryacheva", "/", ""), null);
});

test("x-forwarded-host takes precedence and supports proxy port", () => {
  assert.equal(
    getCanonicalRedirectTarget("www.goryacheva.online:443", "run-elena-goryacheva:3000", "/reviews", "?src=www"),
    "https://goryacheva.online/reviews?src=www",
  );
});
