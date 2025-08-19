import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image9 from "../Images/Image9.png";
import "../Styles/Page.css";

function Page9(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcript = [
  [
    { text: "Amile picked it up, cupped it in her hands and gasped,", start: 0, end: 3 },
    { text: "“It looks like a seed.”", start: 4, end: 9 },
  ],
  [
    { text: "“It’s so pretty,” said Khaya.", start: 10, end: 12 },
  ],
  [
    { text: "“It really is,” Amile agreed.", start: 13, end: 15 },
    { text: "She held it gently in her hands then said,", start: 16, end: 18 },
    { text: "“I think we should plant it and see what kind of flower it becomes.”", start: 16, end: 18 },
  ]
];

  return(
    <section className="page">
      <img src={Image9} alt="Page 9" className="page-image" />

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

      <section className="page-9">9</section>
    </section>
  );
}

export default Page9;