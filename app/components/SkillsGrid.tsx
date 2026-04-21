"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

export const SKILLS = [
  { name: "HTML5", icon: "html5", level: 95 },
  { name: "CSS3", icon: "css", level: 92 },
  { name: "JavaScript", icon: "javascript", level: 85 },
  { name: "TypeScript", icon: "typescript", level: 75 },
  { name: "React", icon: "react", level: 80 },
  { name: "Next.js", icon: "nextdotjs", level: 70 },
  { name: "Tailwind", icon: "tailwindcss", level: 88 },
  { name: "Git", icon: "git", level: 78 },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {SKILLS.map((s, i) => (
        <FadeIn key={s.name} delay={0.05 * i}>
          <SkillCard {...s} />
        </FadeIn>
      ))}
    </div>
  );
}

function SkillCard({
  name,
  icon,
  level,
}: {
  name: string;
  icon: string;
  level: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="glass rounded-2xl p-5 flex flex-col items-center text-center group cursor-default"
    >
      <div
        className="w-12 h-12 mb-3 rounded-xl bg-[#14142a] border border-border flex items-center justify-center transition-all group-hover:border-accent group-hover:bg-accent/10"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${icon}`}
          alt={name}
          className="w-6 h-6"
        />
      </div>
      <h3
        className="text-sm font-semibold text-text"
        style={{ transform: "translateZ(20px)" }}
      >
        {name}
      </h3>
      <div className="w-full h-1 mt-3 rounded-full bg-[#14142a] overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-accent-2"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
