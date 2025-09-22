/** lawfirm-header start **/

function lawfirmHeader() {
  const openIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger-light.svg";
  const closeIcon =
    "https:///cdn.ouasl.com/assets/default-images-header-footer/close-light.svg";
  const icons = document.querySelectorAll(
    "[data-name='lawfirm-header'] #responsive-icon"
  );
  if (!icons.length) return;
  let isClosed = false;
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const responsiveElms = icon
        .closest("header")
        .querySelector(".oa-menu-actions");
      icon.src = isClosed ? openIcon : closeIcon;

      if (!isClosed) {
        icon.style.zIndex = "9999";
        icon.style.position = "relative";
        document.querySelector(
          "[data-name='lawfirm-header']"
        ).style.backgroundColor = "#2c4e52";
      } else {
        icon.style.zIndex = "0";
        icon.style.position = "static";
        document.querySelector(
          "[data-name='lawfirm-header']"
        ).style.backgroundColor = "transparent";
      }

      responsiveElms.classList.toggle("active", !isClosed);
      isClosed = !isClosed;
    });
  });
  return null;
}
lawfirmHeader();

/** lawfirm-header end **/

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
