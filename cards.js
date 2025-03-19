document.getElementById("cards").onmousemove = (ev) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = ev.clientX - rect.left,
      y = ev.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

export function copyURLToClipboard() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Copied the url: " + url))
    .catch((err) => console.error("Failed to copy URL:", err));
}

export function openURLInNewTab() {
  var url = window.location.href;
  window.open(url);
}

export function closeTab() {
  window.close();
}

// event listeners for buttons
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector('[data-action="duplicate"]')
    .addEventListener("click", openURLInNewTab);
  document
    .querySelector('[data-action="copy"]')
    .addEventListener("click", copyURLToClipboard);
  document
    .querySelector('[data-action="close"]')
    .addEventListener("click", closeTab);
});
