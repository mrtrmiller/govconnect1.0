import { Lesson } from "@/types/lesson";

type QuestionEditorProps = {
  lessonDraft: Lesson;
  setLessonDraft: (lesson: Lesson) => void;
};

export default function QuestionEditor({
  lessonDraft,
  setLessonDraft,
}: QuestionEditorProps) {
  return (
    <div className="builderPanel">
      <h2>Questions</h2>

      {lessonDraft.questions.map((question, index) => (
        <div className="builderItem" key={index}>
          <div className="builderItemHeader">
            <strong>Question {index + 1}</strong>

            <button
              type="button"
              className="deleteButton"
              onClick={() => {
                const updatedQuestions = lessonDraft.questions.filter(
                  (_, i) => i !== index
                );

                setLessonDraft({
                  ...lessonDraft,
                  questions: updatedQuestions,
                });
              }}
            >
              🗑️
            </button>
          </div>

          <label>
            Prompt
            <textarea
              value={question.prompt}
              onChange={(event) => {
                const updatedQuestions = [...lessonDraft.questions];

                updatedQuestions[index] = {
                  ...updatedQuestions[index],
                  prompt: event.target.value,
                };

                setLessonDraft({
                  ...lessonDraft,
                  questions: updatedQuestions,
                });
              }}
            />
          </label>

          <label>
            Teacher Feedback
            <textarea
              value={question.feedback}
              onChange={(event) => {
                const updatedQuestions = [...lessonDraft.questions];

                updatedQuestions[index] = {
                  ...updatedQuestions[index],
                  feedback: event.target.value,
                };

                setLessonDraft({
                  ...lessonDraft,
                  questions: updatedQuestions,
                });
              }}
            />
          </label>
        </div>
      ))}

      <button
        type="button"
        className="secondaryButton"
        onClick={() =>
          setLessonDraft({
            ...lessonDraft,
            questions: [
              ...lessonDraft.questions,
              {
                prompt: "New question prompt",
                feedback: "Add teacher feedback for this question.",
              },
            ],
          })
        }
      >
        + Add Question
      </button>
    </div>
  );
}