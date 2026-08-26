# Serralheria Bomfim — Site Institucional

Site institucional em Next.js (App Router) para a Serralheria Bomfim, especializada em portões, grades,
corrimãos, escadas e estruturas metálicas na Baixada Fluminense (RJ).

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS** com design tokens customizados (paleta, tipografia, animações)
- **lucide-react** para ícones
- Mobile-first, 100% responsivo, sem dependências externas de UI

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Build de produção:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

> Este projeto foi desenvolvido em um ambiente sem acesso à internet, portanto `npm install` ainda não
> foi executado aqui. Rode os comandos acima no seu ambiente local antes do deploy para validar o build.

## Arquitetura

```
src/
  app/                  Rotas do App Router (layout, home, sitemap, robots, OG image)
  components/
    ui/                 Componentes de interface reutilizáveis (Button, Container, Reveal, etc.)
    layout/              Header, menu mobile, footer, botão de WhatsApp
  sections/              Uma seção da landing page por arquivo (Hero, Services, FAQ...)
  data/                  Conteúdo e configuração (textos, contatos, navegação) — edite aqui
  types/                 Tipos TypeScript compartilhados
  lib/                   Funções utilitárias
public/
  images/                Imagens estáticas (adicionar fotos reais aqui)
```

Toda a lógica de conteúdo (textos, serviços, depoimentos, FAQ, contato) fica isolada em `src/data/`,
separada dos componentes visuais — para editar textos não é necessário mexer em nenhum componente.

## Antes de publicar — checklist obrigatório

1. **E-mail de contato**: já atualizado para `Serralheriabomfimltda2024@gmail.com` em `src/data/site.ts`.
2. **Domínio**: atualize `url` em `src/data/site.ts` com o domínio definitivo (usado no sitemap, robots.txt,
   Open Graph e dados estruturados JSON-LD).
3. **Fotos**: o site já usa fotos reais de projetos entregues (`public/images/portfolio/`), exibidas no
   Hero e na seção "Projetos". Para adicionar mais fotos, coloque os arquivos em `public/images/` e
   inclua novos itens em `src/data/portfolio.ts`.
4. **Depoimentos**: os depoimentos em `src/data/testimonials.ts` são exemplos com formato realista —
   substitua pelos depoimentos reais dos clientes antes de publicar.
5. **Logo**: o monograma oficial já está em `public/images/brand/monogram.png` (usado no header, rodapé
   e favicon). A arte completa enviada pelo cliente (com telefone e slogan) está em
   `public/images/brand/logo-completa-referencia.png`, guardada apenas como referência — não é usada
   diretamente no site por já ter telefone e texto embutidos na imagem.

Já preenchidos com dados reais: WhatsApp (`(21) 96572-9836`), razão social (`Serralheria Bomfim Ltda`)
e CNPJ (`32.183.952/0001-84`) — todos em `src/data/site.ts`.

## SEO já configurado

- Title/description dinâmicos por página (`metadata` da App Router)
- Open Graph e Twitter Card com imagem gerada dinamicamente (`app/opengraph-image.tsx`)
- `sitemap.xml` e `robots.txt` gerados automaticamente (`app/sitemap.ts`, `app/robots.ts`)
- Dados estruturados JSON-LD (`HomeAndConstructionBusiness`) no `layout.tsx`
- Hierarquia de headings correta (um único `<h1>` no Hero, `<h2>` por seção, `<h3>` nos cards)
- Links internos com âncoras semânticas (`#servicos`, `#contato`, etc.)

## Acessibilidade

- Navegação por teclado com foco visível em todos os elementos interativos
- Menu mobile com `aria-expanded`, `aria-controls`, fechamento por `Esc` e clique fora
- Skip link para o conteúdo principal
- `prefers-reduced-motion` respeitado nas animações
- Textos alternativos e `aria-hidden` corretos em ícones decorativos vs. informativos

## Performance

- Fontes carregadas via `next/font` (self-hosted, sem layout shift)
- Sem imagens pesadas de banco de imagens — identidade gráfica em CSS/SVG
- Componentes de seção são Server Components por padrão; apenas Header, MobileMenu, Reveal e Contact
  são Client Components (interatividade mínima necessária)
- Cache agressivo para assets estáticos configurado em `next.config.mjs`
- remove zip
  
