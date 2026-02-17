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
  { icon: "fa-solid fa-hiking", label: "Outdoor Activities" },
  { icon: "fa-solid fa-coffee", label: "Coffee Enthusiast" },
];

export default function AboutPage() {
  return (
    <section className="about-container">
      <h1>About Me</h1>

      <div className="about-content">
        <p>
          Hi! I&apos;m <span className="highlight">Jacob Sartin</span>, a
          software developer with a passion for building elegant and efficient
          solutions to complex problems.
        </p>

        <p>
          I enjoy working across the full stack, from crafting intuitive user
          interfaces to designing robust backend systems. My approach to
          development combines technical expertise with creative
          problem-solving, always keeping the end user in mind.
        </p>

        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new
          technologies, contributing to open-source projects, and continuously
          learning to stay at the forefront of software development trends.
        </p>

        <div className="interests">
          <h2>Interests &amp; Hobbies</h2>
          <ul>
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
