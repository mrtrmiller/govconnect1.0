type LearningTargetProps = {
  target: string;
};

export default function LearningTarget({
  target,
}: LearningTargetProps) {
  return (
    <section className="learningTarget">
      <p className="eyebrow">Today's Learning Target</p>

      <h2>{target}</h2>
    </section>
  );
}