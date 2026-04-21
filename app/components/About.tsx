import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "2+", label: "Years learning" },
  { value: "10+", label: "Projects built" },
  { value: "6+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading eyebrow="Hello, I'm Anjali" title="About Me" />
      <FadeIn delay={0.1}>
        <p className="text-lg text-muted leading-relaxed">
          I'm a creative and passionate{" "}
          <span className="text-gradient-accent font-semibold">
            frontend developer
          </span>{" "}
          with a keen eye for detail and a love for building beautiful,
          functional, and user-friendly web experiences. My journey in web
          development is driven by a desire to turn complex problems into
          simple, elegant solutions. I specialize in modern web technologies and
          am always eager to learn and adapt to the ever-evolving digital
          landscape.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={0.15 + i * 0.08}>
            <div className="glass rounded-2xl p-5 text-center hover:border-gold/40 transition-colors">
              <div className="text-3xl font-bold text-gradient-accent">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted mt-1">
                {s.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
