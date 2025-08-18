import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image33 from "../Images/Image33.png";
import "../Styles/Page.css";

function Page33(){
    const { currentTime } = useContext(MusicContext);
  
     const transcript = [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
  ];

  return(
    <section className="page">
      <p className="page-text">Amile’s parents hurried over, still in shock, and wrapped her in 
       a warm embrace. <q>I guess we’re staying,</q> they said, grinning through happy tears.
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

      <img src={Image33} alt="Page 33" className="page-image" />

      <section className="page-33">33</section>
    </section>
  );
}

export default Page33;