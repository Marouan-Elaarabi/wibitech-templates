/** tomor-testimonials start **/

function testimonialsLogic() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });
}
testimonialsLogic();

/** tomor-testimonials end **/