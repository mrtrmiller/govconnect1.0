import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lesson } from "@/data/lesson";

export default function TeacherPage() {
  return (
    <>
      <Navbar />

      <main className="pageShell">
        <section className="panel">
          <p className="eyebrow">Teacher Studio</p>
          <h1>Build This Week’s News Lesson</h1>
          <p className="subtitle">
            Preview and eventually edit the lesson students will see.
          </p>
        </section>

        <section className="formPreview">
          <label>
            Headline
            <input defaultValue={lesson.title} />
          </label>

          <label>
            Category
            <input defaultValue={lesson.category} />
          </label>

          <label>
            Student Summary
            <textarea defaultValue={lesson.summary.join("\n\n")} />
          </label>

          <label>
            Vocabulary
            <textarea
              defaultValue={lesson.vocabulary
                .map((item) => `${item.term}: ${item.definition}`)
                .join("\n")}
            />
          </label>

          <label>
            Questions
            <textarea defaultValue={lesson.questions.join("\n")} />
          </label>

          <button className="primaryButton">Save Lesson</button>

          <Link className="secondaryButton" href="/student">
            Preview Student View
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}