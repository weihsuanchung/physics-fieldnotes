# AGENTS.md — Physics Fieldnotes

## Mission
Build and maintain **Physics Fieldnotes**, a bilingual-friendly (primarily Traditional Chinese) educational microsite that explains a physical idea through intuition, a precise equation, a misconception, and a question to think about. The intended reader is a curious undergraduate or senior high school student. This is an original editorial project, **not** a copy of Luminer or any course website.

## Deliverables and non-negotiable constraints
- The public site must run as **static files on GitHub Pages**. Do not add a server, database, build pipeline, paid API, environment variables, or secret keys.
- Keep the site usable on desktop and mobile, including keyboard navigation.
- Preserve its core structure: `index.html` (catalog), `concept.html` (one lesson renderer), `assets/js/concepts.js` (content registry), `assets/js/site.js` (catalog and lesson UI), `assets/css/style.css` (shared design), `README.md` (human instructions).
- All URLs and assets must be **relative**, so the website works under `https://USERNAME.github.io/REPOSITORY/` as well as locally via a server.
- All user-facing copy should be in **Traditional Chinese**, except conventional scientific terms and properly attributed English terms.
- Do not assert that mathematics or physics proves an empirical phenomenon absent; distinguish assumptions, theoretical predictions and empirical evidence.
- Never fabricate references, citations, numerical measurements, or experimental findings. When uncertain, write a caveat and flag for human review.
- Do not add copyrighted images, paywalled text, or copied lesson prose. Use original HTML/CSS diagrams or appropriately licensed assets with credits.

## Project structure
```
/
├── AGENTS.md               # Instructions for future coding agents
├── README.md               # Setup, deployment, content authoring
├── index.html              # Catalog: hero, search, topic filters, cards
├── concept.html            # Reusable article template (id query parameter)
└── assets/
    ├── css/style.css       # Global tokens, layout, responsive styles
    └── js/
        ├── concepts.js     # Single source of truth for lesson content
        └── site.js         # Behavior shared by both pages
```
Do not make a new standalone HTML file for each concept. New concepts are records in `concepts.js`; `concept.html` automatically renders them.

## Data contract — each concept
Append exactly one object to the exported `window.PHYSICS_CONCEPTS` array. Preserve these fields and types:
- `id`: lower-case kebab-case stable identifier, globally unique, e.g. `photoelectric-effect`.
- `category`: one of `mechanics`, `electromagnetism`, `modern`.
- `tag`: concise Traditional Chinese category label.
- `title`: clear Traditional Chinese question title, ending with `？`.
- `subtitle`: one short nontechnical hook (prefer ≤ 50 Chinese characters).
- `level`: `高中` or `大學基礎`.
- `readMinutes`: positive integer.
- `accent`: one of `violet`, `teal`, `orange`.
- `intuition`: one paragraph explaining the intuition, not a lengthy derivation.
- `equation`: a **string** containing TeX math WITHOUT surrounding `$` delimiters; escaped backslashes inside JavaScript strings (write `\\nabla`, not `\nabla`).
- `equationNote`: one or two sentences defining every symbol and relevant assumptions.
- `misconception`: plausible incorrect statement stated explicitly, not endorsed.
- `correction`: careful correction, including domain of validity when needed.
- `question`: one conceptual self-check question; do not spoil the answer in the question itself.
- `hint`: one modest clue, kept hidden until user clicks.
- `takeaway`: one actionable learning takeaway.
- `references`: an array of `{ label, url }` for optional credible references; use `[]` if none verified. Links must be `https://`.

Example template:
```js
{
  id: 'new-concept', category: 'mechanics', tag: '力學',
  title: '這個物理現象為什麼會發生？', subtitle: '一句引導語。',
  level: '高中', readMinutes: 3, accent: 'teal',
  intuition: '這裡解釋直覺。',
  equation: 'F=ma', equationNote: 'F 是合力，m 是質量，a 是加速度。',
  misconception: '常見但不正確的說法。', correction: '清楚的修正。',
  question: '學生可以想想什麼？', hint: '從哪個變數切入？',
  takeaway: '一段可帶走的觀念。', references: []
}
```

## Content quality checklist
1. Explain **what**, **why**, and **under what assumptions**; do not equate an equation with a proof of a natural fact.
2. State no more than one major question per concept; the question must be answerable from the content with reasoning.
3. Check equation units, limiting cases and mathematical notation. All TeX backslashes are escaped in JavaScript string literals.
4. Distinguish idealized assumptions (e.g., vacuum, nonrelativistic limit) from real-world qualifications.
5. Use original wording and maintain the same 7-section rhythm: intuition → equation → common mistake → correction → think question → hint → takeaway.
6. If a source is not verified, do not list it as a reference.

## Design system
- Editorial/academic rather than a chat interface. Deep navy text, warm cream background, violet/teal/orange accent chips, generous whitespace.
- Headings are in a clean sans-serif stack; formulas use MathJax (CDN, graceful text fallback).
- On mobile (< 760px), the multi-column catalog becomes one column; navigation remains visible; cards must be tappable.
- Maintain WCAG-minded basics: semantic landmarks, visible focus rings, sufficient contrast, accessible labels and button states.
- Avoid adding visual frameworks; use vanilla HTML/CSS/JS. Prefer minimal dependencies.

## Agent workflow for a request such as 'Add a page about interference'
1. Read this `AGENTS.md` and `README.md` **first**. Inspect `concepts.js`, `concept.html`, and the CSS before editing.
2. Confirm the topic, intended category, key equation, and one misconception. If facts are uncertain, avoid invention.
3. Append one object in `concepts.js`; never duplicate an `id` or bypass the reusable template.
4. Do not change layout files unless a new feature genuinely requires it.
5. Verify the catalog card appears, search matches title/category, filter works, detail link opens, hint toggles, math renders, and back link works.
6. Run syntax checks (`node --check assets/js/concepts.js` and `node --check assets/js/site.js`). Use a local HTTP server for browser checks when possible (`python -m http.server 8000`).
7. Summarize changed files, the new concept's `id`, any scientific caveats, and completed checks. Do not claim deployment or testing if not performed.

## Editing boundaries
- Do not delete existing concepts or rename IDs without an explicit migration request; old links must remain valid.
- Do not rewrite unrelated concepts during a single-topic request.
- No secrets, private student data, tracking pixels, login pages, or analytics without explicit authorization.
- Avoid expanding beyond `mechanics`, `electromagnetism`, `modern` until the user approves a new category.

## Definition of done
A task is done only when the requested concept exists in the data registry, appears automatically on the home page, opens correctly in the shared article template, retains expected style and mobile usability, passes JS syntax checks, and includes a brief change log. Publishing to GitHub is a separate step: do not claim a live URL without checking the actual GitHub Pages deployment.
