/** seclayout-header-1 start **/

function seclayoutHeader1() {
  const openIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger.svg";
  const closeIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/close.svg";
  const icons = document.querySelectorAll(
    "[data-name='seclayout-header-1'] #responsive-icon"
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
      } else {
        icon.style.zIndex = "0";
        icon.style.position = "static";
      }

      responsiveElms.classList.toggle("active", !isClosed);
      document.body.style.overflow = !isClosed ? "hidden" : "";
      isClosed = !isClosed;
    });
  });
  return null;
}
seclayoutHeader1();

/** seclayout-header-1 end **/