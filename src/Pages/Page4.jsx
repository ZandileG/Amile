import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image4 from "../Images/Image4.png";
import "../Styles/Page.css";

function Page4(){
  const { currentTime, language } = useContext(MusicContext);
  
      const transcripts = {
        en: [
    { text: "Every evening, Amile sat on the stoep of her house,", start: 76, end: 80 },
    { text: "watching the wind dance with the dust.", start: 81, end: 85 },
    { text: "She missed the scent of damp, red dirt and the gentle growl of thunder", start: 86, end: 90 },
    { text: "which used to give her a little fright, but now, it felt like a song she wanted to hear again.", start: 91, end: 95 },
    { text: "She also missed the days when she and her best friend Khaya splashed around in muddy puddles", start: 96, end: 100 },
    { text: "and played hide-and-seek in the backyard, their laughter rising higher than the clouds.", start: 101, end: 105 },
   ],
      zu: [
    { text: "Njalo kusihlwa, uAmile wayehlala ngaphandle,", start: 76, end: 80 },
    { text: "ebuka umoya udanisa nothuli.", start: 81, end: 85 },
    { text: "Wayekhumbula iphunga lokuswakama, kanye nokuduma okwakuvame ukumethusa kancane,", start: 86, end: 90 },
    { text: "kodwa manje, kwakuyiculo afuna ukulizwa futhi.", start: 91, end: 95 },
    { text: "Wayekhumbula futhi nezinsuku lapho yena nomngane wakhe omkhulu uKhaya bechaphazana odakeni", start: 96, end: 100 },
    { text: "futhi bedlala umacashelana ngemuva kwendlu, uhleko lwabo lukhuphuka ngaphezu kwamafu.", start: 101, end: 105 },
  ]
};
    const transcript = transcripts[language];

  return(
    <section className="page">
      <p className="page-text">
        {transcript.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "} 
            </span>
          );
        })}
      </p>

      <img src={Image4} alt="Page 4" className="page-image" />

      <section className="page-4">4</section>
    </section>
  );
}

export default Page4;