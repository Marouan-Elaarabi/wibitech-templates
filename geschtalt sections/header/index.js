// 2065df32-68ff-4367-a864-3e5d4b08cd9b

/* geschtalt-menu start */

function geschtaltHeader() {
  const openIconSrc =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger-light.svg";
  const closeIconSrc =
    "https:///cdn.ouasl.com/assets/default-images-header-footer/close-light.svg";
  const icons = document.querySelectorAll(
    "[data-name='geschtalt-menu'] .hamburger"
  );
  if (!icons) return;
  icons.forEach((icon) => {
    let isClosed = false;
    const header = icon.closest("header");
    const navbarLinks = header?.querySelector(".media_menu");
    if (!navbarLinks) return;
    icon.addEventListener("click", () => {
      isClosed = !isClosed;
      icon.querySelector("img").src = isClosed ? closeIconSrc : openIconSrc;
      navbarLinks.classList.toggle("showMenu");
    });
  });
}

geschtaltHeader();

/* geschtalt-menu end */
