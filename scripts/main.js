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

function init() {
  if (initialized) return;
  initialized = true;

  initRouter();
  initRuntime();
  initPalette();

  requestAnimationFrame(() => {
    hideBootScreen();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}