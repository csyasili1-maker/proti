import OptimizedImage from '@/components/base/OptimizedImage';

const categories = [
  {
    icon: 'ri-cloud-line',
    title: 'Cloud & DevOps',
    color: 'bg-sky-50',
    iconColor: 'text-sky-600',
    desc: 'Build expertise in scalable infrastructure, automation, and cloud platforms that power modern businesses.',
    programs: ['DevOps on AWS', 'DevOps on Azure'],
    bestFor: 'Aspiring cloud engineers, system professionals, and automation-focused learners.',
    image: 'https://readdy.ai/api/search-image?query=modern%20cloud%20computing%20infrastructure%20visualization%20with%20server%20racks%20and%20glowing%20network%20connections%2C%20clean%20minimal%20tech%20aesthetic%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20data%20center%20environment%2C%20high%20quality%20digital%20art%2C%20abstract%20technology%20background&width=400&height=260&seq=progcat1&orientation=landscape',
  },
  {
    icon: 'ri-bar-chart-box-line',
    title: 'Data, AI & Analytics',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    desc: 'Turn data into insights and drive smarter business decisions with cutting-edge tools and technologies.',
    programs: ['Data Engineering', 'Azure Data Engineering', 'Data Science with Python', 'AI Engineering', 'Data Analyst', 'Power BI', 'Tableau'],
    bestFor: 'Analytical thinkers, problem-solvers, and professionals entering data-driven roles.',
    image: 'https://readdy.ai/api/search-image?query=data%20analytics%20dashboard%20visualization%20with%20colorful%20charts%20graphs%20and%20metrics%20on%20modern%20screen%2C%20clean%20minimal%20office%20desk%20environment%2C%20professional%20workspace%2C%20green%20accent%20tones%2C%20high%20quality%20corporate%20photography%2C%20data%20science%20technology%20concept&width=400&height=260&seq=progcat2&orientation=landscape',
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'Software Development',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    desc: 'Master modern programming frameworks and build applications that support today\u2019s digital world.',
    programs: ['Full Stack Java', 'Full Stack Web'],
    bestFor: 'Future developers and professionals seeking strong technical foundations.',
    image: 'https://readdy.ai/api/search-image?query=software%20developer%20coding%20on%20modern%20laptop%20with%20clean%20code%20editor%20screen%20visible%2C%20bright%20minimal%20workspace%2C%20professional%20casual%20attire%2C%20warm%20amber%20accent%20lighting%2C%20high%20quality%20corporate%20photography%2C%20authentic%20development%20workspace&width=400&height=260&seq=progcat3&orientation=landscape',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Cybersecurity',
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    desc: 'Help organizations protect critical systems and data in an increasingly complex threat landscape.',
    programs: ['Cybersecurity'],
    bestFor: 'Detail-oriented professionals passionate about digital protection.',
    image: 'https://readdy.ai/api/search-image?query=cybersecurity%20digital%20shield%20protection%20concept%20on%20modern%20screen%2C%20secure%20network%20visualization%20with%20lock%20icons%20and%20encrypted%20data%20streams%2C%20clean%20minimal%20tech%20aesthetic%2C%20red%20accent%20tones%2C%20professional%20security%20operations%20center%20atmosphere%2C%20high%20quality%20digital%20art&width=400&height=260&seq=progcat4&orientation=landscape',
  },
  {
    icon: 'ri-bug-line',
    title: 'Quality Assurance & Testing',
    color: 'bg-violet-50',
    iconColor: 'text-violet-600',
    desc: 'Ensure software reliability through structured testing methodologies used across industries.',
    programs: ['QA Testing', 'Tosca'],
    bestFor: 'Professionals who enjoy analytical thinking and process-driven environments.',
    image: 'https://readdy.ai/api/search-image?query=software%20quality%20assurance%20testing%20process%20on%20modern%20computer%20screen%20showing%20test%20cases%20and%20automation%20scripts%2C%20clean%20minimal%20office%20desk%2C%20professional%20workspace%2C%20purple%20violet%20accent%20tones%2C%20high%20quality%20corporate%20photography%2C%20testing%20environment%20concept&width=400&height=260&seq=progcat5&orientation=landscape',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Project & Business Management',
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
    desc: 'Develop the strategic and operational skills required to lead initiatives and drive organizational success.',
    programs: ['BA cum PMP'],
    bestFor: 'Professionals aiming for leadership and coordination roles.',
    image: 'https://readdy.ai/api/search-image?query=business%20analyst%20project%20manager%20reviewing%20project%20timeline%20and%20charts%20on%20modern%20screen%2C%20professional%20office%20meeting%20environment%2C%20diverse%20team%20collaboration%2C%20clean%20minimal%20workspace%2C%20teal%20accent%20tones%2C%20high%20quality%20corporate%20photography%2C%20strategic%20planning%20moment&width=400&height=260&seq=progcat6&orientation=landscape',
  },
];

export default function ProgramCategories() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Explore Specializations</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-3">
            Program <span className="text-brand">Categories</span>
          </h2>
          <p className="text-dark/50 text-base mt-4 max-w-2xl mx-auto">
            Choose from six high-demand technology domains designed to align with current industry needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <OptimizedImage
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-52"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl ${cat.color} flex items-center justify-center`}>
                    <i className={`${cat.icon} ${cat.iconColor} text-lg`} />
                  </div>
                  <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-dark/60 text-sm leading-relaxed mb-4">{cat.desc}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-dark/40 uppercase tracking-wider mb-2">Programs</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.programs.map((p) => (
                      <span
                        key={p}
                        className="bg-light text-dark/70 text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-xs font-semibold text-dark/40 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-dark/60 text-sm">{cat.bestFor}</p>
                </div>

                <a
                  href="/courses"
                  className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold hover:text-brand-dark transition-colors"
                >
                  View Program
                  <i className="ri-arrow-right-line text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}