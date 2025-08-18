import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image12 from "../Images/Image12.png";
import "../Styles/Page.css";

function Page12(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <p className="page-text"><q>Wait here,</q> Amile said to Khaya, then hurried into the shed to 
       fetch water. Khaya crossed her arms as she watched Amile go, giving her a disapproving look.</p>

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

      <img src={Image12} alt="Page 12" className="page-image" />

      <section className="page-12">12</section>
    </section>
  );
}

export default Page12;