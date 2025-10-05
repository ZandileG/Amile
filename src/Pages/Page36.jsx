import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image36 from "../Images/Image36.png";
import Image36_36 from "../Images/Image36-36.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page36(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(true);

  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

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
    { text: "Amile approached Thingo,", start: 0, end: 2 },
    { text: "now a tall, blossoming tree with silver-blue petals and a soft glow pulsing in its trunk.", start: 3, end: 7 },
    { text: "Her eyes sparkled with happiness as she wrapped her arms around it.", start: 8, end: 11 },
  ],
  [
    { text: "“Thank you Thingo,” she whispered,", start: 12, end: 14 },
    { text: "I'm so glad I get to stay here with you!”", start: 15, end: 17 },
  ]
    ],
      end: [
      { text: "The End!"},
    ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wasondela kuThingo,", start: 0, end: 2 },
    { text: "manje eseyisihlahla eside, esinezimbali ezinamacembe aluhlaza okwesibhakabhaka", start: 3, end: 7 },
    { text: "kanye nokukhanya okusuka esiqwini sakhe.", start: 8, end: 11 },
    { text: "Amehlo kaAmile akhazimula ngenjabulo njengoba emgona.", start: 12, end: 14 },
  ],
  [
    { text: "“Ngiyabonga Thingo,” ehleba,", start: 15, end: 17 },
    { text: "“ngiyajabula kakhulu ukuthi ngizokwazi ukuhlala nawe!”", start: 18, end: 20 },
  ]
],
     end: [
      { text: "Isiphetho!"},
    ]
    }
};
    const { paragraphs, end } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
    <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image36} alt="Page 36" className="page-image-36" />
        ) : (
          <img src={Image36_36} alt="Page 36" className="page-image-36-36" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
      
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 36 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="end">{end[0].text}</section>

      <section className="even">36</section>
    </section>
  );
}

export default Page36;