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

  if (!root) return;

  const formContent = root.querySelector(".form-clean");
  if (!formContent) return;

  formContent.addEventListener("change", (e) => {
    const input = e.target;

    // Handle radio buttons
    if (input.matches("input[type='radio']")) {
      const radioGroup = input.closest(".ouasl_field-radios");
      if (radioGroup) {
        radioGroup.querySelectorAll("label.radio.active").forEach((label) => {
          label.classList.remove("active");
        });
        const radioCurrentLabel = input.closest("label.radio");
        if (radioCurrentLabel) {
          radioCurrentLabel.classList.add("active");
        }
      }
    }

    // Handle checkboxes
    if (input.matches("input[type='checkbox']")) {
      const checkboxGroup = input.closest(".ouasl_field-checkbox");
      if (checkboxGroup) {
        const checkboxCurrentLabel = input.closest("label.radio");
        if (input.checked && checkboxCurrentLabel) {
          checkboxCurrentLabel.classList.add("active");
        } else if (checkboxCurrentLabel) {
          checkboxCurrentLabel.classList.remove("active");
        }
      }
    }
  });
}

cleanForm();

/** clean-form end **/
