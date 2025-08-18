import React, { useState, useEffect } from "react";
import "../styles.css";

function Chapter({ transcript, audioRef }) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audioRef) return;

    const updateTime = () => setCurrentTime(audioRef.currentTime);
    audioRef.addEventListener("timeupdate", updateTime);

    return () => {
      audioRef.removeEventListener("timeupdate", updateTime);
    };
  }, [audioRef]);

  return (
    <div className="chapter-text">
      {transcript.map((line, i) => {
        const isActive = currentTime >= line.start && currentTime <= line.end;
        return (
          <p key={i} className={isActive ? "highlight" : ""}>
            {line.text}
          </p>
        );
      })}
    </div>
  );
}

export default Chapter;