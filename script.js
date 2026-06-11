/* ============================================
   Café da Manhã Inteligente — script.js
   Modernized · Theme · Favorites · Toast · Share
   ============================================ */

// ---- Data ----

const FOODS = [
  { name: 'Café sem açúcar', group: 'bebida', kcal: 5, emoji: '☕', note: 'Praticamente zero calorias, rico em cafeína.' },
  { name: 'Café com leite', group: 'bebida', kcal: 80, emoji: '☕', note: 'Fonte de cálcio quando feito com leite.' },
  { name: 'Chá natural', group: 'bebida', kcal: 5, emoji: '🍵', note: 'Hidratação leve, pode ter antioxidantes.' },
  { name: 'Suco natural sem açúcar', group: 'bebida', kcal: 90, emoji: '🧃', note: 'Vitaminas naturais, evite coar para manter fibras.' },
  { name: 'Água saborizada com frutas', group: 'bebida', kcal: 10, emoji: '💧', note: 'Hidratação com sabor, sem calorias significativas.' },

  { name: 'Pão integral', group: 'carboidrato', kcal: 140, emoji: '🍞', note: 'Fonte de fibras e energia de liberação lenta.' },
  { name: 'Tapioca', group: 'carboidrato', kcal: 130, emoji: '🫓', note: 'Energia rápida, sem glúten.' },
  { name: 'Cuscuz', group: 'carboidrato', kcal: 150, emoji: '🌽', note: 'Tradicional, rico em carboidratos complexos.' },
  { name: 'Aveia', group: 'carboidrato', kcal: 120, emoji: '🥣', note: 'Rica em fibras solúveis, ótima para saciedade.' },
  { name: 'Batata doce', group: 'carboidrato', kcal: 100, emoji: '🍠', note: 'Baixo índice glicêmico, rica em vitamina A.' },

  { name: 'Ovo mexido ou cozido', group: 'proteina', kcal: 140, emoji: '🥚', note: 'Proteína completa, rico em colina.' },
  { name: 'Queijo branco', group: 'proteina', kcal: 110, emoji: '🧀', note: 'Proteína e cálcio, menos gordura que amarelos.' },
  { name: 'Iogurte natural', group: 'proteina', kcal: 100, emoji: '🥛', note: 'Probióticos e proteína, prefira sem açúcar.' },
  { name: 'Pasta de frango', group: 'proteina', kcal: 120, emoji: '🍗', note: 'Proteína magra, boa para saciedade.' },
  { name: 'Atum', group: 'proteina', kcal: 130, emoji: '🐟', note: 'Rico em ômega-3 e proteína.' },

  { name: 'Banana', group: 'fruta', kcal: 90, emoji: '🍌', note: 'Energia rápida, rica em potássio.' },
  { name: 'Mamão', group: 'fruta', kcal: 45, emoji: '🥭', note: 'Rica em fibras e enzimas digestivas.' },
  { name: 'Maçã', group: 'fruta', kcal: 55, emoji: '🍎', note: 'Rica em fibras, boa para saciedade.' },
  { name: 'Morango', group: 'fruta', kcal: 35, emoji: '🍓', note: 'Baixa caloria, rico em vitamina C.' },
  { name: 'Melão', group: 'fruta', kcal: 40, emoji: '🍈', note: 'Hidratante, leve e rico em vitaminas.' },
];

