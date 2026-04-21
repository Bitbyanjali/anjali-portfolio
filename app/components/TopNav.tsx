"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function TopNav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06060c]/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-gradient-accent"
        >
          Anjali Sinha
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {ITEMS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className="relative px-4 py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={
                    isActive ? "text-text" : "text-muted hover:text-text"
                  }
                >
                  {label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-2"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-lg border border-border bg-panel flex items-center justify-center text-text"
          aria-label="Toggle menu"
        >
          <span className="block w-4 h-0.5 bg-current relative before:absolute before:-top-1.5 before:left-0 before:w-4 before:h-0.5 before:bg-current after:absolute after:top-1.5 after:left-0 after:w-4 after:h-0.5 after:bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-[#06060c]/90 backdrop-blur-xl">
          <nav className="flex flex-col p-4 gap-1">
            {ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium ${
                  active === id
                    ? "bg-accent/15 text-text"
                    : "text-muted hover:bg-panel"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
