/** lawfirm-testimonials start **/

function lawfirmTestimonials() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
  });

  const rightArrow = document.querySelectorAll(
    "[data-name='lawfirm-testimonials'] .right-arrow"
  );
  if (rightArrow) {
    rightArrow.forEach((arr) => {
      arr.addEventListener("click", () => {
        swiper.slideNext();
      });
    });
  }

  const leftArrow = document.querySelectorAll(
    "[data-name='lawfirm-testimonials'] .left-arrow"
  );
  if (leftArrow) {
    leftArrow.forEach((arr) => {
      arr.addEventListener("click", () => {
        swiper.slidePrev();
      });
    });
  }
}
lawfirmTestimonials();

/** lawfirm-testimonials end **/
