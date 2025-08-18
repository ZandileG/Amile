import React, { useEffect, useState } from "react";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1({audioRef}){
  const [currentTime, setCurrentTime] = useState(0);

  const transcript = [
    { text: "in a distant land named Dumakude,", start: 0, end: 3 },
    { text: "there were green hills, where you would see mountain goats grazing.", start: 4, end: 8 },
    { text: "There were clear rivers where little fishes and frogs used to play.", start: 9, end: 14 },
    { text: "There was also a neighbourhood that was full of life,", start: 15, end: 19 },
    { text: "where joy was shared, and every moment was a reason to celebrate.", start: 20, end: 25 },
  ];

  useEffect(() => {
    if (!audioRef) return;

    const updateTime = () => setCurrentTime(audioRef.currentTime);
    audioRef.addEventListener("timeupdate", updateTime);

    return () => {
      audioRef.removeEventListener("timeupdate", updateTime);
    };
  }, [audioRef]);

  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">O</section>
      <section className="drop-cap-text">NCE UPON A TIME,</section>
    </section>

      <p className="page-chapter">
        {transcript.map((line, i) => {
          const isActive =
            currentTime >= line.start && currentTime <= line.end;
          return (
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image1} alt="Page 1" className="page-image-1" />
      <section className="page-1">1</section>
    </section>
  );
}

export default Page1;