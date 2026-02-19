import React from "react";
import Link from "next/link";
import "@/app/projects/projects.css";

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function ProjectTemplate({ title, subtitle, children }: Props) {
  return (
    <section className="projects-container">
      <div className="project-template-header">
        <Link href="/projects" className="project-back-link">
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          Projects
        </Link>
        <h1>{title}</h1>
        {subtitle && <p className="project-template-subtitle">{subtitle}</p>}
        <div className="projects-divider" aria-hidden="true" />
      </div>

      <div className="project-template-content">{children}</div>
    </section>
  );
}
