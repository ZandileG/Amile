import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image9 from "../Images/Image9.png";
import "../Styles/Page.css";

function Page9(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "Amile picked it up, cupped it in her hands and gasped,", start: 26, end: 31 },
    { text: "“It looks like a seed.”", start: 32, end: 36 },
  ],
  [
    { text: "“It’s so pretty,” said Khaya.", start: 37, end: 41 },
  ],
  [
    { text: "“It really is,” Amile agreed.", start: 42, end: 46 },
    { text: "She held it gently in her hands then said,", start: 47, end: 50 },
    { text: "“I think we should plant it and see what kind of flower it becomes.”", start: 51, end: 55 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UAmile wayicosha, wayifaka ezandleni zakhe wase ethi,", start: 26, end: 31 },
    { text: "“Ibukeka njengembewu.”", start: 32, end: 36 },
  ],
  [
    { text: "“Yinhle kakhulu,” kusho uKhaya.", start: 37, end: 41 },
  ],
  [
    { text: "uAmile naye wavuma.", start: 42, end: 46 },
    { text: "Wayibamba ngobumnene ezandleni zakhe wabe esethi,", start: 47, end: 50 },
    { text: "“Ngicabanga ukuthi kufanele siyitshale, sizobona ukuthi iba uhlobo luni lwembali.”", start: 51, end: 55 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page">
      <img src={Image9} alt="Page 9" className="page-image-9" />

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

      <section className="page-9">9</section>
    </section>
  );
}

export default Page9;