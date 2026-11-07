/* ============================================================
   दैनिक झलकते शब्द — article.js (सिर्फ article.html पर)
   Reading progress + Share buttons + Related news.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const NEWS = window.NEWS || { related: [] };

  /* ---- तारीख byline में ---- */
  const aDate = document.getElementById("aDate");
  if (aDate) {
    aDate.textContent = "प्रकाशित: " + new Date().toLocaleDateString("hi-IN", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });
  }

  /* ---- Reading progress bar ---- */
  const progressBar = document.getElementById("progressBar");
  const article = document.querySelector("article");
  if (progressBar && article) {
    window.addEventListener("scroll", () => {
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const read = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      progressBar.style.width = (read / total) * 100 + "%";
    });
  }

  /* ---- Share: WhatsApp / Facebook / X / Copy ---- */
  const shareTitle = document.getElementById("aTitle");
  const shareWa = document.getElementById("shareWa");
  const shareFb = document.getElementById("shareFb");
  const shareX = document.getElementById("shareX");
  const shareCopy = document.getElementById("shareCopy");

  const title = shareTitle ? shareTitle.textContent.trim() : "दैनिक झलकते शब्द";
  const url = location.href.split("#")[0];
  const enc = encodeURIComponent;

  if (shareWa) shareWa.href = `https://wa.me/?text=${enc(title + " — " + url)}`;
  if (shareFb) shareFb.href = `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`;
  if (shareX) shareX.href = `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`;

  if (shareCopy) {
    shareCopy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(url);
        shareCopy.textContent = "✓ कॉपी हो गया";
        shareCopy.classList.add("copied");
        setTimeout(() => {
          shareCopy.textContent = "🔗 लिंक कॉपी";
          shareCopy.classList.remove("copied");
        }, 2000);
      } catch {
        shareCopy.textContent = "कॉपी नहीं हुआ ✗";
      }
    });
  }

  /* ---- जुड़ी हुई खबरें render ---- */
  const relatedGrid = document.getElementById("relatedGrid");
  if (relatedGrid && NEWS.related.length) {
    relatedGrid.innerHTML = NEWS.related
      .map(
        (n) => `
      <article class="card">
        <a href="article.html"><div class="thumb-wrap">
          <img src="${n.img}" alt="" loading="lazy" />
        </div></a>
        <div class="card-body">
          <span class="kicker">${n.tag}</span>
          <h3><a href="article.html">${n.title}</a></h3>
          <div class="meta"><span class="meta-time">${n.time}</span> · <span>${n.tag}</span></div>
        </div>
      </article>`
      )
      .join("");
  }
});
