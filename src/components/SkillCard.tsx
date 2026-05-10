type SkillCardProps = {
  category: string;
  icon: string;
  accent: string;
  items: string[];
};

export default function SkillCard({
  category,
  icon,
  accent,
  items,
}: SkillCardProps) {
  return (
    <div className="glass-card overflow-hidden p-6">
      <div
        className={`mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r px-4 py-3 text-sm font-semibold text-slate-100 shadow-sm shadow-slate-950/20 ${accent}`}
      >
        <span>{icon}</span>
        <span>{category}</span>
      </div>
      <ul className="space-y-3 text-slate-300">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-3xl border border-white/5 bg-slate-950/50 px-4 py-3 transition hover:border-sky-400/20 hover:bg-slate-900/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
