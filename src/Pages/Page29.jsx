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
    { text: "in the sky.", start: 0, end: 3 },
    { text: "Amile, Khaya and her parents looked up.", start: 4, end: 9 },
    { text: "The clouds, once pale and lifeless, turned heavy and grey.", start: 10, end: 12 },
    { text: "Thunder clapped, the wind shifted, there were tiny drops,", start: 13, end: 15 },
    { text: "big, bold splashes.", start: 16, end: 18 },
    { text: "Then Rain! Cool, glorious, sweet-smelling rain!", start: 19, end: 21 },
      ]
  },
    zu: {
    dropCap: "K",
    dropCapText: "WADUMA IZULU.",
    lines: [
    { text: "UAmile, uKhaya kanye nabazali bakhe babheka phezulu.", start: 0, end: 3 },
    { text: "Amafu, ayekade ephaphathekile engenampilo, aphenduka asinda futhi aba mpunga.", start: 4, end: 9 },
    { text: "Umoya washintsha,", start: 10, end: 12 },
    { text: "kwaba namaconsi amancanyana, amachaphazelo amakhulu.", start: 13, end: 15 },
    { text: "Kwalandela imvula! Imvula epholile, ekhazimulayo, enephunga elimnandi!", start: 16, end: 18 },
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