import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image22 from "../Images/Image22.png";
import "../Styles/Page.css";

function Page22(){
    const { currentTime } = useContext(MusicContext);
  
  return(
    <section className="page">
      <img src={Image22} alt="Page 22" className="page-image" />

    <section className="page-text">
      <p>On moving day, Amile sneaked out of the house to talk to Thingo.</p>

      <p><q>I don’t want to leave you,</q> she whispered, brushing her fingers 
       gently over one of its leaves. <q>Even though you're just a plant, you’re 
       still my friend. I love talking to you, I love looking after you,</q> 
       she sighed.
      </p>
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

      <section className="page-22">22</section>
    </section>
  );
}

export default Page22;