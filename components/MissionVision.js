export default function MissionVision() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-6">
        <div className="glass p-8 rounded-2xl border border-white/6">
          <h4 className="text-lg font-semibold text-qcpurple">Mission</h4>
          <p className="mt-4 text-gray-300">
            Provide state-of-the-art technology solutions that inspire
            creativity and drive business success. We engineer with empathy and
            deliver production-grade results.
          </p>
          <div className="mt-4 text-sm text-qcmuted">
            Engineering • Design • Reliability
          </div>
        </div>
        <div className="glass p-8 rounded-2xl border border-white/6">
          <h4 className="text-lg font-semibold text-qcneon">Vision</h4>
          <p className="mt-4 text-gray-300">
            To be a global leader in tech solutions, known for our creative
            approach to transforming businesses into future-ready organizations.
          </p>
          <div className="mt-4 text-sm text-qcmuted">
            Scale • Innovation • Impact
          </div>
        </div>
      </div>
    </section>
  );
}
