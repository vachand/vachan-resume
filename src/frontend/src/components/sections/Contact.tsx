import { Section } from "@/components/layout/Section";
import { SITE_LOCATION } from "@/lib/site";
import { MapPin } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Say hello"
      title="Contact"
      description="Open to internship conversations in Business Analytics, Operations and Supply Chain."
    >
      <div className="max-w-2xl rounded-lg border border-border bg-card p-8">
        <p className="text-base leading-relaxed text-muted-foreground">
          I am currently based in {SITE_LOCATION} and open to internship
          opportunities in Business Analytics, Operations and Supply Chain. If
          you would like to connect, please reach out through the platform where
          you found this profile and I will be glad to continue the
          conversation.
        </p>

        <dl className="mt-8 space-y-5">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
            >
              <MapPin className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1 text-base font-medium text-foreground">
                {SITE_LOCATION}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </Section>
  );
}
