import { motion } from "framer-motion";

type CertificationCardProps = {
  name: string;
  provider: string;
  year: string;
  link?: string;
  categories: string[];
  icon: string;
};

export default function CertificationCard({
  name,
  provider,
  year,
  link,
  categories,
  icon,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
      whileHover={{ y: -6 }}
      className="group rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-glow transition duration-300 hover:shadow-[0_30px_80px_rgba(102,126,234,0.18)]"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/90 text-lg text-sky-400 ring-1 ring-white/10">
            {icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-100">{name}</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              {provider}
            </p>
          </div>
        </div>
        <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
          {year}
        </span>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-xs text-slate-300"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5"
          >
            View credential
          </a>
        ) : (
          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-slate-300">
            No link
          </span>
        )}
      </div>
    </motion.div>
  );
}
