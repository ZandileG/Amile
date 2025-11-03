import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image30 from "../Images/Image30.png";
import "../Styles/Page.css";

function Page30(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

  const transcripts = {
      en: [
    { text: "A rumble echoed in the sky.", start: 0, end: 2.1 },
    { text: "Amile, Khaya and her parents looked up.", start: 2.2, end: 5.4 },
    { text: "The clouds, once pale and lifeless, turned heavy and grey.", start: 5.5, end: 9.4 },
    { text: "Thunder clapped, the wind shifted, there were tiny drops,", start: 9.5, end: 13.6 },
    { text: "big, bold splashes.", start: 13.7, end: 15.3 },
    { text: "Then rain! Cool, glorious, sweet-smelling rain!", start: 15.4, end: 19.1 },
      ],
    zu: [
    { text: "Kwaduma izulu.", start: 0, end: 1.7 },
    { text: "UAmile, uKhaya kanye nabazali bakhe babheka phezulu.", start: 1.8, end: 6.3 },
    { text: "Amafu, ayekade ephaphathekile engenampilo, aphenduka asinda futhi aba mpunga.", start: 6.4, end: 13 },
    { text: "Umoya washintsha,", start: 13.1, end: 14.9 },
    { text: "kwaba namaconsi amancanyana, amachaphazelo amakhulu,", start: 15, end: 19 },
    { text: "kwalandela imvula! Imvula epholile, ekhazimulayo, enephunga elimnandi!", start: 19.1, end: 26.5 },
      ]
  };
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

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