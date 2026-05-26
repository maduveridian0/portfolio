import { ArrowRight, Mail } from "lucide-react";
import { heroCards } from "@/data/portfolio";
import { MotionBlock } from "@/components/ui/Motion";

export function Hero() {
  return (
    <section id="home" className="section-shell flex min-h-[calc(100vh-4rem)] scroll-mt-24 items-center py-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <MotionBlock>
          <p className="mb-5 inline-flex rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-200">
            Software Developer / Front-end Developer
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Maria Eduarda
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-xl leading-9 text-slate-200 sm:text-2xl">
            Software Developer focused on building scalable, user-friendly and
            well-structured web applications.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I work with React, Next.js, TypeScript and modern front-end
            architecture, combining development, QA experience and technical
            documentation to deliver reliable digital products.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/14 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </MotionBlock>

        <MotionBlock className="grid gap-4 sm:grid-cols-2" delay={0.12}>
          {heroCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.label}
                className="glass-panel min-h-36 rounded-lg p-5 transition hover:-translate-y-1 hover:border-sky-300/35 hover:bg-white/8"
              >
                <div className="mb-8 inline-flex size-11 items-center justify-center rounded-md bg-sky-300/12 text-sky-200">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold text-white">{card.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {index === 0
                    ? "Interfaces built with structure, accessibility and maintainability."
                    : index === 1
                      ? "Validation thinking applied from requirements to delivery."
                      : index === 2
                        ? "Practical AI workflows for productivity and documentation."
                        : "Clear technical content for teams and product decisions."}
                </p>
              </div>
            );
          })}
        </MotionBlock>
      </div>
    </section>
  );
}
