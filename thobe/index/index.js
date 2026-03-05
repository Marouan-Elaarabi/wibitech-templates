/** thobe-testimonials start **/

function testimonialsLogic() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      368: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
}
testimonialsLogic();

/** thobe-testimonials end **/

/** thobe-form start **/

function thobeForm() {
  const root = document.querySelector("[data-name='thobe-form']");
  if (!root) return;

  const formContent = root.querySelector(".form-thobe");
  if (!formContent) return;

  formContent.addEventListener("change", (e) => {
    const input = e.target;

    if (input.matches("input[type='radio']:checked")) {
      const radioGroup = input.closest(".ouasl_field-radios");
      if (!radioGroup) return;
      radioGroup.querySelectorAll("label.radio.active").forEach((label) => {
        label.classList.remove("active");
      });
      const selectedLabel = input.closest("label.radio");
      if (selectedLabel) {
        selectedLabel.classList.add("active");
      }
      return;
    }

    if (input.matches("input[type='checkbox']")) {
      const label = input.closest("label.radio");
      if (!label) return;
      if (input.checked) {
        label.classList.add("active");
      } else {
        label.classList.remove("active");
      }
    }
  });
}

thobeForm();

/** thobe-form end **/
