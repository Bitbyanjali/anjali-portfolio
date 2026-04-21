"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Code2,
  ExternalLink,
  Layers,
} from "lucide-react";
import { useState } from "react";
import FadeIn from "./FadeIn";
import SkillsGrid from "./SkillsGrid";

type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  liveUrl?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce storefront with product catalog, cart, and checkout flow — built with modern design principles.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-orange-500 via-pink-500 to-rose-400",
    emoji: "🛍️",
  },
  {
    title: "Business Landing Page",
    description:
      "A sleek single-page site for a corporate client designed to capture leads and showcase services.",
    tags: ["HTML", "CSS", "Flexbox"],
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    emoji: "🚀",
    featured: true,
  },
  {
    title: "Analytics Dashboard UI",
    description:
      "A data-viz dashboard exploring grid layouts, responsive cards, and clean information hierarchy.",
    tags: ["Grid", "UI/UX", "CSS"],
    gradient: "from-sky-500 via-cyan-400 to-emerald-400",
    emoji: "📊",
  },
  {
    title: "Personal Blog Theme",
    description:
      "A clean, typography-first blog theme focused on readability and calm, deliberate design.",
    tags: ["HTML", "CSS", "Typography"],
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    emoji: "✍️",
  },
];

/* Placeholder certificates — replace with real ones */
const CERTIFICATES = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    emoji: "📜",
    gradient: "from-sky-500 via-cyan-500 to-teal-400",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
    emoji: "⚡",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    featured: true,
  },
  {
    title: "Frontend Development Specialization",
    issuer: "Coursera",
    year: "2025",
    emoji: "🎓",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
];

const TABS = [
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "stack", label: "Tech Stack", icon: Layers },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Portfolio() {
  const [tab, setTab] = useState<TabId>("projects");
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="portfolio" className="scroll-mt-24 mt-24 mb-16">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient-accent">
            Portfolio Showcase
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
      </FadeIn>

      {/* Tab switcher */}
      <FadeIn delay={0.1}>
        <div className="mt-10 glass rounded-2xl p-2 grid grid-cols-3 gap-1 max-w-3xl mx-auto">
          {TABS.map(({ id, label, icon: Icon }) => {
            const isActive = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`relative px-4 py-4 rounded-xl transition-colors flex flex-col items-center gap-2 text-sm font-semibold ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl bg-[#14142a]/70 border border-accent/40 shadow-[0_0_30px_-10px_rgba(139,92,246,0.6)]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative flex flex-col items-center gap-1.5">
                  <Icon
                    size={18}
                    className={isActive ? "text-accent" : "text-muted"}
                  />
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* Tab content */}
      <div className="mt-10 min-h-[400px]">
        <AnimatePresence mode="wait">
          {tab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAll ? PROJECTS : PROJECTS.slice(0, 3)).map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
              {PROJECTS.length > 3 && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setShowAll((v) => !v)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-panel/60 text-muted hover:text-text hover:border-accent/50 transition"
                  >
                    {showAll ? "Show Less" : "See More"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        showAll ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {tab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {CERTIFICATES.map((c) => (
                <CertificateCard key={c.title} cert={c} />
              ))}
            </motion.div>
          )}

          {tab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <SkillsGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl overflow-hidden border bg-panel transition-all flex flex-col ${
        project.featured
          ? "border-accent/60 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]"
          : "border-border hover:border-accent/40"
      }`}
    >
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-7xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          {project.emoji}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-text">{project.title}</h3>
        <p className="text-sm text-muted mt-2 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
          <a
            href={project.liveUrl || "#"}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-2 transition"
          >
            Live Demo
            <ExternalLink size={13} />
          </a>
          <button className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-lg border border-border bg-[#14142a] text-text hover:border-accent/50 transition">
            Details
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function CertificateCard({
  cert,
}: {
  cert: (typeof CERTIFICATES)[number];
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl overflow-hidden border bg-panel transition-all flex flex-col ${
        "featured" in cert && cert.featured
          ? "border-accent/60 shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]"
          : "border-border hover:border-accent/40"
      }`}
    >
      <div
        className={`relative h-40 bg-gradient-to-br ${cert.gradient} flex items-center justify-center`}
      >
        <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
          {cert.emoji}
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/30 text-white backdrop-blur">
          {cert.year}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-text">{cert.title}</h3>
        <p className="text-sm text-muted mt-1">{cert.issuer}</p>
        <div className="mt-4 flex items-center gap-1.5 text-xs text-accent">
          <Award size={14} />
          Verified
        </div>
      </div>
    </motion.article>
  );
}
