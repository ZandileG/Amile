import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image27 from "../Images/Image27.png";
import "../Styles/Page.css";

function Page27(){
    const { currentTime } = useContext(MusicContext);
  
     const transcript = [
    { text: "Suddenly, the ground trembled.", start: 0, end: 3 },
    { text: "Amile and her dad quickly stood up and took a step back.", start: 4, end: 9 },
    { text: "Khaya and Amile’s mom did the same.", start: 10, end: 12 },
  ];

  return(
    <section className="page">
      <img src={Image27} alt="Page 27" className="page-image" />

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

      <section className="page-27">27</section>
    </section>
  );
}

export default Page27;