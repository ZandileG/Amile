import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image16 from "../Images/Image16.png";
import "../Styles/Page.css";

function Page16(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image16} alt="Page 16" className="page-image" />

      <p className="page-text">Days passed, and nothing happened. Amile kept 
       watering it, and every day she hoped to see something new, anything, 
       that would take her mind off all those boxes and phone calls with the 
       moving company.
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

      <section className="page-16">16</section>
    </section>
  );
}

export default Page16;