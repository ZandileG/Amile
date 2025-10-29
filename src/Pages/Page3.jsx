import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image3 from "../Images/Image3.png";
import "../Styles/Page.css";

function Page3(){
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
    { text: "One day, a curse fell upon their beloved town.", start: 0, end: 4.1 },
    { text: "What once poured from the sky became a drizzle, then a whisper, then silence.", start: 4.2, end: 10.2 },
    { text: "The roads were cracked and the trees stood like skeletons.", start: 10.3, end: 14.0 },
    { text: "The hills were a dull brown and the river that used to hum", start: 14.1, end: 17.7 },
    { text: "had dried into a narrow, muddy trail.", start: 17.8, end: 21.1 },
     ],
      zu: [
    { text: "Ngelinye ilanga, isiqalekiso sawela eDumakude.", start: 0, end: 5 },
    { text: "Okwake kwatheleka esibhakabhakeni kwaba ukuconsa,", start: 5.1, end: 9.4 },
    { text: "kwase kwaba ukuhleba, kwathula kwathi cwaka.", start: 9.5, end: 13.1 },
    { text: "Imigwaqo yayiqhekekile futhi izihlahla zazimile njengamathambo.", start: 13.2, end: 19.1 },
    { text: "Amagquma ayensundu ngokufiphele futhi umfula owawuvame ukugeleza", start: 19.2, end: 25.9 },
    { text: "wawusomile waba umzila omncane onodaka.", start: 26, end: 30.2 },
  ]
};
    const transcript = transcripts[language];        
    const currentTime = currentTimeRef.current;

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