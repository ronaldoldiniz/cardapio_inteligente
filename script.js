/* ============================================
   Café da Manhã Inteligente — script.js
   ============================================ */

// ---- Data ----

const FOODS = [
  // Bebidas
  { name: 'Café sem açúcar', group: 'bebida', kcal: 5, emoji: '☕', note: 'Praticamente zero calorias, rico em cafeína.' },
  { name: 'Café com leite', group: 'bebida', kcal: 80, emoji: '☕', note: 'Fonte de cálcio quando feito com leite.' },
  { name: 'Chá natural', group: 'bebida', kcal: 5, emoji: '🍵', note: 'Hidratação leve, pode ter antioxidantes.' },
  { name: 'Suco natural sem açúcar', group: 'bebida', kcal: 90, emoji: '🧃', note: 'Vitaminas naturais, evite coar para manter fibras.' },
  { name: 'Água saborizada com frutas', group: 'bebida', kcal: 10, emoji: '💧', note: 'Hidratação com sabor, sem calorias significativas.' },

  // Carboidratos
  { name: 'Pão integral', group: 'carboidrato', kcal: 140, emoji: '🍞', note: 'Fonte de fibras e energia de liberação lenta.' },
  { name: 'Tapioca', group: 'carboidrato', kcal: 130, emoji: '🫓', note: 'Energia rápida, sem glúten.' },
  { name: 'Cuscuz', group: 'carboidrato', kcal: 150, emoji: '🌽', note: 'Tradicional, rico em carboidratos complexos.' },
  { name: 'Aveia', group: 'carboidrato', kcal: 120, emoji: '🥣', note: 'Rica em fibras solúveis, ótima para saciedade.' },
  { name: 'Batata doce', group: 'carboidrato', kcal: 100, emoji: '🍠', note: 'Baixo índice glicêmico, rica em vitamina A.' },

  // Proteínas
  { name: 'Ovo mexido ou cozido', group: 'proteina', kcal: 140, emoji: '🥚', note: 'Proteína completa, rico em colina.' },
  { name: 'Queijo branco', group: 'proteina', kcal: 110, emoji: '🧀', note: 'Proteína e cálcio, menos gordura que amarelos.' },
  { name: 'Iogurte natural', group: 'proteina', kcal: 100, emoji: '🥛', note: 'Probióticos e proteína, prefira sem açúcar.' },
  { name: 'Pasta de frango', group: 'proteina', kcal: 120, emoji: '🍗', note: 'Proteína magra, boa para saciedade.' },
  { name: 'Atum', group: 'proteina', kcal: 130, emoji: '🐟', note: 'Rico em ômega-3 e proteína.' },

  // Frutas
  { name: 'Banana', group: 'fruta', kcal: 90, emoji: '🍌', note: 'Energia rápida, rica em potássio.' },
  { name: 'Mamão', group: 'fruta', kcal: 45, emoji: '🥭', note: 'Rica em fibras e enzimas digestivas.' },
  { name: 'Maçã', group: 'fruta', kcal: 55, emoji: '🍎', note: 'Rica em fibras, boa para saciedade.' },
  { name: 'Morango', group: 'fruta', kcal: 35, emoji: '🍓', note: 'Baixa caloria, rico em vitamina C.' },
  { name: 'Melão', group: 'fruta', kcal: 40, emoji: '🍈', note: 'Hidratante, leve e rico em vitaminas.' },
];

