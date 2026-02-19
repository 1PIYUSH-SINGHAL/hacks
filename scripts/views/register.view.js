export default function renderRegister() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/register</div>
        <div class="view__meta">TEAM_REGISTRATION_PROTOCOL</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">ELIGIBILITY_CONSTRAINTS</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">MAX_TEAMS_PER_SCHOOL</span>
            <span class="spec__value">2</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">MAX_TEAM_SIZE</span>
            <span class="spec__value">4</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">PROJECT_DOMAIN</span>
            <span class="spec__value">DEVTOOLS_ONLY</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">AI_USAGE</span>
            <span class="spec__value">STRICTLY_PROHIBITED</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">REQUIRED_INFORMATION</div>

        <div class="dense-list">
          <div class="dense-list__item">Team Name</div>
          <div class="dense-list__item">School Name</div>
          <div class="dense-list__item">Team Members (Max 4)</div>
          <div class="dense-list__item">Primary Contact Email</div>
          <div class="dense-list__item">GitHub Username (All Members)</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">REGISTRATION_FLOW</div>

        <div class="dense-list">
          <div class="dense-list__item">Submit official registration form</div>
          <div class="dense-list__item">Receive Discord access credentials</div>
          <div class="dense-list__item">Pre-event briefing announcement</div>
          <div class="dense-list__item">Kickoff session attendance mandatory</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">FINAL_CONFIRMATION</div>

        <div class="codeblock">
By registering, teams acknowledge:

- Full compliance with anti-AI policy
- Mandatory public GitHub repository
- Structured evaluation model
- Commitment to process integrity
        </div>
      </div>

      <div class="block">
        <div class="block__title">ACTION_ENDPOINT</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">REGISTRATION_FORM</span>
            <span class="spec__value">[INSERT_FORM_LINK]</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">DEADLINE</span>
            <span class="spec__value">[INSERT_DEADLINE]</span>
          </div>
        </div>
      </div>

    </div>
  `;
}