/** ouasl-header start **/

function ouaslHeader() {
  const root = document.querySelector("[data-name='ouasl-header']");
  if (!root) return;

  const content = root.querySelector(".content");
  if (!content) return;

  const humbergerIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/hamburger-light.svg";
  const closeIcon =
    "https://cdn.ouasl.com/assets/default-images-header-footer/close-light.svg";

  const dropDownIcon = content.querySelector(".drop-down img");
  if (!dropDownIcon) return;

  dropDownIcon.addEventListener("click", (e) => {
    const open = content.classList.contains("open");
    !open ? (dropDownIcon.src = closeIcon) : (dropDownIcon.src = humbergerIcon);
    content.classList.toggle("open");
  });
}

ouaslHeader();

/** ouasl-header end **/
