import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image2 from "../Images/Image2.png";
import "../Styles/Page.css";

function Page2(){
  const { currentTime, language } = useContext(MusicContext);
  
  const transcripts = {
      en: [
    { text: "One day, a curse fell upon Dumakude.", start: 26, end: 30 },
    { text: "What once poured from the sky became a drizzle, then a whisper, then silence.", start: 31, end: 36 },
    { text: "The roads were cracked and the trees stood like skeletons.", start: 37, end: 42 },
    { text: "The hills were a dull brown and the river that used to hum", start: 43, end: 47 },
    { text: "had dried into a narrow, muddy trail.", start: 48, end: 50 },
     ],
      zu: [
    { text: "Ngelinye ilanga, isiqalekiso sawela kuDumakude.", start: 21, end: 25 },
    { text: "Okwake kwatheleka esibhakabhakeni kwaba ukuconsa,", start: 26, end: 30 },
    { text: "kwase kuba ukuhleba, kwathula kwathi cwaka.", start: 31, end: 35 },
    { text: "Imigwaqo yayiqhekekile futhi izihlahla zazimile njengamathambo.", start: 36, end: 40 },
    { text: "Amagquma ayensundu ngokufiphele futhi umfula owawuvame ukugeleza", start: 41, end: 45 },
    { text: "wawusomile waba umzila omncane onodaka.", start: 46, end: 50 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-even">
      <img src={Image2} alt="Page 2" className="page-image-2" />

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