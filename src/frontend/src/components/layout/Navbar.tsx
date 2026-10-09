import { NAV_LINKS, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          data-ocid="nav.home_link"
          className="font-display text-base font-semibold tracking-tight text-foreground transition-smooth hover:text-accent"
        >
          {SITE_NAME}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  data-ocid={`nav.${link.id}_link`}
                  aria-current={activeId === link.id ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-smooth",
                    activeId === link.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          data-ocid="nav.menu_button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-smooth hover:bg-muted md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        data-ocid="nav.sheet"
        hidden={!menuOpen}
        className="border-t border-border bg-card md:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto w-full max-w-5xl px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  data-ocid={`nav.mobile.${link.id}_link`}
                  aria-current={activeId === link.id ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 text-base font-medium transition-smooth",
                    activeId === link.id
                      ? "bg-muted text-accent"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
