# Site profissional — Vanessa Zillig

Site institucional de **Vanessa Zillig**, psicóloga com atuação orientada pela Terapia Cognitivo-Comportamental (TCC).

## Objetivo

Criar presença digital profissional e facilitar o contato de potenciais pacientes por WhatsApp, com foco em psicoterapia individual online e presencial.

## Estrutura

- Hero com proposta de valor e CTA
- Demandas clínicas atendidas
- TCC e evidências científicas
- Modalidades online e presencial
- Atendimento em português e inglês
- Como funciona o processo
- Sobre Vanessa
- FAQ
- CTA final
- Política de Privacidade

## Stack

Projeto estático, sem framework e sem dependências de frontend:

- HTML semântico
- CSS responsivo
- JavaScript mínimo
- GitHub Actions
- GitHub Pages

## Desenvolvimento local

Requer Node.js 20+ apenas para validação/build.

```bash
npm run check
npm run build
```

O build gera a pasta `dist/`.

## Conteúdo pendente antes da publicação final

- CRP completo
- localização/região do atendimento presencial
- foto profissional aprovada
- domínio personalizado, se aplicável
- revisão final da profissional sobre formação, experiência e escopo clínico

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` está preparado para publicar após merge em `main`, desde que o GitHub Pages esteja configurado para usar GitHub Actions.

## SEO técnico

Incluídos:

- title e meta description
- canonical
- favicon
- Open Graph
- Twitter Card
- robots.txt
- sitemap.xml
- headings semânticos
- idioma `pt-BR`

Os URLs canônicos atuais usam o endereço provisório do GitHub Pages e deverão ser atualizados quando houver domínio próprio.

## Analytics

GA4 não foi ativado nesta etapa. Antes da ativação, definir os eventos e atualizar a política de privacidade, quando necessário.
