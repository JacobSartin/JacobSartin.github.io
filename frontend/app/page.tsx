import Link from "next/link";
import "./home.css";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="hero-prompt" aria-hidden="true">
          <span className="prompt-char">$</span> whoami
        </span>
        <h1 className="hero-name">Jacob Sartin</h1>
        <h2 className="hero-role">
          Software Developer
          <span className="cursor" aria-hidden="true" />
        </h2>
        <p className="hero-description">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div className="cta-buttons">
          <Link href="/projects" className="cta-button">
            <i className="fa-solid fa-folder-open" aria-hidden="true" />
            View Projects
          </Link>
          <Link href="/about" className="cta-button secondary">
            <i className="fa-solid fa-user" aria-hidden="true" />
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
