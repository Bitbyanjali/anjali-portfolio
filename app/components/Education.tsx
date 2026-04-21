import { GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    year: "2023 – 2027",
    degree: "B.Tech in CSE (AI & ML)",
    college: "Oriental Institute of Science and Technology, Bhopal",
    details:
      "Focusing on software development, algorithms, web technologies, computer networks, operating systems, and generative AI.",
    current: true,
  },
  {
    year: "2020 – 2022",
    degree: "Intermediate (Senior Secondary)",
    college: "S.U. College, Hilsa",
    details: "Focused on JEE preparation — Physics, Chemistry, Mathematics.",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 mt-24">
      <SectionHeading eyebrow="My journey" title="Education" />
      <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-gold before:via-border before:to-transparent">
        {ITEMS.map((it, i) => (
          <FadeIn key={it.degree} delay={i * 0.12}>
            <div className="relative mb-10 last:mb-0">
              <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-[#1a1a1d] border-2 border-gold flex items-center justify-center">
                <GraduationCap size={12} className="text-gold" />
                {it.current && (
                  <span className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-60" />
                )}
              </div>
              <div className="glass rounded-2xl p-5 hover:border-gold/40 transition-colors">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/30">
                    {it.year}
                  </span>
                  {it.current && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-text">{it.degree}</h3>
                <p className="text-sm italic text-muted">{it.college}</p>
                <p className="text-sm text-muted mt-2">{it.details}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
