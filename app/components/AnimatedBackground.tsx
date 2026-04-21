"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opMin: number;
  opMax: number;
  color: string;
};

const HUES = [
  "rgba(167,139,250,0.9)", // violet
  "rgba(244,114,182,0.9)", // pink
  "rgba(94,234,212,0.9)", // teal
  "rgba(255,255,255,0.75)", // white
];

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, () => {
        const opMax = Math.random() * 0.55 + 0.25;
        return {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 12 + 10,
          delay: Math.random() * 8,
          opMin: opMax * 0.25,
          opMax,
          color: HUES[Math.floor(Math.random() * HUES.length)],
        };
      })
    );
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 85%)",
        }}
      />

      {/* Ambient orbs — fewer, smaller blur radii, same glow feel */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          filter: "blur(80px)",
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.55), transparent 70%)",
        }}
        initial={{ x: -200, y: -100 }}
        animate={{ x: [-200, 250, -50, -200], y: [-100, 200, 350, -100] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 460,
          height: 460,
          filter: "blur(90px)",
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.45), transparent 70%)",
        }}
        initial={{ x: "70vw", y: "-10vh" }}
        animate={{
          x: ["70vw", "30vw", "75vw", "70vw"],
          y: ["-10vh", "30vh", "60vh", "-10vh"],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          filter: "blur(80px)",
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(52,211,153,0.28), transparent 70%)",
        }}
        initial={{ x: "25vw", y: "75vh" }}
        animate={{
          x: ["25vw", "70vw", "10vw", "25vw"],
          y: ["75vh", "30vh", "60vh", "75vh"],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          filter: "blur(90px)",
          willChange: "transform",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.28), transparent 70%)",
        }}
        initial={{ x: "85vw", y: "55vh" }}
        animate={{
          x: ["85vw", "50vw", "90vw", "85vw"],
          y: ["55vh", "85vh", "20vh", "55vh"],
        }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles (pure CSS animation — no JS subscription per particle) */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              "--p-dur": `${p.duration}s`,
              "--p-delay": `${p.delay}s`,
              "--p-op-min": p.opMin,
              "--p-op-max": p.opMax,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(6,6,12,0.88) 100%)",
        }}
      />
    </div>
  );
}
