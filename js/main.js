/**
 * Card Cafe – main.js
 * Vanilla JS for all site interactivity.
 */

/* ── Helpers ──────────────────────────────────────────────── */

/** Simple $ shorthand */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

/* ── Data ─────────────────────────────────────────────────── */

const TOURNAMENTS = [
  {
    id: 1,
    game: "pokemon",
    label: "포켓몬 카드",
    emoji: "🔴",
    tagClass: "tag-pokemon",
    title: "주간 포켓몬 스탠다드",
    day: "매주 수요일",
    time: "19:00",
    duration: "약 3시간",
    fee: "₩5,000",
    slots: 16,
    registered: 12,
    format: "스위스 + Top 8",
  },
  {
    id: 2,
    game: "onepiece",
    label: "원피스 카드",
    emoji: "⚓",
    tagClass: "tag-onepiece",
    title: "원피스 공인 대회",
    day: "매주 토요일",
    time: "14:00",
    duration: "약 4시간",
    fee: "₩8,000",
    slots: 32,
    registered: 28,
    format: "스위스 + Top 8",
  },
  {
    id: 3,
    game: "mtg",
    label: "매직 더 개더링",
    emoji: "🌟",
    tagClass: "tag-mtg",
    title: "MTG 드래프트 나이트",
    day: "매주 금요일",
    time: "18:30",
    duration: "약 4시간",
    fee: "₩15,000",
    slots: 8,
    registered: 6,
    format: "드래프트",
  },
  {
    id: 4,
    game: "pokemon",
    label: "포켓몬 카드",
    emoji: "🔴",
    tagClass: "tag-pokemon",
    title: "포켓몬 리미티드 배틀",
    day: "매주 일요일",
    time: "13:00",
    duration: "약 2시간",
    fee: "₩3,000",
    slots: 12,
    registered: 4,
    format: "리미티드",
  },
  {
    id: 5,
    game: "onepiece",
    label: "원피스 카드",
    emoji: "⚓",
    tagClass: "tag-onepiece",
    title: "원피스 신규 팩 프리릴리즈",
    day: "특별 이벤트",
    time: "11:00",
    duration: "종일",
    fee: "₩20,000",
    slots: 20,
    registered: 20,
    format: "부스터 드래프트",
  },
  {
    id: 6,
    game: "mtg",
    label: "매직 더 개더링",
    emoji: "🌟",
    tagClass: "tag-mtg",
    title: "커맨더 나이트",
    day: "매주 목요일",
    time: "19:00",
    duration: "약 3–4시간",
    fee: "무료",
    slots: 12,
    registered: 7,
    format: "커맨더 (EDH)",
  },
];

const HOT_ITEMS = [
  {
    id: "h1",
    game: "포켓몬",
    name: "포켓몬 카드 151 강화확장팩",
    price: "₩7,500",
    stock: "재고 있음",
    emoji: "📦",
    desc: "포켓몬 No.1~151 수록. 복각 카드 다수 포함",
  },
  {
    id: "h2",
    game: "원피스",
    name: "원피스 카드 Op-09 부스터 박스",
    price: "₩85,000",
    stock: "재고 3개",
    emoji: "📦",
    desc: "최신 세트 Op-09. 한정 특별 레어 포함",
  },
  {
    id: "h3",
    game: "포켓몬",
    name: "포켓몬 스타터 덱 번들",
    price: "₩18,000",
    stock: "재고 있음",
    emoji: "🃏",
    desc: "초보자 입문용 스타터 덱 2종 세트",
  },
  {
    id: "h4",
    game: "매직",
    name: "MTG 커맨더 프리빌트 덱",
    price: "₩42,000",
    stock: "재고 2개",
    emoji: "📜",
    desc: "바로 플레이 가능한 커맨더 프리빌트 덱",
  },
];

