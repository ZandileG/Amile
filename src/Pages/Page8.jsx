import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image8 from "../Images/Image8.png";
import "../Styles/Page.css";

function Page8(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image8} alt="Page 8" className="page-image" />

    <section className="page-text">
      <p><q>What’s that?</q> asked Khaya, pointing at the mysterious object on the ground.</p> 
      
      <p>Tucked between pebbles and weeds, was a small, round, glowing object. Its shell shimmered 
       like a rainbow, as if it had captured the sun and the moon’s light all at once.</p>
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

      <section className="page-8">8</section>
    </section>
  );
}

export default Page8;