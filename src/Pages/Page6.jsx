import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image6 from "../Images/Image6.png";
import "../Styles/Page.css";

function Page6(){
  const { currentTime, language, currentPage } = useContext(MusicContext);
  
    const transcripts = {
      en: {
        paragraphs: [
  [
    { text: "“But what about our neighbours? What about my friends?", start: 0, end: 4 },
    { text: "I don’t want to leave Khaya.” said Amile with tears in her eyes.", start: 5, end: 9 },
  ],
  [
    { text: "“I know it’s hard Mimi, but there's no more water,", start: 10, end: 14 },
    { text: "we can’t stay here anymore. Please understand,”", start: 15, end: 19 },
    { text: "said her dad while gently squeezing her hand.", start: 20, end: 24 },
  ],
  [
    { text: "Amile nodded, but she felt a quiet storm growing inside her.", start: 25, end: 28 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "“Kodwa kuthiwani ngomakhelwane bethu, sizobashiya bebodwa?", start: 0, end: 4 },
    { text: "UKhaya yena?” kusho uAmile egcwel’ izinyembezi emehlweni akhe.", start: 5, end: 9 },
  ],
  [
    { text: "“Ngiyazi ukuthi kunzima Mimi, kodwa aphelile amanzi,", start: 10, end: 14 },
    { text: "ngeke sisakwazi ukuqhubeka noukuhlala lapha.", start: 15, end: 19 },
    { text: "Ngicela uzame ukuqondisisa ngan’ yami,” kusho ubab’wakhe.", start: 20, end: 24 },
  ],
   [
    { text: "UAmile wanqekuzisa ikhanda, kodwa wezwa isivunguvungu esithulile sikhula ngaphakathi kuye.", start: 25, end: 28 },
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
        const isActive = currentPage === 6 && currentTime >= line.start && currentTime <= line.end;
        return(
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