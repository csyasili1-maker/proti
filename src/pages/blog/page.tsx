import { Link } from 'react-router-dom';
import Navbar from '@/pages/home/components/Navbar';
import Footer from '@/pages/home/components/Footer';
import OptimizedImage from '@/components/base/OptimizedImage';
import { blogPosts } from '@/mocks/blogData';
import { useBlogIndexSeo } from '@/hooks/useBlogSeo';

export default function BlogPage() {
  useBlogIndexSeo();
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-dark pt-36 md:pt-40 pb-16 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(200,25,25,0.32),transparent_32%),radial-gradient(circle_at_78%_8%,rgba(56,189,248,0.16),transparent_28%)]" />
          <div className="relative w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <i className="ri-article-line text-brand" />
                IT Training Blog for US Career Growth
              </span>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight mb-6">
                Career Guides for <span className="text-brand-light">AI, Cloud, Data, SAP</span> and IT Training
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl">
                Practical articles for learners in the United States who want online IT training, project-based learning,
                interview preparation, and career-focused placement support.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-14 md:py-20 bg-light">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative min-h-[320px] lg:min-h-[440px]">
                <OptimizedImage
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand mb-5">
                  Featured Guide
                </span>
                <h2 className="text-2xl md:text-4xl font-bold font-display text-dark leading-tight group-hover:text-brand transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 text-dark/60 text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-dark/45">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="ri-calendar-line" />
                    {featuredPost.publishDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="ri-time-line" />
                    {featuredPost.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="ri-user-star-line" />
                    {featuredPost.author}
                  </span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-brand font-semibold">
                  Read Blog
                  <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-sm font-semibold text-brand uppercase tracking-wider">SEO Career Articles</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
                  Latest <span className="text-brand">IT Career Blogs</span>
                </h2>
              </div>
              <p className="text-dark/55 text-sm md:text-base max-w-lg">
                Six search-focused guides written for learners comparing online IT courses and career paths in the USA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {remainingPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-brand/25 hover:shadow-xl transition-all"
                >
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 transition-transform duration-500 group-hover:scale-105"
                      objectFit="cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-dark shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-1 flex-col">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-dark/40 mb-3">
                      <span>{post.publishDate}</span>
                      <span className="w-1 h-1 rounded-full bg-dark/20" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-dark leading-snug group-hover:text-brand transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-dark/60 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
                      <span className="text-xs font-semibold uppercase tracking-wider text-dark/40">
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                        Read
                        <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
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
