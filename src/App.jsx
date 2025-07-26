import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact' ; 

export default function App() {
  return (
    <div className="font-sans bg-white text-black">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
