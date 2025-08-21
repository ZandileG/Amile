import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image6 from "../Images/Image6.png";
import "../Styles/Page.css";

function Page6(){
  const { currentTime, language } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "“But what about our neighbours? What about my friends?", start: 131, end: 135 },
    { text: "I don’t want to leave Khaya.” said Amile with tears in her eyes.", start: 136, end: 140 },
  ],
  [
    { text: "“I know it’s hard Mimi, but we can’t stay here anymore. Please understand,”", start: 141, end: 145 },
    { text: "said her dad while gently squeezing her hand.", start: 146, end: 150 },
  ],
  [
    { text: "Amile nodded, but she felt a quiet storm growing inside her.", start: 151, end: 155 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Kodwa kuthiwani ngomakhelwane bethu, sizobashiya bebodwa?", start: 131, end: 135 },
    { text: "UKhaya yena?” kusho uAmile egcwel’ izinyembezi emehlweni akhe.", start: 136, end: 140 },
  ],
  [
    { text: "“Ngiyazi ukuthi kunzima Mimi, kodwa ngeke sisakwazi ukuqhubeka noukuhlala lapha.", start: 141, end: 145 },
    { text: "Ngicela uzame ukuqondisisa ngan’ yami,” kusho ubab’wakhe.", start: 146, end: 150 },
  ],
   [
    { text: "UAmile wanqekuzisa ikhanda, kodwa wezwa isivunguvungu esithulile sikhula ngaphakathi kuye.", start: 151, end: 155 },
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

    <img src={Image6} alt="Page 6" className="page-image" />

      <section className="page-6">6</section>
    </section>
  );
}

export default Page6;