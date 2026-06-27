import { VocabularyItem } from "@/types/lesson";

type VocabularyCardProps = {
  vocabulary: VocabularyItem[];
};

export default function VocabularyCard({ vocabulary }: VocabularyCardProps) {
  return (
    <aside className="vocabPanel">
      <h2>Vocabulary</h2>

      <p className="smallText">
        Match each vocabulary term to its definition.
      </p>

      {vocabulary.map((item) => (
        <div className="vocabItem" key={item.term}>
          <strong>{item.term}</strong>
          <span>{item.definition}</span>
        </div>
      ))}
    </aside>
  );
}