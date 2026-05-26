import { MotionBlock } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit for front-end delivery, quality and documentation."
      description="Technologies and practices organized around the way modern products are built, validated and maintained."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <MotionBlock key={category.title} delay={index * 0.05}>
              <article className="glass-panel h-full rounded-lg p-6 transition hover:-translate-y-1 hover:border-violet-300/35">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-violet-300/12 text-violet-200">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </MotionBlock>
          );
        })}
      </div>
    </Section>
  );
}
