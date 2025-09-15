import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";

import NarrationOff from "../Icons/NarrationOff.png";
import MusicOff from "../Icons/MusicOff.png";

import MusicImg from "../Icons/Music.png";
import NarrationImg from "../Icons/Narration.png";

import Zulu from "../Icons/Zulu.png";
import English from "../Icons/English.png";
import "../App.css";

function Navbar({ goToPage, visible, chapters, currentPage, pageCount }){
  const { musicPlaying, playMusic, narrationPlaying, playNarration, 
          toggleNarration, language, changeLanguage } = useContext(MusicContext);

//When the narration button is clicked, it plays the narration for the current page
  function handleNarrationClick(){
   if (currentPage === 0 || currentPage === pageCount - 1) return; 
   if (!narrationPlaying){
    playNarration(currentPage);
  } else {
    toggleNarration();
  }
  }

//When the screen size is less than or equal to 1023px, the chapter pages container will show 6 page numbers then be a carousel if there are more pages
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(
  typeof window !== "undefined" ? window.innerWidth <= 1023 : true
 );
  const chaptersPerView = 6;

  useEffect(() => {
  function handleResize(){
    setIsCarousel(window.innerWidth <= 1023);
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

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
        {isCarousel && range[1] - range[0] + 1 >chaptersPerView && (
      <button type="button" className="carousel-arrow" onClick={() => setCarouselIndex(Math.max(carouselIndex - chaptersPerView, 0))}
       disabled={carouselIndex === 0}>←</button>
      )}
        {Array.from({ length: range[1] - range[0] + 1 }, (_, i) => range[0] + i)
        .slice(carouselIndex, carouselIndex + chaptersPerView).map((pageNum) => (
      <button type="button" className={`chapter-page-number chapter-${chapterNumber} ${currentPage === pageNum ? " active" : ""}`}
        key={pageNum} onClick={() => goToPage(pageNum)}>{pageNum}</button>
      ))}
        {isCarousel && range[1] - range[0] + 1 > chaptersPerView && (
      <button type="button" className="carousel-arrow" onClick={() => setCarouselIndex(Math.min(carouselIndex + chaptersPerView, range[1] - range[0] + 1 - chaptersPerView))}
        disabled={carouselIndex + chaptersPerView >= range[1] - range[0] + 1}>→</button>
      )}
      </section>

      <button type="button" className={`navbar-link navbar-link-${chapterNumber}`} onClick={() => { goToPage(page); 
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