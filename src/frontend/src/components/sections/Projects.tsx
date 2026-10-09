import { Section } from "@/components/layout/Section";
import { Sparkles } from "lucide-react";

const TECHNOLOGIES = ["Python", "AI question generation", "SQL"];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Projects"
      tone="muted"
      description="A project that shows how I turn a technical idea into a working tool."
    >
      <article className="rounded-lg border border-border bg-card p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
          >
            <Sparkles className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Personalized Quiz Generator
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A tool that builds practice quizzes on demand. The user picks a
              topic and a difficulty level, and the application uses AI to
              generate a set of questions that match those choices, making it
              easy to revise a subject at the right level of challenge.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {TECHNOLOGIES.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Section>
  );
}