const COMBINATIONS = [
  { name: 'Clássico Brasileiro', items: ['Pão integral', 'Ovo mexido ou cozido', 'Mamão'], drink: 'Café sem açúcar', profiles: ['rápido'] },
  { name: 'Bowl Energético', items: ['Aveia', 'Iogurte natural', 'Banana'], drink: 'Chá natural', profiles: ['leve', 'proteico'] },
  { name: 'Nordestino Leve', items: ['Tapioca', 'Queijo branco', 'Maçã'], drink: 'Suco natural sem açúcar', profiles: ['regional', 'sem_lactose'] },
  { name: 'Reforço Matinal', items: ['Cuscuz', 'Ovo mexido ou cozido', 'Mamão'], drink: 'Água saborizada com frutas', profiles: ['regional', 'proteico', 'maior_saciedade'] },
  { name: 'Proteico Fit', items: ['Batata doce', 'Ovo mexido ou cozido', 'Morango'], drink: 'Chá natural', profiles: ['proteico', 'maior_saciedade'] },
  { name: 'Mediterrâneo Simples', items: ['Tapioca', 'Atum', 'Maçã'], drink: 'Água saborizada com frutas', profiles: ['proteico', 'sem_lactose'] },
  { name: 'Regional Completo', items: ['Cuscuz', 'Queijo branco', 'Melão'], drink: 'Café com leite', profiles: ['regional', 'maior_saciedade'] },
  { name: 'Funcional Berry', items: ['Aveia', 'Iogurte natural', 'Morango'], drink: 'Chá natural', profiles: ['leve', 'proteico'] },
  { name: 'Saciedade Total', items: ['Pão integral', 'Pasta de frango', 'Banana'], drink: 'Café sem açúcar', profiles: ['proteico', 'maior_saciedade', 'rápido'] },
  { name: 'Domingo Especial', items: ['Tapioca', 'Ovo mexido ou cozido', 'Banana'], drink: 'Café com leite', profiles: ['regional', 'rápido'] },
];

let weeklyMenu = [
  { day: 'Segunda', items: ['Pão integral', 'Ovo mexido ou cozido', 'Mamão'], drink: 'Café sem açúcar' },
  { day: 'Terça', items: ['Aveia', 'Iogurte natural', 'Banana'], drink: 'Chá natural' },
  { day: 'Quarta', items: ['Tapioca', 'Queijo branco', 'Maçã'], drink: 'Suco natural sem açúcar' },
  { day: 'Quinta', items: ['Cuscuz', 'Ovo mexido ou cozido', 'Melão'], drink: 'Água saborizada com frutas' },
  { day: 'Sexta', items: ['Pão integral', 'Pasta de frango', 'Morango'], drink: 'Café sem açúcar' },
  { day: 'Sábado', items: ['Tapioca', 'Ovo mexido ou cozido', 'Banana'], drink: 'Chá natural' },
  { day: 'Domingo', items: ['Aveia', 'Iogurte natural', 'Maçã'], drink: 'Café com leite' },
];

const TIPS = [
  { emoji: '🚫', title: 'Reduza o açúcar', text: 'Evite excesso de açúcar no café da manhã. Prefira adoçar com frutas naturais.' },
  { emoji: '🥦', title: 'Alimentos in natura', text: 'Prefira alimentos in natura ou minimamente processados sempre que possível.' },
  { emoji: '⚠️', title: 'Evite ultraprocessados', text: 'Reduza embutidos e ultraprocessados como presunto, salsicha e cereais açucarados.' },
  { emoji: '💪', title: 'Inclua proteína', text: 'Inclua uma fonte de proteína para melhorar a saciedade e manter a energia estável.' },
  { emoji: '🍇', title: 'Varie as frutas', text: 'Varie as frutas durante a semana para obter diferentes vitaminas e minerais.' },
  { emoji: '💧', title: 'Hidrate-se', text: 'Hidrate-se ao longo do dia. A água é essencial para todas as funções do corpo.' },
  { emoji: '⚖️', title: 'Ajuste porções', text: 'Ajuste as porções conforme sua rotina, fome e objetivo. Não existe porção universal.' },
];

const GROUPS_ORDER = ['bebida', 'carboidrato', 'proteina', 'fruta'];
const GROUP_LABELS = { bebida: 'Bebidas', carboidrato: 'Carboidratos', proteina: 'Proteínas', fruta: 'Frutas' };
const GROUP_EMOJIS = { bebida: '☕', carboidrato: '🍞', proteina: '🥚', fruta: '🍎' };
const STEP_LABELS = { bebida: 'Bebida', carboidrato: 'Carboidrato', proteina: 'Proteína', fruta: 'Fruta' };

