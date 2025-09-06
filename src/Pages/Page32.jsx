import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image32 from "../Images/Image32.png";
import Image32_32 from "../Images/Image32-32.png";
import "../Styles/Page.css";

function Page32(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: [
    { text: "Thingo had awakened something in the town,", start: 0, end: 2 },
    { text: "magic that was thought to be gone.", start: 3, end: 5 },
  ],
      zu: [
    { text: "UThingo wayevuse okuthile eDumakude, umlingo okwakuthiwa awuseko.", start: 0, end: 2 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-even">

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 32 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image32} alt="Page 32" className="page-image-32" />
      <img src={Image32_32} alt="Page 32" className="page-image-32-32" />

      <section className="page-32">32</section>
    </section>
  );
}

export default Page32;