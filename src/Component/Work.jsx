import React from "react";
import "./Work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-heading">
        <p>SELECTED PROJECTS</p>
        <h1>Things I've built.</h1>
      </div>

      <div className="work-grid">
        <div className="project-card project-1">
          <img src="/images.jpg" alt="NewsX" />
          <h2>NewsX</h2>
          <button className="project-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <div className="project-overlay">
            <p>
              NewsX is a responsive news application that fetches
  real-time headlines from a news API and displays them
  in a clean, category-based interface. Users can browse
  the latest news, explore different categories, and view
  important information such as the source, description,
  publication date, and news image.
            </p>

            <div className="tech-stack">
             <span>React</span>
  <span>JavaScript</span>
  <span>News API</span>
  <span>REST API</span>
  <span>React Hooks</span>
  <span>CSS</span>
            </div>
          </div>
        </div>

        <div className="project-card project-2">
          <img src="/Screenshot 2026-10-01 103647.png" alt="MovieVerse" />
          <h2>GitHub Finder</h2>
          <button className="project-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <div className="project-overlay">
            <p>
              A GitHub profile search application that displays user
details and repository information using the GitHub API.
            </p>

            <div className="tech-stack">
              <span>JAVASCRIPT</span>
              <span>API</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

        <div className="project-card project-3">
          <img src="/Screenshot 2026-10-01 103854.png" alt="SmartCare" />
          <h2>SmartCare</h2>
          <button className="project-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <div className="project-overlay">
            <p>
              A healthcare discovery platform that helps users find
doctors based on specialty and location.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>CSS</span>
              <span>JSON</span>
              <span>LOCALSTORAGE</span>
            </div>
          </div>
        </div>

        <div className="project-card project-4">
          <img src="/movie.png" alt="GitHub Finder" />
          <h2>MovieVerse</h2>
          <button className="project-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <div className="project-overlay">
            <p>
              MovieVerse is a movie search application that uses
  an external movie API to fetch and display movie
  information dynamically. Users can search for movies
  and explore details through a responsive card-based
  interface with real-time API data and interactive UI.
            </p>

           <div className="tech-stack">
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
  <span>REST API</span>
  <span>Fetch API</span>
  <span>DOM</span>
  <span>Async/Await</span>
  <span>Responsive UI</span>
</div>
          </div>
        </div>

        <div className="project-card project-5">
          <img src="/auth.jpg" alt="Auth Dashboard" />
          <h2>Auth Dashboard</h2>
          <button className="project-arrow">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
          <div className="project-overlay">
            <p>
              A login and authentication dashboard using API-based
authentication with protected user data.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>LOCALSTORAGE</span>
              <span>API</span>
              <span>CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
