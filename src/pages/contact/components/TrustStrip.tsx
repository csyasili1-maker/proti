export default function TrustStrip() {
  return (
    <section className="w-full py-16 md:py-24 bg-light">
      <div className="w-full px-6 lg:px-10 max-w-[1440px] mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-6">
          <i className="ri-team-line text-brand text-3xl" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mb-4">
          A Team That <span className="text-brand">Supports</span> Your Ambition
        </h2>

        <p className="text-dark/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
          At PROITKEYS, every inquiry matters. We are committed to providing clear information, thoughtful guidance, and a supportive experience from your first interaction onward.
        </p>

        <p className="text-brand font-semibold text-base">Your growth is our priority.</p>
      </div>
    </section>
  );
}