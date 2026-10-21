"use client";

import { ReadingList } from "@/components/reading-list";
import { Roster } from "@/components/roster/roster";
import { WritingList } from "@/components/writing-list";
import {
  projects,
  readings,
  rosterSlots,
  sections,
  writings,
  type SectionId,
} from "@/content/portfolio";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

function isSectionId(value: string): value is SectionId {
  return sections.some((section) => section.id === value);
}

function sectionFromHash(): SectionId | null {
  const hash = window.location.hash.replace("#", "");
  return isSectionId(hash) ? hash : null;
}

export function PortfolioTabs() {
  const [current, setCurrent] = useState<SectionId>("projetos");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const section = sections.find((item) => item.id === current) ?? sections[0];

  useEffect(() => {
    function syncFromHash() {
      const next = sectionFromHash();
      if (next) setCurrent(next);
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function select(id: SectionId, shouldFocus = false) {
    setCurrent(id);
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      history.replaceState(null, "", nextHash);
    }

    const index = sections.findIndex((item) => item.id === id);
    if (shouldFocus) tabRefs.current[index]?.focus();

    const list = document.getElementById("secoes");
    if (!list) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (list.getBoundingClientRect().top < 0) {
      list.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "nearest",
      });
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = sections.length - 1;
    let next = index;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    select(sections[next].id, true);
  }

  return (
    <section id="secoes" aria-labelledby="tab-heading" className="caderno">
      <h2 id="tab-heading" className="sr-only">
        Caderno
      </h2>
      <div role="tablist" aria-label="Seções" className="tablist">
        {sections.map((item, index) => {
          const selected = item.id === current;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              className="tab"
              onClick={() => select(item.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        key={section.id}
        id={`panel-${section.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${section.id}`}
        className="panel"
      >
        <p className="dek">{section.dek}</p>
        {section.id === "projetos" ? (
          <Roster projects={projects} slots={rosterSlots} />
        ) : null}
        {section.id === "escrituras" ? (
          <WritingList writings={writings} />
        ) : null}
        {section.id === "lendo" ? <ReadingList readings={readings} /> : null}
      </div>
    </section>
  );
}
