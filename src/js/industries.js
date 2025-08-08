document.addEventListener('DOMContentLoaded', () => {
  
  const buttons = document.querySelectorAll('.industries-tab');
  const contents = document.querySelectorAll('.industry-content');
  
  // 初始設定：隱藏除了第一個以外的內容
  contents.forEach((c, index) => {
    if (index !== 0) c.classList.add('hidden');
  });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const number = btn.dataset.number;
      console.log(`👉 點了 tab number: ${number}`);

      buttons.forEach(b => b.classList.remove('focused'));
      btn.classList.add('focused');

      contents.forEach(c => c.classList.add('hidden'));
      const target = document.getElementById('industry-' + number);
      if (target) {
        target.classList.remove('hidden');
      } else {
        console.warn('⚠️ 沒找到內容區塊：industry-' + number);
      }
    });
  });
});
  
  