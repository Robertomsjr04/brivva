## Auditoria de Assets
- A pasta existente é `[CBrivva]` (variação do nome mencionado), contendo fotos e logo; usarei essas imagens para os doutores.
- Mapearei arquivos: `PHOTO-2025-12-02-18-13-50.jpg`, `PHOTO-2025-12-02-18-13-51.jpg`, variantes `2.jpg`, e possíveis combinações.

## Implementação da Seção Equipe
- Criar `src/components/Team.jsx` com grid responsivo (2–4 colunas) usando `Card` shadcn, imagem circular, nome, especialidade e CTA.
- Animações: revelar com Framer Motion (stagger), hover sutil nos cards.
- Dados: array local com `name`, `role`, `photo` importados de `[CBrivva]`. Caso nomes reais não existam, adiciono placeholders e deixo pronto para edição.
- CTA: botão "Agendar com a Equipe" (link para `#contato`).

## Integrações
- Navegação: adicionar link `Equipe` no `Header.jsx` e âncora `id="equipe"` na nova seção.
- Posição: inserir `Team` após `Trust` e antes de `Testimonials` em `App.jsx`.
- Imagens: `loading="lazy"`, `alt` descritivo, `object-cover` com recorte consistente.

## Acessibilidade e UX
- Foco visível nos botões; ALT significativo nas fotos.
- Responsividade mobile/desktop com espaçamentos consistentes.
- Microinterações suaves sem prejudicar desempenho.

## Validação
- Rodar servidor e validar layout e rolagem.
- Checar animações, navegação para `#equipe` e performance da página.

## Entregáveis
- Nova seção "Equipe" com os doutores.
- Navegação atualizada, assets integrados e animações de entrada.
- Código idiomático alinhado ao padrão atual do projeto.