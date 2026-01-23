import type { JSX } from "react";
import data from "../aboutMeData";
import { useTranslation } from "react-i18next";

export default function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="about-section flex flex-col">
      <div className="description-card flex flex-col">
        <img
          className="card-image"
          src="/Antonio.jpg"
          alt="Antonio smiling and looking at the camera"
        />

        <h1 className="about-name">
          <span>Antonio</span> <span>Susio</span>
        </h1>
        <div className="description-container flex flex-col">
          <h2 className="about-presentation">
            <span>{t("hello")},</span>{" "}
            <span>
              {t("I'm")} {data.name}
            </span>
          </h2>
          <p className="about-description">{t("description")}</p>
        </div>

        <div className="scrimba-link-container flex">
          <a
            href="https://scrimba.com/home"
            className="scrimba-link"
            target="_blank"
          >
            {t("scrimba")}
          </a>
        </div>

        <div className="skills-section flex flex-col">
          <h2>Skills</h2>
          <ul className="skills-container flex">
            {data.skills.map((skill) => (
              <li key={skill} className="skill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
