export default function initLifecycleRuntime() {
  const phases = document.querySelectorAll(".pipeline__phase");
  if (!phases.length) return;

  const start = Date.now();

  function updatePhase() {
    const elapsedHours = (Date.now() - start) / 1000 / 3600;

    phases.forEach(phase => {
      const startHour = parseFloat(phase.dataset.start);
      const endHour = parseFloat(phase.dataset.end);

      phase.classList.remove("is-active", "is-dimmed");

      if (elapsedHours >= startHour && elapsedHours < endHour) {
        phase.classList.add("is-active");
      } else {
        phase.classList.add("is-dimmed");
      }
    });
  }

  updatePhase();
  setInterval(updatePhase, 5000);
}