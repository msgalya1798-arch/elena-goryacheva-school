import test from "node:test";
import assert from "node:assert/strict";
import { courses, getCourseBySlug, getCoursesByFormat, materialPriceAt, MATERIAL_PRICE_CHANGE_AT } from "../src/content/courses.ts";

test("sale ends at midnight Moscow on November 1, 2026", () => {
  assert.equal(MATERIAL_PRICE_CHANGE_AT, Date.parse("2026-11-01T00:00:00+03:00"));
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT - 1), 1900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT), 3900);
  assert.equal(materialPriceAt(MATERIAL_PRICE_CHANGE_AT + 86400000), 3900);
});
test("all course entry points use the same active material offer", () => {
  const direct = courses.find(c => c.slug === "material-logic-online");
  assert.equal(direct.price.amount, 1900);
  for (const course of [getCourseBySlug(direct.slug), getCoursesByFormat("online").find(c => c.slug === direct.slug)]) {
    assert.equal(course.price.amount, materialPriceAt());
    assert.equal(course.price.status, "confirmed");
    assert.equal(course.durationLabel, "1 месяц обучения с сопровождением Елены");
    assert.equal(course.tariffs, undefined);
  }
});
test("forms has no purchase price and offline certificates do not claim state status", () => {
  assert.equal(getCourseBySlug("form-logic-online").price.status, "placeholder");
  assert.equal(getCourseBySlug("form-logic-online").price.amount, null);
  for (const course of getCoursesByFormat("offline")) assert.doesNotMatch(course.certificateNote, /государственного/);
});
