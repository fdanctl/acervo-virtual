const container = document.getElementById("toast-container");

// svg's
const check_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>';
const x_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
const i_icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert-icon lucide-circle-alert"><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>'

// success, warning, error
function sendToast(type, title, msg) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(type);

  const iconDiv = document.createElement("div");
  switch (type) {
    case "success":
      iconDiv.innerHTML = check_icon
      break;
    case "warning":
      iconDiv.innerHTML = i_icon
      break;
    case "error":
      iconDiv.innerHTML = x_icon
      break;
    default:
      console.error(`type ${type} doesn't exists`)
      return
  }

  const textDiv = document.createElement("div");
  const h6 = document.createElement("h6");
  h6.innerText = title;
  const p = document.createElement("p");
  p.innerText = msg;
  textDiv.append(h6, p);

  const bottomBorderDiv = document.createElement("div");

  toast.append(iconDiv, textDiv, bottomBorderDiv);
  container.appendChild(toast);

  const duration = 5000;
  let elapsed = 0;
  let intervalId;

  const finish = () => {
    toast.classList.add("transition-out");
    clearInterval(intervalId);
    toast.classList.remove("visible");
    toast.onmouseenter = null;
    toast.onmouseleave = null;
    setTimeout(() => {
      elapsed = duration;
      toast.remove();
    }, 500)
  };

  const start = () => {
    setTimeout(() => {
      toast.classList.add("visible");
    }, 50)
    intervalId = setInterval(() => {
      elapsed += 10;
      toast.lastChild.style.width = `${((duration - elapsed) / duration) * 100}%`;

      if (elapsed >= duration) {
        finish()
      }
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalId);
  };

  start();
  toast.onmouseenter = pause;
  toast.onmouseleave = start;
  toast.onclick = finish;
}
