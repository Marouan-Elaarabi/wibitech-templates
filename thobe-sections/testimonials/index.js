/** thobe-testimonials start **/

function testimonialsLogic() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      368: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
}
testimonialsLogic();

/** thobe-testimonials end **/