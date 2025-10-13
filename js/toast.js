const container = document.getElementById("toast-container");
// TODO delete count
let count = 0

function sendToast(msg) {
  count++
  const toast = document.createElement("div");
  toast.classList.add("toast");

  const p = document.createElement("p");
  p.innerText = msg + count;

  toast.appendChild(p);

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
}

