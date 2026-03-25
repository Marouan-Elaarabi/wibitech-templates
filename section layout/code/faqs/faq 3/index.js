const faq3Section = document.querySelector("#seclayout-faq-3");

if (faq3Section) {
  const details = faq3Section.querySelectorAll(".accordion details");

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
