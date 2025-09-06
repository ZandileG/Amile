import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image19 from "../Images/Image19.png";
import Image19_19 from "../Images/Image19-19.png";
import "../Styles/Page.css";

function Page19(){
  const { currentTime, language, currentPage } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "“Why is it blue?", start: 0, end: 2 },
    { text: "Plants aren't supposed to be blue,” said Khaya.", start: 3, end: 6 },
  ],
  [
    { text: "“I don’t know, maybe this one is special,” said Amile.", start: 7, end: 10 },
    { text: "“I want to name it Thingo,", start: 11, end: 13 },
    { text: "my little rainbow flower” she continued.", start: 14, end: 17 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "Kungani iluhlaza okwesibhakabhaka?", start: 0, end: 2 },
    { text: "Izitshalo akufanele zibe nombala onje,” kusho uKhaya.", start: 3, end: 6 },
  ],
  [
    { text: "“Angazi, mhlawumbe lena ihlukile,” kusho uAmile.", start: 7, end: 10 },
    { text: "“Ngifuna ukuyiqamba igama elithi Thingo,", start: 11, end: 13 },
    { text: "ngoba enemibala emihle,” eqhubeka.", start: 14, end: 17 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
   <section className="page-odd">
      <img src={Image19} alt="Page 19" className="page-image-19" />
      <img src={Image19_19} alt="Page 19" className="page-image-19-19" />

    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentPage === 19 && currentTime >= line.start && currentTime <= line.end;
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