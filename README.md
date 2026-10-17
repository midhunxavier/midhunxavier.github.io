# Midhun Xavier's portfolio

A Jekyll portfolio built with the native GitHub Pages dependency set. GitHub Pages remains responsible for deployment; the Actions workflow only checks the site.

## Local development

Use Ruby 3.3, then run:

```sh
bundle install
bundle exec jekyll serve --livereload --config _config.yml,_config.dev.yml
```

## Verification

```sh
JEKYLL_ENV=production bundle exec jekyll build --trace
bundle exec ruby scripts/check_links.rb
```

The link checker checks links, images, scripts, and favicons. It treats absolute links on the configured site domain as internal links. External services are excluded so network outages do not fail CI.

## Content

- Publications live in `_publications/`. Use `pub_type` and `topic` for list labels, `paperurl` for a local PDF, and `doi`, `arxiv`, or `recordurl` for external sources. Keep existing permalinks.
- The homepage displays publications with `featured: true`, sorted by `featured_order`, using their `summary`.
- Research items retain their `/teaching/research_N` URLs. The index is `/research/`, with a redirect from `/teaching/`.
- Contact is `/contact/`; the former Markdown routes redirect there.
- Add `mathjax: true` only to pages that need mathematical notation.
- Analytics is disabled. Any future analytics integration should update the privacy page at the same time.

## Editorial follow-ups

No CV PDF was provided, so the CV has no download link. The EU-project entry describes prior involvement because current assignments could not be confirmed. Existing PDFs and project screenshots are retained, and no new Aerobase case studies or sidebar email were added.

Recent publication links were checked against arXiv (Agentproof and IndustriConnect), LTU DiVA (ICIT 2024 and the thesis), and Aalto's publication record (ReACT-Gen). Summaries reuse the existing repository text. The custom domain returned HTTP 200 and the GitHub Pages domain redirected to it when checked on 2026-10-16.
