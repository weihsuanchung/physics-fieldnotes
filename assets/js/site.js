(() => {
  'use strict';
  const concepts = window.PHYSICS_CONCEPTS || [];
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const accents = { violet: 'violet', teal: 'teal', orange: 'orange' };
  const accent = (value) => accents[value] || 'violet';
  const categories = { mechanics: '經典力學', electromagnetism: '電磁學', modern: '近代物理' };
  const params = new URLSearchParams(window.location.search);

  if (document.body.dataset.page === 'home') {
    const grid = document.getElementById('concept-grid');
    const search = document.getElementById('search');
    const buttons = [...document.querySelectorAll('.filter')];
    const empty = document.getElementById('empty-state');
    let category = 'all';
    document.getElementById('concept-count').textContent = String(concepts.length).padStart(2, '0');

    function render() {
      const q = search.value.trim().toLocaleLowerCase('zh-Hant');
      const matches = concepts.filter(c => (category === 'all' || c.category === category) && [c.title, c.subtitle, c.tag, c.intuition].join(' ').toLocaleLowerCase('zh-Hant').includes(q));
      grid.innerHTML = matches.map((c, index) => `<a class="concept-card ${accent(c.accent)}" href="concept.html?id=${encodeURIComponent(c.id)}"><div class="card-top"><span class="category-pill">${esc(c.tag)}</span><span class="card-number">${String(index + 1).padStart(2, '0')} / ${String(matches.length).padStart(2, '0')}</span></div><div class="card-symbol" aria-hidden="true">${c.category === 'electromagnetism' ? '∇' : c.category === 'modern' ? 'hν' : 'g'}</div><h3>${esc(c.title)}</h3><p>${esc(c.subtitle)}</p><div class="card-footer"><span>${esc(c.level)} · ${Number(c.readMinutes) || 3} 分鐘閱讀</span><span class="card-arrow" aria-hidden="true">↗</span></div></a>`).join('');
      empty.hidden = matches.length > 0;
    }
    search.addEventListener('input', render);
    buttons.forEach(b => b.addEventListener('click', () => {
      category = b.dataset.category;
      buttons.forEach(other => { const active = other === b; other.classList.toggle('active', active); other.setAttribute('aria-pressed', String(active)); });
      render();
    }));
    render();
  }

  if (document.body.dataset.page === 'concept') {
    const element = document.getElementById('concept-article');
    const concept = concepts.find(c => c.id === params.get('id'));
    if (!concept) {
      document.title = '找不到概念 — Physics Fieldnotes';
      element.innerHTML = '<div class="not-found"><h1>找不到這篇札記。</h1><p>連結可能已變更，請回首頁選擇其他概念。</p><a class="primary-link" href="index.html">回到概念索引 ↗</a></div>';
      return;
    }
    document.title = `${concept.title} — Physics Fieldnotes`;
    const referenceHTML = (concept.references || []).filter(r => /^https:\/\//.test(r.url)).map(r => `<li><a href="${esc(r.url)}" rel="noopener noreferrer" target="_blank">${esc(r.label)} ↗</a></li>`).join('');
    element.innerHTML = `<article class="article ${accent(concept.accent)}"><div class="article-meta"><span class="category-pill">${esc(concept.tag)}</span><span>${esc(concept.level)} / ${Number(concept.readMinutes) || 3} 分鐘閱讀</span></div><h1>${esc(concept.title)}</h1><p class="article-deck">${esc(concept.subtitle)}</p><div class="article-ornament" aria-hidden="true">Φ · ? · ∞</div><section class="article-section"><div class="section-count">01 — INTUITION</div><h2>從直覺開始</h2><p>${esc(concept.intuition)}</p></section><section class="article-section"><div class="section-count">02 — EQUATION</div><h2>用公式說清楚</h2><div class="equation-box"><div class="equation" role="img" aria-label="數學公式">\\[${concept.equation}\\]</div><p>${esc(concept.equationNote)}</p></div></section><section class="article-section"><div class="section-count">03 — MISCONCEPTION</div><h2>一個容易踩到的迷思</h2><div class="myth-box"><p class="myth-label">常見說法</p><p>${esc(concept.misconception)}</p></div><p>${esc(concept.correction)}</p></section><section class="article-section"><div class="section-count">04 — REFLECT</div><h2>輪到你思考</h2><div class="question-box"><p>${esc(concept.question)}</p><button class="hint-toggle" type="button" aria-expanded="false" aria-controls="hint-content">顯示一點提示 <span aria-hidden="true">＋</span></button><div id="hint-content" class="hint-content" hidden>${esc(concept.hint)}</div></div></section><section class="takeaway-box"><span>THE TAKEAWAY</span><p>${esc(concept.takeaway)}</p></section>${referenceHTML ? `<section class="references"><h2>延伸閱讀</h2><ul>${referenceHTML}</ul></section>` : ''}</article><div class="article-bottom"><a href="index.html">← 瀏覽其他概念</a><span>下一個問題，從你開始。</span></div>`;
    const toggle = element.querySelector('.hint-toggle');
    const hint = element.querySelector('#hint-content');
    toggle.addEventListener('click', () => { const shown = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!shown)); hint.hidden = shown; toggle.innerHTML = shown ? '顯示一點提示 <span aria-hidden="true">＋</span>' : '收起提示 <span aria-hidden="true">−</span>'; });
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([element]).catch(() => {});
  }
})();
