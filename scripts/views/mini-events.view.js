export default function renderMiniEvents() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/mini-events</div>
        <div class="view__meta">SUPPLEMENTARY_ENGINEERING_CHALLENGES</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">EVENT_STRUCTURE</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">FORMAT</span>
            <span class="spec__value">TIME_BOUND_TECHNICAL_ROUNDS</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">EVALUATION</span>
            <span class="spec__value">PERFORMANCE_AND_REASONING</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">PURPOSE</span>
            <span class="spec__value">SYSTEMS_THINKING_REINFORCEMENT</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">01_GIT_DISCIPLINE_CHALLENGE</div>

        <div class="dense-list">
          <div class="dense-list__item">Simulated repository scenario</div>
          <div class="dense-list__item">Commit restructuring under constraints</div>
          <div class="dense-list__item">History readability evaluation</div>
          <div class="dense-list__item">Branch strategy reasoning</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">02_DEBUGGING_SPRINT</div>

        <div class="dense-list">
          <div class="dense-list__item">Pre-seeded defect analysis</div>
          <div class="dense-list__item">Time-limited bug isolation</div>
          <div class="dense-list__item">Root cause explanation required</div>
          <div class="dense-list__item">Performance impact evaluation</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">03_ARCHITECTURE_CRITIQUE_ARENA</div>

        <div class="dense-list">
          <div class="dense-list__item">Design pattern evaluation</div>
          <div class="dense-list__item">Tradeoff analysis under scale assumptions</div>
          <div class="dense-list__item">Abstraction boundary assessment</div>
          <div class="dense-list__item">Failure surface identification</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">04_PERFORMANCE_OPTIMIZATION_ROUND</div>

        <div class="dense-list">
          <div class="dense-list__item">Runtime bottleneck identification</div>
          <div class="dense-list__item">Algorithmic complexity reasoning</div>
          <div class="dense-list__item">Memory footprint awareness</div>
          <div class="dense-list__item">Tradeoff justification</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">EVALUATION_INTENT</div>

        <div class="codeblock">
Mini events are designed to isolate and evaluate
core engineering competencies:

- structured thinking
- debugging discipline
- architectural reasoning
- performance awareness
        </div>
      </div>

    </div>
  `;
}