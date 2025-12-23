## Objetivos
- Elevar o visual com componentes prontos de alto padrão (shadcn/ui) mantendo paleta BRIVVA.
- Introduzir microinterações e transições de rolagem suaves.
- Preservar responsividade, acessibilidade e SEO já configurados.

## Integrações
- shadcn/ui: inicializar `components.json`, adicionar biblioteca utilitária (CVA, tailwind-merge, lucide-react) e importar componentes.
- 21stdev: manter o `cline` ativo para auditoria de UI/UX e geração de melhorias rápidas durante o refino visual.

## Componentes a Adicionar (shadcn/ui)
- Button: substituir `.btn-primary`/`.btn-secondary` por `Button` com variantes e paleta BRIVVA.
- Navbar (Sheet + Button + Navigation Menu): menu mobile com `Sheet`, navegação desktop simplificada.
- Card: aplicar em Serviços e blocos de Confiança.
- Accordion: seção de FAQ (opcional) após Depoimentos.
- Tooltip: ícones dos serviços com dicas sutis.
- Dialog/Toast: feedback ao enviar formulário de contato.
- Separator: divisões de seções.
- Carousel (Embla): carrossel fluido para Depoimentos.

## Transições de Rolagem
- Framer Motion: revelar seções ao entrar na viewport (fade/slide, stagger).
- Lenis: suavizar rolagem de âncoras e rolagem geral.
- Header colante com transição: sombra/blur ao rolar e redução de altura.
- Parallax leve na imagem da Hero.

## Alterações nos Arquivos
- Dependências: adicionar `framer-motion`, `@studio-freight/lenis`, `embla-carousel-react`, `class-variance-authority`, `tailwind-merge`, `lucide-react`.
- `tailwind.config.js`: garantir `content` e tokens BRIVVA; configurar `container` se necessário.
- `src/components/Header.jsx`: trocar nav por `Sheet` + `Button`; animar transição ao rolar.
- `src/components/Hero.jsx`: aplicar parallax/animate; CTA com `Button`.
- `src/components/Services.jsx`: Cards shadcn, Tooltip nos ícones.
- `src/components/Trust.jsx`: Cards + Separator; badges com `Badge` shadcn.
- `src/components/Testimonials.jsx`: carrossel Embla com controles shadcn (Buttons icônicos `lucide-react`).
- `src/components/Contact.jsx`: Inputs shadcn, `Dialog/Toast` para sucesso.
- `src/index.css`: manter utilitários, migrar onde necessário para variantes shadcn.

## Acessibilidade e SEO
- Aria-labels e foco visível nas interações.
- Manter H1 único e metas existentes; enriquecer ALT das imagens.

## Validação
- Rodar servidor local; testar em desktop/mobile.
- Checar perf e CLS das animações; ajustar durações/easings.

## Entregáveis
- UI atualizada com shadcn/ui.
- Animações de rolagem e carrossel de Depoimentos.
- Código organizado e idiomático, mantendo a marca BRIVVA.