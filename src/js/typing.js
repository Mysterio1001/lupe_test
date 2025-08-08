// typing.js

const words = ['自主移動人形 ', '協作人形 ', '自主移動生物 ', '機械手臂 '];
const typingElement = document.getElementById('typing');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    delay = 50;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    delay = 100;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    delay = 1200; // 等待一段時間再開始刪除
    isDeleting = true;
    setTimeout(type, 2000); // 延長時間再開始刪除
    return;
    
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 500;
  }

  setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', type);
