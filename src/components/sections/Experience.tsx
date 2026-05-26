import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { MotionBlock } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { experienceHighlights } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Front-end work connected to quality, product context and delivery."
    >
      <MotionBlock>
        <article className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-l border-sky-300/30 pl-6">
              <span className="absolute -left-5 top-0 inline-flex size-10 items-center justify-center rounded-full border border-sky-300/35 bg-slate-950 text-sky-200">
                <BriefcaseBusiness size={19} aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">
                Current Focus
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Software Developer / Front-end Developer
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                I work mainly with front-end development, technical validations
                and product improvements, contributing to the creation and
                maintenance of web applications using React, Next.js, TypeScript
                and modern development practices.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                My responsibilities include implementing user interfaces,
                integrating APIs, validating business rules, documenting bugs
                and improvements, creating BDD scenarios and collaborating with
                development and QA processes in agile environments.
              </p>
            </div>

            <div className="grid content-start gap-3">
              {experienceHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-violet-200" size={18} />
                  <span className="text-sm leading-6 text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </MotionBlock>
    </Section>
  );
}
