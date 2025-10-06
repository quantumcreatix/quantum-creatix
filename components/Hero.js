"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none bg-qc-hero"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 px-3 py-1 rounded-full glass text-xs text-qcmuted">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent-2)" }}
                ></span>
                Launch — Futuristic brand
              </span>
            </motion.div>

            <motion.h1
              className="hero-title text-5xl md:text-7xl font-extrabold leading-tight"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg,var(--accent-2),var(--accent-1))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className="block"
              >
                Quantum Creatix
              </span>
              <span className="block text-gray-300 text-lg md:text-xl font-medium mt-1">
                Empowering Innovation, Inspiring Creativity
              </span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Quantum Creatix represents the fusion of advanced technology and
              boundless creativity.{" "}
              <span className="text-qcpurple">“Quantum”</span> reflects
              precision, while <span className="text-qcneon">“Creatix”</span>{" "}
              highlights our passion for transforming ideas into revolutionary
              solutions.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="btn-neon inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 12h20"
                    stroke="#020617"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Let's Build the Future
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-sm text-qcmuted hover:text-gray-100"
              >
                View Projects →
              </a>
            </motion.div>

            <div className="mt-8 flex gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-qcpurple to-qcneon flex items-center justify-center neon">
                  ⚡
                </div>
                <div>
                  <div className="font-semibold text-gray-200">Reliability</div>
                  <div className="text-xs">Production-grade delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/3 flex items-center justify-center neon">
                  🔒
                </div>
                <div>
                  <div className="font-semibold text-gray-200">Security</div>
                  <div className="text-xs">Design-first posture</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-5 border border-white/6 shadow-neon-lg">
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#071028] to-[#08121b] border border-white/5">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-qcmuted uppercase">
                        Product Preview
                      </div>
                      <div className="mt-3 text-xl md:text-2xl font-semibold">
                        Quantum Studio
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        AI-assisted product design suite
                      </div>
                    </div>
                    <div className="text-3xl">🚀</div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-black/30 border border-white/6 tilt">
                      <div className="text-xs text-qcmuted">Uptime</div>
                      <div className="font-semibold">99.99%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-black/30 border border-white/6 tilt">
                      <div className="text-xs text-qcmuted">Latency</div>
                      <div className="font-semibold">~42ms</div>
                    </div>
                  </div>
                </div>

                {/* subtle decorative glow */}
                <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-gradient-to-br from-qcpurple/30 to-qcneon/20 blur-3xl pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
