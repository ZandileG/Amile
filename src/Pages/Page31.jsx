import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image31 from "../Images/Image31.png";
import Image31_31 from "../Images/Image31-31.png";
import "../Styles/Page.css";

function Page31(){
  const { currentTime, Zulu, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "People poured into the streets.", start: 0, end: 3 },
    { text: "Children squealed.", start: 4, end: 5 },
    { text: "The river trickled.", start: 6, end: 7 },
    { text: "Trees swayed.", start: 8, end: 9 },
    { text: "Birds sang.", start: 10, end: 11 },

  ],
  [
    { text: "The hills turned green again.", start: 12, end: 14 },
    { text: "Flowers pushed through the soil like fireworks.", start: 15, end: 17 },
    { text: "Gardens that hadn’t bloomed in months now burst with colour.", start: 18, end: 22 },
    { text: "The air smelled like new beginnings", start: 23, end: 25 },
    { text: "as if the land itself had been holding its breath for too long.", start: 26, end: 30 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Abantu basemphakathini batheleka emigwaqweni.", start: 0, end: 3 },
    { text: "Izingane zamemeza.", start: 4, end: 5 },
    { text: "Umfula wagcwala.", start: 6, end: 7 },
    { text: "Izihlahla zanyakaza.", start: 8, end: 9 },
    { text: "Kwacula izinyoni.", start: 10, end: 11 },
  ],
  [
    { text: "Amagquma aphenduka abe luhlaza futhi.", start: 12, end: 14 },
    { text: "Izimbali zaqhuma emhlabathini njengeziqhumane.", start: 15, end: 17 },
    { text: "Izingadi ezingazange ziqhakaze ezinyangeni eziningi manje zase ziqhakaza ngemibala.", start: 18, end: 22 },
    { text: "Umoya wawunuka njengesiqalo esisha,", start: 23, end: 25 },
    { text: "kwangathi umhlaba kade ubambe umphefumulo wawo isikhathi eside.", start: 26, end: 30 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page-odd">
      <img src={Image31} alt="Page 31" className="page-image-31" />
      <img src={Image31_31} alt="Page 31" className="page-image-31-31" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 31 && currentTime >= line.start && currentTime <= line.end;
        return(
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