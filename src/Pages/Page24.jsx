import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image24 from "../Images/Image24.png";
import Image24_24 from "../Images/Image24-24.png";
import "../Styles/Page.css";

function Page24(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "Khaya knew where Amile was,", start: 0, end: 3 },
    { text: "and she showed Amile’s parents where she was hiding.", start: 4, end: 8 },
    { text: "They found her behind the shed, pouring water onto Thingo’s soil.", start: 9, end: 13 },
  ],
  [
    { text: "“Amile,” her dad sighed,", start: 14, end: 15 },
    { text: "“what are you doing?", start: 16, end: 17 },
    { text: "We told you that saving water is important.", start: 18, end: 20 },
    { text: "You can’t be wasting it like this.", start: 21, end: 23 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UKhaya bekazi ukuthi uAmile ukuphi,", start: 0, end: 3 },
    { text: "futhi wakhombisa abazali bakaAmile lapho ayecashe khona.", start: 4, end: 8 },
    { text: "Bamthola ethela amanzi enhlabathini kaThingo.", start: 9, end: 13 },
  ],
    [
    { text: "“Amile,” kusho ubab’ wakhe,", start: 14, end: 15 },
    { text: "“wenzani? Sakutshela ukuthi ukonga amanzi kubalulekile.", start: 16, end: 17 },
    { text: "Awukwazi ukuwachitha kulokhula.” ", start: 18, end: 19 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 24 && currentTime >= line.start && currentTime <= line.end;
        return(
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

    <img src={Image24} alt="Page 24" className="page-image-24" />  
    <img src={Image24_24} alt="Page 24" className="page-image-24-24" />  

      <section className="even">24</section>
    </section>
  );
}

export default Page24;