/** seclayout-demand-1 start **/

function seclayoutDemand1() {
  const section = document.querySelector("[data-name='seclayout-demand-1']");
  if (!section) return;
  const offers = section.querySelectorAll(".demand-offer");
  offers.forEach((offer) => {
    offer.addEventListener("click", () => {
      offers.forEach((o) => o.classList.remove("active"));
      offer.classList.add("active");
      offer.querySelector("input[type='radio']").checked = true;
    });
  });
}
seclayoutDemand1();

/** seclayout-demand-1 end **/