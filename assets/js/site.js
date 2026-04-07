document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobilePanel = document.getElementById("mobilePanel");

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener("click", function () {
      mobilePanel.classList.toggle("is-open");
    });
  }

  const header = document.getElementById("siteHeader");

  function handleHeaderShadow() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.style.boxShadow = "0 0 22px rgba(177,18,38,0.22)";
    } else {
      header.style.boxShadow = "0 0 20px rgba(177,18,38,0.18)";
    }
  }

  handleHeaderShadow();
  window.addEventListener("scroll", handleHeaderShadow);
});