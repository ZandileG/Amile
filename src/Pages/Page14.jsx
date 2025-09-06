import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image14 from "../Images/Image14.png";
import Image14_14 from "../Images/Image14-14.png";
import "../Styles/Page.css";

function Page14(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

     const transcripts = {
      en: [
    { text: "Unnoticed by them,", start: 0, end: 1 },
    { text: "a soft glow shimmered across the ground where the seed had been planted.", start: 2, end: 5 },
   ],
      zu: [
    { text: "Benganakile,", start: 0, end: 1 },
    { text: "kwavela ukukhanya okukhazimulayo emhlabathini lapho batshale khona imbewu.", start: 2, end: 5 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-even">
      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 14 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image14} alt="Page 14" className="page-image-14" />
      <img src={Image14_14} alt="Page 14" className="page-image-14-14" />

      <section className="page-14">14</section>
    </section>
  );
}

export default Page14;