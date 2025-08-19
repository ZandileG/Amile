import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image25 from "../Images/Image25.png";
import "../Styles/Page.css";

function Page25(){
  const { currentTime, language } = useContext(MusicContext);

     const transcript = [
    { text: "Amile’s mom shook her head.", start: 0, end: 3 },
    { text: "“Uh, uh Amile, we have to go now,” said her mom,", start: 4, end: 9 },
    { text: "firmly as she reached for the plant.", start: 10, end: 12 },
    { text: "Amile pushed her mom’s hand away and covered Thingo with her arms.", start: 13, end: 15 },
    { text: "Tears welled in her eyes.", start: 16, end: 18 },
    { text: "She tried to hold them back,", start: 16, end: 18 },
    { text: "but they tumbled down her cheeks and splashed onto the roots of the plant.", start: 16, end: 18 },
  ];
  
  return(
   <section className="page">
      <img src={Image25} alt="Page 25" className="page-image" />

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

      <section className="page-25">25</section>
    </section>

  );
}

export default Page25;