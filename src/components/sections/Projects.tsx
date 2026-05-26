import { Check, ExternalLink, Github } from "lucide-react";
import { MotionBlock } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Product-minded projects with clear technical purpose."
      description="Selected project concepts focused on AI, QA, API workflows and developer productivity."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <MotionBlock key={project.name} delay={index * 0.06}>
              <article className="glass-panel flex h-full flex-col rounded-lg p-6 transition hover:-translate-y-1 hover:border-sky-300/35">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-md bg-sky-300/12 text-sky-200">
                      <Icon size={21} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-sky-100 ring-1 ring-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="mt-0.5 shrink-0 text-sky-300" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                </div>
              </article>
            </MotionBlock>
          );
        })}
      </div>
    </Section>
  );
}
