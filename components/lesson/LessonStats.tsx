type LessonStatsProps = {
  readTime: number;
  vocabularyCount: number;
  questionCount: number;
};

export default function LessonStats({
  readTime,
  vocabularyCount,
  questionCount,
}: LessonStatsProps) {
  return (
    <section className="lessonStats">
      <div className="statCard">
        <span className="statNumber">1</span>
        <span className="statLabel">Story</span>
      </div>

      <div className="statCard">
        <span className="statNumber">{readTime}</span>
        <span className="statLabel">Min Read</span>
      </div>

      <div className="statCard">
        <span className="statNumber">{vocabularyCount}</span>
        <span className="statLabel">Vocabulary</span>
      </div>

      <div className="statCard">
        <span className="statNumber">{questionCount}</span>
        <span className="statLabel">Questions</span>
      </div>
    </section>
  );
}