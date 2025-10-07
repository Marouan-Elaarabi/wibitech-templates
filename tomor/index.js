/** tomor-header start **/

function tomorHeader() {
  const root = document.querySelector("[data-name='tomor-header']");
  if (!root) return;

  const linksWrapper = root.querySelector(".links-wrapper");
  if (!linksWrapper) return;

  const humbergerIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger.svg";
  const closeIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/close.svg";

  const menuIcon = root.querySelector(".menu-icon img");
  if (!menuIcon) return;

  menuIcon.addEventListener("click", () => {
    const open = linksWrapper.classList.contains("open");
    !open ? (menuIcon.src = closeIcon) : (menuIcon.src = humbergerIcon);
    linksWrapper.classList.toggle("open");
  });
}

tomorHeader();

/** tomor-header end **/

/** tomor-testimonials start **/

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
