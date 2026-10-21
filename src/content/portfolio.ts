/**
 * Conteúdo de exemplo para avaliar o desenho.
 * Troque pelos seus dados quando quiser — a página inteira lê daqui.
 * Enquanto `portraitSrc` for null, o retrato mostra as iniciais.
 * Um href "#" não navega. Um href que começa com http abre em nova aba.
 * Em cada projeto, `accent` colore o endereço e a tinta da gravura.
 * `motif` "hatch", "dots" ou "cross" imprime o fundo; "plain" deixa o papel liso.
 * Na aba, o retrato seleciona o projeto. O botão da chapa abre `/projetos/slug`.
 * Cada projeto tem três `tags`, quatro `marks` e um `poster`.
 * `mark: "novo"` imprime a tarja. A ordem do elenco está em `rosterSlots`.
 * As gravuras ficam em `public/projetos/`.
 * `linkLabel` nomeia o link externo da folha quando o href começa com http.
 * O perfil tem `trade` e três `tags`. Escrituras e leituras têm `id`.
 * O clique seleciona a escritura ou a leitura. O botão "Ler" só aparece se o href começa com http.
 */

export type InlinePart = {
  text: string;
  href?: string;
  badge?: boolean;
};

export type SocialIcon = "linkedin" | "github" | "instagram" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type ProjectIcon =
  | "book"
  | "clipboard"
  | "grid"
  | "bell"
  | "notebook"
  | "type";

export type Wash =
  | "verdigris"
  | "sand"
  | "periwinkle"
  | "rose"
  | "sage"
  | "stone";

export type Accent = "teal" | "ochre" | "plum" | "red" | "green" | "blue";

export type Motif = "hatch" | "dots" | "cross" | "plain";

export const posterIds = ["lamp", "press", "sheet", "pin", "folio", "sort"] as const;

export type PosterId = (typeof posterIds)[number];

export const craftMarks = [
  "tipo",
  "grade",
  "cor",
  "papel",
  "movimento",
  "prova",
  "voz",
  "medida",
] as const;

export type CraftMark = (typeof craftMarks)[number];

export const craftMarkLabel: Record<CraftMark, string> = {
  tipo: "Tipo",
  grade: "Grade",
  cor: "Cor",
  papel: "Papel",
  movimento: "Movimento",
  prova: "Prova",
  voz: "Voz",
  medida: "Medida",
};

export type ProjectFigure = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  url: string;
  href: string;
  linkLabel?: string;
  icon: ProjectIcon;
  accent: Accent;
  motif: Motif;
  mark?: "novo";
  poster: PosterId;
  tags: readonly [string, string, string];
  marks: readonly [CraftMark, CraftMark, CraftMark, CraftMark];
  figures: ProjectFigure[];
};

export type Writing = {
  id: string;
  title: string;
  dek: string;
  date: string;
  dateTime: string;
  href: string;
};

export type ReadingStatus = "lendo" | "na-mesa" | "lido";

export type Reading = {
  id: string;
  title: string;
  author: string;
  status: ReadingStatus;
  note?: string;
  wash: Wash;
};

export const statusLabel: Record<ReadingStatus, string> = {
  lendo: "Lendo",
  "na-mesa": "Na mesa",
  lido: "Lido",
};

export const profile = {
  name: "Helena Duarte",
  initials: "HD",
  portraitSrc: null as string | null,
  kicker: "Folha pessoal",
  trade: "Designer de interfaces",
  tags: ["Interfaces", "Ofício", "Tipo"] as const,
  year: 2026,
  description:
    "Onde trabalhei, o que criei, e um caderno de projetos, escrituras e leituras.",
  paragraphs: [
    [
      { text: "Criou experiências de produto na " },
      { text: "Oficina Norte", href: "#" },
      { text: " e na " },
      { text: "Lume", href: "#" },
      { text: ", e antes disso cofundou o " },
      { text: "Ateliê", href: "#" },
      {
        text: ", desenhando ferramentas para quem publica na web.",
      },
    ],
    [
      {
        text: "Também é metade de um estúdio pequeno que faz aplicativos para Mac.",
      },
      { text: "notas", href: "#escrituras", badge: true },
    ],
  ] satisfies InlinePart[][],
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "GitHub", href: "#", icon: "github" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "E-mail", href: "#", icon: "mail" },
];

