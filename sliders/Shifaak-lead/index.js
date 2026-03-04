function swiperScriptHead() {
  const sliderEl = Array.from(document.querySelectorAll(".shifaak-sliders-wrapper"));
  if (!sliderEl.length) return;

  for(let i = 0;i < sliderEl.length; i++) {
    const swiper = new Swiper(sliderEl[i], {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
      },
    });
    if (swiper) {
      swiper?.update();
      swiper?.slideTo(0);
    }
  }
}
swiperScriptHead();
