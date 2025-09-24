/** clean-hero start **/

function cleanHero() {
  const root = document.querySelector("[data-name='clean-hero']");

  if (!root) return;

  const gallery = root.querySelector(".hero-img-carousel");
  const mainImg = root.querySelector(".hero-img img");
  if (!gallery || !mainImg) return;

  gallery.addEventListener("click", (e) => {
    const prevActive = gallery.querySelector(".hero-img-carousel-img.active");
    if (!prevActive) return;
    prevActive.classList.remove("active");

    const clicked = e.target.closest(".hero-img-carousel-img");
    if (!clicked) return;
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

cleanHero();

/** clean-hero end **/

/** clean-form start **/

function cleanForm() {
  const root = document.querySelector("[data-name='clean-form']");
  console.log(root);

  if (!root) return;

  const formContent = root.querySelector(".form-clean");
  if (!formContent) return;

  formContent.addEventListener("change", (e) => {
    const input = e.target;
    if (!input.matches("input[type='radio']:checked")) return;

    const group = input.closest(".ouasl_field-radios");
    if (!group) return;

    group.querySelectorAll("label.radio.active").forEach((label) => {
      label.classList.remove("active");
    });

    const currentLabel = input.closest("label.radio");
    if (currentLabel) {
      currentLabel.classList.add("active");
    }
  });
}

cleanForm();

/** clean-form end **/
