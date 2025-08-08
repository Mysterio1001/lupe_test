import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// products.html
gsap.utils.toArray(".product-features").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
      // markers: true // 偵錯
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

});
