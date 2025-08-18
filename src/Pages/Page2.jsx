import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image2 from "../Images/Image2.png";
import "../Styles/Page.css";

function Page2(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image2} alt="Page 2" className="page-image" />

      <p className="page-text">One day, a curse fell upon Dumakude. What once poured 
        from the sky became a drizzle, then a whisper, then silence. The roads were 
        cracked and the trees stood like skeletons. The hills were a dull brown and 
        the river that used to hum had dried into a narrow, muddy trail.
      </p>

      <p className="page-chapter">
        {transcript.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="page-2">2</section>
    </section>
  );
}

export default Page2;