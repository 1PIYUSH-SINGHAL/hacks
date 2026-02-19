export default function renderAntiAI() {
  return `
    <div class="view">

      <div class="view__header">
        <div class="view__title">/anti-ai</div>
        <div class="view__meta">PROCESS_INTEGRITY_ENFORCEMENT_MODEL</div>
      </div>

      <div class="view__divider">
        ------------------------------------------------------------
      </div>

      <div class="block">
        <div class="block__title">ENFORCEMENT_PRINCIPLE</div>

        <div class="codeblock">
AI detection tools are not considered valid proof.
Evaluation is based on observable engineering process integrity.
        </div>
      </div>

      <div class="block">
        <div class="block__title">FORENSIC_LAYERS</div>

        <div class="enforcement-layer">
          <div class="enforcement-layer__header">
            LAYER_1: Commit Analysis
          </div>
          <div class="enforcement-layer__body">
            <div>Large instant commits → red flag</div>
            <div>Linear “perfect build” history → suspicious</div>
            <div>No refactors or bug fixes → suspicious</div>
            <div>Final-hour LOC spikes → reviewed</div>
          </div>
        </div>

        <div class="enforcement-layer">
          <div class="enforcement-layer__header">
            LAYER_2: Architecture Viva
          </div>
          <div class="enforcement-layer__body">
            <div>Why this abstraction?</div>
            <div>What alternative was rejected?</div>
            <div>What fails first at scale?</div>
            <div>Time complexity explanation required</div>
          </div>
        </div>

        <div class="enforcement-layer">
          <div class="enforcement-layer__header">
            LAYER_3: Code Comprehension
          </div>
          <div class="enforcement-layer__body">
            <div>Random function explanation</div>
            <div>Live feature modification</div>
            <div>Edge case expansion live</div>
          </div>
        </div>

        <div class="enforcement-layer">
          <div class="enforcement-layer__header">
            LAYER_4: Style Mismatch Detection
          </div>
          <div class="enforcement-layer__body">
            <div>Polished README but weak explanation → red flag</div>
            <div>Inconsistent code style evolution → reviewed</div>
            <div>Sudden abstraction sophistication → investigated</div>
          </div>
        </div>

      </div>

      <div class="block">
        <div class="block__title">AUTOMATIC_DISQUALIFICATION</div>

        <div class="disqualification">
          <div class="disqualification__item">
            Proven AI usage
          </div>
          <div class="disqualification__item">
            Plagiarism
          </div>
          <div class="disqualification__item">
            Pre-built solution reuse
          </div>
          <div class="disqualification__item">
            Force push to alter commit history
          </div>
        </div>
      </div>

    </div>
  `;
}