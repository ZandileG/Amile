import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image3 from "../Images/Image3.png";
import "../Styles/Page.css";

function Page3(){
    const { currentTime } = useContext(MusicContext);
  
      const transcript = [
    { text: "In this, now quiet town, lived a young girl named Amile.", start: 0, end: 3 },
    { text: "Amile lived with her parents Mandisa and Sinalo.", start: 4, end: 9 },
    { text: "They named her Amile, a name with many meanings.", start: 10, end: 12 },
    { text: "To them, it meant “still standing,”", start: 13, end: 15 },
    { text: "a promise of the strength and resilience they saw within her.", start: 16, end: 18 },
  ];

  return(
    <section className="page">
      <img src={Image3} alt="Page 3" className="page-image" />
      
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

      <section className="page-3">3</section>
    </section>
  );
}

export default Page3;