const COMBINATIONS = [
  {
    name: 'Clássico Brasileiro',
    items: ['Pão integral', 'Ovo mexido ou cozido', 'Mamão'],
    drink: 'Café sem açúcar',
    profiles: ['rápido'],
  },
  {
    name: 'Bowl Energético',
    items: ['Aveia', 'Iogurte natural', 'Banana'],
    drink: 'Chá natural',
    profiles: ['leve', 'proteico'],
  },
  {
    name: 'Nordestino Leve',
    items: ['Tapioca', 'Queijo branco', 'Maçã'],
    drink: 'Suco natural sem açúcar',
    profiles: ['regional', 'sem_lactose'],
  },
  {
    name: 'Reforço Matinal',
    items: ['Cuscuz', 'Ovo mexido ou cozido', 'Mamão'],
    drink: 'Água saborizada com frutas',
    profiles: ['regional', 'proteico', 'maior_saciedade'],
  },
  {
    name: 'Proteico Fit',
    items: ['Batata doce', 'Ovo mexido ou cozido', 'Morango'],
    drink: 'Chá natural',
    profiles: ['proteico', 'maior_saciedade'],
  },
  {
    name: 'Mediterrâneo Simples',
    items: ['Tapioca', 'Atum', 'Maçã'],
    drink: 'Água saborizada com frutas',
    profiles: ['proteico', 'sem_lactose'],
  },
  {
    name: 'Regional Completo',
    items: ['Cuscuz', 'Queijo branco', 'Melão'],
    drink: 'Café com leite',
    profiles: ['regional', 'maior_saciedade'],
  },
  {
    name: 'Funcional Berry',
    items: ['Aveia', 'Iogurte natural', 'Morango'],
    drink: 'Chá natural',
    profiles: ['leve', 'proteico'],
  },
  {
    name: 'Saciedade Total',
    items: ['Pão integral', 'Pasta de frango', 'Banana'],
    drink: 'Café sem açúcar',
    profiles: ['proteico', 'maior_saciedade', 'rápido'],
  },
  {
    name: 'Domingo Especial',
    items: ['Tapioca', 'Ovo mexido ou cozido', 'Banana'],
    drink: 'Café com leite',
    profiles: ['regional', 'rápido'],
  },
];

const WEEKLY_MENU = [
  { day: 'Segunda', items: ['Pão integral', 'Ovo mexido ou cozido', 'Mamão'], drink: 'Café sem açúcar' },
  { day: 'Terça', items: ['Aveia', 'Iogurte natural', 'Banana'], drink: 'Chá natural' },
  { day: 'Quarta', items: ['Tapioca', 'Queijo branco', 'Maçã'], drink: 'Suco natural sem açúcar' },
  { day: 'Quinta', items: ['Cuscuz', 'Ovo mexido ou cozido', 'Melão'], drink: 'Água saborizada com frutas' },
  { day: 'Sexta', items: ['Pão integral', 'Pasta de frango', 'Morango'], drink: 'Café sem açúcar' },
  { day: 'Sábado', items: ['Tapioca', 'Ovo mexido ou cozido', 'Banana'], drink: 'Chá natural' },
  { day: 'Domingo', items: ['Aveia', 'Iogurte natural', 'Maçã'], drink: 'Café com leite' },
];

const TIPS = [
  { emoji: '🚫', text: 'Evite excesso de açúcar no café da manhã. Prefira adoçar com frutas naturais.' },
  { emoji: '🥦', text: 'Prefira alimentos in natura ou minimamente processados.' },
  { emoji: '⚠️', text: 'Reduza embutidos e ultraprocessados como presunto, salsicha e cereais açucarados.' },
  { emoji: '💪', text: 'Inclua uma fonte de proteína para melhorar a saciedade e manter a energia estável.' },
  { emoji: '🍇', text: 'Varie as frutas durante a semana para obter diferentes vitaminas e minerais.' },
  { emoji: '💧', text: 'Hidrate-se ao longo do dia. A água é essencial para todas as funções do corpo.' },
  { emoji: '⚖️', text: 'Ajuste as porções conforme sua rotina, fome e objetivo. Não existe porção universal.' },
];

const GROUPS_ORDER = ['bebida', 'carboidrato', 'proteina', 'fruta'];
const GROUP_LABELS = { bebida: 'Bebidas', carboidrato: 'Carboidratos', proteina: 'Proteínas', fruta: 'Frutas' };
const GROUP_EMOJIS = { bebida: '☕', carboidrato: '🍞', proteina: '🥚', fruta: '🍎' };

