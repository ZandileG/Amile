import React, { createContext, useRef, useState } from "react";
import Music from "../Sound/Adventure.mp3";

import Page1 from "../Sound/Page1.mp3";
import Page2 from "../Sound/Page2.mp3";
import Page3 from "../Sound/Page3.mp3";
import Page4 from "../Sound/Page4.mp3";
import Page5 from "../Sound/Page5.mp3";
import Page6 from "../Sound/Page6.mp3";
import Page7 from "../Sound/Page7.mp3";
import Page8 from "../Sound/Page8.mp3";
import Page9 from "../Sound/Page9.mp3";
import Page10 from "../Sound/Page10.mp3";
import Page11 from "../Sound/Page11.mp3";
import Page12 from "../Sound/Page12.mp3";

import Page13 from "../Sound/Page13.mp3";
import Page14 from "../Sound/Page14.mp3";
import Page15 from "../Sound/Page15.mp3";
import Page16 from "../Sound/Page16.mp3";
import Page17 from "../Sound/Page17.mp3";
import Page18 from "../Sound/Page18.mp3";
import Page19 from "../Sound/Page19.mp3";
import Page20 from "../Sound/Page20.mp3";
import Page21 from "../Sound/Page21.mp3";
import Page22 from "../Sound/Page22.mp3";
import Page23 from "../Sound/Page23.mp3";
import Page24 from "../Sound/Page24.mp3";
import Page25 from "../Sound/Page25.mp3";

import Page26 from "../Sound/Page26.mp3";
import Page27 from "../Sound/Page27.mp3";
import Page28 from "../Sound/Page28.mp3";
import Page29 from "../Sound/Page29.mp3";
import Page30 from "../Sound/Page30.mp3";
import Page31 from "../Sound/Page31.mp3";
import Page32 from "../Sound/Page32.mp3";
import Page33 from "../Sound/Page33.mp3";
import Page34 from "../Sound/Page34.mp3";
import Page35 from "../Sound/Page35.mp3";
import Page36 from "../Sound/Page36.mp3";

import Page1_Z from "../Sound/Page1-Z.mp3";
import Page2_Z from "../Sound/Page2-Z.mp3";
import Page3_Z from "../Sound/Page3-Z.mp3";
import Page4_Z from "../Sound/Page4-Z.mp3";
import Page5_Z from "../Sound/Page5-Z.mp3";
import Page6_Z from "../Sound/Page6-Z.mp3";
import Page7_Z from "../Sound/Page7-Z.mp3";
import Page8_Z from "../Sound/Page8-Z.mp3";
import Page9_Z from "../Sound/Page9-Z.mp3";
import Page10_Z from "../Sound/Page10-Z.mp3";
import Page11_Z from "../Sound/Page11-Z.mp3";
import Page12_Z from "../Sound/Page12-Z.mp3";

import Page13_Z from "../Sound/Page13-Z.mp3";
import Page14_Z from "../Sound/Page14-Z.mp3";
import Page15_Z from "../Sound/Page15-Z.mp3";
import Page16_Z from "../Sound/Page16-Z.mp3";
import Page17_Z from "../Sound/Page17-Z.mp3";
import Page18_Z from "../Sound/Page18-Z.mp3";
import Page19_Z from "../Sound/Page19-Z.mp3";
import Page20_Z from "../Sound/Page20-Z.mp3";
import Page21_Z from "../Sound/Page21-Z.mp3";
import Page22_Z from "../Sound/Page22-Z.mp3";
import Page23_Z from "../Sound/Page23-Z.mp3";
import Page24_Z from "../Sound/Page24-Z.mp3";
import Page25_Z from "../Sound/Page25-Z.mp3";

