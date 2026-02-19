import type { Metadata } from "next";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
};

interface Interest {
  icon: string;
  label: string;
}

const interests: Interest[] = [
  { icon: "fa-solid fa-code", label: "Technology" },
  { icon: "fa-solid fa-book", label: "Tech Blogs" },
  { icon: "fa-solid fa-gamepad", label: "Gaming" },
  { icon: "fa-solid fa-football", label: "Football" },
  { icon: "fa-solid fa-person-hiking", label: "Outdoors" },
  { icon: "fa-solid fa-cat", label: "Pets" },
];

export default function AboutPage() {
  return (
    <section className="container" style={{ maxWidth: "760px" }}>
      <div className="header">
        <h1>About Me</h1>
        <div className="divider" aria-hidden="true" />
      </div>

      <div className="about-content">
        <div className="content-card">
          <p>
            Hi! I&apos;m <span className="highlight">Jacob Sartin</span>, a
            software developer with a passion for building elegant and efficient
            solutions to complex problems.
          </p>
          <p>
            I enjoy working across the full stack, from crafting intuitive user
            interfaces to designing robust backend systems. My approach combines
            technical expertise with creative problem-solving, always keeping
            the end user in mind.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, and continuously
            learning to stay at the forefront of software development.
          </p>
        </div>

        <div className="content-card">
          <h2>Interests &amp; Hobbies</h2>
          <ul className="interests-grid">
            {interests.map((interest) => (
              <li key={interest.label}>
                <i className={interest.icon} aria-hidden="true" />
                {interest.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
