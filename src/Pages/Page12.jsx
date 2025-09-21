import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image12 from "../Images/Image12.png";
import "../Styles/Page.css";

function Page12(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "“Wait here,” said Amile,", start: 0, end: 2 },
    { text: "then hurried into the shed to fetch water from a water container.", start: 3, end: 8 },
    { text: "Khaya crossed her arms as she watched Amile go,", start: 9, end: 11 },
    { text: "giving her a disapproving look.", start: 12, end: 14 },
   ],
      zu: [
    { text: "“Linda kancane,” kusho uAmile,", start: 0, end: 3 },
    { text: "ephuthuma engena egumbini lokugcina amanzi, ukuze azonisela isitshalo.", start: 4, end: 7 },
    { text: "UKhaya weqa izingalo zakhe ebuka uAmile,", start: 8, end: 11 },
    { text: "ubuso bakhe bungaqinisekile.", start: 12, end: 14 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 12 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image12} alt="Page 12" className="page-image-12" />
      
      <section className="even">12</section>
    </section>
  );
}

export default Page12;