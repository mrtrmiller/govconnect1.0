"use client";

import { useState } from "react";

export default function ProgressCard() {
  const [articleDone, setArticleDone] = useState(false);
  const [vocabDone, setVocabDone] = useState(false);
  const [questionsDone, setQuestionsDone] = useState(false);

  const completedCount = [articleDone, vocabDone, questionsDone].filter(Boolean).length;
  const progressPercent = (completedCount / 3) * 100;

  return (
    <section className="progressCard">
      <h2>Today's Mission</h2>

      <div className="progressBar">
        <div
          className="progressFill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="progressText">
        {completedCount} of 3 activities complete
      </p>

      <div className="missionList">
        <label>
          <input
            type="checkbox"
            checked={articleDone}
            onChange={() => setArticleDone(!articleDone)}
          />
          Read Today's Article
        </label>

        <label>
          <input
            type="checkbox"
            checked={vocabDone}
            onChange={() => setVocabDone(!vocabDone)}
          />
          Complete Vocabulary
        </label>

        <label>
          <input
            type="checkbox"
            checked={questionsDone}
            onChange={() => setQuestionsDone(!questionsDone)}
          />
          Answer Questions
        </label>
      </div>

      {completedCount === 3 && (
        <div className="completionMessage">
          🎉 Lesson complete! Nice work.
        </div>
      )}
    </section>
  );
}