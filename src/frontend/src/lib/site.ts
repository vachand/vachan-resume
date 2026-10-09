export interface NavLink {
  id: string;
  label: string;
}

export const SITE_NAME = "Vachan Vinayak Deshnoor";
export const SITE_TITLE = "PGDM Student at IMDR, Pune";
export const SITE_LOCATION = "Pune, Maharashtra";
export const SITE_TAGLINE =
  "Business analytics, operations and supply chain — turning data into decisions.";

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "languages", label: "Languages" },
  { id: "contact", label: "Contact" },
];

export const SECTION_IDS = NAV_LINKS.map((link) => link.id);
