/** seclayout-header-5 start **/

function seclayoutHeader5() {
  const openIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger.svg";
  const closeIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/close.svg";
  const icons = document.querySelectorAll(
    "[data-name='seclayout-header-5'] #responsive-icon"
  );
  if (!icons.length) return;

  icons.forEach((icon) => {
    const header = icon.closest("header");
    const navRight = header.querySelector(".nav-right");
    const navLeft = header.querySelector(".nav-left");

    const mobileMenu = document.createElement("div");
    mobileMenu.className = "mobile-menu";

    const allLinks = [
      ...navRight.querySelectorAll(".link"),
      ...navLeft.querySelectorAll(".link"),
    ];

    const ul = document.createElement("ul");
    ul.className = "menu oa-nav__list";
    allLinks.forEach((link) => {
      const clone = link.cloneNode(true);
      ul.appendChild(clone);
    });

    mobileMenu.appendChild(ul);
    header.querySelector(".container").appendChild(mobileMenu);

    let isClosed = false;

    icon.addEventListener("click", () => {
      icon.src = isClosed ? openIcon : closeIcon;

      if (!isClosed) {
        icon.style.zIndex = "9999";
        icon.style.position = "relative";
      } else {
        icon.style.zIndex = "0";
        icon.style.position = "static";
      }

      mobileMenu.classList.toggle("active", !isClosed);
      document.body.style.overflow = !isClosed ? "hidden" : "";
      isClosed = !isClosed;
    });
  });
  return null;
}
seclayoutHeader5();

/** seclayout-header-5 end **/
