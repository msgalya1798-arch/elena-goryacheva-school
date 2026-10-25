import test from "node:test";
import assert from "node:assert/strict";
import { absoluteUrl, getSiteUrl } from "../src/lib/siteUrl.ts";

test("canonical origin stays on the primary domain in every hosting environment", (t) => {
  const previous = { ...process.env };
  t.after(() => { process.env = previous; });
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
  delete process.env.VERCEL_URL;
  assert.equal(getSiteUrl(), "https://goryacheva.online");

  process.env.VERCEL_PROJECT_PRODUCTION_URL = "elena-goryacheva.vercel.app";
  process.env.VERCEL_URL = "preview.vercel.app";
  for (const value of [
    "https://elena-goryacheva.vercel.app",
    "https://elena-goryacheva-galina123.msk1.amvera.tech",
    "https://www.goryacheva.online",
    "https://school.example/",
  ]) {
    process.env.NEXT_PUBLIC_SITE_URL = value;
    assert.equal(getSiteUrl(), "https://goryacheva.online");
  }
});

test("absolute SEO URLs preserve route, query and schema fragments", () => {
  for (const path of [
    "/", "/online/material-logic-online", "/about", "/sitemap.xml", "/opengraph-image",
    "/#website", "/#elena-goryacheva", "/offline/nail-master-start?utm_source=test",
  ]) {
    assert.equal(absoluteUrl(path), `https://goryacheva.online${path}`);
  }
});
