import React from "react";
import type { JSX } from "react";
import type { Resumes } from "../resume";
import resume from "../resume";
import { useTranslation } from "react-i18next";

export default function Resume(): JSX.Element {
  const [resumes, setResumes] = React.useState<Resumes[]>([]);

  const { t } = useTranslation();

  React.useEffect((): void => {
    setResumes(resume);
  }, []);

  const resumeEl: JSX.Element[] = resumes.map(
    (resume: Resumes): JSX.Element => (
      <article key={resume.id} className="resume-card flex flex-col">
        <h2 className="resume-period">{resume.period}</h2>
        <h3 className="resume-institute-info">
          {resume.schoolName} - {t(`cities.${resume.city}`)} {""}
          {resume.country && t(`countries.${resume.country}`)}
        </h3>
        {resume.eqfLevel && (
          <p>
            {t("eqfLevel")} - {resume.eqfLevel}
          </p>
        )}
        <p className="resume-description">
          {t(`resumes.${resume.description}`)}
        </p>
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
      <h1 className="resume-heading flex">{t("resume")}</h1>
      <div className="resumes-container flex flex-col">{resumeEl}</div>
    </section>
  );
}
