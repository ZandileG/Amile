import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image13 from "../Images/Image13.png";
import "../Styles/Page.css";

function Page13(){
    const { currentTime } = useContext(MusicContext);
  
     const transcript = [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
  ];

  return(
    <section className="page">
      <img src={Image13} alt="Page 13" className="page-image" />

      <p className="page-text">After watering the plant, the girls grew bored and wandered back into the house.</p>

      <p className="page-text">
        {transcript.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="page-13">13</section>
    </section>
  );
}

export default Page13;