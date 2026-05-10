type SectionHeadingProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function SectionHeading({
  title,
  subtitle,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading mb-10">
      <p className="mb-3 text-sm uppercase tracking-[0.32em] text-slate-500">
        {title}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        {subtitle}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}
