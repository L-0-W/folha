import { ProjectSheet } from "@/components/project-sheet";
import { SiteFooter } from "@/components/site-footer";
import { profile, projects } from "@/content/portfolio";
import { findProject } from "@/lib/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projetos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) notFound();

  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectPage(props: PageProps<"/projetos/[slug]">) {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) notFound();

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <main id="conteudo" className="sheet">
        <ProjectSheet project={project} />
        <SiteFooter name={profile.name} year={profile.year} />
      </main>
    </>
  );
}
