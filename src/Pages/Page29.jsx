import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image29 from "../Images/Image29.png";
import "../Styles/Page.css";

function Page29(){
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
    <section className="drop-cap-container">
      <section className="drop-cap">A</section>
      <section className="drop-cap-text">RUMBLE ECHOED</section>
    </section>

      <p className="page-chapter">in the sky. Amile, Khaya and her parents looked up. 
       The clouds, once pale and lifeless, turned heavy and grey. Thunder clapped, the 
       wind shifted, there were tiny drops, big, bold splashes. Then Rain! Cool, glorious, 
       sweet-smelling rain!
      </p>

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

      <img src={Image29} alt="Page 29" className="page-image-1" />
      <section className="page-29">29</section>
    </section>
  );
}

export default Page29;