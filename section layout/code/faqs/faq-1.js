/** seclayout-faq-1 start **/

function seclayoutFaq1() {
  const section = document.querySelector("[data-name='seclayout-faq-1']");
  if (!section) return;
  const details = section.querySelectorAll("details");
  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      const icon = detail.querySelector(".icon");
      if (detail.open) {
        icon.textContent = "−";
      } else {
        icon.textContent = "+";
      }
    });
  });
}
seclayoutFaq1();

/** seclayout-faq-1 end **/