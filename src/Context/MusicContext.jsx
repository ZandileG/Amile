import React, { createContext, useRef, useState } from "react";
import Music from "../Sound/Adventure.mp3";

import Chapter1 from "../Sound/Chapter1.mp3";
import Chapter2 from "../Sound/Chapter2.mp3";
import Chapter3 from "../Sound/Chapter3.mp3";
import Chapter4 from "../Sound/Chapter4.mp3";
import Chapter5 from "../Sound/Chapter5.mp3";

export const MusicContext = createContext();

export function MusicProvider({ children }){
  const musicRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const narrationRef = useRef(null);
  const [narrationPlaying, setNarrationPlaying] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(null);

  const chapters = {
    1: Chapter1,
    2: Chapter2,
    3: Chapter3,
    4: Chapter4,
    5: Chapter5,
  };

  //When the button is clicked, the music will play
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

function playNarration(chapterNumber) {
    const audioFile = chapters[chapterNumber];
    if (!audioFile) return;

//If we are already playing this chapter, do nothing
    if (currentChapter === chapterNumber && narrationRef.current){
      narrationRef.current.play().catch(console.error);
      setNarrationPlaying(true);
      return;
    }

  //This stops the previous narration
    if (narrationRef.current){
      narrationRef.current.pause();
      narrationRef.current.currentTime = 0;
    }

    narrationRef.current = new Audio(audioFile);
    narrationRef.current.play().catch(console.error);
    setNarrationPlaying(true);
    setCurrentChapter(chapterNumber);

    narrationRef.current.onended = () => {
      setNarrationPlaying(false);
      setCurrentChapter(null);
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
    <MusicContext.Provider value={{ musicPlaying, playMusic, narrationPlaying, playNarration, toggleNarration, currentChapter } }>
      {children}
    </MusicContext.Provider>
  );
}