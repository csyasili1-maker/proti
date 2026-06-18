import { Link, useParams } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import OptimizedImage from '@/components/base/OptimizedImage';
import { blogPosts, getBlogPostBySlug } from '@/mocks/blogData';
import { courses } from '@/mocks/coursesData';
import { useBlogPostSeo } from '@/hooks/useBlogSeo';
import { getWhatsAppUrl } from '@/config/contact';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);
  useBlogPostSeo(post);

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-light">
        <Navbar />
        <div className="pt-32 pb-20 text-center px-6">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
            <i className="ri-article-line text-4xl text-dark/30" />
          </div>
          <h1 className="text-2xl font-bold text-dark mb-3">Blog Not Found</h1>
          <p className="text-dark/50 mb-8 max-w-md mx-auto">
            Sorry, we could not find that article. Browse all PROITKEYS blog guides instead.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full text-base font-semibold transition-colors"
          >
            <i className="ri-arrow-left-line" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedCourses = post.relatedCourseSlugs
    .map((courseSlug) => courses.find((course) => course.slug === courseSlug))
    .filter(Boolean)
    .slice(0, 3);

  const relatedPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main>
        <article>
          <section className="relative overflow-hidden bg-dark pt-36 md:pt-40 pb-14 md:pb-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,25,25,0.35),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(13,148,136,0.18),transparent_28%)]" />
            <div className="relative w-full px-6 lg:px-10 max-w-[1180px] mx-auto">
              <div className="flex items-center gap-2 text-sm text-white/45 mb-6">
                <Link to="/" className="hover:text-brand transition-colors">Home</Link>
                <i className="ri-arrow-right-s-line text-xs" />
                <Link to="/blog" className="hover:text-brand transition-colors">Blog</Link>
                <i className="ri-arrow-right-s-line text-xs" />
                <span className="text-white/70 truncate">{post.category}</span>
              </div>

              <span className="inline-flex rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-semibold text-white mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight max-w-5xl">
                {post.title}
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
                {post.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/55">
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-user-star-line text-brand" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-calendar-line text-brand" />
                  {post.publishDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="ri-time-line text-brand" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </section>

          <section className="w-full bg-white">
            <div className="w-full px-6 lg:px-10 max-w-[1180px] mx-auto">
              <div className="-mt-10 md:-mt-14 relative z-10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-gray-100">
                <OptimizedImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[300px] md:h-[520px]"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="w-full py-14 md:py-20 bg-white">
            <div className="w-full px-6 lg:px-10 max-w-[1180px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16 items-start">
                <div className="min-w-0">
                  <p className="text-xl text-dark/70 leading-relaxed mb-10 border-l-4 border-brand pl-5">
                    {post.intro}
                  </p>

                  <div className="space-y-12">
                    {post.sections.map((section) => (
                      <section key={section.heading}>
                        <h2 className="text-2xl md:text-3xl font-bold font-display text-dark mb-5">
                          {section.heading}
                        </h2>
                        <div className="space-y-4">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-dark/65 text-base leading-8">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {section.bullets && (
                          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {section.bullets.map((item) => (
                              <li key={item} className="flex items-start gap-3 rounded-xl bg-light px-4 py-3 text-sm text-dark/70">
                                <i className="ri-check-line text-brand text-base mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}
                  </div>

                  <section className="mt-14 rounded-3xl bg-light border border-gray-100 p-6 md:p-8">
                    <span className="text-sm font-semibold text-brand uppercase tracking-wider">FAQ</span>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-dark mt-2 mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {post.faqs.map((faq) => (
                        <div key={faq.q} className="rounded-2xl bg-white border border-gray-100 p-5">
                          <h3 className="text-base font-bold text-dark mb-2">{faq.q}</h3>
                          <p className="text-dark/60 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="lg:sticky lg:top-28 space-y-6">
                  <div className="rounded-2xl border border-gray-100 bg-light p-6">
                    <h2 className="text-lg font-bold font-display text-dark mb-4">SEO Topics Covered</h2>
                    <div className="flex flex-wrap gap-2">
                      {post.keywords.slice(0, 6).map((keyword) => (
                        <span key={keyword} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-dark/60 border border-gray-100">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {relatedCourses.length > 0 && (
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                      <h2 className="text-lg font-bold font-display text-dark mb-4">Related Courses</h2>
                      <div className="space-y-3">
                        {relatedCourses.map((course) => course && (
                          <Link
                            key={course.id}
                            to={`/courses/${course.slug}`}
                            className="block rounded-xl border border-gray-100 p-4 hover:border-brand/30 hover:bg-brand/5 transition-colors"
                          >
                            <span className="block text-sm font-bold text-dark">{course.title}</span>
                            <span className="mt-1 block text-xs text-dark/45">{course.duration} Weeks - {course.category}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-2xl bg-dark p-6 text-white">
                    <h2 className="text-xl font-bold font-display mb-3">Need Help Choosing a Course?</h2>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      Talk to a PROITKEYS advisor about the best training path for your US career goals.
                    </p>
                    <a
                      href={getWhatsAppUrl(`Hi PROITKEYS! I read your blog "${post.title}" and need help choosing the right course.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition-colors"
                    >
                      <i className="ri-whatsapp-line" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </article>

        <section className="w-full py-16 md:py-24 bg-light">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-sm font-semibold text-brand uppercase tracking-wider">More Guides</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
                  Continue Reading
                </h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-brand font-semibold">
                View All
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((item) => (
                <Link key={item.id} to={`/blog/${item.slug}`} className="group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all">
                  <OptimizedImage src={item.image} alt={item.title} className="w-full h-44" objectFit="cover" />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-brand">{item.category}</span>
                    <h3 className="text-base font-bold text-dark mt-2 group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
