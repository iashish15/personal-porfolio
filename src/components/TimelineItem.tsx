type TimelineItemProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export default function TimelineItem({
  company,
  role,
  period,
  location,
  points,
}: TimelineItemProps) {
  return (
    <div className="glass-card overflow-hidden p-7 sm:p-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {period}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-100">{role}</h3>
          <p className="text-sm text-slate-400">
            {company} · {location}
          </p>
        </div>
      </div>
      <ul className="space-y-3 text-slate-300">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <p>{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
