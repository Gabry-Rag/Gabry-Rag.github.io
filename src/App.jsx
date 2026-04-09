import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ExpertiseGrid from './components/sections/ExpertiseGrid';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import ACdat from './components/sections/ACdat';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Dynamic Background Mesh Effect */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-alt/5 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <NavBar />
      <main className="flex-grow z-10 relative">
        <Hero />
        <ExpertiseGrid />
        <TechStack />
        <Projects />
        <ACdat />
        <About />
        <Contact />
      </main>
      <Footer className="z-10 relative" />
    </div>
  );
}

export default App;