const PROFILE_LABELS = {
  todos: 'Todos',
  leve: 'Leve',
  proteico: 'Proteico',
  sem_lactose: 'Sem Lactose',
  regional: 'Regional',
  rápido: 'Rápido',
  maior_saciedade: 'Maior Saciedade',
};

// ---- Helpers ----

function findFood(name) {
  return FOODS.find(f => f.name === name);
}

function calcCombinationKcal(items, drink) {
  let total = 0;
  items.forEach(name => {
    const f = findFood(name);
    if (f) total += f.kcal;
  });
  const d = findFood(drink);
  if (d) total += d.kcal;
  return total;
}

function getClassification(kcal) {
  if (kcal <= 250) return { label: 'Leve', cssClass: 'badge-leve', emoji: '🌿' };
  if (kcal <= 450) return { label: 'Equilibrado', cssClass: 'badge-equilibrado', emoji: '⚖️' };
  return { label: 'Reforçado', cssClass: 'badge-reforcado', emoji: '🔥' };
}

function getTip(kcal) {
  if (kcal <= 250) return '💡 Dica: sua refeição está leve. Considere incluir uma proteína ou carboidrato para ter mais energia ao longo da manhã.';
  if (kcal <= 450) return '🎉 Parabéns! Combinação equilibrada — ótima para manter energia e saciedade.';
  return '💡 Dica: a refeição está mais reforçada. Considere reduzir a porção ou trocar a bebida por uma opção sem açúcar.';
}

// ---- DOM Ready ----

document.addEventListener('DOMContentLoaded', () => {
  renderFoodGuide();
  renderBuilder();
  renderSuggestions('todos');
  renderWeeklyMenu();
  renderTips();
  setupFilters();
  setupCalculator();
  setupNavbar();
  setupSmoothScroll();
  setupScrollAnimations();
});

// ---- Navbar ----

function setupNavbar() {
  const toggle = document.getElementById('nav-toggle');
  const navbar = document.getElementById('navbar');
  if (!toggle || !navbar) return;
  toggle.addEventListener('click', () => navbar.classList.toggle('nav-open'));

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });
}

// ---- Smooth scroll ----

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ---- Scroll animations ----

function setupScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(el => observer.observe(el));
}

// ---- Food Guide ----

