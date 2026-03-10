(function () {
  const section = document.querySelector("#seclayout-demand-1");
  if (!section) return;

  const offers = section.querySelectorAll(".demand-offer");

  offers.forEach(function (offer) {
    offer.addEventListener("click", function () {
      offers.forEach(function (o) {
        o.classList.remove("active");
      });
      offer.classList.add("active");
      offer.querySelector('input[type="radio"]').checked = true;
    });
  });
})();
