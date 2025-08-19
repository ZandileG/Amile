import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";

import NarrationOff from "../Images/NarrationOff.png";
import MusicOff from "../Images/MusicOff.png";

import MusicImg from "../Images/Music.png";
import NarrationImg from "../Images/Narration.png";

import Zulu from "../Images/Zulu.png";
import English from "../Images/English.png";
import "../App.css";

function Navbar({ goToPage, visible, chapters, currentPage }){
  const { musicPlaying, playMusic, narrationPlaying, playNarration, 
          toggleNarration, language, changeLanguage } = useContext(MusicContext);
  
//I want to check what is the current chapter based on the page number
  const currentChapterObj = chapters.find(ch => currentPage >= ch.range[0] && currentPage <= ch.range[1]);
  const currentChapterNumber = currentChapterObj ? currentChapterObj.chapterNumber : null;

//When the narration button is clicked, it plays the narration for the current chapter
  function handleNarrationClick(){
    if (!currentChapterNumber) return; 
    if (!narrationPlaying){
      playNarration(currentChapterNumber);
    } else {
    //This pauses/resumes the narration
      toggleNarration();
    }
  }

  return(
    <main className={`navbar ${visible ? "show" : ""}`}>
    <section className="navbar-audio-controls">
    <button type="button" className="music-button" onClick={playMusic}>
    <img src={musicPlaying ? MusicImg : MusicOff} alt="Music" />
    </button>
    
    <button type="button" className="narration-button" onClick={handleNarrationClick}>
    <img src={narrationPlaying ? NarrationImg : NarrationOff} alt="Narration" />
    </button>

    <button type="button" className="language-button" onClick={changeLanguage}>
    <img src={language === "en" ? English : Zulu} alt={language === "en" ? "English" : "Zulu"} />
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

      <button type="button" className="navbar-link" onClick={() => { goToPage(page); 
        playNarration(chapterNumber); 
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