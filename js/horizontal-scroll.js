const slider = document.querySelector(".horizontal-scroll");
const borderL = document.querySelector(".border-fade.fade-left");
const borderR = document.querySelector(".border-fade.fade-right");

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

(borderL || borderR) &&
  slider.addEventListener("scroll", (e) => {
    const scrollLeft = e.target.scrollLeft;
    const maxScrollLeft = e.target.scrollWidth - e.target.clientWidth;

    if (scrollLeft > 16) {
      borderL.classList.add("visible");
    } else {
      borderL.classList.remove("visible");
    }

    if (scrollLeft < maxScrollLeft - 16) {
      borderR.classList.add("visible");
    } else {
      borderR.classList.remove("visible");
    }
  });