const PROFILE_LABELS = {
  todos: 'Todos', leve: 'Leve', proteico: 'Proteico',
  sem_lactose: 'Sem Lactose', regional: 'Regional',
  rápido: 'Rápido', maior_saciedade: 'Maior Saciedade',
};

const MAX_KCAL_BAR = 700;

// ---- Helpers ----

function findFood(name) { return FOODS.find(f => f.name === name); }

function calcCombinationKcal(items, drink) {
  let t = 0;
  items.forEach(n => { const f = findFood(n); if (f) t += f.kcal; });
  const d = findFood(drink);
  if (d) t += d.kcal;
  return t;
}

function getClassification(kcal) {
  if (kcal <= 250) return { label: 'Leve', cssClass: 'badge-leve', barClass: 'leve', emoji: '🌿' };
  if (kcal <= 450) return { label: 'Equilibrado', cssClass: 'badge-equilibrado', barClass: 'equilibrado', emoji: '⚖️' };
  return { label: 'Reforçado', cssClass: 'badge-reforcado', barClass: 'reforcado', emoji: '🔥' };
}

function getTip(kcal) {
  if (kcal <= 250) return '💡 Sua refeição está leve. Considere incluir proteína ou carboidrato para mais energia.';
  if (kcal <= 450) return '🎉 Parabéns! Combinação equilibrada — ótima para energia e saciedade.';
  return '💡 Refeição mais reforçada. Considere reduzir a porção ou trocar a bebida por opção sem açúcar.';
}

function getBuilderTotalKcal() {
  return GROUPS_ORDER.reduce((sum, g) => {
    const f = findFood(selection[g]);
    return sum + (f ? f.kcal : 0);
  }, 0);
}

// ---- Toast ----

function showToast(message, icon = '✅') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ---- Theme ----

function setupTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  updateThemeIcon(btn);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(btn);
  });
}

function updateThemeIcon(btn) {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.setAttribute('aria-label', isDark ? 'Modo claro' : 'Modo escuro');
}

// ---- Favorites (localStorage) ----

function getFavorites() {
  try { return JSON.parse(localStorage.getItem('favorites') || '[]'); } catch { return []; }
}

function saveFavorites(favs) { localStorage.setItem('favorites', JSON.stringify(favs)); }

function addFavorite() {
  const selected = GROUPS_ORDER.filter(g => selection[g]);
  if (selected.length === 0) { showToast('Selecione alimentos primeiro.', '⚠️'); return; }
  const combo = {
    items: GROUPS_ORDER.filter(g => selection[g]).map(g => selection[g]),
    kcal: getBuilderTotalKcal(),
    date: new Date().toLocaleDateString('pt-BR'),
  };
  const favs = getFavorites();
  favs.unshift(combo);
  if (favs.length > 20) favs.pop();
  saveFavorites(favs);
  showToast('Combinação salva nos favoritos!', '⭐');
}

function renderFavoritesModal() {
  const content = document.getElementById('fav-content');
  if (!content) return;
  const favs = getFavorites();
  if (favs.length === 0) {
    content.innerHTML = '<div class="fav-empty">Nenhuma combinação salva ainda.</div>';
    return;
  }
  content.innerHTML = favs.map((f, i) => `
    <div class="fav-item">
      <div>
        <div class="fav-item-info">${f.items.join(' + ')}</div>
        <div class="fav-item-kcal">${f.kcal} kcal · ${f.date}</div>
      </div>
      <button class="btn btn-ghost btn-sm" data-fav-del="${i}" type="button" aria-label="Remover">🗑️</button>
    </div>
  `).join('');
}

