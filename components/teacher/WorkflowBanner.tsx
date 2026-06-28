export default function WorkflowBanner() {
  return (
    <section className="previewBanner">
      <div>
        <p className="eyebrow">Lesson Workflow</p>
        <h2>Draft Lesson</h2>
        <p>
          Build your lesson, preview the student experience, then publish when it is ready.
        </p>
      </div>

      <div className="workflowSteps">
        <span className="workflowStep activeStep">1. Draft</span>
        <span className="workflowStep">2. Preview</span>
        <span className="workflowStep">3. Publish</span>
      </div>
    </section>
  );
}