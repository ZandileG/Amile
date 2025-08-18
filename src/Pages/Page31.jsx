import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image31 from "../Images/Image31.png";
import "../Styles/Page.css";

function Page31(){
    const { currentTime } = useContext(MusicContext);
  
     const transcript = [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
    { text: "", start: 16, end: 18 },
  ];

  return(
    <section className="page">
      <img src={Image31} alt="Page 31" className="page-image" />

      <p className="page-text">Amile laughed and danced, arms wide, as the sky wept with joy. 
        Khaya ran to her, and together they spun around, laughing, dancing in the rain just 
        like they used to.
      </p>

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

      <section className="page-31">31</section>
    </section>
  );
}

export default Page31;