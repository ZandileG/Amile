import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image10 from "../Images/Image10.png";
import "../Styles/Page.css";

function Page10(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
    <section className="page-text">
      <p><q>I don’t think that’s a good idea,</q> said Khaya, <q>don’t you 
       know that flowers need good soil to grow, and our town is so dry.</q></p>

      <p><q>I know…</q> said Amile, frowning a little.</p>

      <p><q>Where are we even going to find water?</q> Khaya continued, secretly 
       proud that she sounded so smart.</p>
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

      <img src={Image10} alt="Page 10" className="page-image" />

      <section className="page-10">10</section>
    </section>
  );
}

export default Page10;