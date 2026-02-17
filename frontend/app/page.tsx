import Link from "next/link";
import "./home.css";

export default function HomePage() {
  return (
    <section className="hero">
      <h1>Welcome!</h1>
      <h2>I&apos;m Jacob Sartin</h2>
      <p>
        Software developer passionate about creating elegant solutions to
        complex problems. Explore my skills, check out my projects, and learn
        more about my journey in software development.
      </p>
      <div className="cta-buttons">
        <Link href="/projects" className="cta-button">
          View Projects
        </Link>
        <Link href="/about" className="cta-button secondary">
          About Me
        </Link>
      </div>
    </section>
  );
}
