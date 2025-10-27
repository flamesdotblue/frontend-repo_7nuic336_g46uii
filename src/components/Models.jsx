import { Gauge, Zap, Shield, ChevronRight, Camera } from 'lucide-react';

const models = [
  {
    name: '911 Carrera',
    tagline: 'The essence of the 911',
    image: 'https://images.unsplash.com/photo-1646568247896-7640d7d2a7a6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHw5MTElMjBDYXJyZXJhfGVufDB8MHx8fDE3NjE1NDIyNjl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1646567860060-4fa0a5cb3526?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHw5MTElMjBDYXJyZXJhJTIwU3xlbnwwfDB8fHwxNzYxNTQyMjY5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1698131789135-9328c3e5644a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHw5MTElMjBUdXJibyUyMFN8ZW58MHwwfHx8MTc2MTU0MjI3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1699323906610-700ca2919497?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHw5MTElMjBHVDN8ZW58MHwwfHx8MTc2MTU0MjI3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '3.2s' },
      { icon: Zap, label: 'Power', value: '502 hp' },
      { icon: Shield, label: 'Drive', value: 'RWD' },
    ],
    gradient: 'from-stone-900 to-stone-800',
  },
  {
    name: '718 Cayman',
    tagline: 'Mid‑engine, pure balance',
    image: 'https://images.unsplash.com/photo-1699325346504-e6c960f8ae21?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHw3MTglMjBDYXltYW58ZW58MHwwfHx8MTc2MTU0MjI3MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '4.9s' },
      { icon: Zap, label: 'Power', value: '300 hp' },
      { icon: Shield, label: 'Drive', value: 'RWD' },
    ],
    gradient: 'from-gray-900 to-zinc-800',
  },
  {
    name: 'Taycan Turbo S',
    tagline: 'Electric unleashed',
    image: 'https://images.unsplash.com/photo-1757366261014-22d5a765bf7e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYXljYW4lMjBUdXJibyUyMFN8ZW58MHwwfHx8MTc2MTU0MjI3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '2.6s' },
      { icon: Zap, label: 'Power', value: '750 hp' },
      { icon: Shield, label: 'Drive', value: 'AWD' },
    ],
    gradient: 'from-slate-900 to-gray-800',
  },
  {
    name: 'Cayenne Coupe',
    tagline: 'Sport utility, redefined',
    image: 'https://images.unsplash.com/photo-1675627452466-fec3fa89f394?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXllbm5lJTIwQ291cGV8ZW58MHwwfHx8MTc2MTU0MjI3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '3.6s' },
      { icon: Zap, label: 'Power', value: '631 hp' },
      { icon: Shield, label: 'Drive', value: 'AWD' },
    ],
    gradient: 'from-neutral-900 to-stone-800',
  },
  {
    name: 'Panamera Turbo',
    tagline: 'Grand touring performance',
    image: 'https://images.unsplash.com/photo-1615717548767-3bbaf96b9ed6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYW5hbWVyYSUyMFR1cmJvfGVufDB8MHx8fDE3NjE1NDIyNzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '3.0s' },
      { icon: Zap, label: 'Power', value: '620 hp' },
      { icon: Shield, label: 'Drive', value: 'AWD' },
    ],
    gradient: 'from-zinc-900 to-gray-800',
  },
  {
    name: 'Macan GTS',
    tagline: 'Compact and connected',
    image: 'https://images.unsplash.com/photo-1754415689880-8e13bfe3babe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWNhbiUyMEdUU3xlbnwwfDB8fHwxNzYxNTQyMjczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    specs: [
      { icon: Gauge, label: '0-60 mph', value: '4.3s' },
      { icon: Zap, label: 'Power', value: '434 hp' },
      { icon: Shield, label: 'Drive', value: 'AWD' },
    ],
    gradient: 'from-stone-900 to-neutral-800',
  },
];

function ModelCard({ name, tagline, specs, gradient, image }) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} border border-white/10`}> 
      <div className="relative">
        <img
          src={image}
          alt={`${name} exterior`}
          className="w-full aspect-video object-cover opacity-90 group-hover:opacity-100 transition duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-medium bg-white/90 text-black">{name}</span>
      </div>
      <div className="relative z-10 p-6">
        <p className="text-white/70 text-sm">{tagline}</p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {specs.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-lg bg-black/30 border border-white/10 p-3">
              <div className="flex items-center gap-2 text-white">
                <Icon className="w-4 h-4 text-red-500" />
                <span className="text-[10px] uppercase tracking-wide text-white/60">{label}</span>
              </div>
              <div className="mt-1 text-white font-medium">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <a href="#test-drive" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            View details
            <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#test-drive" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            Gallery
            <Camera className="w-4 h-4" />
          </a>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Porsche Range</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Explore icons of performance from the timeless 911 to electric Taycan and versatile SUVs—each engineered for the drive.</p>
          </div>
          <a href="#discover" className="hidden sm:inline-block px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10">Compare models</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {models.map((m) => (
            <ModelCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
