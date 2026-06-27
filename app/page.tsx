import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
  <Navbar />

  <main className="home">
      <section className="hero">
        <div className="badge">GovConnect 1.0</div>

        <h1>Social studies tools that make today’s news teachable.</h1>

        <p className="subtitle">
          Daily civics, government, economics, and history activities built for real classrooms.
        </p>

        <div className="buttons">
          <a className="primaryButton" href="/student">Enter Student View</a>
<a className="secondaryButton" href="/teacher">Teacher Dashboard</a>
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Daily News</h2>
          <p>One current event at a time with student-friendly questions and vocabulary practice.</p>
        </div>

        <div className="card">
          <h2>Interactive Activities</h2>
          <p>Sorting, matching, short response, and instant feedback activities for deeper thinking.</p>
        </div>

        <div className="card">
          <h2>Teacher Tools</h2>
          <p>Update weekly stories, guide discussion, and eventually track student progress.</p>
        </div>
      </section>
    </main>
</>
  );
}