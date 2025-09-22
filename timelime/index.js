/** timelime-catalogue start **/

function timelimeCatalogue() {
  const root = document.querySelector("[data-name='timelime-catalogue']");
  if (!root) return;

  const gallery = root.querySelector(".products-gallery");
  const mainImg = root.querySelector(".main-img img");
  if (!gallery || !mainImg) return;

  gallery.addEventListener("click", (e) => {
    const clicked = e.target.closest(".product-imagery");
    if (!clicked || !gallery.contains(clicked)) return;
    if (clicked.classList.contains("active")) return;

    const prevActive = gallery.querySelector(".product-imagery.active");
    if (prevActive) prevActive.classList.remove("active");
    clicked.classList.add("active");

    const newImg = clicked.querySelector("img");
    if (!newImg && !newImg.src) return;

    const handler = () => {
      mainImg.src = newImg.src;
      mainImg.classList.remove("fade-out");
      mainImg.removeEventListener("transitionend", handler);
    };

    mainImg.classList.add("fade-out");
    mainImg.addEventListener("transitionend", handler);
  });
}

timelimeCatalogue();

/** timelime-catalogue end **/

/** timelime-contact start **/

function timelimeContact() {
  const root = document.querySelector("[data-name='timelime-contact']");
  if (!root) return;

  const formContent = root.querySelector(".form-inner-content");
  if (!formContent) return;

  formContent.addEventListener("click", (e) => {
    const clicked = e.target.closest(".radio-label");
    if (!clicked || !formContent.contains(clicked)) return;
    if (clicked.classList.contains("active")) return;

    const prevActive = formContent.querySelector(".radio-label.active");
    if (prevActive) prevActive.classList.remove("active");
    clicked.classList.add("active");
  });
}

timelimeContact();

/** timelime-contact end **/
