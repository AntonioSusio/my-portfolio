import React from "react";
import type { JSX } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import type { Project } from "../projects";
import projectsData from "../projects";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Projects(): JSX.Element {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { t } = useTranslation();

  React.useEffect((): void => {
    setProjects(projectsData);
  }, []);

  function scrollToTop(): void {
    sectionRef.current?.scrollTo({ top: 0, behavior: "smooth" });
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
        key={project.id}
        className="project-card flex flex-col"
      >
        <img
          src={project.projectImage}
          alt={project.alternativeText}
          className="project-img"
        />
        <div className="project-info flex flex-col">
          <h2 className="project-name">{project.projectName}</h2>
          <p className="project-description">
            {t(`project_description.${project.projectDescritpionId}`)}
          </p>

          <p className="technologies-paragraph">{t("technologies")}</p>
          <ul className="technologies-container flex">
            {project.projectTechnologies.map((tech) => (
              <li key={tech} className="technology">
                {tech}
              </li>
            ))}
          </ul>

          <a href={project.projectUrl} target="_blank" className="project-link">
            {t("project_site")}
          </a>
        </div>
      </div>
    )
  );

  return (
    <section ref={sectionRef} className="projects-section flex flex-col">
      <h1 ref={myRef} id="projects-heading" className="projects-heading flex">
        {t("projects")}
      </h1>

      <div className="anchor-page-links-container flex">{anchorEl}</div>
      {!myElementIsVisible && (
        <button
          className="scroll-to-top-button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      <div className="projects-container flex flex-col">{projectEl}</div>
    </section>
  );
}
