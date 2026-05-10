import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./components/SectionHeading";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import EducationCard from "./components/EducationCard";
import CertificationCard from "./components/CertificationCard";
import TimelineItem from "./components/TimelineItem";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import StatCard from "./components/StatCard";
import AnimatedBlob from "./components/AnimatedBlob";
import {
  heroSocials,
  aboutSummary,
  highlights,
  focusPoints,
  skillCategories,
  projects,
  educationEntries,
  certifications,
  timeline,
  services,
  stats,
  testimonials,
  contactChannels,
} from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [loaded, setLoaded] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [projectFilter, setProjectFilter] = useState("All");
  const [showProjectSkeletons, setShowProjectSkeletons] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 650);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const initialTimer = window.setTimeout(
      () => setShowProjectSkeletons(false),
      900,
    );
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    setShowProjectSkeletons(true);
    const skeletonTimer = window.setTimeout(
      () => setShowProjectSkeletons(false),
      500,
    );
    return () => clearTimeout(skeletonTimer);
  }, [projectFilter]);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage(
      "Message received! I’ll review your request and respond shortly.",
    );
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitMessage(""), 4200);
  };

  const projectFilters = [
    "All",
    "React",
    "Dashboard",
    "E-commerce",
    "UI/UX",
    "Full Stack",
  ];

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.type === projectFilter ||
            project.tech.includes(projectFilter) ||
            project.category
              .toLowerCase()
              .includes(projectFilter.toLowerCase()),
        );

  return (
    <div className="relative overflow-hidden">
      <AnimatedBlob />

      {!loaded ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-slate-100">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto h-24 w-24 rounded-full border-2 border-sky-400/30 bg-gradient-to-br from-sky-500/20 to-violet-500/20 p-1 shadow-lg shadow-sky-500/20"
            >
              <img
                src="/images/avatar_image.png"
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
            </motion.div>
            <div className="h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-violet-500 animate-pulse" />
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              Loading portfolio
            </p>
          </div>
        </div>
      ) : null}

      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <header className="mb-20 rounded-[32px] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-slate-700/80 bg-slate-800/70 px-4 py-2 text-sm uppercase tracking-[0.24em] text-slate-300">
                Frontend architect & SaaS UI specialist
              </p>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl"
              >
                Building premium React experiences that convert, delight, and
                scale.
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.12 }}
                className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl"
              >
                I partner with startups, agencies, and ambitious brands to
                design modern SaaS interfaces, develop production-ready React
                applications, and deliver polished digital experiences with an
                emphasis on performance.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-1"
                >
                  Hire me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500/70 hover:bg-slate-900/90"
                >
                  View projects
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
                {heroSocials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-950/80 px-4 py-3 transition hover:border-slate-500/80 hover:text-slate-100"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/80 p-6 shadow-glow sm:p-8"
            >
              <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      Profile
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-slate-50">
                      Ashish Gupta
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20">
                  <div className="mb-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-900/80 p-5 text-sm text-slate-300">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Experience
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-slate-50">
                        4+ yrs
                      </p>
                    </div>
                    <div className="rounded-3xl bg-slate-900/80 p-5 text-sm text-slate-300">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Projects
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-slate-50">
                        18+
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-slate-950/95 p-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      Specialty
                    </p>
                    <p className="mt-3 text-lg font-semibold text-slate-100">
                      React & Tailwind design systems for high-growth SaaS
                      products.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        <section id="about" className="mb-20">
          <SectionHeading
            title="About"
            subtitle="Modern frontend leadership with a polished product mindset."
            description="I deliver data-driven interfaces, create reusable component systems, and help product teams move from idea to launch quickly with a premium visual standard."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">
                    Profile summary
                  </p>
                  <p className="text-base leading-8 text-slate-300">
                    {aboutSummary}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-slate-950/80 p-5"
                    >
                      <p className="text-sm text-slate-400">{item.title}</p>
                      <p className="mt-3 text-lg font-semibold text-slate-100">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Career focus
                </p>
                <ul className="space-y-4 text-slate-300">
                  {focusPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-sky-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mb-20">
          <SectionHeading
            title="Skills"
            subtitle="Technology stack for polished digital products."
            description="This toolkit helps me fast-track product development while keeping each experience accessible, performant, and visually distinct."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skillCategories.map((skill) => (
              <SkillCard key={skill.category} {...skill} />
            ))}
          </div>
        </section>

        <section id="education" className="mb-20">
          <SectionHeading
            title="Education"
            subtitle="Academic foundation for practical engineering work."
            description="A focused learning path in mathematics and frontend development that supports strong problem solving and modern web delivery."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {educationEntries.map((item) => (
              <EducationCard key={item.degree} {...item} />
            ))}
          </div>
        </section>

        <section id="certifications" className="mb-20">
          <SectionHeading
            title="Certifications"
            subtitle="Verified credentials that reinforce relevant technical skills."
            description="Professional certificates from established platforms that reflect disciplined learning in frontend development and responsive design."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <CertificationCard key={certification.name} {...certification} />
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <SectionHeading
            title="Featured projects"
            subtitle="Premium project showcase with live demos, technical depth, and measurable impact."
            description="Each project highlights realistic delivery, frontend craftsmanship, API integration, and responsive product thinking."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="mb-8 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400 shadow-glow backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
          >
            <p>
              Showing{" "}
              <span className="font-semibold text-slate-100">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}{" "}
              {projectFilter === "All"
                ? "across all categories"
                : `in ${projectFilter}`}
              .
            </p>
            <div className="flex flex-wrap gap-3">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setProjectFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm transition cursor-pointer ${
                    projectFilter === filter
                      ? "border-sky-400 bg-sky-500/10 text-sky-200"
                      : "border-slate-700 bg-slate-950/70 text-slate-400 hover:border-slate-500 hover:text-slate-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
            className="grid gap-6 xl:grid-cols-2 md:grid-cols-2"
          >
            {showProjectSkeletons ? (
              Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="skeleton-card p-6 sm:p-8">
                  <div className="mb-6 h-6 w-32 rounded-full bg-slate-700/70" />
                  <div className="mb-6 h-48 rounded-[28px] bg-slate-800/80" />
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 rounded-full bg-slate-700/70" />
                    <div className="h-4 w-full rounded-full bg-slate-700/70" />
                    <div className="h-4 w-5/6 rounded-full bg-slate-700/70" />
                  </div>
                </div>
              ))
            ) : filteredProjects.length ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))
            ) : (
              <div className="glass-card col-span-full p-8 text-slate-300">
                No projects found for this filter. Try another category.
              </div>
            )}
          </motion.div>
        </section>

        <section id="experience" className="mb-20">
          <SectionHeading
            title="Experience timeline"
            subtitle="Strategic frontend leadership across product and enterprise teams."
            description="A timeline of roles that combine product thinking, component-driven development, and collaborative execution."
          />

          <div className="space-y-6">
            {timeline.map((item) => (
              <TimelineItem key={item.company} {...item} />
            ))}
          </div>
        </section>

        <section id="services" className="mb-20">
          <SectionHeading
            title="Services"
            subtitle="How I can help your next growth phase."
            description="From full product builds to polished UI systems, I deliver thoughtful front-end services for startups, agencies, and freelance partnerships."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section id="stats" className="mb-20">
          <SectionHeading
            title="GitHub & stats"
            subtitle="A quick look at productivity, delivery, and developer momentum."
            description="These metrics reflect consistent work across UI engineering, live deployments, and reusable systems."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((item) => (
              <StatCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="mb-20">
          <SectionHeading
            title="Testimonials"
            subtitle="Feedback from founders, product teams, and clients."
            description="Each review highlights collaboration, design quality, and turnaround speed for high-value projects."
          />

          <div className="grid gap-6 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <SectionHeading
            title="Contact"
            subtitle="Ready to build your next experience?"
            description="Send a note, book a discovery call, or ask about freelance availability for frontend work."
          />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form
              onSubmit={handleContactSubmit}
              className="glass-card space-y-5 p-8 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  Name
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-300">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Send message
              </button>
              {submitMessage ? (
                <p className="text-sm text-emerald-400">{submitMessage}</p>
              ) : null}
            </form>

            <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Contact details
                </p>
                <p className="text-2xl font-semibold text-slate-50">
                  Let’s work together
                </p>
                <p className="text-slate-300">
                  Available for freelance engagements, product sprints, and
                  React-led builds.
                </p>
              </div>

              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-sky-500/30 hover:bg-slate-950/90"
                  >
                    <div className="mt-1 h-10 w-10 rounded-2xl bg-slate-800/90 text-center leading-10 text-xl text-sky-400">
                      {channel.icon}
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                        {channel.label}
                      </p>
                      <p className="mt-2 text-base font-medium text-slate-100">
                        {channel.detail}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 text-center text-sm text-slate-500 shadow-glow backdrop-blur-xl">
          <p>
            © 2026 Ashish Gupta. Crafted for SaaS, scale, and memorable digital
            experiences.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
