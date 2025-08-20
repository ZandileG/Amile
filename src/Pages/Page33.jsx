import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image33 from "../Images/Image33.png";
import "../Styles/Page.css";

function Page33(){
  const { currentTime, language } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile’s parents hurried over, still in shock,", start: 0, end: 3 },
    { text: "and wrapped her in a warm embrace.", start: 4, end: 9 },
    { text: "I guess we’re staying,", start: 10, end: 12 },
    { text: "they said, grinning through happy tears.", start: 13, end: 15 },
   ],
      zu: [
    { text: "Abazali bakaAmile baphuthuma, besashaqekile, bamgona ngokufudumala.", start: 0, end: 3 },
    { text: "“Ngicabanga ukuthi sizohlala,”", start: 4, end: 9 },
    { text: "“Ngicabanga ukuthi sizohlala,” kusho bona, kwehla izinyembezi zenjabulo.", start: 10, end: 12 },
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

      <img src={Image33} alt="Page 33" className="page-image" />

      <section className="page-33">33</section>
    </section>
  );
}

export default Page33;