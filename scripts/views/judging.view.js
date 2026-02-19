export default function renderJudging() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/judging</div>
        <div class="view__meta">STRUCTURED_EVALUATION_MODEL</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">TOTAL_SCORE</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">MAX_POINTS</span>
            <span class="spec__value">100</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">EVALUATION_MODE</span>
            <span class="spec__value">RUBRIC_BASED</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">SCORING_MODEL</span>
            <span class="spec__value">WEIGHTED_CATEGORY_SYSTEM</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">CATEGORY_DISTRIBUTION</div>

        <div class="table-wrapper">
          <table class="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th class="table__score">Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Systems Architecture</td>
                <td>Modularity, separation of concerns, extensibility, failure handling</td>
                <td class="table__score">25</td>
              </tr>
              <tr>
                <td>Engineering Rigor</td>
                <td>Testing depth, edge case coverage, logging quality</td>
                <td class="table__score">20</td>
              </tr>
              <tr>
                <td>Commit Discipline</td>
                <td>Atomic commits, logical progression, no bulk dumps</td>
                <td class="table__score">10</td>
              </tr>
              <tr>
                <td>Problem Difficulty</td>
                <td>Technical ambition and system complexity</td>
                <td class="table__score">15</td>
              </tr>
              <tr>
                <td>Execution Quality</td>
                <td>Functional reliability, stability, performance awareness</td>
                <td class="table__score">15</td>
              </tr>
              <tr>
                <td>Technical Communication</td>
                <td>Architecture clarity, engineering log quality, explanation ability</td>
                <td class="table__score">10</td>
              </tr>
              <tr>
                <td>Developer Experience</td>
                <td>CLI usability and documentation clarity</td>
                <td class="table__score">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="block">
        <div class="block__title">EVALUATION_METHOD</div>

        <div class="dense-list">
          <div class="dense-list__item">Structured rubric scoring</div>
          <div class="dense-list__item">Multi-judge technical review</div>
          <div class="dense-list__item">Architecture viva component</div>
          <div class="dense-list__item">Random code interrogation</div>
          <div class="dense-list__item">Commit history audit</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">SCORING_PHILOSOPHY</div>

        <div class="codeblock">
Process integrity outweighs surface polish.
Architectural clarity outweighs UI design.
Structured reasoning outweighs feature count.
        </div>
      </div>

    </div>
  `;
}