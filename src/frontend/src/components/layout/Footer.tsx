import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">
              {SITE_NAME}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_TAGLINE}
            </p>
          </div>

          <nav aria-label="Footer" className="sm:justify-self-end">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Sections
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    data-ocid={`footer.${link.id}_link`}
                    className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noreferrer"
            data-ocid="footer.attribution_link"
            className="transition-smooth hover:text-accent"
          >
            © {year}. Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