const SINGLES = [
  {
    id: "s1",
    game: "포켓몬",
    name: "리자몽 ex SAR",
    price: "₩120,000",
    stock: "1장 남음",
    emoji: "🔥",
    desc: "한정 SAR 버전. 고급 홀로그램 처리",
  },
  {
    id: "s2",
    game: "원피스",
    name: "몽키 D. 루피 리더 (파렐)",
    price: "₩85,000",
    stock: "2장",
    emoji: "⚓",
    desc: "원피스 카드 압도적 인기 리더 카드",
  },
  {
    id: "s3",
    game: "포켓몬",
    name: "뮤 ex SAR",
    price: "₩45,000",
    stock: "3장",
    emoji: "✨",
    desc: "포켓몬 151 SAR 뮤. 상태 최상급",
  },
  {
    id: "s4",
    game: "매직",
    name: "Mana Crypt (SLD)",
    price: "₩180,000",
    stock: "1장 남음",
    emoji: "💎",
    desc: "EDH 필수 아티팩트. 시크릿 레이어 버전",
  },
  {
    id: "s5",
    game: "원피스",
    name: "상디 블랙 (SR)",
    price: "₩38,000",
    stock: "4장",
    emoji: "♠",
    desc: "Op-09 신규 SR 상디 블랙 리더",
  },
  {
    id: "s6",
    game: "포켓몬",
    name: "이브이즈 SAR 번들",
    price: "₩210,000",
    stock: "1세트",
    emoji: "🌈",
    desc: "이브이즈 SAR 전종 세트. 선물용 최적",
  },
];

/* ── Store Status ─────────────────────────────────────────── */

/**
 * Simulates a POS/backend call to fetch store status.
 * Replace the body with a real fetch() call to your POS API.
 *
 * Expected shape:
 *  {
 *    isOpen:      boolean,
 *    todayHours:  string,   e.g. "12:00 – 22:00"
 *    vacancies:   number | null,
 *  }
 */
async function fetchStoreStatus() {
  // ── PLACEHOLDER – replace with real endpoint ──────────────
  // Example:
  //   const res = await fetch('/api/store-status');
  //   return res.json();
  // ─────────────────────────────────────────────────────────

  const now = new Date();
  const hour = now.getHours();
  const isWeekend = now.getDay() === 0 || now.getDay() === 6;

  const openHour  = isWeekend ? 11 : 12;
  const closeHour = isWeekend ? 23 : 22;

  return {
    isOpen:     hour >= openHour && hour < closeHour,
    todayHours: `${openHour.toString().padStart(2,"0")}:00 – ${closeHour.toString().padStart(2,"0")}:00`,
    vacancies:  Math.floor(Math.random() * 8),  // placeholder random value
  };
}

async function initStoreStatus() {
  const heroStatusDot  = $("#store-status-dot");
  const heroStatusText = $("#store-status-text");
  const kioskVacancies = $("#kiosk-vacancies");
  const kioskOpenStatus = $("#kiosk-open-status");
  const kioskHours     = $("#kiosk-hours");

  try {
    const status = await fetchStoreStatus();

    // Hero pill
    if (heroStatusDot && heroStatusText) {
      heroStatusDot.classList.toggle("open",   status.isOpen);
      heroStatusDot.classList.toggle("closed", !status.isOpen);
      heroStatusText.textContent = status.isOpen ? "영업 중" : "영업 종료";
    }

    // Kiosk widget
    if (kioskOpenStatus) {
      kioskOpenStatus.textContent = status.isOpen ? "🟢 영업 중" : "🔴 영업 종료";
      kioskOpenStatus.style.color = status.isOpen
        ? "var(--color-success)"
        : "var(--color-danger)";
    }

    if (kioskHours && status.todayHours) {
      kioskHours.textContent = status.todayHours;
    }

    if (kioskVacancies != null && status.vacancies != null) {
      kioskVacancies.textContent = status.vacancies > 0
        ? `${status.vacancies}석`
        : "만석";
      if (status.vacancies === 0) kioskVacancies.style.color = "var(--color-danger)";
      else if (status.vacancies <= 3) kioskVacancies.style.color = "var(--color-warning)";
      else kioskVacancies.style.color = "var(--color-success)";
    }
  } catch (err) {
    console.warn("[Card Cafe] 매장 상태 로드 실패:", err);
    if (heroStatusText) heroStatusText.textContent = "상태 확인 불가";
  }
}

/* ── Tournament Cards ─────────────────────────────────────── */

