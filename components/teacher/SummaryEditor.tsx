import { Lesson } from "@/types/lesson";

type SummaryEditorProps = {
  lessonDraft: Lesson;
  setLessonDraft: (lesson: Lesson) => void;
};

export default function SummaryEditor({
  lessonDraft,
  setLessonDraft,
}: SummaryEditorProps) {
  return (
    <div className="builderPanel">
      <h2>Student Summary</h2>

      <textarea
        className="largeTextarea"
        value={lessonDraft.summary.join("\n\n")}
        onChange={(event) =>
          setLessonDraft({
            ...lessonDraft,
            summary: event.target.value.split("\n\n"),
          })
        }
      />
    </div>
  );
}
