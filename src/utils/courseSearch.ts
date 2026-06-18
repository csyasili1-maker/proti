import type { Course } from '@/mocks/coursesData';

let cachedCourses: Course[] | null = null;

async function loadCourses() {
  if (cachedCourses) return cachedCourses;

  const courseData = await import('@/mocks/coursesData');
  cachedCourses = courseData.courses;
  return cachedCourses;
}

export async function searchCourses(query: string, limit: number) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const courses = await loadCourses();
  return courses
    .filter(
      (course) =>
        course.title.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q),
    )
    .slice(0, limit);
}
