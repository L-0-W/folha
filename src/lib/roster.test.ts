import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  craftMarks,
  posterIds,
  projects,
  rosterSlots,
} from "../content/portfolio.ts";
import {
  buildRoster,
  initialSelection,
  selectRoster,
  selectedProject,
} from "./roster.ts";

describe("elenco", () => {
  const items = buildRoster(projects, rosterSlots);

  it("publica cada projeto uma vez, com a gaveta e a reserva no fim", () => {
    assert.deepEqual(
      items.map((item) => item.id),
      ["lume", "oficina", "margem", "prego", "caderno", "tipo", "gaveta", "reserva"],
    );
    for (const project of projects) {
      const found = items.find((item) => item.id === project.slug);
      assert.equal(found?.kind, "project");
    }
  });

  it("abre no projeto marcado como novo", () => {
    assert.equal(initialSelection(items), "lume");
    const fresh = items.filter((item) => item.kind === "project" && item.fresh);
    assert.deepEqual(
      fresh.map((item) => item.id),
      ["lume"],
    );
  });

  it("troca só entre projetos abertos", () => {
    assert.equal(selectRoster(items, "lume", "tipo"), "tipo");
    assert.equal(selectRoster(items, "tipo", "lume"), "lume");
    assert.equal(selectRoster(items, "lume", "gaveta"), "lume");
    assert.equal(selectRoster(items, "lume", "reserva"), "lume");
    assert.equal(selectRoster(items, "lume", "ausente"), "lume");
    assert.equal(selectedProject(items, "oficina").title, "Oficina");
  });

  it("recusa um slug que não está no caderno", () => {
    assert.throws(() =>
      buildRoster(projects, [{ kind: "project", slug: "ausente" }]),
    );
  });

  it("dá três atributos, quatro ofícios e um poster a cada projeto", () => {
    for (const project of projects) {
      assert.deepEqual(new Set(project.tags).size, 3, project.slug);
      for (const tag of project.tags) assert.ok(tag.trim(), project.slug);
      assert.equal(project.marks.length, 4, project.slug);
      for (const mark of project.marks) {
        assert.ok(craftMarks.includes(mark), mark);
      }
      assert.ok(posterIds.includes(project.poster), project.poster);
    }
  });
});
