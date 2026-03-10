const faq1Section = document.querySelector("#seclayout-faq-1");

if (faq1Section) {
  const details = faq1Section.querySelectorAll(".accordion details");

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
