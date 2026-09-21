import test from "node:test";
import assert from "node:assert/strict";
import { courses, getCourseBySlug, getCoursesByFormat } from "../src/content/courses.ts";

test("all course entry points use the same confirmed material offer", () => {
  const direct = courses.find(c => c.slug === "material-logic-online");
  for (const course of [direct, getCourseBySlug(direct.slug), getCoursesByFormat("online").find(c => c.slug === direct.slug)]) {
    assert.equal(course.price.amount, 1990);
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
