type StatCardProps = {
  title: string;
  value: string;
  detail: string;
  icon: string;
};

export default function StatCard({
  title,
  value,
  detail,
  icon,
}: StatCardProps) {
  return (
    <div className="glass-card p-7 sm:p-8">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950/90 text-2xl shadow-sm shadow-slate-950/20">
        {icon}
      </div>
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        {title}
      </p>
      <p className="mt-4 text-4xl font-semibold text-slate-100">{value}</p>
      <p className="mt-3 text-slate-400">{detail}</p>
    </div>
  );
}
