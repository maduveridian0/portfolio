import { Github, Linkedin, Mail } from "lucide-react";
import { MotionBlock } from "@/components/ui/Motion";
import { contactLinks } from "@/data/portfolio";

const links = [
  { label: "Email", href: contactLinks.email, icon: Mail },
  { label: "LinkedIn", href: contactLinks.linkedin, icon: Linkedin },
  { label: "GitHub", href: contactLinks.github, icon: Github }
];

export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-16 sm:py-20">
      <MotionBlock>
        <div className="glass-panel rounded-lg p-7 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Contact
              </p>
              <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
                Let&apos;s build something together
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m open to opportunities, collaborations and projects where
                I can contribute with front-end development, technical problem
                solving and product-oriented thinking.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex min-w-36 items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <Icon size={17} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </MotionBlock>
    </section>
  );
}