function getVacancyLabel(slots, registered) {
  const remaining = slots - registered;
  if (remaining <= 0) return { text: "만석", cls: "full" };
  if (remaining <= 3)  return { text: `잔여 ${remaining}석`, cls: "low" };
  return { text: `잔여 ${remaining}석`, cls: "" };
}

function createTournamentCard(t) {
  const vac = getVacancyLabel(t.slots, t.registered);
  const isFull = vac.cls === "full";

  const article = document.createElement("article");
  article.className = "tournament-card reveal";
  article.setAttribute("role", "listitem");
  article.dataset.game = t.game;

  article.innerHTML = `
    <div class="tournament-card__game-tag ${t.tagClass}">
      <span aria-hidden="true">${t.emoji}</span>
      ${escapeHTML(t.label)}
    </div>
    <h3 class="tournament-card__title">${escapeHTML(t.title)}</h3>
    <div class="tournament-card__meta">
      <div class="meta-row">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <span>${escapeHTML(t.day)}</span>
      </div>
      <div class="meta-row">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>${escapeHTML(t.time)} (${escapeHTML(t.duration)})</span>
      </div>
      <div class="meta-row">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span>포맷: ${escapeHTML(t.format)}</span>
      </div>
    </div>
    <div class="tournament-card__footer">
      <div>
        <div class="tournament-card__fee-label">참가비</div>
        <div class="tournament-card__fee">${escapeHTML(t.fee)}</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-direction:column;align-items:flex-end;">
        <span class="vacancy-badge ${vac.cls}">${escapeHTML(vac.text)}</span>
        <button
          class="btn btn--primary btn--sm"
          ${isFull ? "disabled aria-disabled='true'" : ""}
          aria-label="${escapeHTML(t.title)} 등록${isFull ? " (마감)" : ""}"
          data-tournament-id="${t.id}"
        >${isFull ? "마감" : "등록하기"}</button>
      </div>
    </div>
  `;

  // Register button handler
  const regBtn = article.querySelector("[data-tournament-id]");
  if (regBtn && !isFull) {
    regBtn.addEventListener("click", () => openRegistrationModal(t));
  }

  return article;
}

