import React, { useState, useContext, useRef } from "react";
import { MusicContext } from "../Context/MusicContext";

import Narration from "../Sound/Adventure.mp3";
import MusicOff from "../Images/MusicOff.png";
import NarrationOff from "../Images/NarrationOff.png";

import MusicImg from "../Images/Music.png";
import NarrationImg from "../Images/Narration.png";
import "../App.css";

function Navbar({ pageCount, goToPage, visible }){
//This is the state for the current page group in the navbar
  const [pageGroup, setPageGroup] = useState(0);
  const groupSize = 5;
  const totalGroups = Math.ceil(pageCount / groupSize);

  const start = pageGroup * groupSize;
  const end = Math.min(start + groupSize, pageCount);

//This plays the background music and narration
  const { musicPlaying, playMusic } = useContext(MusicContext);
  const [narrationPlaying, setNarrationPlaying] = useState(false);

  const narrationRef = useRef(null);

//When the button is clicked, the narration will play
//If the narration is already playing, it stops and resets the time to 0
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

  return(
    <main className={`navbar ${visible ? "show" : ""}`}>
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
     <button type="button" className="navbar-link" onClick={() => goToPage(start + i)}>
      {start + i + 1}</button>
     </li>
    ))}
    </ul>

    <section className="carousel-dots">
      {Array.from({ length: totalGroups }).map((_, i) => (
    <span key={i} className={`carousel-dot ${i === pageGroup ? "active" : ""}`} onClick={() => setPageGroup(i)} />
    ))}
    </section>
    </section>
    </main>
  );
}

export default Navbar;