export default function renderDeliverables() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/deliverables</div>
        <div class="view__meta">MANDATORY_SUBMISSION_REQUIREMENTS</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">01_ARCHITECTURE_BRIEF</div>

        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__marker">[01]</div>
            <div class="checklist__content">
              <div class="checklist__title">System Diagram</div>
              Clear structural representation of core components.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[02]</div>
            <div class="checklist__content">
              <div class="checklist__title">Core Abstractions</div>
              Explanation of foundational architectural layers.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[03]</div>
            <div class="checklist__content">
              <div class="checklist__title">Tradeoffs</div>
              Documented reasoning for chosen design decisions.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[04]</div>
            <div class="checklist__content">
              <div class="checklist__title">Failure Points</div>
              Identified structural weaknesses and edge risks.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[05]</div>
            <div class="checklist__content">
              <div class="checklist__title">Scaling Assumptions</div>
              Explicit discussion of load and system growth behavior.
            </div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">02_ENGINEERING_LOG</div>

        <div class="checklist">
          <div class="checklist__item">
            <div class="checklist__marker">[01]</div>
            <div class="checklist__content">
              <div class="checklist__title">Decisions Made</div>
              Architectural and implementation decisions recorded.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[02]</div>
            <div class="checklist__content">
              <div class="checklist__title">Rejected Approaches</div>
              Alternatives evaluated and discarded.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[03]</div>
            <div class="checklist__content">
              <div class="checklist__title">Bugs Encountered</div>
              Documented failures and debugging insights.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[04]</div>
            <div class="checklist__content">
              <div class="checklist__title">Performance Notes</div>
              Observations regarding runtime and bottlenecks.
            </div>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">03_REPOSITORY_REQUIREMENTS</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">VISIBILITY</span>
            <span class="spec__value">PUBLIC_REQUIRED</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">FORCE_PUSH</span>
            <span class="spec__value">PROHIBITED</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">MIN_COMMITS</span>
            <span class="spec__value">15</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">BULK_DUMP_LIMIT</span>
            <span class="spec__value">&lt;40% LOC in final 3H</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">04_TEST_EVIDENCE</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">UNIT_TESTS</span>
            <span class="spec__value">REQUIRED</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">EDGE_CASE_COVERAGE</span>
            <span class="spec__value">MANDATORY</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">05_FINAL_PACKAGE</div>

        <div class="dense-list">
          <div class="dense-list__item">GitHub Repository Link</div>
          <div class="dense-list__item">Architecture PDF</div>
          <div class="dense-list__item">Engineering Log PDF</div>
          <div class="dense-list__item">Test Evidence</div>
          <div class="dense-list__item">3-Minute Recorded Demo</div>
        </div>
      </div>

      <div class="disqualification">
        <div class="disqualification__title">AUTOMATIC_DISQUALIFICATION</div>
        <div class="disqualification__item">Proven AI usage</div>
        <div class="disqualification__item">Plagiarism</div>
        <div class="disqualification__item">Pre-built solution reuse</div>
        <div class="disqualification__item">Force push to alter commit history</div>
      </div>

    </div>
  `;
}