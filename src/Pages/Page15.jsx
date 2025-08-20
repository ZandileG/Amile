import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image15 from "../Images/Image15.png";
import "../Styles/Page.css";

function Page15(){
  const { currentTime, language } = useContext(MusicContext);
  
  const transcripts = {
     en: {
      dropCap: "E",
      dropCapText: "VERY MORNING,",
      lines:[
    { text: "Amile sneaked outside with a cup of water and poured it over the plant.", start: 0, end: 3 },
    { text: "Her parents would have been angry if they found out,", start: 4, end: 9 },
    { text: "but she couldn’t help it,", start: 10, end: 12 },
    { text: "she needed to know what that seed would become.", start: 13, end: 15 },
    ]
  },
    zu: {
    dropCap: "N",
    dropCapText: "JALO EKUSENI,",
    lines: [
    { text: "uAmile wayenyonyoba ngaphandle nenkomishi yamanzi bese ayithela esitshalweni.", start: 0, end: 3 },
    { text: "Abazali bakhe babeyothukuthela kabi uma bengamthola,", start: 4, end: 9 },
    { text: "kodwa wayengakwazi ukuzibamba,", start: 10, end: 12 },
    { text: "wayedinga ukwazi ukuthi leyo mbewu izoba yini.", start: 13, end: 15 },
      ]
    }
  };
      const { dropCap, dropCapText, lines } = transcripts[language];
  
  return(
    <section className="page">
    <section className="drop-cap-container">
      <section className="drop-cap">{dropCap}</section>
      <section className="drop-cap-text">{dropCapText}</section>
    </section>

      <p className="page-chapter">
        {lines.map((line, i) => {
          const isActive =currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image15} alt="Page 15" className="page-image-1" />
      <section className="page-15">15</section>
    </section>
  );
}

export default Page15;