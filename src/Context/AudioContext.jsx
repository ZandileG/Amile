import React, { createContext, useState } from "react";

export const AudioContext = createContext();

function AudioProvider({ children }){
const [music, setMusic] = useState(null);

  return (
    <AudioContext.Provider value={{ music, setMusic }}>
        {children}
    </AudioContext.Provider>
  );
}

export default AudioProvider;