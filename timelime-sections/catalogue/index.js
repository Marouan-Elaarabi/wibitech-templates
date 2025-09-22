// d2c8fc43-c1fd-4fa4-bf3b-737552b72b41

/** timelime-catalogue start **/

function timelimeCatalogue() {
  const root = document.querySelector("[data-name='timelime-catalogue']");
  if (!root) return;

  const gallery = root.querySelector(".products-gallery");
  const mainImg = root.querySelector(".main-img img");
  if (!gallery || !mainImg) return;

  gallery.addEventListener("click", (e) => {
    const clicked = e.target.closest(".product-imagery img");
    if (!clicked || !gallery.contains(clicked)) return;
    if (clicked.parentElement.classList.contains("active")) return;

    const prevActive = gallery.querySelector(".product-imagery.active");
    if (prevActive) prevActive.classList.remove("active");
    clicked.parentElement.classList.add("active");

    // const newImg = clicked.querySelector("img");
    if (!clicked && !clicked.src) return;

    const handler = () => {
      mainImg.src = clicked.src;
      mainImg.classList.remove("fade-out");
      mainImg.removeEventListener("transitionend", handler);
    };

    mainImg.classList.add("fade-out");
    mainImg.addEventListener("transitionend", handler);
  });
}

timelimeCatalogue();

/** timelime-catalogue end **/
