import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Models from './components/Models';
import Performance from './components/Performance';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Models />
        <Performance />
      </main>
      <Footer />
    </div>
  );
}
