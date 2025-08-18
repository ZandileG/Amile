import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image25 from "../Images/Image25.png";
import "../Styles/Page.css";

function Page25(){
    const { currentTime } = useContext(MusicContext);
  
  return(
   <section className="page">
      <img src={Image25} alt="Page 25" className="page-image" />

      <p className="page-text">Amile’s mom shook her head. <q>Uh, uh Amile, we have to go now,</q> said her mom, 
       firmly as she reached for the plant. Amile pushed her mom’s hand away and covered Thingo with her arms. 
       Tears welled in her eyes. She tried to hold them back, but they tumbled down her cheeks and splashed onto 
       the roots of the plant.
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

      <section className="page-25">25</section>
    </section>

  );
}

export default Page25;