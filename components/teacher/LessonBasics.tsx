import { Lesson } from "@/types/lesson";

type LessonBasicsProps = {
  lessonDraft: Lesson;
  setLessonDraft: (lesson: Lesson) => void;
};

export default function LessonBasics({
  lessonDraft,
  setLessonDraft,
}: LessonBasicsProps) {
  return (
    <div className="builderPanel">
      <h2>Lesson Basics</h2>

      <label>
        Headline
        <input
          value={lessonDraft.title}
          onChange={(event) =>
            setLessonDraft({
              ...lessonDraft,
              title: event.target.value,
            })
          }
        />
      </label>

      <label>
        Category
        <input
          value={lessonDraft.category}
          onChange={(event) =>
            setLessonDraft({
              ...lessonDraft,
              category: event.target.value,
            })
          }
        />
      </label>

      <label>
        Date
        <input
          value={lessonDraft.date}
          onChange={(event) =>
            setLessonDraft({
              ...lessonDraft,
              date: event.target.value,
            })
          }
        />
      </label>

      <label>
        Reading Time
        <input
          type="number"
          value={lessonDraft.readTime}
          onChange={(event) =>
            setLessonDraft({
              ...lessonDraft,
              readTime: Number(event.target.value),
            })
          }
        />
      </label>

      <label>
        Learning Target
        <textarea
          value={lessonDraft.learningTarget}
          onChange={(event) =>
            setLessonDraft({
              ...lessonDraft,
              learningTarget: event.target.value,
            })
          }
        />
      </label>
    </div>
  );
}