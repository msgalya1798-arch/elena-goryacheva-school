import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { pageSeo } from "../src/content/seo.ts";
import { courses } from "../src/content/courses.ts";

test("every existing public route has unique complete SEO metadata without temporary prices", () => {
  const documents = JSON.parse(readFileSync(new URL("../src/content/legal-documents.json", import.meta.url), "utf8"));
  const paths = ["/", "/online", "/offline", "/about", "/reviews", "/faq", "/legal/details",
    ...courses.map((course) => `/${course.format}/${course.slug}`),
    ...documents.map((document) => `/legal/${document.slug}`)];
  assert.equal(paths.length, 19);
  assert.deepEqual(Object.keys(pageSeo).sort(), paths.sort());
  for (const field of ["title", "description"]) {
    const values = Object.values(pageSeo).map((seo) => seo[field]);
    assert.equal(new Set(values).size, 19);
    for (const value of values) {
      assert.ok(value.trim());
      assert.doesNotMatch(value, /· Елена Горячева, школа маникюра|1\s?900|3\s?900/);
    }
  }
});
