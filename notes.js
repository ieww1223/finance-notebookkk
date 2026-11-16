// ============================================================
// 筆記登記表：首頁會讀這裡自動產生卡片。
// 新增筆記時，在 NOTES 陣列「最後面」加一筆（格式見 AGENTS.md 第 5 節）。
// ============================================================

window.CATEGORIES = {
  inv:   "投資學",
  fim:   "金融機構管理",
  reg:   "金融法規",
  event: "市場事件"
};

window.NOTES = [
  {
    file: "notes/inv-capm.html",
    title: "資本資產定價模型",
    en: "CAPM",
    category: "inv",
    summary: "承擔越多「分散不掉的風險」，就該要求越高的報酬。",
    tags: ["系統性風險", "Beta", "必要報酬率"],
    updated: "2026-11-16"
  },
  {
    file: "notes/fim-capital-adequacy.html",
    title: "資本適足率",
    en: "Capital Adequacy Ratio",
    category: "fim",
    summary: "銀行自己的錢，夠不夠承受它放出去那些資產的風險。",
    tags: ["巴塞爾協定", "自有資本", "風險性資產"],
    updated: "2026-11-16"
  },
  {
    file: "notes/event-wti-negative-price.html",
    title: "2020 WTI 負油價事件",
    en: "WTI Negative Oil Price",
    category: "event",
    summary: "原油多到沒地方放，期貨快到期時，賣方甚至倒貼錢請人接貨。",
    tags: ["期貨", "實物交割", "COVID-19"],
    updated: "2026-11-16"
  }
];
