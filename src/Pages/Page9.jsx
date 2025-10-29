import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image9 from "../Images/Image9.png";
import "../Styles/Page.css";

function Page9(){
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
    { text: "Amile picked it up, cupped it in her hands and gasped,", start: 0, end: 5.8 },
    { text: "“It looks like that thing that makes plants.”", start: 5.9, end: 8.8 },
  ],
  [
    { text: "“You mean a seed?” asked Khaya.", start: 8.9, end: 12.4 },
  ],
  [
    { text: "“Yes!” said Amile. “Let's plant it and see what kind of flower it becomes.”", start: 12.5, end: 19.8 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wayicosha ngobunene wase ethi,", start: 0, end: 4.4 },
    { text: "“Ibukeka njengalento eyenza izitshalo.”", start: 4.5, end: 7.8 },
  ],
  [
    { text: "“Usho imbewu?” kubuza uKhaya.", start: 7.9, end: 11.3 },
  ],
  [
    { text: "“Yebo!” kusho uAmile. “Masiyitshale, sizobona ukuthi iba uhlobo luni lwembali.”", start: 11.4, end: 17.7 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
  <section className="page">
  <img src={Image9} alt="Page 9" className="page-image-9" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 9 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="odd">9</section>
    </section>
  );
}

export default Page9;