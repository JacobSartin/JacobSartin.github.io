import type { Metadata } from "next";
import "./projects.css";
import "./template.css";
import ProjectCards from "./ProjectCards";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="container" style={{ maxWidth: "1600px" }}>
      <div className="header">
        <h1>Projects</h1>
        <div className="divider" aria-hidden="true" />
        <p className="subheader">
          A portfolio of projects showcasing various technologies and creative
          solutions. Click any card to explore.
        </p>
      </div>
      <ProjectCards />
    </section>
  );
}
