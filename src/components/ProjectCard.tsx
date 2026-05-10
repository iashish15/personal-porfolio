import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  category: string;
  type: string;
  imageSrc: string;
  screenshotLabel: string;
  description: string;
  features: string[];
  contribution: string;
  problemSolved: string;
  tech: string[];
  liveLink: string;
  repoLink: string;
};

export default function ProjectCard({
  title,
  category,
  type,
  imageSrc,
  screenshotLabel,
  description,
  features,
  contribution,
  problemSolved,
  tech,
  liveLink,
  repoLink,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900/95 via-slate-950/85 to-slate-900/95 p-[1px] shadow-glow transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(56,189,248,0.18)]"
    >
      <div className="glass-card flex h-full flex-col overflow-hidden rounded-[31px] border border-white/10 bg-slate-900/90 p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">
              {category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-100">
              {title}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
            {type}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 transition duration-500 group-hover:-translate-y-1">
          <img
            src={imageSrc}
            alt={`${title} preview`}
            loading="lazy"
            decoding="async"
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-3xl bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 backdrop-blur-sm">
            {screenshotLabel}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
          <p className="text-sm leading-7 text-slate-300">{description}</p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Key features
            </p>
            <ul className="space-y-2 text-slate-300">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <span className="text-sm leading-6">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-slate-300">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                My contribution
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {contribution}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Problem solved
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {problemSolved}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-slate-950/75 px-3 py-2 text-xs text-slate-300 transition hover:border-sky-400/30"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5"
          >
            Live demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/50 hover:bg-slate-900/90"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
