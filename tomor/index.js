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
