/* geschtalt_menu start */
document.querySelector(".hamburger").addEventListener("click", () => {
  let navBar = document.querySelector(".media_menu");
  navBar.classList.toggle("showMenu");
  if (navBar.classList.contains("showMenu")) {
    document
      .querySelector(".hamburger img")
      .setAttribute(
        "src",
        "https://cdn.ouasl.com/assets/default-images-header-footer/close-light.svg"
      );
  } else {
    document
      .querySelector(".hamburger img")
      .setAttribute(
        "src",
        "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger-light.svg"
      );
  }
});
/* geschtalt_menu end */

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

/* geschtalt-workday start */
var workday_slides = new Swiper(".workday_slides", {
  pagination: {
    el: ".ousel-pagination",
    clickable: true,
  },
});

workday_slides.update();
workday_slides.slideTo(0);
/* geschtalt-workday end */
