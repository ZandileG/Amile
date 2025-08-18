import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image9 from "../Images/Image9.png";
import "../Styles/Page.css";

function Page9(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image9} alt="Page 9" className="page-image" />

    <section className="page-text">
      <p>Amile picked it up, cupped it in her hands and gasped, <q>It looks like a seed.</q></p>

      <p><q>It’s so pretty,</q> said Khaya.</p>

      <p><q>It really is,</q> Amile agreed. She held it gently in her hands then said, 
         <q>I think we should plant it and see what kind of flower it becomes.</q></p>
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

      <section className="page-9">9</section>
    </section>
  );
}

export default Page9;