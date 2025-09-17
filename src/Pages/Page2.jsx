import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image2 from "../Images/Image2.png";
import Image2_2 from "../Images/Image2-2.png";
import "../Styles/Page.css";

function Page2(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
      const transcripts = {
        en: [
    { text: "In the heart of this beautiful, vibrant town, was a young girl named Amile.", start: 0, end: 5 },
    { text: "Amile lived with her parents, Mandisa and Sinalo.", start: 6, end: 10 },
    { text: "They named her Amile, a name with many meanings.", start: 11, end: 15 },
    { text: "To them, it meant “still standing,”", start: 16, end: 18 },
    { text: "a promise of the strength and resilience they saw within her.", start: 19, end: 22 },
   ],
      zu: [
    { text: "Kulelidolobha, kwakune ntombazanyana okuthiwa nguAmile.", start: 0, end: 5 },
    { text: "UAmile wayehlala nabazali bakhe, uMandisa noSinalo.", start: 6, end: 10 },
    { text: "Bamqamba uAmile, igama elinencazelo eziningi.", start: 11, end: 15 },
    { text: "Kubo, kwakusho ukuthi “usamile,”", start: 16, end: 18 },
    { text: "isithembiso samandla nokuqina ababekubona ngaphakathi kuye.", start: 19, end: 22 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <img src={Image2} alt="Page 2" className="page-image-2" />
      <img src={Image2_2} alt="Page 2" className="page-image-2-2" />

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 2 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="even">2</section>
    </section>
  );
}

export default Page2;