import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-start">
        <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-4">The Icon. Evolved.</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight drop-shadow-xl">
          Porsche 911
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400">Timeless Machine</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/80 text-sm sm:text-base">
          A pure expression of performance and design. Rear-engine balance, razor-sharp response, and unmistakable silhouette—crafted for the road and the racetrack.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#models" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
            Explore models
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#discover" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
            <Play className="w-4 h-4" />
            Watch film
          </a>
        </div>
      </div>
    </section>
  );
}