function setupFavoritesModal() {
  const overlay = document.getElementById('fav-modal');
  const openBtn = document.getElementById('btn-favorites');
  const closeBtn = document.getElementById('fav-close');
  if (!overlay) return;

  openBtn?.addEventListener('click', () => { renderFavoritesModal(); overlay.classList.add('open'); });
  closeBtn?.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

  document.getElementById('fav-content')?.addEventListener('click', e => {
    const del = e.target.closest('[data-fav-del]');
    if (!del) return;
    const favs = getFavorites();
    favs.splice(parseInt(del.dataset.favDel), 1);
    saveFavorites(favs);
    renderFavoritesModal();
    showToast('Removido dos favoritos.', '🗑️');
  });
}

// ---- Share / Copy ----

async function shareCombination() {
  const selected = GROUPS_ORDER.filter(g => selection[g]);
  if (selected.length === 0) { showToast('Monte uma combinação primeiro.', '⚠️'); return; }
  const items = selected.map(g => { const f = findFood(selection[g]); return f ? `${f.emoji} ${f.name}` : ''; }).join('\n');
  const text = `☕ Meu Café da Manhã Inteligente\n${items}\n📊 ${getBuilderTotalKcal()} kcal estimadas`;

  if (navigator.share) {
    try { await navigator.share({ title: 'Café da Manhã Inteligente', text }); } catch {}
  } else {
    await copyToClipboard(text);
    showToast('Combinação copiada!', '📋');
  }
}

async function copyToClipboard(text) {
  try { await navigator.clipboard.writeText(text); } catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

// ---- DOM Ready ----

document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  renderFoodGuide();
  renderBuilder();
  renderSuggestions('todos');
  renderWeeklyMenu();
  renderTips();
  setupFilters();
  setupCalculator();
  setupNavbar();
  setupHeroCards();
  setupFavoritesModal();
  setupScrollAnimations();
  restoreLastSelection();
});

// ---- Navbar ----

function setupNavbar() {
  const toggle = document.getElementById('nav-toggle');
  const navbar = document.getElementById('navbar');
  if (!toggle || !navbar) return;
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', navbar.classList.contains('nav-open'));
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });
}

// ---- Hero Cards ----

