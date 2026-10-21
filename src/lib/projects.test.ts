import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { projects } from "../content/portfolio.ts";
import {
  externalLink,
  findProject,
  projectPath,
  projectsSectionHref,
} from "./projects.ts";

const publicRoot = path.join(import.meta.dirname, "../../public");

describe("projetos", () => {
  it("mantém slugs únicos e legíveis no endereço", () => {
    const slugs = projects.map((project) => project.slug);
    assert.equal(new Set(slugs).size, slugs.length);
    for (const slug of slugs) {
      assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("encontra o projeto pelo slug e ignora um slug desconhecido", () => {
    assert.equal(findProject("lume")?.title, "Lume");
    assert.equal(findProject("nao-existe"), undefined);
  });

  it("aponta o card para a folha e a volta para a aba de projetos", () => {
    assert.equal(projectPath("lume"), "/projetos/lume");
    assert.equal(projectsSectionHref, "/#projetos");
  });

  it("só expõe link externo quando o href sai do site", () => {
    assert.equal(
      externalLink({ href: "#", title: "Oficina" }),
      null,
    );
    assert.deepEqual(
      externalLink({
        href: "https://lume.app",
        linkLabel: "Experimentar",
        title: "Lume",
      }),
      { href: "https://lume.app", label: "Experimentar" },
    );
    assert.deepEqual(externalLink({ href: "https://tipo.press", title: "Tipo" }), {
      href: "https://tipo.press",
      label: "Abrir Tipo",
    });
  });

  it("entrega a chapa com atributos, ofício e poster", () => {
    for (const project of projects) {
      assert.equal(project.tags.length, 3, project.slug);
      assert.equal(project.marks.length, 4, project.slug);
      assert.ok(project.poster, project.slug);
    }
  });

  it("publica gravura com título, descrição e arquivo", () => {
    for (const project of projects) {
      assert.ok(project.figures.length > 0, project.slug);
      for (const figure of project.figures) {
        assert.ok(figure.title.trim(), `${project.slug} título`);
        assert.ok(figure.description.trim(), `${project.slug} descrição`);
        assert.ok(figure.alt.trim(), `${project.slug} texto alternativo`);
        assert.equal(figure.src.startsWith("/projetos/"), true);
        assert.equal(
          existsSync(path.join(publicRoot, figure.src)),
          true,
          figure.src,
        );
      }
    }
  });
});
