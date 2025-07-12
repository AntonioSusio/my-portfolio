import type { JSX } from "react";
import data from "../aboutMeData";

export default function About(): JSX.Element {
  return (
    <section className="about-section flex flex-col">
      <div className="description-card flex flex-col">
        <img
          className="card-image"
          src="/AboutMeImg.jpg"
          alt="Image of Antonio smiling and looking at the camera"
        />

        <h1 className="about-name">
          <span>Antonio</span> <span>Susio</span>
        </h1>
        <div className="description-container flex flex-col">
          <h2 className="about-presentation">
            <span>Hello,</span> <span>I'm {data.name}</span>
          </h2>
          <p className="about-description">{data.description}</p>
        </div>

        <div className="scrimba-link-container flex">
          <a
            href="https://scrimba.com/home"
            className="scrimba-link"
            target="_blank"
          >
            Click here if you want discover about Scrimba
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
