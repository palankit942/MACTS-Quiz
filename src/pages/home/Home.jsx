import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h2 className="landing-heading">
          <span className="highlight">M</span>ovies{" "}
          <span className="highlight">A</span>nime{" "}
          <span className="highlight">C</span>omics{" "}
          <span className="highlight">T</span>V-
          <span className="highlight">S</span>eries
        </h2>
        <h3 className="landing-subheading">Quiz App</h3>
        <p className="landing-subheading">
          Test your knowledge about your favourite Movies, Anime, TV Series and
          more.
        </p>
        <Link to="/category">
          <button className="btn-landing">Play Now</button>
        </Link>
      </div>
    </div>
  );
}

export { Home };
