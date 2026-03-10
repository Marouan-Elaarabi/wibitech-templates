/** seclayout-faq-2 start **/

function seclayoutFaq2() {
  const section = document.querySelector("[data-name='seclayout-faq-2']");
  if (!section) return;
  const details = section.querySelectorAll("details");
  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      const icon = detail.querySelector(".icon");
      if (detail.open) {
        icon.textContent = "∧";
      } else {
        icon.textContent = "∨";
      }
    });
  });
}
seclayoutFaq2();

/** seclayout-faq-2 end **/