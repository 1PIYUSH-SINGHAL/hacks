export default function renderRisk() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/risk</div>
        <div class="view__meta">RISK_ASSESSMENT_AND_MITIGATION_MODEL</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">PRIMARY_RISK_VECTORS</div>

        <div class="table-wrapper">
          <table class="table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Description</th>
                <th>Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI Misuse</td>
                <td>Unauthorized AI-generated code or documentation</td>
                <td>Commit analysis + viva interrogation + code modification test</td>
              </tr>
              <tr>
                <td>Prewritten Solutions</td>
                <td>Teams using pre-built tools disguised as fresh builds</td>
                <td>Architecture checkpoint + scaling questions</td>
              </tr>
              <tr>
                <td>Judge Bias</td>
                <td>Subjective scoring variability</td>
                <td>Structured rubric + multi-judge review model</td>
              </tr>
              <tr>
                <td>Last-Minute Dumping</td>
                <td>Bulk commits near deadline</td>
                <td>LOC timing rule + commit progression audit</td>
              </tr>
              <tr>
                <td>Participant Burnout</td>
                <td>36-hour fatigue affecting quality</td>
                <td>Phased lifecycle structure + milestone checkpoints</td>
              </tr>
              <tr>
                <td>Connectivity Failure</td>
                <td>Internet instability during evaluation</td>
                <td>Offline-compatible tooling requirement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="block">
        <div class="block__title">ESCALATION_PROTOCOL</div>

        <div class="dense-list">
          <div class="dense-list__item">Written appeal within 30 minutes</div>
          <div class="dense-list__item">Reviewed by 3-judge technical panel</div>
          <div class="dense-list__item">Decision documented and final</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">SYSTEM_RESILIENCE_PRINCIPLE</div>

        <div class="codeblock">
The competition structure anticipates failure modes
before they occur.

Process integrity is protected through layered
verification, structured review, and transparent
evaluation mechanisms.
        </div>
      </div>

    </div>
  `;
}