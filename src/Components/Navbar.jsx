import React, { useState, useContext, useRef } from "react";
import { MusicContext } from "../Context/MusicContext";

import Narration from "../Sound/Narration.mp3";
import NarrationOff from "../Images/NarrationOff.png";
import MusicOff from "../Images/MusicOff.png";

import MusicImg from "../Images/Music.png";
import NarrationImg from "../Images/Narration.png";
import "../App.css";

function Navbar({ goToPage, visible }){

//This plays the background music and narration
  const { musicPlaying, playMusic } = useContext(MusicContext);
  const [narrationPlaying, setNarrationPlaying] = useState(false);

  const narrationRef = useRef(null);

//When the button is clicked, the narration will play
 function playNarration(){
    if (!narrationRef.current){
      narrationRef.current = new Audio(Narration);
      narrationRef.current.loop = true;
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

 //These are the pages that start each chapter
  const chapters = [
    { page: 1, label: "Chapter 1" },
    { page: 7, label: "Chapter 2" },
    { page: 15, label: "Chapter 3" },
    { page: 21, label: "Chapter 4" },
    { page: 29, label: "Chapter 5" },
  ];

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

   <section className="navbar-chapters">
   <ul className="navbar-list">
   {chapters.map(({ page, label }) => (
    <li key={page}>
    <button type="button" className="navbar-link" onClick={() => goToPage(page)}>{label}</button>
    </li>
  ))}
    </ul>
    </section>
    </main>
  );
}

export default Navbar;