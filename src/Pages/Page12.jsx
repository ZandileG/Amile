import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image12 from "../Images/Image12.png";
import Image12_12 from "../Images/Image12-12.png";
import "../Styles/Page.css";

function Page12(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "“Wait here,” Amile said to Khaya,", start: 0, end: 3 },
    { text: "then hurried into the shed to fetch water.", start: 4, end: 7 },
    { text: "Khaya crossed her arms as she watched Amile go,", start: 8, end: 11 },
    { text: "giving her a disapproving look.", start: 12, end: 14 },
   ],
      zu: [
    { text: "“Linda kancane,” kusho uAmile kuKhaya,", start: 0, end: 3 },
    { text: "wabe esephuthuma wangena egumbini lokugcina amanzi.", start: 4, end: 7 },
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
      <img src={Image12_12} alt="Page 12" className={Zulu ? "page-image-small-mobile-12" : "page-image-12-12"} />
      
      <section className="even">12</section>
    </section>
  );
}

export default Page12;