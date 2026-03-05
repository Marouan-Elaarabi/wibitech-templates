/** athar-header start **/

function atharHeader() {
  const root = document.querySelector("[data-name='athar-header']");
  if (!root) return;

  const content = root.querySelector(".content");
  if (!content) return;

  const humbergerIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger-light.svg";
  const closeIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/close-light.svg";

  const dropDownIcon = content.querySelector(".drop-down img");
  if (!dropDownIcon) return;

  dropDownIcon.addEventListener("click", (e) => {
    const open = content.classList.contains("open");
    !open ? (dropDownIcon.src = closeIcon) : (dropDownIcon.src = humbergerIcon);
    content.classList.toggle("open");
  });
}

atharHeader();

/** athar-header end **/

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