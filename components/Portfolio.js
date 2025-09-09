const projects = [
  {
    name: "Quantum Sync",
    tag: "SaaS",
    desc: "Realtime collaboration & sync (placeholder)",
  },
  {
    name: "Nebula AI",
    tag: "AI",
    desc: "Enterprise intelligence (placeholder)",
  },
  {
    name: "Halo Cloud",
    tag: "Cloud",
    desc: "Resilient multi-cloud architecture (placeholder)",
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-20 bg-[#04050a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">Portfolio</h3>
          <div className="text-sm text-qcmuted">
            Selected placeholder projects
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="glass p-6 rounded-2xl border border-white/6 tilt hover:shadow-neon-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-qcmuted">{p.tag}</div>
                  <div className="font-semibold text-white mt-2">{p.name}</div>
                  <div className="text-sm text-qcmuted mt-2">{p.desc}</div>
                </div>
                <div className="text-3xl">🚀</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
