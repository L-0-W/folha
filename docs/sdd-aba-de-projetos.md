# SDD — Aba de um projeto

A aba de projetos passou a ser um elenco. O retrato seleciona; o botão da chapa abre esta folha. Ver `sdd-redesign-projetos.md`.

## Pedido

O card de um projeto abre uma folha só dele. A folha segue o papel, a tinta e a coluna do site, com pouco texto. Traz gravuras, cada uma com título e descrição, pode trazer um link externo para experimentar ou baixar, e tem um controle para voltar à aba anterior.

## Decisão

A folha é a rota `/projetos/[slug]`, não uma quarta aba dentro do `tablist`.

As abas Projetos, Escrituras e Lendo são uma lista fixa, com setas do teclado e o hash da página. Encaixar um projeto ali quebraria esse contrato e misturaria duas navegações no mesmo controle. A rota deixa o card como link, o endereço pode ser compartilhado, e o voltar aponta para `/#projetos`, que a home já abre na aba certa.

O miolo da home não muda: retrato, texto, redes, as três abas e as listas.

## Dados

Tudo continua em `src/content/portfolio.ts`.

Cada projeto ganha `slug` e `figures`. Cada gravura tem `src`, `alt`, `title` e `description`. O arquivo fica em `public/projetos/`.

`href` deixa de ser o destino do card. O card usa `projectPath(slug)`. `href` com `http` vira o link externo da folha; `linkLabel` é o texto visível (`Experimentar`, `Baixar`). `href` igual a `#` não mostra link, como o restante do site já faz.

## Arquivos

- `src/lib/projects.ts` — caminho, busca pelo slug e leitura do link externo.
- `src/app/projetos/[slug]/page.tsx` — página estática, título e 404 quando o slug não existe.
- `src/components/project-sheet.tsx` — a folha: voltar, título, descrição, link e gravuras.
- `src/components/project-grid.tsx` — o card passa a apontar para a folha.
- `src/app/not-found.tsx` — o mesmo papel quando o endereço não existe.
- `public/projetos/*.svg` — gravuras no traço da página.

`generateStaticParams` lista os slugs conhecidos. Um slug fora do conteúdo chama `notFound()`, porque `dynamicParams` não convive com o cache de componentes já ligado no projeto.

## Interface

A folha usa a mesma coluna, o filete duplo, a Fraunces e a caixa irregular dos cards. A gravura entra numa moldura com sombra deslocada. O voltar e o link externo têm área de toque de pelo menos 44px. O link externo abre em nova aba. Não há menu novo, nem grade larga: no telefone e no desktop a leitura continua numa coluna.

## O que não muda

Escrituras, leituras, o hash das três abas e o comportamento de `href` `#` nas outras listas.
