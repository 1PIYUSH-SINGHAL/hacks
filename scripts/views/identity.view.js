export default function renderIdentity() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/identity</div>
        <div class="view__meta">ENGINEERING_EVALUATION_MODE</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">SYSTEM_PROFILE</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">EVENT</span>
            <span class="spec__value">HACKATHON@WELHAM</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">DURATION</span>
            <span class="spec__value">36H</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">MODE</span>
            <span class="spec__value">ONLINE_INTER_SCHOOL</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">AI_USAGE</span>
            <span class="spec__value">STRICTLY_PROHIBITED</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">REPOSITORY</span>
            <span class="spec__value">PUBLIC_REQUIRED</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">MAX_TEAMS_PER_SCHOOL</span>
            <span class="spec__value">2</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">MAX_TEAM_SIZE</span>
            <span class="spec__value">4</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">CORE_PHILOSOPHY</div>

        <div class="codeblock">
Process > Flash
Architecture > UI
Systems_Thinking > Surface_Level_Apps
Engineering_Rigor > Speed
        </div>
      </div>

      <div class="block">
        <div class="block__title">ALLOWED_PROJECT_DOMAIN</div>

        <div class="dense-list">
          <div class="dense-list__item">CLI_TOOLS</div>
          <div class="dense-list__item">STATIC_ANALYZERS</div>
          <div class="dense-list__item">LINTERS</div>
          <div class="dense-list__item">COMPILERS_INTERPRETERS</div>
          <div class="dense-list__item">BUILD_SYSTEMS</div>
          <div class="dense-list__item">TEST_RUNNERS</div>
          <div class="dense-list__item">PROFILERS</div>
          <div class="dense-list__item">DEBUGGERS</div>
          <div class="dense-list__item">LOG_ANALYZERS</div>
          <div class="dense-list__item">VERSION_CONTROL_UTILITIES</div>
          <div class="dense-list__item">CI_CD_HELPERS</div>
          <div class="dense-list__item">RUNTIME_MONITORS</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">EXPLICITLY_BANNED</div>

        <div class="dense-list">
          <div class="dense-list__item">GENERIC_APPS</div>
          <div class="dense-list__item">CRUD_DASHBOARDS</div>
          <div class="dense-list__item">SOCIAL_PLATFORMS</div>
          <div class="dense-list__item">AI_WRAPPERS</div>
          <div class="dense-list__item">CHATBOTS</div>
          <div class="dense-list__item">PRODUCTIVITY_APPS</div>
        </div>
      </div>

    </div>
  `;
}