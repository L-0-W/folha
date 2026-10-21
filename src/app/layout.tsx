import { PaperGrain } from "@/components/paper-grain";
import "@/components/roster/roster.css";
import "@/components/stage/stage.css";
import { profile } from "@/content/portfolio";
import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: `${profile.name} — Folha pessoal`,
  description: profile.description,
};

export const viewport: Viewport = {
  themeColor: "#12100e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${newsreader.variable} ${fraunces.variable}`}
    >
      <body>
        <div className="vignette" aria-hidden="true" />
        <PaperGrain />
        {children}
      </body>
    </html>
  );
}
