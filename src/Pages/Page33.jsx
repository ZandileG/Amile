import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image33 from "../Images/Image33.png";
import "../Styles/Page.css";

function Page33(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile’s parents hurried over, still in shock,", start: 110, end: 115 },
    { text: "and wrapped her in a warm embrace.", start: 116, end: 121 },
    { text: "I guess we’re staying,", start: 122, end: 124 },
    { text: "they said, grinning through happy tears.", start: 125, end: 131 },
   ],
      zu: [
    { text: "Abazali bakaAmile baphuthuma, besashaqekile, bamgona ngokufudumala.", start: 110, end: 119 },
    { text: "“Ngicabanga ukuthi sizohlala,”", start: 120, end: 124 },
    { text: "“Ngicabanga ukuthi sizohlala,” kusho bona, kwehla izinyembezi zenjabulo.", start: 125, end: 131 },
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

      <img src={Image33} alt="Page 33" className="page-image-33" />

      <section className="page-33">33</section>
    </section>
  );
}

export default Page33;