import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 mt-24 mb-12">
      <SectionHeading eyebrow="Let's connect" title="Get in Touch" />
      <div className="grid md:grid-cols-3 gap-4">
        <FadeIn>
          <ContactCard
            icon={<Mail size={20} />}
            label="Email"
            value="sinhaanjali0442@gmail.com"
            href="mailto:sinhaanjali0442@gmail.com"
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <ContactCard
            icon={<Phone size={20} />}
            label="Phone"
            value="+91 76467 34736"
            href="tel:7646734736"
          />
        </FadeIn>
        <FadeIn delay={0.16}>
          <ContactCard
            icon={<MapPin size={20} />}
            label="Location"
            value="Bhopal, India"
          />
        </FadeIn>
      </div>

      <FadeIn delay={0.24}>
        <div className="mt-8 glass rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.4), transparent 50%), radial-gradient(circle at 70% 80%, rgba(236,72,153,0.4), transparent 50%)",
            }}
          />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-text">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-muted max-w-xl mx-auto">
              I'd love to hear about it. Drop a message and I'll get back to you
              within a day.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:sinhaanjali0442@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-2 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
              >
                <Mail size={16} />
                Say Hello
              </a>
              <div className="flex items-center gap-2">
                {[
                  {
                    href: "https://github.com/",
                    icon: <Github size={16} />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/anjalisinha-ai-ml/",
                    icon: <Linkedin size={16} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://x.com/Bitbyanjali",
                    icon: <Twitter size={16} />,
                    label: "Twitter",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl border border-border bg-panel flex items-center justify-center text-muted hover:text-accent hover:border-accent/60 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function ContactCard({
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
  const inner = (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-accent/40 transition group h-full">
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted">
          {label}
        </div>
        <div className="text-sm text-text truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
