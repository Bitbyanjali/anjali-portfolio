"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import TypewriterRole from "./TypewriterRole";

export default function Sidebar() {
  return (
    <aside className="glass rounded-3xl p-8 lg:sticky lg:top-6 lg:self-start relative overflow-hidden">
      {/* Animated gradient ring behind avatar */}
      <div className="relative flex flex-col items-center text-center">
        <motion.div
          className="absolute top-0 w-36 h-36 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #ffbf00, #ff9500, #ec4899, #8b5cf6, #ffbf00)",
            filter: "blur(18px)",
            opacity: 0.55,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-32 h-32 rounded-full overflow-hidden ring-2 ring-gold/60 ring-offset-4 ring-offset-[#1a1a1d] bg-gradient-to-br from-gold via-orange-500 to-pink-500 flex items-center justify-center"
        >
          {/* Drop pictureofme.png in /public to replace this */}
          <span className="text-5xl font-bold text-[#1a1a1d] select-none">
            AS
          </span>
        </motion.div>

        <h1 className="mt-6 text-2xl font-bold text-text tracking-tight">
          Anjali Sinha
        </h1>
        <div className="mt-2 min-h-[24px]">
          <TypewriterRole />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/60 space-y-5">
        <ContactRow
          icon={<Mail size={16} />}
          label="Email"
          value="sinhaanjali0442@gmail.com"
          href="mailto:sinhaanjali0442@gmail.com"
        />
        <ContactRow
          icon={<Phone size={16} />}
          label="Phone"
          value="7646734736"
          href="tel:7646734736"
        />
        <ContactRow
          icon={<MapPin size={16} />}
          label="Location"
          value="Bhopal, India"
        />
      </div>

      <div className="mt-8 pt-6 border-t border-border/60 flex justify-center gap-3">
        <Social href="https://x.com/Bitbyanjali" label="Twitter">
          <Twitter size={18} />
        </Social>
        <Social href="https://github.com/" label="GitHub">
          <Github size={18} />
        </Social>
        <Social
          href="https://www.linkedin.com/in/anjalisinha-ai-ml"
          label="LinkedIn"
        >
          <Linkedin size={18} />
        </Social>
      </div>

      <a
        href="mailto:sinhaanjali0442@gmail.com"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-[#1a1a1d] font-semibold py-3 px-4 transition-all hover:brightness-110 hover:glow-gold"
      >
        Let's work together
      </a>
    </aside>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 group">
      <div className="w-9 h-9 rounded-lg bg-[#242428] border border-border flex items-center justify-center text-gold shrink-0 group-hover:border-gold/60 transition-colors">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted/80">
          {label}
        </div>
        <div className="text-sm text-text truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
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
      className="w-10 h-10 rounded-full border border-border bg-[#242428] flex items-center justify-center text-muted transition-all hover:text-gold hover:border-gold hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
