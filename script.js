// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example future feature: alert on button click
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
});
