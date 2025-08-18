import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image17 from "../Images/Image17.png";
import "../Styles/Page.css";

function Page17(){
    const { currentTime } = useContext(MusicContext);
  
    const transcript = [
  [
    { text: "But one afternoon, Amile saw a sprout poking through the soil.", start: 0, end: 3 },
    { text: "Unlike the brittle brown grass around it,", start: 4, end: 9 },
    { text: "this sprout was blue-green and sparkled in the sunlight.", start: 10, end: 12 },
  ],
  [
    { text: "Amile gasped,", start: 0, end: 3 },
    { text: "You’re alive!", start: 4, end: 9 },
    { text: "She ran over to Khaya’s house and brought her over to see it.", start: 10, end: 12 },
  ]
];

  return(
    <section className="page">
      <img src={Image17} alt="Page 17" className="page-image" />
     
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

      <section className="page-17">17</section>
    </section>
  );
}

export default Page17;