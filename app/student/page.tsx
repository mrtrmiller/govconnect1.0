import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lesson } from "@/data/lesson";
import ArticleCard from "@/components/lesson/ArticleCard";
import VocabularyCard from "@/components/lesson/VocabularyCard";
import QuestionCard from "@/components/lesson/QuestionCard";
import ProgressCard from "@/components/lesson/ProgressCard";
import LessonStats from "@/components/lesson/LessonStats";
import LearningTarget from "@/components/lesson/LearningTarget";

export default function StudentPage() {
  return (
    <>
      <Navbar />

      <main className="studentPage">
        <ProgressCard />

        <LessonStats
          readTime={lesson.readTime}
          vocabularyCount={lesson.vocabulary.length}
          questionCount={lesson.questions.length}
        />

        <LearningTarget target={lesson.learningTarget} />

        <section className="studentHero">
          <p className="eyebrow">Student View</p>

          <h1>What is Happening in the U.S. Today?</h1>

          <p className="subtitle">
            Read the story, practice vocabulary, and answer three quick questions.
          </p>
        </section>

        <section className="lessonLayout">
          <ArticleCard
            category={lesson.category}
            date={lesson.date}
            title={lesson.title}
            summary={lesson.summary}
          />

          <VocabularyCard vocabulary={lesson.vocabulary} />
        </section>

        <section className="questionPanel">
          <h2>Respond</h2>

          {lesson.questions.map((question, index) => (
            <QuestionCard
              key={question.prompt}
              question={question}
              number={index + 1}
            />
          ))}
        </section>

        <div className="pageActions">
          <Link href="/" className="secondaryButton">
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}