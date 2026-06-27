import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="home">
        <section className="hero">
          <div className="badge">GovConnect</div>

          <h1>Interactive Current Events for Social Studies</h1>

          <p className="subtitle">
            Helping teachers transform today&apos;s news into engaging,
            standards-aligned lessons in under 10 minutes.
          </p>

          <div className="buttons">
            <Link className="primaryButton" href="/student">
              Enter Student View
            </Link>

            <Link className="secondaryButton" href="/teacher">
              Teacher Studio
            </Link>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <h2>Daily Briefs</h2>
            <p>
              Turn one current event into a focused classroom-ready lesson.
            </p>
          </div>

          <div className="card">
            <h2>Interactive Learning</h2>
            <p>
              Vocabulary, questions, feedback, progress, and student-friendly activities.
            </p>
          </div>

          <div className="card">
            <h2>Teacher First</h2>
            <p>
              Built to save planning time while keeping teachers in control.
            </p>
          </div>
        </section>

        <section className="whyPanel">
          <p className="eyebrow">Our Why</p>

          <h2>Less formatting. More teaching.</h2>

          <p>
            GovConnect exists to help social studies teachers create engaging,
            standards-aligned current-event lessons quickly, so more class time
            can be spent on discussion, thinking, and civic understanding.
          </p>

          <p className="smallText">
            Every feature we build should help teachers save time or help students learn better.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}