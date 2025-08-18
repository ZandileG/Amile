import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image15 from "../Images/Image15.png";
import "../Styles/Page.css";

function Page15(){
    const { currentTime } = useContext(MusicContext);

     const transcript = [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
  ];
  
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">E</section>
      <section className="drop-cap-text">VERY MORNING,</section>
    </section>

      <p className="page-chapter">Amile sneaked outside with a cup of water and poured it 
       over the plant. Her parents would’ve been angry if they found out, but she couldn’t help it, she 
       needed to know what that seed would become.
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

      <img src={Image15} alt="Page 15" className="page-image-1" />
      <section className="page-15">15</section>
    </section>
  );
}

export default Page15;