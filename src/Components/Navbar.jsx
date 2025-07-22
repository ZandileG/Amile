import React, { useState, useRef } from "react";
import Music from "../Sound/Adventure.mp3";
import Narration from "../Sound/Adventure.mp3";

import MusicOff from "../Images/MusicOff.png";
import NarrationOff from "../Images/NarrationOff.png";

import MusicImg from "../Images/Music.png";
import NarrationImg from "../Images/Narration.png";
import "../App.css";

function Navbar({ pageCount, goToPage }){
//This is the state for the current page group in the navbar
  const [pageGroup, setPageGroup] = useState(0);
  const groupSize = 5;
  const totalGroups = Math.ceil(pageCount / groupSize);

//This plays the background music and narration
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [narrationPlaying, setNarrationPlaying] = useState(false);

//References for the audio elements
  const musicRef = useRef(null);
  const narrationRef = useRef(null);

   function playMusic(){
    if (!musicRef.current) {
      musicRef.current = new Audio(Music);
      musicRef.current.loop = true;
      musicRef.current.onended = () => setMusicPlaying(false);
    }

    if (musicPlaying){
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
      setMusicPlaying(false);
    } else{
      musicRef.current.play();
      setMusicPlaying(true);
    }
  }

 function playNarration(){
    if (!narrationRef.current){
      narrationRef.current = new Audio(Narration);
      narrationRef.current.onended = () => setNarrationPlaying(false);
    }

    if (narrationPlaying){
      narrationRef.current.pause();
      narrationRef.current.currentTime = 0;
      setNarrationPlaying(false);
    } else{
      narrationRef.current.play();
      setNarrationPlaying(true);
    }
  }

//This counts the pages in the current group
  const start = pageGroup * groupSize;
  const end = Math.min(start + groupSize, pageCount);

  return (
    <main className="navbar">
    <section className="navbar-audio-controls">
    <button type="button" className="music-button" onClick={playMusic}>
          <img src={musicPlaying ? MusicImg : MusicOff} alt="Music" />
    </button>
    
    <button type="button" className="narration-button" onClick={playNarration}>
    <img src={narrationPlaying ? NarrationImg : NarrationOff} alt="Narration" />
    </button>
    </section>

    <section className="navbar-carousel-container">
    <ul className="navbar-list carousel-slide">
          {Array.from({ length: end - start }).map((_, i) => (
            <li key={start + i}>
              <button
                type="button"
                className="navbar-link"
                onClick={() => goToPage(start + i)}
              >
                {start + i + 1}
              </button>
            </li>
          ))}
        </ul>

        <section className="carousel-dots">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <span
              key={i}
              className={`carousel-dot ${i === pageGroup ? "active" : ""}`}
              onClick={() => setPageGroup(i)}
            />
          ))}
        </section>
      </section>
    </main>
  );
}

export default Navbar;