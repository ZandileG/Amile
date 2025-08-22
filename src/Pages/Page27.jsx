import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image27 from "../Images/Image27.png";
import "../Styles/Page.css";

function Page27(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Suddenly, the ground trembled.", start: 152, end: 156 },
    { text: "Amile and her dad quickly stood up and took a step back.", start: 157, end: 162 },
    { text: "Khaya and Amile’s mom did the same.", start: 163, end: 167 },
   ],
      zu: [
    { text: "Gwiqiqi, kwavevezela umhlaba.", start: 149, end: 152 },
    { text: "UAmile nobab’ wakhe basukuma ngokushesha, babuyela emuva.", start: 153, end: 157 },
    { text: "UKhaya noma kaAmile benza okufanayo.", start: 158, end: 162 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image27} alt="Page 27" className="page-image-27" />

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

      <section className="page-27">27</section>
    </section>
  );
}

export default Page27;