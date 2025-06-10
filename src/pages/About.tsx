export default function About() {
  return (
    <section className="about-section">
      <div className="card-container flex flex-col">
        <img
          className="card-image"
          src="Antonio.jpg"
          alt="Image of Antonio smiling and looking at the camera"
        />

        <h1>Hello , I'm Antonio</h1>
        <p>i'm a frontend developer</p>

        <div className="social-container flex">
          <p>github</p>
          <p>linkedin</p>
          <p>gmail</p>
        </div>
      </div>
    </section>
  );
}
