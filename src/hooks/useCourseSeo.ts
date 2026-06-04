import { useEffect } from 'react';
import type { Course } from '@/mocks/coursesData';

const SITE_URL = 'https://proitkeys.com';
const SITE_NAME = 'PROITKEYS';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function getSeoDescription(course: Course) {
  const suffix = `Live online ${course.category} training from PROITKEYS with hands-on projects, mentor support, certification guidance, and placement assistance.`;
  const description = `${course.description} ${suffix}`;
  return description.length > 158 ? `${description.slice(0, 155).trim()}...` : description;
}

function getKeywords(course: Course) {
  return [
    course.title,
    `${course.title} course`,
    `${course.title} training`,
    `${course.category} course`,
    `${course.category} training`,
    'PROITKEYS',
    'IT training',
    'placement assistance',
  ].join(', ');
}

export function useCourseSeo(course?: Course) {
  useEffect(() => {
    if (!course) return;

    const title = `${course.title} Course | ${course.category} Training | ${SITE_NAME}`;
    const description = getSeoDescription(course);
    const canonicalUrl = `${SITE_URL}/courses/${course.slug}`;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: getKeywords(course) });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: course.image });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: course.image });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Course',
          name: course.title,
          description,
          url: canonicalUrl,
          image: course.image,
          provider: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          },
          educationalLevel: course.level,
          timeRequired: `P${course.duration}W`,
          teaches: course.curriculum || [course.category, course.title],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Courses', item: `${SITE_URL}/courses` },
            { '@type': 'ListItem', position: 3, name: course.title, item: canonicalUrl },
          ],
        },
      ],
    };

    let script = document.getElementById('course-jsonld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'course-jsonld';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [course]);
}
