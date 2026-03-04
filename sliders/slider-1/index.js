// b0d5ccce-993c-44a6-a608-b36eed4b95b2

/* geschtalt_slider start */
var geschtalt_slider = new Swiper(".slider-image", {
  allowTouchMove: false,
  rewind: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

geschtalt_slider.update();
geschtalt_slider.slideTo(0);
/* geschtalt_slider end */
