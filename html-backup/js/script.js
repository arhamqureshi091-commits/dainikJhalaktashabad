/* ============================================================
   दैनिक झलकते शब्द — script.js (shared, हर पेज पर लोड होता है)
   Saari features element-guards ke sath — isliye article.html
   aur category.html par bhi bina error chalti hai.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const NEWS = window.NEWS || { tickerItems: [], latestNews: [], categories: {}, rashifal: [], related: [] };

  /* ---------- 1. LIVE DATE (topbar) ---------- */
  const dateEl = document.getElementById("live-date");
  if (dateEl) {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    dateEl.textContent = new Date().toLocaleDateString("hi-IN", options);
  }

  /* ---------- 2. DARK MODE ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;
  if (themeToggle) {
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      themeToggle.textContent = "☀️";
    }
    themeToggle.addEventListener("click", () => {
      html.classList.toggle("dark");
      const isDark = html.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
  }

  /* ---------- 3. MOBILE MENU ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => navLinks.classList.remove("open"))
    );
  }

  /* ---------- 4. NAVBAR shadow + back-to-top ---------- */
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 8);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 600);
  });
  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- 5. BREAKING TICKER ---------- */
  const tickerTrack = document.getElementById("tickerTrack");
  if (tickerTrack && NEWS.tickerItems.length) {
    const itemHTML = NEWS.tickerItems
      .map((text) => `<span class="ticker-item">${text}</span>`)
      .join("");
    tickerTrack.innerHTML = itemHTML + itemHTML; // seamless loop
  }

  /* ---------- 6. ताज़ा खबरें + Load More ---------- */
  const latestList = document.getElementById("latestList");
  if (latestList && NEWS.latestNews.length) {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const INITIAL = 5;
    const STEP = 4;
    let shown = 0;

    function renderLatest(count) {
      const slice = NEWS.latestNews.slice(shown, shown + count);
      slice.forEach((n) => {
        const el = document.createElement("div");
        el.className = "latest-item";
        el.innerHTML = `
          <div class="latest-thumb"><img src="${n.img}" alt="" loading="lazy" /></div>
          <h3><span class="tag">${n.tag}</span> &nbsp;<a href="article.html">${n.title}</a></h3>
          <span class="time">${n.time}</span>
        `;
        latestList.appendChild(el);
      });
      shown += slice.length;
      if (shown >= NEWS.latestNews.length && loadMoreBtn) {
        loadMoreBtn.textContent = "आपने सारी खबरें पढ़ लीं ✓";
        loadMoreBtn.disabled = true;
      }
    }

    renderLatest(INITIAL);
    if (loadMoreBtn) loadMoreBtn.addEventListener("click", () => renderLatest(STEP));
  }

  /* ---------- 7. SEARCH (har page par kaam karta hai) ---------- */
  const searchBtn = document.getElementById("searchBtn");
  const searchPanel = document.getElementById("searchPanel");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  if (searchBtn && searchPanel && searchInput && searchResults) {
    const allHeadlines = [
      ...NEWS.latestNews.map((n) => n.title),
      ...NEWS.tickerItems,
      ...Object.values(NEWS.categories).flatMap((c) => c.items.map((i) => i.title)),
      ...NEWS.related.map((n) => n.title),
    ];

    const HINT = `<p class="search-hint">खबरें खोजने के लिए कोई शब्द लिखें — जैसे क्रिकेट, मौसम, इंदौर…</p>`;

    searchBtn.addEventListener("click", () => {
      searchPanel.classList.toggle("open");
      if (searchPanel.classList.contains("open")) searchInput.focus();
    });

    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { searchResults.innerHTML = HINT; return; }
      const matches = allHeadlines.filter((h) => h.toLowerCase().includes(q));
      searchResults.innerHTML = matches.length
        ? matches.map((h) => `<a href="article.html">${h}</a>`).join("")
        : `<p class="search-hint">"${q}" के लिए कोई नतीजा नहीं — कुछ और आज़माएँ।</p>`;
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") searchPanel.classList.remove("open");
    });
  }

  /* ---------- 8. NEWSLETTER ---------- */
  const form = document.getElementById("newsletterForm");
  if (form) {
    const emailInput = document.getElementById("newsletterEmail");
    const formMsg = document.getElementById("formMsg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!email) {
        formMsg.textContent = "कृपया अपना ईमेल लिखें।";
        formMsg.className = "form-msg bad";
        emailInput.classList.add("err");
      } else if (!valid) {
        formMsg.textContent = "यह ईमेल सही नहीं लगता।";
        formMsg.className = "form-msg bad";
        emailInput.classList.add("err");
      } else {
        formMsg.textContent = "✓ सब्सक्राइब हो गए! अपना इनबॉक्स देखें।";
        formMsg.className = "form-msg ok";
        emailInput.classList.remove("err");
        emailInput.value = "";
      }
    });
  }

  /* ---------- 9. आज का राशिफल (horizontal scroll) ---------- */
  const rashifalScroll = document.getElementById("rashifalScroll");
  if (rashifalScroll && NEWS.rashifal.length) {
    const rashiDate = document.getElementById("rashiDate");
    if (rashiDate) {
      rashiDate.textContent = new Date().toLocaleDateString("hi-IN", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      });
    }
    rashifalScroll.innerHTML = NEWS.rashifal
      .map(
        (x) => `
      <a class="rashi-card" href="article.html" title="${x.r} — विस्तार से पढ़ें">
        <span class="sym">${x.sym}</span>
        <h4>${x.r}</h4>
        <p>${x.t}</p>
        <span class="rashi-num">विस्तार से →</span>
      </a>`
      )
      .join("");
  }
});
