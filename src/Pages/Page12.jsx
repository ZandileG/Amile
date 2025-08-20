import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image12 from "../Images/Image12.png";
import "../Styles/Page.css";

function Page12(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "“Wait here,” Amile said to Khaya,", start: 0, end: 3 },
    { text: "then hurried into the shed to fetch water.", start: 4, end: 9 },
    { text: "Khaya crossed her arms as she watched Amile go,", start: 10, end: 12 },
    { text: "giving her a disapproving look.", start: 13, end: 15 },
   ],
      zu: [
    { text: "“Linda kancane,” kusho uAmile kuKhaya,", start: 0, end: 3 },
    { text: "wabe esephuthuma wangena egumbini lokugcina amanzi.", start: 4, end: 9 },
    { text: "UKhaya weqa izingalo zakhe ebuka uAmile,", start: 10, end: 12 },
    { text: "ubuso bakhe bungaqinisekile.", start: 13, end: 15 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <p className="page-text">
        {transcript.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image12} alt="Page 12" className="page-image" />

      <section className="page-12">12</section>
    </section>
  );
}

export default Page12;