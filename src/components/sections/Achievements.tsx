import { Award } from "lucide-react";
import { MotionBlock } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Recognition for logic, systems thinking and collaborative building."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <MotionBlock key={achievement} delay={index * 0.06}>
            <article className="glass-panel h-full rounded-lg p-6 transition hover:-translate-y-1 hover:border-violet-300/35">
              <Award className="mb-5 text-sky-300" size={24} aria-hidden="true" />
              <p className="text-base font-semibold leading-7 text-white">{achievement}</p>
            </article>
          </MotionBlock>
        ))}
      </div>
    </Section>
  );
}
