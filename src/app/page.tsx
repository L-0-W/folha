import { Intro } from "@/components/intro";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <main id="conteudo" className="sheet">
        <Intro />
        <PortfolioTabs />
        <SiteFooter name={profile.name} year={profile.year} />
      </main>
    </>
  );
}
