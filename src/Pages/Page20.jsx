import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image20 from "../Images/Image20.png";
import "../Styles/Page.css";

function Page20(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

     const transcripts = {
      en: [
    { text: "“I hope we don’t get in trouble for this” said Khaya shaking her head.", start: 0, end: 5 },
   ],
      zu: [
    { text: "“Ngiyethemba ukuthi ngeke singene enkingeni ngalokhu,” kusho uKhaya, enikina ikhanda.", start: 0, end: 5 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-even">
      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 20 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image20} alt="Page 20" className="page-image-20" />

      <section className="page-20">20</section>
    </section>
  );
}

export default Page20;