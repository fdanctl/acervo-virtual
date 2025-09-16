const slider = document.querySelector(".horizontal-scroll");

let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
