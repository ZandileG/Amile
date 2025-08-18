import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image8 from "../Images/Image8.png";
import "../Styles/Page.css";

function Page8(){
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
      <img src={Image8} alt="Page 8" className="page-image" />

    <section className="page-text">
      <p><q>What’s that?</q> asked Khaya, pointing at the mysterious object on the ground.</p> 
      
      <p>Tucked between pebbles and weeds, was a small, round, glowing object. Its shell shimmered 
       like a rainbow, as if it had captured the sun and the moon’s light all at once.</p>
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

      <section className="page-8">8</section>
    </section>
  );
}

export default Page8;