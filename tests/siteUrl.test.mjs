import test from "node:test";
import assert from "node:assert/strict";
import { absoluteUrl, getSiteUrl } from "../src/lib/siteUrl.ts";

test("explicit site URL override is normalized for isolated environments", (t) => {
  const previous = { ...process.env };
  t.after(() => { process.env = previous; });

  process.env.NEXT_PUBLIC_SITE_URL = "https://school.example/";
  process.env.VERCEL_PROJECT_PRODUCTION_URL = "production.vercel.app";
  process.env.VERCEL_URL = "preview.vercel.app";

  assert.equal(getSiteUrl(), "https://school.example");
  for (const path of ["/", "/online", "/sitemap.xml", "/opengraph-image", "/#website"]) {
    assert.equal(absoluteUrl(path), `https://school.example${path}`);
  }
});

test("production SEO origin defaults to goryacheva.online and ignores Vercel addresses", (t) => {
  const previous = { ...process.env };
  t.after(() => { process.env = previous; });

  delete process.env.NEXT_PUBLIC_SITE_URL;
  process.env.VERCEL_PROJECT_PRODUCTION_URL = "production.vercel.app";
  process.env.VERCEL_URL = "preview.vercel.app";

  assert.equal(getSiteUrl(), "https://goryacheva.online");
  assert.equal(
    absoluteUrl("/online/material-logic-online"),
    "https://goryacheva.online/online/material-logic-online",
  );
});
