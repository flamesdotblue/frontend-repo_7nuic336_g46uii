import { Gauge, Zap, Shield, ChevronRight } from 'lucide-react';

const models = [
  {
    name: '911 Carrera',
    tagline: 'The essence of the 911',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '4.0s' },
      { icon: Zap, label: 'Power', value: '379 hp' },
      { icon: Shield, label: 'Drive', value: 'RWD' },
    ],
    gradient: 'from-zinc-900 to-zinc-800',
  },
  {
    name: '911 Carrera S',
    tagline: 'Sharper, stronger, faster',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '3.3s' },
      { icon: Zap, label: 'Power', value: '443 hp' },
      { icon: Shield, label: 'Drive', value: 'RWD / AWD' },
    ],
    gradient: 'from-neutral-900 to-neutral-800',
  },
  {
    name: '911 Turbo S',
    tagline: 'Maximum performance',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '2.6s' },
      { icon: Zap, label: 'Power', value: '640 hp' },
      { icon: Shield, label: 'Drive', value: 'AWD' },
    ],
    gradient: 'from-slate-900 to-slate-800',
  },
  {
    name: '911 GT3',
    tagline: 'Track-bred precision',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '3.2s' },
      { icon: Zap, label: 'Power', value: '502 hp' },
      { icon: Shield, label: 'Drive', value: 'RWD' },
    ],
    gradient: 'from-stone-900 to-stone-800',
  },
];

function ModelCard({ name, tagline, specs, gradient }) {
  return (
    <div className={`group relative rounded-2xl p-6 bg-gradient-to-br ${gradient} border border-white/10 overflow-hidden`}> 
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.25),transparent_60%)]" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-white/60 text-sm">{tagline}</p>
          </div>
          <ChevronRight className="text-white/60 group-hover:text-white transition" />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {specs.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-lg bg-black/30 border border-white/10 p-3">
              <div className="flex items-center gap-2 text-white">
                <Icon className="w-4 h-4 text-red-500" />
                <span className="text-xs uppercase tracking-wide text-white/60">{label}</span>
              </div>
              <div className="mt-1 text-white font-medium">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a href="#test-drive" className="inline-block text-sm text-white/80 hover:text-white">Configure & order</a>
        </div>
      </div>
    </div>
  );
}

export default function Models() {
  return (
    <section id="models" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">911 Range</h2>
            <p className="mt-2 text-white/70 max-w-2xl">From pure Carrera to track-focused GT, the 911 offers a spectrum of performance for every road and every driver.</p>
          </div>
          <a href="#discover" className="hidden sm:inline-block px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10">Compare models</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {models.map((m) => (
            <ModelCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
