import React from "react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import type { Project } from "../projects";
import projectsData from "../projects";
import { nanoid } from "nanoid";
import { FaArrowUp } from "react-icons/fa";

export default function Projects(): JSX.Element {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  React.useEffect((): void => {
    setProjects(projectsData);
  }, []);

  function scrollToTop(): void {
    const scrollContainer: Element | null =
      document.querySelector(".projects-section");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const anchorEl: JSX.Element[] = projects.map(
    (project: Project): JSX.Element => (
      <a key={project.id} href={`#${project.id}`} className="anchor-page-links">
        {project.projectName}
      </a>
    )
  );

  const projectEl: JSX.Element[] = projects.map(
    (project: Project): JSX.Element => (
      <div
        id={`${project.id}`}
        key={nanoid()}
        className="project-card flex flex-col"
      >
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

          <Link
            to={project.projectUrl}
            target="_blank"
            className="project-link"
          >
            Click here to visit project site
          </Link>
        </div>
      </div>
    )
  );

  return (
    <section className="projects-section flex flex-col">
      <h1 ref={myRef} id="projects-heading" className="projects-heading flex">
        Projects
      </h1>

      <div className="anchor-page-links-container flex">{anchorEl}</div>
      {!myElementIsVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="projects-container flex flex-col">{projectEl}</div>
    </section>
  );
}
