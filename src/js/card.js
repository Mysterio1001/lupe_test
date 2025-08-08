function applyCardLayout(activeIndex = 0) {
  const cards = document.querySelectorAll('.card');
  const isMobile = window.innerWidth < 768;

  cards.forEach((card, index) => {
    // 清除所有寬度和順序
    card.classList.remove(
      'w-1/2', 'w-1/3', 'w-1/6', 'w-2/3',
      'order-0', 'order-1', 'order-2', 'order-3'
    );

    if (isMobile) {
      // 行動版：改為兩排兩張
      // 排序：0、1、2、3 → order 0~3，排成兩排
      card.classList.add(`order-${index}`);

      // 寬度設定
      if (index === activeIndex || index === 3) {
        card.classList.add('w-2/3');
      } else {
        card.classList.add('w-1/3');
      }
    } else {
      // 桌機版：一排四張
      card.classList.add(`order-${index}`);
      if (index === activeIndex) {
        card.classList.add('w-1/2');
      } else {
        card.classList.add('w-1/6');
      }
    }
  });
}


