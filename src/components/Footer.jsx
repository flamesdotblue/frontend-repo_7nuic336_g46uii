import { Car, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="discover" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 text-white mb-3">
              <Car className="w-6 h-6 text-red-500" />
              <span className="font-semibold tracking-wide">Porsche</span>
            </div>
            <p className="text-sm text-white/70 max-w-sm">
              Engineering with emotion. Every curve, every control, every component is designed to connect you with the drive.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm text-white/80">
            <ul className="space-y-2">
              <li className="font-semibold text-white">Models</li>
              <li><a href="#models" className="hover:text-white">911</a></li>
              <li><a href="#models" className="hover:text-white">Cayman</a></li>
              <li><a href="#models" className="hover:text-white">Taycan</a></li>
              <li><a href="#models" className="hover:text-white">Cayenne</a></li>
            </ul>
            <ul className="space-y-2">
              <li className="font-semibold text-white">Discover</li>
              <li><a href="#performance" className="hover:text-white">Performance</a></li>
              <li><a href="#discover" className="hover:text-white">Design</a></li>
              <li><a href="#test-drive" className="hover:text-white">Find a Center</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-zinc-900 to-zinc-800">
            <h3 className="text-white font-semibold">Stay in the drive</h3>
            <p className="text-white/70 text-sm mt-1">Get the latest 911 news, releases, and exclusive events.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Your email" className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500" />
              <button type="submit" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90">
                Subscribe
              </button>
            </form>
            <a href="#test-drive" className="mt-4 inline-flex items-center gap-2 text-white/80 hover:text-white text-sm">
              Book a test drive
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-white/10 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Porsche. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
