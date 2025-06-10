import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-section flex flex-col">
      <div className="about-description-container flex flex-col">
        <h2 className="about-presentation">
          <span>Hello,</span> <span>I'm Antonio</span>
        </h2>
        <p className="about-description">
          I am a graduate frontend student from the Scrimba platform, with a
          particular interest in constantly improving and discovering new things
          about coding. I enjoy difficult challenges, even if it takes me time
          to solve them, because I like finding and analyzing new approaches
          that are unknown to me for solve them. I like collectible card games,
          strategy games, rope jumping, and I am a fan of cannelloni (a typical
          Neapolitan dish). But most importantly, I really love listening to
          music.
        </p>

        <Link to="https://scrimba.com/home" className="scrimba-link">
          Click here if you want discover about Scrimba
        </Link>
      </div>
    </section>
  );
}
