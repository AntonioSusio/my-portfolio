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

  const resumeEl = resumes.map((item) => (
    <div key={nanoid()} className="resume-card flex flex-col">
      <h2 className="resume-period">{item.period}</h2>
      <h3 className="resume-istitute-info">
        {item.schoolName} - {item.city} {item.country}
      </h3>
      {item.eqfLevel && <p>EQF Level - {item.eqfLevel}</p>}
      <p>{item.description}</p>
      <Link to={`${item.imageUrl}`} target="_blank">
        <img
          className="resume-img"
          src={item.imageUrl}
          alt={item.alternativeText}
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