function renderTournaments(filter = "all") {
  const grid = $("#tournament-grid");
  if (!grid) return;

  grid.innerHTML = "";
  const filtered = filter === "all"
    ? TOURNAMENTS
    : TOURNAMENTS.filter(t => t.game === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="text-muted" style="grid-column:1/-1;text-align:center;padding:2rem 0;">해당 게임의 예정된 대회가 없습니다.</p>`;
    return;
  }

  filtered.forEach(t => grid.appendChild(createTournamentCard(t)));
  observeReveal($$(".reveal", grid));
}

/* ── Inventory Cards ──────────────────────────────────────── */

function createProductCard(item, isSmall = false) {
  const div = document.createElement("div");
  div.className = "product-card reveal";
  div.setAttribute("role", "listitem");
  div.setAttribute("aria-label", `${item.game} - ${item.name}`);

  div.innerHTML = `
    <div class="product-card__img-wrap">
      <div class="product-card__placeholder" aria-hidden="true">
        <span class="product-card__placeholder-icon">${escapeHTML(item.emoji)}</span>
        <span>${escapeHTML(item.game)}</span>
      </div>
      <div class="product-card__overlay" aria-hidden="true">
        <span class="product-card__overlay-text">${escapeHTML(item.desc)}</span>
        <button class="btn btn--primary btn--sm" tabindex="-1" aria-label="상세 보기 (Tab 접근 불가)">상세 보기</button>
      </div>
    </div>
    <div class="product-card__body">
      <div class="product-card__game">${escapeHTML(item.game)}</div>
      <div class="product-card__name">${escapeHTML(item.name)}</div>
      <div class="product-card__price">${escapeHTML(item.price)}</div>
      <div class="product-card__stock">${escapeHTML(item.stock)}</div>
    </div>
  `;

  // Make the overlay button accessible via card click
  div.addEventListener("click", () => {
    showToast(`문의: ${item.name}`, "카카오톡 채널로 구매 문의를 남겨 주세요! 💬");
  });

  // Keyboard accessibility
  div.setAttribute("tabindex", "0");
  div.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      div.click();
    }
  });

  return div;
}

function renderInventory() {
  const hotGrid    = $("#hot-items-grid");
  const singlesGrid = $("#singles-grid");

  HOT_ITEMS.forEach(item => hotGrid?.appendChild(createProductCard(item)));
  SINGLES.forEach(item => singlesGrid?.appendChild(createProductCard(item, true)));

  observeReveal($$(".reveal", hotGrid));
  observeReveal($$(".reveal", singlesGrid));
}

/* ── Registration Modal ───────────────────────────────────── */

function openRegistrationModal(tournament) {
  // Remove any existing modal
  const existing = $("#register-modal");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "register-modal";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "modal-title");
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:9999;
    background:rgba(0,0,0,.75);backdrop-filter:blur(4px);
    display:flex;align-items:center;justify-content:center;padding:1rem;
    animation:modal-in .2s ease;
  `;

  const style = document.createElement("style");
  style.textContent = `
    @keyframes modal-in { from { opacity:0; transform:scale(.95); } to { opacity:1; transform:scale(1); } }
    #register-modal-box { background:var(--color-bg-raised);border:1px solid var(--color-border);border-radius:var(--radius-xl);padding:2rem;max-width:480px;width:100%; }
    #register-modal-box h2 { font-size:var(--text-2xl);font-weight:800;margin-bottom:.5rem; }
    #register-modal-box p { color:var(--color-text-muted);margin-bottom:1.5rem;font-size:var(--text-sm); }
    .modal-form label { display:block;font-size:var(--text-sm);font-weight:600;margin-bottom:.375rem;color:var(--color-text); }
    .modal-form input { width:100%;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:.625rem .875rem;color:var(--color-text);font-family:var(--font-sans);font-size:var(--text-base);margin-bottom:1rem;transition:border-color var(--transition-fast); }
    .modal-form input:focus { outline:none;border-color:var(--color-accent); }
    .modal-form__actions { display:flex;gap:.75rem;justify-content:flex-end;margin-top:1rem; }
    .modal-close { position:absolute;top:1rem;right:1rem; background:transparent;border:none;cursor:pointer;color:var(--color-text-muted);font-size:1.25rem;line-height:1; }
    .modal-close:hover { color:var(--color-text); }
  `;
  document.head.appendChild(style);

  overlay.innerHTML = `
    <div id="register-modal-box" style="position:relative">
      <button class="modal-close" id="modal-close-btn" aria-label="닫기">✕</button>
      <h2 id="modal-title">대회 등록</h2>
      <p>${escapeHTML(tournament.title)} · ${escapeHTML(tournament.day)} ${escapeHTML(tournament.time)} · 참가비 ${escapeHTML(tournament.fee)}</p>
      <form class="modal-form" id="register-form" novalidate>
        <div>
          <label for="reg-name">이름 / 닉네임</label>
          <input type="text" id="reg-name" name="name" required autocomplete="name" placeholder="홍길동" />
        </div>
        <div>
          <label for="reg-phone">연락처 (선택)</label>
          <input type="tel" id="reg-phone" name="phone" autocomplete="tel" placeholder="010-0000-0000" />
        </div>
        <div>
          <label for="reg-deck">덱 / 리더 (선택)</label>
          <input type="text" id="reg-deck" name="deck" placeholder="예: 불꽃 리자몽" />
        </div>
        <div class="modal-form__actions">
          <button type="button" class="btn btn--ghost" id="modal-cancel-btn">취소</button>
          <button type="submit" class="btn btn--primary">등록 확인</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";

  const closeModal = () => {
    overlay.remove();
    style.remove();
    document.body.style.overflow = "";
  };

  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  $("#modal-close-btn", overlay).addEventListener("click", closeModal);
  $("#modal-cancel-btn", overlay).addEventListener("click", closeModal);

  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") { closeModal(); document.removeEventListener("keydown", escHandler); }
  });

  $("#register-form", overlay).addEventListener("submit", e => {
    e.preventDefault();
    const name = $("#reg-name", overlay).value.trim();
    if (!name) {
      $("#reg-name", overlay).focus();
      return;
    }
    closeModal();
    showToast(
      "등록 완료! 🎉",
      `${escapeHTML(name)}님, <strong>${escapeHTML(tournament.title)}</strong> 등록이 접수되었습니다. 카카오톡으로 최종 확인 메시지를 보내드립니다.`
    );
  });

  // Trap focus
  setTimeout(() => $("#reg-name", overlay)?.focus(), 50);
}

/* ── Toast Notification ───────────────────────────────────── */

function showToast(title, body, duration = 5000) {
  const existing = $("#toast-container");
  const container = existing || (() => {
    const el = document.createElement("div");
    el.id = "toast-container";
    el.setAttribute("aria-live", "polite");
    el.setAttribute("aria-atomic", "true");
    el.style.cssText = `
      position:fixed;bottom:1.5rem;right:1.5rem;z-index:10000;
      display:flex;flex-direction:column;gap:.75rem;max-width:360px;
    `;
    document.body.appendChild(el);
    return el;
  })();

  const toast = document.createElement("div");
  toast.style.cssText = `
    background:var(--color-bg-raised);
    border:1px solid var(--color-border);
    border-left:4px solid var(--color-accent);
    border-radius:var(--radius-md);
    padding:.875rem 1rem;
    box-shadow:var(--shadow-lg);
    animation:toast-in .25s ease;
    font-family:var(--font-sans);
    color:var(--color-text);
  `;

  const toastStyle = document.createElement("style");
  toastStyle.textContent = `@keyframes toast-in { from { opacity:0;transform:translateX(100%); } to { opacity:1;transform:none; } }`;
  document.head.appendChild(toastStyle);

  toast.innerHTML = `
    <div style="font-weight:700;margin-bottom:.25rem;">${escapeHTML(title)}</div>
    <div style="font-size:.875rem;color:var(--color-text-muted);">${body}</div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity .3s ease, transform .3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ── Scroll Reveal ────────────────────────────────────────── */

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

function observeReveal(elements) {
  elements.forEach(el => revealObserver.observe(el));
}

/* ── Lazy Images ──────────────────────────────────────────── */

function initLazyImages() {
  const lazyImgs = $$("img[data-src]");
  if (!lazyImgs.length) return;

  const imgObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) img.srcset = img.dataset.srcset;
          img.removeAttribute("data-src");
          imgObserver.unobserve(img);
        }
      });
    },
    { rootMargin: "300px" }
  );

  lazyImgs.forEach(img => imgObserver.observe(img));
}

