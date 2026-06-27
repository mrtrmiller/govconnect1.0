"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Question } from "@/types/lesson";

type QuestionCardProps = {
  question: Question;
  number: number;
};

export default function QuestionCard({
  question,
  number,
}: QuestionCardProps) {
  const [answer, setAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const hasAnswer = answer.trim().length > 0;
  const wordCount = answer.trim() === "" ? 0 : answer.trim().split(/\s+/).length;
const meetsGoal = wordCount >= 15;

  return (
    <div className="questionCard">
      <h3>Question {number}</h3>

      <p>{question.prompt}</p>

      <textarea
        className="questionInput"
        placeholder="Type your response here..."
        value={answer}
        onChange={(event) => {
          setAnswer(event.target.value);
          setShowFeedback(false);
        }}
      />

      <div className="questionActions">
        <Button
  onClick={() => setShowFeedback(true)}
  disabled={!meetsGoal}
>
  Check My Answer
</Button>
      </div>

      <p className="helperText">
  {wordCount} / 15 words recommended before checking feedback.
</p>

      {showFeedback && (
        <div className="feedbackBox">
          <strong>Teacher Feedback:</strong>
          <p>{question.feedback}</p>
        </div>
      )}
    </div>
  );
}