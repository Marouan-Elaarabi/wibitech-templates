/** seclayout-demand-4 start **/

function seclayoutDemand4() {
  const section = document.querySelector("[data-name='seclayout-demand-4']");
  if (!section) return;
  const minusBtn = section.querySelector(".qty-btn.minus");
  const plusBtn = section.querySelector(".qty-btn.plus");
  const qtyValue = section.querySelector(".qty-value");
  if (!minusBtn || !plusBtn || !qtyValue) return;

  minusBtn.addEventListener("click", () => {
    let val = parseInt(qtyValue.textContent);
    if (val > 1) {
      qtyValue.textContent = val - 1;
    }
  });

  plusBtn.addEventListener("click", () => {
    let val = parseInt(qtyValue.textContent);
    qtyValue.textContent = val + 1;
  });
}
seclayoutDemand4();

/** seclayout-demand-4 end **/