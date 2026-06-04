import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createJiti } from 'jiti';

const rootDir = resolve(import.meta.dirname, '..');
const jiti = createJiti(import.meta.url);
const { courses } = jiti(resolve(rootDir, 'src/mocks/coursesData.ts'));

const missing = [];
const nonLocal = [];

for (const course of courses) {
  if (!course.image.startsWith('/images/courses/') || !course.image.endsWith('.jpg')) {
    nonLocal.push({ title: course.title, image: course.image });
    continue;
  }

  try {
    await access(resolve(rootDir, 'public', course.image.slice(1)));
  } catch {
    missing.push({ title: course.title, image: course.image });
  }
}

if (missing.length || nonLocal.length) {
  console.error(JSON.stringify({ missing, nonLocal }, null, 2));
  process.exit(1);
}

console.log(`Verified ${courses.length} local course photo images.`);
