import type { Metadata } from "next";
import "./skills.css";

export const metadata: Metadata = {
  title: "Skills",
};

interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: "fa-solid fa-code",
    title: "Languages",
    skills: ["JavaScript / TypeScript", "Python", "Java", "C#", "HTML / CSS"],
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "Frameworks",
    skills: ["React", "Node.js", "Express", ".NET", "Flask"],
  },
  {
    icon: "fa-solid fa-database",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Tools & DevOps",
    skills: ["Git / GitHub", "Docker", "AWS", "CI/CD", "Linux"],
  },
  {
    icon: "fa-solid fa-brain",
    title: "Concepts",
    skills: [
      "REST APIs",
      "Microservices",
      "Agile / Scrum",
      "Test-Driven Development",
      "System Design",
    ],
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "Design",
    skills: [
      "UI / UX Principles",
      "Responsive Design",
      "Accessibility (a11y)",
      "Figma",
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="container" style={{ maxWidth: "1100px" }}>
      <div className="header">
        <h1>Technical Skills</h1>
        <div className="divider" aria-hidden="true" />
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h2>
              <i className={category.icon} aria-hidden="true" />
              {category.title}
            </h2>
            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
