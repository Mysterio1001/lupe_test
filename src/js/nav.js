
import { loadComponent } from '../main.js';

loadComponent('./components/nav.html', 'nav').then(() => {
  initNav();
});

// 初始化導航欄功能
export function initNav() {

    // 檢查導航欄是否存在且有內容
    const navElement = document.getElementById('nav');
    if (!navElement || navElement.innerHTML.trim() === '') {
        console.log('Navigation element not ready, skipping initialization');
        return;
    }

    // 檢查是否已經初始化過
    if (navElement.hasAttribute('data-nav-initialized')) {
        return;
    }

    console.log('Initializing navigation...');
    // 標記為已初始化
    navElement.setAttribute('data-nav-initialized', 'true');

    // 下拉選單的 hover 效果
    const dropdownTrigger = document.querySelector('#product-dropdown-trigger');
    const dropdownMenu = document.querySelector('#product-dropdown-menu');

    let hideTimeout;

    if (dropdownTrigger && dropdownMenu) {
        // 修復後的下拉選單控制
        dropdownTrigger.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
            dropdownMenu.classList.remove('hidden');
            dropdownMenu.classList.add('flex','flex-col');
        });

        // 滑出 trigger → 設定延遲隱藏
        dropdownTrigger.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                dropdownMenu.classList.add('hidden');
                dropdownMenu.classList.remove('flex','flex-col');
            }, 500); // 延遲 0.5 秒隱藏
        });

        // 滑入 dropdown menu → 取消隱藏
        dropdownMenu.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
        });

        // 滑出 dropdown menu → 再次啟動延遲隱藏
        dropdownMenu.addEventListener('mouseleave', () => {
            hideTimeout = setTimeout(() => {
                dropdownMenu.classList.add('hidden');
                dropdownMenu.classList.remove('grid', 'grid-cols-2');
            }, 500);
        });
    }

    // 導航欄的 active 狀態
    const buttons = document.querySelectorAll('.nav-btn');
    // 獲取 logo 元素
    const logo = document.querySelector('.logo');
    const currentPath = window.location.pathname;

    // 如果當前路徑是 /index.html，切換 logo 狀態
    if (currentPath === './index.html') {
    logo.classList.add('active');
    } 

    buttons.forEach(btn => {
        const href = btn.getAttribute('href');
        if (href && currentPath.includes(href)) {
            btn.classList.add('active');
        }
    });


    //「產品」按鈕的 active 狀態
    const productButton = document.querySelector('#product-dropdown-trigger > .nav-btn');
    if (currentPath.includes('./products.html')) {
        productButton.classList.add('active');
    }

    // mobile-menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileProductToggle = document.getElementById('mobile-product-toggle');
    const mobileProductMenu = document.getElementById('mobile-product-menu');

    let isMobileMenuOpen = false;

    // 切換 mobile menu 顯示/隱藏
    function toggleMobileMenu() {
        if (isMobileMenuOpen) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col', 'justify-center', 'items-center');

            // 顯示開啟按鈕，隱藏關閉按鈕
            mobileMenuBtn.classList.remove('hidden');
            mobileMenuClose.classList.add('hidden');

        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex', 'flex-col', 'justify-center', 'items-center');

            // 隱藏開啟按鈕，顯示關閉按鈕
            mobileMenuBtn.classList.add('hidden');
            mobileMenuClose.classList.remove('hidden');
    
        }
        isMobileMenuOpen = !isMobileMenuOpen;
    }


    // 綁定開啟按鈕點擊事件
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            toggleMobileMenu();
        });
    }


    // 綁定關閉按鈕點擊事件
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            toggleMobileMenu();
        });
    }

    // 移動端產品選單切換
    if (mobileProductToggle && mobileProductMenu) {
        mobileProductToggle.addEventListener('click', () => {
            mobileProductMenu.classList.toggle('hidden');
            // 旋轉箭頭
            const arrow = mobileProductToggle.querySelector('svg');
            if (arrow) {
                arrow.classList.toggle('rotate-180');
            }
        });
    }
    
    // 監聽視窗大小變化
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            // 當螢幕寬度大於等於 768px 時，強制隱藏 mobile-menu 並重置狀態
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex', 'flex-col', 'justify-center', 'items-center');
            isMobileMenuOpen = false;
            // 同時隱藏產品子選單
            if (mobileProductMenu) {
                mobileProductMenu.classList.add('hidden');
            }
        }
    });
}