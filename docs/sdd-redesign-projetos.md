# SDD — Elenco de projetos

## Pedido

A aba de projetos vira um elenco: retratos de um lado, a chapa do projeto escolhido do outro. O clique troca a chapa. A referência é uma tela de seleção; o que entra aqui é o princípio — hierarquia, recorte, adesivo, sombra dura — desenhado no papel e na tinta do site. Sem copiar a tela escura. Sem atalho de teclado novo.

## Decisão

A coluna de leitura não muda. Intro, abas, escrituras, leituras e rodapé continuam na medida de hoje. Quando a janela cabe, só o elenco alarga: grade à esquerda (cerca de 40%) e chapa à direita (cerca de 60%). No telefone a chapa sobe e a grade fica em quatro colunas.

O retrato seleciona. Não navega. Quem abre a folha é o botão chanfrado, no mesmo endereço de antes (`/projetos/slug`). Na folha, a chapa se repete. Se o projeto tem link externo, o botão chanfrado é esse link.

Dois lugares não são projeto: Gaveta, ainda sem folha, e Reserva, sem nome. Não selecionam e não geram rota.

As setas do teclado seguem só nas três abas. O elenco não escuta teclas.

## Dados

Tudo continua em `src/content/portfolio.ts`.

Cada projeto ganha três `tags`, quatro `marks`, um `poster` e, no máximo, `mark: "novo"`. `rosterSlots` ordena os retratos e inclui os dois lugares fechados.

`src/lib/roster.ts` monta o elenco, começa pelo projeto novo e ignora clique em lugar fechado.

## Arquivos

- `src/components/roster/roster.tsx` — o clique e o estado.
- `src/components/roster/plate.tsx` — título, adesivos, ofício e botão.
- `src/components/roster/poster.tsx` — as seis silhuetas.
- `src/components/roster/marks.tsx` — os quatro círculos.
- `src/components/roster/roster.css` — o elenco.
- `src/components/project-sheet.tsx` — a folha abre com a chapa.
- `src/components/portfolio-tabs.tsx` — a aba Projetos usa o elenco.

A grade antiga de cards sai. Escrituras, leituras, o hash e o `href` `#` ficam.

## Interface

Papel, tinta, Fraunces e a caixa irregular continuam. O sangue de boi fica nos adesivos, no botão, na tarja Novo e nos círculos. O acento do projeto colore a silhueta e o endereço.

O retrato inativo perde a cor. O escolhido volta à cor, gira pouco e ganha sombra dura. A silhueta entra por baixo da grade. O nome grande fecha a leitura no canto inferior direito.

Cada poster é um recorte de duas massas — tinta e acento — com retícula. O caderno abre as páginas em asa. A lume é um abajur em forma de guarda-chuva. Os outros seguem o ofício: prensa, folha rasgada, alfinete, bloco de tipo.

O movimento respeita `prefers-reduced-motion`. O botão tem 44px de altura. No telefone, se a chapa ficou acima da tela, o clique traz ela de volta.
