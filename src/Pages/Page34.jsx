import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image34 from "../Images/Image34.png";
import "../Styles/Page.css";

function Page34(){
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
    <img src={Image34} alt="Page 34" className="page-image" />

      <section  className="page-text">
      <p>Amile approached Thingo, now a tall, blossoming tree with silver-blue petals and a soft glow still pulsing in its 
        trunk. Her eyes sparkled with happiness as she wrapped her arms around it.
      </p>

      <p><q>Thank you so much, my little rainbow flower,</q> she whispered, <q>I’m so glad I get to stay here with you.</q></p>
      </section>

      <section className="end">The End!</section>

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

      <section className="page-34">34</section>
    </section>
  );
}

export default Page34;