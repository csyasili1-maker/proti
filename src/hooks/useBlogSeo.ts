import { useEffect } from 'react';
import type { BlogPost } from '@/mocks/blogData';

const SITE_URL = 'https://proitkeys.com';
const SITE_NAME = 'PROITKEYS';
const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;

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

function upsertJsonLd(id: string, value: unknown) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(value);
}

export function useBlogIndexSeo() {
  useEffect(() => {
    const title = `IT Training Blog USA | Career Guides, AI, Cloud, Data & SAP | ${SITE_NAME}`;
    const description = 'Read PROITKEYS blog articles for US learners on online IT training, career change, placement support, AI development, cloud engineering, data analytics, and SAP AI careers.';
    const canonicalUrl = `${SITE_URL}/blog`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: 'IT training blog USA, online IT courses USA, AI training USA, cloud engineering course, data analytics course, SAP AI training',
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: SITE_OG_IMAGE });
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'PROITKEYS logo' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: SITE_OG_IMAGE });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    upsertJsonLd('blog-index-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'PROITKEYS IT Training Blog',
      description,
      url: canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
    });
  }, []);
}

export function useBlogPostSeo(post?: BlogPost) {
  useEffect(() => {
    if (!post) return;

    const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
    const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

    document.title = post.seoTitle;
    upsertMeta('meta[name="description"]', { name: 'description', content: post.metaDescription });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: post.keywords.join(', ') });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: post.seoTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: post.metaDescription });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: SITE_OG_IMAGE });
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'PROITKEYS logo' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: post.seoTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: post.metaDescription });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: SITE_OG_IMAGE });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    upsertJsonLd('blog-post-jsonld', {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: post.title,
          description: post.metaDescription,
          image: imageUrl,
          datePublished: post.publishDateIso,
          dateModified: post.publishDateIso,
          author: {
            '@type': 'Organization',
            name: post.author,
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: canonicalUrl,
        },
        {
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
          ],
        },
      ],
    });
  }, [post]);
}
