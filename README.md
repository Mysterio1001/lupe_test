## 🛠 技術棧

- **HTML / CSS3 / JavaScript (ES6+)**
  - 建構網頁結構與互動邏輯。

- **網站架構**
  - 採用 **目錄結構化** 管理專案，將樣式、元件、頁面區隔。
  - **元件化 HTML 模組**：
    - 將共用區塊（如 `nav.html`、`footer.html`）拆分為模組。
    - 透過 JavaScript 動態載入（`loadComponent()` 函式）進行組合與重用。

- **第三方函式庫**
  - **GSAP**：實現動畫效果，如滾動視差、淡入淡出等。
  - **Swiper**：建立可滑動的內容區塊（如橫向輪播、卡片滑動等）。

- **Tailwind CSS**
  - 使用 Utility-first CSS 框架，加速 UI 開發流程。
  - 客製化 `tailwind.config.js` 以統一：
    - 顏色系統（色票）
    - 間距規則（spacing scale）
    - 字型設定（typography）
  - 支援 RWD，確保在不同裝置上的瀏覽體驗一致。

