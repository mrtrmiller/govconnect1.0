import Badge from "@/components/ui/Badge";
type ArticleCardProps = {
  category: string;
  date: string;
  title: string;
  summary: string[];
};

export default function ArticleCard({
  category,
  date,
  title,
  summary,
}: ArticleCardProps) {
  return (
    <article className="articlePanel">
      <div className="articleHeader">
  <Badge>{category}</Badge>

  <span className="lessonDate">
    {date}
  </span>
</div>
      <h2>{title}</h2>

      {summary.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}