import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lesson } from "@/data/lesson";
import ArticleCard from "@/components/lesson/ArticleCard";

export default function StudentPage() {
  return (
    <>
      <Navbar />

      <main className="studentPage">
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
  title={lesson.title}
  summary={lesson.summary}
/>

          <aside className="vocabPanel">
            <h2>Vocabulary</h2>

            <p className="smallText">
              Match each vocabulary term to its definition.
            </p>

            {lesson.vocabulary.map((item) => (
              <div className="vocabItem" key={item.term}>
                <strong>{item.term}</strong>

                <span>{item.definition}</span>
              </div>
            ))}
          </aside>
        </section>

        <section className="questionPanel">
          <h2>Respond</h2>

          {lesson.questions.map((question, index) => (
            <label key={question}>
              {index + 1}. {question}

              <textarea placeholder="Type your response here..." />
            </label>
          ))}

          <button className="primaryButton">
            Check My Work
          </button>
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