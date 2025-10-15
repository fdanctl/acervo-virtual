const container = document.getElementById("toast-container");
// TODO delete count
let count = 0;

// svg's
const check =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>';
const x =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
const i =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert-icon lucide-circle-alert"><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>'

function sendToast(msg) {
  count++;
  const toast = document.createElement("div");
  toast.classList.add("toast");

  const lucideDiv = document.createElement("div");
  lucideDiv.innerHTML = i

  const textDiv = document.createElement("div");
  const h6 = document.createElement("h6");
  h6.innerText = "title";
  const p = document.createElement("p");
  p.innerText = msg + count;
  textDiv.append(h6, p);

  const bottomBorderDiv = document.createElement("div");

  toast.append(lucideDiv, textDiv, bottomBorderDiv);
  container.appendChild(toast);

  const duration = 5000;
  let elapsed = 0;
  let intervalId;

  const start = () => {
    intervalId = setInterval(() => {
      elapsed += 10;
      toast.lastChild.style.width = `${((duration - elapsed) / duration) * 100}%`;

      if (elapsed >= duration) {
        toast.remove();
        clearInterval(intervalId);
      }
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalId);
  };

  const finish = () => {
    clearInterval(intervalId);
    elapsed = duration;
    toast.remove();
  };

  start();
  toast.onmouseenter = pause;
  toast.onmouseleave = start;
  toast.onclick = finish;
}
