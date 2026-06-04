export default function CTSTrust() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-dark p-10 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/15 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand/10 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="text-sm font-semibold text-brand/80 uppercase tracking-wider">Our Commitment</span>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-3 leading-tight">
                  A Partner in{' '}
                  <span className="text-brand">Workforce Development</span>
                </h2>
              </div>

              <div className="flex-1">
                <p className="text-white/70 text-base leading-relaxed mb-4">
                  At PROITKEYS, we view corporate training as a strategic partnership.
                </p>
                <p className="text-white/70 text-base leading-relaxed mb-4">
                  Our mission is to help organizations cultivate skilled, adaptable professionals who can confidently meet evolving industry demands.
                </p>
                <p className="text-white/70 text-base leading-relaxed font-medium">
                  When your workforce grows stronger, your business grows stronger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}