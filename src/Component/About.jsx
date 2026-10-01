import "./About.css";
import AboutInfo from "./AboutInfo";
import Technical from "./Technical";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <AboutInfo />
        <Technical />
      </div>
    </section>
  );
}

export default About;