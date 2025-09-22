/** lingualearn-header start **/

function headerLogic() {
  const openIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger.svg";
  const closeIcon =
    "https:///cdn.ouasl.com/assets/default-images-header-footer/close.svg";

  const icons = document.querySelectorAll("#responsive-icon");
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
      } else {
        icon.style.zIndex = "0";
        icon.style.position = "static";
      }

      responsiveElms.classList.toggle("active", !isClosed);
      isClosed = !isClosed;
    });
  });
  return null;
}
headerLogic();

/** lingualearn-header end **/

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