/* ── Navigation ───────────────────────────────────────────── */

function initNav() {
  const header     = $("#site-header");
  const hamburger  = $("#nav-hamburger");
  const mobileMenu = $("#mobile-menu");
  const navLinks   = $$(".nav__link");
  const mobileLinks = $$(".mobile-menu__link");

  // Scrolled style
  const onScroll = () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  hamburger?.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });

  // Close mobile menu on link click
  [...mobileLinks].forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });

  // Active link highlight on scroll
  const sections = $$("section[id], footer[id]");
  const activeLinkObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(a => {
            const href = a.getAttribute("href");
            a.classList.toggle("active", href === `#${id}`);
          });
        }
      });
    },
    { rootMargin: `-${Math.round(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 68)}px 0px -60% 0px` }
  );
  sections.forEach(s => activeLinkObserver.observe(s));
}

/* ── Tournament Tabs ──────────────────────────────────────── */

function initTournamentTabs() {
  const tabs = $$(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("tab--active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("tab--active");
      tab.setAttribute("aria-selected", "true");
      renderTournaments(tab.dataset.filter);
    });
  });
}

/* ── Footer Year ─────────────────────────────────────────── */

function initFooterYear() {
  const el = $("#footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ── Security helper ─────────────────────────────────────── */

function escapeHTML(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ── Init ────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFooterYear();
  initTournamentTabs();
  renderTournaments("all");
  renderInventory();
  initLazyImages();
  initStoreStatus();

  // Observe static reveal elements
  observeReveal($$(".reveal:not(.tournament-card):not(.product-card)"));
  observeReveal($$(".section-header, .community__block, .community__callout, .feature-item, .callout-card, .kiosk-widget"));
});
