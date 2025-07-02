import { Link } from "react-router-dom";
import type { JSX } from "react";
import data from "../aboutMeData";

export default function About(): JSX.Element {
  return (
    <section className="about-section">
      <div className="description-card flex flex-col">
        <div className="description-container flex flex-col">
          <h2 className="about-presentation">
            <span>Hello,</span> <span>I'm {data.name}</span>
          </h2>
          <p className="about-description">{data.description}</p>
        </div>

        <div className="scrimba-link-container flex">
          <Link
            to="https://scrimba.com/home"
            className="scrimba-link"
            target="_blank"
          >
            Click here if you want discover about Scrimba
          </Link>
        </div>

        <div className="skills-section flex flex-col">
          <h2>Skills</h2>
          <div className="skills-container flex">
            {data.skills.map((skill) => (
              <p className="skill">{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
