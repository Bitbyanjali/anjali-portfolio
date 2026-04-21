"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Portfolio" },
];

export default function Navigation() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-4 z-40 glass rounded-full px-2 py-2 flex items-center gap-1 justify-center md:justify-end mb-10 self-start mx-auto md:mx-0 md:ml-auto w-fit">
      {ITEMS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
              isActive ? "text-[#1a1a1d]" : "text-muted hover:text-text"
            }`}
          >
            {isActive && (
              <span className="absolute inset-0 rounded-full bg-gold shadow-[0_0_20px_rgba(255,191,0,0.5)]" />
            )}
            <span className="relative">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
