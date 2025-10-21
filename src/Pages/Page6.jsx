import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image6 from "../Images/Image6.png";
import "../Styles/Page.css";

function Page6(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [, forceUpdate] = useState(0);
   
     useEffect(() => {
       const interval = setInterval(() => {
         forceUpdate((n) => n + 1);
       }, 200); 
       return () => clearInterval(interval);
     }, []);

    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "“No Mama, we can't go!", start: 0, end: 5.5 },
    { text: "I don’t want to leave Khaya behind.” said Amile with tears in her eyes.", start: 5.6, end: 14.8 },
  ],
  [
    { text: "“I know it’s hard Mimi, but there's no more water,", start: 14.9, end: 20.2 },
    { text: "we can’t stay here anymore. Please understand,”", start: 20.3, end: 24.9 },
    { text: "said her dad while gently squeezing her hand.", start: 25, end: 29.1 },
  ],
  [
    { text: "Amile nodded, but she felt a quiet storm growing inside her.", start: 29.2, end: 35.2 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Cha Mama, asikwazi ukuhamba!", start: 0, end: 5.5 },
    { text: "Angifuni ukushiya uKhaya ngemuva,” kusho uAmile egcwel’ izinyembezi emehlweni akhe.", start: 5.6, end: 14.8 },
  ],
  [
    { text: "“Ngiyazi ukuthi kunzima Mimi, kodwa aphelile amanzi,", start: 14.9, end: 20.2 },
    { text: "ngeke sisakwazi ukuqhubeka nokuhlala lapha.", start: 20.3, end: 24.9 },
    { text: "Ngicela uzame ukuqondisisa ngan’ yami,” kusho ubab’wakhe.", start: 25, end: 29.1 },
  ],
   [
    { text: "UAmile wanqekuzisa ikhanda, kodwa wezwa isivunguvungu esithulile sikhula ngaphakathi kwakhe.", start: 29.2, end: 35.2 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 6 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

    <img src={Image6} alt="Page 6" className="page-image-6" />

      <section className="even">6</section>
    </section>
  );
}

export default Page6;