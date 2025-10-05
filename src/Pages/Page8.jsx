import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image8 from "../Images/Image8.png";
import Image8_8 from "../Images/Image8-8.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page8(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
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
    { text: "“What’s that?” asked Khaya, pointing at the mysterious object on the ground.", start: 0, end: 7 },
  ],
  [
    { text: "Tucked between pebbles and weeds, was a small, round, glowing object.", start: 8, end: 13 },
    { text: "Its shell shimmered like a rainbow, as if it had captured the sun and the moon’s light all at once.", start: 14, end: 19.7 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Yini leya?” kubuza uKhaya, ekhomba into engaqondakali eyayisemhlabathini.", start: 0, end: 7 },
  ],
  [
    { text: "Phakathi kwamatshe nokhula, kwakunento encane, eyindilinga, ekhazimulayo.", start: 8, end: 13 },
    { text: "Igobolondo lalo lalicwebezela njengothingo, ngathi liqukethe ukukhanya kwelanga nenyanga ngesikhathi esisodwa.", start: 14, end: 19.7 },
  ]
]
    }
};
  const { paragraphs } = transcripts[language];

  return(
    <section className="page">
     <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image8} alt="Page 8" className="page-image-8" />
        ) : (
          <img src={Image8_8} alt="Page 8" className="page-image-8-8" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const currentTime = currentTimeRef.current;
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