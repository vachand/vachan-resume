import { Section } from "@/components/layout/Section";
import { Languages as LanguagesIcon } from "lucide-react";

const LANGUAGES = ["English", "Hindi", "Kannada"];

export function Languages() {
  return (
    <Section
      id="languages"
      eyebrow="Communication"
      title="Languages"
      tone="muted"
      description="Languages I speak and work in."
    >
      <ul className="flex flex-wrap gap-3">
        {LANGUAGES.map((language) => (
          <li
            key={language}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
          >
            <LanguagesIcon className="h-4 w-4 text-accent" aria-hidden="true" />
            {language}
          </li>
        ))}
      </ul>
    </Section>
  );
}
