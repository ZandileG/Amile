import React from "react";
import Music from "../Sound/Adventure.mp3";
import Music from "../Sound/BlueHour.mp3";
import Music from "../Sound/BeyondTheHorizon.mp3";
import Narration from "../Sound/Adventure.mp3";
import "./App.css";

function Navbar({ pageCount, goToPage }) {

function playMusic() {
  const audio = new Audio(Music);
  audio.play();
}

function playNarration() {
  const narration = new Audio(Narration);
  narration.play();
}

  return (
    <main className="navbar">
      <h1 className="navbar-title">Navigation</h1>
      <ul className="navbar-list">
        {Array.from({ length: pageCount }).map((_, i) => (
          <li key={i}>
          <button type="button" className="navbar-link" onClick={() => goToPage(i)}>Page {i + 1}</button>
          </li>
        ))}
      </ul>

      <section className="navbar-audio-controls">
        <button type="button" className="music-button" onClick={playMusic}>Music</button>
        <button type="button" className="narration-button" onClick={playNarration}>Narration</button>
      </section>
    </main>
  );
}

export default Navbar;