const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView:3,
  spaceBetween: 30,
  slidePerGroupSkip:1,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
