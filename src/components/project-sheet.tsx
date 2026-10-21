import { Plate as ProjectPlate } from "@/components/roster/plate";
import type { Project, ProjectFigure } from "@/content/portfolio";
import { externalLink, projectsSectionHref } from "@/lib/projects";
import Link from "next/link";

export function ProjectSheet({ project }: { project: Project }) {
  const link = externalLink(project);

  return (
    <article className={`project-sheet accent-${project.accent}`}>
      <Link className="return" href={projectsSectionHref}>
        <span aria-hidden="true">←</span>
        Voltar
        <span className="sr-only"> para a aba de projetos</span>
      </Link>
      <ProjectPlate
        project={project}
        titleAs="h1"
        action={
          link
            ? { href: link.href, label: link.label, external: true }
            : null
        }
      />
      {project.figures.length === 0 ? (
        <p className="empty">As gravuras deste projeto ainda não foram impressas.</p>
      ) : (
        <ul className="plates">
          {project.figures.map((figure) => (
            <li key={figure.src}>
              <Plate figure={figure} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function Plate({ figure }: { figure: ProjectFigure }) {
  return (
    <figure className="plate">
      <div className="plate-frame">
        {/* SVG local, desenhado para a folha. O otimizador não processa esse formato. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={figure.src} alt={figure.alt} width={640} height={400} />
      </div>
      <figcaption>
        <span className="plate-title">{figure.title}</span>
        <span className="plate-dek">{figure.description}</span>
      </figcaption>
    </figure>
  );
}
