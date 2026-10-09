import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted";
}

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      data-ocid={`section.${id}`}
      className={cn(
        "scroll-mt-24 border-b border-border/60 py-20 sm:py-24",
        tone === "muted" ? "bg-muted/40" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="mb-12 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-5 block h-px w-16 bg-accent/60"
          />
          {description ? (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
