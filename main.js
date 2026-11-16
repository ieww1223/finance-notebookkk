// 首頁：依 data/notes.js 產生卡片，並提供搜尋與分類篩選
(function () {
  var notes = window.NOTES || [];
  var cats = window.CATEGORIES || {};
  var state = { q: "", cat: "all" };

  var cardsEl = document.getElementById("cards");
  var chipsEl = document.getElementById("chips");
  var countEl = document.getElementById("count");
  var searchEl = document.getElementById("search");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderChips() {
    var keys = ["all"].concat(Object.keys(cats));
    chipsEl.innerHTML = keys.map(function (k) {
      var label = k === "all" ? "全部" : cats[k];
      return '<button class="chip' + (state.cat === k ? " active" : "") + '" data-cat="' + k + '">' + esc(label) + "</button>";
    }).join("");
  }

  function match(n) {
    if (state.cat !== "all" && n.category !== state.cat) return false;
    if (!state.q) return true;
    var hay = [n.title, n.en, n.summary].concat(n.tags || []).join(" ").toLowerCase();
    return hay.indexOf(state.q.toLowerCase()) !== -1;
  }

  function renderCards() {
    var list = notes.filter(match);
    countEl.textContent = "共 " + list.length + " 篇筆記";
    if (!list.length) {
      cardsEl.innerHTML = '<div class="empty">找不到相關筆記，換個關鍵字試試看 🔍</div>';
      return;
    }
    cardsEl.innerHTML = list.map(function (n) {
      return '<a class="card cat-' + esc(n.category) + '" href="' + esc(n.file) + '">' +
        '<span class="cat cat-' + esc(n.category) + '">' + esc(cats[n.category] || n.category) + "</span>" +
        "<h3>" + esc(n.title) + "</h3>" +
        '<div class="en">' + esc(n.en) + "</div>" +
        "<p>" + esc(n.summary) + "</p>" +
        '<div class="tags">' + (n.tags || []).map(function (t) { return '<span class="tag">#' + esc(t) + "</span>"; }).join("") + "</div>" +
        "</a>";
    }).join("");
  }

  chipsEl.addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (!b) return;
    state.cat = b.getAttribute("data-cat");
    renderChips();
    renderCards();
  });
  searchEl.addEventListener("input", function () {
    state.q = searchEl.value.trim();
    renderCards();
  });

  renderChips();
  renderCards();
})();
