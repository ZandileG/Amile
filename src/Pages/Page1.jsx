import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image1 from "../Images/Image1.png";
import Image1_1 from "../Images/Image1-1.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page1(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  const [flipped, setFlipped] = useState(true);

  //I want to stop the pages from flipping when the user is clicking on the images
   function stop(e){
    e.stopPropagation();
  //e.preventDefault()
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation){
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  function handleToggle(e){
    stop(e);
    setFlipped((prev) => !prev);
  };

  const transcripts = {
    en: {
      dropCap: "O",
      dropCapText: "NCE UPON A TIME,",
      lines: [
    { text: "in a distant land named Dumakude,", start: 0, end: 4 },
    { text: "there were green hills, where you would see mountain goats grazing.", start: 5, end: 9 },
    { text: "There were clear rivers where little fishes and frogs used to play.", start: 10, end: 14 },
    { text: "There was also a neighbourhood that was full of life,", start: 15, end: 19 },
    { text: "where joy was shared, and every moment was a reason to celebrate.", start: 20, end: 24 },
  ]
},
  zu: {
    dropCap: "K",
    dropCapText: "WASUKASUKELA,",
    lines: [
    { text: "ezweni elikude elibizwa Dumakude,", start: 0, end: 4 },
    { text: "kwakunamagquma aluhlaza, lapho wawungabona khona izimbuzi zasentabeni zidla.", start: 5, end: 11 },
    { text: "Kwakunemifula ecwebile lapho kuvame ukudlala khona izinhlanzana namaxoxo.", start: 12, end: 19 },
    { text: "Kwakukhona nomphakathi owawusebenzisa umzuzu ngamunye ukubungaza impilo.", start: 20, end: 24 },
  ]
}
  };
    const { dropCap, dropCapText, lines } = transcripts[language];

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