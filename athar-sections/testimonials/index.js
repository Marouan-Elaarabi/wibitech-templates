
/** athar-testimonials start **/

function testimonialsLogic() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1.8,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
testimonialsLogic();

/** athar-testimonials end **/