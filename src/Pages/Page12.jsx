import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image12 from "../Images/Image12.png";
import "../Styles/Page.css";

function Page12(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "“Wait here,” Amile said to Khaya,", start: 101, end: 105 },
    { text: "then hurried into the shed to fetch water.", start: 106, end: 111 },
    { text: "Khaya crossed her arms as she watched Amile go,", start: 112, end: 116 },
    { text: "giving her a disapproving look.", start: 117, end: 121 },
   ],
      zu: [
    { text: "“Linda kancane,” kusho uAmile kuKhaya,", start: 101, end: 105 },
    { text: "wabe esephuthuma wangena egumbini lokugcina amanzi.", start: 106, end: 111 },
    { text: "UKhaya weqa izingalo zakhe ebuka uAmile,", start: 112, end: 116 },
    { text: "ubuso bakhe bungaqinisekile.", start: 117, end: 121 },
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