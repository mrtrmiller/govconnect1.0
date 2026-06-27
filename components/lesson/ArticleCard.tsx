type ArticleCardProps = {
  category: string;
  title: string;
  summary: string[];
};

export default function ArticleCard({
  category,
  title,
  summary,
}: ArticleCardProps) {
  return (
    <article className="articlePanel">
      <div className="lessonTag">{category}</div>

      <h2>{title}</h2>

      {summary.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}