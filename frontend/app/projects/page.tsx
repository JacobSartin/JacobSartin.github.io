import type { Metadata } from "next";
import ProjectCards from "./ProjectCards";
import "./projects.css";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="projects-container">
      <h1>Projects</h1>
      <p className="projects-intro">
        Explore my portfolio of projects showcasing various technologies and
        creative solutions. Click on any card to learn more or interact with the
        project.
      </p>
      <ProjectCards />
    </section>
  );
}
