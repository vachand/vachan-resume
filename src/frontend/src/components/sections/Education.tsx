import { Section } from "@/components/layout/Section";
import { GraduationCap } from "lucide-react";

interface EducationEntry {
  years: string;
  qualification: string;
  field: string;
  institution: string;
}

const EDUCATION: EducationEntry[] = [
  {
    years: "2026 – 2028",
    qualification: "PGDM",
    field: "Business Management",
    institution: "IMDR, Pune",
  },
  {
    years: "2022 – 2026",
    qualification: "Bachelor of Engineering",
    field: "Computer Science",
    institution: "KLE Technological University, Belagavi",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academics"
      title="Education"
      tone="muted"
      description="Formal training that combines engineering fundamentals with business management."
    >
      <ol className="relative space-y-6 border-l border-border pl-8">
        {EDUCATION.map((entry) => (
          <li key={entry.institution} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-accent"
            >
              <GraduationCap className="h-4 w-4" />
            </span>
            <article className="rounded-lg border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {entry.years}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {entry.qualification}
              </h3>
              <p className="mt-1 text-sm font-medium text-secondary-foreground">
                {entry.field}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {entry.institution}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