function renderFoodGuide() {
  const container = document.getElementById('food-guide-cards');
  const tabsContainer = document.getElementById('food-guide-tabs');
  if (!container || !tabsContainer) return;

  // Tabs
  let activeGroup = 'bebida';
  tabsContainer.innerHTML = GROUPS_ORDER.map(g =>
    `<button class="food-group-tab${g === activeGroup ? ' active' : ''}" data-group="${g}" aria-label="Filtrar ${GROUP_LABELS[g]}">${GROUP_EMOJIS[g]} ${GROUP_LABELS[g]}</button>`
  ).join('');

  function renderCards(group) {
    const foods = FOODS.filter(f => f.group === group);
    container.innerHTML = foods.map(f => `
      <div class="food-card">
        <div class="food-emoji">${f.emoji}</div>
        <div class="food-name">${f.name}</div>
        <div class="food-group-label">${GROUP_LABELS[f.group]}</div>
        <div class="food-kcal">~${f.kcal} kcal</div>
        <div class="food-note">${f.note}</div>
      </div>
    `).join('');
  }

  renderCards(activeGroup);

  tabsContainer.addEventListener('click', e => {
    const tab = e.target.closest('.food-group-tab');
    if (!tab) return;
    activeGroup = tab.dataset.group;
    tabsContainer.querySelectorAll('.food-group-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCards(activeGroup);
  });
}

// ---- Builder ----

const selection = { bebida: null, carboidrato: null, proteina: null, fruta: null };

function renderBuilder() {
  const container = document.getElementById('builder-groups');
  if (!container) return;

  container.innerHTML = GROUPS_ORDER.map(group => {
    const foods = FOODS.filter(f => f.group === group);
    return `
      <div class="builder-group">
        <h3>${GROUP_EMOJIS[group]} ${GROUP_LABELS[group]}</h3>
        <div class="builder-options" role="radiogroup" aria-label="Selecione ${GROUP_LABELS[group]}">
          ${foods.map(f => `
            <button class="builder-option" data-group="${group}" data-name="${f.name}" aria-pressed="false" type="button">
              ${f.emoji} ${f.name} <span style="opacity:.6;font-size:.75rem">(${f.kcal})</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.addEventListener('click', e => {
    const opt = e.target.closest('.builder-option');
    if (!opt) return;
    const group = opt.dataset.group;
    const name = opt.dataset.name;

    // Toggle selection
    if (selection[group] === name) {
      selection[group] = null;
      opt.classList.remove('selected');
      opt.setAttribute('aria-pressed', 'false');
    } else {
      // Deselect previous in same group
      container.querySelectorAll(`.builder-option[data-group="${group}"]`).forEach(btn => {
        btn.classList.remove('selected');
        btn.setAttribute('aria-pressed', 'false');
      });
      selection[group] = name;
      opt.classList.add('selected');
      opt.setAttribute('aria-pressed', 'true');
    }

    updateBuilderResult();
  });

  // Clear button
  document.getElementById('btn-clear')?.addEventListener('click', clearSelection);
  // Random button
  document.getElementById('btn-random')?.addEventListener('click', generateRandom);
}

function clearSelection() {
  GROUPS_ORDER.forEach(g => selection[g] = null);
  document.querySelectorAll('.builder-option').forEach(btn => {
    btn.classList.remove('selected');
    btn.setAttribute('aria-pressed', 'false');
  });
  updateBuilderResult();
}

function generateRandom() {
  GROUPS_ORDER.forEach(group => {
    const foods = FOODS.filter(f => f.group === group);
    selection[group] = foods[Math.floor(Math.random() * foods.length)].name;
  });

  // Attempt balanced combo (251-450 kcal) — up to 20 tries
  let attempts = 0;
  while (attempts < 20) {
    const totalKcal = GROUPS_ORDER.reduce((sum, g) => {
      const f = findFood(selection[g]);
      return sum + (f ? f.kcal : 0);
    }, 0);
    if (totalKcal >= 251 && totalKcal <= 450) break;
    // Re-randomize one group
    const rg = GROUPS_ORDER[Math.floor(Math.random() * GROUPS_ORDER.length)];
    const foods = FOODS.filter(f => f.group === rg);
    selection[rg] = foods[Math.floor(Math.random() * foods.length)].name;
    attempts++;
  }

  // Update UI
  document.querySelectorAll('.builder-option').forEach(btn => {
    const isSelected = selection[btn.dataset.group] === btn.dataset.name;
    btn.classList.toggle('selected', isSelected);
    btn.setAttribute('aria-pressed', String(isSelected));
  });

  updateBuilderResult();
}

function updateBuilderResult() {
  const resultEl = document.getElementById('builder-result');
  if (!resultEl) return;

  const selected = GROUPS_ORDER.filter(g => selection[g]);
  if (selected.length === 0) {
    resultEl.className = 'builder-result empty';
    resultEl.innerHTML = '<p>Selecione pelo menos um alimento de cada grupo para ver o resumo.</p>';
    return;
  }

  const totalKcal = GROUPS_ORDER.reduce((sum, g) => {
    const f = findFood(selection[g]);
    return sum + (f ? f.kcal : 0);
  }, 0);

  const cls = getClassification(totalKcal);
  const tip = getTip(totalKcal);
  const itemNames = GROUPS_ORDER
    .filter(g => selection[g])
    .map(g => {
      const f = findFood(selection[g]);
      return f ? `${f.emoji} ${f.name}` : '';
    })
    .join(' + ');

  resultEl.className = 'builder-result';
  resultEl.innerHTML = `
    <div class="result-label">Sua combinação</div>
    <div class="result-items">${itemNames}</div>
    <div class="result-kcal">${totalKcal} kcal</div>
    <span class="result-badge ${cls.cssClass}">${cls.emoji} ${cls.label}</span>
    <p class="result-tip">${tip}</p>
  `;

  // Update calculator comparison if visible
  updateCalcComparison();
}

// ---- Calculator ----

function setupCalculator() {
  const form = document.getElementById('calc-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    calculateEnergy();
  });
}

function calculateEnergy() {
  const sexo = document.getElementById('calc-sexo')?.value;
  const idade = parseFloat(document.getElementById('calc-idade')?.value);
  const peso = parseFloat(document.getElementById('calc-peso')?.value);
  const altura = parseFloat(document.getElementById('calc-altura')?.value);
  const atividade = parseFloat(document.getElementById('calc-atividade')?.value);
  const objetivo = document.getElementById('calc-objetivo')?.value;

  // Validation
  const fields = [
    { id: 'calc-idade', val: idade, min: 1, max: 120 },
    { id: 'calc-peso', val: peso, min: 10, max: 400 },
    { id: 'calc-altura', val: altura, min: 50, max: 280 },
  ];
  let valid = true;
  fields.forEach(({ id, val, min, max }) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isNaN(val) || val < min || val > max) {
      el.classList.add('invalid');
      valid = false;
    } else {
      el.classList.remove('invalid');
    }
  });

  const errorEl = document.getElementById('calc-error');
  if (!valid) {
    if (errorEl) {
      errorEl.textContent = 'Preencha todos os campos corretamente.';
      errorEl.style.display = 'block';
    }
    return;
  }
  if (errorEl) errorEl.style.display = 'none';

  // Mifflin-St Jeor
  let tmb;
  if (sexo === 'masculino') {
    tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
  }

  const get = tmb * atividade;

  let meta;
  if (objetivo === 'reducao') meta = get - 300;
  else if (objetivo === 'ganho') meta = get + 300;
  else meta = get;

  const faixaMin = Math.round(meta * 0.20);
  const faixaMax = Math.round(meta * 0.25);

  // Show results
  const resultEl = document.getElementById('calc-result');
  if (!resultEl) return;
  resultEl.classList.add('visible');

  document.getElementById('stat-tmb').textContent = `${Math.round(tmb)} kcal`;
  document.getElementById('stat-get').textContent = `${Math.round(get)} kcal`;
  document.getElementById('stat-meta').textContent = `${Math.round(meta)} kcal`;
  document.getElementById('stat-faixa').textContent = `${faixaMin}–${faixaMax} kcal`;

  // Store for comparison
  resultEl.dataset.faixaMin = faixaMin;
  resultEl.dataset.faixaMax = faixaMax;

  updateCalcComparison();
}

