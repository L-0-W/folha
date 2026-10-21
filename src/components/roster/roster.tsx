"use client";

import { projectIcons } from "@/components/icons";
import { Plate } from "@/components/roster/plate";
import type { Project, RosterSlot } from "@/content/portfolio";
import { projectPath } from "@/lib/projects";
import {
  buildRoster,
  initialSelection,
  selectRoster,
  selectedProject,
  type RosterItem,
} from "@/lib/roster";
import { useRef, useState } from "react";

export function Roster({
  projects,
  slots,
}: {
  projects: readonly Project[];
  slots: readonly RosterSlot[];
}) {
  if (projects.length === 0) {
    return <p className="empty">Nenhum projeto por aqui ainda.</p>;
  }

  return <RosterView items={buildRoster(projects, slots)} />;
}

function RosterView({ items }: { items: RosterItem[] }) {
  const plateRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(() => initialSelection(items));
  const project = selectedProject(items, selectedId);

  function choose(id: string) {
    const next = selectRoster(items, selectedId, id);
    if (next === selectedId) return;
    setSelectedId(next);

    const plate = plateRef.current;
    if (!plate || plate.getBoundingClientRect().top >= 8) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    plate.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
    });
  }

  return (
    <div className="roster-spread">
      <svg className="mark-filter" width="0" height="0" aria-hidden="true">
        <filter id="folio-rough" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05"
            numOctaves="2"
            seed="4"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" />
        </filter>
      </svg>
      <ul className="roster-grid">
        {items.map((item) => (
          <li key={item.id}>
            {item.kind === "project" ? (
              <ProjectPortrait
                item={item}
                pressed={item.id === selectedId}
                onChoose={choose}
              />
            ) : (
              <ClosedPortrait item={item} onChoose={choose} />
            )}
          </li>
        ))}
      </ul>
      <div
        ref={plateRef}
        id="projeto-em-foco"
        className="roster-plate"
        aria-live="polite"
      >
        <Plate
          key={project.slug}
          project={project}
          titleAs="h3"
          bleed
          action={{
            href: projectPath(project.slug),
            label: "Abrir",
            external: false,
          }}
        />
      </div>
    </div>
  );
}

function ProjectPortrait({
  item,
  pressed,
  onChoose,
}: {
  item: Extract<RosterItem, { kind: "project" }>;
  pressed: boolean;
  onChoose: (id: string) => void;
}) {
  const Icon = projectIcons[item.project.icon];

  return (
    <button
      type="button"
      className={`roster-card accent-${item.project.accent} motif-${item.project.motif}`}
      aria-pressed={pressed}
      aria-controls="projeto-em-foco"
      onClick={() => onChoose(item.id)}
    >
      {item.fresh ? <span className="roster-ribbon">Novo</span> : null}
      <span className={`roster-face motif-${item.project.motif}`}>
        <Icon />
      </span>
      <span className="roster-name">{item.project.title}</span>
    </button>
  );
}

function ClosedPortrait({
  item,
  onChoose,
}: {
  item: Extract<RosterItem, { kind: "held" | "sealed" }>;
  onChoose: (id: string) => void;
}) {
  const sealed = item.kind === "sealed";
  const label = sealed ? "Reserva sem nome" : `${item.title}, ainda sem folha`;

  return (
    <button
      type="button"
      className="roster-card is-closed"
      aria-disabled="true"
      aria-label={label}
      onClick={() => onChoose(item.id)}
    >
      <span className="roster-face">
        {sealed ? <span className="roster-mystery">?</span> : <LockMark />}
      </span>
      <span className="roster-name">{sealed ? "Reserva" : item.title}</span>
    </button>
  );
}

function LockMark() {
  return (
    <svg className="roster-lock" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="5"
        y="10.5"
        width="14"
        height="9.5"
        rx="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 10.5V8a4 4 0 0 1 8 0v2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
