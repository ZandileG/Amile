import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image18 from "../Images/Image18.png";
import Image18_18 from "../Images/Image18-18.png";
import "../Styles/Page.css";

function Page18(){
  const { currentTime, Zulu, language, currentPage } = useContext(MusicContext);

 const transcripts = {
      en: [
    { text: "Amile gasped,", start: 14, end: 15 },
    { text: "“You’re alive!”", start: 16, end: 17 },
    { text: "She ran over to Khaya’s house and brought her over to see it.", start: 18, end: 22 },
  ],

      zu: [
    { text: "“Ha, uyaphila!”", start: 14, end: 15 },
    { text: "kusho uAmile ngokumangala.", start: 16, end: 17 },
    { text: "Wagijima wayolanda uKhaya kubo wamletha ukuze ayibone.", start: 18, end: 22 },
  ]
 };

    const transcript = transcripts[language];

  return(
    <section className="page-even">
    <p className="page-text">
      {transcript.map((line, i) => {
        const isActive = currentPage === 18 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
   </p>

    <img src={Image18} alt="Page 18" className="page-image-18" />
      <img src={Image18_18} alt="Page 1" className={Zulu ? "page-image-1-1-zulu" : "page-image-1-1"} />

      <section className="page-18">18</section>
    </section>
  );
}

export default Page18;