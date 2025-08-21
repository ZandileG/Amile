import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image32 from "../Images/Image32.png";
import "../Styles/Page.css";

function Page32(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "After a while,", start: 101, end: 103 },
    { text: "Khaya ran back home to celebrate with her family.", start: 104, end: 109 },
   ],
      zu: [
    { text: "Ngemva kwesikhashana,", start: 101, end: 103 },
    { text: "uKhaya wagijima wabuyela kubo eyobungaza imvula nomndeni wakhe.", start: 104, end: 109 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
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

      <img src={Image32} alt="Page 32" className="page-image" />

      <section className="page-32">32</section>
    </section>
  );
}

export default Page32;