function updateCalcComparison() {
  const resultEl = document.getElementById('calc-result');
  const compEl = document.getElementById('calc-comparison');
  if (!resultEl || !compEl) return;

  const faixaMin = parseInt(resultEl.dataset.faixaMin);
  const faixaMax = parseInt(resultEl.dataset.faixaMax);
  if (isNaN(faixaMin) || isNaN(faixaMax)) {
    compEl.style.display = 'none';
    return;
  }

  const totalKcal = GROUPS_ORDER.reduce((sum, g) => {
    const f = findFood(selection[g]);
    return sum + (f ? f.kcal : 0);
  }, 0);

  if (totalKcal === 0) {
    compEl.style.display = 'none';
    return;
  }

  compEl.style.display = 'block';
  if (totalKcal < faixaMin) {
    compEl.className = 'calc-comparison abaixo';
    compEl.textContent = `⚠️ Seu café da manhã (${totalKcal} kcal) está abaixo da faixa sugerida (${faixaMin}–${faixaMax} kcal).`;
  } else if (totalKcal > faixaMax) {
    compEl.className = 'calc-comparison acima';
    compEl.textContent = `🔺 Seu café da manhã (${totalKcal} kcal) está acima da faixa sugerida (${faixaMin}–${faixaMax} kcal).`;
  } else {
    compEl.className = 'calc-comparison dentro';
    compEl.textContent = `✅ Seu café da manhã (${totalKcal} kcal) está dentro da faixa sugerida (${faixaMin}–${faixaMax} kcal)!`;
  }
}