function setupHeroCards() {
  document.querySelectorAll('.hero-stat[data-target]').forEach(stat => {
    stat.addEventListener('click', () => {
      const target = document.getElementById(stat.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  }, { threshold: 0.08 });
  document.querySelectorAll('.section').forEach(el => observer.observe(el));
}

const PAPAYA_SVG = `<svg class="papaya-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,2 C15,2 18,5 18,10 C18,15.5 15,22 12,22 C9,22 6,15.5 6,10 C6,5 9,2 12,2 Z" fill="#F5B041"/><path d="M12,4 C14,4 16,6.5 16,10.5 C16,15 14,20 12,20 C10,20 8,15 8,10.5 C8,6.5 10,4 12,4 Z" fill="#FF7043"/><path d="M12,7 C13.1,7 14,8.5 14,11 C14,13.5 13.1,16 12,16 C10.9,16 10,13.5 10,11 C10,8.5 10.9,7 12,7 Z" fill="#D84315"/><circle cx="12" cy="9" r="1" fill="#212121"/><circle cx="11.2" cy="10" r="0.9" fill="#212121"/><circle cx="12.8" cy="10" r="0.9" fill="#212121"/><circle cx="12" cy="11" r="1" fill="#212121"/><circle cx="11.2" cy="12" r="0.9" fill="#212121"/><circle cx="12.8" cy="12" r="0.9" fill="#212121"/><circle cx="12" cy="13" r="1" fill="#212121"/><circle cx="12" cy="14.2" r="0.8" fill="#212121"/></svg>`;

function getFoodEmojiHtml(f) {
  if (f.name === 'Mamão') return PAPAYA_SVG;
  return f.emoji;
}

// ---- Food Guide ----

function renderFoodGuide() {
  const container = document.getElementById('food-guide-cards');
  const tabsContainer = document.getElementById('food-guide-tabs');
  if (!container || !tabsContainer) return;

  let activeGroup = 'bebida';
  tabsContainer.innerHTML = GROUPS_ORDER.map(g =>
    `<button class="food-group-tab${g === activeGroup ? ' active' : ''}" data-group="${g}" aria-label="Filtrar ${GROUP_LABELS[g]}">${GROUP_EMOJIS[g]} ${GROUP_LABELS[g]}</button>`
  ).join('');

  function renderCards(group) {
    container.innerHTML = FOODS.filter(f => f.group === group).map(f => `
      <div class="food-card">
        <div class="food-emoji">${getFoodEmojiHtml(f)}</div>
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

  container.innerHTML = GROUPS_ORDER.map((group, idx) => {
    const foods = FOODS.filter(f => f.group === group);
    return `
      <div class="builder-group" id="builder-group-${group}">
        <h3>${GROUP_EMOJIS[group]} ${STEP_LABELS[group]} <span style="font-size:.75rem;opacity:.5;font-weight:400;">Etapa ${idx + 1}</span></h3>
        <div class="builder-options" role="radiogroup" aria-label="Selecione ${GROUP_LABELS[group]}">
          ${foods.map(f => `
            <button class="builder-option" data-group="${group}" data-name="${f.name}" aria-pressed="false" type="button">
              ${getFoodEmojiHtml(f)} ${f.name} <span class="opt-kcal">(${f.kcal})</span>
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

    if (selection[group] === name) {
      selection[group] = null;
      opt.classList.remove('selected');
      opt.setAttribute('aria-pressed', 'false');
    } else {
      container.querySelectorAll(`.builder-option[data-group="${group}"]`).forEach(btn => {
        btn.classList.remove('selected');
        btn.setAttribute('aria-pressed', 'false');
      });
      selection[group] = name;
      opt.classList.add('selected');
      opt.setAttribute('aria-pressed', 'true');
    }
    updateBuilderResult();
    updateProgressBar();
    saveLastSelection();
  });

  document.getElementById('btn-clear')?.addEventListener('click', clearSelection);
  document.getElementById('btn-random')?.addEventListener('click', generateRandom);
  document.getElementById('btn-add-fav')?.addEventListener('click', addFavorite);
  document.getElementById('btn-share')?.addEventListener('click', shareCombination);
}

function updateProgressBar() {
  GROUPS_ORDER.forEach((g, i) => {
    const step = document.getElementById(`progress-step-${i}`);
    if (!step) return;
    step.classList.toggle('done', !!selection[g]);
    step.classList.toggle('active', !selection[g] && (i === 0 || GROUPS_ORDER.slice(0, i).every(pg => selection[pg])));
  });
  // Lines
  GROUPS_ORDER.forEach((g, i) => {
    const line = document.getElementById(`progress-line-${i}`);
    if (line) line.classList.toggle('filled', !!selection[g]);
  });
}

function clearSelection() {
  GROUPS_ORDER.forEach(g => selection[g] = null);
  document.querySelectorAll('.builder-option').forEach(btn => {
    btn.classList.remove('selected');
    btn.setAttribute('aria-pressed', 'false');
  });
  updateBuilderResult();
  updateProgressBar();
  saveLastSelection();
  showToast('Seleção limpa.', '🗑️');
}

function generateRandom() {
  GROUPS_ORDER.forEach(group => {
    const foods = FOODS.filter(f => f.group === group);
    selection[group] = foods[Math.floor(Math.random() * foods.length)].name;
  });
  let attempts = 0;
  while (attempts < 25) {
    const total = getBuilderTotalKcal();
    if (total >= 251 && total <= 450) break;
    const rg = GROUPS_ORDER[Math.floor(Math.random() * GROUPS_ORDER.length)];
    const foods = FOODS.filter(f => f.group === rg);
    selection[rg] = foods[Math.floor(Math.random() * foods.length)].name;
    attempts++;
  }
  syncBuilderUI();
  showToast('Combinação equilibrada gerada!', '🎲');
}

function syncBuilderUI() {
  document.querySelectorAll('.builder-option').forEach(btn => {
    const isSelected = selection[btn.dataset.group] === btn.dataset.name;
    btn.classList.toggle('selected', isSelected);
    btn.setAttribute('aria-pressed', String(isSelected));
  });
  updateBuilderResult();
  updateProgressBar();
  saveLastSelection();
}

function updateBuilderResult() {
  const resultEl = document.getElementById('builder-result');
  if (!resultEl) return;

  const selected = GROUPS_ORDER.filter(g => selection[g]);
  if (selected.length === 0) {
    resultEl.className = 'builder-result empty';
    resultEl.innerHTML = '<p>Selecione alimentos para ver o resumo da combinação.</p>';
    return;
  }

  const totalKcal = getBuilderTotalKcal();
  const cls = getClassification(totalKcal);
  const tip = getTip(totalKcal);
  const barWidth = Math.min((totalKcal / MAX_KCAL_BAR) * 100, 100);

  const itemNames = selected.map(g => {
    const f = findFood(selection[g]);
    return f ? `${getFoodEmojiHtml(f)} ${f.name}` : '';
  }).join(' + ');

  resultEl.className = 'builder-result';
  resultEl.innerHTML = `
    <div class="result-label">Sua combinação</div>
    <div class="result-items">${itemNames}</div>
    <div class="result-kcal">${totalKcal} kcal</div>
    <span class="badge ${cls.cssClass}">${cls.emoji} ${cls.label}</span>
    <div class="energy-bar-container">
      <div class="energy-bar-bg">
        <div class="energy-bar-fill ${cls.barClass}" style="width:${barWidth}%"></div>
      </div>
      <div class="energy-bar-labels"><span>0</span><span>250</span><span>450</span><span>700+</span></div>
    </div>
    <p class="result-tip">${tip}</p>
  `;
  updateCalcComparison();
}

// Save/restore selection
function saveLastSelection() { localStorage.setItem('lastSelection', JSON.stringify(selection)); }
function restoreLastSelection() {
  try {
    const saved = JSON.parse(localStorage.getItem('lastSelection'));
    if (saved && typeof saved === 'object') {
      GROUPS_ORDER.forEach(g => { if (saved[g]) selection[g] = saved[g]; });
      syncBuilderUI();
    }
  } catch {}
}

// ---- Use suggestion ----

function useCombination(index) {
  const combo = COMBINATIONS[index];
  if (!combo) return;

  // Map items to groups
  combo.items.forEach(name => {
    const f = findFood(name);
    if (f) selection[f.group] = name;
  });
  const d = findFood(combo.drink);
  if (d) selection[d.group] = combo.drink;

  syncBuilderUI();
  document.getElementById('montar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast(`"${combo.name}" aplicada!`, '✨');
}

// ---- Calculator ----

function setupCalculator() {
  const form = document.getElementById('calc-form');
  if (!form) return;
  form.addEventListener('submit', e => { e.preventDefault(); calculateEnergy(); });
}

function calculateEnergy() {
  const sexo = document.getElementById('calc-sexo')?.value;
  const idade = parseFloat(document.getElementById('calc-idade')?.value);
  const peso = parseFloat(document.getElementById('calc-peso')?.value);
  const altura = parseFloat(document.getElementById('calc-altura')?.value);
  const atividade = parseFloat(document.getElementById('calc-atividade')?.value);
  const objetivo = document.getElementById('calc-objetivo')?.value;

  const fields = [
    { id: 'calc-idade', val: idade, min: 1, max: 120 },
    { id: 'calc-peso', val: peso, min: 10, max: 400 },
    { id: 'calc-altura', val: altura, min: 50, max: 280 },
  ];
  let valid = true;
  fields.forEach(({ id, val, min, max }) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isNaN(val) || val < min || val > max) { el.classList.add('invalid'); valid = false; }
    else el.classList.remove('invalid');
  });

  const errorEl = document.getElementById('calc-error');
  if (!valid) { if (errorEl) { errorEl.textContent = 'Preencha todos os campos corretamente.'; errorEl.style.display = 'block'; } return; }
  if (errorEl) errorEl.style.display = 'none';

  let tmb = sexo === 'masculino'
    ? 10 * peso + 6.25 * altura - 5 * idade + 5
    : 10 * peso + 6.25 * altura - 5 * idade - 161;

  const get = tmb * atividade;
  let meta = get;
  if (objetivo === 'reducao') meta = get - 300;
  else if (objetivo === 'ganho') meta = get + 300;

  const faixaMin = Math.round(meta * 0.20);
  const faixaMax = Math.round(meta * 0.25);

  const resultEl = document.getElementById('calc-result');
  if (!resultEl) return;
  resultEl.classList.add('visible');

  document.getElementById('stat-tmb').textContent = `${Math.round(tmb)} kcal`;
  document.getElementById('stat-get').textContent = `${Math.round(get)} kcal`;
  document.getElementById('stat-meta').textContent = `${Math.round(meta)} kcal`;
  document.getElementById('stat-faixa').textContent = `${faixaMin}–${faixaMax} kcal`;

  resultEl.dataset.faixaMin = faixaMin;
  resultEl.dataset.faixaMax = faixaMax;
  updateCalcComparison();
  showToast('Cálculo realizado!', '📊');
}

function updateCalcComparison() {
  const resultEl = document.getElementById('calc-result');
  const compEl = document.getElementById('calc-comparison');
  if (!resultEl || !compEl) return;

  const faixaMin = parseInt(resultEl.dataset.faixaMin);
  const faixaMax = parseInt(resultEl.dataset.faixaMax);
  if (isNaN(faixaMin) || isNaN(faixaMax)) { compEl.style.display = 'none'; return; }

  const totalKcal = getBuilderTotalKcal();
  if (totalKcal === 0) { compEl.style.display = 'none'; return; }

  compEl.style.display = 'block';
  if (totalKcal < faixaMin) {
    compEl.className = 'calc-comparison abaixo';
    compEl.textContent = `⚠️ Seu café (${totalKcal} kcal) está abaixo da faixa sugerida (${faixaMin}–${faixaMax} kcal).`;
  } else if (totalKcal > faixaMax) {
    compEl.className = 'calc-comparison acima';
    compEl.textContent = `🔺 Seu café (${totalKcal} kcal) está acima da faixa sugerida (${faixaMin}–${faixaMax} kcal).`;
  } else {
    compEl.className = 'calc-comparison dentro';
    compEl.textContent = `✅ Seu café (${totalKcal} kcal) está dentro da faixa sugerida (${faixaMin}–${faixaMax} kcal)!`;
  }
}

// ---- Suggestions ----

function renderSuggestions(filter) {
  const container = document.getElementById('suggestions-grid');
  if (!container) return;

  const filtered = filter === 'todos' ? COMBINATIONS : COMBINATIONS.filter(c => c.profiles.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--clr-text-muted);grid-column:1/-1;">Nenhuma combinação encontrada para este filtro.</p>';
    return;
  }

  container.innerHTML = filtered.map((c, idx) => {
    const realIdx = COMBINATIONS.indexOf(c);
    const kcal = calcCombinationKcal(c.items, c.drink);
    const cls = getClassification(kcal);
    const tags = c.profiles.map(p => `<span class="suggestion-tag">${PROFILE_LABELS[p] || p}</span>`).join('');
    return `
      <article class="suggestion-card">
        <div class="suggestion-name">${c.name}</div>
        <div class="suggestion-items">${c.items.join(' + ')}</div>
        <div class="suggestion-drink">🥤 ${c.drink}</div>
        <div class="suggestion-meta">
          <span class="suggestion-kcal">~${kcal} kcal</span>
          <span class="badge ${cls.cssClass}" style="font-size:.68rem;">${cls.emoji} ${cls.label}</span>
          ${tags}
        </div>
        <div class="suggestion-actions">
          <button class="btn btn-secondary btn-sm" onclick="useCombination(${realIdx})" type="button">✨ Usar esta</button>
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

  container.innerHTML = weeklyMenu.map(w => {
    const kcal = calcCombinationKcal(w.items, w.drink);
    return `
      <div class="weekly-card">
        <div class="weekly-day">${w.day}</div>
        <div class="weekly-info">
          <div class="weekly-items">${w.items.join(' + ')}</div>
          <div class="weekly-drink">🥤 ${w.drink}</div>
          <div class="weekly-kcal">~${kcal} kcal</div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('btn-shopping')?.addEventListener('click', generateShoppingList);
  document.getElementById('btn-shuffle')?.addEventListener('click', shuffleWeeklyMenu);
  document.getElementById('btn-print')?.addEventListener('click', printWeeklyMenu);
}

function shuffleWeeklyMenu() {
  const days = weeklyMenu.map(w => w.day);
  const shuffled = [...COMBINATIONS].sort(() => Math.random() - .5).slice(0, 7);
  weeklyMenu = days.map((day, i) => ({
    day,
    items: shuffled[i % shuffled.length].items,
    drink: shuffled[i % shuffled.length].drink,
  }));
  // Re-render without re-binding
  const container = document.getElementById('weekly-grid');
  if (container) {
    container.innerHTML = weeklyMenu.map(w => {
      const kcal = calcCombinationKcal(w.items, w.drink);
      return `
        <div class="weekly-card">
          <div class="weekly-day">${w.day}</div>
          <div class="weekly-info">
            <div class="weekly-items">${w.items.join(' + ')}</div>
            <div class="weekly-drink">🥤 ${w.drink}</div>
            <div class="weekly-kcal">~${kcal} kcal</div>
          </div>
        </div>
      `;
    }).join('');
  }
  showToast('Cardápio renovado!', '🔄');
}

function printWeeklyMenu() {
  let text = '📅 CARDÁPIO SEMANAL — Café da Manhã Inteligente\n\n';
  weeklyMenu.forEach(w => {
    const kcal = calcCombinationKcal(w.items, w.drink);
    text += `${w.day}: ${w.items.join(' + ')} | ${w.drink} (~${kcal} kcal)\n`;
  });
  const win = window.open('', '_blank');
  if (win) {
    win.document.write(`<pre style="font-family:sans-serif;font-size:14px;padding:24px;line-height:1.8;">${text}</pre>`);
    win.document.title = 'Cardápio Semanal';
    win.print();
  }
}

function generateShoppingList() {
  const listEl = document.getElementById('shopping-list');
  if (!listEl) return;

  const grouped = { bebida: new Set(), carboidrato: new Set(), proteina: new Set(), fruta: new Set() };
  weeklyMenu.forEach(w => {
    w.items.forEach(name => { const f = findFood(name); if (f) grouped[f.group].add(f.name); });
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

  const plainText = GROUPS_ORDER.map(g => {
    const items = [...grouped[g]];
    if (items.length === 0) return '';
    return `${GROUP_LABELS[g]}:\n${items.map(i => `  • ${i}`).join('\n')}`;
  }).filter(Boolean).join('\n\n');

  listEl.innerHTML = `
    <div class="shopping-list-header">
      <h3>🛒 Lista de Compras Semanal</h3>
      <button class="btn btn-secondary btn-sm" id="btn-copy-list" type="button">📋 Copiar lista</button>
    </div>
    ${html}
  `;
  listEl.classList.add('visible');

  document.getElementById('btn-copy-list')?.addEventListener('click', async () => {
    await copyToClipboard(plainText);
    showToast('Lista copiada!', '📋');
  });

  listEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- Tips ----

function renderTips() {
  const container = document.getElementById('tips-grid');
  if (!container) return;
  container.innerHTML = TIPS.map(t => `
    <div class="tip-card">
      <span class="tip-emoji">${t.emoji}</span>
      <div class="tip-content">
        <h4>${t.title}</h4>
        <p>${t.text}</p>
      </div>
    </div>
  `).join('');
}
