import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image34 from "../Images/Image34.png";
import Image34_34 from "../Images/Image34-34.png";
import "../Styles/Page.css";

function Page34(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
     const transcripts = {
      en: [
    { text: "After a while,", start: 0, end: 1 },
    { text: "Khaya ran back home to celebrate with her family.", start: 2, end: 5 },
   ],
      zu: [
    { text: "Ngemva kwesikhashana,", start: 0, end: 1 },
    { text: "uKhaya wagijima wabuyela kubo eyobungaza imvula nomndeni wakhe.", start: 2, end: 5 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-even">
      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 34 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image34} alt="Page 34" className="page-image-34" />
      <img src={Image34_34} alt="Page 34" className="page-image-34-34" />

      <section className="page-34">34</section>
    </section>
  );
}

export default Page34;