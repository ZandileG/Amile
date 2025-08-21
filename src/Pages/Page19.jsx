import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image19 from "../Images/Image19.png";
import "../Styles/Page.css";

function Page19(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“Why is it blue?", start: 85, end: 88 },
    { text: "Plants aren't supposed to be blue,” said Khaya.", start: 89, end: 94 },
  ],
  [
    { text: "“I don’t know, maybe this one is special,” said Amile.", start: 95, end: 97 },
    { text: "“I want to name it Thingo,", start: 98, end: 100 },
    { text: "my little rainbow flower” she continued.", start: 101, end: 103 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Kungani iluhlaza okwesibhakabhaka?", start: 85, end: 88 },
    { text: "Izitshalo akufanele zibe nombala onje,” kusho uKhaya.", start: 89, end: 94 },
  ],
  [
    { text: "“Angazi, mhlawumbe lena ihlukile,” kusho uAmile.", start: 95, end: 97 },
    { text: "“Ngifuna ukuyiqamba igama elithi Thingo,", start: 98, end: 100 },
    { text: "ngoba enemibala emihle,” eqhubeka.", start: 101, end: 103 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
   <section className="page">
      <img src={Image19} alt="Page 19" className="page-image" />

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

      <section className="page-19">19</section>
    </section>
  );
}

export default Page19;