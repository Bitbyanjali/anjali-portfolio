"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Twitter,
} from "lucide-react";
import HeroVisual from "./HeroVisual";
import TypewriterRole from "./TypewriterRole";

const SKILL_PILLS = ["React", "TypeScript", "Tailwind", "Next.js"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-6 lg:px-10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
        {/* Left column: text */}
        <div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-medium hover:border-accent/70 transition"
          >
            <Sparkles size={14} className="text-accent-2" />
            Open to Frontend Roles
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            <span className="text-gradient-soft block">Frontend</span>
            <span className="text-gradient-accent block">Developer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-2xl text-text font-light min-h-[36px]"
          >
            <TypewriterRole />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base lg:text-lg text-muted max-w-xl leading-relaxed"
          >
            Crafting beautiful, functional, user-friendly web experiences —
            turning complex problems into simple, elegant interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {SKILL_PILLS.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 rounded-full text-sm border border-border bg-panel/60 text-text hover:border-accent/60 hover:text-accent transition"
              >
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <GlowButton href="#portfolio">
              Projects
              <ExternalLink size={16} />
            </GlowButton>
            <GlowButton href="#contact">
              Contact
              <Mail size={16} />
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex items-center gap-3"
          >
            <Social href="https://github.com/" label="GitHub">
              <Github size={18} />
            </Social>
            <Social
              href="https://www.linkedin.com/in/anjalisinha-ai-ml/"
              label="LinkedIn"
            >
              <Linkedin size={18} />
            </Social>
            <Social href="https://x.com/Bitbyanjali" label="X (Twitter)">
              <Twitter size={18} />
            </Social>
          </motion.div>
        </div>

        {/* Right column: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:block"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function GlowButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="relative group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-panel/60 text-text font-medium backdrop-blur hover:border-accent/60 hover:-translate-y-0.5 transition-all"
    >
      <span
        className="absolute -inset-3 -z-10 rounded-2xl opacity-60 blur-2xl transition-opacity group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, rgba(139,92,246,0.55), transparent 70%)",
        }}
      />
      {children}
    </a>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-12 h-12 rounded-xl border border-border bg-panel/60 flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 hover:-translate-y-0.5 transition-all"
    >
      <span
        className="absolute -inset-2 -z-10 rounded-2xl opacity-50 blur-xl transition-opacity group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, rgba(139,92,246,0.5), transparent 70%)",
        }}
      />
      {children}
    </a>
  );
}
