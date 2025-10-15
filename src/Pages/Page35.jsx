import React, { useState, useEffect } from "react";
import Image35 from "../Images/Image35.png";
import Image35_35 from "../Images/Image35-35.png";
import Star from "../Icons/Star.png";
import "../Styles/Page.css";

function Page35(){
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

  return(
    <section className="page">
    <section className="image-wrapper" onClick={stop} onPointerDown={stop} onMouseDown={stop} onTouchStart={stop}>
     {flipped ? (
          <img src={Image35} alt="Page 35" className="page-image-35" />
        ) : (
          <img src={Image35_35} alt="Page 35" className="page-image-35-35" />
        )}

      <img src={Star} alt="Star" className="star-indicator" onClick={handleToggle} />
      </section>
      <section className="odd">35</section>
    </section>
  );
}

export default Page35;