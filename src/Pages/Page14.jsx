import React, { useContext, useState } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image14 from "../Images/Image14.png";
import Image14_14 from "../Images/Image14-14.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page14(){
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
      en: [
    { text: "Unnoticed by them,", start: 0, end: 2 },
    { text: "a soft glow shimmered across the ground where the seed had been planted.", start: 3, end: 6.9 },
   ],
      zu: [
    { text: "Benganakile,", start: 0, end: 2 },
    { text: "kwavela ukukhanya okukhazimulayo emhlabathini lapho batshale khona imbewu.", start: 2, end: 6.9 },
  ]
};
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 14 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image14} alt="Page 14" className="page-image-14" />
        ) : (
          <img src={Image14_14} alt="Page 14" className="page-image-14-14" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>

      <section className="even">14</section>
    </section>
  );
}

export default Page14;