import test from "node:test";
import assert from "node:assert/strict";
import { materialPriceAt, MATERIAL_PRICE_CHANGE_AT } from "../src/content/courses.ts";
test("material price changes at midnight Moscow on November 1", () => {
  assert.equal(MATERIAL_PRICE_CHANGE_AT, Date.parse("2026-11-01T00:00:00+03:00"));
  assert.equal(materialPriceAt(Date.parse("2026-10-15T00:00:00+03:00")), 1900);
  assert.equal(materialPriceAt(Date.parse("2026-10-31T23:59:59+03:00")), 1900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT - 1), 1900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT), 3900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT + 86400000), 3900);
});
