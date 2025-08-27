import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image36 from "../Images/Image36.png";
import "../Styles/Page.css";

function Page36(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "Amile approached Thingo,", start: 132, end: 135 },
    { text: "now a tall, blossoming tree with silver-blue petals and a soft glow pulsing in its trunk.", start: 136, end: 142 },
    { text: "Her eyes sparkled with happiness as she wrapped her arms around it.", start: 143, end: 147 },
  ],
  [
    { text: "“Thank you Thingo,” she whispered,", start: 148, end: 150 },
    { text: "I'm so glad I get to stay here with you.”", start: 151, end: 153 },
  ]
    ],
      end: [
      { text: "The End!"},
    ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wasondela kuThingo,", start: 132, end: 135 },
    { text: "manje eseyisihlahla eside, esinezimbali ezinamacembe aluhlaza okwesibhakabhaka", start: 136, end: 142 },
    { text: "kanye nokukhanya okusuka esiqwini sakhe.", start: 143, end: 147 },
    { text: "Amehlo kaAmile akhazimula ngenjabulo njengoba emgona.", start: 143, end: 147 },
  ],
  [
    { text: "“Ngiyabonga Thingo,” ehleba,", start: 148, end: 150 },
    { text: "“ngiyajabula kakhulu ukuthi ngizokwazi ukuhlala nawe.”", start: 151, end: 153 },
  ]
],
     end: [
      { text: "Isiphetho!"},
    ]
    }
};
    const { paragraphs, end } = transcripts[language];

  return(
    <section className="page">
    <img src={Image36} alt="Page 36" className="page-image-36" />

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

      <section className="end">{end[0].text}</section>

      <section className="page-36">36</section>
    </section>
  );
}

export default Page36;