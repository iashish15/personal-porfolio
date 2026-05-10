import { motion } from "framer-motion";

type EducationCardProps = {
  degree: string;
  institution: string;
  duration: string;
  coursework: string[];
  achievement?: string;
  icon: string;
};

export default function EducationCard({
  degree,
  institution,
  duration,
  coursework,
  achievement,
  icon,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-glow transition hover:-translate-y-1 hover:border-sky-400/40"
    >
      <div className="absolute left-5 top-6 h-12 w-12 rounded-3xl bg-slate-900/90 ring-1 ring-white/10 shadow-lg shadow-slate-950/40 flex items-center justify-center text-lg text-sky-300">
        {icon}
      </div>
      <div className="ml-16 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          {duration}
        </p>
        <h3 className="text-xl font-semibold text-slate-100">{degree}</h3>
        <p className="text-sm text-slate-300">{institution}</p>
        <div className="space-y-2 pt-4 text-sm text-slate-300">
          <p className="font-medium text-slate-100">Relevant coursework</p>
          <ul className="space-y-1 list-disc pl-5 text-slate-300">
            {coursework.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {achievement ? (
          <p className="mt-4 rounded-3xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
            {achievement}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
