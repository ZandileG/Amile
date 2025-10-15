import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image8 from "../Images/Image8.png";
import "../Styles/Page.css";

function Page8(){
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
    { text: "“What’s that?” asked Khaya, pointing at the mysterious object on the ground.", start: 0, end: 6.3 },
  ],
  [
    { text: "Tucked between pebbles and weeds, was a small, round, glowing object.", start: 6.4, end: 12.3 },
    { text: "Its shell shimmered like a rainbow, as if it had captured the sun and the moon’s light all at once.", start: 12.4, end: 19.7 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Yini leya?” kubuza uKhaya, ekhomba into engaqondakali eyayisemhlabathini.", start: 0, end: 6.3 },
  ],
  [
    { text: "Phakathi kwamatshe nokhula, kwakunento encane, eyindilinga, ekhazimulayo.", start: 6.4, end: 12.3 },
    { text: "Igobolondo lalo lalicwebezela njengothingo, ngathi liqukethe ukukhanya kwelanga nenyanga ngesikhathi esisodwa.", start: 12.4, end: 19.7 },
  ]
]
    }
};
  const { paragraphs } = transcripts[language];
  const currentTime = currentTimeRef.current;

  return(
    <section className="page">
    <img src={Image8} alt="Page 8" className="page-image-8" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 8 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="even">8</section>
    </section>
  );
}

export default Page8;