import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image11 from "../Images/Image11.png";
import "../Styles/Page.css";

function Page11(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image11} alt="Page 11" className="page-image" />

    <section className="page-text">
      <p><q>Oh, I have an idea!</q> exclaimed Amile, her eyes lighting up with excitement.</p>

      <p>The girls ran back to Amile’s house, found a quiet patch behind the shed, and dug a 
       tiny hole. Amile planted the seed and gently patted the dry soil around it.</p>
    </section>
   
      <section className="page-text">
        {transcript.map((line, i) => {
          const isActive = currentTime >= line.start && currentTime <= line.end;
          return(
            <p key={i} className={isActive ? "highlight" : ""}>
              {line.text}
            </p>
          );
        })}
      </section>

      <section className="page-11">11</section>
    </section>
  );
}

export default Page11;