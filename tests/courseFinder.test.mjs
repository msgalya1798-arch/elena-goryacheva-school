import test from 'node:test';
import assert from 'node:assert/strict';
import { recommendCourse } from '../src/lib/courseFinder.ts';
import { getCourseBySlug } from '../src/content/courses.ts';

const experiences = ['none', 'self-taught', 'has-gaps', 'practicing'];
const goals = ['start-career', 'materials-lifting', 'complex-nails', 'architecture-forms', 'speed-quality', 'systemize-gaps'];
const formats = ['online', 'offline', 'either'];

for (const experience of experiences) {
  for (const goal of goals) {
    for (const format of formats) {
      test(`${experience} / ${goal} / ${format}: valid, suitable recommendations`, () => {
        const result = recommendCourse({ experience, goal, format });
        assert.ok(result.reason.trim().length > 0);
        for (const slug of [result.slug, result.alsoSlug].filter(Boolean)) {
          const course = getCourseBySlug(slug);
          assert.ok(course, `Unknown course: ${slug}`);
          if (format !== 'either') assert.equal(course.format, format, 'Do not substitute another format');
          if (experience === 'none') assert.ok(['nail-master-start', 'top-master-universal-2'].includes(slug));
          if (experience === 'self-taught') assert.ok(!['form-logic-online', 'form-logic-offline', 'speed-portfolio', 'top-master-universal-advanced'].includes(slug));
          if (slug === 'speed-portfolio') assert.equal(experience, 'practicing');
        }
        if (result.slug === null) assert.equal(result.alsoSlug, undefined);
      });
    }
  }
}

test('a beginner wanting online architecture needs consultation, not an advanced sale', () => {
  assert.equal(recommendCourse({ experience: 'none', goal: 'architecture-forms', format: 'online' }).slug, null);
});
test('a practitioner choosing online architecture gets online forms without offline alternatives', () => {
  const result = recommendCourse({ experience: 'practicing', goal: 'architecture-forms', format: 'online' });
  assert.equal(result.slug, 'form-logic-online');
  assert.equal(result.alsoSlug, undefined);
});
test('materials is the matching online product when both formats are acceptable', () => {
  assert.equal(recommendCourse({ experience: 'self-taught', goal: 'materials-lifting', format: 'either' }).slug, 'material-logic-online');
});
test('online speed request is not silently redirected to an offline course', () => {
  assert.equal(recommendCourse({ experience: 'practicing', goal: 'speed-quality', format: 'online' }).slug, null);
});
test('beginner in-person path stays available', () => {
  const result = recommendCourse({ experience: 'none', goal: 'start-career', format: 'offline' });
  assert.equal(result.slug, 'nail-master-start');
  assert.equal(result.alsoSlug, 'top-master-universal-2');
});
