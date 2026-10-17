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

- localização/região do atendimento presencial
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

Domínio canônico configurado no código: `https://vanessazillig.com/`.

## Search Console

O site está pronto para uma propriedade de domínio `vanessazillig.com` no Google Search Console. A verificação recomendada é via registro TXT no DNS do Cloudflare. Após a verificação, enviar `https://vanessazillig.com/sitemap.xml`.

## Analytics

A integração de GA4 está preparada, mas permanece inativa até que um Measurement ID válido seja inserido em `analytics-config.js`.

Eventos preparados:

- `page_view` via configuração padrão do GA4
- `generate_lead` em cliques de WhatsApp, com `method=whatsapp` e posição do CTA

O Analytics só é carregado após consentimento do visitante. Nenhum conteúdo clínico ou texto de mensagem é enviado intencionalmente ao GA4.
