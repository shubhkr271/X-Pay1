const ageModal = document.getElementById("ageModal");
const enterBtn = document.getElementById("enterBtn");
const exitBtn = document.getElementById("exitBtn");
const siteWrapper = document.getElementById("siteWrapper");

document.body.style.overflow = "hidden";

enterBtn.addEventListener("click", () => {
  ageModal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

exitBtn.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});
