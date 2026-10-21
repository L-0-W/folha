import type { Project, RosterSlot } from "../content/portfolio.ts";

export type RosterItem =
  | { kind: "project"; id: string; project: Project; fresh: boolean }
  | { kind: "held"; id: string; title: string }
  | { kind: "sealed"; id: string };

export function buildRoster(
  projects: readonly Project[],
  slots: readonly RosterSlot[],
): RosterItem[] {
  return slots.map((slot) => {
    if (slot.kind === "held") {
      return { kind: "held", id: slot.id, title: slot.title };
    }
    if (slot.kind === "sealed") {
      return { kind: "sealed", id: slot.id };
    }

    const project = projects.find((item) => item.slug === slot.slug);
    if (!project) {
      throw new Error(`Projeto ausente no elenco: ${slot.slug}`);
    }

    return {
      kind: "project",
      id: project.slug,
      project,
      fresh: project.mark === "novo",
    };
  });
}

export function initialSelection(items: readonly RosterItem[]): string {
  const fresh = items.find((item) => item.kind === "project" && item.fresh);
  if (fresh) return fresh.id;

  const first = items.find((item) => item.kind === "project");
  if (!first) throw new Error("O elenco não tem projeto aberto.");
  return first.id;
}

export function selectRoster(
  items: readonly RosterItem[],
  currentId: string,
  nextId: string,
): string {
  const next = items.find((item) => item.id === nextId);
  if (!next || next.kind !== "project") return currentId;
  return next.id;
}

export function selectedProject(
  items: readonly RosterItem[],
  id: string,
): Project {
  const item = items.find((entry) => entry.id === id && entry.kind === "project");
  if (!item || item.kind !== "project") {
    throw new Error("Projeto escolhido fora do elenco.");
  }
  return item.project;
}
