import { Gauge, Zap, Settings } from 'lucide-react';

export default function Performance() {
  return (
    <section id="performance" className="relative bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <SpecCard icon={Gauge} title="Acceleration" value="2.6 s" sub="0–60 mph (Turbo S)" />
              <SpecCard icon={Zap} title="Power" value="640 hp" sub="Maximum output" />
              <SpecCard icon={Settings} title="Aero" value="Adaptive" sub="Active aerodynamics" />
            </div>
            <div className="mt-10 rounded-2xl border border-white/10 p-6 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.18),transparent_50%)]">
              <h3 className="text-white text-2xl font-semibold">Engineered for feeling</h3>
              <p className="text-white/70 mt-2 max-w-2xl">
                Lightning-fast responsiveness, precise steering, and a soundtrack that stirs the soul. Every component is tuned for connection and control.
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-zinc-900 to-zinc-800">
              <h4 className="text-white font-semibold">Rear-engine balance</h4>
              <p className="text-white/70 text-sm mt-2">The 911’s signature layout delivers traction, stability, and agility—on road and track.</p>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li>• Active suspension management</li>
                <li>• Rear-axle steering</li>
                <li>• Porsche ceramic composite brakes</li>
                <li>• Sport Chrono Package</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecCard({ icon: Icon, title, value, sub }) {
  return (
    <div className="rounded-xl border border-white/10 p-5 bg-black/40">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-red-500" />
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
      <div className="text-white/60 text-xs">{sub}</div>
    </div>
  );
}
