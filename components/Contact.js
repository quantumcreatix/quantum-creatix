export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">Let's build something together</h3>
          <p className="mt-4 text-qcmuted">
            Whether you're exploring a new product, migrating to the cloud, or
            want to incorporate AI — tell us about your challenge.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-xl border border-white/6">
              <div className="text-xs text-qcmuted">Email</div>
              <div className="font-semibold">hello@quantumcreatix.example</div>
            </div>
            <div className="glass p-4 rounded-xl border border-white/6">
              <div className="text-xs text-qcmuted">Location</div>
              <div className="font-semibold">Remote — Global</div>
            </div>
          </div>
        </div>

        <form
          className="glass p-6 rounded-2xl border border-white/6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — demo form submitted");
          }}
        >
          <div className="grid gap-4">
            <label className="text-xs text-qcmuted">Name</label>
            <input className="input-neon" placeholder="Your name" />

            <label className="text-xs text-qcmuted">Email</label>
            <input className="input-neon" placeholder="you@company.com" />

            <label className="text-xs text-qcmuted">Message</label>
            <textarea
              className="input-neon min-h-[120px]"
              placeholder="Tell us about your project"
            ></textarea>

            <div className="flex justify-end">
              <button className="btn-neon px-6 py-2 rounded-full">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
