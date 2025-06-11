import React from "react";
import type { Project } from "../projects";
import projectsData from "../projects";
import { nanoid } from "nanoid";

export default function Projects() {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    setProjects(projectsData);
  }, []);

  const projectEl = projects.map((project) => (
    <div key={nanoid()} className="project-card">
      <h2>{project.projectName}</h2>
    </div>
  ));

  return (
    <section className="projects-section">
      <h1 className="projects-heading flex">Projects</h1>

      <div className="projects-container">{projectEl}</div>
    </section>
  );
}
