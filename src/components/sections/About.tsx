import { Section } from "@/components/ui/Section";
import { MotionBlock } from "@/components/ui/Motion";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Focused on reliable interfaces and practical product delivery.">
      <MotionBlock className="glass-panel rounded-lg p-6 sm:p-8">
        <div className="grid gap-6 text-base leading-8 text-slate-300 lg:grid-cols-2">
          <p>
            I&apos;m a Software Developer with experience in front-end
            development, technical documentation, QA validation and integration
            with APIs. My work is focused on creating clear, scalable and
            reliable interfaces, always considering usability, maintainability
            and real product requirements.
          </p>
          <p>
            I have experience working with React, Next.js, TypeScript, Git,
            agile methodologies and component-based architectures. I also enjoy
            building tools that improve developer productivity, documentation
            processes and testing workflows.
          </p>
        </div>
      </MotionBlock>
    </Section>
  );
}
