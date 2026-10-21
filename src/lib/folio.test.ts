import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { profile, readings, writings } from "../content/portfolio.ts";
import {
  dateMark,
  initialPick,
  initialReading,
  picked,
  selectPick,
  writingAction,
} from "./folio.ts";

describe("fólio", () => {
  const items = [{ id: "coluna" }, { id: "icones" }, { id: "papel" }];

  it("abre na primeira peça e recusa lista vazia", () => {
    assert.equal(initialPick(items), "coluna");
    assert.throws(() => initialPick([]));
  });

  it("troca só para um id que existe", () => {
    assert.equal(selectPick(items, "coluna", "papel"), "papel");
    assert.equal(selectPick(items, "papel", "ausente"), "papel");
    assert.equal(picked(items, "icones").id, "icones");
    assert.throws(() => picked(items, "ausente"));
  });

  it("separa o dia da data impressa", () => {
    assert.deepEqual(dateMark("12 mar 2026"), { day: "12", month: "mar" });
    assert.deepEqual(dateMark("02 fev 2026"), { day: "02", month: "fev" });
  });

  it("só dá botão à escritura quando o href sai do site", () => {
    assert.equal(writingAction({ href: "#" }), null);
    assert.deepEqual(writingAction({ href: "https://notas.example" }), {
      href: "https://notas.example",
      label: "Ler",
    });
    for (const writing of writings) {
      assert.equal(writingAction(writing), null, writing.id);
    }
  });

  it("abre a leitura que está na mão", () => {
    assert.equal(initialReading(readings), "bringhurst");
    assert.equal(
      initialReading([
        { id: "lido", status: "lido" },
        { id: "aberta", status: "lendo" },
      ]),
      "aberta",
    );
  });

  it("dá id único às escrituras e às leituras, e três adesivos à pessoa", () => {
    const writingIds = writings.map((item) => item.id);
    const readingIds = readings.map((item) => item.id);
    assert.equal(new Set(writingIds).size, writingIds.length);
    assert.equal(new Set(readingIds).size, readingIds.length);
    for (const id of [...writingIds, ...readingIds]) {
      assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
    assert.equal(profile.tags.length, 3);
    for (const tag of profile.tags) assert.ok(tag.trim());
    assert.ok(profile.trade.trim());
    assert.equal("headline" in profile, false);
    assert.equal("issue" in profile, false);
  });
});
