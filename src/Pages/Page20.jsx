import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image20 from "../Images/Image20.png";
import "../Styles/Page.css";

function Page20(){
    const { currentTime } = useContext(MusicContext);

     const transcript = [
    { text: "", start: 0, end: 3 },
  ];

  return(
    <section className="page">
      <p className="page-text"><q>I hope we don’t get in trouble for this</q> said Khaya shaking her head.</p>

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

      <img src={Image20} alt="Page 20" className="page-image" />

      <section className="page-20">20</section>
    </section>
  );
}

export default Page20;