import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image17 from "../Images/Image17.png";
import "../Styles/Page.css";

function Page17(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "But one afternoon, Amile saw a sprout poking through the soil.", start: 0, end: 3 },
    { text: "Unlike the brittle brown grass around it,", start: 4, end: 9 },
    { text: "this sprout was blue-green and sparkled in the sunlight.", start: 10, end: 12 },
  ],
  [
    { text: "Amile gasped,", start: 0, end: 3 },
    { text: "You’re alive!", start: 4, end: 9 },
    { text: "She ran over to Khaya’s house and brought her over to see it.", start: 10, end: 12 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Kodwa ngenye intambama, uAmile wabona isithombo sihluma emhlabathini.", start: 0, end: 3 },
    { text: "Ngokungafani notshani obunsundu obuzungezile,", start: 4, end: 9 },
    { text: "leli hlumela laliluhlaza okwesibhakabhaka futhi likhazimula elangeni.", start: 10, end: 12 },
  ],
  [
    { text: "Ha, uyaphila!”", start: 13, end: 15 },
    { text: "kusho uAmile ngokumangala.", start: 16, end: 18 },
    { text: "Wagijima wayolanda uKhaya kubo wamletha ukuze ayibone.", start: 16, end: 18 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image17} alt="Page 17" className="page-image" />
     
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentTime >= line.start && currentTime <= line.end;
        return (
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

      <section className="page-17">17</section>
    </section>
  );
}

export default Page17;