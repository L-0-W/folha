import { projects, type Project } from "../content/portfolio.ts";

export const projectsSectionHref = "/#projetos";

export function projectPath(slug: string): string {
  return `/projetos/${slug}`;
}

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function externalLink(
  project: Pick<Project, "href" | "linkLabel" | "title">,
): { href: string; label: string } | null {
  if (!project.href.startsWith("http")) return null;
  return {
    href: project.href,
    label: project.linkLabel ?? `Abrir ${project.title}`,
  };
}
