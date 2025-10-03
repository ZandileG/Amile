import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image6 from "../Images/Image6.png";
import Image6_6 from "../Images/Image6-6.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page6(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
   const [flipped, setFlipped] = useState(true);

   function stop(e){
    e.stopPropagation();
    e.preventDefault()
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation){
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  function handleToggle(e){
    e.stopPropagation();
    setFlipped((prev) => !prev);
  };

    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "“No Mama, we can't go!", start: 0, end: 3 },
    { text: "I don’t want to leave Khaya behind.” said Amile with tears in her eyes.", start: 4, end: 13 },
  ],
  [
    { text: "“I know it’s hard Mimi, but there's no more water,", start: 14, end: 17 },
    { text: "we can’t stay here anymore. Please understand,”", start: 18, end: 23 },
    { text: "said her dad while gently squeezing her hand.", start: 24, end: 27 },
  ],
  [
    { text: "Amile nodded, but she felt a quiet storm growing inside her.", start: 28, end: 35.2 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Cha Mama, asikwazi ukuhamba!", start: 0, end: 4 },
    { text: "Angifuni ukushiya uKhaya ngemuva,” kusho uAmile egcwel’ izinyembezi emehlweni akhe.", start: 5, end: 14 },
  ],
  [
    { text: "“Ngiyazi ukuthi kunzima Mimi, kodwa aphelile amanzi,", start: 15, end: 18 },
    { text: "ngeke sisakwazi ukuqhubeka nokuhlala lapha.", start: 19, end: 24 },
    { text: "Ngicela uzame ukuqondisisa ngan’ yami,” kusho ubab’wakhe.", start: 25, end: 28 },
  ],
   [
    { text: "UAmile wanqekuzisa ikhanda, kodwa wezwa isivunguvungu esithulile sikhula ngaphakathi kwakhe.", start: 28, end: 35.2 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

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

  <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image6} alt="Page 6" className="page-image-6" />
        ) : (
          <img src={Image6_6} alt="Page 6" className="page-image-6-6" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
      <section className="even">6</section>
    </section>
  );
}

export default Page6;