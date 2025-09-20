import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image3 from "../Images/Image3.png";
import "../Styles/Page.css";

function Page3(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
  const transcripts = {
      en: [
    { text: "One day, a curse fell upon their beloved town, Dumakude.", start: 0, end: 3 },
    { text: "What once poured from the sky became a drizzle, then a whisper, then silence.", start: 4, end: 9 },
    { text: "The roads were cracked and the trees stood like skeletons.", start: 10, end: 14 },
    { text: "The hills were a dull brown and the river that used to hum", start: 15, end: 17 },
    { text: "had dried into a narrow, muddy trail.", start: 18, end: 20 },
     ],
      zu: [
    { text: "Ngelinye ilanga, isiqalekiso sawela eDumakude.", start: 0, end: 3 },
    { text: "Okwake kwatheleka esibhakabhakeni kwaba ukuconsa,", start: 4, end: 9 },
    { text: "kwase kwaba ukuhleba, kwathula kwathi cwaka.", start: 10, end: 14 },
    { text: "Imigwaqo yayiqhekekile futhi izihlahla zazimile njengamathambo.", start: 15, end: 17 },
    { text: "Amagquma ayensundu ngokufiphele futhi umfula owawuvame ukugeleza", start: 18, end: 20 },
    { text: "wawusomile waba umzila omncane onodaka.", start: 21, end: 25 },
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