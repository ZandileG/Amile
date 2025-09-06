import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image31 from "../Images/Image31.png";
import "../Styles/Page.css";

function Page31(){
const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "People poured into the streets.", start: 56, end: 60 },
    { text: "Children squealed.", start: 61, end: 62 },
    { text: "The river trickled.", start: 63, end: 64 },
    { text: "Trees swayed.", start: 65, end: 66 },
    { text: "Birds sang.", start: 67, end: 68 },

  ],
  [
    { text: "The hills turned green again.", start: 69, end: 71 },
    { text: "Flowers pushed through the soil like fireworks.", start: 72, end: 75 },
    { text: "Gardens that hadn’t bloomed in months now burst with colour.", start: 76, end: 80 },
    { text: "The air smelled like new beginnings", start: 81, end: 83 },
    { text: "as if the land itself had been holding its breath for too long.", start: 84, end: 90 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Abantu basemphakathini batheleka emigwaqweni.", start: 56, end: 60 },
    { text: "Izingane zamemeza.", start: 61, end: 62 },
    { text: "Umfula wagcwala.", start: 63, end: 64 },
    { text: "Izihlahla zanyakaza.", start: 65, end: 66 },
    { text: "Kwacula izinyoni.", start: 67, end: 68 },
  ],
  [
    { text: "Amagquma aphenduka abe luhlaza futhi.", start: 69, end: 71 },
    { text: "Izimbali zaqhuma emhlabathini njengeziqhumane.", start: 72, end: 75 },
    { text: "Izingadi ezingazange ziqhakaze ezinyangeni eziningi manje zase ziqhakaza ngemibala.", start: 76, end: 80 },
    { text: "Umoya wawunuka njengesiqalo esisha,", start: 81, end: 83 },
    { text: "kwangathi umhlaba kade ubambe umphefumulo wawo isikhathi eside.", start: 84, end: 90 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page-odd">
      <img src={Image31} alt="Page 31" className="page-image-31" />

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

      <section className="page-31">31</section>
    </section>
  );
}

export default Page31;