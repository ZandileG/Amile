import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image1 from "../Images/Image1.png";
import "../Styles/Page.css";

function Page1(){
  const { currentTime } = useContext(MusicContext);

  const transcript = [
    { text: "in a distant land named Rileytown,", start: 0, end: 3 },
    { text: "there were green hills, where you would see mountain goats grazing.", start: 4, end: 9 },
    { text: "There were clear rivers where little fishes and frogs used to play.", start: 10, end: 12 },
    { text: "There was also a neighbourhood that was full of life,", start: 13, end: 15 },
    { text: "where joy was shared, and every moment was a reason to celebrate.", start: 16, end: 18 },
  ];

  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">O</section>
      <section className="drop-cap-text">NCE UPON A TIME,</section>
    </section>

      <p className="page-chapter">
        {transcript.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
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