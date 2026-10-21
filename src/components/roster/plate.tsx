import { CraftMarks } from "@/components/roster/marks";
import { Poster } from "@/components/roster/poster";
import type { Project } from "@/content/portfolio";
import { anchorProps } from "@/lib/links";
import Link from "next/link";

import "./roster.css";

export type PlateAction = {
  href: string;
  label: string;
  external: boolean;
};

export function Plate({
  project,
  titleAs,
  action,
  bleed = false,
}: {
  project: Project;
  titleAs: "h1" | "h3";
  action: PlateAction | null;
  bleed?: boolean;
}) {
  const Title = titleAs;

  return (
    <div className={`plate-hero accent-${project.accent}${bleed ? " is-bleed" : ""}`}>
      <Poster id={project.poster} />
      <div className="plate-copy">
        <ul className="stickers" aria-label="Atributos">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="plate-foot">
          <p className="plate-lead">{project.description}</p>
          <Title className="plate-name">{project.title}</Title>
          <div className="plate-actions">
            <CraftMarks marks={project.marks} />
            {action ? <Chamfer action={action} title={project.title} /> : null}
          </div>
          <p className="plate-url">{project.url}</p>
        </div>
      </div>
    </div>
  );
}

function Chamfer({ action, title }: { action: PlateAction; title: string }) {
  const hint = action.external
    ? ` ${title} (abre em nova aba)`
    : ` a folha de ${title}`;

  if (action.external) {
    return (
      <a className="chamfer" href={action.href} {...anchorProps(action.href)}>
        {action.label}
        <span className="sr-only">{hint}</span>
      </a>
    );
  }

  return (
    <Link className="chamfer" href={action.href}>
      {action.label}
      <span className="sr-only">{hint}</span>
    </Link>
  );
}
