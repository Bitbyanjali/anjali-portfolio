import FadeIn from "./FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <FadeIn className="mb-8">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
        {title}
      </h2>
      <div className="heading-line mt-4" />
    </FadeIn>
  );
}
