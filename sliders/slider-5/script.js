/** lingualearn-hero start **/

function heroLogic() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      368: {
        slidesPerView: 0.89,
        spaceBetween: 16,
        slidesOffsetBefore: 190,
      },
      768: {
        slidesPerView: 1.6,
        spaceBetween: 16,
        slidesOffsetBefore: -95,
      },
      1020: {
        slidesPerView: 2.4,
        spaceBetween: 16,
        slidesOffsetBefore: 100,
      },
    },
  });
}
heroLogic();

/** lingualearn-hero end **/
