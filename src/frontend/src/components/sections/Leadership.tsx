import { Section } from "@/components/layout/Section";
import { Award, HeartHandshake, Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LeadershipEntry {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ENTRIES: LeadershipEntry[] = [
  {
    title: "Secretary, College Cultural Club",
    description:
      "Served as Secretary of the college cultural club, handling coordination and record-keeping for club activities and events.",
    icon: Users,
  },
  {
    title: "Second Place, Team Dance Competition — BITS Pilani",
    description:
      "Placed second in a team dance competition at BITS Pilani, preparing and performing as part of a coordinated group.",
    icon: Trophy,
  },
  {
    title: "College Event Coordination",
    description:
      "Helped coordinate college events, supporting planning, scheduling and on-the-day execution with the organising team.",
    icon: Award,
  },
  {
    title: "Social-Work Initiatives",
    description:
      "Took part in social-work initiatives, contributing time and effort to community-focused activities.",
    icon: HeartHandshake,
  },
];

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Beyond the classroom"
      title="Leadership and Achievements"
      description="Roles and moments where I worked with others toward a shared goal."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {ENTRIES.map((entry) => {
          const Icon = entry.icon;
          return (
            <article
              key={entry.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent"
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
