import { HashRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";
import { ScrollProgress } from "./components/ScrollProgress";
import { Toaster } from "./components/ui/sonner";

// App content wrapped in Router
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse delay-2000"></div>
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <ScrollProgress />
        <Header />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Languages />
          <Contact />
        </main>
        <Toaster />
      </div>
    </Router>
  );
}
