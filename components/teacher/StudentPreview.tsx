import { Lesson } from "@/types/lesson";
import ArticleCard from "@/components/lesson/ArticleCard";
import LearningTarget from "@/components/lesson/LearningTarget";
import VocabularyCard from "@/components/lesson/VocabularyCard";
import QuestionCard from "@/components/lesson/QuestionCard";

type StudentPreviewProps = {
  lessonDraft: Lesson;
};

export default function StudentPreview({ lessonDraft }: StudentPreviewProps) {
  return (
    <aside className="studentPreviewPanel">
      <p className="eyebrow">Live Student Preview</p>

      <p className="previewMeta">
        Estimated reading time: {lessonDraft.readTime} minutes
      </p>

      <LearningTarget target={lessonDraft.learningTarget} />

      <ArticleCard
        category={lessonDraft.category}
        date={lessonDraft.date}
        title={lessonDraft.title}
        summary={lessonDraft.summary}
      />

      <VocabularyCard vocabulary={lessonDraft.vocabulary} />

      <section className="previewQuestionPanel">
        <h2>Respond</h2>

        {lessonDraft.questions.map((question, index) => (
          <QuestionCard
            key={`${question.prompt}-${index}`}
            question={question}
            number={index + 1}
          />
        ))}
      </section>
    </aside>
  );
}