import { blogs } from '@/mocks/homeData';
import OptimizedImage from '@/components/base/OptimizedImage';

export default function BlogSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">Latest Articles</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
              Stay Updated With <span className="text-brand">PROITKEYS Blog</span>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-brand font-semibold text-sm hover:text-brand-dark transition-colors whitespace-nowrap">
            View All Articles
            <i className="ri-arrow-right-line" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <OptimizedImage
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52"
                  objectFit="cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-dark text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-dark/50 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="ri-calendar-line" />
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-dark leading-snug mb-3 group-hover:text-brand transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-dark/60 text-sm leading-relaxed mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <OptimizedImage src={blog.avatar} alt={blog.author} className="w-7 h-7 !rounded-full" objectFit="cover" width={28} height={28} />
                  <span className="text-sm text-dark/70 font-medium">{blog.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}