const faq2Section = document.querySelector("#seclayout-faq-2");

if (faq2Section) {
  const details = faq2Section.querySelectorAll(".accordion details");

  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        details.forEach((other) => {
          if (other !== detail) {
            other.removeAttribute("open");
          }
        });
      }
    });
  });
}
