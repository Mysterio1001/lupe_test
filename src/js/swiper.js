// Swiper
import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

// index.html 
// const newsSwiper = new Swiper('.news-swiper', {
//   modules: [pagination],
//   slidesPerView: 3,
//   spaceBetween: 32,
//   autoHeight: false,
//   grabCursor: true,
//   pagination: {
//     el: '.news-swiper .swiper-pagination',
//     clickable: true,
//   },

// });

// about.html timeline swiper
const timelineSwiper = new Swiper('.timeline-swiper', {
  modules: [Pagination],
  slidesPerView: 5,
  spaceBetween: 12,
  freeMode: true,
  pagination: {
    el: '.timeline-swiper .swiper-pagination',
    clickable: true,
  },
  on: {
    init: function () {
      // 滑動到最後一個slide
      this.slideTo(this.slides.length - 1);
    },
  }

});

// about.html team swiper
const teamSwiper = new Swiper(".team-swiper", {
  modules: [Pagination, Navigation],
  spaceBetween: "32",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});

// products.html
const heroSwiper = new Swiper('.hero-swiper', {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero-swiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    autoplayTimeLeft(swiper, time, progress) {
      const circle = document.querySelector('.autoplay-progress circle:last-child');
      const text = document.querySelector('.autoplay-progress span');
      if (circle) {
        circle.style.strokeDashoffset = 125.6 * (1 - progress); // 進度環更新
      }
      if (text) {
        text.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  }
});

// const heroSwiper = new Swiper('.hero-swiper', {

//   modules: [Autoplay, Navigation, Pagination],
//   slidesPerView: 1,
//   spaceBetween: 30,
//   autoHeight: false,
//   grabCursor: true,
//   pagination: {
//     el: '.hero-swiper .swiper-pagination',
//     clickable: true,
//   },
// });

const platformSwiper = new Swiper('.platform-swiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: false,
  grabCursor: true,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },

});

// support.html
const swiper = new Swiper('.tech-manual', {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",

  },
});