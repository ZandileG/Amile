import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image23 from "../Images/Image23.png";
import "../Styles/Page.css";

function Page23(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image23} alt="Page 23" className="page-image" />

    <section className="page-text">
       <p>Amile stepped into the shed, reaching for the last bit of water sitting at the bottom of the water 
       container. Suddenly, she heard her parents’ voices calling out to her.</p>

      <p><q>Mimi where are you?</q> said her mom, <q>Khaya’s here to say goodbye.</q> Amile said nothing.</p>
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

      <section className="page-23">23</section>
    </section>
  );
}

export default Page23;