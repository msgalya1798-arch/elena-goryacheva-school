import test from "node:test";
import assert from "node:assert/strict";
import { getCourseBySlug, getCoursesByFormat, materialPriceAt, MATERIAL_PRICE_CHANGE_AT } from "../src/content/courses.ts";
test("material price changes at midnight Moscow on November 1", () => {
  assert.equal(MATERIAL_PRICE_CHANGE_AT, Date.parse("2026-11-01T00:00:00+03:00"));
  assert.equal(materialPriceAt(Date.parse("2026-10-15T00:00:00+03:00")), 1900);
  assert.equal(materialPriceAt(Date.parse("2026-10-31T23:59:59+03:00")), 1900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT - 1), 1900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT), 3900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT + 86400000), 3900);
});

test("course getters recalculate the offer on each request without changing other courses", (t) => {
  const clock = t.mock.method(Date, "now", () => MATERIAL_PRICE_CHANGE_AT - 1);
  assert.equal(getCourseBySlug("material-logic-online").price.amount, 1900);
  assert.equal(getCoursesByFormat("online").find((c) => c.slug === "material-logic-online").price.amount, 1900);
  clock.mock.mockImplementation(() => MATERIAL_PRICE_CHANGE_AT);
  assert.equal(getCourseBySlug("material-logic-online").price.amount, 3900);
  assert.equal(getCoursesByFormat("online").find((c) => c.slug === "material-logic-online").price.amount, 3900);
  assert.equal(getCourseBySlug("form-logic-online").price.amount, null);
  assert.equal(getCourseBySlug("does-not-exist"), undefined);
});
