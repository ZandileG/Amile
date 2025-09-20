import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image4 from "../Images/Image4.png";
import Image4_4 from "../Images/Image4-4.png";
import "../Styles/Page.css";

function Page4(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "Every evening, Amile sat on the stoep of her house,", start: 0, end: 5 },
    { text: "watching the wind dance with the dust.", start: 6, end: 9 },
    { text: "She missed the scent of damp, red dirt and the gentle growl of thunder,", start: 10, end: 15 },
    { text: "which used to give her a little fright, but now, it felt like a song she longed to hear again.", start: 16, end: 22 },
  ],
  [
    { text: "Amile also missed the days when she and her best friend Khaya splashed around in muddy puddles", start: 23, end: 30 },
    { text: "and played hide-and-seek in the backyard, their laughter rising higher than the clouds.", start: 31, end: 36 },
   ]
  ]
  },
     zu: {
      paragraphs: [
  [
    { text: "Njalo kusihlwa, uAmile wayehlala ngaphandle,", start: 0, end: 5 },
    { text: "ebuka umoya udanisa nothuli.", start: 6, end: 9 },
    { text: "Wayekhumbula iphunga lokuswakama, kanye nokuduma, okwakuvame ukumethusa kancane,", start: 10, end: 15 },
    { text: "kodwa manje, kwakuyiculo wayefisa ukulizwa futhi.", start: 16, end: 22 },
  ],
  [
    { text: "Wayekhumbula futhi nezinsuku lapho yena nomngani wakhe omkhulu uKhaya bechaphazana odakeni", start: 23, end: 30 },
    { text: "futhi bedlala umacashelana ngemuva kwendlu, uhleko lwabo lukhuphuka ngaphezu kwamafu.", start: 31, end: 36 },
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
        const isActive = currentPage === 4 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "} 
            </span>
        );
      })}
    </p>
    ))}
    </section>
      <img src={Image4} alt="Page 4" className="page-image-4" />
      <img src={Image4_4} alt="Page 4" className="page-image-4-4" />
      
      <section className="even">4</section>
    </section>
  );
}

export default Page4;