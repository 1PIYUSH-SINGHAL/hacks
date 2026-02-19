export default function renderCommunication() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/communication</div>
        <div class="view__meta">OPERATIONAL_COMMUNICATION_STRUCTURE</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">PRIMARY_PLATFORM</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">PLATFORM</span>
            <span class="spec__value">DISCORD</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">MODE</span>
            <span class="spec__value">CENTRALIZED_TEXT_BASED</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">VISIBILITY</span>
            <span class="spec__value">STRUCTURED_CHANNEL_ACCESS</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">CHANNEL_MATRIX</div>

        <div class="checklist">

          <div class="checklist__item">
            <div class="checklist__marker">[01]</div>
            <div class="checklist__content">
              <div class="checklist__title">#announcements</div>
              Read-only. Official updates from organizing panel.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[02]</div>
            <div class="checklist__content">
              <div class="checklist__title">#technical-queries</div>
              Clarifications regarding implementation scope.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[03]</div>
            <div class="checklist__content">
              <div class="checklist__title">#rule-clarifications</div>
              Public rule interpretation. Visible to all teams.
            </div>
          </div>

          <div class="checklist__item">
            <div class="checklist__marker">[04]</div>
            <div class="checklist__content">
              <div class="checklist__title">#support</div>
              Infrastructure issues. Platform-related assistance.
            </div>
          </div>

        </div>
      </div>

      <div class="block">
        <div class="block__title">COMMUNICATION_PROTOCOL</div>

        <div class="dense-list">
          <div class="dense-list__item">All clarifications remain public.</div>
          <div class="dense-list__item">No private rule interpretation.</div>
          <div class="dense-list__item">No DMs to judges regarding evaluation.</div>
          <div class="dense-list__item">Technical disputes must follow formal appeal protocol.</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">RESPONSE_POLICY</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">ANNOUNCEMENTS</span>
            <span class="spec__value">ORGANIZER_ONLY</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">TECH_QUERIES</span>
            <span class="spec__value">PUBLIC_REPLY_MODEL</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">DISPUTES</span>
            <span class="spec__value">FORMAL_REVIEW_PANEL</span>
          </div>
        </div>
      </div>

    </div>
  `;
}
