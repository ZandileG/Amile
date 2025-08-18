import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image30 from "../Images/Image30.png";
import "../Styles/Page.css";

function Page30(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image30} alt="Page 30" className="page-image" />
    <section className="page-text">
      <p>People poured into the streets. Children squealed. The river trickled. Trees swayed. Birds sang. 
         The hills turned green again. Flowers pushed through the soil like fireworks. Gardens that hadn’t 
         bloomed in months now burst with colour. The air smelled like new beginnings as if the land itself 
         had been holding its breath for too long.
      </p>

      <p>Thingo had awakened something in the town, magic that was thought to be gone.</p>
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

      <section className="page-30">30</section>
    </section>
  );
}

export default Page30;