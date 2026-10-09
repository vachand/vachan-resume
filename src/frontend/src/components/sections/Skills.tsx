import { Section } from "@/components/layout/Section";

interface SkillGroup {
  title: string;
  caption: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Technical",
    caption: "Tools and languages I work with.",
    skills: ["Python", "SQL", "MS Word"],
  },
  {
    title: "Professional",
    caption: "How I approach work and collaborate.",
    skills: [
      "Analytical thinking",
      "Problem-solving",
      "Communication",
      "Teamwork",
      "Adaptability",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      description="A focused set of technical and professional strengths."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-border bg-card p-6"
          >
            <h3 className="font-display text-base font-semibold text-foreground">
              {group.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {group.caption}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
