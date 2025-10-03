import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image3 from "../Images/Image3.png";
import "../Styles/Page.css";

function Page3(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
  const transcripts = {
      en: [
    { text: "One day, a curse fell upon their beloved town.", start: 0, end: 3 },
    { text: "What once poured from the sky became a drizzle, then a whisper, then silence.", start: 4, end: 12 },
    { text: "The roads were cracked and the trees stood like skeletons.", start: 13, end: 16 },
    { text: "The hills were a dull brown and the river that used to hum", start: 17, end: 20 },
    { text: "had dried into a narrow, muddy trail.", start: 21, end: 23.4 },
     ],
      zu: [
    { text: "Ngelinye ilanga, isiqalekiso sawela eDumakude.", start: 0, end: 3 },
    { text: "Okwake kwatheleka esibhakabhakeni kwaba ukuconsa,", start: 4, end: 7 },
    { text: "kwase kwaba ukuhleba, kwathula kwathi cwaka.", start: 8, end: 11 },
    { text: "Imigwaqo yayiqhekekile futhi izihlahla zazimile njengamathambo.", start: 12, end: 16 },
    { text: "Amagquma ayensundu ngokufiphele futhi umfula owawuvame ukugeleza", start: 17, end: 20 },
    { text: "wawusomile waba umzila omncane onodaka.", start: 21, end: 23.4 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image3} alt="Page 3" className="page-image-3" />
      
      <p className="page-text">
        {transcript.map((line, i) => {
         const isActive = currentPage === 3 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="odd">3</section>
    </section>
  );
}

export default Page3;