import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image26 from "../Images/Image26.png";
import "../Styles/Page.css";

function Page26(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <p className="page-text">Amile’s mom placed her hands on her hips, her face less friendly than 
       before. Amile’s dad noticed the look and stepped forward, reaching toward Amile ready to lift 
       her off the ground, whether she liked it or not.
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

      <img src={Image26} alt="Page 26" className="page-image" />

      <section className="page-26">26</section>
    </section>
  );
}

export default Page26;