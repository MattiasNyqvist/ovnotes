/* ═══════════════════════════════════════════════════════
   NAVIGATION HTML
═══════════════════════════════════════════════════════ */
function navHTML() {
  return `
    <button class="nav-btn" onclick="openSheet('help-sheet')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      <span>Hjälp</span>
    </button>
    <button class="nav-btn" onclick="openSheet('error-sheet')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      <span>Felanmälan</span>
    </button>
  `;
}

/* ═══════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════ */
let currentCatId    = null;
let currentSecId    = null;
let openInfoSecId   = null;
let reportTimestamp = null;

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="disc"]').forEach(r => {
    r.addEventListener('change', () => {
      document.getElementById('btn-confirm').disabled =
        !document.getElementById('disc-ja').checked;
    });
  });
  ['nav-home','nav-detail','nav-report'].forEach(id => {
    document.getElementById(id).innerHTML = navHTML();
  });
  renderCategories();
  renderFAQ();
  showScreen('home-screen');
});

/* ═══════════════════════════════════════════════════
   DISCLAIMER
═══════════════════════════════════════════════════ */
function enterApp() {
  document.getElementById('disclaimer-overlay').style.display = 'none';
}

/* ═══════════════════════════════════════════════════
   SCREEN NAVIGATION
═══════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const body = document.querySelector(`#${id} .scroll-body`);
  if (body) body.scrollTop = 0;
}

/* ═══════════════════════════════════════════════════
   SHEETS
═══════════════════════════════════════════════════ */
function openSheet(id)  { document.getElementById(id).classList.add('open'); }
function closeSheet(id) { document.getElementById(id).classList.remove('open'); }
function sheetBgClose(e, id) {
  if (e.target === document.getElementById(id)) closeSheet(id);
}

/* ═══════════════════════════════════════════════════
   FELANMÄLAN
═══════════════════════════════════════════════════ */
function submitError() {
  const txt = document.getElementById('error-text').value.trim();
  if (!txt) return;
  alert('Tack för din felanmälan!\n\n' + txt);
  document.getElementById('error-text').value = '';
  closeSheet('error-sheet');
}

