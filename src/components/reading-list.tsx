"use client";

import { BookCut } from "@/components/stage/book-cut";
import { FolioSpread } from "@/components/stage/folio-spread";
import { statusLabel, type Reading } from "@/content/portfolio";
import { initialReading } from "@/lib/folio";

export function ReadingList({ readings }: { readings: Reading[] }) {
  if (readings.length === 0) {
    return <p className="empty">Nada na mesa de leitura ainda.</p>;
  }

  return (
    <FolioSpread
      items={readings}
      liveId="leitura-em-foco"
      initialId={initialReading(readings)}
      renderCard={(book, pressed) => (
        <ReadingCard book={book} pressed={pressed} />
      )}
      renderPlate={(book) => <ReadingPlate key={book.id} book={book} />}
    />
  );
}

function ReadingCard({
  book,
  pressed,
}: {
  book: Reading;
  pressed: boolean;
}) {
  return (
    <button
      type="button"
      className={`folio-card wash-${book.wash}`}
      aria-pressed={pressed}
      aria-controls="leitura-em-foco"
    >
      <span className="folio-face">
        <span className="folio-volume" />
      </span>
      <span className="folio-name">{book.title}</span>
    </button>
  );
}

function ReadingPlate({ book }: { book: Reading }) {
  return (
    <div className={`plate-hero is-bleed folio-hero wash-${book.wash}`}>
      <div className="poster-slot">
        <BookCut />
      </div>
      <div className="plate-copy">
        <ul className="stickers" aria-label="Estado">
          <li>{statusLabel[book.status]}</li>
        </ul>
        <div className="plate-foot">
          <p className="plate-lead">{book.author}</p>
          {book.note ? <p className="folio-note">{book.note}</p> : null}
          <h3 className="plate-name">{book.title}</h3>
        </div>
      </div>
    </div>
  );
}
