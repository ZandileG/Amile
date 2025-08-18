import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image6 from "../Images/Image6.png";
import "../Styles/Page.css";

function Page6(){
    const { currentTime } = useContext(MusicContext);
  
    const transcript = [
  [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
  ],
  [
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
  ]
];

  return(
    <section className="page">
    <section className="page-text">
      <p><q>But what about our neighbours? What about my friends? I don’t want to 
       leave Khaya.</q> said Amile with tears in her eyes.</p>

      <p><q>I know it’s hard Mimi, but we can’t stay here anymore. Please understand,</q> 
      said her dad while gently squeezing her hand.</p>

      <p>Amile nodded, but she felt a quiet storm growing inside her.</p>
    </section>

    <section className="page-text">
    {transcript.map((paragraph, pIndex) => (
    <p key={pIndex}>
      {paragraph.map((line, i) => {
        const isActive = currentTime >= line.start && currentTime <= line.end;
        return (
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

    <img src={Image6} alt="Page 6" className="page-image" />

      <section className="page-6">6</section>
    </section>
  );
}

export default Page6;