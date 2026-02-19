export default function renderHosts() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/hosts</div>
        <div class="view__meta">ORGANIZATIONAL_STRUCTURE</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">HOSTING_INSTITUTION</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">INSTITUTION</span>
            <span class="spec__value">WELHAM_BOYS'_SCHOOL</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">DEPARTMENT</span>
            <span class="spec__value">INFORMATION_TECHNOLOGY_DEPARTMENT</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">MODE</span>
            <span class="spec__value">INTER_SCHOOL_ONLINE</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">PROGRAM_COORDINATION</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">PROGRAM_COORDINATOR</span>
            <span class="spec__value">PIYUSH_SINGHAL</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">ROLE_SCOPE</span>
            <span class="spec__value">STRUCTURE_DESIGN_AND_EXECUTION</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">STUDENT_LEADERSHIP</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">IT_CAPTAIN</span>
            <span class="spec__value">PAARTH_AGARWALLA</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">RESPONSIBILITY</span>
            <span class="spec__value">STUDENT_TECHNICAL_OVERSIGHT</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">GOVERNANCE_MODEL</div>

        <div class="dense-list">
          <div class="dense-list__item">Faculty-supervised evaluation panel</div>
          <div class="dense-list__item">Structured rubric-based scoring</div>
          <div class="dense-list__item">Public rule clarification system</div>
          <div class="dense-list__item">Formal dispute review protocol</div>
        </div>
      </div>

    </div>
  `;
}