// ---- Suggestions ----

function renderSuggestions(filter) {
  const container = document.getElementById('suggestions-grid');
  if (!container) return;

  const filtered = filter === 'todos'
    ? COMBINATIONS
    : COMBINATIONS.filter(c => c.profiles.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--clr-text-muted);grid-column:1/-1;">Nenhuma combinação encontrada para este filtro.</p>';
    return;
  }

  container.innerHTML = filtered.map(c => {
    const kcal = calcCombinationKcal(c.items, c.drink);
    const cls = getClassification(kcal);
    const profileTags = c.profiles.map(p => `<span class="suggestion-tag">${PROFILE_LABELS[p] || p}</span>`).join('');
    return `
      <article class="suggestion-card">
        <div class="suggestion-name">${c.name}</div>
        <div class="suggestion-items">${c.items.join(' + ')}</div>
        <div class="suggestion-drink">🥤 ${c.drink}</div>
        <div class="suggestion-meta">
          <span class="suggestion-kcal">~${kcal} kcal</span>
          <span class="result-badge ${cls.cssClass}" style="font-size:.7rem;padding:.15rem .5rem;">${cls.emoji} ${cls.label}</span>
          ${profileTags}
        </div>
      </article>
    `;
  }).join('');
}

function setupFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  bar.innerHTML = Object.entries(PROFILE_LABELS).map(([key, label]) =>
    `<button class="filter-btn${key === 'todos' ? ' active' : ''}" data-filter="${key}" type="button">${label}</button>`
  ).join('');

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSuggestions(btn.dataset.filter);
  });
}

// ---- Weekly Menu ----

function renderWeeklyMenu() {
  const container = document.getElementById('weekly-grid');
  if (!container) return;

  container.innerHTML = WEEKLY_MENU.map(w => `
    <div class="weekly-card">
      <div class="weekly-day">${w.day}</div>
      <div class="weekly-info">
        <div class="weekly-items">${w.items.join(' + ')}</div>
        <div class="weekly-drink">🥤 ${w.drink}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('btn-shopping')?.addEventListener('click', generateShoppingList);
}

function generateShoppingList() {
  const listEl = document.getElementById('shopping-list');
  if (!listEl) return;

  const grouped = { bebida: new Set(), carboidrato: new Set(), proteina: new Set(), fruta: new Set() };
  WEEKLY_MENU.forEach(w => {
    w.items.forEach(name => {
      const f = findFood(name);
      if (f) grouped[f.group].add(f.name);
    });
    const d = findFood(w.drink);
    if (d) grouped[d.group].add(d.name);
  });

  const html = GROUPS_ORDER.map(g => {
    const items = [...grouped[g]];
    if (items.length === 0) return '';
    return `
      <div class="shopping-category">
        <h4>${GROUP_EMOJIS[g]} ${GROUP_LABELS[g]}</h4>
        <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
    `;
  }).join('');

  listEl.innerHTML = `<h3>🛒 Lista de Compras Semanal</h3>${html}`;
  listEl.classList.add('visible');
  listEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- Tips ----

function renderTips() {
  const container = document.getElementById('tips-grid');
  if (!container) return;

  container.innerHTML = TIPS.map(t => `
    <div class="tip-card">
      <span class="tip-emoji">${t.emoji}</span>
      <p>${t.text}</p>
    </div>
  `).join('');
}
