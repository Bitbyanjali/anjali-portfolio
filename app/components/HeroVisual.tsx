"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Palette, Layers } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/* Hero illustration: photo of Anjali inside a rotating gradient ring + floating tech chips. */
export default function HeroVisual() {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-6 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #8b5cf6, #ec4899, #a78bfa, #34d399, #8b5cf6)",
          filter: "blur(24px)",
          opacity: 0.65,
          willChange: "transform",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Photo disc */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-14 rounded-full overflow-hidden bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-2xl ring-2 ring-white/10"
      >
        {!imgErr ? (
          <Image
            src="/anjali.png"
            alt="Anjali Sinha"
            fill
            priority
            sizes="(min-width: 1024px) 440px, 70vw"
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[clamp(64px,12vw,128px)] font-extrabold text-white drop-shadow-lg select-none tracking-tight">
              AS
            </span>
          </div>
        )}

        {/* Subtle gradient overlay at the bottom for depth */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(6,6,12,0.45), transparent)",
          }}
        />
      </motion.div>

      {/* Orbit chips */}
      <FloatChip className="top-2 left-1/2 -translate-x-1/2" delay={0}>
        <Code2 size={20} className="text-violet-300" />
        <span>React</span>
      </FloatChip>
      <FloatChip className="top-1/2 -right-2 -translate-y-1/2" delay={0.6}>
        <Palette size={20} className="text-pink-300" />
        <span>UI/UX</span>
      </FloatChip>
      <FloatChip className="bottom-2 left-1/2 -translate-x-1/2" delay={1.2}>
        <Layers size={20} className="text-emerald-300" />
        <span>Next.js</span>
      </FloatChip>
      <FloatChip className="top-1/2 -left-2 -translate-y-1/2" delay={1.8}>
        <Sparkles size={20} className="text-amber-300" />
        <span>AI/ML</span>
      </FloatChip>

      {/* Decorative dots */}
      <span className="absolute top-8 right-8 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
      <span className="absolute bottom-12 left-6 w-1.5 h-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
      <span className="absolute top-1/3 left-2 w-1 h-1 rounded-full bg-emerald-300" />
    </div>
  );
}

function FloatChip({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-medium text-text shadow-xl ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.3 + delay * 0.2 },
        scale: { duration: 0.6, delay: 0.3 + delay * 0.2 },
        y: {
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
