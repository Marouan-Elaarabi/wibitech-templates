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
