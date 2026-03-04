/** naqa-header start **/

function naqaHeader() {
  const openIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger.svg";
  const closeIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/close.svg";
  const icons = document.querySelectorAll(
    "[data-name='naqa-header'] #responsive-icon"
  );
  if (!icons.length) return;
  var isClosed = false;
  icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var responsiveElms = icon
        .closest("header")
        .querySelector(".oa-menu-actions");
      icon.src = isClosed ? openIcon : closeIcon;

      if (!isClosed) {
        icon.style.zIndex = "9999";
        icon.style.position = "relative";
      } else {
        icon.style.zIndex = "0";
        icon.style.position = "static";
      }

      responsiveElms.classList.toggle("active", !isClosed);
      document.body.style.overflow = !isClosed ? "hidden" : "";
      isClosed = !isClosed;
    });
  });
}
naqaHeader();

/** naqa-header end **/

/** naqa-faq start **/

var faqItems = document.querySelectorAll("[data-name='naqa-faq'] .faq-question");

var i;
for (i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", function () {
    var parent = this.parentElement;
    var isActive = parent.classList.contains("active");

    var allItems = document.querySelectorAll("[data-name='naqa-faq'] .faq-item");
    var j;
    for (j = 0; j < allItems.length; j++) {
      allItems[j].classList.remove("active");
    }

    if (!isActive) {
      parent.classList.add("active");
    }
  });
}

/** naqa-faq end **/