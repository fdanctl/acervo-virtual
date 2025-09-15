// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
});

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  themeToggle.checked = true;
  document.documentElement.setAttribute("data-theme", "dark");
}

// Save theme preference
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
