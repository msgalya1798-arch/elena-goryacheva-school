import test from "node:test";
import assert from "node:assert/strict";
import nextTesting from "next/experimental/testing/server.js";
import nextConfig from "../next.config.mjs";

const { unstable_getResponseFromNextConfig } = nextTesting;

for (const host of ["www.goryacheva.online", "elena-goryacheva.vercel.app"]) {
  for (const path of [
    "/",
    "/online/material-logic-online",
    "/offline/nail-master-start?utm_source=test&utm_campaign=migration",
  ]) {
    test(`${host}${path} permanently redirects with its path and query`, async () => {
      const response = await unstable_getResponseFromNextConfig({
        url: `https://${host}${path}`,
        nextConfig,
      });
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("location"), `https://goryacheva.online${path}`);
    });
  }
}

for (const host of [
  "goryacheva.online",
  "preview.vercel.app",
  "elena-goryacheva-galina123.msk1.amvera.tech",
  "127.0.0.1",
  "wwwXgoryachevaXonline",
  "elena-goryacheva.vercel.app.example.com",
]) {
  test(`${host} does not match public alias redirects`, async () => {
    const response = await unstable_getResponseFromNextConfig({
      url: `https://${host}/online?utm_source=test`,
      nextConfig,
    });
    assert.equal(response.headers.get("location"), null);
  });
}

test("an unknown canonical path is left to Next.js 404 handling", async () => {
  const response = await unstable_getResponseFromNextConfig({
    url: "https://goryacheva.online/this-page-does-not-exist",
    nextConfig,
  });
  assert.equal(response.headers.get("location"), null);
  assert.equal(response.headers.get("x-middleware-rewrite"), null);
});
