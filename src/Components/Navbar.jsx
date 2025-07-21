import React from "react";
import "./Navbar.css";

function Navbar({ pageCount, goToPage }) {

  return (
    <main className="navbar">
      <h2 className="navbar-title">Navigation</h2>
      <ul className="navbar-list">
        {Array.from({ length: pageCount }).map((_, i) => (
          <li key={i}>
            <button type="button" className="navbar-link" onClick={() => goToPage(i)}>Page {i + 1}</button>
          </li>
        ))}
      </ul>

      <section className="navbar-audio-controls">
        <button type="button" className="music-button">Play Music</button>
        <button type="button" className="narration-button">Play Narration</button>
      </section>
    </main>
  );
}

export default Navbar;