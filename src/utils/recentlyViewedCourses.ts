import { courses } from '@/mocks/coursesData';
import type { Course } from '@/mocks/coursesData';

const STORAGE_KEY = 'proitkeys_recently_viewed';
const MAX_ITEMS = 8;

function getStoredSlugs(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((s) => typeof s === 'string');
  } catch {
    return [];
  }
}

function setStoredSlugs(slugs: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // localStorage full or unavailable - silently ignore.
  }
}

export function trackRecentlyViewed(slug: string) {
  if (!slug) return;
  const slugs = getStoredSlugs().filter((s) => s !== slug);
  slugs.unshift(slug);
  setStoredSlugs(slugs.slice(0, MAX_ITEMS));
}

export function getRecentCourses(): Course[] {
  const slugs = getStoredSlugs();
  const found: Course[] = [];
  for (const slug of slugs) {
    const course = courses.find((c) => c.slug === slug);
    if (course) found.push(course);
  }
  return found;
}
