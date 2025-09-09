const services = [
  {
    id: 1,
    title: "Custom Software Development",
    desc: "Bespoke web & mobile apps with scalable architecture.",
    icon: "M12 2l...",
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    desc: "Secure cloud migrations, infra as code, CI/CD.",
    icon: "M5 12...",
  },
  {
    id: 3,
    title: "AI & Data Solutions",
    desc: "ML pipelines, insights, automation at scale.",
    icon: "M3 3...",
  },
  {
    id: 4,
    title: "UX & Product Design",
    desc: "Human-centered design and product strategy.",
    icon: "M9 12...",
  },
];

function IconPlaceholder({ children }) {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center glass">
      <div className="text-lg">{children}</div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">What We Do</h3>
          <div className="text-sm text-qcmuted">
            Solutions designed for modern teams
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="glass p-5 rounded-2xl border border-white/6 tilt hover:shadow-neon-lg"
            >
              <div className="flex gap-4 items-start">
                <IconPlaceholder>⚙️</IconPlaceholder>
                <div>
                  <div className="font-semibold text-white">{s.title}</div>
                  <div className="text-sm text-qcmuted mt-2">{s.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
