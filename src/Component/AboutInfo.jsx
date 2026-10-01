import { useRef } from "react";
import avatar from "../assets/avatar.png";
import "./About.css";

function AboutInfo() {
  const aboutRef = useRef(null);
  const avatarRef = useRef(null);

  const handleMove = (e) => {
    const card = aboutRef.current;
    const avatar = avatarRef.current;

    if (!card || !avatar) return;

    const rect = card.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const avatarX = rect.width - 70;
    const avatarY = 45;

    const dx = mouseX - avatarX;
    const dy = mouseY - avatarY;

    avatar.style.transform = `
      translate(${dx * 0.18}px, ${dy * 0.18}px)
      rotateY(${dx / 18}deg)
      rotateX(${-dy / 18}deg)
      scale(1.08)
    `;
  };

  const handleLeave = () => {
    if (!avatarRef.current) return;

    avatarRef.current.style.transform =
      "translate(0px,0px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className="about-card"
      ref={aboutRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="about-header">
        <h2>About Me</h2>

        <img
          src={avatar}
          alt="Saksham"
          ref={avatarRef}
          className="about-avatar"
        />
      </div>

      <p>
        I'm a passionate Frontend Developer who enjoys building modern,
        responsive and interactive web applications using React and JavaScript.
      </p>

      <p>
        I love creating smooth UI animations, writing clean code,
        and continuously learning new technologies.
      </p>

      <p>
        Currently I'm expanding my skills towards backend development
        to become a Full Stack Developer.
      </p>
    </div>
  );
}

export default AboutInfo;