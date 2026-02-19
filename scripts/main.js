import initRouter from "./core/router.js";
import initPalette from "./shell/palette.js";
import initRuntime from "./shell/runtime.js";

let initialized = false;

function hideBootScreen() {
  const boot = document.getElementById("boot-screen");
  if (!boot) return;

  boot.style.transition = "opacity 300ms ease";
  boot.style.opacity = "0";

  setTimeout(() => {
    boot.remove();
  }, 300);
}

function initSidebarToggle() {
  const toggle = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");

  if (!toggle || !sidebar || !backdrop) return;

  function open() {
    sidebar.classList.add("is-open");
    backdrop.classList.remove("hidden");
  }

  function close() {
    sidebar.classList.remove("is-open");
    backdrop.classList.add("hidden");
  }

  toggle.addEventListener("click", open);
  backdrop.addEventListener("click", close);

  document.addEventListener("click", (e) => {
    if (e.target.closest(".sidebar__item")) {
      close();
    }
  });
}

function init() {
  if (initialized) return;
  initialized = true;

  initRouter();
  initRuntime();
  initPalette();
  initSidebarToggle();

  requestAnimationFrame(() => {
    hideBootScreen();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
