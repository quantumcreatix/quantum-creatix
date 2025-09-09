export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">About Quantum Creatix</h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            At Quantum Creatix, we transform the landscape of technology with
            innovative and creative approaches. We empower businesses by
            delivering state-of-the-art solutions that inspire creativity and
            drive measurable success. Each solution is tailored, robust, and
            built with long-term reliability in mind.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="glass p-4 rounded-xl border border-white/6">
              <div className="text-sm text-qcmuted">Mission</div>
              <div className="font-semibold">
                Provide state-of-the-art technology solutions that inspire
                creativity and drive business success.
              </div>
            </div>
            <div className="glass p-4 rounded-xl border border-white/6">
              <div className="text-sm text-qcmuted">Vision</div>
              <div className="font-semibold">
                To be a global leader in tech solutions, known for creativity
                and innovation.
              </div>
            </div>
          </div>
        </div>

        <aside className="glass p-6 rounded-2xl border border-white/6">
          <div className="text-sm text-qcmuted">Quick Facts</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-2xl font-bold">10+</div>
              <div className="text-xs text-qcmuted">
                Years combined experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs text-qcmuted">Projects delivered</div>
            </div>
          </div>
          <div className="mt-6 text-xs text-qcmuted">
            Tailored solutions — Security-first — Scalable architecture
          </div>
        </aside>
      </div>
    </section>
  );
}
