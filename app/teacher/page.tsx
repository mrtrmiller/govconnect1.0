"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lesson } from "@/data/lesson";
import { Lesson } from "@/types/lesson";
import WorkflowBanner from "@/components/teacher/WorkflowBanner";
import LessonBasics from "@/components/teacher/LessonBasics";
import SummaryEditor from "@/components/teacher/SummaryEditor";
import VocabularyEditor from "@/components/teacher/VocabularyEditor";
import QuestionEditor from "@/components/teacher/QuestionEditor";
import StudentPreview from "@/components/teacher/StudentPreview";
import SaveBar from "@/components/teacher/SaveBar";

const LESSON_DRAFT_STORAGE_KEY = "govconnect.lessonDraft";

export default function TeacherPage() {
  const [lessonDraft, setLessonDraft] = useState<Lesson>({
    ...lesson,
  });

  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const savedDraft = window.localStorage.getItem(LESSON_DRAFT_STORAGE_KEY);

    if (!savedDraft) {
      return;
    }

    try {
      setLessonDraft(JSON.parse(savedDraft));
    } catch {
      window.localStorage.removeItem(LESSON_DRAFT_STORAGE_KEY);
    }
  }, []);

  const updateLessonDraft = (updatedLesson: Lesson) => {
    setLessonDraft(updatedLesson);
    setHasChanges(true);
  };

  const saveDraft = () => {
    window.localStorage.setItem(
      LESSON_DRAFT_STORAGE_KEY,
      JSON.stringify(lessonDraft)
    );

    setHasChanges(false);
  };

  return (
    <>
      <Navbar />

      <main className="teacherPage">
        <section className="teacherHero">
          <p className="eyebrow">Teacher Studio</p>
          <h1>Build This Week’s Lesson</h1>
          <p className="subtitle">
            Create a current-event lesson students can complete in minutes.
          </p>
        </section>

        <WorkflowBanner />

        <section className="livePreviewLayout">
          <div className="builderLayout">
            <LessonBasics
              lessonDraft={lessonDraft}
              setLessonDraft={updateLessonDraft}
            />
          </div>

          <StudentPreview lessonDraft={lessonDraft} />
        </section>

        <section className="builderLayout">
          <SummaryEditor
            lessonDraft={lessonDraft}
            setLessonDraft={updateLessonDraft}
          />

          <VocabularyEditor
            lessonDraft={lessonDraft}
            setLessonDraft={updateLessonDraft}
          />

          <QuestionEditor
            lessonDraft={lessonDraft}
            setLessonDraft={updateLessonDraft}
          />
        </section>

        <SaveBar hasChanges={hasChanges} onSave={saveDraft} />
      </main>

      <Footer />
    </>
  );
}