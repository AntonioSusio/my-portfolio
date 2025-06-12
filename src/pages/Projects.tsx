import React from "react";
import type { Project } from "../projects";
import projectsData from "../projects";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    setProjects(projectsData);
  }, []);

  const projectEl = projects.map((project) => (
    <div key={nanoid()} className="project-card flex flex-col">
      <img
        src={project.projectImage}
        alt={project.alternativeText}
        className="project-img"
      />
      <div className="project-info flex flex-col">
        <h2 className="project-name">{project.projectName}</h2>
        <p className="project-description">{project.projectDescritpion}</p>

        <p className="technologies-paragraph">Techologies</p>
        <div className="technologies-container flex">
          {project.projectTechnologies.map((tech) => (
            <p key={tech} className="technology">
              {tech}
            </p>
          ))}
        </div>

        <Link to={project.projectUrl} target="_blank" className="project-link">
          Click here to visit project site
        </Link>
      </div>
    </div>
  ));

  return (
    <section className="projects-section flex flex-col">
      <h1 className="projects-heading flex">Projects</h1>

      <div className="projects-container flex flex-col">{projectEl}</div>
    </section>
  );
}
