export default function renderInstitution() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/institution</div>
        <div class="view__meta">HOSTING_INSTITUTION_PROFILE</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">INSTITUTION_RECORD</div>

        <div class="spec">
          <div class="spec__row">
            <span class="spec__key">NAME</span>
            <span class="spec__value">WELHAM_BOYS'_SCHOOL</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">LOCATION</span>
            <span class="spec__value">DEHRADUN_INDIA</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">TYPE</span>
            <span class="spec__value">RESIDENTIAL_PUBLIC_SCHOOL</span>
          </div>
          <div class="spec__row">
            <span class="spec__key">FOCUS</span>
            <span class="spec__value">ACADEMIC_DISCIPLINE_AND_LEADERSHIP</span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">TECHNICAL_OVERSIGHT</div>

        <div class="dense-list">
          <div class="dense-list__item">Information Technology Department governance</div>
          <div class="dense-list__item">Faculty-supervised evaluation panel</div>
          <div class="dense-list__item">Structured rubric enforcement</div>
          <div class="dense-list__item">Process-first competition design</div>
        </div>
      </div>

      <div class="block">
        <div class="block__title">ACADEMIC_POSITIONING</div>

        <div class="codeblock">
hackathon@welham is designed as an extension of
academic systems thinking.

It prioritizes:
- architectural maturity
- disciplined version control
- engineering documentation
- technical ownership
        </div>
      </div>

      <div class="block">
        <div class="block__title">EVENT_INTENT</div>

        <div class="dense-list">
          <div class="dense-list__item">Promote systems-level problem solving</div>
          <div class="dense-list__item">Encourage technical integrity</div>
          <div class="dense-list__item">Discourage shortcut-driven development</div>
          <div class="dense-list__item">Develop architectural clarity under time constraint</div>
        </div>
      </div>

    </div>
  `;
}