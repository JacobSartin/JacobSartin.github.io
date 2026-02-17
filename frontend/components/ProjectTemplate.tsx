import React from "react";
import "@/app/projects/projects.css";

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function ProjectTemplate({ title, subtitle, children }: Props) {
  return (
    <section className="projects-container">
      <h1>{title}</h1>
      {subtitle && <p className="projects-intro">{subtitle}</p>}

      <div className="about-content" style={{ marginTop: 20 }}>
        {children}
      </div>
    </section>
  );
}
