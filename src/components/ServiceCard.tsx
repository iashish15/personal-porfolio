type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="glass-card p-7 sm:p-8">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950/90 text-2xl shadow-sm shadow-slate-950/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-4 text-slate-300">{description}</p>
    </div>
  );
}
