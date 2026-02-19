document.addEventListener("DOMContentLoaded", () => {

  const ageModal = document.getElementById("ageModal");
  const enterBtn = document.getElementById("enterBtn");
  const exitBtn = document.getElementById("exitBtn");
  const siteWrapper = document.getElementById("siteWrapper");

  // Activate modal state
  document.body.classList.add("lock-scroll");
  siteWrapper.classList.add("blurred");

  // Enter site
  enterBtn.addEventListener("click", () => {
    ageModal.classList.add("fade-out");

    setTimeout(() => {
      ageModal.style.display = "none";
      document.body.classList.remove("lock-scroll");
      siteWrapper.classList.remove("blurred");
    }, 400);
  });

  // Exit site
  exitBtn.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });

});
