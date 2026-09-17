import test from "node:test";
import assert from "node:assert/strict";
import { materialPriceAt, MATERIAL_PRICE_CHANGE_AT } from "../src/content/courses.ts";
test("material price changes at midnight Moscow on October 15", () => {
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT - 1), 1900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT), 3900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT + 86400000), 3900);
});
