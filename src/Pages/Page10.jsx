import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image10 from "../Images/Image10.png";
import "../Styles/Page.css";

function Page10(){
    const { currentTime } = useContext(MusicContext);
  
    const transcript = [
  [
    { text: "“I don’t think that’s a good idea,” said Khaya,", start: 0, end: 3 },
    { text: "“don’t you know that flowers need good soil to grow, and our town is so dry.”", start: 4, end: 9 },
  ],
  [
    { text: "“I know…” said Amile, frowning a little.", start: 10, end: 12 },
  ],
  [
    { text: "“Where are we even going to find water?” Khaya continued,", start: 13, end: 15 },
    { text: "secretly proud that she sounded so smart.", start: 16, end: 18 },
  ]
];

  return(
    <section className="page">
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

      <img src={Image10} alt="Page 10" className="page-image" />

      <section className="page-10">10</section>
    </section>
  );
}

export default Page10;