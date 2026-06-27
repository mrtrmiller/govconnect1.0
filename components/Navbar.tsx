import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        <span className="brandMark">GC</span>
        <span>GovConnect</span>
      </Link>

      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/student">Student</Link>
        <Link href="/teacher">Teacher</Link>
      </div>
    </nav>
  );
}