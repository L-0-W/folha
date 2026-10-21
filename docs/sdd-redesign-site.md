# SDD — O palco inteiro

## Pedido

O elenco de projetos já traduziu a referência: saturação só no item ativo, recorte, adesivo, sombra dura, duas famílias de tipo. O resto da página ainda era jornal — coluna estreita, filete duplo, número de edição, listas em fio de cabelo. Esta leva aplica o mesmo passo ao site inteiro e descarta esse jornal. Não copia a tela escura do jogo. Não cria atalho de teclado.

## Decisão

O chão deixa de ser a folha de papel e passa a ser a tinta do site (`#12100e`). As chapas continuam em papel claro, com a mesma Fraunces, o mesmo sangue de boi e os mesmos acentos. Assim o elenco, os pôsteres e a folha do projeto não quebram.

A coluna de 40rem sai. A página abre até cerca de 72rem, a largura em que o elenco já cabia. No telefone a chapa de cada seção sobe. A grade de escrituras e leituras fica em duas colunas; entre 640 e 900px vai a quatro.

A intro vira uma chapa. À esquerda, uma asa de prensa: o abajur abre em asa de papel, com retícula. À direita, três adesivos, o texto, o nome grande e quatro selos das redes. O retrato (iniciais ou foto) fica preso nessa asa. Saem o filete duplo e o "n.º 01".

Escrituras e leituras seguem o elenco. O clique troca a chapa. Não há seta de teclado. A escritura com `href` "#" não ganha botão. A que começa com http ganha o chanfro "Ler". A leitura abre na que está "lendo".

A folha do projeto, a página ausente e o rodapé perdem o filete de jornal. A ausente é uma chapa com uma folha lacrada.

## Dados

Tudo continua em `src/content/portfolio.ts`.

O perfil ganha `trade` e três `tags`. `headline` e `issue` saem. Cada escritura e cada leitura ganham `id`.

`src/lib/folio.ts` escolhe a peça, ignora id ausente, separa o dia da data e só libera o botão da escritura quando o href sai do site. A leitura inicial prefere o estado "lendo".

## Arquivos

- `src/components/stage/press-wing.tsx` — a asa da intro.
- `src/components/stage/column-scrap.tsx` — a tira rasgada das escrituras.
- `src/components/stage/book-cut.tsx` — o volume das leituras.
- `src/components/stage/sealed-sheet.tsx` — a folha lacrada da página ausente.
- `src/components/stage/folio-spread.tsx` — o clique e o estado, compartilhado.
- `src/components/stage/stage.css` — a intro e as duas seções.
- `src/components/intro.tsx` — a chapa da pessoa.
- `src/components/writing-list.tsx` e `reading-list.tsx` — passam a usar o spread.
- `src/app/globals.css` e `src/app/layout.tsx` — o chão, as abas, o rodapé.
- `src/app/not-found.tsx` e `src/components/project-sheet.tsx` — sem filete.

O elenco de projetos, o hash das três abas, as setas que já existiam nessas abas, a rota `/projetos/slug` e o `href` "#" ficam.

## Interface

O sangue de boi continua só em adesivo, selo, chanfro, tarja e estado. O nome grande fecha embaixo à direita. O inativo perde a cor. O escolhido gira pouco e ganha sombra dura.

Cada recorte novo tem duas massas, tinta e acento, com retícula. A asa não é um animal copiado: é a luminária do pôster da Lume aberta em asa de caderno.

No telefone a arte da intro vai para o topo e o nome sobe acima do texto longo. O botão e o selo têm 44px. O movimento respeita `prefers-reduced-motion`. O contorno de foco é claro no chão escuro e escuro em cima da chapa.
