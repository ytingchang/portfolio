import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Design from './components/Design';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Design />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