export const sections = [
  {
    id: "projetos",
    label: "Projetos",
    dek: "Peças recentes, do desenho à publicação.",
  },
  {
    id: "escrituras",
    label: "Escrituras",
    dek: "Notas curtas sobre ofício, tipo e interface.",
  },
  {
    id: "lendo",
    label: "Lendo",
    dek: "O que está aberto na mesa, e o que já fechou.",
  },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const projects: Project[] = [
  {
    slug: "lume",
    title: "Lume",
    description: "Leitura guiada para a redação diária.",
    url: "lume.app",
    href: "https://lume.app",
    linkLabel: "Experimentar",
    icon: "book",
    accent: "teal",
    motif: "hatch",
    mark: "novo",
    poster: "lamp",
    tags: ["Leitura", "Calma", "Diária"],
    marks: ["tipo", "voz", "medida", "papel"],
    figures: [
      {
        src: "/projetos/lume-coluna.svg",
        alt: "Gravura de uma página com uma coluna de linhas e uma frase marcada.",
        title: "A coluna do dia",
        description:
          "O texto do dia cabe numa medida só, com a frase em leitura marcada na margem.",
      },
      {
        src: "/projetos/lume-nota.svg",
        alt: "Gravura de uma margem com uma seta e um bilhete curto.",
        title: "A nota à margem",
        description:
          "Um apontamento curto acompanha o parágrafo, sem abrir outra tela.",
      },
    ],
  },
  {
    slug: "oficina",
    title: "Oficina",
    description: "Encomendas e prazos do ateliê.",
    url: "oficina.norte",
    href: "#",
    icon: "clipboard",
    accent: "ochre",
    motif: "dots",
    poster: "press",
    tags: ["Prazo", "Ficha", "Ateliê"],
    marks: ["grade", "prova", "papel", "medida"],
    figures: [
      {
        src: "/projetos/oficina-encomenda.svg",
        alt: "Gravura de três fichas empilhadas com marcas de conferência.",
        title: "A encomenda",
        description:
          "Cada pedido entra como uma ficha, com o nome e o prazo na mesma linha.",
      },
      {
        src: "/projetos/oficina-prazo.svg",
        alt: "Gravura de um calendário com um dia preenchido.",
        title: "O prazo",
        description:
          "O mês fica numa grade pequena; o dia combinado leva a tinta mais escura.",
      },
    ],
  },
  {
    slug: "margem",
    title: "Margem",
    description: "Grades para interfaces pequenas.",
    url: "margem.design",
    href: "#",
    icon: "grid",
    accent: "plum",
    motif: "cross",
    poster: "sheet",
    tags: ["Grade", "Miúda", "Móvel"],
    marks: ["grade", "medida", "tipo", "cor"],
    figures: [
      {
        src: "/projetos/margem-grade.svg",
        alt: "Gravura de uma grade modular de retângulos.",
        title: "A grade miúda",
        description:
          "Colunas estreitas para caber num aparelho, sem perder o alinhamento.",
      },
      {
        src: "/projetos/margem-tela.svg",
        alt: "Gravura de um aparelho com duas colunas de texto.",
        title: "A tela pequena",
        description:
          "Duas colunas dentro do aparelho, com a margem externa mais larga.",
      },
    ],
  },
  {
    slug: "prego",
    title: "Prego",
    description: "Lembretes de uma linha só.",
    url: "prego.app",
    href: "#",
    icon: "bell",
    accent: "red",
    motif: "plain",
    poster: "pin",
    tags: ["Curta", "Fixa", "Linha"],
    marks: ["voz", "tipo", "movimento", "papel"],
    figures: [
      {
        src: "/projetos/prego-linha.svg",
        alt: "Gravura de um alfinete segurando uma única linha de texto.",
        title: "Uma linha",
        description: "O lembrete inteiro cabe numa frase, presa no alto da folha.",
      },
    ],
  },
  {
    slug: "caderno",
    title: "Caderno",
    description: "Notas com a medida da coluna.",
    url: "caderno.dev",
    href: "#",
    icon: "notebook",
    accent: "green",
    motif: "plain",
    poster: "folio",
    tags: ["Nota", "Coluna", "Medida"],
    marks: ["papel", "tipo", "medida", "voz"],
    figures: [
      {
        src: "/projetos/caderno-medida.svg",
        alt: "Gravura de uma página pautada com uma régua na margem.",
        title: "A medida da coluna",
        description: "Uma régua na margem mostra onde a linha deve parar.",
      },
    ],
  },
  {
    slug: "tipo",
    title: "Tipo",
    description: "Prova de fontes para impressão.",
    url: "tipo.press",
    href: "https://tipo.press",
    linkLabel: "Baixar",
    icon: "type",
    accent: "blue",
    motif: "plain",
    poster: "sort",
    tags: ["Prova", "Corpo", "Tipo"],
    marks: ["tipo", "prova", "cor", "papel"],
    figures: [
      {
        src: "/projetos/tipo-prova.svg",
        alt: "Gravura de uma letra capitular e três linhas de prova tipográfica.",
        title: "A prova",
        description:
          "A mesma palavra em três corpos, para ver o desenho antes da impressão.",
      },
      {
        src: "/projetos/tipo-alfabeto.svg",
        alt: "Gravura de duas linhas de alfabeto, uma em caixa-alta e outra em caixa-baixa.",
        title: "O alfabeto",
        description:
          "Caixa-alta e caixa-baixa na mesma amostra, como numa folha de fundição.",
      },
    ],
  },
];

export type RosterSlot =
  | { kind: "project"; slug: string }
  | { kind: "held"; id: string; title: string }
  | { kind: "sealed"; id: string };

export const rosterSlots: readonly RosterSlot[] = [
  { kind: "project", slug: "lume" },
  { kind: "project", slug: "oficina" },
  { kind: "project", slug: "margem" },
  { kind: "project", slug: "prego" },
  { kind: "project", slug: "caderno" },
  { kind: "project", slug: "tipo" },
  { kind: "held", id: "gaveta", title: "Gaveta" },
  { kind: "sealed", id: "reserva" },
];

export const writings: Writing[] = [
  {
    id: "coluna",
    title: "A coluna de 66 caracteres",
    dek: "A largura do texto decide o ritmo antes de qualquer componente.",
    date: "12 mar 2026",
    dateTime: "2026-03-12",
    href: "#",
  },
  {
    id: "icones",
    title: "Ícones que ainda precisam de uma frase",
    dek: "Um desenho de 24 pixels não substitui o nome da coisa.",
    date: "02 fev 2026",
    dateTime: "2026-02-02",
    href: "#",
  },
  {
    id: "papel",
    title: "Papel, tinta e o clique",
    dek: "O que a impressão antiga ensina sobre hierarquia numa tela.",
    date: "18 nov 2025",
    dateTime: "2025-11-18",
    href: "#",
  },
  {
    id: "regras",
    title: "Três regras que saíram do produto",
    dek: "Cortar uma regra deixou o fluxo mais honesto do que explicá-lo.",
    date: "03 set 2025",
    dateTime: "2025-09-03",
    href: "#",
  },
];

export const readings: Reading[] = [
  {
    id: "bringhurst",
    title: "Os Elementos do Estilo Tipográfico",
    author: "Robert Bringhurst",
    status: "lendo",
    note: "No capítulo da página.",
    wash: "sand",
  },
  {
    id: "norman",
    title: "O Design do Dia a Dia",
    author: "Donald Norman",
    status: "na-mesa",
    note: "Aberto nas affordances.",
    wash: "verdigris",
  },
  {
    id: "brockmann",
    title: "Sistemas de Grades",
    author: "Josef Müller-Brockmann",
    status: "na-mesa",
    wash: "stone",
  },
  {
    id: "kahneman",
    title: "Pensar, Depressa e Devagar",
    author: "Daniel Kahneman",
    status: "lido",
    note: "Relido o trecho dos atalhos.",
    wash: "periwinkle",
  },
  {
    id: "schopenhauer",
    title: "A Arte de Escrever",
    author: "Arthur Schopenhauer",
    status: "lido",
    note: "Uma edição pequena, de bolso.",
    wash: "rose",
  },
];