import Page26_Z from "../Sound/Page26-Z.mp3";
import Page27_Z from "../Sound/Page27-Z.mp3";
import Page28_Z from "../Sound/Page28-Z.mp3";
import Page29_Z from "../Sound/Page29-Z.mp3";
import Page30_Z from "../Sound/Page30-Z.mp3";
import Page31_Z from "../Sound/Page31-Z.mp3";
import Page32_Z from "../Sound/Page32-Z.mp3";
import Page33_Z from "../Sound/Page33-Z.mp3";
import Page34_Z from "../Sound/Page34-Z.mp3";
import Page35_Z from "../Sound/Page35-Z.mp3";
import Page36_Z from "../Sound/Page36-Z.mp3";

export const MusicContext = createContext();

export function MusicProvider({ children }){
  const musicRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const narrationRef = useRef(null);
  const [narrationPlaying, setNarrationPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [language, setLanguage] = useState("en");
  const [Zulu, setZulu] = useState(false);

//These are the narrations in zulu and english for each page and the audio files that go with each one
  const narrations = {
    en: { 1: Page1, 2: Page2, 3: Page3, 4: Page4, 5: Page5, 6: Page6, 7: Page7, 8: Page8, 9: Page9, 10: Page10, 11: Page11, 
          12: Page12, 13: Page13, 14: Page14, 15: Page15, 16: Page16, 17: Page17, 18: Page18, 19: Page19, 20: Page20, 
          21: Page21, 22: Page22, 23: Page23, 24: Page24, 25: Page25, 26: Page26, 27: Page27, 28: Page28, 29: Page29, 
          30: Page30, 31: Page31, 32: Page32, 33: Page33, 34: Page34, 35: Page35, 36: Page36 },

    zu: { 1: Page1_Z, 2: Page2_Z, 3: Page3_Z, 4: Page4_Z, 5: Page5_Z , 6: Page6_Z, 7: Page7_Z, 8: Page8_Z, 9: Page9_Z, 
          10: Page10_Z, 11: Page11_Z, 12: Page12_Z, 13: Page13_Z, 14: Page14_Z, 15: Page15_Z, 16: Page16_Z, 17: Page17_Z, 
          18: Page18_Z, 19: Page19_Z, 20: Page20_Z, 21: Page21_Z, 22: Page22_Z, 23: Page23_Z, 24: Page24_Z, 25: Page25_Z, 
          26: Page26_Z, 27: Page27_Z, 28: Page28_Z, 29: Page29_Z, 30: Page30_Z, 31: Page31_Z, 32: Page32_Z, 33: Page33_Z, 
          34: Page34_Z, 35: Page35_Z, 36: Page36_Z },
  };

//This will the language of the narration when the button is clicked
function changeLanguage(){
  setLanguage(prev => {
    const nextLang = prev === "en" ? "zu" : "en";
    setZulu(nextLang === "zu");
    return nextLang;
  });
}

//When the buttons are clicked, the music/narration will play
  function playMusic(){
    if (!musicRef.current){
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

function playNarration(pageNumber){
  const audioFile = narrations[language][pageNumber];
  if (!audioFile) return;

  if (narrationRef.current){
    narrationRef.current.pause();
    narrationRef.current.currentTime = 0;
  }

  const audio = new Audio(audioFile);
  narrationRef.current = audio;
  setCurrentPage(pageNumber); 
  setNarrationPlaying(true);

  audio.play().catch(console.error);

  audio.ontimeupdate = () => {
    setCurrentTime(audio.currentTime);
  };

  audio.onended = () => {
    setNarrationPlaying(false);
    setCurrentTime(0);

    const nextPage = pageNumber + 1;
    if (narrations[language][nextPage]){
      playNarration(nextPage); 
    } else {
      setCurrentPage(null); 
    }
  };
}

  function toggleNarration(){
    if (!narrationRef.current) return;
    if (narrationPlaying){
      narrationRef.current.pause();
      setNarrationPlaying(false);
    } else {
      narrationRef.current.play().catch(console.error);
      setNarrationPlaying(true);
    }
  }

  return(
    <MusicContext.Provider value={{ musicPlaying, playMusic, narrationPlaying, playNarration, toggleNarration, 
                           language, changeLanguage, Zulu, currentPage, narrationRef, currentTime } }>{children}
    </MusicContext.Provider>
  );
}