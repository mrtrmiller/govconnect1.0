import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lesson } from "@/data/lesson";

export default function TeacherPage() {
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

        <section className="builderLayout">
          <div className="builderPanel">
            <h2>Lesson Basics</h2>

            <label>
              Headline
              <input defaultValue={lesson.title} />
            </label>

            <label>
              Category
              <input defaultValue={lesson.category} />
            </label>

            <label>
              Date
              <input defaultValue={lesson.date} />
            </label>

            <label>
              Reading Time
              <input type="number" defaultValue={lesson.readTime} />
            </label>

            <label>
              Learning Target
              <textarea defaultValue={lesson.learningTarget} />
            </label>
          </div>

          <div className="builderPanel">
            <h2>Student Summary</h2>

            <textarea
              className="largeTextarea"
              defaultValue={lesson.summary.join("\n\n")}
            />
          </div>

          <div className="builderPanel">
            <h2>Vocabulary</h2>

            {lesson.vocabulary.map((item) => (
              <div className="builderItem" key={item.term}>
                <input defaultValue={item.term} />
                <textarea defaultValue={item.definition} />
              </div>
            ))}

            <button className="secondaryButton">+ Add Vocabulary</button>
          </div>

          <div className="builderPanel">
            <h2>Questions</h2>

            {lesson.questions.map((question, index) => (
              <div className="builderItem" key={question.prompt}>
                <label>
                  Question {index + 1}
                  <textarea defaultValue={question.prompt} />
                </label>

                <label>
                  Teacher Feedback
                  <textarea defaultValue={question.feedback} />
                </label>
              </div>
            ))}

            <button className="secondaryButton">+ Add Question</button>
          </div>

          <div className="builderActions">
            <button className="primaryButton">Save Lesson</button>

            <Link className="secondaryButton" href="/student">
              Preview Student View
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}