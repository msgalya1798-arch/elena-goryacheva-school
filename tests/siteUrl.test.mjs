import test from "node:test";
import assert from "node:assert/strict";
import { absoluteUrl, getSiteUrl } from "../src/lib/siteUrl.ts";

test("custom domain takes precedence over Vercel addresses in SEO URLs", (t) => {
  const previous = { ...process.env };
  t.after(() => { process.env = previous; });
  process.env.NEXT_PUBLIC_SITE_URL = "https://school.example/";
  process.env.VERCEL_PROJECT_PRODUCTION_URL = "production.vercel.app";
  process.env.VERCEL_URL = "preview.vercel.app";
  assert.equal(getSiteUrl(), "https://school.example");
  for (const path of ["/", "/online", "/sitemap.xml", "/opengraph-image", "/#website"]) {
    assert.equal(absoluteUrl(path), `https://school.example${path}`);
  }
  delete process.env.NEXT_PUBLIC_SITE_URL;
  assert.equal(getSiteUrl(), "https://production.vercel.app");
});
