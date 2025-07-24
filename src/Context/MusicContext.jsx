import React, { createContext, useRef, useState } from "react";
import Music from "../Sound/Adventure.mp3";

export const MusicContext = createContext();

export function MusicProvider({ children }){
  const musicRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

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

  return(
    <MusicContext.Provider value={{ musicPlaying, playMusic }}>
      {children}
    </MusicContext.Provider>
  );
}