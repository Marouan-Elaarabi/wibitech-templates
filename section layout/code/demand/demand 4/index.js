(function () {
  var section = document.querySelector("#seclayout-demand-4");
  if (!section) return;

  var qtyInput = section.querySelector(".qty-input");
  var minusBtn = section.querySelector(".qty-minus");
  var plusBtn = section.querySelector(".qty-plus");

  minusBtn.addEventListener("click", function () {
    var current = parseInt(qtyInput.value) || 1;
    if (current > 1) {
      qtyInput.value = current - 1;
    }
  });

  plusBtn.addEventListener("click", function () {
    var current = parseInt(qtyInput.value) || 1;
    qtyInput.value = current + 1;
  });
})();
