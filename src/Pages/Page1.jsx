import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image1 from "../Images/Image1.png";
import Image1_1 from "../Images/Image1-1.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page1(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(true);

  //I want to force a re-render so that the highlighted text updates in real-time
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

  //I want to stop the pages from flipping when the user is clicking on the images
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
    console.log("Star was clicked!");
  };

  const transcripts = {
    en: {
      dropCap: "O",
      dropCapText: "NCE UPON A TIME,",
      lines: [
    { text: "in a distant land named Dumakude,", start: 0, end: 4.2 },
    { text: "there were green hills, where you would see mountain goats grazing.", start: 4.3, end: 8.0 },
    { text: "There were clear rivers where little fishes and frogs used to play.", start: 8.1, end: 12.2 },
    { text: "There was also a neighbourhood that was full of life,", start: 12.3, end: 15.1 },
    { text: "where joy was shared, and every moment was a reason to celebrate.", start: 15.2, end: 19.4 },
  ]
},
  zu: {
    dropCap: "K",
    dropCapText: "WASUKASUKELA,",
    lines: [
    { text: "ezweni elikude elibizwa Dumakude,", start: 0, end: 4.2 },
    { text: "kwakunamagquma aluhlaza, lapho wawungabona khona izimbuzi zasentabeni zidla.", start: 4.3, end: 8.0 },
    { text: "Kwakunemifula ecwebile lapho kuvame ukudlala khona izinhlanzana namaxoxo.", start: 8.1, end: 12.2 },
    { text: "Kwakukhona nomphakathi owawusebenzisa umzuzu ngamunye ukubungaza impilo.", start: 12.3, end: 15.1 },
  ]
}
  };
    const { dropCap, dropCapText, lines } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">{dropCap}</section>
      <section className="drop-cap-text">{dropCapText}</section>
    </section>

      <p className="page-chapter">
        {lines.map((line, i) => {
        const isActive = currentPage === 1 && currentTime >= line.start && currentTime <= line.end;
       
        return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

     <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image1} alt="Page 1" className="page-image-1" />
        ) : (
          <img src={Image1_1} alt="Page 1" className="page-image-1-1" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
      <section className="odd">1</section>
    </section>
  );
}

export default Page1;