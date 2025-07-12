import React from "react";
import type { JSX } from "react";
import type { Resumes } from "../resume";
import resume from "../resume";

export default function Resume(): JSX.Element {
  const [resumes, setResumes] = React.useState<Resumes[]>([]);

  React.useEffect((): void => {
    setResumes(resume);
  }, []);

  const resumeEl: JSX.Element[] = resumes.map(
    (resume: Resumes): JSX.Element => (
      <article key={resume.id} className="resume-card flex flex-col">
        <h2 className="resume-period">{resume.period}</h2>
        <h3 className="resume-institute-info">
          {resume.schoolName} - {resume.city} {resume.country}
        </h3>
        {resume.eqfLevel && <p>EQF Level - {resume.eqfLevel}</p>}
        <p className="resume-description">{resume.description}</p>
        <a
          href={`${resume.imageUrl}`}
          target="_blank"
          aria-label={`Open ${resume.schoolName} certificate image`}
        >
          <img
            className="resume-img"
            src={resume.imageUrl}
            alt={resume.alternativeText}
          />
        </a>
      </article>
    )
  );

  return (
    <section className="resume-section flex flex-col">
      <h1 className="resume-heading flex">Resume</h1>
      <div className="resumes-container flex flex-col">{resumeEl}</div>
    </section>
  );
}
