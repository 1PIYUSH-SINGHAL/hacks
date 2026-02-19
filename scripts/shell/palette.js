const routes = [
  "identity",
  "lifecycle",
  "deliverables",
  "judging",
  "workshops",
  "mini-events",
  "communications",
  "institution",
  "hosts",
  "register"
];

let activeIndex = 0;
let isOpen = false;

function palette() {
  return document.getElementById("command-palette");
}

function input() {
  return document.getElementById("palette-input");
}

function results() {
  return document.getElementById("palette-results");
}

function openPalette() {
  isOpen = true;
  palette().classList.remove("hidden");
  input().value = "";
  renderResults("");
  input().focus();
}

function closePalette() {
  isOpen = false;
  palette().classList.add("hidden");
}

function navigate(route) {
  window.location.hash = route;
  closePalette();
}

function renderResults(query) {
  const container = results();
  container.innerHTML = "";

  const filtered = routes.filter(r =>
    r.toLowerCase().includes(query.toLowerCase())
  );

  filtered.forEach((route, index) => {
    const div = document.createElement("div");
    div.className = "palette__item";
    if (index === 0) div.classList.add("is-active");
    div.textContent = route;
    div.onclick = () => navigate(route);
    container.appendChild(div);
  });

  activeIndex = 0;
}

function moveSelection(direction) {
  const items = document.querySelectorAll(".palette__item");
  if (!items.length) return;

  items[activeIndex].classList.remove("is-active");
  activeIndex = (activeIndex + direction + items.length) % items.length;
  items[activeIndex].classList.add("is-active");
}

function selectActive() {
  const items = document.querySelectorAll(".palette__item");
  if (!items.length) return;
  navigate(items[activeIndex].textContent);
}

export default function initPalette() {
  document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openPalette();
      return;
    }

    if (!isOpen) return;

    if (e.key === "Escape") {
      closePalette();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveSelection(1);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      moveSelection(-1);
    }

    if (e.key === "Enter") {
      e.preventDefault();
      selectActive();
    }
  });

  input().addEventListener("input", e =>
    renderResults(e.target.value)
  );
}