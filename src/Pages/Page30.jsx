import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image30 from "../Images/Image30.png";
import "../Styles/Page.css";

function Page30(){
  const { currentTime, language } = useContext(MusicContext);
  
  const transcripts = {
      en: [
    { text: "A rumble echoed in the sky.", start: 26, end: 30 },
    { text: "Amile, Khaya and her parents looked up.", start: 31, end: 34 },
    { text: "The clouds, once pale and lifeless, turned heavy and grey.", start: 35, end: 40 },
    { text: "Thunder clapped, the wind shifted, there were tiny drops,", start: 41, end: 45 },
    { text: "big, bold splashes.", start: 46, end: 47 },
    { text: "Then Rain! Cool, glorious, sweet-smelling rain!", start: 48, end: 55 },
      ],
    zu: [
    { text: "Kwaduma izulu.", start: 26, end: 30 },
    { text: "UAmile, uKhaya kanye nabazali bakhe babheka phezulu.", start: 31, end: 34 },
    { text: "Amafu, ayekade ephaphathekile engenampilo, aphenduka asinda futhi aba mpunga.", start: 35, end: 40 },
    { text: "Umoya washintsha,", start: 41, end: 42 },
    { text: "kwaba namaconsi amancanyana, amachaphazelo amakhulu.", start: 43, end: 48 },
    { text: "Kwalandela imvula! Imvula epholile, ekhazimulayo, enephunga elimnandi!", start: 49, end: 55 },
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

      <img src={Image30} alt="Page 30" className="page-image-30" />

      <section className="page-30">30</section>
    </section>
  );
}

export default Page30;