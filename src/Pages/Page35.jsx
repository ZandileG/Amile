import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image35 from "../Images/Image35.png";
import Image35_35 from "../Images/Image35-35.png";
import "../Styles/Page.css";

function Page35(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "Amile’s parents hurried over, still in shock,", start: 0, end: 3 },
    { text: "and wrapped her in a warm embrace.", start: 4, end: 6 },
    { text: "I guess we’re staying,", start: 7, end: 8 },
    { text: "they said, grinning through happy tears.", start: 9, end: 11 },
   ],
      zu: [
    { text: "Abazali bakaAmile baphuthuma, besashaqekile, bamgona ngokufudumala.", start: 0, end: 4 },
    { text: "“Ngicabanga ukuthi sizohlala,”", start: 5, end: 6 },
    { text: "kusho bona, kwehla izinyembezi zenjabulo.", start: 7, end: 12 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
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
      <img src={Image35_35} alt="Page 35" className="page-image-35-35" />

      <section className="odd">35</section>
    </section>
  );
}

export default Page35;