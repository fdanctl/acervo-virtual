// Check for saved theme preference when page loads
const theme = localStorage.getItem("theme") || "system";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDark = theme === "dark" || (theme === "system" && prefersDark);

if (isDark) {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Theme toggle functionality
// Only start when page is loaded
document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");

  // Toggle start
  if (isDark) {
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  });

  // Save theme preference
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
