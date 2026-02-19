import type { Metadata } from "next";
import "./projects.css";
import "./template.css";
import ProjectCards from "./ProjectCards";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="container">
      <div className="header">
        <h1>Projects</h1>
        <div className="divider" aria-hidden="true" />
        <p className="projects-intro">
          A portfolio of projects showcasing various technologies and creative
          solutions. Click any card to explore.
        </p>
      </div>
      <ProjectCards />
    </section>
  );
}
