import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image18 from "../Images/Image18.png";
import "../Styles/Page.css";

function Page18(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
    <section className="page-text">
      <p><q>It grew?</q> said Khaya, surprised.</p>

      <p><q>Yes, it did! It knew it! I knew it would grow!</q> exclaimed Amile.</p>
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

    <img src={Image18} alt="Page 18" className="page-image" />

      <section className="page-18">18</section>
    </section>
  );
}

export default Page18;