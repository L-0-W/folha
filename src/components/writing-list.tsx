"use client";

import { ColumnScrap } from "@/components/stage/column-scrap";
import { FolioSpread } from "@/components/stage/folio-spread";
import type { Writing } from "@/content/portfolio";
import { dateMark, writingAction } from "@/lib/folio";
import { anchorProps } from "@/lib/links";

export function WritingList({ writings }: { writings: Writing[] }) {
  if (writings.length === 0) {
    return <p className="empty">Nenhuma escritura por aqui ainda.</p>;
  }

  return (
    <FolioSpread
      items={writings}
      liveId="escritura-em-foco"
      renderCard={(writing, pressed) => (
        <WritingCard writing={writing} pressed={pressed} />
      )}
      renderPlate={(writing) => (
        <WritingPlate key={writing.id} writing={writing} />
      )}
    />
  );
}

function WritingCard({
  writing,
  pressed,
}: {
  writing: Writing;
  pressed: boolean;
}) {
  const mark = dateMark(writing.date);

  return (
    <button
      type="button"
      className="folio-card"
      aria-pressed={pressed}
      aria-controls="escritura-em-foco"
    >
      <span className="folio-face">
        <span className="folio-day">{mark.day}</span>
        <span className="folio-month">{mark.month}</span>
      </span>
      <span className="folio-name">{writing.title}</span>
    </button>
  );
}

function WritingPlate({ writing }: { writing: Writing }) {
  const action = writingAction(writing);

  return (
    <div className="plate-hero is-bleed folio-hero writing-hero">
      <div className="poster-slot">
        <ColumnScrap />
      </div>
      <div className="plate-copy">
        <ul className="stickers" aria-label="Data">
          <li>
            <time dateTime={writing.dateTime}>{writing.date}</time>
          </li>
        </ul>
        <div className="plate-foot">
          <p className="plate-lead">{writing.dek}</p>
          <h3 className="plate-name">{writing.title}</h3>
          {action ? (
            <div className="plate-actions">
              <a className="chamfer" href={action.href} {...anchorProps(action.href)}>
                {action.label}
                <span className="sr-only"> {writing.title}</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
