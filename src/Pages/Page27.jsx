import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image27 from "../Images/Image27.png";
import "../Styles/Page.css";

function Page27(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image27} alt="Page 27" className="page-image" />

      <p className="page-text">Suddenly, the ground trembled. Amile and her dad 
       quickly stood up and took a step back. Khaya and Amile’s mom did the same.
      </p>

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

      <section className="page-27">27</section>
    </section>
  );
}

export default Page27;