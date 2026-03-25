const faq6Section = document.querySelector("#seclayout-faq-6");

if (faq6Section) {
  const allDetails = faq6Section.querySelectorAll(".accordion details");

  allDetails.forEach((detail) => {
    const summary = detail.querySelector("summary");
    const wrapper = detail.querySelector(".description-wrapper");

    // Initialize max-height based on open state
    if (detail.open) {
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
    } else {
      wrapper.style.maxHeight = "0";
    }

    summary.addEventListener("click", (e) => {
      e.preventDefault();

      if (detail.open) {
        close(detail);
      } else {
        open(detail);
      }
    });
  });

  function open(detail) {
    const wrapper = detail.querySelector(".description-wrapper");
    detail.setAttribute("open", "");
    wrapper.style.maxHeight = "0";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        wrapper.style.maxHeight = wrapper.scrollHeight + "px";
      })
    );
  }

  function close(detail) {
    const wrapper = detail.querySelector(".description-wrapper");
    wrapper.style.maxHeight = wrapper.scrollHeight + "px";
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        wrapper.style.maxHeight = "0";
      })
    );
    wrapper.addEventListener(
      "transitionend",
      () => detail.removeAttribute("open"),
      { once: true }
    );
  }
}
