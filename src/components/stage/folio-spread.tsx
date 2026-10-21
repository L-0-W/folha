"use client";

import { initialPick, picked, selectPick, type PickItem } from "@/lib/folio";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";

export function FolioSpread<T extends PickItem>({
  items,
  liveId,
  initialId,
  renderCard,
  renderPlate,
}: {
  items: readonly T[];
  liveId: string;
  initialId?: string;
  renderCard: (item: T, pressed: boolean) => ReactNode;
  renderPlate: (item: T) => ReactNode;
}) {
  const plateRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(() => {
    if (initialId && items.some((item) => item.id === initialId)) return initialId;
    return initialPick(items);
  });
  const current = picked(items, selectedId);

  function onPick(event: MouseEvent<HTMLUListElement>) {
    const source = (event.target as HTMLElement).closest<HTMLElement>("[data-pick]");
    const id = source?.dataset.pick;
    if (!id) return;

    const next = selectPick(items, selectedId, id);
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
    <div className="folio-spread">
      <ul className="folio-grid" onClick={onPick}>
        {items.map((item) => (
          <li key={item.id} data-pick={item.id}>
            {renderCard(item, item.id === selectedId)}
          </li>
        ))}
      </ul>
      <div
        ref={plateRef}
        id={liveId}
        className="folio-plate"
        aria-live="polite"
      >
        {renderPlate(current)}
      </div>
    </div>
  );
}
