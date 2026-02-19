export default function renderLifecycle() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/lifecycle</div>
        <div class="view__meta">36H_RUNTIME_PIPELINE</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="pipeline">

        <div class="pipeline__phase">
          <div class="pipeline__header">
            <span class="pipeline__title">PHASE_1: Architecture & Setup</span>
            <span class="pipeline__time">00–02H</span>
          </div>
          <div class="pipeline__body">
            <div>Theme subcategory revealed</div>
            <div>Architecture brief submitted</div>
            <div>Initial repository setup</div>
            <div>First commit pushed during kickoff</div>
          </div>
        </div>

        <div class="pipeline__phase">
          <div class="pipeline__header">
            <span class="pipeline__title">PHASE_2: Core Build</span>
            <span class="pipeline__time">02–14H</span>
          </div>
          <div class="pipeline__body">
            <div>Core engine implementation</div>
            <div>Midway commit review</div>
            <div>Random technical questioning</div>
          </div>
        </div>

        <div class="pipeline__phase">
          <div class="pipeline__header">
            <span class="pipeline__title">PHASE_3: Hardening</span>
            <span class="pipeline__time">14–26H</span>
          </div>
          <div class="pipeline__body">
            <div>Unit testing</div>
            <div>Edge case validation</div>
            <div>Performance tuning</div>
            <div>Error handling stabilization</div>
          </div>
        </div>

        <div class="pipeline__phase">
          <div class="pipeline__header">
            <span class="pipeline__title">PHASE_4: Interface & Documentation</span>
            <span class="pipeline__time">26–32H</span>
          </div>
          <div class="pipeline__body">
            <div>CLI polishing</div>
            <div>README documentation</div>
            <div>Usage examples</div>
          </div>
        </div>

        <div class="pipeline__phase">
          <div class="pipeline__header">
            <span class="pipeline__title">PHASE_5: Audit & Demo</span>
            <span class="pipeline__time">32–36H</span>
          </div>
          <div class="pipeline__body">
            <div>Repository freeze</div>
            <div>10-minute demo</div>
            <div>5-minute technical grilling</div>
            <div>Random member viva</div>
          </div>
        </div>

      </div>

    </div>
  `;
}