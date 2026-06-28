"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lesson } from "@/data/lesson";
import { Lesson } from "@/types/lesson";
import ArticleCard from "@/components/lesson/ArticleCard";
import VocabularyCard from "@/components/lesson/VocabularyCard";
import QuestionCard from "@/components/lesson/QuestionCard";
import ProgressCard from "@/components/lesson/ProgressCard";
import LessonStats from "@/components/lesson/LessonStats";
import LearningTarget from "@/components/lesson/LearningTarget";

const PUBLISHED_LESSON_STORAGE_KEY = "govconnect.publishedLesson";

export default function StudentPage() {
  const [studentLesson, setStudentLesson] = useState<Lesson>({
    ...lesson,
  });

  useEffect(() => {
    const publishedLesson = window.localStorage.getItem(
      PUBLISHED_LESSON_STORAGE_KEY
    );

    if (!publishedLesson) {
      return;
    }

    try {
      setStudentLesson(JSON.parse(publishedLesson));
    } catch {
      window.localStorage.removeItem(PUBLISHED_LESSON_STORAGE_KEY);
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="studentPage">
        <ProgressCard />

        <LessonStats
          readTime={studentLesson.readTime}
          vocabularyCount={studentLesson.vocabulary.length}
          questionCount={studentLesson.questions.length}
        />

        <LearningTarget target={studentLesson.learningTarget} />

        <section className="studentHero">
          <p className="eyebrow">Student View</p>

          <h1>What is Happening in the U.S. Today?</h1>

          <p className="subtitle">
            Read the story, practice vocabulary, and answer three quick questions.
          </p>
        </section>

        <section className="lessonLayout">
          <ArticleCard
            category={studentLesson.category}
            date={studentLesson.date}
            title={studentLesson.title}
            summary={studentLesson.summary}
          />

          <VocabularyCard vocabulary={studentLesson.vocabulary} />
        </section>

        <section className="questionPanel">
          <h2>Respond</h2>

          {studentLesson.questions.map((question, index) => (
            <QuestionCard
              key={`${question.prompt}-${index}`}
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