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
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <ExpertiseGrid />
        <TechStack />
        <Projects />
        <ACdat />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
