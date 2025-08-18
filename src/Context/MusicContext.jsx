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
  const [currentTime, setCurrentTime] = useState(0);

//These are the chapters and the narration audio files that go with each one
  const chapters = { 1: Chapter1, 2: Chapter2, 3: Chapter3, 4: Chapter4, 5: Chapter5 };

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

function playNarration(chapterNumber){
  const audioFile = chapters[chapterNumber];
  if (!audioFile) return;

  if (narrationRef.current){
    narrationRef.current.pause();
    narrationRef.current.currentTime = 0;
  }

  narrationRef.current = new Audio(audioFile);
  narrationRef.current.play().catch(console.error);
  setNarrationPlaying(true);
  setCurrentChapter(chapterNumber);

  narrationRef.current.ontimeupdate = () => {
    setCurrentTime(narrationRef.current.currentTime);
  };

  narrationRef.current.onended = () => {
    setNarrationPlaying(false);
    setCurrentChapter(null);
    setCurrentTime(0);
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
    <MusicContext.Provider value={{ musicPlaying, playMusic, narrationPlaying, playNarration, 
                                 toggleNarration, currentChapter, narrationRef, currentTime } }>
      {children}
    </MusicContext.Provider>
  );
}