function swiperScriptCars() {
  const sliderEl = Array.from(document.querySelectorAll(".carmaster-carousel-slider"));
  if (!sliderEl.length) return;

  for (let i = 0; i < sliderEl.length; i++) {
    const swiper = new Swiper(sliderEl[i], {
      allowTouchMove: true,
      navigation: {
        nextEl: ".next-carsSlide-arrow",
        prevEl: ".prev-carsSlide-arrow",
      },
      loop: true,
    });
    if (swiper) {
      swiper?.update();
      swiper?.slideTo(0);
    }
  }
}
swiperScriptCars();
