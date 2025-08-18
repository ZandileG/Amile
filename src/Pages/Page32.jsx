import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image32 from "../Images/Image32.png";
import "../Styles/Page.css";

function Page32(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <p className="page-text">After a while, Khaya ran back home to celebrate with her family.</p>

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

      <img src={Image32} alt="Page 32" className="page-image" />

      <section className="page-32">32</section>
    </section>
  );
}

export default Page32;