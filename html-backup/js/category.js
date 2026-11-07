/* ============================================================
   दैनिक झलकते शब्द — category.js (सिर्फ category.html पर)
   ?cat=mp | world | business | sports | tech | entertainment | health
   पेज की मुख्य खबर + साइड लिस्ट + ग्रिड फ्रीड "Load More"।
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const NEWS = window.NEWS || { categories: {} };

  /* ---- ?cat= पैरामीटर पढ़ें ---- */
  const params = new URLSearchParams(location.search);
  const catKey = params.get("cat");
  const cat = (catKey && NEWS.categories[catKey]) ? catKey : "mp";
  const data = NEWS.categories[cat] || { label: "म.प्र.", items: [] };
  const items = data.items;

  /* ---- Heading, breadcrumb, count, title ---- */
  const catTitle = document.getElementById("catTitle");
  const crumbCat = document.getElementById("crumbCat");
  const catCount = document.getElementById("catCount");
  if (catTitle) catTitle.textContent = data.label;
  if (crumbCat) crumbCat.textContent = data.label;
  if (catCount) catCount.textContent = `${items.length} खबरें · भोपाल से ताज़ा`;
  document.title = `${data.label} — दैनिक झलकते शब्द`;

  /* ---- Nav highlight (hardcoded man-menu) ---- */
  document.querySelectorAll("#navLinks a").forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `category.html?cat=${cat}`) a.classList.add("active");
  });

  /* ---- Tabs highlight ---- */
  document.querySelectorAll("#catTabs a").forEach((a) => {
    a.classList.toggle("active", a.dataset.cat === cat);
  });

  /* ---- Featured: item[0] बड़ा + item[1..3] साइड लिस्ट ---- */
  const featuredBox = document.getElementById("catFeatured");
  const sideBox = document.getElementById("catSideList");

  if (featuredBox && items.length) {
    const f = items[0];
    featuredBox.innerHTML = `
      <article class="card hero-main" style="height:100%">
        <a href="article.html"><div class="thumb-wrap">
          <img src="${f.img}" alt="" />
        </div></a>
        <div class="card-body">
          <span class="kicker">${data.label}</span>
          <h2><a href="article.html">${f.title}</a></h2>
          <div class="meta"><span class="meta-time">${f.time}</span></div>
        </div>
      </article>
    `;
  }

  if (sideBox && items.length) {
    sideBox.innerHTML = items
      .slice(1, 4)
      .map(
        (n) => `
      <article class="card horizontal">
        <a href="article.html"><div class="thumb-wrap small">
          <img src="${n.img}" alt="" loading="lazy" />
        </div></a>
        <div class="card-body">
          <h3><a href="article.html">${n.title}</a></h3>
          <div class="meta"><span class="meta-time">${n.time}</span></div>
        </div>
      </article>`
      )
      .join("");
  }

  /* ---- बाकी ग्रिड + Load More ---- */
  const catGrid = document.getElementById("catGrid");
  const loadBtn = document.getElementById("catLoadBtn");
  const rest = items.slice(4);
  const GRID_INITIAL = 6;
  const STEP = 4;
  let shown = 0;

  function renderGrid(count) {
    const slice = rest.slice(shown, shown + count);
    catGrid.insertAdjacentHTML(
      "beforeend",
      slice
        .map(
          (n) => `
        <article class="card">
          <a href="article.html"><div class="thumb-wrap">
            <img src="${n.img}" alt="" loading="lazy" />
          </div></a>
          <div class="card-body">
            <span class="kicker">${data.label}</span>
            <h3><a href="article.html">${n.title}</a></h3>
            <div class="meta"><span class="meta-time">${n.time}</span></div>
          </div>
        </article>`
        )
        .join("")
    );
    shown += slice.length;
    if (shown >= rest.length) {
      loadBtn.textContent = "आपने सारी खबरें देख लीं ✓";
      loadBtn.disabled = true;
    }
  }

  if (catGrid && loadBtn) {
    renderGrid(Math.min(GRID_INITIAL, rest.length));
    loadBtn.addEventListener("click", () => renderGrid(STEP));
  }
});
