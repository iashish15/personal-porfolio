type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="glass-card min-h-[260px] p-7 sm:p-8">
      <p className="mb-6 text-slate-300">“{quote}”</p>
      <div className="mt-auto border-t border-slate-800/80 pt-5 text-sm text-slate-400">
        <p className="font-semibold text-slate-100">{name}</p>
        <p>
          {role} · {company}
        </p>
        <p className="mt-3 text-amber-400">{"★".repeat(rating)}</p>
      </div>
    </div>
  );
}
