/** seclayout-demand-3 js start **/

(function () {
  const section = document.querySelector("#seclayout-demand-3");
  if (!section) return;

  section.querySelectorAll(".ouasl_field-radios").forEach(function (group) {
    group.querySelectorAll(".radio").forEach(function (label) {
      label.addEventListener("click", function () {
        group.querySelectorAll(".radio").forEach(function (l) {
          l.classList.remove("active");
        });
        label.classList.add("active");
      });
    });
  });
})();

/** seclayout-demand-3 js end **/
