import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image17 from "../Images/Image17.png";
import Image17_17 from "../Images/Image17-17.png";
import "../Styles/Page.css";

function Page17(){
  const { currentTime, Zulu, language, currentPage } = useContext(MusicContext);
  
    const transcripts = {
      en: [
    { text: "But one afternoon, Amile saw a sprout poking through the soil.", start: 0, end: 5 },
    { text: "Unlike the brittle brown grass around it,", start: 6, end: 9 },
    { text: "this sprout was blue-green and sparkled in the sunlight.", start: 10, end: 13 },
  ],
      zu: [

    { text: "Kodwa ngenye intambama, uAmile wabona isithombo sihluma emhlabathini.", start: 0, end: 5 },
    { text: "Ngokungafani notshani obunsundu obuzungezile,", start: 6, end: 9 },
    { text: "leli hlumela laliluhlaza okwesibhakabhaka futhi likhazimula elangeni.", start: 10, end: 13 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page-odd">
      <img src={Image17} alt="Page 17" className="page-image-17" />
      <img src={Image17_17} alt="Page 17" className={Zulu ? "page-image-small-mobile-17" : "page-image-17-17"} />

    <p className="page-text">
    {transcript.map((line, i) => {
        const isActive = currentPage === 17 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
   </p>

      <section className="page-17">17</section>
    </section>
  );
}

export default Page17;