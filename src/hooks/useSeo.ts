import { useEffect } from 'react';

const SITE_URL = 'https://proitkeys.com';
const SITE_NAME = 'PROITKEYS';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  image?: string;
  type?: 'website' | 'article' | 'course';
  schemas?: Record<string, any>[];
  robots?: string;
}

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

export function useSeo({
  title,
  description,
  keywords,
  canonicalUrl,
  image,
  type = 'website',
  schemas,
  robots = 'index, follow',
}: SeoProps) {
  useEffect(() => {
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const pageCanonical = canonicalUrl || window.location.href;
    const pageImage = image 
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) 
      : DEFAULT_OG_IMAGE;

    // Update document title
    document.title = pageTitle;

    // Standard Meta Tags
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    if (keywords) {
      upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    }
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });

    // Open Graph Tags
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: pageCanonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: pageImage });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });

    // Twitter Card Tags
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: pageImage });

    // Canonical link
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: pageCanonical });

    // Selenium/Automated Testing attributes on body
    document.body.setAttribute('data-seo-title', pageTitle);
    document.body.setAttribute('data-seo-description', description);
    document.body.setAttribute('data-seo-canonical', pageCanonical);
    if (keywords) {
      document.body.setAttribute('data-seo-keywords', keywords);
    }

    // JSON-LD Schema Injections
    if (schemas && schemas.length > 0) {
      let script = document.getElementById('seo-jsonld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'seo-jsonld';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      
      const jsonLdGraph = {
        '@context': 'https://schema.org',
        '@graph': schemas,
      };
      
      script.textContent = JSON.stringify(jsonLdGraph);
    } else {
      // Remove schema if not defined for this page
      const script = document.getElementById('seo-jsonld');
      if (script) {
        script.remove();
      }
    }

    // Cleanup when component unmounts
    return () => {
      // Clean up body attributes
      document.body.removeAttribute('data-seo-title');
      document.body.removeAttribute('data-seo-description');
      document.body.removeAttribute('data-seo-canonical');
      document.body.removeAttribute('data-seo-keywords');
    };
  }, [title, description, keywords, canonicalUrl, image, type, schemas, robots]);
}
