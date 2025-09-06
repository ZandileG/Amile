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
    { text: "“But what about our neighbours? What about my friends?", start: 127, end: 132 },
    { text: "I don’t want to leave Khaya.” said Amile with tears in her eyes.", start: 133, end: 138 },
  ],
  [
    { text: "“I know it’s hard Mimi, but there's no more water,", start: 139, end: 143 },
    { text: "we can’t stay here anymore. Please understand,”", start: 144, end: 147 },
    { text: "said her dad while gently squeezing her hand.", start: 148, end: 152 },
  ],
  [
    { text: "Amile nodded, but she felt a quiet storm growing inside her.", start: 153, end: 158 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Kodwa kuthiwani ngomakhelwane bethu, sizobashiya bebodwa?", start: 127, end: 132 },
    { text: "UKhaya yena?” kusho uAmile egcwel’ izinyembezi emehlweni akhe.", start: 133, end: 138 },
  ],
  [
    { text: "“Ngiyazi ukuthi kunzima Mimi, kodwa aphelile amanzi,", start: 139, end: 143 },
    { text: "ngeke sisakwazi ukuqhubeka noukuhlala lapha.", start: 144, end: 147 },
    { text: "Ngicela uzame ukuqondisisa ngan’ yami,” kusho ubab’wakhe.", start: 148, end: 152 },
  ],
   [
    { text: "UAmile wanqekuzisa ikhanda, kodwa wezwa isivunguvungu esithulile sikhula ngaphakathi kuye.", start: 153, end: 158 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

  return(
    <section className="page-even">
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

    <img src={Image6} alt="Page 6" className="page-image-6" />

      <section className="page-6">6</section>
    </section>
  );
}

export default Page6;