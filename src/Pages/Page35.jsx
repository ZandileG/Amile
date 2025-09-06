import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image35 from "../Images/Image35.png";
import "../Styles/Page.css";

function Page35(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile’s parents hurried over, still in shock,", start: 118, end: 121 },
    { text: "and wrapped her in a warm embrace.", start: 122, end: 124 },
    { text: "I guess we’re staying,", start: 125, end: 125 },
    { text: "they said, grinning through happy tears.", start: 126, end: 131 },
   ],
      zu: [
    { text: "Abazali bakaAmile baphuthuma, besashaqekile, bamgona ngokufudumala.", start: 118, end: 121 },
    { text: "“Ngicabanga ukuthi sizohlala,”", start: 122, end: 124 },
    { text: "“Ngicabanga ukuthi sizohlala,” kusho bona, kwehla izinyembezi zenjabulo.", start: 125, end: 131 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-odd">
      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 35 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image35} alt="Page 35" className="page-image-35" />

      <section className="page-35">35</section>
    </section>
  );
}

export default Page35;