import { useState } from 'react';
import { Menu, X, Car, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white">
            <Car className="w-6 h-6 text-red-500" />
            <span className="font-semibold tracking-wide">Porsche</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#models" className="text-white/80 hover:text-white transition">Models</a>
            <a href="#performance" className="text-white/80 hover:text-white transition">Performance</a>
            <a href="#discover" className="text-white/80 hover:text-white transition">Discover</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#test-drive" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Book a test drive</a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a onClick={() => setOpen(false)} href="#models" className="block px-2 py-2 rounded-md text-white/90 hover:bg-white/10">Models</a>
            <a onClick={() => setOpen(false)} href="#performance" className="block px-2 py-2 rounded-md text-white/90 hover:bg-white/10">Performance</a>
            <a onClick={() => setOpen(false)} href="#discover" className="block px-2 py-2 rounded-md text-white/90 hover:bg-white/10">Discover</a>
            <a onClick={() => setOpen(false)} href="#test-drive" className="block px-2 py-2 rounded-md bg-white text-black font-medium">Book a test drive</a>
          </div>
        )}
      </nav>
    </header>
  );
}
