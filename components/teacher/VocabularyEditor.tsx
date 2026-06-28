import { Lesson } from "@/types/lesson";

type VocabularyEditorProps = {
  lessonDraft: Lesson;
  setLessonDraft: (lesson: Lesson) => void;
};

export default function VocabularyEditor({
  lessonDraft,
  setLessonDraft,
}: VocabularyEditorProps) {
  return (
    <div className="builderPanel">
      <h2>Vocabulary</h2>

      {lessonDraft.vocabulary.map((item, index) => (
        <div className="builderItem" key={index}>
          <div className="builderItemHeader">
            <strong>Vocabulary {index + 1}</strong>

            <button
              type="button"
              className="deleteButton"
              onClick={() => {
                const updatedVocabulary = lessonDraft.vocabulary.filter(
                  (_, i) => i !== index
                );

                setLessonDraft({
                  ...lessonDraft,
                  vocabulary: updatedVocabulary,
                });
              }}
            >
              🗑️
            </button>
          </div>

          <input
            value={item.term}
            onChange={(event) => {
              const updatedVocabulary = [...lessonDraft.vocabulary];

              updatedVocabulary[index] = {
                ...updatedVocabulary[index],
                term: event.target.value,
              };

              setLessonDraft({
                ...lessonDraft,
                vocabulary: updatedVocabulary,
              });
            }}
          />

          <textarea
            value={item.definition}
            onChange={(event) => {
              const updatedVocabulary = [...lessonDraft.vocabulary];

              updatedVocabulary[index] = {
                ...updatedVocabulary[index],
                definition: event.target.value,
              };

              setLessonDraft({
                ...lessonDraft,
                vocabulary: updatedVocabulary,
              });
            }}
          />
        </div>
      ))}

      <button
        className="secondaryButton"
        onClick={() =>
          setLessonDraft({
            ...lessonDraft,
            vocabulary: [
              ...lessonDraft.vocabulary,
              {
                term: "New Term",
                definition: "Add a student-friendly definition.",
              },
            ],
          })
        }
      >
        + Add Vocabulary
      </button>
    </div>
  );
}