// 計數動畫

document.addEventListener('DOMContentLoaded', () => {
    const countingSection = document.querySelector('#counting-section');
    const counters = document.querySelectorAll('#num');
  
    // 定義計數動畫函數
    function runCounting() {
      counters.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-val'), 10);
        let currentValue = 0;
        const increment = Math.ceil(targetValue / 100); // 設置增量
  
        const updateCounter = () => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            counter.textContent = targetValue;
          } else {
            counter.textContent = currentValue;
            requestAnimationFrame(updateCounter);
          }
        };
  
        updateCounter();
      });
    }
  
    // 使用 Intersection Observer 監測 section 是否進入視窗
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounting(); // 當 section 進入視窗時觸發計數動畫
          }
        });
      },
      { threshold: 0.5 } // 當 section 50% 可見時觸發
    );
  
    observer.observe(countingSection);
});