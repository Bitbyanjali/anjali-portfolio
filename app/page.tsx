import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import TopNav from "./components/TopNav";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <TopNav />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 lg:px-10">
        <About />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-10 text-center text-xs text-muted/70">
        © {new Date().getFullYear()} Anjali Sinha — Crafted with Next.js,
        Tailwind & 💜
      </footer>
    </>
  );
}
