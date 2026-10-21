import type { Reading, ReadingStatus, Writing } from "../content/portfolio.ts";

export type PickItem = { id: string };

export function initialPick(items: readonly PickItem[]): string {
  const first = items[0];
  if (!first) throw new Error("A lista não tem peça.");
  return first.id;
}

export function selectPick(
  items: readonly PickItem[],
  currentId: string,
  nextId: string,
): string {
  if (!items.some((item) => item.id === nextId)) return currentId;
  return nextId;
}

export function picked<T extends PickItem>(items: readonly T[], id: string): T {
  const item = items.find((entry) => entry.id === id);
  if (!item) throw new Error("Peça escolhida fora da lista.");
  return item;
}

export function dateMark(date: string): { day: string; month: string } {
  const [day, month] = date.trim().split(/\s+/);
  return {
    day: day || date,
    month: month ?? "",
  };
}

export function writingAction(
  writing: Pick<Writing, "href">,
): { href: string; label: string } | null {
  if (!writing.href.startsWith("http")) return null;
  return { href: writing.href, label: "Ler" };
}

export function initialReading(
  readings: readonly Pick<Reading, "id" | "status">[],
): string {
  const open = readings.find((item) => item.status === ("lendo" satisfies ReadingStatus));
  if (open) return open.id;
  return initialPick(readings);
}
