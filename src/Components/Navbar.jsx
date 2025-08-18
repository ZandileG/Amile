import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";

import NarrationOff from "../Images/NarrationOff.png";
import MusicOff from "../Images/MusicOff.png";

import MusicImg from "../Images/Music.png";
import NarrationImg from "../Images/Narration.png";
import "../App.css";

function Navbar({ goToPage, visible, chapters }){

//This plays the background music and narration
  const { musicPlaying, playMusic, narrationPlaying, playNarration, toggleNarration } = useContext(MusicContext);
  
  return(
    <main className={`navbar ${visible ? "show" : ""}`}>
    <section className="navbar-audio-controls">
    <button type="button" className="music-button" onClick={playMusic}>
    <img src={musicPlaying ? MusicImg : MusicOff} alt="Music" />
    </button>
    
    <button type="button" className="narration-button" onClick={toggleNarration}>
    <img src={narrationPlaying ? NarrationImg : NarrationOff} alt="Narration" />
    </button>
    </section>

   <section className="navbar-chapters">
  <ul className="navbar-list">
  {chapters.map(({ page, label, range, chapterNumber }) => (
  <li key={page} className="chapter-nav-item">
      <section className="chapter-pages-container">
        {Array.from({ length: range[1] - range[0] + 1 }, (_, i) => (
          <button type="button"className="chapter-page-number" key={range[0] + i} onClick={() => goToPage(range[0] + i)}>
            {range[0] + i}
          </button>
        ))}
      </section>

      <button type="button" className="navbar-link" 
        onClick={() => { goToPage(page); 
                         chapters[chapterNumber - 1] && chapters[chapterNumber - 1].play();
                       }}>
        {label}
      </button>
  </li>
  ))}
</ul>
    </section>
    </main>
  );
}

export default Navbar;