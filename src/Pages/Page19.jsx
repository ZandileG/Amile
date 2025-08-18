import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image19 from "../Images/Image19.png";
import "../Styles/Page.css";

function Page19(){
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
      <img src={Image19} alt="Page 19" className="page-image" />

    <section className="page-text">
      <p><q>Why is it blue? Plants aren't supposed to be blue,</q> said Khaya.</p>

      <p><q>I don’t know, maybe this one is special,</q> said Amile. <q>I want to 
       name it Thingo, my little rainbow flower,</q> she continued.</p>
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

      <section className="page-19">19</section>
    </section>
  );
}

export default Page19;