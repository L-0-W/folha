import type { ProjectIcon, SocialIcon } from "@/content/portfolio";
import type { ComponentType, ReactNode, SVGProps } from "react";

type GlyphProps = SVGProps<SVGSVGElement>;

function LinkedInIcon(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z"
      />
    </svg>
  );
}

function GitHubIcon(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5.01 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2z"
      />
    </svg>
  );
}

function InstagramIcon(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.2 3h9.6A4.2 4.2 0 0 1 21 7.2v9.6a4.2 4.2 0 0 1-4.2 4.2H7.2A4.2 4.2 0 0 1 3 16.8V7.2A4.2 4.2 0 0 1 7.2 3zm4.8 5.1a3.9 3.9 0 1 0 .01 0zm0 1.5a2.4 2.4 0 1 1-.01 0z"
      />
      <circle cx="17.15" cy="6.8" r="0.95" fill="currentColor" />
    </svg>
  );
}

function MailIcon(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.2 5h15.6A2.2 2.2 0 0 1 22 7.2v9.6a2.2 2.2 0 0 1-2.2 2.2H4.2A2.2 2.2 0 0 1 2 16.8V7.2A2.2 2.2 0 0 1 4.2 5z"
      />
      <path
        fill="none"
        stroke="var(--oxblood)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M3.2 7.1 12 13.1l8.8-6"
      />
    </svg>
  );
}

export const socialIcons: Record<SocialIcon, ComponentType<GlyphProps>> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
};

function Mark({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className="glyph"
      aria-hidden="true"
      style={{ filter: "url(#folio-rough)" }}
    >
      {children}
    </svg>
  );
}

function BookMark() {
  return (
    <Mark>
      <path className="glyph-fill" d="M6 8c5-2 10-1 14 2v22c-4-3-9-4-14-2z" />
      <path d="M6 8c5-2 10-1 14 2v22c-4-3-9-4-14-2zM34 8c-5-2-10-1-14 2v22c4-3 9-4 14-2z" />
    </Mark>
  );
}

function ClipboardMark() {
  return (
    <Mark>
      <rect className="glyph-fill" x="8" y="7" width="24" height="29" rx="3" />
      <rect x="8" y="7" width="24" height="29" rx="3" />
      <path d="M15 5h10v5H15zM14 18h12M14 24h12M14 30h7" />
    </Mark>
  );
}

function GridMark() {
  return (
    <Mark>
      <rect className="glyph-fill" x="6" y="6" width="12" height="12" rx="2" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="22" y="6" width="12" height="12" rx="2" />
      <rect x="6" y="22" width="12" height="12" rx="2" />
      <rect x="22" y="22" width="12" height="12" rx="2" />
    </Mark>
  );
}

function BellMark() {
  return (
    <Mark>
      <path className="glyph-fill" d="M10 28V18a10 10 0 0 1 20 0v10z" />
      <path d="M10 28V18a10 10 0 0 1 20 0v10l3 4H7zM16 35a4 4 0 0 0 8 0" />
    </Mark>
  );
}

function NotebookMark() {
  return (
    <Mark>
      <path className="glyph-fill" d="M9 8h20v26H9z" />
      <path d="M9 8h20v26H9zM14 14h10M14 20h10M14 26h6M31 12l5 5-9 11-5 1 1-5z" />
    </Mark>
  );
}

function TypeMark() {
  return (
    <Mark>
      <path className="glyph-fill" d="M8 8h24v7H8z" />
      <path d="M8 15V8h24v7M20 8v26M15 34h10" />
    </Mark>
  );
}

export const projectIcons: Record<ProjectIcon, ComponentType> = {
  book: BookMark,
  clipboard: ClipboardMark,
  grid: GridMark,
  bell: BellMark,
  notebook: NotebookMark,
  type: TypeMark,
};
