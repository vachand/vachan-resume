import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import App from "@/App";
import { NAV_LINKS, SITE_LOCATION, SITE_NAME, SITE_TITLE } from "@/lib/site";

/**
 * jsdom has no IntersectionObserver. The Navbar uses one purely for
 * active-section highlighting, which is not what these tests assert, so a
 * minimal no-op stub keeps the component mountable without pretending to
 * observe scroll position. It is installed before every test because the
 * component reads it during mount.
 */
class NoopIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", NoopIntersectionObserver);
});

afterEach(() => {
  // Vitest globals are not enabled, so RTL's automatic cleanup is not
  // registered; unmount explicitly or each render stacks in the same document.
  cleanup();
});

function renderApp() {
  return render(<App />);
}

describe("resume single-page render", () => {
  it("renders the full page without a blank screen", () => {
    renderApp();
    // The page-level header is the sticky nav; Section also renders <header>
    // elements, so scope the banner query to the top-level one.
    const banners = screen.getAllByRole("banner");
    expect(banners.length).toBeGreaterThan(0);
    expect(banners[0]).toContainElement(
      screen.getByRole("link", { name: SITE_NAME }),
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("shows the hero name, title and a professional introduction", () => {
    renderApp();
    expect(
      screen.getByRole("heading", { level: 1, name: SITE_NAME }),
    ).toBeInTheDocument();
    expect(screen.getByText(SITE_TITLE)).toBeInTheDocument();
    expect(
      screen.getByText(/Motivated business management student/i),
    ).toBeInTheDocument();
    expect(screen.getAllByText(SITE_LOCATION).length).toBeGreaterThan(0);
  });

  it("renders all eight sections with their headings", () => {
    renderApp();
    const expectedHeadings = [
      "About Me",
      "Education",
      "Skills",
      "Projects",
      "Leadership and Achievements",
      "Languages",
      "Contact",
    ];
    for (const heading of expectedHeadings) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }
    // Home is the hero section, identified by its id rather than an h2.
    expect(document.getElementById("home")).not.toBeNull();
  });

  it("renders every section id referenced by the navigation", () => {
    renderApp();
    for (const link of NAV_LINKS) {
      expect(document.getElementById(link.id)).not.toBeNull();
    }
  });
});

describe("education", () => {
  it("lists the PGDM and BE qualifications with institutions and years", () => {
    renderApp();
    const education = document.getElementById("education") as HTMLElement;
    const scope = within(education);
    expect(scope.getByText("PGDM")).toBeInTheDocument();
    expect(scope.getByText("IMDR, Pune")).toBeInTheDocument();
    expect(scope.getByText("2026 – 2028")).toBeInTheDocument();
    expect(scope.getByText("Bachelor of Engineering")).toBeInTheDocument();
    expect(
      scope.getByText("KLE Technological University, Belagavi"),
    ).toBeInTheDocument();
    expect(scope.getByText("2022 – 2026")).toBeInTheDocument();
  });
});

describe("skills", () => {
  it("lists the technical and professional skills", () => {
    renderApp();
    const skills = document.getElementById("skills") as HTMLElement;
    const scope = within(skills);
    for (const skill of [
      "Python",
      "SQL",
      "MS Word",
      "Analytical thinking",
      "Problem-solving",
      "Communication",
      "Teamwork",
      "Adaptability",
    ]) {
      expect(scope.getByText(skill)).toBeInTheDocument();
    }
    expect(scope.getByText("Technical")).toBeInTheDocument();
    expect(scope.getByText("Professional")).toBeInTheDocument();
  });
});

describe("projects", () => {
  it("shows the Personalized Quiz Generator with its AI description", () => {
    renderApp();
    const projects = document.getElementById("projects") as HTMLElement;
    const scope = within(projects);
    expect(scope.getByText("Personalized Quiz Generator")).toBeInTheDocument();
    expect(
      scope.getByText(/uses AI to\s+generate a set of questions/i),
    ).toBeInTheDocument();
  });
});

describe("leadership and achievements", () => {
  it("lists the secretary role, BITS Pilani result, event coordination and social work", () => {
    renderApp();
    const leadership = document.getElementById("leadership") as HTMLElement;
    const scope = within(leadership);
    expect(
      scope.getByText("Secretary, College Cultural Club"),
    ).toBeInTheDocument();
    expect(
      scope.getByText(/Second Place, Team Dance Competition — BITS Pilani/i),
    ).toBeInTheDocument();
    expect(scope.getByText("College Event Coordination")).toBeInTheDocument();
    expect(scope.getByText("Social-Work Initiatives")).toBeInTheDocument();
  });
});

describe("languages", () => {
  it("lists English, Hindi and Kannada", () => {
    renderApp();
    const languages = document.getElementById("languages") as HTMLElement;
    const scope = within(languages);
    for (const language of ["English", "Hindi", "Kannada"]) {
      expect(scope.getByText(language)).toBeInTheDocument();
    }
  });
});

describe("contact", () => {
  it("states the location and renders no fabricated email or LinkedIn value", () => {
    renderApp();
    const contact = document.getElementById("contact") as HTMLElement;
    const scope = within(contact);
    expect(scope.getByText(SITE_LOCATION)).toBeInTheDocument();
    expect(scope.queryByText(/@/)).not.toBeInTheDocument();
    expect(scope.queryByText(/linkedin/i)).not.toBeInTheDocument();
  });

  it("renders no mailto or linkedin link anywhere on the page", () => {
    renderApp();
    const links = Array.from(document.querySelectorAll("a"));
    for (const link of links) {
      const href = link.getAttribute("href") ?? "";
      expect(href.startsWith("mailto:")).toBe(false);
      expect(href.toLowerCase()).not.toContain("linkedin");
    }
  });
});

describe("navigation", () => {
  it("renders a nav link for every section", () => {
    renderApp();
    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    const scope = within(primaryNav);
    for (const link of NAV_LINKS) {
      expect(scope.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        `#${link.id}`,
      );
    }
  });

  it("links the hero call-to-action to the Contact section", () => {
    renderApp();
    const cta = screen.getByRole("link", { name: /get in touch/i });
    expect(cta).toHaveAttribute("href", "#contact");
  });

  it("opens and closes the mobile menu and navigates from it", async () => {
    const user = userEvent.setup();
    renderApp();

    const toggle = screen.getByRole("button", {
      name: /open navigation menu/i,
    });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(
      screen.getByRole("button", { name: /close navigation menu/i }),
    ).toHaveAttribute("aria-expanded", "true");

    const mobileNav = screen.getByRole("navigation", { name: "Mobile" });
    const mobileScope = within(mobileNav);
    const contactLink = mobileScope.getByRole("link", { name: "Contact" });
    expect(contactLink).toHaveAttribute("href", "#contact");

    await user.click(contactLink);
    // Selecting a mobile link closes the panel again.
    expect(
      screen.getByRole("button", { name: /open navigation menu/i }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu on Escape", async () => {
    const user = userEvent.setup();
    renderApp();
    await user.click(
      screen.getByRole("button", { name: /open navigation menu/i }),
    );
    await user.keyboard("{Escape}");
    expect(
      screen.getByRole("button", { name: /open navigation menu/i }),
    ).toHaveAttribute("aria-expanded", "false");
  });
});

describe("footer", () => {
  it("shows the name, tagline, section links and a copyright line", () => {
    renderApp();
    const footer = screen.getByRole("contentinfo");
    const scope = within(footer);
    expect(scope.getByText(SITE_NAME)).toBeInTheDocument();
    expect(
      scope.getByText(/Business analytics, operations and supply chain/i),
    ).toBeInTheDocument();
    const footerNav = scope.getByRole("navigation", { name: "Footer" });
    const footerScope = within(footerNav);
    for (const link of NAV_LINKS) {
      expect(
        footerScope.getByRole("link", { name: link.label }),
      ).toHaveAttribute("href", `#${link.id}`);
    }
    expect(scope.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});

describe("document metadata", () => {
  it("has a descriptive title and meta description in the served document", async () => {
    // index.html is not part of the React tree and jsdom does not load it, so
    // read the source document Vite serves for the default route. The test
    // process runs with the frontend package as its working directory.
    const { readFile } = await import("node:fs/promises");
    const { join } = await import("node:path");
    const html = await readFile(join(process.cwd(), "index.html"), "utf8");
    expect(html).toMatch(/<title>[^<]*Vachan Vinayak Deshnoor[^<]*<\/title>/);
    expect(html).toMatch(/<meta\s+name="description"\s+content="[^"]+"/);
    expect(html).toMatch(/<html lang="en">/);
  });
});
