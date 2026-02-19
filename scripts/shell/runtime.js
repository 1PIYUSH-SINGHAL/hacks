function generateCommitHash() {
  const chars = "abcdef0123456789";
  let hash = "";
  for (let i = 0; i < 7; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

function updateCommit() {
  const el = document.getElementById("commit-hash");
  if (!el) return;
  el.textContent = "commit: " + generateCommitHash();
}

function startClock() {
  const el = document.getElementById("runtime-clock");
  if (!el) return;

  const start = Date.now();

  setInterval(() => {
    const elapsed = Date.now() - start;
    const totalSeconds = Math.floor(elapsed / 1000);

    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    el.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

export default function initRuntime() {
  updateCommit();
  startClock();
}