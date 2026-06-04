import { achievements } from '@/mocks/homeData';

export default function Partners() {
  return (
    <section className="w-full py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto text-center">
        <span className="text-sm font-semibold text-brand uppercase tracking-wider">Our Achievements</span>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2 mb-4">
          We Proudly Provide <span className="text-brand">Industry-Leading</span> Training
        </h2>
        <p className="text-dark/50 text-sm md:text-base max-w-2xl mx-auto mb-10">
          At PROITKEYS, we proudly provide industry-leading online training and career development solutions. With a growing learning community and expert mentorship programs, we prepare students and professionals for real-world success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {achievements.map((item) => (
            <div key={item.id} className="flex flex-col items-center p-8 rounded-2xl bg-light hover:bg-light-warm transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-4">
                <i className={`${item.icon} text-brand text-2xl`} />
              </div>
              <span className="text-4xl md:text-5xl font-bold font-display text-dark mb-2">{item.value}</span>
              <span className="text-dark/50 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}