// Tab functionality
const tabTriggers = document.querySelectorAll(".tab-trigger");
const tabContents = document.querySelectorAll(".tab-content");

tabTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const targetTab = trigger.getAttribute("data-tab");

    // Remove active class from all triggers
    tabTriggers.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked trigger
    trigger.classList.add("active");

    // Hide all tab contents
    tabContents.forEach((content) => content.classList.add("hidden"));
    // Show target tab content
    const targetContent = document.getElementById(targetTab + "-content");
    if (targetContent) {
      targetContent.classList.remove("hidden");
    }
  });
});
