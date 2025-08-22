import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image30 from "../Images/Image30.png";
import "../Styles/Page.css";

function Page30(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "People poured into the streets.", start: 27, end: 30 },
    { text: "Children squealed.", start: 31, end: 34 },
    { text: "The river trickled.", start: 35, end: 37 },
    { text: "Trees swayed.", start: 38, end: 40 },
    { text: "Birds sang.", start: 41, end: 43 },
    { text: "The hills turned green again.", start: 44, end: 47 },
    { text: "Flowers pushed through the soil like fireworks.", start: 48, end: 52 },
    { text: "Gardens that hadn’t bloomed in months now burst with colour.", start: 53, end: 58 },
    { text: "The air smelled like new beginnings", start: 59, end: 63 },
    { text: "as if the land itself had been holding its breath for too long.", start: 64, end: 70 },
  ],
  [
    { text: "Thingo had awakened something in the town,", start: 71, end: 75 },
    { text: "magic that was thought to be gone.", start: 76, end: 78 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Abantu basemphakathini batheleka emigwaqweni.", start: 27, end: 30 },
    { text: "Izingane zamemeza.", start: 31, end: 34 },
    { text: "Umfula wagcwala.", start: 35, end: 37 },
    { text: "Izihlahla zanyakaza.", start: 38, end: 40 },
    { text: "Kwacula izinyoni.", start: 41, end: 43 },
    { text: "Amagquma aphenduka abe luhlaza futhi.", start: 44, end: 47 },
    { text: "Izimbali zaqhuma emhlabathini njengeziqhumane.", start: 48, end: 52 },
    { text: "Izingadi ezingazange ziqhakaze ezinyangeni eziningi manje zase ziqhakaza ngemibala.", start: 53, end: 60 },
    { text: "Umoya wawunuka njengesiqalo esisha,", start: 61, end: 65 },
    { text: "kwangathi umhlaba kade ubambe umphefumulo wawo isikhathi eside.", start: 66, end: 72 },
  ],
  [
    { text: "UThingo wayevuse okuthile eDumakude, umlingo okwakuthiwa awuseko.", start: 73, end: 78 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image30} alt="Page 30" className="page-image-30" />
  
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

      <section className="page-30">30</section>
    </section>
  );
}

export default Page30;