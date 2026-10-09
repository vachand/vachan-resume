import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Languages } from "@/components/sections/Languages";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Button } from "@/components/ui/button";
import { SITE_LOCATION, SITE_NAME, SITE_TITLE } from "@/lib/site";
import { ArrowRight, MapPin } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      data-ocid="section.home"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/60 bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-subtle"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-24 hidden h-40 w-40 rounded-full border border-accent/20 lg:block"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          {SITE_LOCATION}
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          {SITE_NAME}
        </h1>

        <p className="mt-5 font-display text-xl font-medium text-accent sm:text-2xl">
          {SITE_TITLE}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Motivated business management student with a strong foundation in
          computer science engineering, seeking internships in Business
          Analytics, Operations and Supply Chain. I apply analytical thinking
          and structured problem solving to help teams make clearer, faster
          decisions.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" data-ocid="hero.primary_button">
            <a href="#contact">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Leadership />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
