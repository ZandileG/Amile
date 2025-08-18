import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image4 from "../Images/Image4.png";
import "../Styles/Page.css";

function Page4(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <p className="page-text">Every evening, Amile sat on the stoep of her house, watching 
        the wind dance with the dust. She missed the scent of damp, red dirt and the gentle 
        growl of thunder which used to give her a little fright, but now, it felt like a song 
        she wanted to hear again. She also missed the days when she and her best friend Khaya 
        splashed around in muddy puddles and played hide-and-seek in the backyard, their 
        laughter rising higher than the trees.
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

      <img src={Image4} alt="Page 4" className="page-image" />

      <section className="page-4">4</section>
    </section>
  );
}

export default Page4;