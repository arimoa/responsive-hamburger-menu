var hamburgerBtn = document.getElementById("hamburger-icon");
var asideEl = document.getElementById("aside");

hamburgerBtn.addEventListener("click", (e) => {
  asideEl.classList.toggle("show-menu");
  e.stopPropagation();
});

document.addEventListener("click", () => {
  asideEl.classList.remove("show-menu");
});
