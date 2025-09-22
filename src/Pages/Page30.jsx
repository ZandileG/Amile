import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image30 from "../Images/Image30.png";
import "../Styles/Page.css";

function Page30(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
  const transcripts = {
      en: [
    { text: "A rumble echoed in the sky.", start: 0, end: 2 },
    { text: "Amile, Khaya and her parents looked up.", start: 3, end: 5 },
    { text: "The clouds, once pale and lifeless, turned heavy and grey.", start: 6, end: 8 },
    { text: "Thunder clapped, the wind shifted, there were tiny drops,", start: 9, end: 11 },
    { text: "big, bold splashes.", start: 12, end: 13 },
    { text: "Then Rain! Cool, glorious, sweet-smelling rain!", start: 14, end: 16 },
      ],
    zu: [
    { text: "Kwaduma izulu.", start: 0, end: 2 },
    { text: "UAmile, uKhaya kanye nabazali bakhe babheka phezulu.", start: 3, end: 5 },
    { text: "Amafu, ayekade ephaphathekile engenampilo, aphenduka asinda futhi aba mpunga.", start: 6, end: 9 },
    { text: "Umoya washintsha,", start: 10, end: 11 },
    { text: "kwaba namaconsi amancanyana, amachaphazelo amakhulu,", start: 12, end: 14 },
    { text: "kwalandela imvula! Imvula epholile, ekhazimulayo, enephunga elimnandi!", start: 15, end: 19 },
      ]
  };
    const transcript = transcripts[language];

  return(
     <section className="page">
      <img src={Image30} alt="Page 30" className="page-image-30" />

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 30 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="even">30</section>
    </section>
  );
}

export default Page30;