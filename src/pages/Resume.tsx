import React from "react";
import { Link } from "react-router-dom";
import type { Resumes } from "../resume";
import resume from "../resume";
import { nanoid } from "nanoid";

export default function Resume() {
  const [resumes, setResumes] = React.useState<Resumes[]>([]);

  React.useEffect(() => {
    setResumes(resume);
  }, []);

  const resumeEl = resumes.map((resume) => (
    <div key={nanoid()} className="resume-card flex flex-col">
      <h2 className="resume-period">{resume.period}</h2>
      <h3 className="resume-istitute-info">
        {resume.schoolName} - {resume.city} {resume.country}
      </h3>
      {resume.eqfLevel && <p>EQF Level - {resume.eqfLevel}</p>}
      <p className="resume-description">{resume.description}</p>
      <Link to={`${resume.imageUrl}`} target="_blank">
        <img
          className="resume-img"
          src={resume.imageUrl}
          alt={resume.alternativeText}
        />
      </Link>
    </div>
  ));

  return (
    <section className="resume-section flex flex-col">
      <h1 className="resume-heading flex">Resume</h1>
      <div className="resumes-container flex flex-col">{resumeEl}</div>
    </section>
  );
}
