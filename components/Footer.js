export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/6 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-qcpurple to-qcneon flex items-center justify-center font-bold text-black">
            QC
          </div>
          <div>
            <div className="font-semibold">Quantum Creatix</div>
            <div className="text-xs text-qcmuted">
              Empowering Innovation, Inspiring Creativity
            </div>
          </div>
        </div>
        <div className="text-sm text-qcmuted">
          © {new Date().getFullYear()} Quantum Creatix — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
