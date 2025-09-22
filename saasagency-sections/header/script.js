/** saasagency-header start **/

function saasAgencyHeader() {
  const openIconSrc =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger-light.svg";
  const closeIconSrc =
    "https:///cdn.ouasl.com/assets/default-images-header-footer/close-light.svg";
  const icons = document.querySelectorAll(
    "header[data-name='saasagency-header'] #iconBar[data-menu='icon']"
  );
  if (!icons) return;
  icons.forEach((icon) => {
    let isClosed = false;
    const header = icon.closest("header");
    const navbarLinks = header?.querySelector(
      "header[data-name='saasagency-header'] .navigation-links[data-menu='navbar']"
    );
    if (!navbarLinks) return;
    icon.addEventListener("click", () => {
      isClosed = !isClosed;
      icon.src = isClosed ? closeIconSrc : openIconSrc;
      navbarLinks.classList.toggle("open");
    });
  });
}

saasAgencyHeader();

/** saasagency-header end **/
