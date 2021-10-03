//AOS
AOS.init({
  once: true,
});


// swiper
const swiper = new Swiper(".userResponseSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  controller: {
    inverse: true,
  },
  

});

