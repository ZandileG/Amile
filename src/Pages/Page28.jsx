import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image28 from "../Images/Image28.png";
import Image28_28 from "../Images/Image28-28.png";
import "../Styles/Page.css";

function Page28(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

  const transcripts = {
     en: [
    { text: "Suddenly, the ground trembled.", start: 0, end: 3 },
    { text: "Amile and her dad quickly stood up and took a step back.", start: 4, end: 8 },
    { text: "Khaya and Amile’s mom did the same.", start: 9, end: 11 },
    ],
  
     zu: [
    { text: "Gwiqiqi, kwavevezela umhlaba", start: 0, end: 3 },
    { text: "UAmile nobab’ wakhe basukuma ngokushesha, babuyela emuva.", start: 4, end: 8 },
    { text: "UKhaya noma kaAmile benza okufanayo.", start: 9, end: 11 },
    ]
  };
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image28} alt="Page 28" className={Zulu ? "page-image-small-desktop-28" : "page-image-28"} />
      <img src={Image28_28} alt="Page 28" className={Zulu ? "page-image-small-mobile-28" : "page-image-28-28"} />

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 28 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="even">28</section>
    </section>
  );
}

export default Page28;