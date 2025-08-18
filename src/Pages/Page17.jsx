import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image17 from "../Images/Image17.png";
import "../Styles/Page.css";

function Page17(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image17} alt="Page 17" className="page-image" />

     <section className="page-text">
      <p>But one afternoon, Amile saw a sprout poking through the soil. Unlike the brittle brown grass around 
       it, this sprout was blue-green and sparkled in the sunlight.</p>
      
      <p>Amile gasped, <q>You’re alive!</q> She ran over to Khaya’s house and brought her over to see it.</p>
     </section>
     
      <section className="page-text">
        {transcript.map((line, i) => {
          const isActive = currentTime >= line.start && currentTime <= line.end;
          return(
            <p key={i} className={isActive ? "highlight" : ""}>
              {line.text}
            </p>
          );
        })}
      </section>

      <section className="page-17">17</section>
    </section>
  );
}

export default Page17;