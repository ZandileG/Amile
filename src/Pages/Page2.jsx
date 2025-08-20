import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image2 from "../Images/Image2.png";
import "../Styles/Page.css";

function Page2(){
  const { currentTime, language } = useContext(MusicContext);
  
  const transcripts = {
      en: [
    { text: "One day, a curse fell upon Dumakude.", start: 20, end: 23 },
    { text: "What once poured from the sky became a drizzle, then a whisper, then silence.", start: 24, end: 29 },
    { text: "The roads were cracked and the trees stood like skeletons.", start: 30, end: 32 },
    { text: "The hills were a dull brown and the river that used to hum", start: 33, end: 35 },
    { text: "had dried into a narrow, muddy trail.", start: 36, end: 38 },
     ],
      zu: [
    { text: "Ngelinye ilanga, isiqalekiso sawela kuDumakude.", start: 0, end: 3 },
    { text: "Okwake kwatheleka esibhakabhakeni kwaba ukuconsa,", start: 4, end: 9 },
    { text: "kwase kuba ukuhleba, kwathula kwathi cwaka.", start: 10, end: 12 },
    { text: "Imigwaqo yayiqhekekile futhi izihlahla zazimile njengamathambo.", start: 13, end: 15 },
    { text: "Amagquma ayensundu ngokufiphele futhi umfula owawuvame ukugeleza", start: 16, end: 18 },
    { text: "wawusomile waba umzila omncane onodaka.", start: 16, end: 18 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image2} alt="Page 2" className="page-image" />

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

      <section className="page-2">2</section>
    </section>
  );
}

export default Page2;