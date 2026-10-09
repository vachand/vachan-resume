import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="About Me"
      description="A short introduction to how I work and what I am looking for."
    >
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          I am a PGDM student at IMDR, Pune, with a background in computer
          science engineering. That combination lets me move comfortably between
          business problems and the data behind them.
        </p>
        <p>
          My interest sits at the intersection of business analytics, operations
          and supply chain. I enjoy breaking a problem into its parts, working
          through the numbers and turning what I find into a clear
          recommendation a team can act on.
        </p>
        <p>
          I am currently looking for internship opportunities in Business
          Analytics, Operations and Supply Chain, where I can contribute
          analytical rigour, clear communication and a dependable work ethic.
        </p>
      </div>
    </Section>
  );
}
