# Folha

Portfólio pessoal num palco de pôster. O miolo segue uma página direta: uma frase sobre o ofício, onde a pessoa trabalhou, o que criou, as redes, e três seções — Projetos, Escrituras e Lendo. A tinta, o sangue de boi, a Fraunces e os recortes vêm do elenco de projetos.

O texto que aparece agora é de exemplo, para avaliar o desenho.

## Rodar

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:4721](http://127.0.0.1:4721).

## Trocar o conteúdo

Tudo que a página mostra está em `src/content/portfolio.ts`: nome, texto, redes, projetos, escrituras e leituras.

- Um `href` com `"#"` não sai da página.
- Um `href` que começa com `http` abre em nova aba.
- O card de um projeto abre `/projetos/slug`. Na folha, as gravuras ficam em `figures`: arquivo em `public/projetos/`, título e descrição. Se o `href` começa com `http`, a folha mostra esse link com o texto de `linkLabel`.
- O retrato usa as iniciais enquanto `portraitSrc` for `null`. Para uma foto, coloque o arquivo em `public/` e aponte `portraitSrc` para ele, por exemplo `"/retrato.jpg"`.
