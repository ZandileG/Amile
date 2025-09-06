import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image28 from "../Images/Image28.png";
import "../Styles/Page.css";

function Page28(){
  const { currentTime, language } = useContext(MusicContext);

  const transcripts = {
     en: [
    { text: "Suddenly, the ground trembled.", start: 152, end: 155 },
    { text: "Amile and her dad quickly stood up and took a step back.", start: 156, end: 160 },
    { text: "Khaya and Amile’s mom did the same.", start: 161, end: 164 },
    ],
  
     zu: [
    { text: "kwavevezela umhlaba", start: 149, end: 150 },
    { text: "UAmile nobab’ wakhe basukuma ngokushesha, babuyela emuva.", start: 151, end: 155 },
    { text: "UKhaya noma kaAmile benza okufanayo.", start: 156, end: 158 },
    ]
  };
    const transcript = transcripts[language];

  return(
    <section className="page-even">
    <img src={Image28} alt="Page 28" className="page-image-28" />

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

      <section className="page-28">28</section>
    </section>
  );
}

export default Page28;