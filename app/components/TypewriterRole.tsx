"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "AI/ML Explorer",
  "Creative Coder",
];

export default function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const current = ROLES[index];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          70
        );
      } else {
        timer = setTimeout(() => setPhase("deleting"), 1400);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 35);
      } else {
        setIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, index]);

  return (
    <span className="cursor-blink inline-block text-gold font-medium">
      {text}
    </span>
  );
}
