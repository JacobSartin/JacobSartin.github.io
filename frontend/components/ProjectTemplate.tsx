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
    <section className="container">
      <div className="header">
        <Link href="/projects" className="project-back-link">
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          Projects
        </Link>
        <h1>{title}</h1>
        {subtitle && <p className="subheader">{subtitle}</p>}
        <div className="divider" aria-hidden="true" />
      </div>

      <div className="content-card project-template-content">{children}</div>
    </section>
  );
}
