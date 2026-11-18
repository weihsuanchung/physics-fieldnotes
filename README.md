# Physics Notes｜物理概念筆記

A lightweight, extensible physics concept website made for the **AGENTS.md / CLAUDE.md** class assignment. Every concept follows one reusable editorial template.

## Features
- Responsive concept catalog, full-text filter, topic categories
- Reusable article view with intuition, equation, misconception, reflection question and expandable hint
- MathJax formulas on article pages
- Pure HTML/CSS/JavaScript; no API key, paid service, or build step
- Three initial lessons: magnetic monopoles, photoelectric effect, free fall

## Run locally
From the project root:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`. The MathJax CDN needs internet access to render formulas. Other content works offline.

## Publish on GitHub Pages
1. Create a **public** GitHub repository (example name: `physics-fieldnotes`).
2. Upload the **contents** of this folder directly into the repository root, not a nested folder.
3. In the repository go to **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, then branch **main**, folder **/(root)**, and **Save**.
5. After deployment completes, open `https://YOUR-USERNAME.github.io/physics-fieldnotes/` (replace both names if different).
6. Replace the placeholder GitHub link in `index.html` with the real repository URL, commit, and confirm the updated page.

You must verify the actual published site before submitting; preparing a ZIP does not publish it.

## How to add a new concept
1. Read `AGENTS.md` first.
2. Append one object following the schema to `assets/js/concepts.js`; `id` must be unique and kebab-case.
3. Do **not** create a duplicate HTML page; the home catalog and `concept.html?id=...` update automatically.
4. Check physics accuracy, assumptions, TeX escaping, and the self-check question.
5. Run `node --check assets/js/concepts.js` and `node --check assets/js/site.js`.
6. Open the website and test search, filter, detail page and hint button on desktop/mobile.

### Example task for an AI coding agent
> Read `AGENTS.md` and `README.md`. Add one new Physics Fieldnotes concept on electromagnetic induction. Follow the existing registry schema, include one misconception and one Socratic self-check question. Do not change existing lesson IDs or the page template. Run the listed checks and report files changed.

## Design note
The initial topic choices were informed by common physics misconceptions and were written for this project. This is not a hosted version of Luminer and does not collect user data.
