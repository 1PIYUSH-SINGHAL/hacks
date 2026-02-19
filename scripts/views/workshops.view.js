export default function renderWorkshops() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/workshops</div>
        <div class="view__meta">ENGINEERING_PREPARATION_TRACK</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">PROGRAM_INTENT</div>

        <div class="codeblock">
Workshops are designed to strengthen
systems thinking, tooling literacy,
and architectural reasoning before
and during the hackathon lifecycle.
        </div>
      </div>

      <div class="block">
        <div class="block__title">01_DESIGNING_SCALABLE_CLI_TOOLS</div>

        <div class="dense-list">
          <div class="dense-list__item">Command parsing strategies</div>
          <div class="dense-list__item">Modular CLI architecture</div>
          <div class="dense-list__item">Separation of concerns</div>
          <div class="dense-list__item">Extensibility planning</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">02_WRITING_TESTABLE_CODE_UNDER_CONSTRAINT</div>

        <div class="dense-list">
          <div class="dense-list__item">Unit testing fundamentals</div>
          <div class="dense-list__item">Edge case discovery patterns</div>
          <div class="dense-list__item">Mocking and isolation strategies</div>
          <div class="dense-list__item">Debug-first development thinking</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">03_READING_GIT_HISTORY_LIKE_A_JUDGE</div>

        <div class="dense-list">
          <div class="dense-list__item">Commit atomicity evaluation</div>
          <div class="dense-list__item">Refactor visibility</div>
          <div class="dense-list__item">Progression integrity analysis</div>
          <div class="dense-list__item">Detecting suspicious commit patterns</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">04_SYSTEMS_THINKING_IN_SMALL_TOOLS</div>

        <div class="dense-list">
          <div class="dense-list__item">Abstraction boundary definition</div>
          <div class="dense-list__item">Failure surface anticipation</div>
          <div class="dense-list__item">Scaling assumptions</div>
          <div class="dense-list__item">Tradeoff articulation</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">DELIVERY_MODE</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">FORMAT</span>
            <span class="spec__value">LIVE_TECHNICAL_SESSIONS</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">FOCUS</span>
            <span class="spec__value">PRACTICAL_ENGINEERING_DISCIPLINE</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">ALIGNMENT</span>
            <span class="spec__value">DEVTOOLS_PROJECT_SCOPE</span>
          </div>
        </div>
      </div>

    </div>
  `;
}