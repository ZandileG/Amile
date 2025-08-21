import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image29 from "../Images/Image29.png";
import "../Styles/Page.css";

function Page29(){
  const { currentTime, language } = useContext(MusicContext);
  
  const transcripts = {
      en: {
      dropCap: "A",
      dropCapText: " RUMBLE ECHOED",
      lines: [
    { text: "in the sky.", start: 0, end: 5 },
    { text: "Amile, Khaya and her parents looked up.", start: 6, end: 10 },
    { text: "The clouds, once pale and lifeless, turned heavy and grey.", start: 11, end: 15 },
    { text: "Thunder clapped, the wind shifted, there were tiny drops,", start: 16, end: 20 },
    { text: "big, bold splashes.", start: 21, end: 23 },
    { text: "Then Rain! Cool, glorious, sweet-smelling rain!", start: 24, end: 26 },
      ]
  },
    zu: {
    dropCap: "K",
    dropCapText: "WADUMA IZULU.",
    lines: [
    { text: "UAmile, uKhaya kanye nabazali bakhe babheka phezulu.", start: 0, end: 5 },
    { text: "Amafu, ayekade ephaphathekile engenampilo, aphenduka asinda futhi aba mpunga.", start: 6, end: 10 },
    { text: "Umoya washintsha,", start: 11, end: 15 },
    { text: "kwaba namaconsi amancanyana, amachaphazelo amakhulu.", start: 16, end: 20 },
    { text: "Kwalandela imvula! Imvula epholile, ekhazimulayo, enephunga elimnandi!", start: 21, end: 26 },
      ]
    }
  };
      const { dropCap, dropCapText, lines } = transcripts[language];

  return(
     <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">{dropCap}</section>
      <section className="drop-cap-text">{dropCapText}</section>
    </section>

      <p className="page-chapter">
        {lines.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image29} alt="Page 29" className="page-image-1" />
      <section className="page-29">29</section>
    </section>
  );
}

export default Page29;