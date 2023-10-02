const hamburgerBtn = document.getElementById("hamburger-icon");
const asideEl = document.getElementById("aside");

hamburgerBtn.addEventListener("click", (e) => {
  asideEl.classList.toggle("show-menu");
  e.stopPropagation();
});

document.addEventListener("click", () => {
  asideEl.classList.remove("show-menu");
});
