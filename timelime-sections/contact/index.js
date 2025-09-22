// 358a7a21-3c8e-4a2f-bcfc-cf9d58c083e9

/** timelime-contact start **/

function timelimeContact() {
  const root = document.querySelector("[data-name='timelime-contact']");
  if (!root) return;

  const formContent = root.querySelector(".ouasl_field-radios");
  if (!formContent) return;

  formContent.addEventListener("click", (e) => {
    const clicked = e.target.closest(".radio-label");
    // console.log(clicked);
    if (!clicked || !formContent.contains(clicked)) return;
    if (clicked.classList.contains("active")) return;

    const prevActive = formContent.querySelector(".radio-label.active");
    if (prevActive) prevActive.classList.remove("active");
    clicked.classList.add("active");
  });
}

timelimeContact();

/** timelime-contact end **/
