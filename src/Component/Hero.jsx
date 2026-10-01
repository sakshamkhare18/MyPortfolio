import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

function Hero() {
  const glowRef = useRef(null);
  const heroText = useRef(null);

  // Cursor Glow
  const moveGlow = (e) => {
    if (!glowRef.current) return;

    glowRef.current.style.left = `${e.clientX}px`;
    glowRef.current.style.top = `${e.clientY}px`;
  };

  const showGlow = () => {
    if (window.innerWidth <= 768) return;

    if (glowRef.current) {
      glowRef.current.style.opacity = "1";
    }
  };

  const hideGlow = () => {
    if (!glowRef.current) return;

    glowRef.current.style.opacity = "0";
  };

  // Typing Animation
  const words = [
    "WEB DEVELOPER!",
    "REACT DEVELOPER!",
    "FRONTEND DEVELOPER!",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let typingTimeout;
    let changeWordTimeout;

    const type = () => {
      if (index <= words[wordIndex].length) {
        setText(words[wordIndex].slice(0, index));
        index++;
        typingTimeout = setTimeout(type, 120);
      } else {
        changeWordTimeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1200);
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(changeWordTimeout);
    };
  }, [wordIndex]);

  // Scroll Blur Animation
  useEffect(() => {
    const handleScroll = () => {
      if (!heroText.current) return;

      const scrollY = window.scrollY;

      const blur = Math.min(scrollY / 15, 20);
      const opacity = Math.max(1 - scrollY / 350, 0);
      const scale = Math.max(1 - scrollY / 1200, 0.8);
      const translateY = scrollY * -0.25;

      heroText.current.style.filter = `blur(${blur}px)`;
      heroText.current.style.opacity = opacity;
      heroText.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={moveGlow}
      onMouseEnter={showGlow}
      onMouseLeave={hideGlow}
      ref={heroText}
    >
      <span className="glow" ref={glowRef}></span>

      <h1 className="heading" >
        SAKSHAM <br />
        KHARE
      </h1>

      <h2>{text}</h2>
    </section>
  );
}

export default Hero;