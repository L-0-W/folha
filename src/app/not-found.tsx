import { SealedSheet } from "@/components/stage/sealed-sheet";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/portfolio";
import { projectsSectionHref } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Folha não encontrada — ${profile.name}`,
};

export default function NotFound() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <main id="conteudo" className="sheet">
        <article className="missing">
          <Link className="return" href={projectsSectionHref}>
            <span aria-hidden="true">←</span>
            Voltar
            <span className="sr-only"> para a aba de projetos</span>
          </Link>
          <div className="plate-hero is-bleed">
            <div className="poster-slot">
              <SealedSheet />
            </div>
            <div className="plate-copy">
              <ul className="stickers" aria-label="Estado">
                <li>Sem folha</li>
              </ul>
              <div className="plate-foot">
                <p className="plate-lead">
                  Esta folha não está no caderno. O endereço não corresponde a um
                  projeto publicado.
                </p>
                <h1 className="plate-name">Ausente</h1>
              </div>
            </div>
          </div>
        </article>
        <SiteFooter name={profile.name} year={profile.year} />
      </main>
    </>
  );
}
