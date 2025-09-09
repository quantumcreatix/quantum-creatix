/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        qcbg: "#070712",
        qcmuted: "#9aa3b2",
        qcpurple: "#7C3AED",
        qcneon: "#00E5FF",
        qcdark: "#05060a",
      },
      backgroundImage: {
        "qc-hero":
          "radial-gradient(800px 400px at 10% 20%, rgba(124,58,237,0.12), transparent), radial-gradient(600px 300px at 90% 80%, rgba(0,229,255,0.06), transparent)",
      },
      boxShadow: {
        "neon-lg":
          "0 10px 50px rgba(0,229,255,0.06), 0 6px 24px rgba(124,58,237,0.06)",
      },
    },
  },
  plugins: [],
};
