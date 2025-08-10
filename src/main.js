

import './index.css';

import './js/nav.js';
import './js/footer.js';

// import { initNav } from './js/nav.js';
// import { initFooter } from './js/footer.js';

import './js/gsap.js';
import './js/swiper.js';


// 使用 import 語法並加上 ?url 後綴，取得打包後的 HTML 檔案路徑
// 注意：這裡的路徑要根據你的檔案結構來寫
import navHtmlUrl from './components/nav.html?url';
import footerHtmlUrl from './components/footer.html?url';

document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent(navHtmlUrl, 'nav');
  initNav();            // HTML 插入後再綁事件

  await loadComponent(footerHtmlUrl, 'footer');
  initFooter?.();
});

// 定義 loadComponent 函數
export function loadComponent(path, targetId) {
  return fetch(path)
    .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        return res.text();
    })
    .then(html => {
        document.getElementById(targetId).innerHTML = html;
    })
    .catch(err => console.error(err));
}

// // 呼叫 loadComponent 函式，傳入從 import 取得的路徑
loadComponent(navHtmlUrl, 'nav');
loadComponent(footerHtmlUrl, 'footer');


