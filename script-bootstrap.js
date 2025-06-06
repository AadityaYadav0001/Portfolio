document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle
  const darkBtn = document.getElementById("toggle-dark");
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // Change icon on toggle
    if (document.body.classList.contains("dark")) {
      darkBtn.textContent = "☀️";
    } else {
      darkBtn.textContent = "🌙";
    }
  });

  // Loading animation
  const loader = document.getElementById("loader-wrapper");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.opacity = "0";
      setTimeout(() => (loader.style.display = "none"), 500);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
