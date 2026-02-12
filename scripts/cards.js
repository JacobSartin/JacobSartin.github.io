const cards = document.getElementsByClassName("card");

document.getElementById("cards").onmousemove = (ev) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

function copyURLToClipboard() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Copied the url: " + url))
    .catch((err) => console.error("Failed to copy URL:", err));
}

function openURLInNewTab() {
  const url = window.location.href;
  window.open(url);
}

function closeTab() {
  window.close();
}

document.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) {
    return;
  }

  const action = card.dataset.action;
  if (action === "duplicate") {
    openURLInNewTab();
  } else if (action === "copy") {
    copyURLToClipboard();
  } else if (action === "close") {
    closeTab();
  }
});