/* ═══════════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════════ */
function doSearch(q) {
  q = q.trim().toLowerCase();
  const grid = document.getElementById('cat-grid');
  const resultsEl = document.getElementById('search-results');

  if (!q) {
    grid.style.display = '';
    document.querySelector('.section-label').style.display = '';
    resultsEl.style.display = 'none';
    resultsEl.innerHTML = '';
    return;
  }

  const hits = [];
  CATEGORIES.forEach(cat => {
    (cat.sections || []).forEach(sec => {
      const haystack = (sec.title + ' ' + sec.lawTag + ' ' + sec.desc + ' ' +
        sec.bullets.join(' ') + ' ' +
        sec.report.cbs.map(c => c.label).join(' ')).toLowerCase();
      if (haystack.includes(q)) hits.push({ cat, sec });
    });
  });

  grid.style.display = 'none';
  document.querySelector('.section-label').style.display = 'none';
  resultsEl.style.display = 'block';

  if (hits.length === 0) {
    resultsEl.innerHTML = `<div style="color:var(--text2);padding:16px 4px;font-size:12px;">Inga träffar för "${q}"</div>`;
    return;
  }

  resultsEl.innerHTML = hits.map(({ cat, sec }) => `
    <div class="sec-block" style="margin-bottom:8px;">
      <div class="sec-row">
        <div class="sec-row-main" onclick="openReport('${cat.id}','${sec.id}')">
          <div class="sec-title">${sec.title}</div>
          <div class="sec-law">${cat.name.replace(/\n/g,' ')} · ${sec.lawTag}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════
   RENDER FAQ SHEET
═══════════════════════════════════════════════════ */
function renderFAQ() {
  const groups = {};
  FAQ_ITEMS.forEach(item => {
    if (!groups[item.cat]) groups[item.cat] = [];
    groups[item.cat].push(item);
  });

  document.getElementById('faq-content').innerHTML = Object.entries(groups).map(([cat, items]) => `
    <div class="faq-group">
      <div class="faq-group-title">${cat}</div>
      ${items.map(item => `
        <div class="faq-item">
          <div class="faq-q">${item.q}</div>
          <div class="faq-a">${item.a}</div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════
   RENDER HOME TILES
═══════════════════════════════════════════════════ */
function renderCategories() {
  document.getElementById('cat-grid').innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" onclick="openCategory('${cat.id}')">
      <div class="cat-icon"><img src="${cat.icon}" alt="${cat.name.replace(/\n/g,' ')}"></div>
      <div class="cat-name">${cat.name.replace(/\n/g,'<br>')}</div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════
   OPEN CATEGORY → DETAIL SCREEN
═══════════════════════════════════════════════════ */
function openCategory(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  if (cat.special) { openSheet(cat.special); return; }

  currentCatId  = catId;
  openInfoSecId = null;

  document.getElementById('detail-content').innerHTML =
    `<div class="cat-header">${cat.name.replace(/\n/g,' ')}</div>` +
    cat.sections.map(sec => `
      <div class="sec-block" id="block-${sec.id}">
        <div class="sec-row">
          <div class="sec-row-main" onclick="openReport('${catId}','${sec.id}')">
            <div class="sec-title">${sec.title}</div>
            <div class="sec-law">${sec.lawTag}</div>
          </div>
          <div class="sec-actions">
            <button class="sec-icon-btn" id="info-btn-${sec.id}"
              onclick="toggleInfo('${catId}','${sec.id}')"
              title="Visa/dölj information">
              <img src="resources/images/info-circle.svg" alt="Info">
            </button>
            <button class="sec-icon-btn"
              onclick="openReport('${catId}','${sec.id}')"
              title="Öppna rapportmall">
              <img src="resources/images/paste-clipboard.svg" alt="Rapportmall">
            </button>
          </div>
        </div>
        <div class="sec-info-panel" id="info-panel-${sec.id}">
          <div class="info-law-tag">${sec.lawTag}</div>
          <div class="info-desc">${sec.desc}</div>
          <ul class="info-bullets">
            ${sec.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');

  showScreen('detail-screen');
}

/* ═══════════════════════════════════════════════════
   TOGGLE INLINE INFO
═══════════════════════════════════════════════════ */
function toggleInfo(catId, secId) {
  const panel  = document.getElementById(`info-panel-${secId}`);
  const btn    = document.getElementById(`info-btn-${secId}`);
  const isOpen = panel.classList.contains('open');

  // Close any other open panel first
  if (openInfoSecId && openInfoSecId !== secId) {
    document.getElementById(`info-panel-${openInfoSecId}`)?.classList.remove('open');
    document.getElementById(`info-btn-${openInfoSecId}`)?.classList.remove('info-active');
    openInfoSecId = null;
  }

  if (isOpen) {
    panel.classList.remove('open');
    btn.classList.remove('info-active');
    openInfoSecId = null;
  } else {
    panel.classList.add('open');
    btn.classList.add('info-active');
    openInfoSecId = secId;
  }
}

/* ═══════════════════════════════════════════════════
   OPEN REPORT SCREEN (Sida 3)
═══════════════════════════════════════════════════ */
function openReport(catId, secId) {
  currentCatId    = catId;
  currentSecId    = secId;
  reportTimestamp = null;

  const cat = CATEGORIES.find(c => c.id === catId);
  const sec = cat.sections.find(s => s.id === secId);
  const rpt = sec.report;

  document.getElementById('report-topbar-title').textContent = rpt.title;

  document.getElementById('report-content').innerHTML = `
    <div class="cb-list">
      ${rpt.cbs.map(cb => `
        <label class="cb-item" for="cb-${cb.id}">
          <input type="checkbox" id="cb-${cb.id}" onchange="onCheckboxChange()">
          <span class="cb-label">${cb.label}</span>
        </label>
      `).join('')}
    </div>
    <div class="output-card">
      <div class="output-label">Genererad rapportmall</div>
      <div class="output-text" id="output-txt"><span style="color:var(--text3)">[Välj rättsliga grunder ovan – mallen genereras automatiskt]</span></div>
      <div class="output-footer">
        <button class="btn-copy" id="btn-copy" onclick="copyOutput()">Kopiera rapportmall</button>
        <a class="lnk-nova" href="https://etjanster.polisen.se/enova/" target="_blank" rel="noopener noreferrer">Nova</a>
      </div>
    </div>
  `;

  showScreen('report-screen');
}

/* ═══════════════════════════════════════════════════
   CHECKBOX CHANGE → capture timestamp on first check
═══════════════════════════════════════════════════ */
function onCheckboxChange() {
  const anyChecked = document.querySelectorAll('#report-content input[type=checkbox]:checked').length > 0;
  if (anyChecked && !reportTimestamp) {
    reportTimestamp = formatTimestamp(new Date());
  }
  refreshOutput();
}

function formatTimestamp(d) {
  const pad = n => String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ` +
         `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

/* ═══════════════════════════════════════════════════
   GENERATE TEMPLATE TEXT
═══════════════════════════════════════════════════ */
function refreshOutput() {
  const cat = CATEGORIES.find(c => c.id === currentCatId);
  const sec = cat.sections.find(s => s.id === currentSecId);

  const chosen = sec.report.cbs.filter(cb =>
    document.getElementById(`cb-${cb.id}`)?.checked
  );

  const el = document.getElementById('output-txt');

  if (chosen.length === 0) {
    el.innerHTML = '<span style="color:var(--text3)">[Välj rättsliga grunder ovan – mallen genereras automatiskt]</span>';
    el.dataset.plain = '';
    return;
  }

  let html  = '';
  let plain = '';

  if (reportTimestamp) {
    html  += `<strong>Tid:</strong> ${reportTimestamp}\n\n`;
    plain += `Tid: ${reportTimestamp}\n\n`;
  }
  html  += `<strong>Åtgärd:</strong> ${sec.title}\n`;
  plain += `Åtgärd: ${sec.title}\n`;
  html  += `<strong>Lagstöd:</strong> ${sec.lawTag}\n\n`;
  plain += `Lagstöd: ${sec.lawTag}\n\n`;
  html  += '<strong>Rättslig grund:</strong>\n';
  plain += 'Rättslig grund:\n';
  chosen.forEach(cb => {
    html  += `  • ${cb.tmpl}\n`;
    plain += `  • ${cb.tmpl}\n`;
  });
  html  += '\n<strong>Beskrivning av händelsen:</strong>\n';
  plain += '\nBeskrivning av händelsen:\n';
  html  += '[Beskriv vad som hände och varför åtgärden vidtogs]\n\n';
  plain += '[Beskriv vad som hände och varför åtgärden vidtogs]\n\n';
  html  += '<strong>Åtgärdens genomförande och utfall:</strong>\n';
  plain += 'Åtgärdens genomförande och utfall:\n';
  html  += '[Beskriv hur åtgärden genomfördes och resultatet]\n\n';
  plain += '[Beskriv hur åtgärden genomfördes och resultatet]\n\n';

  const obs = 'Beakta Polismyndighetens rapportinstruktioner.';
  html  += `<span style="color:var(--text3);font-style:italic;">${obs}</span>`;
  plain += obs;

  el.innerHTML      = html;
  el.dataset.plain  = plain;
}

/* ═══════════════════════════════════════════════════
   COPY TO CLIPBOARD
═══════════════════════════════════════════════════ */
function copyOutput() {
  const el   = document.getElementById('output-txt');
  const text = el.dataset.plain || '';
  if (!text) return;

  const btn  = document.getElementById('btn-copy');
  const done = () => {
    btn.textContent = 'Kopierat! ✓';
    btn.classList.add('done');
    setTimeout(() => {
      btn.textContent = 'Kopiera rapportmall';
      btn.classList.remove('done');
    }, 2500);
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, callback) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try { document.execCommand('copy'); } catch(e) {}
  document.body.removeChild(ta);
  callback();
}
